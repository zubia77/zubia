import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
function Landingpage() {
    return (
        <div className="h-screen xl:h-[120vh] w-screen flex flex-col bg-color-10 text-color-20">
            <Navbar />
            <NavbarMobile />
       <div className="w-screen xl:flex xl:flex-row-reverse">
                <div className="h-full bg-main bg-contain xl:bg-cover bg-no-repeat -mt-20 md:flex md:bg-right-top lg:mt-0 xl:w-[50vw]"></div>
                <div className="h-[50vh] xl:w-[50vw] xl:h-[100vh] font-style1 flex flex-col items-center justify-start xl:justify-center">
                    <h2 className="greeting text-center text-4xl xl:text-7xl pb-20">
                        Hi I'm
                    </h2>
                    <h1 className="name text-center pb-20 text-4xl md:text-7xl xl:text-9xl">
                        Zubi
                    </h1>
                    <div className="w-max lg:w-[65%] xl:w-[30%]">
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
