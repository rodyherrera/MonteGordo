import { useState, useEffect } from 'react';

const useThemeColor = (initialThemeColor) => {
    const [themeColor, setThemeColor] = useState(initialThemeColor);

    const extractHSLColor = (colorString) => {
        return colorString
            // Remove non-numeric characters except comma and period
            .replace(/[^\d,.]/g, '')
            .split(',')
            // Convert to numbers
            .map(Number); 
    };

    const animationTimerHandler = (metaThemeColor, initialHSL, targetHSL) => {
        const duration = 300; 
        const steps = 60; 
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            if(progress >= 1) clearInterval(timer);

            const interpolatedHSL = initialHSL.map((initialValue, index) => {
                const targetValue = parseFloat(targetHSL[index]);
                const difference = targetValue - parseFloat(initialValue);
                return parseFloat(initialValue) + difference * progress;
            });

            const interpolatedColor = `hsl(${interpolatedHSL[0]}, ${interpolatedHSL[1]}%, ${interpolatedHSL[2]}%)`;
            metaThemeColor.setAttribute('content', interpolatedColor);
        }, stepDuration);
    };

    useEffect(() => {
        if(!themeColor) return;
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if(!initialThemeColor) initialThemeColor = metaThemeColor.getAttribute('content')

        const initialHSL = extractHSLColor(initialThemeColor);
        const targetHSL = extractHSLColor(themeColor);

        if(!initialHSL || !targetHSL) return;

        const timer = animationTimerHandler(metaThemeColor, initialHSL, targetHSL);

        return () => clearInterval(timer);
    }, [themeColor]);

    return [themeColor, setThemeColor];
};

export default useThemeColor;
