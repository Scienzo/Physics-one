import { Navbar, FloatingButtons } from './components';
import { Hero, WhyDifferent, Batches, Testimonials, Bio, FAQ, Footer } from './sections';

function App() {
  return (
    <div className="min-h-screen bg-physics-dark-900">
      <Navbar />
      <Hero />
      <WhyDifferent />
      <Batches />
      <Testimonials />
      <Bio />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
