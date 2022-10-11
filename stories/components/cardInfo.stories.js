import CardInfo from "../../components/CardInfo";
import React from "react";

export default {
    title: "Components/CardInfo",
    component: CardInfo
};

export const primary = () => (
    <div className="container">
        <CardInfo title="Formación"
                  resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  link="formacion"
                  img="/images/formacion.png"
                  color="primary"
        />
    </div>
)

export const secondary = () => (
    <div className="container">
        <CardInfo title="Formación"
                  resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  link="formacion"
                  img="/images/formacion.png"
                  color="secondary"
        />
    </div>
)

export const tertiary = () => (
    <div className="container">
        <CardInfo title="Formación"
                  resum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  link="formacion"
                  img="/images/formacion.png"
                  color="tertiary"
        />
    </div>
)

