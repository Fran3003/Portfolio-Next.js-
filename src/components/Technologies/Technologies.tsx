"use client"
import { fadeIn } from "@/utils/motionTransition";
import { motion } from 'framer-motion'
import { Slider } from "./Slider";
import Image from 'next/image'

export function Technologies() {
    return (
        <div className="flex items-center justify-center h-screen">
           
            

            <div className="flex flex-col md:flex-row gap-x-5">
                <div className="flex flex-col text-center md:text-left md:w-[30vw] mb-10">
                    <motion.h1 className="mb-4 text-3xl"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        Tecnologias <span className="text-secondary">que manejo.</span>
                    </motion.h1>
                    <Image src="/avatar.png" priority width="600" height="400" alt="Avatar" />
                </div>

                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <Slider />
                </motion.div>
            </div>
        </div>
    )
}