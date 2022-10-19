import * as styles from '../styles/components/_table.module.scss'


const Table = ({head, body}) => {
    return (
        <section className=" py-xxl">
            <div className="container py-xxl ox-auto">
                <table className={`w-100 ${styles.table}`}>
                    <thead>
                    <tr className="body--large text--bold">
                        {head.map((item, i) => (<td key={i}><h4>{item}</h4></td>))}
                    </tr>
                    </thead>
                    <tbody>
                    {body.map((item, i) => {
                        return (<tr key={i} className="body--small">
                            {item.map((ele, j) => {
                                if (typeof ele === 'object') {
                                    return (
                                        <td key={j}>
                                            <a href={ele.href} target="_blank" rel="noreferrer"
                                               className={`btn ${ele.extraClass}`}>{ele.text}</a>
                                        </td>)
                                }
                                return (<td key={j}>{ele}</td>)
                            })}
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Table