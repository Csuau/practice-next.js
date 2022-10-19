import Markdown from "markdown-to-jsx";

const MarkdownComponent = ({text}) => {
    return (<Markdown className="body--medium pt-xxs">{text}</Markdown>)
}

export default MarkdownComponent