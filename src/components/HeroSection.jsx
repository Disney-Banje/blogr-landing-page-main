import Button from "./Button";

function HeroSection() {
    return (
        <>
        <h1>A modern publishing platform</h1>
        <p>
            Grow your audience and build you online brand
        </p>

        <section>
            <Button design={true}>Start for Free</Button>
            <Button design={false}>Learn More</Button>
        </section>
        </>
    );
}

export default HeroSection;