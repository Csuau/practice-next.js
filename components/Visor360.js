import * as styles from './../styles/components/_visor360.module.scss'

const Visor360 = () => {
 
    return (
        <div className={styles['embed-container']}>
            <iframe
                src="https://inba.gob.mx/sitios/recorridos-virtuales/museo-de-arte-moderno/"
                allowFullScreen
            >
            </iframe>
        </div>
    )
}
export default Visor360;