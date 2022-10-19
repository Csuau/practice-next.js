import React from "react";
import Link from "next/link"
import {useRouter} from "next/router";


const routes = [
    {
        path: '/',
        label: 'Inicio'
    },
    {
        path: '/quienes-somos',
        label: 'Quiénes somos'
    },
    {
        path: '/formacion',
        label: 'Formación'
    },
    {
        path: '#',
        label: 'Servicios'
    },
    {
        path: '/contacto',
        label: 'Contactar'
    },
 
]


const Menu = ({extraclass}) => {
    const {pathname} = useRouter()

    return (

        <ul className={extraclass}>
            {
                routes.map(({path, label}, i) => (
                    <li key={i}
                        className={`menu--item  d-flex align-items-center px-xxs ${path === pathname && 'active' || ''}`}>
                        <Link
                            href={path}><a
                            className=" d-flex align-items-center color-neutral0  body--medium ">{label}</a></Link>
                    </li>
                ))
            }

        </ul>

    )
}


export default Menu