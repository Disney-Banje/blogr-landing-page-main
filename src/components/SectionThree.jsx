
function SectionThree() {
    return (
        <section className="my-20 text-center flex flex-col justify-center items-center relative h-screen">
            <div className="mx-6 max-w-7xl md:grid md:grid-cols-2">
                <picture>
                    <source srcSet="./src/assets/images/illustration-laptop-mobile.svg" media="(max-width: 768px)" />
                    <img src="./src/assets/images/illustration-laptop-desktop.svg" alt="illustration laptop" className="md:absolute md:-left-80 md:bottom-0 md:top-0 md:my-auto"/>
                </picture>

                <div className="md:text-start md:flex md:flex-col md:gap-6">
                    <article className="my-8">
                        <h3 className="text-3xl font-medium text-headingsColor mb-5">Free, open, simple</h3>
                        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    </article>

                    <article className="my-8">
                        <h3 className="text-3xl font-medium text-headingsColor mb-5">Powerful tooling</h3>
                        <p>
                            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default SectionThree;