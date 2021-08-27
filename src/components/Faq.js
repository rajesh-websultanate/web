import React from 'react'
import qa from '../images/qa.png'
import { Link } from 'react-router-dom'

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
        <div className="container-full mx-auto sm:px-4 xl:px-4-3 lg:mt-40 xl:mt-14-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-10 lg:gap-8rem">
                <div className="flex justify-between flex-col lg:max-w-md mb-14 lg:mb-0 sm:px-0 px-4">
                    <div className="">
                        <div className="text-2xl md:text-3xl landing-3 lg:heading mb-4 sm:mb-8 font-bold lg:max-w-xs">Questions? Find Them Here</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at egestas ornare ac magna dignissim commodo.</p>
                    </div>
                    <img src={qa} alt="" className="img-qa mt-6 md:mt-0" />
                </div>
                <div className="accordion faq lg:px-0">
                    <div className="text-lg md:h5 cursor-pointer font-bold flex justify-between active hover:text-light focus:text-light px-3" data-accordion-tab="five" onClick={() => accordian02('five')}>What are the implications of having dual citizenship?</div>
                    <div data-accordion-content="five" className="active text-light lg:max-w-md px-3">The implications will be the existence of a double legal bond, since people with dual nationality will be nationals of two countries at the same time, enjoying the full legal status of nationals of both States.</div>
                    <div className="border-bottom-1"></div>

                    <div className="text-lg md:h5 cursor-pointer font-bold flex justify-between py-6 sm:py-10 hover:text-light focus:text-light px-3" data-accordion-tab="six" onClick={() => accordian02('six')}>What are the services of Sefar Universal? </div>
                    <div data-accordion-content="six" className="text-light lg:max-w-sm px-3">The implications will be the existence of a double legal bond, since people with dual nationality will be nationals of two countries at the same time, enjoying the full legal status of nationals of both States.</div>
                    <div className="border-bottom-1"></div>

                    <div className="text-lg md:h5 cursor-pointer font-bold flex justify-between py-6 sm:py-10 hover:text-light focus:text-light px-3" data-accordion-tab="seven" onClick={() => accordian02('seven')}>Does the United States of America allow dual citizenship?</div>
                    <div data-accordion-content="seven" className="text-light lg:max-w-md px-3">The implications will be the existence of a double legal bond, since people with dual nationality will be nationals of two countries at the same time, enjoying the full legal status of nationals of both States.</div>
                    <div className="border-bottom-1"></div>
                    <p className="text-base text-light mt-11 sm:mt-12 md:mt-10 mx-14 sm:mx-3 font-bold">Can’t find what you are looking for? <b><Link to="/" className="text-dark underline">Check them out here</Link></b></p>                     
                </div>
            </div>
        </div>
    )
}
