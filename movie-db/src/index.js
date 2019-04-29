import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import MovieDashboard from './movieDashboard';
import DetailsPage from './movieDetails';
//import ImgMediaCard from './movieCard';

ReactDOM.render((
<BrowserRouter>
    <Route exact path="/" component={MovieDashboard}/>
        <Route path="/dashboard" component={MovieDashboard}/>
        <Route path="/details" component={DetailsPage}/>
</BrowserRouter>
), document.getElementById('root'));
//ReactDOM.render(<AutoStream />, document.getElementById('root'));