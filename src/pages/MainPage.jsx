import React from "react";
import Courses from "../components/Courses";
import Employment from "../components/Employment";
import Header from "../components/header/Header";
import OurMentors from "../components/OurMentors";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Employment />
      <Courses />
      <Projects />
      <OurMentors />
      <Footer />
      <Contacts />
    </div>
  );
};

export default MainPage;
