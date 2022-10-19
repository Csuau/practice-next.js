import Table from "../../components/Table"
import React from "react";
import {fakeBody, fakeHead} from "../../data/fakeTable";


export default {
    title: "Modules/table",
    component: Table,
}
export const Default = () => (
    <Table head={fakeHead} body={fakeBody}/>
)