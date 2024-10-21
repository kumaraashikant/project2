import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Vision from "./Vision";
import "./Homepage.css"; // Import the main CSS file

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Loading started");
    const timer = setTimeout(() => {
      console.log("Loading finished");
      setIsLoaded(true);
    }, 3000); // Show loading for 3 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <main>
        {!isLoaded ? (
          <div>Loading...</div> // You can replace this with a spinner or any loading indicator
        ) : (
          <>
            <Hero />
            <Vision />
            {/* Add other sections like Mission, Research, etc. here */}
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default Homepage;
