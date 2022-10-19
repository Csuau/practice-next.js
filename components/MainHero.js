const MainHero = ({title, subtitle}) => {
    return (
        <section className="main-hero pt-xxxxxl pb-xxl">
            <div className="container d-flex f-direction-column justify-content-center align-items-center ">
                {!!title && (<h1 className="heading--1 color-primary mb-xxxs">{title}</h1>)}
                {!!subtitle && (<h2 className="heading--4 color-neutral0">{subtitle}</h2>)}
            </div>
        </section>
    )
}
export default MainHero