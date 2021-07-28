import React from 'react'
import Slider from '../HeroSlider/Components/Slider'
import "./home.css"
const HomeContent = () => {
    return (
        <>
            <Slider />
            <section className="homepage">
                <h1 className="homepage-title">
                    Spring 2020 collection
                </h1>
                <div className="homepage-category-section">
                    <div className="homepage-left-category-section">

                        <div className="homepage-left-col-1" >
                            <div className="homepage-left-img-holder"></div>

                            <a href="/" className="homepage-category-link">
                                <h1 className="homepage-category-title">
                                    Women
                                </h1>
                            </a>
                        </div>
                        <br /><br /><br />

                        <div className="homepage-left-col-2">
                            <div className="homepage-left-col2-1">
                                <a href="/" className="homepage-category-link-2">
                                    <h1 className="homepage-category-title">
                                        Women
                                    </h1>
                                </a>
                            </div>
                            <div className="homepage-left-col2-2">
                                <h1>maham</h1>
                            </div>
                        </div>

                    </div>
                    <div className="homepage-right-category-section">
                        <div className="homepage-right-col-1">

                        </div>
                        <div className="homepage-right-col-2">
                            <a href="/">
                                <h1 className="homepage-category-title">
                                    Women
                                </h1>
                            </a>
                        </div>
                        <div className="homepage-right-col-3">
                            <a href="/">
                                <h1 className="homepage-category-title">
                                    Women
                                </h1>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br /><br /><br />
            
        </>
    )
}
export default HomeContent