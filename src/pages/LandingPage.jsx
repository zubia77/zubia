import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
function Landingpage() {
    return (
        <div className="flex flex-col bg-color-10 text-color-20">
            <Navbar />
            <NavbarMobile />
            <div className="h-screen md:flex md:flex-row-reverse">
                <div className="h-[40vh] bg-main bg-contain bg-no-repeat -mt-28 ml-32 md:flex md:bg-right-top md:mt-20 md:w-[40vw] md:mr-20"></div>
                <div className="h-[50vh] md:w-[48vw] md:h-[80vh] flex flex-col items-center md:justify-center">
                    <h2 className="greeting text-center text-4xl md:text-7xl pb-10 font-style16">
                        Hi I'm
                    </h2>
                    <h1 className="name text-center pb-10 text-6xl md:text-7xl md:text-9xl">
                        Zubi
                    </h1>
                    <div className="">
                        <h3 className="profession text-center text-xl md:text-2xl font-style16">
                            A creative Frontend Developer{" "}
                        </h3>
                    </div>{" "}
                </div>{" "}
            </div>{" "}
            <div className="h-[35vh] flex flex-col justify-start items-center font-style16 m-4 mb-20 -mt-96 md:pt-40">
                <h1 className="text-3xl md:text-4xl text-center">
                    Pleasure in the job puts perfection in the work.
                </h1>
                <h3 className="md:text-2xl -mr-64">
                    <br />
                    <i >Aristoteles</i>
                </h3>
                {/* <h1>I do not seek. I find</h1>
                        <h3>
                            <i>Pablo Picasso</i>
                        </h3> */}
            </div>
        </div>
    );
}
export default Landingpage;
