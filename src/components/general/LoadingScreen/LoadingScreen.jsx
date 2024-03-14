import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useThemeColor from '@hooks/useThemeColor';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const loadingScreenRef = useRef(null);
    const [_, setThemeColor] = useThemeColor();

    useEffect(() => {
        gsap.fromTo(loadingScreenRef.current, {
            y: 0
        }, {
            onStart: () => setThemeColor('hsl(0, 0%, 84%)'),
            onComplete: () => setThemeColor('hsl(0, 0%, 8%)'),
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