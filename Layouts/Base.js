import Head from 'next/head'
import React from "react";

import Header from '../components/Header'
import MainHero from "../components/MainHero";
import CardInfo from "../components/CardInfo";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import ContactList from "../components/ContactList";


const Tabs = React.lazy(() => import(/* webpackChunkName: "component---src-Tabs-js" */ '../components/Tabs'))
const Visor360 = React.lazy(() => import(/* webpackChunkName: "component---src-Visor360-js" */ '../components/Visor360'))

const Base = ({PageMetasI18n = []}) => {
    return (
        <>
            {
                PageMetasI18n.length > 0 && (
                    <Head>
                        <title>{PageMetasI18n[0].meta_title}</title>
                        <meta name="description" content={PageMetasI18n[0].meta_description}/>
                        <link rel="icon" href="/favicon.ico"/>
                        <meta name="viewport" content="width=device-width"/>
                        <meta name="robots" content={PageMetasI18n[0].meta_robots}/>


                    </Head>

                )
            }

            <Header/>

            <main>
                <MainHero/>
                <section className=" py-xxl">
                    <div className="container grid gap-xs ">
                        <CardInfo title="Prevención Riesgos Laborales"
                                  resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                  link="/riesgos-laborales"
                                  img="/images/riesgos-laborales.png"
                                  color="secondary"
                        />
                        <CardInfo title="Medicina del trabajo"
                                  resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                  link="medicina-trabajo"
                                  img="/images/medicina-trabajo.png"
                                  color="tertiary"
                        />
                        <CardInfo title="Formación"
                                  resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                  link="formacion"
                                  img="/images/formacion.png"
                                  color="primary"
                        />

                    </div>
                </section>
                <section className=" py-xxl">
                    <div className="container">
                        <Visor360/>
                    </div>
                </section>
                <section className=" py-xxl">
                    <div className="container py-xxl ">
                        <Tabs/>
                    </div>
                </section>

                <FormContact/>
                <section className=" py-xxl">
                    <div className="container py-xxl ">
                        <ContactList/>
                    </div>
                </section>


            </main>

            <Footer/>
        </>
    )
}

export default Base