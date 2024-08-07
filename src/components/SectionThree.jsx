
function SectionThree() {
    return (
        <section>
            <picture>
                <source srcSet="./src/assets/images/illustration-laptop-mobile.svg" media="(max-width: 768px)" />
                <img src=".src/assets/images/illustration-laptop-desktop.svg" alt="illustration laptop" />
            </picture>

            <article>
                <h3>Free, open, simple</h3>
                <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            </article>

            <article>
                <h3>Powerful tooling</h3>
                <p>
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                </p>
            </article>
        </section>
    );
}

export default SectionThree;