import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import { BiCodeAlt } from "react-icons/bi";

function Projects() {
    return (
        <div className="w-screen h-screen flex flex-col  bg-color-20 text-color-10">
            <Navbar />
            <NavbarMobile />

            <div className="bubbles h-screen xl:h-[80vh] w-screen grid grid-cols-5 grid-rows-5 bg-color-20  p-4">
                <a
                    className="one w-20 h-20 md:w-32 md:h-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 col-start-4 col-end-5 row-start-1 row-end-2 flex justify-center items-center border-8 border-color-40 object-cover hover:outline-8 hover:outline-color-10 bg-luftmasche bg-no-repeat bg-center bg-cover overflow-hidden"
                    href="https://zubis-luftmasche.netlify.app"
                    target="_blanked"
                ></a>
                <a
                    className="two w-40 h-40 md:w-64 md:h-64 xl:w-96 lg:w-80 lg:h-80 xl:h-96 col-start-1 col-end-3  row-start-1 row-end-3 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg-deutschify bg-no-repeat bg-center bg-cover overflow-hidden"
                    href="https://deutschify.zubia.de"
                    target="_blanked"
                ></a>
                <a
                    className="three w-40 h-40 md:w-64 md:h-64 xl:w-96 lg:w-40 lg:h-40 xl:h-96 col-start-2 col-end-4  row-start-3 row-end-5 bg-color-10 text-color-20 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg-maminizer bg-no-repeat bg-center bg-cover overflow-hidden"
                    href=""
                    target="_blanked"
                >
                    maminizer
                </a>
                <a
                    className="four w-20 h-20 md:w-32 md:h-32 xl:w-48 lg:w-40 lg:h-40 xl:h-48 col-start-5 col-end-6  row-start-2 row-end-3 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg-bmi bg-no-repeat bg-center bg-cover overflow-hidden xl:-mt-28"
                    href="https://zubi-bmi-rechner.netlify.app/"
                    target="_blanked"
                ></a>
                <a
                    className="five w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 col-start-1 col-end-2  row-start-3 row-end-4 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg-mathenerds bg-no-repeat bg-center bg-cover overflow-hidden -mt-16 md:mt-0 xl:mt-28"
                    href="https://mathenerds.netlify.app/index.html"
                    target="_blanked"
                ></a>
                <a
                    className="six w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 col-start-4 col-end-5  row-start-3 row-end-4 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg-indianBride bg-no-repeat bg-center bg-cover overflow-hidden -mt-16"
                    href="https://the-indian-bride.netlify.app/"
                    target="_blanked"
                ></a>
                <a
                    className="seven w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 col-start-1 col-end-2  row-start-4 row-end-5 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg-sticky bg-no-repeat bg-center bg-cover overflow-hidden lg:mt-16 xl:mt-44 xl:ml-40"
                    href="https://zubis-memo-board.netlify.app/"
                    target="_blanked"
                ></a>
                <a
                    className="eight w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 col-start-3 col-end-4  row-start-2 row-end-3 text-color-20 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg-derDieDas bg-no-repeat bg-center bg-cover overflow-hidden"
                    href="https://der-die-das.zubia.de/"
                    target="_blanked"
                ></a>
                <a
                    className="nine w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 col-start-4 col-end-6  row-start-4 row-end-6 bg-color-10 text-color-20 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg- bg-no-repeat bg-center bg-[#] bg-cover overflow-hidden text-4xl"
                    href=""
                    target="_blanked"
                >
                    <BiCodeAlt />
                </a>
                <a
                    className="ten w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 col-start-5 col-end-6  row-start-3 row-end-4 bg-color-10 text-color-20 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg- bg-no-repeat bg-center bg-[#] bg-cover overflow-hidden text-4xl"
                    href=""
                    target="_blanked"
                >
                    <BiCodeAlt />
                </a>
                <a
                    className="eleven w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 col-start-2 col-end-3  row-start-5 row-end-6 bg-color-10 text-color-20 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg- bg-no-repeat bg-center bg-[#] bg-cover overflow-hidden text-4xl lg:-mt-20 lg:ml-40 xl:mt-20 xl:ml-80"
                    href=""
                    target="_blanked"
                >
                    <BiCodeAlt />
                </a>
                {/* <a
                    className="twelve w-20 h-20 col-start-4 col-end-6  row-start-5 row-end-6 bg-color-10 text-color-20 flex justify-center items-center border-8 border-color-40  hover:outline-8 hover:outline-color-10 bg- bg-no-repeat bg-center bg-[#] bg-cover overflow-hidden text-4xl"
                    href=""
                    target="_blanked"
                >
                    <BiCodeAlt />
                </a> */}
            </div>
        </div>
    );
}

export default Projects;
