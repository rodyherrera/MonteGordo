import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SocialMedia from '@components/general/SocialMedia';
import './SimpleAbout.css';

gsap.registerPlugin(ScrollTrigger);

const SimpleAbout = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(leftRef.current, {
            x: -100,
        }, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.Simple-About-Container',
                start: 'top 80%'
            }
        });
        gsap.fromTo(rightRef.current, {
            x: 100,
        }, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.3,
            scrollTrigger: {
                trigger: '.Simple-About-Container',
                start: 'top 80%'
            }
        });
    }, []);

    return (
        <section className='Simple-About-Container'>
            <article className='Simple-About-Left-Container'>
                <SocialMedia />
                <p className='Simple-About-Left' ref={leftRef}>Boosting brands in the digital age. Let's shake things up and redefine the game. No tricks, always staying ahead, period.</p>
            </article>
            <article className='Simple-About-Right-Container'>
                <p className='Simple-About-Right' ref={rightRef}>Always looking for something new to do, always moving and learning new things. Drawing attention through technology. 🚀✨</p>
            </article>
        </section>
    );
};

export default SimpleAbout;