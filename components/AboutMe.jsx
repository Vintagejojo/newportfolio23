import React from "react";
import { motion } from "framer-motion"

export default function AboutMe() {
    return (
        <section id="about_me">
            <div>
                <h1>Get to know me</h1>
                <div className="flex flex-row md:flex-col">
                    {/* first section lives below */}
                    <div>
                        <p>Hey there friends my name is Jordan and I am an
                            <span className="font-bold"> aspiring </span> and
                            <span className="font-bold"> attentive </span> web developer who likes to
                            <span className="font-bold"> tinker. </span> Equal parts Herbalist and Technocrat.
                        </p>
                        <br />
                        <br />
                        <p>
                            USAF Veteran and Gulf States dweller, I've been involved with all things computer and tech for the better part of a decade and a half. I have a wide range of passions and hobbies, but I won't get into all of them here. 
                        </p>
                    </div> 
                    {/* second section dive below */}
                    <div></div>
                </div>
            </div>
        </section>
    )
}