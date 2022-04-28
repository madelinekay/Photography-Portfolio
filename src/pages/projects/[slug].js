import React from 'react';
import Layout from '../../components/layout';
import Carousel from '../../components/carousel';
import useCarousel from '../../hooks/use-carousel';

const projects = [
    {
        slug: 'counting-sheep',
        blurb: "For my friend Saeid, Iranian immigrant to Tbilisi and butcher, getting through fourteen whole sheep is a good day. It is tiring work that requires health and discipline. Regular cycling, a breakfast of seven eggs and sheep cheese scrambled in a large copper stock pot. Though Saeid is from an agricultural background, his work is at odds with his secular lifestyle and the people he surrounds himself with in Tbilisi: Western journalists, an American girlfriend, and vegetarians unaware of the lamb lard in his yellow lentil dish. \n This series documents the physically demanding and emotional work Saeid performs on a daily basis, from the market to the slaughterhouse, dawn to dusk.",
    },
    {
        slug: 'legacy',
        blurb: "My grandmother had fun, so much so that after she had seen and done it all very little remained of her after death: video footage in Japan with Hollywood actors, broken glass from her private studio, and a large waterfront seventies house in foreclosure. \n As the daughter of a successful illustrator from a prosperous family, my grandmother lived her life with a frivolity that I have yet to know. These photographs document, with love and anger, my grandmother’s legacy of no legacy."
    },
    { slug: "not-a-college-town", blurb: "In my small college town of Northampton, MA, industry was more or less replaced by the market of higher education and everything that comes with it: coffee shops, book stores, and enough frequent and reliable public transportation for thousands of transplanted 18-year-olds. After visiting a number of small towns in the area, all of them with colleges, I traveled to Ware to document the industry and culture of a small Western Massachusetts town outside of my college bubble, and antagonistic toward the Five College culture." },
    { slug: "stretching-glass", blurb: "Coming from a family of traditional artists, I was taught that the hand was the primary medium of artistic expression. Eyes were for observing, not expressing, and pictures, therefore, were merely documentation and not art. This belief was so deep-seeded in my family that I was actively discouraged from taking photos. “You’ve got a camera,” my grandmother told me, “it’s your mind and your eyes.” \n This series is about experiencing a slower, more solipsistic art process through the medium of photography. It uses exposure, gesture, and processing techniques to imitate the hand and allow myself greater control over the image." },
    { slug: "out-of-bounds", blurb: "It is a strange thing to discover a blood connection living within 50 miles of you. Even stranger when that connection is your biological father.  For this project I traveled to the Washington coast to get to know my father from the comfort of what has been, and will remain, a non-existent relationship. This series, through photographs of people and place, examines my father’s surroundings from a safe distance and imagines what sort of connections, if any at all, might exist between us." }
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
