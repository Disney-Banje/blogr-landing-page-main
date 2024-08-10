
function SectionTwo() {
    return (
        <section className="h-screen md:h-fit bg-[url('./src/assets/images/bg-pattern-circles.svg')] bg-veryDarkBlue bg-bottom bg-cover md:bg-left-bottom bg-no-repeat rounded-tr-[90px] rounded-bl-[90px] flex flex-col justify-center items-center text-center md:text-start text-text">
            <div className="relative mx-6 md:my-24 grid md:grid-cols-2 md:gap-32 md:items-center max-w-7xl">
                <div>
                <img src="./src/assets/images/illustration-phones.svg" alt="" className="absolute -top-[450px] md:-top-56 left-0 right-0 mx-auto md:mx-0 md:left-0"/>
                </div>
                <article className="mt-24 md:mt-0 md:col-start-2">
                    <h3 className="mb-5 text-3xl md:text-4xl">State of the Art Infrastructure</h3>
                    <p className="text-footer-text font-normal">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instatly, no matter where your readers are, keeping your site competitive.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default SectionTwo;