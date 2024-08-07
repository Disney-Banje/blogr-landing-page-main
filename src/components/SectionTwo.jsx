
function SectionTwo() {
    return (
        <section className="h-screen bg-[url('./src/assets/images/bg-pattern-circles.svg')] bg-top bg-no-repeat bg-veryDarkBlue bg-contain relative rounded-tr-[90px] rounded-bl-[90px] flex flex-col justify-center items-center text-center text-text">
            <div className="mx-6">
                <img src="./src/assets/images/illustration-phones.svg" alt="" className="absolute left-0 right-0 mx-auto -top-32"/>
                <article className="mt-24">
                    <h3 className="mb-5 text-3xl">State of the Art Infrastructure</h3>
                    <p className="text-footer-text font-normal">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instatly, no matter where your readers are, keeping your site competitive.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default SectionTwo;