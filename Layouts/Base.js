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

                {/*



                <FormContact/>
                <section className=" py-xxl">
                    <div className="container py-xxl ">
                        <ContactList/>
                    </div>
                </section>
                <section className=" py-xxl">
                    <div className="container py-xxl ox-auto">
                        <Table head={fakeHead} body={fakeBody}/>
                    </div>
                </section>
                <BasicContent title={fakeTitle} text={fakeText}/>*/}

            </main>

            <Footer/>
        </>
    )
}

export default Base