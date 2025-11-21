import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-main">
        <img src="./images/About-img-1.png" />
        <div className="about-main-content">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.(Hitch costs extra 😉)
          </p>

          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-cta">
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
          <button id="about-btn">Explore our vans</button>
        </div>
      </main>

      <Footer />
    </>
  );
}
