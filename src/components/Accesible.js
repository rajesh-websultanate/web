import React from 'react'
import device01 from "../images/device01.png"
import device02 from "../images/device02.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Accordions() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
    };


    const accordian = (value) => {

        const removeActiveClassTab = document.querySelectorAll(`[data-tab]`)
        removeActiveClassTab.forEach((el) => {
            el.classList.remove("active")
        })
        const getAccordianTab = document.querySelector(`[data-tab=${value}]`)
        if (getAccordianTab) {
            getAccordianTab.classList.add("active")
        }


        const removeActiveClass = document.querySelectorAll(`[data-accordian]`)
        removeActiveClass.forEach((el) => {
            el.classList.remove("active")
        })

        // add active class on click 
        const getAccordian = document.querySelector(`[data-accordian=${value}]`)
        if (getAccordian) {
            getAccordian.classList.add("active")
        }
    }

    return (
        <div className="container mx-auto p-5">
            <Carousel responsive={responsive}
             swipeable={true}
             draggable={true}
             infinite={true}
             autoPlay={true}
             transitionDuration={700}
             autoPlaySpeed={6000}
             containerClass="carousel-container"
             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
                <div className="grid grid-cols-2 gap-20">
                    <div>
                        <div className="heading mb-12 font-bold">Accesible from anywhere</div>
                        <div className="accordion max-w-md">
                            <div className="h5 mb-5 font-bold flex justify-between active" data-tab="one" onClick={() => accordian('one')}>Customer Portal <span className="accordian-arrow"></span></div>
                            <div data-accordian="one" className="active mb-5">
                                <p className="text-light">Access your profile from anywhere in the world. Keep up to date on your genealogy, check your status, and keep all your important family documents in one secure place.</p>
                            </div>
                            <div className="h5 mb-7 font-bold  flex justify-between py-5 border-top-1 border-bottom-1" data-tab="two" onClick={() => accordian('two')}>Family Tree <span className="accordian-arrow"></span></div>
                            <div data-accordian="two">
                                <p className="text-light mb-16">Automatically built from your DNA relationships. It’s easy. It’s convenient. It’s just a click away.</p>
                            </div>
                            <button className="btn-primary mt-8">SIGN UP NOW</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <img src={device01} alt="" className="img-responsive" />
                    </div>
                </div>

                {/* slide 2 */}
                <div className="grid grid-cols-2 gap-20">
                    <div>
                        <div className="heading mb-12 font-bold">Accesible from anywhere</div>
                        <div className="accordion max-w-md">
                            <div className="h5 mb-5 font-bold flex justify-between" data-tab="one" onClick={() => accordian('three')}>Customer Portal <span className="accordian-arrow"></span></div>
                            <div data-accordian="three" className="mb-5">
                                <p className="text-light">Access your profile from anywhere in the world. Keep up to date on your genealogy, check your status, and keep all your important family documents in one secure place.</p>
                            </div>
                            <div className="h5 mb-7 font-bold  flex justify-between py-5 border-top-1 border-bottom-1 active" data-tab="four" onClick={() => accordian('four')}>Family Tree <span className="accordian-arrow"></span></div>
                            <div data-accordian="two" className="active">
                                <p className="text-light mb-16">Automatically built from your DNA relationships. It’s easy. It’s convenient. It’s just a click away.</p>
                            </div>
                            <button className="btn-primary mt-8">SIGN UP NOW</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <img src={device02} alt="" className="img-responsive" />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
