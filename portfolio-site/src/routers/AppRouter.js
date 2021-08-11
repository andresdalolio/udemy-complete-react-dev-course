import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItem';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/portfolio" component={PortfolioPage} exact/>
                <Route path="/portfolio/:id" component={PortfolioItem}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;