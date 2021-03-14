const Button = ({children, className="btn btn-primary", onClick, type="button", style}) => {
    return (
        <button type={type} onClick={onClick} className={className} style={style}>
            {children}
        </button>
    )
}

export default Button