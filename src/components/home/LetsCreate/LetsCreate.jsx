import React from 'react';
import './LetsCreate.css';

const LetsCreate = () => {

    return (
        <section className='Lets-Create-Container'>
            <article className='Lets-Create-Header-Container'>
                <h4 className='Lets-Create-Header-Icon'>🤝</h4>
                <h3 className='Lets-Create-Header-Title'>Let’s create great things.</h3>
            </article>

            <article className='Lets-Create-Footer-Container'>
                <div className='Lets-Create-Footer-Author-Container'>
                    <h5 className='Lets-Create-Author'>
                        <span>Rodolfo Herrera H.</span>
                        <span>Full Stack Software Developer</span>
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