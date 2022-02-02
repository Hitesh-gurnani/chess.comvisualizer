import React from 'react';
import '../Styles/intro.css'
function Intro(props) {
    return (
        <>
            <div className="loader">
                <span className="loader__element"></span>
                <span className="loader__element"></span>
                <span className="loader__element"></span>
            </div>
        </>
    );
}

export default Intro;