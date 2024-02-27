import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingScreen.css';

const LoadingScreen = ({}) => {
    const loadingScreenRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(loadingScreenRef.current, {
            y: 0
        }, {
            duration: .5,
            y: '-100vh',
            ease: 'power2.out'
        })
    }, []);

    return (
        <div className='Loading-Screen-Container' ref={loadingScreenRef} />
    );
};

export default LoadingScreen;