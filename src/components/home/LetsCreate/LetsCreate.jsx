import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'; 
import './LetsCreate.css';

gsap.registerPlugin(ScrollTrigger);

const LetsCreate = () => {
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(headerRef.current, {
            y: -50,
        }, { 
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3, 
            ease: 'power2.out',
            delay: 0.5,
            scrollTrigger: {
                trigger: '.Lets-Create-Container',
                start: 'top 80%'
            }
        });
        gsap.fromTo(footerRef.current, {
            y: 50,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'back.out(1.5)',
            delay: 1,
            scrollTrigger: {
                trigger: '.Lets-Create-Container',
                start: 'top 80%'
            }
        }); 
    }, []);

    return (
        <section className='Lets-Create-Container'>
            <article className='Lets-Create-Header-Container' ref={headerRef}>
                <h4 className='Lets-Create-Header-Icon'>🤝</h4>
                <h3 className='Lets-Create-Header-Title'>Let’s create great things.</h3>
            </article>

            <article className='Lets-Create-Footer-Container' ref={footerRef}>
                <div className='Lets-Create-Footer-Author-Container'>
                    <h5 className='Lets-Create-Author'>
                        <span>Rodolfo Herrera H.</span>
                        <span>Full Stack Software Developer.</span>
                    </h5>
                </div>

                <div className='Lets-Create-Country-Container'>
                    <h5 className='Lets-Create-Country'>Hello from Chile, Talca.</h5>
                </div>
            </article>
        </section>
    );
};

export default LetsCreate;