import Base from "../../Layouts/Base";
import BasicContent from "../../components/BasicContent";
import {fakeText} from "../../data/fakeText";
import CardInfo from "../../components/CardInfo";
import MainHero from "../../components/MainHero";

const PageMetasI18n = {
    meta_title: 'Centro Médico - Servicios',
    meta_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    meta_robots: 'index,follow'
}

const Services = () => {
    return (
        <Base PageMetasI18n={PageMetasI18n}>
            <MainHero/>
            <BasicContent title='Servicios' text={fakeText}/>
            <section className=" py-xxl">
                <div className="container grid gap-xs ">
                    <CardInfo title="Prevención Riesgos Laborales"
                              resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                              link="/servicios/riesgos-laborales"
                              img="/images/riesgos-laborales.png"
                              color="secondary"
                    />
                    <CardInfo title="Medicina del trabajo"
                              resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                              link="/servicios/medicina-trabajo"
                              img="/images/medicina-trabajo.png"
                              color="tertiary"
                    />

                </div>
            </section>
        </Base>
    )
}
export default Services