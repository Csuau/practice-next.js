import {useState} from "react";
import * as styles from './../styles/components/_tags.module.scss'

const Tags = () => {
    console.log("hoLA")
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
    return (
        <>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${checkActive(1, styles.active)}`}
                    onClick={() => handleClick(1)}
                >
                    NOTICIAS
                </button>
                <button
                    className={`${styles.tab} ${checkActive(2, styles.active)}`}
                    onClick={() => handleClick(2)}
                >
                    BOLSA DE TRABAJO
                </button>

            </div>
            <div>
                <div className={`${styles.panel} ${checkActive(1, styles.active)}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis
                        vitae, porttitor lacinia quam.</p>
                </div>
                <div className={`${styles.panel} ${checkActive(2, styles.active)}`}>
                    <p>Nulla lobortis quis massa quis lobortis. Nullam porta semper lorem, vel efficitur augue rutrum
                        quis. Suspendisse potenti.</p>
                </div>
              
            </div>
        </>
    )
}
export default Tags;
