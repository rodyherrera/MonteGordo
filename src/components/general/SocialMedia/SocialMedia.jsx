import React, { useEffect, useRef } from 'react';
import { PiGithubLogoLight } from 'react-icons/pi';
import { RiNpmjsLine } from 'react-icons/ri';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { CiLinkedin } from 'react-icons/ci';
import './SocialMedia.css';

gsap.registerPlugin(ScrollTrigger);

const SocialMedia = () => {
    const iconRefs = useRef([]);

    useEffect(() => {
        iconRefs.current.forEach((icon, index) => {
            const animation = gsap.fromTo(icon, {
                x: -50,
                opacity: 0
            }, {
                x: 0, 
                opacity: 1,
                duration: 0.5,
                delay: index * 0.1, 
                ease: 'power3.out',
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: '.Social-Media-Container'
                }
            });
    
            animation.eventCallback('onComplete', () => {
                gsap.to(icon, {
                    scale: 1.1,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power1.inOut'
                });
            });
        });
    }, []);

    return (
        <div className='Social-Media-Container'>
            {[
                [CiLinkedin, 'https://www.linkedin.com/in/rodolfo-herrera-hernandez-489686229/'],
                [RiNpmjsLine, 'https://www.npmjs.com/~codewithrodi'],
                [PiGithubLogoLight, 'https://www.github.com/rodyherrera/']
            ].map(([ Icon, link ], index) => (
                <i 
                    className='Social-Media-Icon-Container' 
                    key={index}
                    onClick={() => window.open(link, '_blank')}
                    ref={el => iconRefs.current[index] = el}
                >
                    <Icon />
                </i>
            ))}
        </div>
    );
};

export default SocialMedia;