import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import './DevelopedProject.css';

const DevelopedProject = ({ website, title }) => {

    return (
        <div 
            className='Developed-Project-Container' 
            onClick={() => window.open(website, '_blank')}
        >
            <h4 className='Developed-Project-Title'>{title}</h4>
            <i className='Developed-Project-Icon-Container'>
                <BsArrowUpRight />
            </i>
        </div>
    );
};

export default DevelopedProject;