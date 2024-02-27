import React from 'react';
import Marquee from 'react-fast-marquee';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import './Home.css';

const HomePage = () => {

    return (
        <main id='Home-Page-Main'>
            <section id='Home-Page-Welcome-Container'>
                <article id='Home-Page-Header-Container'>
                </article>

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

            <section id='Home-Page-About-Container'>
                <article id='Home-Page-About-Left-Container'>
                    <p id='Home-Page-About-Left'>Boosting brands in the digital age. Let's shake things up and redefine the game. No tricks, always staying ahead, period.</p>
                </article>
                <article id='Home-Page-About-Right-Container'>
                    <p id='Home-Page-About-Right'>Always looking for something new to do, always moving and learning new things. Drawing attention through technology. 🚀✨</p>
                </article>
            </section>

            <section id='Home-Page-Projects-Container'>
                <article id='Home-Page-Projects-Header-Container'>
                    <h3 id='Home-Page-Projects-Header-Title'>Selected Works</h3>
                </article>
                <article id='Home-Page-Projects-List'>
                    {[
                        ['Quantum Cloud', 'https://github.com/rodyherrera/Quantum/'],
                        ['CodexDrake', 'https://github.com/rodyherrera/CodexDrake/'],
                        ['ZendaJS', 'https://github.com/rodyherrera/ZendaJS/'],
                        ['Lovelace AI', 'https://github.com/rodyherrera/Lovelace/']
                    ].map(([ title, website ], index) => (
                        <div 
                            className='Home-Page-Project-Container' 
                            onClick={() => window.open(website, '_blank')}
                            key={index}
                        >
                            <h4 className='Home-Page-Project-Title'>{title}</h4>
                            <i className='Home-Page-Project-Icon-Container'>
                                <BsArrowUpRight />
                            </i>
                        </div>
                    ))}
                </article>
            </section>

            <section id='Home-Page-Create-Container'>
                <article id='Home-Page-Create-Header-Container'>
                    <h4 id='Home-Page-Create-Header-Icon'>🤝</h4>
                    <h3 id='Home-Page-Create-Header-Title'>Let’s create great things.</h3>
                </article>

                <article id='Home-Page-Create-Footer-Container'>
                    <div id='Home-Page-Create-Author-Container'>
                        <h5 id='Home-Page-Create-Author'>
                            <span>Rodolfo Herrera H.</span>
                            <span>Full Stack Software Developer</span>
                        </h5>
                    </div>

                    <div id='Home-Page-Create-Country-Container'>
                        <h5 id='Home-Page-Create-Country'>Hello from Chile, Talca.</h5>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default HomePage;