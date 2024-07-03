import React from 'react';
import SectionDetails from './SectionDetails';
import image from '../assets/images/Rectangle24.png'

const WhoAreWe = () => {
    return (
        <div className='flex justify-between mt-24'>
            
            <SectionDetails header='who we are' title="We help to get Solutions" description="We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve."
            buttonText="Learn more"
            ></SectionDetails>

            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default WhoAreWe;