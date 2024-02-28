import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import DevelopedProject from '@components/home/DevelopedProject';
import './DevelopedProjectList.css';

gsap.registerPlugin(ScrollTrigger);

const DevelopedProjectList = () => {
    const projects = [
        ['Quantum Cloud', 'https://github.com/rodyherrera/Quantum/'],
        ['CodexDrake', 'https://github.com/rodyherrera/CodexDrake/'],
        ['ZendaJS', 'https://github.com/rodyherrera/ZendaJS/'],
        ['Lovelace AI', 'https://github.com/rodyherrera/Lovelace/']
    ];

    useEffect(() => {
        gsap.fromTo('.Developed-Project-Container', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.Developed-Project-List', 
                start: 'top 80%' 
              } 
        });
    }, []);

    return (
        <section className='Developed-Project-List-Container'>
            <article className='Developed-Project-List-Header-Container'>
                <h3 className='Developed-Project-List-Header-Title'>Selected Works</h3>
            </article>
            <article className='Developed-Project-List'>
                {projects.map(([ title, website ], index) => (
                    <DevelopedProject key={index} title={title} website={website} />
                ))}
            </article>
        </section>
    );
};

export default DevelopedProjectList;