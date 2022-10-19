import Base from '../Layouts/Base'
import BasicContent from "../components/BasicContent";
import {fakeText, fakeTitle} from "../data/fakeText";
import MainHero from "../components/MainHero";
import ContactList from "../components/ContactList";
import {fakeOffices} from "../data/fakeOffices";

const AboutUs = () => {
    return (
        <Base>
            <MainHero/>
            <BasicContent title={fakeTitle} text={fakeText}/>
            <ContactList offices={fakeOffices}/>
        </Base>
    )
}
export default AboutUs