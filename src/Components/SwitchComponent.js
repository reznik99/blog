import "./SwitchComponent.css"

function SwitchComponent(props) {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {props.label}
            <label className="switch">
                <input type="checkbox" id="checkbox_theme" onChange={props.onChange} checked={props.checked} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default SwitchComponent