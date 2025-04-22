import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats';
import News from './News.';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';



function HomePage() {
    return (  
        <>
            <Hero />
            <Awards />
            <Stats />
            <News/>
            <Education />   
            <OpenAccount />
        </>
    );
}

export default HomePage;
