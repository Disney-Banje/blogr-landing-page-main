
function Dropdown({ list }) {
        return (
            <article className=" absolute w-40 mt-4 h-fit rounded-md left-0 px-6 py-7 bg-text text-veryDarkBlue">
            <ul className="flex flex-col gap-2">
                {
                    list.map((item, index) => (
                        <li key={index} className="text-sm font-normal hover:font-medium">
                            <a href="#">{item}</a>
                        </li>
                    ))
                }
            </ul>
        </article>);
}


export default Dropdown;