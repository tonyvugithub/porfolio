import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'themes/GlobalStyle.theme';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* import DarkTheme from 'themes/dark.txt'; */
import LightTheme from 'themes/light';
import PageLayout from './layout/PageLayout';

const LazyHome = lazy(() => import('components/pages/home/Home'));
const LazyBlog = lazy(() => import('components/pages/blog/Blog'));
const LazyContact = lazy(() => import('components/pages/contact/Contact'));

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        toggleTheme: () => {
          setTheme((state) => (state.id === 'light' ? LightTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <PageLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/blog" component={LazyBlog} />
              <Route path="/contact" component={LazyContact} />
              <Route exact path="/" component={LazyHome} />
            </Switch>
          </Suspense>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
