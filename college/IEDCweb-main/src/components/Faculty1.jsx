import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Faculty.css";

// Import faculty images in the correct order
import SatyajitChakrabartiPresident from "../assets/teacher1.jpg"; // President
import SatyajitChakrabartiChairman from "../assets/teacher2.jpg"; // Chairman
import DrMoutushiSingh from "../assets/teacher3.jpg"; // Convenor
import AninditaDasBhattacharjee from "../assets/teacher4.jpg"; // Centre In-Charge
import DrSukanyaMukherjee from "../assets/teacher5.jpg"; // Assistant HoD, CSE
import DrSanchitaGhosh from "../assets/teacher6.jpg";
import ProfKajariSur from "../assets/teacher7.jpg";
import DrSoumyenduSekharBandyopadhyay from "../assets/teacher8.jpg";
import DrDebapriyaRoy from "../assets/teacher9.jpg";
import DrKoushikDutta from "../assets/teacher10.jpg";
import DrMonalisaGhosh from "../assets/teacher11.jpg";
import DrSanandaChatterjee from "../assets/teacher12.jpg";
import DrBaisakhiDas from "../assets/teacher13.jpg";
import DrRupayanDas from "../assets/teacher14.jpg";
import DrSusovanJana from "../assets/teacher15.jpg";

function Faculty1() {
  useEffect(() => {
    // Apply ScrollReveal animation for faculty images
    ScrollReveal().reveal(".faculty-member", {
      duration: 1500,
      scale: 0.9,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
      origin: "bottom",
      distance: "20px",
    });
  }, []);

  return (
    <section className="faculty" id="faculty">
      <div className="container">
        <h2>Our Faculty</h2>
        <div className="faculty-list">
          <div className="faculty-member">
            <img
              src={SatyajitChakrabartiPresident}
              alt="Prof. (Dr.) Satyajit Chakrabarti"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Satyajit Chakrabarti</h3>
            <p>President</p>
          </div>

          <div className="faculty-member">
            <img
              src={SatyajitChakrabartiChairman}
              alt="Prof. (Dr.) Satyajit Chakrabarti"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Satyajit Chakrabarti</h3>
            <p>Chairman</p>
          </div>

          <div className="faculty-member">
            <img
              src={DrMoutushiSingh}
              alt="Prof. (Dr.) Moutushi Singh"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Moutushi Singh</h3>
            <p>Convenor</p>
          </div>

          <div className="faculty-member">
            <img
              src={AninditaDasBhattacharjee}
              alt="Prof. Anindita Das Bhattacharjee"
              className="faculty-photo"
            />
            <h3>Prof. Anindita Das Bhattacharjee</h3>
            <p>Centre In-Charge</p>
          </div>

          <div className="faculty-member">
            <img
              src={DrSukanyaMukherjee}
              alt="Prof. (Dr.) Sukanya Mukherjee"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Sukanya Mukherjee</h3>
            <p>Assistant HoD, CSE</p>
          </div>

          {/* Continue adding faculty members */}
          <div className="faculty-member">
            <img
              src={DrSanchitaGhosh}
              alt="Prof. (Dr.) Sanchita Ghosh"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Sanchita Ghosh</h3>
          </div>

          <div className="faculty-member">
            <img
              src={ProfKajariSur}
              alt="Prof. Kajari Sur"
              className="faculty-photo"
            />
            <h3>Prof. Kajari Sur</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrSoumyenduSekharBandyopadhyay}
              alt="Prof. (Dr.) Soumyendu Sekhar Bandyopadhyay"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Soumyendu Sekhar Bandyopadhyay</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrDebapriyaRoy}
              alt="Prof. (Dr.) Debapriya Roy"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Debapriya Roy</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrKoushikDutta}
              alt="Prof. (Dr.) Koushik Dutta"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Koushik Dutta</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrMonalisaGhosh}
              alt="Prof. (Dr.) Monalisa Ghosh"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Monalisa Ghosh</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrSanandaChatterjee}
              alt="Prof. (Dr.) Sananda Chatterjee"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Sananda Chatterjee</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrBaisakhiDas}
              alt="Prof. (Dr.) Baisakhi Das"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Baisakhi Das</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrRupayanDas}
              alt="Prof. (Dr.) Rupayan Das"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Rupayan Das</h3>
          </div>

          <div className="faculty-member">
            <img
              src={DrSusovanJana}
              alt="Prof. (Dr.) Susovan Jana"
              className="faculty-photo"
            />
            <h3>Prof. (Dr.) Susovan Jana</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty1;
