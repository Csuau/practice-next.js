import Base from '../Layouts/Base'
import MainHero from "../components/MainHero";
import FormContact from "../components/FormContact";
import ContactList from "../components/ContactList";
import {fakeOffices} from "../data/fakeOffices";

const PageMetasI18n = {
    meta_title: 'Centro Médico - Contacto',
    meta_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    meta_robots: 'index,follow'
}

const Contact = () => {
    return (
        <Base PageMetasI18n={PageMetasI18n}>
            <MainHero/>
            <FormContact/>
            <ContactList offices={fakeOffices}/>
        </Base>

    )
}
export default Contact