import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>dashboard component</div>
);
const AddExpensePage = () => (
    <div>add expense component</div>
);
const EditExpensePage = () => (
    <div>edit expense component</div>
);
const HelpPage = () => (
    <div>help component</div>
);

const router = (
    <BrowserRouter>
    <div>
        <Route path="/" exact>
            <ExpenseDashboardPage/>
        </Route>
        <Route path="/create" exact>
            <AddExpensePage/>
        </Route>
        <Route path="/edit" exact>
            <EditExpensePage/>
        </Route>
        <Route path="/help" exact>
            <HelpPage/>
        </Route>
    </div>
    </BrowserRouter>
);

ReactDOM.render(router,document.getElementById('app'));