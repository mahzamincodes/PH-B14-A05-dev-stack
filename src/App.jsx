import Navbar from "./components/Navbar";
import Hero from "./components/hero-section/Hero";
import Tecnology from "./components/tecnology-section/Tecnology";
// import Footer from "./components/footer-section/Footer";
import { Suspense } from "react";

const technologyFetch = async() =>{
    const res = await fetch("/data.json")
    const data = await res.json()
    return data
}

const technologyPromise = technologyFetch()

function App() {
  return (
    <>
        <Navbar /> 

        <Hero />
        
        <div className="flex justify-between gap-10 container mx-auto">
            <Suspense fallback={<p className="text-5xl font-bold text-pink-500">Page Loading . . .</p>}>
              <Tecnology technologyPromise={technologyPromise}/>
            </Suspense>
        </div>
        
        {/* <Footer /> */}
    </>
  );
}

export default App;
