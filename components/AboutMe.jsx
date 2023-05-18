import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";

const stats = [
    {stat: "HTML"},
    {stat: "CSS"},
    {stat: "Bootstrap"},
    {stat: "Tailwind"},
    {stat: "Javascript"},
    {stat: "TypeScript"},
    {stat: "Node"},
    {stat: "Git/Github"},
    {stat: "Express"},
    {stat: "MongoDB"},
    {stat: "MySQL"},
    {stat: "React/React Native"},
    {stat: "Next.Js"},
    {stat: "Python"},
    {stat: "Rust"},
]

export default function AboutMe() {
    return (
        <section id="about_me">
            <div className="my-10 md:pb-48">
                <h1 className=" mb-12 sm:mb-8 text-center font-bold text-4xl">
                    Get to know me....
                <hr className="w-20 h-1 my-6 mx-auto bg-slate-400 border-0 rounded" />
                </h1>
                <div className="flex flex-row md:flex-col justify-center align-top items-stretch">
                    {/* first section lives below */}
                    <div className="sm:w-1/2 md:w-full md:mb-12">
                    <h2 className=" text-2xl font-bold mb-8 sm:mb-4 text-center">
                            About
                    </h2>
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
                    
                    <div className="border border-dotted sm:w-1/2 md:w-full">
                    <h2 className=" text-2xl font-bold mb-8 sm:mb-4 text-center">
                            Skills
                    </h2>
                        <div className="flex flex-wrap flex-row justify-center sm:justify-start">
                            {stats.map((item, idx)=>{
                                return <p key={idx} className="bg-cyan-700 px-4 py-2 mr-2 mt-2 font-mono text-gray-400 rounded font-semibold">{item.stat}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}