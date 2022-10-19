import * as styles from './../styles/components/_visor360.module.scss'

const Visor360 = () => {
    return (
        <section className=" py-xxl">
            <div className="container">
                <div className={styles['embed-container']}>
                    <iframe
                        src="https://inba.gob.mx/sitios/recorridos-virtuales/museo-de-arte-moderno/"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </section>
    )
}
export default Visor360;