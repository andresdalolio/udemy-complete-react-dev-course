import React from 'react';


const PortfolioItem = (props) => {
    console.log(props);
    return (
        <div>
            This is PortfolioItem: {props.match.params.id}
        </div>
    );
};

export default PortfolioItem;