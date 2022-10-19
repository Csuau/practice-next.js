import Base from '../Layouts/Base'
import MainHero from "../components/MainHero";
import Visor360 from "../components/Visor360";
import Tabs from "../components/Tabs";
import CardsInfo from "../components/CardsInfo";

const Home = () => {
    return (
        <Base>
            <MainHero title={'Salud y Trabajo'} subtitle={'EL EQUILIBRIO PERSONAL'}/>
            <CardsInfo/>
            <Visor360/>
            <Tabs/>
        </Base>
    )
}
export default Home