import Head from 'next/head'
import React from "react";

import Header from '../components/Header'
import Footer from "../components/Footer";

const Base = ({PageMetasI18n, children}) => {
    return (
        <>
            <Head>
                <title>{PageMetasI18n?.meta_title}</title>
                <meta name="description" content={PageMetasI18n?.meta_description}/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width"/>
                <meta name="robots" content={PageMetasI18n?.meta_robots}/>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Base