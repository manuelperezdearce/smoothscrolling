import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";


export default function App() {
  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="[&>*]:px-2 [&>*]:shadow-lg [&>*]:max-w-[400px] ">
        <Home />
        <Services />
        <About />
      </div>


    </div>
  )
}
