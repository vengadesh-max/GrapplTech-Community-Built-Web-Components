import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./landingPage.css"

const MyImage = ({ image, className }) => (
    <LazyLoadImage
        alt=""
        src={image}
        className={className}
        width={'200vw'}
        effect="blur"
    />
);

export default MyImage;