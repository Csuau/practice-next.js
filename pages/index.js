import Base from '../Layouts/Base'
import MainHero from "../components/MainHero";
import Visor360 from "../components/Visor360";
import Tabs from "../components/Tabs";
import CardsInfo from "../components/CardsInfo";

const PageMetasI18n = {
    meta_title: 'Centro Médico',
    meta_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    meta_robots: 'index,follow'
}

const Home = () => {
    return (
        <Base PageMetasI18n={PageMetasI18n}>
            <MainHero title={'Salud y Trabajo'} subtitle={'EL EQUILIBRIO PERSONAL'}/>
            <CardsInfo/>
            <Visor360/>
            <Tabs/>
        </Base>
    )
}
export default Home