import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Skills from '../components/skills';
import Experience from '../components/experience';
import "../assets/css/portfolio.css";
import Resume from '../components/resume';
import Projects from '../components/projects';
import NavBar from '../components/navBar';
import WelcomeStrip from '../components/welcomeStrip';
import StaticPart from '../components/staticPart';
import PortfolioFooter from '../components/portfolioFooter';

const sections = [
  { id: 'profile', component: (theme) => <Header theme={theme} /> },
  { id: 'tools', component: (theme) => <Skills theme={theme} /> },
  { id: 'experience', component: () => (
      <div className="exp-cvr">
        <Experience />
        <Resume />
      </div>
    ),
  },
  { id: 'work', component: (theme) => <Projects theme={theme} /> },
];

const PortfolioWebsite = ({ theme, setTheme }) => {
  // Set a valid initial activeSection
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [company, setCompany] = useState('');
  const [showStrip, setShowStrip] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let companyValue = params.get('company');
    if (companyValue) {
      companyValue = companyValue.replace(/-/g, ' ');
      setCompany(companyValue);

      const timer = setTimeout(() => {
        setShowStrip(false);
        setTimeout(() => {
          setCompany('');
          setShowStrip(true);
        }, 1000); 
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Function to determine opacity and transition
  const getSectionStyle = (sectionId) => ({
    opacity: activeSection === sectionId || activeSection === 'profile' ? 1 : 0.5,
    transform: activeSection === sectionId || activeSection === 'profile' ? 'translateY(0)' : 'translateY(100px)', // Apply animation from bottom
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', // Smooth transition for both opacity and transform
  });

  // Reorder sections: active section first
  const reorderedSections = [
    sections.find((sec) => sec.id === activeSection), // Find active section
    ...sections.filter((sec) => sec.id !== activeSection), // Filter out the active section
  ];

  // Filter out any undefined sections if the active section is invalid
  const validSections = reorderedSections.filter(Boolean);

  return (
    <div className="website">
      {company && showStrip && (
        <WelcomeStrip company={company} fadeOut={!showStrip} />
      )}
      
      <NavBar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setTheme={setTheme}
        theme={theme}
      />

      {validSections.length > 0 && validSections.map(({ id, component }) => (
        <section id={id} key={id} style={getSectionStyle(id)}>
          {component(theme)}
        </section>
      ))}

      <StaticPart theme={theme} />
      {activeSection == 'profile' && <PortfolioFooter/>}

    </div>
  );
};

export default PortfolioWebsite;
