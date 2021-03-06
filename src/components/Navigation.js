import React from 'react'
import logo from "../images/Logo.png"
import Caret from '../images/caret.png'
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="lg:container mx-auto py-5 text-base font-medium text-light px-5 sm:px-10 w-full">
            <div className="grid xl:grid-cols-2">
                <div className="flex items-center mb-5 lg:mb-0 justify-between lg:justify-start">
                    <img src={logo} className="w-28 object-contain" alt="logo" />
                    <nav className="list-none flex group">
                        <Link to="/" className="mx-5 sm:mx-14 hover:text-primary duration-200 font-bold">About Us</Link>
                        <Link to="/" className="hover:text-primary duration-200 font-bold">Our Services</Link>
                    </nav>
                </div>
                <nav className="list-none flex items-center justify-end">
                    <Link to="/" className="hover:text-primary duration-200 font-bold">Sign In</Link>
                    <Link to="/" className="mx-7"><button className="bg-primary font-medium px-5 py-2 hover:bg-white duration-200 border-2 text-dark border-primary hover:text-primary">GET STARTED</button></Link>
                    <Link to="/" className="flex items-center hover:text-primary duration-200">ENG <img src={Caret} alt="" className="mx-1" /></Link>
                </nav>
            </div>
        </div>
    )
}
