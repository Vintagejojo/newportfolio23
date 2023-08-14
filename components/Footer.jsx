import React from "react";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function Footer() {
    return (
       <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-100 border-0"/>
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div>© 2023 Made by Jojo</div>
                <div className="flex flex-row items-center justify-center space-x-3">
                    <a href="https://github.com/Vintagejojo" rel="nonreferrer" target="_blank">
                        <BsGithub 
                         className="hover:translate-y-1 transition-transform cursor-pointer bg-sky-900"
                         size={30}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-roland-28a28359" rel="nonreferrer" target="_blank">
                        <BsLinkedin 
                         className="hover:translate-y-1 transition-transform cursor-pointer bg-sky-900"
                         size={30}
                        />
                    </a>
                    <a href="https://twitter.com/rusticjojo?t=lwDfeH_YsB_o3rTeqWfegQ&s=09" rel="nonreferrer" target="_blank">
                        <BsTwitter 
                         className="hover:translate-y-1 transition-transform cursor-pointer bg-sky-900"
                         size={30}
                        />
                    </a>
                </div>
            </div>    
       </footer> 
    )
}