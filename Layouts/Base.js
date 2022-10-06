import Head from 'next/head'
import React from "react";

import Header from '../components/Header'


const Base = ({ PageMetasI18n = [] }) => {
    return (
        <>
            {
                PageMetasI18n.length > 0 && (
                    <Head>
                        <title>{PageMetasI18n[0].meta_title}</title>
                        <meta name="description" content={PageMetasI18n[0].meta_description} />
                        <link rel="icon" href="/favicon.ico" />
                        <meta name="viewport" content="width=device-width"/>
                        <meta name="robots" content={PageMetasI18n[0].meta_robots} />


                    </Head>

                )
            }

            <Header />

            <main>

            </main>
        </>
    )
}

export default React.memo(Base)