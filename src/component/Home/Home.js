import React from 'react';
import Carosel from './Carosel/Carosel';
import Exparts from './Exparts/Exparts';
import './Home.css';
import Servises from './Servises/Servises';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Servises></Servises>
            <Exparts></Exparts>

        </div>
    );
};

export default Home;