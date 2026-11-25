import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolkitSection } from './components/ToolkitSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#161618] selection:bg-[#EAE4F7] selection:text-[#161618]">
      <Navbar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ToolkitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

