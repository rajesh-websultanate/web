import React from 'react'
import qa from '../images/qa.png'
import {Link} from 'react-router-dom'

export default function Faq() {

    
    const accordian02 = (value) => {

        const removeActiveClassTab = document.querySelectorAll(`[data-accordion-tab]`)
        removeActiveClassTab.forEach((el) => {
            el.classList.remove("active")
        })
        const getAccordianTab = document.querySelector(`[data-accordion-tab=${value}]`)
        if (getAccordianTab) {
            getAccordianTab.classList.add("active")
        }


        const removeActiveClass = document.querySelectorAll(`[data-accordion-content]`)
        removeActiveClass.forEach((el) => {
            el.classList.remove("active")
        })

        // add active class on click 
        const getAccordian = document.querySelector(`[data-accordion-content=${value}]`)
        if (getAccordian) {
            getAccordian.classList.add("active")
        }
    }

    return (
        <div className="container mx-auto px-5 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 lg:gap-20">
                <div className="flex justify-between flex-col lg:max-w-sm">
                    <div>
                        <div className="text-lg sm:text-2xl md:text-3xl lg:heading mb-4 font-bold">Questions? Find Them Here</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at egestas ornare ac magna dignissim commodo.</p>
                    </div>
                    <img src={qa} alt="" className="img-qa" />
                </div>
                <div className="accordion">
                    <div className="text-lg md:h5 mb-3 cursor-pointer font-bold flex justify-between active hover:text-light focus:text-light" data-accordion-tab="five" onClick={() => accordian02('five')}>What are the implications of having dual citizenship?</div>
                    <div data-accordion-content="five" className="active mb-8 text-light lg:max-w-sm">The implications will be the existence of a double legal bond, since people with dual nationality will be nationals of two countries at the same time, enjoying the full legal status of nationals of both States.</div>

                    <div className="text-lg md:h5 cursor-pointer font-bold flex justify-between border-top-1 border-bottom-1 py-7 hover:text-light focus:text-light" data-accordion-tab="six" onClick={() => accordian02('six')}>What are the services of Sefar Universal? </div>
                    <div data-accordion-content="six" className=" my-5 text-light lg:max-w-sm">The implications will be the existence of a double legal bond, since people with dual nationality will be nationals of two countries at the same time, enjoying the full legal status of nationals of both States.</div>

                    <div className="text-lg md:h5 cursor-pointer font-bold flex justify-between border-bottom-1 py-7 hover:text-light focus:text-light" data-accordion-tab="seven" onClick={() => accordian02('seven')}>Does the United States of America allow dual citizenship?</div>
                    <div data-accordion-content="seven" className=" my-5 text-light lg:max-w-sm">The implications will be the existence of a double legal bond, since people with dual nationality will be nationals of two countries at the same time, enjoying the full legal status of nationals of both States.</div>

                    <p className="text-sm text-light mt-14">Can’t find what you are looking for? <b><Link to="/" className="text-dark underline">Check them out here</Link></b></p>
                </div>
            </div>
        </div>
    )
}
