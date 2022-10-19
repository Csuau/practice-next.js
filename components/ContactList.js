const offices = [

    {
        id: 0,
        office: 'Oficina Central',
        title: 'Centro médico Palma',
        address: 'Avda. Aaaa Aaaa,20,bajos',
        locality: '07014-Palma de Mallorca',
        phone: '971 000000',
        phone2: '971 000000',
        fax: '971 000000',
        email: 'palma@centromedico.com'
    },
    {
        id: 1,
        office: 'Delegación Manacor',
        title: 'Centro médico Manacor',
        address: 'C/Aaaaa aa AAaaaaaaa,2,bajos',
        locality: '07500-Manacor',
        phone: '971 000000',
        fax: '971 000000',
        email: 'manacor@centromedico.com'
    },
    {
        id: 2,
        office: 'Delegación Ibiza',
        title: 'Centro médico Ibiza',
        address: 'C/Aaaaaa aa Aaaaaaaa ,6 (Ed.Aaaa)',
        locality: '07800-Ibiza',
        phone: '971 000000',
        fax: '971 000000',
        email: 'ibiza@centromedico.com'

    },
    {
        id: 3,
        office: 'Delegación Menorca',
        title: 'Centro médico Menorca',
        address: 'C/Aaaaaaaaa,78',
        locality: '07701-Mahón',
        phone: '971 000000',
        fax: '971 000000',
        email: 'menorca@centromedico.com'

    }
]

const ContactList = () => {
    return (
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
    )
}
export default ContactList