import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
function Landingpage() {
    return (
        <div className="h-screen w-screen  flex flex-col bg-color-10 text-color-20">
            <Navbar />
            <NavbarMobile />
            <div className="w-screen h-screen md:flex md:flex-row-reverse">
                <div className="h-[50vh] bg-main bg-contain  bg-no-repeat -mt-28 ml-32 md:flex md:bg-right-top md:mt-20 md:w-[40vw] md:mr-20"></div>
                <div className="h-[50vh] w-[100vw] md:w-[48vw] md:h-[80vh] font-style1 flex flex-col items-center justify-start  md:justify-center">
                    <h2 className="greeting text-center text-4xl md:text-7xl pb-20 font-style10">
                        Hi I'm
                    </h2>
                    <h1 className="name text-center pb-20 text-6xl md:text-7xl md:text-9xl">
                        Zubi
                    </h1>
                    <div className="">
                        <h3 className="profession text-center text-xl md:text-2xl font-style3">
                            A creative Frontend Developer{" "}
                        </h3>
                    </div>{" "}
                    
                </div>
            </div><div className="-mt-72 flex justify-center text-4xl font-style16">
                        <h1>
                            Pleasure in the job puts perfection in the work.
                        </h1>
                        <h3><br/>
                            <i className="text-2xl">Aristoteles</i>
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
