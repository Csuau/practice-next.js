import ContactList from "../../components/ContactList"
import React from "react";

export default {
    title: "Modules/contactList",
    component: ContactList,
}
export const Default = () => (

    <section className=" py-xxl">
        <div className="container py-xxl ">
            <ContactList/>
        </div>
    </section>
)