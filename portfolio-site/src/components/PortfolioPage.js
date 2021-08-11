import React from 'react';
import { Link } from 'react-router-dom';


const PortfolioPage = () => (
    <div>
        This is Portfolio
        <Link to="/portfolio/1">Item1</Link>
        <Link to="/portfolio/2">Item2</Link>
        <Link to="/portfolio/3">Item3</Link>
    </div>
);

export default PortfolioPage;