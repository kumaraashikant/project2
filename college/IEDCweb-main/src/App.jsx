// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Vision from "./components/Vision";
// import Footer from "./components/Footer";
// import Loading from "./components/Loading";
// import "./App.css";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   // useEffect(() => {
//   //   setTimeout(() => setIsLoaded(true), 3000); // Show loading for 3s
//   // }, []);
//   useEffect(() => {

//     console.log('Loading started');
//     setTimeout(() => {
//       console.log('Loading finished');
//       setIsLoaded(true);
//     }, 3000);
//   }, []);

//   return (
//     <div className="app">
//       {!isLoaded ? <Loading /> : (
//         <>
//           <Header />
//           <main>
//             <Hero />
//             <Vision />
//             {/* Add other sections like Mission, Research, etc. here */}
//           </main>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import Header from "./components/Header"; // Adjust the path as needed
//import Footer from "./components/Footer"; // Import the Footer component
import Homepage from "./components/Homepage"; // Import your Homepage component
import Events from "./components/Events"; // Import your Events component
import Project from "./components/Project"; // Import your Project component
//import "./App.css"; // Optional: Import any global styles

function App() {
  return (
    <Router Router basename="/IEDCweb">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
