import "./Home.css";

import akoniImage from "../img/akoni.png";
import ibisImage from "../img/ibis-paint-x.png";
import vscodeImage from "../img/vc-code.png";
import gcbImage from "../img/gcb.png";
import warcraftImage from "../img/warcraft.png";
import generalImage from "../img/general.png";
import battleImage from "../img/battle.png";
import fourImage from "../img/04.jpg";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-7 fw-bold">My name is Layca C. florin</h1>
                      <p className="self text-light">
                        I like to be  a Digital Artist & Web Designer
                      </p>
                      <p className="self text-light">
                      I'm a college student at Central Philippines State University studying Information Technology..</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                      <img
                        src={akoniImage}
                        alt="Profile Picture of Layca Florin"
                      />
                      &nbsp; &nbsp;
                       <a href="" className="btn btn-brand shadow text">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"></path></svg>
                       <b>Know More</b> 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="game">
  <div className="container">
    <h3 className="display-4 mb-5">
      <b></b>
    </h3>
    <div className="row">
      <div className="col-lg-4 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={warcraftImage} className="card-img-top mt-3" alt="Warcraft III" />
        </div>
      </div>
      <div className="col-lg-4 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={generalImage} className="card-img-top mt-3" alt="Command and Conquer" />
        </div>
      </div>
      <div className="col-lg-4 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={battleImage} className="card-img-top mt-3" alt="Battle Realms" />
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ibisImage} alt="" />
                <h4 className="text-center"><b>IbisPaintX</b></h4>
                <p>
                  IbisPaint X is a popular digital art app designed for creating
                  illustrations and manga on mobile devices. You can also share
                  your creations with others and get feedback from a community
                  of artists within the app.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={vscodeImage} alt="" />
                <h4 className="text-center"><b>Visual Studio Code</b></h4>
                <p>
                  Visual Studio Code is a free source-code editor
                  developed by Microsoft for Windows, macOS, and Linux. It has
                  quickly become one of the most popular code editors in the
                  developer community due to its versatility,
                  features.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={gcbImage} alt="" />
                <h4 className="text-center"><b>Procreate</b></h4>
                <p>
                  Procreate is the most advanced painting app ever designed for a mobile device.Pocreate is not just 
                  for sketching and painting,it also offers artists expert tools that would normally be found only in photoshop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<footer className="footer text-white" id="footer">
      <div className="container">
        <div className="row align-items-center">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6 text-lg-start text-center">
            <h5 className="text-black fw-bold">  <img src={fourImage} alt="" />&nbsp;&nbsp;About</h5>
            <p className="text-black">LAYCA FLORIN C.<br/>BSIT-4-C</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6 text-lg-start ps-lg-5 ps-0 text-center">
            <h5 className=" text-black fw-bold">Address</h5>
           <p className=" text-black">Mag-aso Oringao Kabankalan<br/>City Negros Occidental</p>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6 text-black-start text-center">
            <h5  className=" text-black fw-bold ">📞Contact</h5>
            <p className="m text-black">Email:florinlayca@gmail.com<br/>Phone: 09506979705</p>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 col-sm-6 text-lg-start text-center">
            <h5 className="mt-2 text-black fw-bold">Newsletter</h5>
          
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: '1px' }}
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>

          </div>
        </div>
      </div>
    </footer>

    </>
  );
};

export default Home;
