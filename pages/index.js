import Base from '../Layouts/Base'
import MainHero from "../components/MainHero";
import CardInfo from "../components/CardInfo";
import Visor360 from "../components/Visor360";
import Tabs from "../components/Tabs";

export default function Home() {
    return (
        <Base>
            <MainHero title={'Salud y Trabajo'} subtitle={'EL EQUILIBRIO PERSONAL'}/>
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
        </Base>
    )
}
