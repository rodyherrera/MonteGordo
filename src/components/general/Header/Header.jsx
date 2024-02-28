import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import GreenCircleAnim from '@components/general/GreenCircleAnim';
import './Header.css';

const Header = () => {
    const [isInViewRef, isInView] = useInView({ threshold: 0.5 });
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
    const headerItems = [
        ['Rodolfo', 'Herrera H.'],
        ['Based in', 'Chile, Talca'],
        ['Local Time', localTime + ' UTC - 3'],
        ['Current Status', 'Available', GreenCircleAnim],
        ['hello@rodyherrera.com', '+56 9 6420 3112']
    ];

    useEffect(() => {
        if(!isInView || animationPlayed) return;
        gsap.fromTo('.Header-Item-Container', {
            opacity: 0,
            y: -20
        }, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: 'power2.out'
        });
        setAnimationPlayed(true);
    }, [isInView, animationPlayed]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className='Header-Container' ref={isInViewRef}>
            <section className='Header-Wrapper-Container'>
                {headerItems.map(([ top, bottom, Icon ], index) => (
                    <article className='Header-Item-Container' key={index}>
                        <div className='Header-Item-Top-Container'>
                            <span className='Header-Item-Top'>{top}</span>
                        </div>
                        <div className='Header-Item-Bottom-Container'>
                            {Icon && <Icon />}
                            <span className='Header-Item-Bottom'>{bottom}</span>
                        </div>
                    </article>
                ))}
            </section>
        </header>
    );
};

export default Header;