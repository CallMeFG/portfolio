import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
          <section className="section section-lg" id="skills">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center mb-5">
                  <h1 className="title">My Technical Experience</h1>
                </div>
              </div>
              <div className="row">
                {skillsData.map((skill, idx) => (
                  <SkillCard key={skill.id} id={skill.id} title={skill.title} paragraphs={skill.paragraphs} index={idx} />
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
