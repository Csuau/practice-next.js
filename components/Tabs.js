import {useState} from "react";
import * as styles from '../styles/components/_tabs.module.scss'

const Tabs = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    return (
        <section className=" py-xxl">
            <div className="container py-xxl ">
                <div className="d-flex gap-xxxs">
                    <button
                        className={`p-xxs btn btn--normal ${styles.tab} ${checkActive(1, styles.active)}`}
                        onClick={() => handleClick(1)}
                    >
                        NOTICIAS
                    </button>
                    <button
                        className={`p-xxs btn btn--normal ${styles.tab} ${checkActive(2, styles.active)}`}
                        onClick={() => handleClick(2)}
                    >
                        BOLSA DE TRABAJO
                    </button>

                </div>
                <div className="pt-xxxs">
                    <div className={`py-m px-xs ${styles.panel} ${checkActive(1, styles.active)}`}>
                        <div className={`d-flex  align-items-center ${styles["panel--content"]}`}>
                            <p className="body--medium"><span className="color-tertiary">30/09/2022</span> ipsum dolor
                                sit
                                amet,
                                consectetur adipiscing elit. </p>
                            <a className="btn btn--tertiary_link ml-xxxs">Ver notícia</a>
                        </div>

                        <div className={`d-flex  align-items-center ${styles["panel--content"]}`}>
                            <p className="body--medium"><span className="color-tertiary">12/09/2022</span> ipsum dolor
                                sit
                                amet,
                                consectetur adipiscing elit. </p>
                            <a className="btn btn--tertiary_link ml-xxxs">Ver notícia</a>
                        </div>
                    </div>
                    <div className={` py-m px-xs  ${styles.panel} ${checkActive(2, styles.active)}`}>
                        <h3 className="color-tertiary heading--5 py-xxs">Bolsa permanente para Técnicos en Prevención,
                            Médicos
                            del Trabajo y
                            ATS de
                            Empresa.</h3>
                        <p className="body--medium ">Puede enviarnos su currículum a <a
                            className="color-tertiary" href="mailto:1234@centromedico.com">1234@centromedico.com</a> o a
                            cualquiera de nuestras delegaciones.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Tabs;
