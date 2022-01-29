import './scss/style.scss';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// pages
const Page404 = React.lazy(() => import('./views/pages/page404'))

export default function App() {
  return (
    <Provider store={store}>
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
              <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </Provider>
  );
}
