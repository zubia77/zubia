import { useState } from "react";
import Navbar from "../components/Navbar";
import ContactPopup from "../components/ContactPopup";
import emailjs from "emailjs-com";
import NavbarMobile from "../components/NavbarMobile"

function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4r7vkah",
                "template_frrjkep",
                e.target,
                "3odoJyRZO0aka8ePv"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        togglePopup();
    }

    return (
        <div className="w-screen">
            <div className="h-screen text-color-20 flex flex-col  bg-color-10">
                <Navbar />
                <NavbarMobile />
                <div className="w-[100vw] flex flex-col justify-center items-center shrink">
                    <h1 className="px-10 text-xl text-color-20 font-style1 md:text-3xl">
                        Please get in touch or leave a feedback!
                    </h1>
                    <div className="m-6">
                <form
                    onSubmit={sendEmail}
                    className="w-[80vw] lg:w-[60vw] xl:w-[45vw] bg-gradient-to-b from-color-50 to-color-30 border-8 border-color-40 py-8 flex justify-center rounded-2xl shadow-outer"
                >
                    <div className="flex flex-col items-center">
                        <div className="">
                            <input
                                type="text"
                                required
                              className="w-72 md:w-96 h-10 p-4 rounded-full bg-color-30 border-4 border-color-10  placeholder:text-color-20  outline-none"
                                placeholder="Name..."
                                name="from_name"
                            />
                        </div>
                        <div className="m-6">
                            <input
                                type="email"
                                required
                                className="w-72 md:w-96 h-10 p-4 rounded-full bg-color-30 border-4 border-color-10 placeholder:text-color-20  outline-none"
                                placeholder="Email Adresse..."
                                name="reply_to"
                            />
                        </div>
                        <div className="m-6">
                            <textarea
                                type="text"
                                required
                                className="w-72 md:w-96  h-60 p-4 rounded-2xl bg-color-30 border-4 border-color-10 text-color-50 placeholder:text-color-20  outline-none"
                                name="message"
                                id=""
                                cols={3}
                                rows={10}
                                placeholder="Deine Nachricht..."
                            ></textarea>
                        </div>
                        <div className="m-6 relative">
                            <input
                                type="submit"
                                className="submitBtn w-72 h-10 p-2 rounded-full bg-color-10 text-color-20 border-4 border-color-40"
                                value="absenden"
                            />
                            <div className="absolute bottom-40">
                                {isOpen && (
                                    <ContactPopup
                                        content={
                                            <>
                                                <b className="text-3xl">
                                                    Danke für deine Nachricht!
                                                </b>
                                                <p className="text-2xl mt-4">
                                                    Ich werde mich schnellstmöglich bei dir melden.
                                                </p>
                                            </>
                                        }
                                        handleClose={togglePopup}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
                </div>
            </div>

        
        </div>
    );
}

export default Contact;
