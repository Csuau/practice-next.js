import * as styles from '../styles/components/_formContact.module.scss'
import {useForm} from "react-hook-form";
import {useEffect} from "react";

const FormContact = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <section className={`container ${styles.form} `}>
            <div className="py-xxl">
                <h2 className="pb-s heading--3">Formulario de contacto</h2>
                <form onSubmit={handleSubmit(onSubmit)}
                      className="body--small d-flex f-wrap gap-xxxs justify-content-between">
                    <div
                        className={`d-flex f-direction-column  ${styles['form--control']}  ${errors.name ? styles['form--error'] : ''}`}>
                        <label className={` ${styles['form--label']} `} htmlFor="name">Nombre</label>
                        <input className={` ${styles['form--input']} `} {...register("name", {required: true})}
                               id="name" type="text"/>
                        {errors.name && <span className="color-red">Campo nombre es obligatorio</span>}
                    </div>
                    <div
                        className={`d-flex f-direction-column  ${styles['form--control']}  ${errors.email ? styles['form--error'] : ''}`}>
                        <label className={` ${styles['form--label']} `} htmlFor="email">Email </label>
                        <input
                            className={` ${styles['form--input']} `}
                            {
                                ...register("email",
                                    {
                                        required: true,
                                        pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/,
                                            message: 'Email no válido'
                                        },
                                    })
                            }
                            id="email" type="email"
                        />
                        {errors.email &&
                            <span className="color-red">{errors.email.message || 'Campo email es obligatorio'}</span>}
                    </div>
                    <div
                        className={`d-flex f-direction-column  ${styles['form--control']}  ${errors.phone ? styles['form--error'] : ''}`}>
                        <label className={` ${styles['form--label']} `} htmlFor="phone">Teléfono </label>
                        <input className={` ${styles['form--input']} `} {...register("phone", {required: true})}
                               id="phone" type="tel"/>
                        {errors.phone && <span className="color-red">Campo teléfono es obligatorio</span>}
                    </div>
                    <div
                        className={`d-flex f-direction-column  ${styles['form--control']}  ${errors.location ? styles['form--error'] : ''}`}>
                        <label className={` ${styles['form--label']} `} htmlFor="location">Localidad </label>
                        <input className={` ${styles['form--input']} `} {...register("location", {required: true})}
                               id="location"
                               type="text"/>
                        {errors.location && <span className="color-red">Campo Localidad es obligatorio</span>}
                    </div>
                    <div
                        className={`d-flex f-direction-column  ${styles['form--control']}  ${errors.businessActivity ? styles['form--error'] : ''}`}>
                        <label className={` ${styles['form--label']} `} htmlFor="businessActivity">Actividad de la
                            empresa </label>
                        <input
                            className={` ${styles['form--input']} `} {...register("businessActivity", {required: true})}
                            id="businessActivity" type="text"/>
                        {errors.businessActivity &&
                            <span className="color-red">Campo actividad de la empresa es obligatorio</span>}
                    </div>
                    <div
                        className={`d-flex f-direction-column  ${styles['form--control']}  ${errors.numberWorkers ? styles['form--error'] : ''}`}>
                        <label className={` ${styles['form--label']} `} htmlFor="numberWorkers">Número de
                            trabajadores </label>
                        <input
                            className={` ${styles['form--input']} `} {...register("numberWorkers", {required: true})}
                            id="numberWorkers" type="number"/>
                        {errors.numberWorkers &&
                            <span className="color-red">Campo número de trabajadores es obligatorio</span>}
                    </div>
                    <div
                        className={`d-flex f-direction-column  ${styles['form--control']}  ${styles['w-100']}  ${errors.consult ? styles['form--error'] : ''} `}>
                        <label className={` ${styles['form--label']} `} htmlFor="consult">Consulta </label>
                        <textarea className={` ${styles['form--input']} ${styles['form--textarea']}`}
                                  rows="10"  {...register("consult", {required: true})}
                                  id="consult"/>
                        {errors.consult && <span className="color-red">Campo consulta es obligatorio</span>}
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