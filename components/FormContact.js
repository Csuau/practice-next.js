import * as styles from '../styles/components/_formContact.module.scss'

const FormContact = () => {
    return (
        <section className={`container ${styles.form} `}>
            <div className="py-xxl">
                <h2 className="pb-s heading--3">Formulario de contacto</h2>
                <form className="body--small d-flex f-wrap gap-xxxs justify-content-between">
                    <div className={`d-flex f-direction-column  ${styles['form--control']} `}>
                        <label className={` ${styles['form--label']} `} htmlFor="name">Nombre</label>
                        <input className={` ${styles['form--input']} `} id="name" type="text"/>
                    </div>
                    <div className={`d-flex f-direction-column  ${styles['form--control']} `}>
                        <label className={` ${styles['form--label']} `} htmlFor="email">Email </label>
                        <input className={` ${styles['form--input']} `} id="email" type="email"/>
                    </div>
                    <div className={`d-flex f-direction-column  ${styles['form--control']} `}>
                        <label className={` ${styles['form--label']} `} htmlFor="phone">Teléfono </label>
                        <input className={` ${styles['form--input']} `} id="phone" type="tel"/>
                    </div>
                    <div className={`d-flex f-direction-column  ${styles['form--control']} `}>
                        <label className={` ${styles['form--label']} `} htmlFor="location">Localidad </label>
                        <input className={` ${styles['form--input']} `} id="location" type="text"/>
                    </div>
                    <div className={`d-flex f-direction-column  ${styles['form--control']} `}>
                        <label className={` ${styles['form--label']} `} htmlFor="business activity">Actividad de le
                            empresa </label>
                        <input className={` ${styles['form--input']} `} id="business activity" type="text"/>
                    </div>
                    <div className={`d-flex f-direction-column  ${styles['form--control']} `}>
                        <label className={` ${styles['form--label']} `} htmlFor="number workers">Número de
                            trabajadores </label>
                        <input className={` ${styles['form--input']} `} id="number workers" type="number"/>
                    </div>
                    <div className={`d-flex f-direction-column  ${styles['form--control']}  ${styles['w-100']}  `}>
                        <label className={` ${styles['form--label']} `} htmlFor="consult">Consulta </label>
                        <textarea className={` ${styles['form--input']} ${styles['form--textarea']}`} rows="10"
                                  id="consult"/>
                    </div>

                    <div className="d-flex justify-content-end w-100">
                        <button className="btn btn--secondary" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default FormContact