import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Recommendations from '@/components/Recommendations';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Education />
      <Recommendations />
      <Resume />
      <Footer />
    </main>
  );
}
