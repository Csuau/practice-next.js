import Base from '../Layouts/Base'
import MainHero from "../components/MainHero";
import BasicContent from "../components/BasicContent";
import Table from "../components/Table";

import {fakeBody, fakeHead} from "../data/fakeTable";
import {fakeText} from "../data/fakeText";

const Formation = () => {
    return (
        <Base>
            <MainHero/>
            <BasicContent title='Formación' text={fakeText}/>
            <Table head={fakeHead} body={fakeBody}/>
        </Base>

    )
}
export default Formation