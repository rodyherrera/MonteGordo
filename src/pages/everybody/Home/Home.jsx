import React from 'react';
import Marquee from 'react-fast-marquee';
import LetsCreate from '@components/home/LetsCreate';
import SimpleAbout from '@components/home/SimpleAbout';
import DevelopedProjects from '@components/home/DevelopedProjectList';
import { BsArrowDownRight } from 'react-icons/bs';
import './Home.css';

const HomePage = () => {

    return (
        <main id='Home-Page-Main'>
            <section id='Home-Page-Welcome-Container'>
                <article id='Home-Page-Header-Container' />

                <article id='Home-Page-Body-Container'>
                    <h1 id='Home-Page-Author'>
                        <Marquee speed={90}>Rodolfo Herrera</Marquee>
                    </h1>
                </article>

                <article id='Home-Page-Footer-Container'>
                    <div id='Home-Page-Footer-Talent-Container'>
                        <h2 id='Home-Page-Footer-Talent'>
                            <span>Full Stack</span>
                            <span>Software Developer</span>
                        </h2>
                    </div>

                    <i id='Home-Page-Footer-Arrow-Container' onClick={() => window.open('https://github.com/rodyherrera/')}>
                        <BsArrowDownRight />
                    </i>
                </article>
            </section>

            <SimpleAbout />
            <DevelopedProjects />
            <LetsCreate />
        </main>
    );
};

export default HomePage;