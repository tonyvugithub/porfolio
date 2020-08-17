import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import DarkTheme from 'themes/dark';
import LightTheme from 'themes/light';
import PageLayout from './layout/PageLayout';
const LazyHome = lazy(() => import('components/pages/home/Home'));
const LazyBlog = lazy(() => import('components/pages/blog/Blog'));
const LazyContact = lazy(() => import('components/pages/contact/Contact'));

const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100% !important;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

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
              <Route path="/contact" component={LazyContact} />
              <Route exact path="/" component={LazyHome} />
            </Switch>
          </Suspense>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
