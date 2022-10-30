import React from "react";
import Navbar from "../components/Navbar";

function Projects() {
    return (
        <div className="w-screen bg-color-20 text-color-10">
      
                <Navbar className="" />
          
            <div className="bg-color-20">
                <div className="main w-screen">
                    <div className="bubbles">
                        <a
                            className="grid one"
                            href="https://zubis-luftmasche.netlify.app"
                            target="_blanked"
                        ></a>
                        <a
                            className="grid two"
                            href="https://deutschify.zubia.de"
                            target="_blanked"
                        ></a>
                        <a className="grid three">3</a>
                        <a
                            className="grid four"
                            href="https://zubi-bmi-rechner.netlify.app/"
                            target="_blanked"
                        ></a>
                        <a
                            className="grid five"
                            href="https://mathenerds.netlify.app/index.html"
                            target="_blanked"
                        ></a>
                        <a
                            className="grid six"
                            href="https://the-indian-bride.netlify.app/"
                            target="_blanked"
                        ></a>
                        <a
                            className="grid seven"
                            href="https://zubis-memo-board.netlify.app/"
                            target="_blanked"
                        ></a>
                        <a className="grid eight">8</a>
                        <a className="grid nine">9</a>
                        <a className="grid ten" href="" target="_blanked"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
