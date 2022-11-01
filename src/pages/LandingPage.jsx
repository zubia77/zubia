import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
function Landingpage() {
    return (
        <div className="h-screen w-screen xl:h-[100vh] flex flex-col bg-color-10 text-color-20">
            <Navbar />
            <NavbarMobile />
       <div className="w-screen  xl:flex xl:flex-row-reverse">
                <div className="h-[50vh] bg-main bg-contain  bg-no-repeat -mt-28 ml-32 md:flex md:bg-right-top lg:mt-20 xl:w-[40vw] xl:mr-20"></div>
                <div className="h-[50vh] xl:w-[48vw] xl:h-[80vh] font-style1 flex flex-col items-center justify-start xl:justify-center">
                    <h2 className="greeting text-center text-4xl xl:text-7xl pb-20">
                        Hi I'm
                    </h2>
                    <h1 className="name text-center pb-20 text-4xl md:text-7xl xl:text-9xl">
                        Zubi
                    </h1>
                    <div className="w-max lg:w-[65%] xl:w-[42%]">
                        <h3 className="profession text-center text-3xl font-style2">
                            A Frontend Developer{" "}
                        </h3>
                    </div>
                </div>
          </div>
        </div>
    );
}
export default Landingpage;
