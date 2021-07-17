import React from 'react';
import Common from './Common';

const About = () => {

    const image = "https://www.egnoto.com/wp-content/themes/egnoto/assets/images/cms.svg";

    return (

        <>

            <Common name='Welcome to About page' imgsrc={image} visit='/contact' btnname='Contact Now' />

        </>

    );

};

export default About;