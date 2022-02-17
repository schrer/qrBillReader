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

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// pages
const Page404 = React.lazy(() => import('./views/pages/page404'))

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={loading}>
                    <Routes>
                        <Route path="/*" element={<DefaultLayout />} />
                        <Route path="/impressum" element="" />
                        <Route path="/about" element="" />
                        <Route path="/404" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}
