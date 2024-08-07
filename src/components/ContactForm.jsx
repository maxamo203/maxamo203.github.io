import { ValidationError, useForm } from "@formspree/react";
import '../styles/form.css';
export function ContactForm() {
    const [state, handleSubmit] = useForm("xjkbwnpb");
    if (state.succeeded) {
        return <p>Message sended succesfully!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Your message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
            <a style={{fontWeight:'400', textDecoration:'underline', fontSize:'0.8em'}} href="mailto:maximo.bosch.aa@gmail.com">or send a custom an email by clicking here</a>
        </form>
    );
}