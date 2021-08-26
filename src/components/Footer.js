import React from 'react'
import logo from "../images/Logo.png"
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import twt from '../images/twt.png'
import yt from '../images/yt.png'

export default function Footer() {
    return (
        <div className="lg:container-full mx-auto px-4 sm:px-10 lg:px-16 pb-12 md:pb-20">
            <div className="border-top-1 pb-8 sm:pb-12"></div>
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-10 text-light">
                <div>
                    <img src={logo} className="w-24 sm:w-28 object-contain mb-8 md:mb-0" alt="logo" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5">
                    <div>
                        <p className="font-bold text-dark">Phone</p>                        
                        <p className="my-5"><span className="font-bold">US:</span> <span className="underline"><a rel="noreferrer" target='_blank' href="tel:+16032621727">+1 6032621727</a></span></p>
                        <p className><span className="font-bold">ES:</span> <span className="underline"><a rel="noreferrer" target='_blank' href="tel:+34911980993">+34 911980993</a></span></p>
                    </div>
                    <div>
                        <p className="mb-5 mt-10 md:mt-11"><span className="font-bold">VE:</span> <span className="underline"><a rel="noreferrer" target='_blank' href="tel:+582127201170">+58 2127201170</a></span></p>
                        <p><span className="font-bold">CO:</span> <span className="underline"><a target='_blank' rel="noreferrer" href="tel:+570353195843">+57 0353195843</a></span></p>
                    </div>
                    <div>
                    <p className="font-bold text-dark mt-12 md:mt-0">Email</p>
                        <p className="mt-5 sm:mt-4"><a className="text-gray" href="mailto:info@sefaruniversal.com">info@sefaruniversal.com</a></p>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between items-center text-light mt-11 md:mt-24">
                <p className="text-sm mb-3 sm:mb-0 hidden md:block">Copyright – 2019 All rights are reserved by SEFAR UNIVERSAL SL.</p>                
                <nav className="list-none flex items-center md:mr-18">
                    <li className="mr-2.5"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={fb} alt=""/></a></li>
                    <li className="mr-2.5"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><img src={insta} alt=""/></a></li>
                    <li className="mr-2.5"><a target="_blank" rel="noreferrer" href="https://twitter.com/?lang=en"><img src={twt} alt=""/></a></li>
                    <li className="mr-2.5"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/login"><img src={yt} alt=""/></a></li>
                </nav>
                <p className="mt-12 md:hidden">Copyright – 2019 All rights are reserved by SEFAR UNIVERSAL SL.</p>
            </div>
        </div>
    )
}
