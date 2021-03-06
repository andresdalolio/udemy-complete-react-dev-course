import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <ExpenseDashboardPage/>
                </Route>
                <Route path="/create">
                    <AddExpensePage/>
                </Route>
                <Route path="/edit/:id">
                    <EditExpensePage/>
                </Route>
                <Route path="/help">
                    <HelpPage/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;