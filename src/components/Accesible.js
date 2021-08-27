import React, { useRef } from 'react'
import device01 from "../images/device01.png"
import device02 from "../images/device02.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Accordions() {

    const slider = useRef(null);

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container-full mx-auto px-24 lg:px-4 xl:pl-28 xl:pr-36 hidden lg:block">
            <Slider {...settings} ref={slider}>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <div className="text-lg sm:text-2xl md:text-3xl lg:heading mb-16 font-bold mt-10">Accesible from anywhere</div>
                            <div className="text-lg md:h5 mb-5 font-bold flex justify-between active cursor-pointer">Customer Portal <span className="slick-arrow active"></span></div>
                            <div className="my-7">
                                <p className="text-light max-w-xs lg:max-w-md">Access your profile from anywhere in the world. Keep up to date on your genealogy, check your status, and keep all your important family documents in one secure place.</p>
                            </div>
                            <div className="text-lg md:h5 font-bold  flex justify-between py-7 border-top-1 border-bottom-1 cursor-pointer" onClick={() => slider?.current?.slickNext()}>Family Tree <span className="slick-arrow"></span></div>
                            <button className="btn-primary mt-16">SIGN UP NOW</button>
                        </div>
                        <div className="flex items-center justify-center lg:justify-end">
                            <img src={device01} alt="" className="img-slick" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <div className="text-lg sm:text-2xl md:text-3xl lg:heading mb-16 font-bold mt-10">Accesible from anywhere</div>
                            <div className="text-lg md:h5 pb-7 font-bold flex justify-between active cursor-pointer" onClick={() => slider?.current?.slickNext()}>Customer Portal <span className="slick-arrow"></span></div>
                            <div className="text-lg md:h5 font-bold  flex justify-between pt-7 border-top-1 cursor-pointer">Family Tree <span className="slick-arrow active"></span></div>
                            <div className="py-7 border-bottom-1">
                                <p className="text-light max-w-xs lg:max-w-md">Automatically built from your DNA relationships. It’s easy. It’s convenient. It’s just a click away.</p>
                            </div>
                            <button className="btn-primary  mt-16">SIGN UP NOW</button>
                        </div>
                        <div className="flex items-centerjustify-center lg:justify-end">
                            <img src={device02} alt="" className="img-slick" />
                        </div>
                    </div>
                </div>
            </Slider>            
        </div>
    )
}
