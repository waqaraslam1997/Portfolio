
import About from './about/page';
import Home from './home/page';
import Work from './work/page';

export default function Main() {
  return (
    <main className=' scroll-smooth focus:scroll-auto'>
      <Home />
      <About />
      <Work />
    </main>
  );
};
