import React from 'react';
import DevelopedProject from '@components/home/DevelopedProject';
import './DevelopedProjectList.css';

const DevelopedProjectList = () => {
    const projects = [
        ['Quantum Cloud', 'https://github.com/rodyherrera/Quantum/'],
        ['CodexDrake', 'https://github.com/rodyherrera/CodexDrake/'],
        ['ZendaJS', 'https://github.com/rodyherrera/ZendaJS/'],
        ['Lovelace AI', 'https://github.com/rodyherrera/Lovelace/']
    ];

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