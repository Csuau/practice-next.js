const ContactList = ({offices}) => {
    return (
        <section className=" py-xxl">
            <div className="container py-xxl ">
                <div className="grid gap-xs">
                    {
                        offices.map(({office, title, address, locality, phone, phone2 = null, fax, email, id}) => (
                            <ul className="body--small d-flex f-direction-column gap-xxxs" key={id}>
                                <li className="body--medium color-secondary text--bold pb-xxxs"> {office} </li>
                                <li>{title}</li>
                                <li>{address}</li>
                                <li>{locality}</li>
                                <li>Fax: {fax}</li>
                                <li>Tel: <a className="color-tertiary" href={`tel:${phone}`}>{phone}</a> {phone2 && (
                                    <a className="color-tertiary" href={`tel:${phone2}`}>- {phone2}</a>)}</li>

                                <li>Email:
                                    <a className="color-tertiary" href={`mailto:${email}`}>{email}</a>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default ContactList