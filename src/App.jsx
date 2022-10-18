import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <div className="App h-screen w-screen">
            <div className="h-screen w-screen flex bg-color-10">
                {" "}
                <div className=" w-[50%]">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route path="/home" element={<LandingPage />} />
                        <Route path="about-me" element={<AboutMe />}></Route>
                        <Route path="projects" element={<Projects />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                    </Routes>
                </div>
            
            </div>
        </div>
    );
}

export default App;
