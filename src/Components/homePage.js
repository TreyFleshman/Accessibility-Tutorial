import React from "react";
import Placeholder from "../Images/placeholder.png";

function HomePage() {

    return (
        <section className="homePage">
            <h1>Accessibility</h1> <hr />

            <section className="semantic-html__section">
                <h3></h3>
                <h3>Semantic HTML</h3>
                <p>There are approximately 110 different elements in HTML 5, semantic HTML is about using the correct elements.
                    Semantic HTMl provides the user a better user experience by allowing them a more efficient way to navigate and interact with your site.
                </p>
                <p>
                    <code>&lt;<span className="HTML">div</span>&gt;&lt;<span className="HTML">/div</span>&gt;</code> &#38;
                    <code> &lt;<span className="HTML">span</span>&gt;&lt;<span className="HTML">/span</span>&gt; </code>
                    have no semantic meaning.
                </p>
                <p>
                    <h4>Semantic HTML Landmarks</h4>
                    <code>
                        <ul>
                            <li><code>&lt;<span className="HTML">header</span>&gt;&lt;<span className="HTML">/header</span>&gt;</code></li>
                            <li><code>&lt;<span className="HTML">nav</span>&gt;&lt;<span className="HTML">/nav</span>&gt;</code></li>
                            <li><code>&lt;<span className="HTML">aside</span>&gt;&lt;<span className="HTML">/aside</span>&gt;</code></li>
                            <li><code>&lt;<span className="HTML">main</span>&gt;&lt;<span className="HTML">/main</span>&gt;</code></li>
                            <li><code>&lt;<span className="HTML">section</span>&gt;&lt;<span className="HTML">/section</span>&gt;</code></li>
                            <li><code>&lt;<span className="HTML">footer</span>&gt;&lt;<span className="HTML">/footer</span>&gt;</code></li>
                        </ul>
                        <a className="semantic-btn" href="/semantic-landmarks">Example</a>
                    </code>
                </p>
            </section>

            <section className="aria-label__section">
                <h3>Labels</h3>
                <h4><code>&lt;<span className="HTML">label</span>&gt;</code></h4>
                <p>The <code>&lt;<span className="HTML">label</span>&gt;</code> defines an accessible label for elements like:
                    <ul>
                        <li><code>&lt;<span className="HTML">input</span>&gt;</code>,
                            <code> &lt;<span className="HTML">select</span>&gt;</code>,
                            <code> &lt;<span className="HTML">textarea</span>&gt;</code> or other form related attributes.</li>
                    </ul>
                </p>
                <h4><span className="attribute">Aria-Label</span></h4>
                <p>For elements that do not use the <code>&lt;<span className="HTML">label</span>&gt;</code>, we can add the
                    <span className="attribute"> aria-label</span> attribute to make other elements accessible with a screen readable label.
                </p>
                <p><ul><li>
                    <code>
                        &lt;<span className="HTML">div</span>
                        <span className="attribute"> aria-label</span>=
                        <span className="attribute__value">"This is an example of an aria-label"</span>&gt;
                        &lt;<span className="HTML">/div</span>&gt;
                    </code>
                </li></ul></p>
            </section>

            <section className="btns-links__section">
                <h3>Buttons and links</h3>
                <p> The <code>&lt;<span className="HTML">a</span>&gt;&lt;<span className="HTML">/a</span>&gt; </code>
                    tag should be used when the developer wants to redirect the user to another page or for external links.
                </p>
                <ul><li><a href='#'>This is a link</a></li></ul>
                <p>The <code>&lt;<span className="HTML">button</span>&gt;&lt;<span className="HTML">/button</span>&gt; </code>
                    tag should be used when there is a clickable action that can be performed on the current page.
                </p>
                <ul><li><button>This is a clickable action</button></li></ul>
            </section>

            <section className="role-name-value__section">
                <h3>Accessibility Role, Name &#38; Value</h3>

                <p>In some instances, we may not have a semantic HTML element that fits our needs, or we may have to overcome a technical limitation of the element.
                    In both cases, we need to create a custom element and provide custom controls for it. It is very important in this case to add the role, name and
                    value so that your custom element is accessible.
                </p>

                <h4>Role</h4>
                <p>This <span className="attribute"> role</span> of <span className="attribute__value">"button" </span>
                    tells the user that the intended use of this element is to be a button.
                </p>
                <p>
                    <code>&lt;<span className="HTML">div</span>
                        <span className="attribute"> role</span>=
                        <span className="attribute__value">"button"</span>&gt;&lt;
                        <span className="HTML">/div</span>&gt;
                    </code>
                </p>

                <h4>Name</h4>
                <p>The <span className="attribute"> aria-label</span> of this
                    <code>&lt;<span className="HTML">select</span>&gt;&lt;<span className="HTML">/select</span>&gt; </code>
                    identifies that the &lt;<span className="HTML">select</span>&gt; is referring to the users
                    <span className="attribute__value"> State of residence</span>.
                </p>
                <p>
                    <code>
                        &lt;<span className="HTML">select </span>
                        <span className="attribute">aria-label</span>=
                        <span className="attribute__value">"State of residence" </span>
                        <span className="attribute">name</span>=
                        <span className="attribute__value">"state"</span>&gt;&lt;
                        <span className="HTML">/select</span>&gt;
                    </code>
                </p>

                <h4>Value</h4>
                <p>One example of providing an accessible <span className="attribute"> value</span> of an element is providing an
                    <span className="attribute"> aria-expanded</span> attribute for an accordion element.
                </p>
                <p>
                    <code>
                        &lt;<span className="HTML">div </span>

                        <span className="attribute">role</span>=
                        <span className="attribute__value">"button" </span>
                        <span className="attribute">aria-expanded</span>=
                        <span className="attribute__value">"false"</span>&gt;&lt;
                        <span className="HTML">/div</span>&gt;
                    </code>
                </p>
            </section>

            <section className="color-contrast__section">
                <h3>Color Contrast</h3>
                <p>
                    You can use <a href="https://coolors.co/contrast-checker">Coolors Color Contrast Checker</a> to check if your colors contrast.
                </p>

                <p>
                    <ul>
                        <li style={{paddingBottom: "20px"}}>
                            <span style={{color: "green"}}>Good: </span>
                            <span style={{background: "slateblue", color: "white", padding: "3px" }}>You can read this</span>
                        </li>
                        <li>
                            <span style={{color: "red"}}>Bad: </span>
                            <span style={{background: "green", color: "red", padding: "3px" }}>You have trouble reading this</span>
                        </li>
                    </ul>
                </p>
            </section>

            <section className="image__section">
                <h3>Images</h3>
                <p>Assistive technologies, like a screen reader will ignore the image if there is no <span className="attribute">alt</span> attribute.
                    Without the <span className="attribute">alt</span> attribute, a screen reader may read the file name. This will make no sense, and will confuse the user.
                </p>
                <p><code>
                    <ul>
                        <li>
                            <span style={{ color: "green" }}>Good for accessibility: </span>
                            &lt;<span className="HTML">img </span>
                            <span className="attribute">src</span>=
                            <span className="attribute__value">"placeholder.png" </span>
                            <span className="attribute">alt</span>=
                            <span className="attribute__value">"This is a placeholder image" </span>/&gt;
                            <img className="placeholder" src={Placeholder} alt="Placeholder Image" />
                        </li>
                        <li>
                            <span style={{ color: "red" }}>Bad for accessibility: </span>
                            &lt;<span className="HTML">img </span>
                            <span className="attribute">src</span>=
                            <span className="attribute__value">"placeholder.png" </span>/&gt;
                            <img className="placeholder" src={Placeholder} />
                        </li>
                    </ul>
                </code></p>

                <p>For images that do not use the <code>&lt;<span className="HTML">img</span>&gt;</code> tag, like an icon, you will want to add a <span className="attribute">role</span>=
                    <span className="attribute__value">"img"</span> and <span className="attribute">aria-hidden</span>=<span className="attribute__value">"true" </span>
                    so the screen reader will ignore the icon.
                </p>
                <p>For backgroung images, font icons or <code>&lt;<span className="HTML">svg</span>&gt;</code> you will want to add the
                    <span className="attribute"> role</span>=<span className="attribute__value">"img"</span> and
                    <span className="attribute"> aria-label</span>=<span className="attribute__value">"Label for Image"</span> attributes.
                </p>

                <p>
                    <ul>
                        <li>
                            <code>
                                &lt;<span className="HTML">i </span>
                                <span className="attribute">role</span>=
                                <span className="attribute__value">"img" </span>
                                <span className="attribute">aria-hidden</span>=
                                <span className="attribute__value">"true"</span>&gt;
                                &lt;<span className="HTML">/i</span>&gt;
                            </code>
                        </li>
                        <li>
                            <code>
                                &lt;<span className="HTML">svg </span>
                                <span className="attribute">role</span>=
                                <span className="attribute__value">"img" </span>
                                <span className="attribute">aria-label</span>=
                                <span className="attribute__value">"Label for Image"</span>&gt;
                                &lt;<span className="HTML">/svg</span>&gt;
                            </code>
                        </li>
                    </ul>
                </p>
            </section>

        </section>
    )
}

export default HomePage;