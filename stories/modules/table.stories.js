import Table from "../../components/Table"
import React from "react";

const head = ['Código', 'Denominación', 'Duración', 'Precio', 'Programa']
const body = [
    ['CM001', 'ALÉRGENOS ALIMENTARIOS', '10 horas', '70 €', {
        text: 'Descargar', href: '#', extraClass: 'btn--primary_link'
    }, {
        text: 'Comprar', href: '#', extraClass: 'btn--secondary_link'
    }],
    ['CM002', 'CURSO BÁSICO', '50 horas', '120 €', {
        text: 'Descargar', href: '#', extraClass: 'btn--primary_link'
    }, {
        text: 'Comprar', href: '#', extraClass: 'btn--secondary_link'
    }],
    ['CM003', 'RIESGOS LABORALES', '5 horas', '50 €', {
        text: 'Descargar', href: '#', extraClass: 'btn--primary_link'
    }, {
        text: 'Comprar', href: '#', extraClass: 'btn--secondary_link'
    }]
]

export default {
    title: "Modules/table",
    component: Table,
}
export const Default = () => (
    <section className=" py-xxl">
        <div className="container py-xxl ox-auto">
            <Table body={body} head={head}/>
        </div>
    </section>
)