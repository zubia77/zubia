import React from "react";
import Navbar from "../components/Navbar";

function Landingpage() {
    return (
        <div className="w-screen flex justify-between bg-color-10">
            <div className="w-[50%] text-color-20 ">
                <Navbar className="" />
                <div className="text-color-20 mt-56 flex flex-col items-center font-style1">
                    <h2 className="greeting text-center text-4xl pb-20">
                        Hi I'm
                    </h2>
                    <h1 className="name text-center pb-20 text-4xl md:text-7xl">
                        Zubi
                    </h1>
                    <div className="w-5.5/12">
                        <h3 className="profession text-center text-3xl font-style2">
                           A Frontend Developer                        </h3>
                    </div>
                </div>
            </div>

            <div className="Background h-screen w-[50%] bg-main bg-cover bg-no-repeat "></div>
        </div>
    );
}

export default Landingpage;
