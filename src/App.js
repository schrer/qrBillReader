import './scss/style.scss';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)


// pages
const PageBillReader = React.lazy(() => import('./views/pages/PageBillReader'));
const PageImprint = React.lazy(() => import('./views/pages/PageImprint'));
const PageAbout = React.lazy(() => import('./views/pages/PageAbout'));
const Page404 = React.lazy(() => import('./views/pages/Page404'));

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={loading}>
                    <Routes>
                        <Route path="/*" element={<PageBillReader />} />
                        <Route path="/impressum" element={<PageImprint />} />
                        <Route path="/about" element={<PageAbout />} />
                        <Route path="/404" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}
