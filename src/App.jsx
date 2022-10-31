import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App w-screen h-[100vh]">
            {" "}
            <div className="">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="about-me" element={<AboutMe />}></Route>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
