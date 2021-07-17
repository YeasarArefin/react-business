import React from 'react';
import Common from './Common';

const Home = () => {

    const image = "https://ksdevware.com/classroom/img/log.svg";

    return (

        <>

            <Common
                name='Grow your business with'
                imgsrc={image}
                visit='/service'
                btnname='Get Started'
            />

        </>

    );

};

export default Home;
