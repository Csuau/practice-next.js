import Link from "next/link";
import React from "react";
import Media from "./Media";

const CardInfo = () => {
    return (
        <article className="pt-xxxxxl pb-xxl shadow">
            <header className="bg-secondary d-flex f-direction-row align-items-center p-xxs gap-xxxs">
                <Media
                    loading="lazy"
                    relativePath="/images/riesgos-laborales.png"
                    alt="logo"
                    title="logo centro médico"
                    name="logo centro médico"
                    height="70px"
                    width="70px"
                />
                <h2 className="heading--5 color-neutral10">Prevención Riesgos Laborales</h2>
            </header>
            <div className="bg-neutral20 p-xs">
                <p className="body--medium color-neutral50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                    tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat.</p>
                <Link href="/riesgos-laborales">
                    <a className=" btn btn--neutral50_outline mt-s body--medium">VER MÁS</a>
                </Link>
            </div>
        </article>
    )
}
export default CardInfo