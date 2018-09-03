import React from 'react';
import './../App.css';


const PortfolioItem = (props) => {
    return(
        <a href={props.Url} target="_blank">
        <div className="portitemcontainer">
            <div className="portfolioitem_titlebar">{String(props.Title).toUpperCase()}</div>
            <div className="portfolioitem_content">
                <div className="portfolioitem_pic"><img src={`/img/${props.Image}`} alt=""/></div>
                <div className="portfolioitem_description">{props.Description}</div>
            </div>
        </div>
        <div className="portfolioitem_footer">
            {
                props.Tech.map(item => {
                    return <div className="technology"><div className="techcircle"></div>{item}</div>
                })
            }
        </div>
        </a>
    );
}

export default PortfolioItem;