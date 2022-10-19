import MarkdownComponent from "./MarkdownComponent";

const BasicContent = ({title, text}) => {
    return (
        <section className="py-l">
            <div className="container">
                <h2 className="heading--2 mb-m">{title}</h2>
                {text && (<MarkdownComponent text={text}/>)}
            </div>
        </section>
    )
}

export default BasicContent