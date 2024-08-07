
function Button({ children, design }) {
    if (design) {
        return (
            <button className="bg-text text-lightRed font-bold rounded-3xl px-5 py-2">{children}</button>
        )
    }
    return (
        <button className="border-text font-semibold border px-5 py-2 rounded-3xl">{children}</button>
    )
}

export default Button;