'use client'
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from "@/components/Site";
import Port from "@/components/Port";
import Contact from "@/components/Contact";
import Skip from "@/components/Skip";
import Smooth from '@/utils/smooth';
import link from "@/utils/link";

export default function Home(){
    useEffect(()=>{
        Smooth()
        link()
    },[])

    return(
        <>
            <Skip/>
            <Header/>
            <main id="main" role="main">
                <Intro/>
                <Skill/>
                <Site/>
                <Port/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}