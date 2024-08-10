import Button from "./Button";

function HeroSection() {
    return (
        <section className="h-screen bg-[url('./src/assets/images/bg-pattern-intro-mobile.svg')] md:bg-[url('./src/assets/images/bg-pattern-intro-desktop.svg')] bg-center bg-lightRed text-text flex flex-col justify-center items-center rounded-bl-[90px]">
        <div className="text-center mx-6 max-w-7xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-5">A modern publishing platform</h1>
            <p className="font-light text-lg md:text-xl">
                Grow your audience and build you online brand
            </p>

            <section className="mt-8 flex justify-center gap-5">
                <Button design={true}>Start for Free</Button>
                <Button design={false}>Learn More</Button>
            </section>
        </div>
        </section>
    );
}

export default HeroSection;