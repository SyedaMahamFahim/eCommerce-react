import React, { Component } from 'react';
import { ImQuotesRight } from 'react-icons/im';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestimonialData from './TestimonialData'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval ={3000}  showArrows={false} infiniteLoop={true}>

                {

                    TestimonialData.map((slide, index) => (
                        <>
                            <div className="testimonial-slider" key={slide.id}>
                            <div className="testimonial-img">
                                <img src={slide.image} alt="" className="testimonial-img"/>
                            </div>
                            <div className="testimonial-content">
                                <ImQuotesRight style={{ fontSize: "45px" }} />
                                <p className="testimonial-desc">
                                    {slide.testimonial}
                                </p>
                                <h2 className="testimonialer-name">
                                    {slide.name}
                                </h2>
                                <p>{slide.position}</p>
                            </div>
                        </div>
                            </>

        ))
    }


                
            </Carousel>
        );
    }
};
export default DemoCarousel

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
