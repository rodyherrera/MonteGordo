import React, { useRef, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import LetsCreate from '@components/home/LetsCreate';
import SimpleAbout from '@components/home/SimpleAbout';
import { gsap } from 'gsap';
import { BsArrowDownRight } from 'react-icons/bs';
import { ScrollTrigger } from 'gsap/all';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const authorRef = useRef(null);
    const talentRef = useRef(null);

    useEffect(() => {
        // Author Name Fade-In
        gsap.fromTo(authorRef.current, {
            opacity: 0,
        }, {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#Home-Page-Footer-Container',
                start: 'top 90%'
            }
        });

        // Title Sequence
        gsap.fromTo(talentRef.current.children, {
            opacity: 0,
            y: 100
        }, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: '#Home-Page-Footer-Container',
                start: 'top 90%'
            }
        });

        // Arrow
        gsap.fromTo('#Home-Page-Footer-Arrow-Container', {
            y: 0,
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.7,
            y: 10,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
                trigger: '#Home-Page-Footer-Container',
                start: 'top 90%'
            },
            yoyo: true
        });
    }, []);

    return (
        <main id='Home-Page-Main'>
            <section id='Home-Page-Welcome-Container'>
                <article id='Home-Page-Header-Container' />

                <article id='Home-Page-Body-Container'>
                    <h1 id='Home-Page-Author' ref={authorRef}>
                        <Marquee speed={90}>Rodolfo Herrera</Marquee>
                    </h1>
                </article>

                <article id='Home-Page-Footer-Container'>
                    <div id='Home-Page-Footer-Talent-Container' ref={talentRef}>
                        <h2 id='Home-Page-Footer-Talent'>
                            <span>Full Stack</span>
                            <span>Software Developer</span>
                        </h2>
                    </div>

                    <i 
                        id='Home-Page-Footer-Arrow-Container' 
                        onClick={() => window.open('https://github.com/rodyherrera/')}
                    >
                        <BsArrowDownRight />
                    </i>
                </article>
            </section>

            <SimpleAbout />
            <LetsCreate />
        </main>
    );
};

export default HomePage;