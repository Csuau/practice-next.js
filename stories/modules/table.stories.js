import Table from "../../components/Table"
import React from "react";
import {fakeBody, fakeHead} from "../../data/fakeTable";


export default {
    title: "Modules/table",
    component: Table,
}
export const Default = () => (
    <section className=" py-xxl">
        <div className="container py-xxl ox-auto">
            <Table head={fakeHead} body={fakeBody}/>
        </div>
    </section>
)