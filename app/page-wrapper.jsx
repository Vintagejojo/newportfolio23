"use client";

import { motion, useScroll } from "framer-motion";


export default function Pagewrapper({children}) {

    const { scrollYProgress } = useScroll();
    <>
        
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        >
            {children}
        </motion.div>
            
        
    </>

}