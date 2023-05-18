"use client"
import React from "react";
import {Link} from "react-scroll/modules"
import Image from "next/image";
import {HiArrowDown} from "react-icons/hi"


export default function Hero() {
    return (
        <section>
            <div className="flex flex-col text-center items-center justify-center my-6 py-9 sm:py-30 md:flex-row md:space-x-4 md:text-left md:py-40">
                <div className="md:w-1/2 md:mt-2" >
                    <Image className="rounded-full" src="/jopic.jpg" alt="my head" width={300} height={300} />    
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hello, I'm Jordan.</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I'm a{" "}
                        <span className="font-semibold text-teal-600">
                            Full Stack Engineer{" "}
                        </span>
                        descending into madness....one line of code at a time
                    </p>
                </div>
                
            </div>
            <div className="flex flex-row justify-center">
                    <Link
                        to="about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <HiArrowDown size={35} className="animate-bounce"/>
                    </Link>
                </div>
        </section>
    )
}