import Base from '../Layouts/Base'
import MainHero from "../components/MainHero";
import BasicContent from "../components/BasicContent";
import Table from "../components/Table";

import {fakeBody, fakeHead} from "../data/fakeTable";
import {fakeText} from "../data/fakeText";

const PageMetasI18n = {
    meta_title: 'Centro Médico - Formación',
    meta_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    meta_robots: 'index,follow'
}

const Formation = () => {
    return (
        <Base PageMetasI18n={PageMetasI18n}>
            <MainHero/>
            <BasicContent title='Formación' text={fakeText}/>
            <Table head={fakeHead} body={fakeBody}/>
        </Base>

    )
}
export default Formation