import Header from "./component/header";
import Hero from "./component/hero";
import About from "./component/about";
import Program from "./component/program";
import Membership from "./component/membership";
import Newsletter from "./component/newsletter";
import Footer from "./component/footer";


function App() {
  return (
     <div className='App'>
   <Header />
   <main>
    <Hero />
    <About />
    <Program />
    <Membership />
    <Newsletter />
   </main>
   <Footer />
  </div>
  );
}

export default App;
