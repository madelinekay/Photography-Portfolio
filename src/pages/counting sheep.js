import React from 'react';
import Layout from '../components/layout';
import Carousel from '../components/carousel';

const Projects = () => {

    const blurb = "For my friend Saeid, Iranian immigrant to Tbilisi and butcher, getting through fourteen whole sheep is a good day. It is tiring work that requires health and discipline. Regular cycling, a breakfast of seven eggs and sheep cheese scrambled in a large copper stock pot. Though he is from an agricultural background, his work is at odds with his secular lifestyle and the people he surrounds himself with in Tbilisi: Western journalists, vegetarians, and an American girlfriend for whom he has abandoned his traditional expectations for a relationship. These photos document the physically demanding and emotional work Saeid performs on a daily basis, from the market to the slaughterhouse, dawn to dusk."

    return (
        <>
            <Layout>
                <Carousel blurb={blurb} />
            </Layout>
        </>
    );
};

export default Projects;