import BasicContent from "../../components/BasicContent";
import {fakeText, fakeTitle} from "../../data/fakeText";
import React from "react";

export default {
    title: "Modules/basicContent",
    component: BasicContent,
}
export const Default = () => (<BasicContent title={fakeTitle} text={fakeText}/>)