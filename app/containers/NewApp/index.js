/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import NewHomePage from 'containers/NewHomePage/Loadable';
import NewHeader from 'components/NewHeader';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

/*
  TODO:
    -> https://reacttraining.com/react-router/web/guides/quick-start
    -> new-app.css -> import './new-app.css' vs css modules -> new-app.module.css -> import styles from './new-app.module.css'
    -> skopiować nowy HomePage
    -> components -> reuywalne komponenty
    -> lazy loading dla komponentów reactowych
*/

import './NewApp.css';

export default function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - Charity activity"
        defaultTitle="Charity activity"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <NewHeader />
      <Switch>
        <Route exact path="/" component={NewHomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </>
  );
}
