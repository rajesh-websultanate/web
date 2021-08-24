import React from 'react'
import logo from "../images/Logo.png"
import {Link} from 'react-router-dom'
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import twt from '../images/twt.png'
import yt from '../images/yt.png'

export default function Footer() {
    return (
        <div className="container mx-auto border-top-1 py-5 sm:py-10 md:py-14 px-5 xl:px-10 md:px-0">
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-10 text-light">
                <div>
                    <img src={logo} className="w-28 object-contain mb-3 sm:mb-0" alt="logo" />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
                    <div>
                        <p className="font-bold text-dark">Phone</p>
                        <p className="my-3"><span className="font-bold">US:</span> <span className="underline">+1 6032621727</span></p>
                        <p className><span className="font-bold">ES:</span> <span className="underline">+34 911980993</span></p>
                    </div>
                    <div>
                        <p className="mb-3 sm:mt-9"><span className="font-bold">VE:</span> <span className="underline">+58 2127201170</span></p>
                        <p><span className="font-bold">CO:</span> <span className="underline">+57 0353195843</span></p>
                    </div>
                    <div>
                    <p className="font-bold text-dark">Email</p>
                        <p className="mt-3"><a className="text-gray" href="mailto:info@sefaruniversal.com">info@sefaruniversal.com</a></p>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between items-center text-light mt-3 md:mt-10 xl:mt-16">
                <p className="text-sm mb-3 sm:mb-0">Copyright – 2019 All rights are reserved by SEFAR UNIVERSAL SL.</p>
                <nav className="list-none flex items-center mt-5 sm:mt-10 md:mt-0">
                    <li className="mr-2"><Link to="/" ><img src={fb} alt=""/></Link></li>
                    <li className="mr-2"><Link to="/"><img src={insta} alt=""/></Link></li>
                    <li className="mr-2"><Link to="/"><img src={twt} alt=""/></Link></li>
                    <li className="mr-2"><Link to="/"><img src={yt} alt=""/></Link></li>
                </nav>
            </div>
        </div>
    )
}
