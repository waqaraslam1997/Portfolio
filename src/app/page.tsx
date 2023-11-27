
import About from './about/page';
import Home from './home/page';

export default function Main() {
  return (
    <main className=' scroll-smooth focus:scroll-auto'>
      <Home />
      <About />
    </main>
  );
};
