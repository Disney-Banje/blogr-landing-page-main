
function Button({ children, design }) {
    if (design) {
        return (
            <button className="bg-veryLightRedCtaHoverBg">{children}</button>
        )
    }
    return (
        <button className="border-r-lightRed">{children}</button>
    )
}

export default Button;