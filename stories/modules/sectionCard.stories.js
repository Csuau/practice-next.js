import CardInfo from "../../components/CardInfo";

export default {
    title: "Modules/sectionCard",
    component: CardInfo,
}
export const Default = () => (
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
)