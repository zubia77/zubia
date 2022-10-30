import { useState } from "react";
import Navbar from "../components/Navbar";
import ContactPopup from "../components/ContactPopup";
import emailjs from "emailjs-com";

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
        <div className="w-screen flex justify-between bg-color-10">
            <div className="text-color-20">
                <Navbar className="" />{" "}
                <div className="flex flex-col justify-center items-center shrink">
                    <h1 className="px-20 py-10 text-3xl text-color-20 font-style1 ">
                        Ich freue mich von dir zu hören!
                    </h1>
                    <div className="m-6">
                <form
                    onSubmit={sendEmail}
                    className="bg-gradient-to-b from-color-50 to-color-30 border-8 border-color-40 p-8 flex justify-center rounded-2xl shadow-outer"
                >
                    <div className="">
                        <div className="m-6 ">
                            <input
                                type="text"
                                required
                              className="w-96 h-10 p-4 rounded-full bg-color-30 border-4 border-color-10  placeholder:text-color-20  outline-none"
                                placeholder="Name..."
                                name="from_name"
                            />
                        </div>
                        <div className="m-6">
                            <input
                                type="email"
                                required
                                className="w-96 h-10 p-4 rounded-full bg-color-30 border-4 border-color-10 placeholder:text-color-20  outline-none"
                                placeholder="Email Adresse..."
                                name="reply_to"
                            />
                        </div>
                        <div className="m-6">
                            <textarea
                                type="text"
                                required
                                className="w-96 h-60 p-4 rounded-2xl bg-color-30 border-4 border-color-10 text-color-50 placeholder:text-color-20  outline-none"
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
                                className="submitBtn w-96 h-10 p-2 rounded-full bg-color-10 text-color-20 border-4 border-color-40"
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
                                                <p className="text-2xl mt-10">
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

            <div className="Background h-screen w-[50%] bg-main bg-contain bg-no-repeat"></div>
        </div>
    );
}

export default Contact;
