import Link from "next/link";
import React from "react";
import Media from "./Media";

const CardInfo = ({title, resum, link, img, color}) => {
    return (
        <article className="shadow card">
            <header className={`bg-${color} d-flex f-direction-row align-items-center p-xxs gap-xs card--header`}>
                <div className="d-flex" style={{
                    height: '70px',
                    width: '70px',
                    position: 'relative'
                }}>
                    <Media
                        loading="lazy"
                        relativePath={img}
                        alt="logo"
                        title="logo"
                        name="logo"
                        layout="fill"
                        objectFit="contain"
                        /*                    height="70px"
                                            width="70px"*/
                    />
                </div>
                <h2 className="heading--5 color-neutral10">{title}</h2>
            </header>
            <div className="bg-neutral20 p-xs card--body">
                <p className="body--medium color-neutral50">{resum}</p>
                <Link href={link}>
                    <a className=" btn btn--neutral50_outline mt-s body--medium">VER MÁS</a>
                </Link>
            </div>
        </article>
    )
}
export default CardInfo