import React from 'react'
import { Link } from "react-router-dom"
import Legal01 from "../images/legal01.png"
import Legal02 from "../images/legal02.png"
import Legal03 from "../images/legal03.png"
import legalarrow01 from "../images/legal-arrow01.png"
import legalarrow02 from "../images/legal-arrow02.png"

export default function LegalServices() {
    return (
        <div className="lg:pt-36">
            <div className="text-lg sm:text-2xl md:text-3xl lg:heading text-center mb-5 sm:mb-10 lg:mb-24 font-bold">LegelServices</div>
            <div className="xl:container-full mx-auto px-16">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3">
                    <div className="group">
                        <div className="py-12 px-10 box-legal duration-200 w-96 h-98">
                            <img src={Legal01} alt="" className="img-responsive mb-14" />
                            <div className="text-lg md:text-2xl mb-5 font-bold">Estate Planning</div>
                            <p className="mb-16 md:max-w-xs">Our team of experts can guide and advise you on international planning offering you the best options</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center justify-end">
                                <span className="ml-3 group-hover:opacity-100 opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
                                <img src={legalarrow01} alt="" className="h-4 group-hover:opacity-0 duration-200 ml-3" />
                                <img src={legalarrow02} alt="" className="h-4 group-hover:opacity-100 opacity-0 duration-200" />
                            </Link>
                        </div>
                    </div>
                    <div className="group">
                        <div className="py-12 px-10 box-legal duration-200 w-96 h-98">
                            <img src={Legal02} alt="" className="img-responsive  mb-14" />
                            <div className="text-lg md:text-2xl mb-5 font-bold">Real State</div>
                            <p className="mb-16 md:max-w-xs">We will enable all the proceedings
                                related to the real estate market that the client may need</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center justify-end">
                                <span className="ml-3 group-hover:opacity-100 opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
                                <img src={legalarrow01} alt="" className="h-4 group-hover:opacity-0 duration-200 ml-3" />
                                <img src={legalarrow02} alt="" className="h-4 group-hover:opacity-100 opacity-0 duration-200" />
                            </Link>
                        </div>
                    </div>
                    <div className="group">
                        <div className="py-12 px-10 box-legal duration-200 w-96 h-98">
                            <img src={Legal03} alt="" className="img-responsive  mb-14" />
                            <div className="text-lg md:text-2xl mb-5 font-bold">Insurance & Guarantees</div>
                            <p className="mb-16 md:max-w-xs">We provide counseling on the most suitable coverage for the client’s needs related to immigration</p>
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
