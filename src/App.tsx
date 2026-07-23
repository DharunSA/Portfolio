import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import GithubActivity from './components/GithubActivity';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Education, Achievements, Certifications } from './components/Sections';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      {/* Solid bg-primary background (no orbs — matches inspiration) */}
      <div className="min-h-screen bg-bg-primary text-text-primary">
        <Navigation />
        <main>
          <Hero />
          <SectionDivider />
          <GithubActivity />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Achievements />
          <SectionDivider />
          <Certifications />
          <SectionDivider />
          <Gallery />
          <SectionDivider />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;