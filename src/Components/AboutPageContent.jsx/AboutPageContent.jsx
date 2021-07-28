import React from 'react'
import "./about.css"
import BrandData from './BrandsData'
import AboutVideo from './AboutVideo'
import DemoCarousel from './TestimonialSlider'
import '../Css/animations.css'
import '../Css/style.css'
const AboutPageContent = ({ question, answer }) => {
    return (
        <>
            <div className="about-page-header">
                <h5 className="about-page-sub-title">
                    SIMPLY OR WHITE
                </h5>
                <h1 className="about-page-title">
                    Clever & unique ideas
                </h1>
                <p className="about-page-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum commodi, minus laboriosam nostrum animi id quas quidem enim nulla, eaque perspiciatis, doloribus officia odit libero!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum commodi, minus laboriosam nostrum animi id quas quidem enim nulla, eaque perspiciatis, doloribus officia odit libero!

                </p>
            </div>
            <div className="about-page-video">
                <AboutVideo />
            </div>
            <div className="about-page-testimonial">
                <h1 className="about-page-title">
                    Testimonial
                </h1>
                <DemoCarousel />
            </div>
            <div className="about-brands">
            <h1 className="about-brand-title">
                    Our Brands
                </h1>
                <div className="all-brands">
                    {
                        BrandData.map((brand,index)=>(
                        <>
                        <div className="brand" key={brand.id}>
                            <a href={brand.url}>
                            <img src={brand.img} alt={brand.brandName} />
                            </a>
                        
                        </div>
                        </>
                        ))
                    }
                    
                </div>
            </div>
            
        </>
    )
}

export default AboutPageContent