import React from 'react'
import { Link } from "react-router-dom"
import Legal01 from "../images/legal01.png"
import Legal02 from "../images/legal02.png"
import Legal03 from "../images/legal03.png"
import legalarrow01 from "../images/legal-arrow01.png"
import legalarrow02 from "../images/legal-arrow02.png"

export default function LegalServices() {
    return (
        <div className="bg-gray py-5 sm:py-10 lg:py-12">
            <div className="text-lg sm:text-2xl md:text-3xl lg:heading text-center mb-5 sm:mb-10 lg:mb-14 font-bold">LegelServices</div>
            <div className="container mx-auto px-5 sm:px-10">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 xl:gap-0">
                    <div className="group">
                        <div className="p-5 sm:p-10 group-hover:bg-white group-hover:box-legal duration-200 h-full">
                            <img src={Legal01} alt="" className="img-responsive mb-9" />
                            <div className="text-lg md:h4 mb-4 font-bold">Estate Planning</div>
                            <p className="mb-8">Our team of experts can guide and advise you on international planning offering you the best options</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center justify-end">
                                <span className="ml-3 group-hover:opacity-100 opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
                                <img src={legalarrow01} alt="" className="h-4 group-hover:opacity-0 duration-200 ml-3" />
                                <img src={legalarrow02} alt="" className="h-4 group-hover:opacity-100 opacity-0 duration-200" />
                            </Link>
                        </div>
                    </div>
                    <div className="group">
                    <div className="p-5 sm:p-10 group-hover:bg-white group-hover:box-legal duration-200">
                            <img src={Legal02} alt="" className="img-responsive mb-9" />
                            <div className="text-lg md:h4 mb-4 font-bold">Real State</div>
                            <p className="mb-14">We will enable all the proceedings
                            related to the real estate market that the client may need</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center justify-end">
                                <span className="ml-3 group-hover:opacity-100 opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
                                <img src={legalarrow01} alt="" className="h-4 group-hover:opacity-0 duration-200 ml-3" />
                                <img src={legalarrow02} alt="" className="h-4 group-hover:opacity-100 opacity-0 duration-200" />
                            </Link>
                        </div>
                    </div>
                    <div className="group">
                        <div className="p-5 sm:p-10 group-hover:bg-white group-hover:box-legal duration-200">
                            <img src={Legal03} alt="" className="img-responsive mb-9" />
                            <div className="text-lg md:h4 mb-4 font-bold">Insurance & Guarantees</div>
                            <p className="mb-10">We provide counseling on the most suitable coverage for the client’s needs related to immigration</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center justify-end">
                                <span className="ml-3 group-hover:opacity-100 opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
                                <img src={legalarrow01} alt="" className="h-4 group-hover:opacity-0 duration-200 ml-3" />
                                <img src={legalarrow02} alt="" className="h-4 group-hover:opacity-100 opacity-0 duration-200" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
