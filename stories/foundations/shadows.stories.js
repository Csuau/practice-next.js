export default {
    title: "Foundations/Shadows",
};

export const AllShadows = () => (
    <div className="container bg--neutral10">
        <div className="grid p-xxs">
            <div className="px-s py-s color--neutral0 bg--dark shadow">SHADOW</div>
        </div>
        <div className="grid p-xxs">
            <div className="px-s py-s color--neutral0 bg--neutral80 shadow shadow--no_hover">SHADOW NO HOVER</div>
        </div>
    </div>
)
