import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'themes/GlobalStyle.theme';
//AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

import DarkTheme from 'themes/dark';
import LightTheme from 'themes/light';
import PageLayout from './layout/PageLayout';

const LazyHome = lazy(() => import('components/pages/home/Home'));
const LazyBlog = lazy(() => import('components/pages/blog/Blog'));

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    AOS.init();
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        toggleTheme: () => {
          setTheme((state) => (state.id === 'light' ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <PageLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/blog" component={LazyBlog} />
              <Route exact path="/" component={LazyHome} />
            </Switch>
          </Suspense>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
