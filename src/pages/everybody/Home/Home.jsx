import React from 'react';
import Marquee from 'react-fast-marquee';
import { BsArrowDownRight } from 'react-icons/bs';
import './Home.css';

const HomePage = () => {

    return (
        <main id='Home-Page-Main'>
            <section id='Home-Page-Header-Container'>

            </section>

            <section id='Home-Page-Body-Container'>
                <h1 id='Home-Page-Author'>
                    <Marquee speed={90}>Rodolfo Herrera</Marquee>
                </h1>
            </section>

            <section id='Home-Page-Footer-Container'>
                <article id='Home-Page-Footer-Talent-Container'>
                    <h2 id='Home-Page-Footer-Talent'>
                        <span>Full Stack</span>
                        <span>Software Developer</span>
                    </h2>
                </article>

                <i id='Home-Page-Footer-Arrow-Container' onClick={() => window.open('https://github.com/rodyherrera/')}>
                    <BsArrowDownRight />
                </i>
            </section>
        </main>
    );
};

export default HomePage;