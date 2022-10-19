import ContactList from "../../components/ContactList"
import React from "react";
import {fakeOffices} from "../../data/fakeOffices";

export default {
    title: "Modules/contactList",
    component: ContactList,
}
export const Default = () => (
    <ContactList offices={fakeOffices}/>
)