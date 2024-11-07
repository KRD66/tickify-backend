import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/Discover/Discover';
import Discover from './Components/Discover/Discover';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='container'>
        <Discover />                 
      </section>
    </div>
   
  );
}
 
export default App
