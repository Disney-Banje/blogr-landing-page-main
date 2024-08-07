
function SectionOne() {
    return (
        <section>
            <h2>Designed for the future</h2>
            <picture>
                <source srcSet="./src/assets/images/illustration-editor-mobile.svg" media="(max-width: 768px)" />
                <img src="./src/assets/images/illustration-editor-desktop.svt" alt="illustration editor" />
            </picture>
            
            <article>
                <h3>Introducing an extensible editor</h3>
                <p>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                </p>
            </article>

            <article>
                <h3>Robust content management</h3>
                <p>
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, section, format, or flow. With this functionality, you're in full control
                </p>
            </article>
        </section>
    );
}

export default SectionOne;