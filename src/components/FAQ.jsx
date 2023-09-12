import { useState } from 'react';

const chevron = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>;

export default function FAQ() {
    const [faq1, setViewStatus1] = useState(false);
    const [faq2, setViewStatus2] = useState(false);
    const [faq3, setViewStatus3] = useState(false);

    const toggleAnswer1 = () => {
        setViewStatus1(!faq1);
    };

    const toggleAnswer2 = () => {
        setViewStatus2(!faq2);
    };

    const toggleAnswer3 = () => {
        setViewStatus3(!faq3);
    };
    return (
        <section className="faqsection">
            <div className="faqwrapper">
                <h2>Frequently Asked Questions</h2>
                <div className={faq1 ? 'faq active' : 'faq'} onClick={toggleAnswer1}>
                    <div className="question">What is LegalConnect? {chevron}</div>
                    <div className="answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam temporibus nulla molestiae ipsam, quam saepe. Accusamus similique at accusantium harum, numquam deserunt voluptatem atque qui aperiam dolorum tenetur doloribus!
                    </div>
                </div>
                <div className={faq2 ? 'faq active' : 'faq'} onClick={toggleAnswer2}>
                    <div className="question">Why is xyz? {chevron}</div>
                    <div className="answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        sed, fuga consectetur odio, totam labore delectus beatae distinctio ab
                        porro quam explicabo ullam tempora possimus repellendus? Nostrum
                        molestiae id quidem.
                    </div>
                </div>
                <div className={faq3 ? 'faq active' : 'faq'} onClick={toggleAnswer3}>
                    <div className="question">Why are you? {chevron}</div>
                    <div className="answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        sed, fuga consectetur odio, totam labore delectus beatae distinctio ab
                        porro quam explicabo ullam tempora possimus repellendus? Nostrum
                        molestiae id quidem.
                    </div>
                </div>
            </div>
        </section>
    )
}