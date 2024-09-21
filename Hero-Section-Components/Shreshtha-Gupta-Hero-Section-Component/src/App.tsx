import "./App.css";
import Navbar from "./components/Navbar";
import Btn from "./components/Btn";

function App() {
  return (
    <div className="App flex justify-end pt-8 pr-7">
      <div className="Loading">
        <div className="Spiner"></div>
      </div>
      <div className="heroSection sm:w-full  md:w-6/12 h-full flex flex-col items-center justify-start">
        <Navbar />
        <h1 className="text-7xl title text-center mt-24">
          Importance of 
          <br />
          Forests
        </h1>
        <h3 className="sub-title text-green-400 relative bottom-6 z-10 text-3xl">
          Forest protection now
        </h3>
        <p className="py-4 text-center">
        Forests are crucial for maintaining biodiversity, providing habitat for countless species. 
        They play a vital role in regulating the global climate by absorbing carbon dioxide and
         producing oxygen. Healthy forests prevent soil erosion and contribute to water cycle stability,
          ensuring clean water sources. They also offer resources and livelihoods for many communities. 
          Protecting forests is essential for sustaining both environmental health and human well-being.
        </p>
        <Btn Text="Learn More" />
      </div>
    </div>
  );
}

export default App;
