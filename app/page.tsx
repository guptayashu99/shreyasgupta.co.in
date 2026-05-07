import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Recommendations from '@/components/Recommendations';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FadeIn><About /></FadeIn>
      <FadeIn delay={50}><Experience /></FadeIn>
      <FadeIn delay={50}><Certifications /></FadeIn>
      <FadeIn delay={50}><Education /></FadeIn>
      <FadeIn delay={50}><Recommendations /></FadeIn>
      <FadeIn delay={50}><Resume /></FadeIn>
      <Footer />
      <BackToTop />
    </main>
  );
}
