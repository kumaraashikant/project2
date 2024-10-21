// // components/Partnerships.js
// import React from "react";
// import "./Partnerships.css";

// function Partnerships1() {
//   return (
//     <section className="partnerships" id="partnerships">
//       <div className="container">
//         <h2>Our Partnerships</h2>
//         <p>
//           We believe in the power of collaboration and have formed strategic
//           partnerships with leading organizations.
//         </p>

//         <div className="partnership-categories">
//           <div className="category">
//             <h3>Industry Partners</h3>
//             <p>
//               Working with leading technology companies to translate research
//               into practical applications.
//             </p>
//           </div>
//           <div className="category">
//             <h3>Academic Institutions</h3>
//             <p>
//               Collaborating with universities worldwide to foster knowledge
//               exchange and talent development.
//             </p>
//           </div>
//           <div className="category">
//             <h3>Government Agencies</h3>
//             <p>
//               Partnering with government organizations to address societal
//               challenges using AI.
//             </p>
//           </div>
//           <div className="category">
//             <h3>Non-Profit Organizations</h3>
//             <p>
//               Supporting non-profit organizations to leverage AI for social
//               good.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Partnerships1;
// components/Partnerships.js
// components/Partnerships.js
import React from "react";
import "./Partnerships.css";

function Partnerships1() {
  return (
    <section className="partnerships" id="partnerships">
      <div className="container">
        <h2>Collaboration & Outreach</h2>
        
        <div className="partnerships-section">
          <h3>Partnerships</h3>
          <div className="partnership-categories">
            <div className="category">
              <h4>Industry Partners</h4>
              <p>
                Working with leading technology companies to translate research into practical applications.
              </p>
            </div>
            <div className="category">
              <h4>Academic Institutions</h4>
              <p>
                Collaborating with universities worldwide to foster knowledge exchange and talent development.
              </p>
            </div>
            <div className="category">
              <h4>Government Agencies</h4>
              <p>
                Partnering with government organizations to address societal challenges using AI.
              </p>
            </div>
            
          </div>
        </div>

        <div className="industry-engagement-section">
          <h3>Industry Engagement</h3>
          <div className="engagement-categories">
            <div className="category">
              <h4>Sponsorship Programs</h4>
              <p>Visibility for organizations through events and initiatives.</p>
            </div>
            <div className="category">
              <h4>Collaborative Projects</h4>
              <p>Joint research and development with industry partners.</p>
            </div>
            <div className="category">
              <h4>Networking Events</h4>
              <p>Connects industry leaders with students and faculty.</p>
            </div>
          </div>
        </div>

        <div className="student-engagement-section">
          <h3>Student Engagement</h3>
          <div className="student-categories">
            <div className="category">
              <h4>Internship Programs</h4>
              <p>Hands-on experience with industry partners.</p>
            </div>
            <div className="category">
              <h4>Project Collaborations</h4>
              <p>Industry-sponsored projects for practical application.</p>
            </div>
            <div className="category">
              <h4>Research Initiatives</h4>
              <p>Joint research projects with faculty and experts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnerships1;
