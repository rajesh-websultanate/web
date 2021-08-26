import React from 'react'
import { Link } from "react-router-dom"
import Legal01 from "../images/legal01.png"
import Legal02 from "../images/legal02.png"
import Legal03 from "../images/legal03.png"
import legalarrow01 from "../images/legal-arrow01.png"
import legalarrow02 from "../images/legal-arrow02.png"

export default function LegalServices() {
    return (
        <div className="pt-14 md:pt-36 pb-12 sm:pb-0">
            <div className="text-lg text-3xl md:heading sm:text-center mb-3 sm:mb-5 sm:mb-10 lg:mb-24 font-bold px-4 sm:px-10 md:px-0">LegelServices</div>
            <div className="lg:container-full mx-auto md:px-16">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3">
                    <div className="group">
                        <div className="pt-12 pb-3 sm:py-12 px-8 sm:px-0 box-legal duration-200 w-full sm:w-96 sm:h-98">
                            <img src={Legal01} alt="" className="img-responsive mb-10 sm:mb-14" />
                            <div className="text-lg md:text-2xl mb-5 font-bold">Estate Planning</div>
                            <p className="mb-7	sm:mb-16 md:max-w-xs">Our team of experts can guide and advise you on international planning offering you the best options</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center sm:justify-end">
                                <span className="sm:ml-3 group-hover:opacity-100 sm:opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
                                <img src={legalarrow01} alt="" className="h-4 group-hover:opacity-0 duration-200 ml-3" />
                                <img src={legalarrow02} alt="" className="h-4 group-hover:opacity-100 opacity-0 duration-200" />
                            </Link>
                        </div>
                    </div>
                    <div className="group">
                        <div className="pb-5 sm:py-12 px-8 sm:px-0 box-legal duration-200 w-full sm:w-96 sm:h-98">
                            <img src={Legal02} alt="" className="img-responsive mb-10 sm:mb-14" />
                            <div className="text-lg md:text-2xl mb-5 font-bold">Real State</div>
                            <p className="mb-7 sm:mb-16 md:max-w-xs">We will enable all the proceedings
                                related to the real estate market that the client may need</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center sm:justify-end">
                                <span className="sm:ml-3 group-hover:opacity-100 sm:opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
                                <img src={legalarrow01} alt="" className="h-4 group-hover:opacity-0 duration-200 ml-3" />
                                <img src={legalarrow02} alt="" className="h-4 group-hover:opacity-100 opacity-0 duration-200" />
                            </Link>
                        </div>
                    </div>
                    <div className="group">
                        <div className="pt-12 pb-3 sm:py-12 px-8 sm:px-0 box-legal duration-200 w-full sm:w-96 sm:h-98">
                            <img src={Legal03} alt="" className="img-responsive mb-10 sm:mb-14" />
                            <div className="text-lg md:text-2xl mb-5 font-bold">Insurance & Guarantees</div>
                            <p className="mb-7 sm:mb-16 md:max-w-xs">We provide counseling on the most suitable coverage for the client’s needs related to immigration</p>
                            <Link to="/" className="group-hover:text-primary font-bold flex items-center sm:justify-end">
                                <span className="sm:ml-3 group-hover:opacity-100 sm:opacity-0 duration-200">VIEW WHAT WE PROVIDE</span>
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
