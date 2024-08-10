
function SectionOne() {
    return (
        <section className="mt-20 mb-80 text-center flex justify-center items-center">
           <div className="mx-6 grid md:grid-cols-2 md:justify-between md:items-center max-w-7xl relative">
            <h2 className="mb-12 text-3xl font-medium text-headingsColor md:col-span-2">Designed for the future</h2>
                <div className="md:col-start-2 md:row-start-2 self-center justify-self-center">
                    <picture>
                        <source srcSet="./src/assets/images/illustration-editor-mobile.svg" media="(max-width: 768px)" />
                        <img src="./src/assets/images/illustration-editor-desktop.svg" alt="illustration editor"  className="md:absolute md:bottom-0 md:top-0 md:my-auto md:-right-96"/>
                        
                    </picture>
                </div>
                
                <div className="md:row-start-2 md:col-start-1 md:text-start md:flex flex-col gap-12">
                    <article className="my-8">
                        <h3 className="text-3xl font-medium text-headingsColor mb-5">Introducing an extensible editor</h3>
                        <p>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                        </p>
                    </article>

                    <article>
                        <h3 className="text-3xl font-medium text-headingsColor mb-5">Robust content management</h3>
                        <p>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, section, format, or flow. With this functionality, you're in full control
                        </p>
                    </article>
                </div>
           </div>
        </section>
    );
}

export default SectionOne;