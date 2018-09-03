import React from 'react';
import './../App.css';
import PortfolioItem from './portfolioitem';

const Portfolio = () => {
        return(
            <div>
                <PortfolioItem Tech={['Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'Photoshop']} Image="synthesis.png" Url="https://www.synthesis.gg" Title="Synthesis.gg" Description="Synthesis is a unique way to watch your favorite live game streamers who are playing in the same game instance, at the same time, together. This project uses a Node.js backend with Express and MongoDB providing a RESTful API to the front end, and the front-end is completely in React. This is also https enabled (using certbot) and cloudfare. This could could not be developed properly with mobile in mind due to its nature. All design and development from start to finish was done by myself."/>
                <PortfolioItem Tech={['Node.js', 'Express', 'MySQL', 'Socket.io', 'jQuery', 'Photoshop']} Image="rockandstone.png" Url="http://rockandstone.space" Title="rockandstone.space" Description="Rock and Stone is a websocket (socket.io) based online matchmaking system for the game Deep Rock Galactic. It uses Steam OAuth and the Steam API allowing users to que up in a traditional matchmaking system based on certain criteria. This was developed heavily with websockets to provide a seamless and fast matchmaking experience. DOM manipulation was done entirely in jQuery, although React was an option and I regret not opting for that option for obvious reasons. All design and development from start to finish was done by myself."/>
                <PortfolioItem Tech={['Node.js', 'React', 'Photoshop', 'Cinema4D']} Image="alilla.png" Url="https://www.aaronlilla.com" Title="AaronLilla.com" Description="My personal site I threw together with React and Node.js. Graphics were done in both Photoshop and Cinema4D. I thought it would give an interesting feel to have each page give a different color scheme which is achieved entirely in CSS3 filter (hue) effects. All design and development from start to finish was done by myself."/>
                <div className="expander"></div>
            </div>
        );
}

export default Portfolio;