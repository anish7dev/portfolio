import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App bg-neutral-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
