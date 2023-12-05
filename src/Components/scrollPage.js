import React, { useRef } from 'react';
import Description from "./description";
import Home from "./home";


const ScrollPage = () => {
    const descPageRef = useRef(null);

    const scrollToDescPage = () => {
        descPageRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Home scrollToDescPage={scrollToDescPage} />
            <div ref={descPageRef}>
                <Description />
            </div>
        </div>
    );
};

export default ScrollPage;