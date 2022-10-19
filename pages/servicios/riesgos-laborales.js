import Base from "../../Layouts/Base";
import MainHero from "../../components/MainHero";
import BasicContent from "../../components/BasicContent";
import {fakeText} from "../../data/fakeText";

const PageMetasI18n = {
    meta_title: 'Centro Médico - Riesgos laborales',
    meta_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    meta_robots: 'index,follow'
}

const LaborRisks = () => {
    return (
        <Base PageMetasI18n={PageMetasI18n}>
            <MainHero/>
            <BasicContent title='Prevención Riesgos Laborales' text={fakeText}/>
        </Base>
    )
}
export default LaborRisks