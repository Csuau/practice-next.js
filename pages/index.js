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
export default Home