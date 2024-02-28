import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import GreenCircleAnim from '@components/general/GreenCircleAnim';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
    const headerItems = [
        ['Rodolfo', 'Herrera H.'],
        ['Based in', 'Chile, Talca'],
        ['Local Time', localTime + ' UTC - 3'],
        ['Current Status', 'Available', GreenCircleAnim],
        ['hello@rodyherrera.com', '+56 9 6420 3112']
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString());
        }, 1000);
        gsap.fromTo('.Header-Item-Container', {
            opacity: 0,
            y: -20
        }, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.Header-Container',
                top: 'start 80%'
            }
        });
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className='Header-Container'>
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