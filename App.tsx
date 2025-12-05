import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Sections/Hero';
import Education from './components/Sections/Education';
import Publications from './components/Sections/Publications';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Awards from './components/Sections/Awards';
import Leadership from './components/Sections/Leadership';
import Referees from './components/Sections/Referees';
import { Palette } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [palette, setPalette] = useState<Palette>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
    const savedPalette = localStorage.getItem('palette') as Palette;
    if (savedPalette) setPalette(savedPalette);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.dataset.palette = palette;
    localStorage.setItem('palette', palette);
  }, [palette]);

  const togglePalette = () => {
    const palettes: Palette[] = ['blue', 'green', 'purple'];
    const next = palettes[(palettes.indexOf(palette) + 1) % palettes.length];
    setPalette(next);
  };

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 antialiased overflow-x-hidden selection:bg-primary-200 dark:selection:bg-primary-900">
      <ThreeBackground />
      
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={() => setDarkMode(!darkMode)}
        palette={palette}
        togglePalette={togglePalette}
      />

      <main>
        <Hero />
        
        {/* About Summary */}
        <section id="about" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="glass-card p-10 rounded-3xl max-w-5xl mx-auto shadow-2xl border-t border-white/50 dark:border-white/10">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                     <h2 className="text-3xl font-black mb-4">About Me</h2>
                     <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                        I am a <strong>data-driven transportation researcher</strong> with over 7 years of experience in sustainable mobility, travel behavior analysis, and machine learning. 
                        Currently a PhD Researcher at <strong>IIT Kharagpur</strong>, I focus on developing AI solutions for complex urban systems.
                     </p>
                     <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        My proven track record includes <strong>15+ publications</strong> (120+ citations), real-world tool development like the <strong>DRUM App</strong> (featured in <em>The Hindu</em>), and consultancy experience at <strong>WRI India</strong>.
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-primary-50 dark:bg-gray-800 rounded-xl text-center">
                        <div className="text-2xl font-bold text-primary-600">7+</div>
                        <div className="text-xs text-gray-500 uppercase font-bold">Years Exp.</div>
                     </div>
                     <div className="p-4 bg-primary-50 dark:bg-gray-800 rounded-xl text-center">
                        <div className="text-2xl font-bold text-primary-600">120+</div>
                        <div className="text-xs text-gray-500 uppercase font-bold">Citations</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <Education />
        <Publications />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Leadership />
        <Referees />
        
        {/* Footer / Contact */}
        <section id="contact" className="py-24 relative overflow-hidden bg-gray-900 text-white">
           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
           <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl font-black mb-4">Let's Collaborate</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                 I am actively seeking postdoctoral opportunities and research collaborations.
              </p>
              
              <div className="flex justify-center gap-6 flex-wrap">
                 <a href="mailto:kapil.meena@kgpian.iitkgp.ac.in" className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 px-8 py-6 rounded-2xl transition-all hover:-translate-y-1">
                    <i className="fas fa-university text-3xl text-primary-400 mb-3 block group-hover:scale-110 transition-transform"></i>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Institutional</div>
                    <span className="font-semibold text-lg">kapil.meena@kgpian.iitkgp.ac.in</span>
                 </a>
                 <a href="mailto:kapilm.48@gmail.com" className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 px-8 py-6 rounded-2xl transition-all hover:-translate-y-1">
                    <i className="fas fa-envelope text-3xl text-green-400 mb-3 block group-hover:scale-110 transition-transform"></i>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Personal</div>
                    <span className="font-semibold text-lg">kapilm.48@gmail.com</span>
                 </a>
              </div>
              
              <div className="mt-16 text-gray-500 text-sm">
                 <p>© 2025 Kapil Kumar Meena. Designed for Research Excellence.</p>
                 <div className="flex justify-center gap-4 mt-4 text-xl">
                    <a href="https://linkedin.com/in/kapilmeena" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/kapil2020" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
                    <a href="https://scholar.google.com" className="hover:text-white transition-colors"><i className="fas fa-graduation-cap"></i></a>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}

export default App;