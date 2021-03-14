const Input = ({label, type="text", id, className, placeholder, name}) => {
    return (
        <div class="form-group">
            <label for={id}>{label}</label>
            <input type={type} class={`form-control ${className}`} name={name} id={id} placeholder={placeholder} />
        </div>
    )
}

export default Input