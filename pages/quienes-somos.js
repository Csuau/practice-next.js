import Base from '../Layouts/Base'
import BasicContent from "../components/BasicContent";
import {fakeText, fakeTitle} from "../data/fakeText";
import MainHero from "../components/MainHero";
import ContactList from "../components/ContactList";
import {fakeOffices} from "../data/fakeOffices";

const PageMetasI18n = {
    meta_title: 'Centro Médico - Quiénes somos',
    meta_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    meta_robots: 'index,follow'
}

const AboutUs = () => {
    return (
        <Base PageMetasI18n={PageMetasI18n}>
            <MainHero/>
            <BasicContent title={fakeTitle} text={fakeText}/>
            <ContactList offices={fakeOffices}/>
        </Base>
    )
}
export default AboutUs