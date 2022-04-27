import React from 'react';
import Layout from '../../components/layout';
import Carousel from '../../components/carousel';
import useCarousel from '../../hooks/use-carousel';

const projects = [
    {
        slug: 'counting-sheep',
        blurb: "For my friend Saeid, Iranian immigrant to Tbilisi and butcher, getting through fourteen whole sheep is a good day. It is tiring work that requires health and discipline. Regular cycling, a breakfast of seven eggs and sheep cheese scrambled in a large copper stock pot. Though he is from an agricultural background, his work is at odds with his secular lifestyle and the people he surrounds himself with in Tbilisi: Western journalists, an American girlfriend, and vegetarians oblivious to the fresh lamb lard in the yellow lentils.\n\nThis set of photos documents the physically demanding and emotional work Saeid performs on a daily basis, from the market to the slaughterhouse, dawn to dusk.",
    },
    {
        slug: 'legacy',
        blurb: "blurbity blurb blurb"
    },
    { slug: "not-a-college-town", blurb: "blurb" },
    { slug: "stretching-glass", blurb: "blurb" }
]

const ProjectLayout = (props) => {
    const { slug } = props.params
    const project = projects.find(p => p.slug === slug)
    const photos = useCarousel(slug);
    console.log('project', project);

    return (
        <Layout>
            <Carousel blurb={project.blurb} photos={photos} />
        </Layout>
    );
}

export default ProjectLayout;
