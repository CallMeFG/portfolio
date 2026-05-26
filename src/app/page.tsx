import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";
import skillsData from "@/data/skillsData.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Hero />
        <div className="main">
          <Marquee />
          <About />
          <Timeline />
          <section className="section section-lg" id="skills">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center mb-5">
                  <h1 className="title font-weight-bold" style={{ fontSize: "3rem" }}>
                    MY <span className="text-primary">TECHNICAL</span> SKILLS
                  </h1>
                </div>
              </div>
              <div className="row justify-content-center">
                {skillsData.map((skill, idx) => (
                  <SkillCard key={skill.id} id={skill.id} title={skill.title} paragraphs={skill.paragraphs} index={idx} />
                ))}
              </div>
            </div>
          </section>
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
