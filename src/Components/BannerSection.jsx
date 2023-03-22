import React from 'react'
import { Link } from 'react-scroll'
import BannerImg from "../images/hero22.jpg"
const BannerSection = () => {
    return (
        <>
            <section className='min-h-[75vh] flex items-center' id='home'>
                <div className='grid gap-4 md:grid-cols-2'>
                    <div className='flex gap-6 py-6 md:items-start items-center flex-col ' >
                        <h2 className='text-4xl font-bold'><span className='-text--clr-accent-200'>i</span>Tax Easy</h2>
                        <h1 className='md:text-6xl text-4xl font-bold'>We make tax easy!</h1>
                        <p className='text-lg -text--clr-neutral-900 my-2 w-72'>Efficiently file your GST and ITR - stay compliant, stay stress-free!</p>
                        <button className="py-4 cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-full -bg--clr-accent-400 hover:-bg--clr-accent-200"><Link to={"career"} smooth={true} duration={500} offset={-120}>We are hiring</Link></button>
                    </div>
                    <div>
                        <img src={BannerImg} alt="" className='object-cover' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerSection