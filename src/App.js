import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import ScrollButton from "./component/scrollToTop";
import gif from "./assets/ezgif.com-gif-maker.gif";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionItem,
//   AccordionBody,
// } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
// import withRainbow from "./assets/With-rainbow-1024x1024.png";
import Stratosphere from "./assets/exosmosis.png";

function App() {
  return (
    <div className="App">
      <section>
        {" "}
        <nav className="container d-flex align-items-center justify-content-between py-2">
          <div id="logo">
            <h4>ATMOSPACE</h4>
          </div>
          <div className="d-flex align-items-center">
            <ul className="list-unstyled text-uppercase d-flex mb-0 fs-5">
              <li className="mx-3">rarities</li>
              <li className="mx-3">team</li>
              <li className="mx-3">roadmap</li>
              <li className="mx-3">faq</li>
            </ul>
            <div className="d-flex align-items-center ms-5">
              <ul className="list-unstyled d-flex mb-0">
                <li className="mx-1">
                  <button className="soc-icos text-white border-0 rounded-circle">
                    {" "}
                    <FaTwitter size={40} style={{ padding: "10px" }} />
                  </button>
                </li>
                <li className="mx-1">
                  <button className="soc-icos text-white border-0  rounded-circle">
                    <SiDiscord size={40} style={{ padding: "10px" }} />
                  </button>
                </li>
                <li className="mx-1">
                  <button className="soc-icos border-0 rounded-circle">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 100 100"
                    >
                      <path
                        fill="#fff"
                        d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"
                      />
                      <path
                        fill="#fff"
                        d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
              <button
                id="connect-wallet-btn"
                className="rounded-pill border-0 text-white p-2 px-4 fw-bold ms-3"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>
        <h2 className="text-center" id="bold-name">
          ATMOSPACE
        </h2>
      </section>

      <section className="part2 text-center">
        {/* <img className="w-75" src={withRainbow} alt="with-rainbow" /> */}
      </section>

      {/* what makes nft great */}
      <section>
        <h3 className="text-uppercase text-center" id="makes-great">
          taking back what <span>makes nfts great</span>
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto" id=''>
          <div className="col">
            <div className="card px-5 text-uppercase">
              <h3 className="text-center lh-base">no whitelisting grinding</h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-5  text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                fully <br />
                doxxed{" "}
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-2  text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                100% of Secondary Profits goes to Community Treasury
              </h3>
            </div>
          </div>

          <div className="col">
            <div className="card text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                Cheap Mint <br />
                Price (.02 ETH){" "}
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-4  text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                30% of mint profits to the community treasury
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-5  text-uppercase">
              <h3 className="text-center lh-base"> Full Transparency</h3>
            </div>
          </div>
        </div>
      </section>
      {/* rarities */}
      <section className="container">
        <h3 id="makes-great" className="text-center">
          rar<span>ities</span>
        </h3>
        <p className="text-center fs-5">
          There are 5 different rarities inspired by the layers in the Earth’s
          atmosphere. Art will be revealed after sellout
        </p>
        <div className="d-flex justify-content-center align-items-start flex-wrap flex-lg-nowrap">
          <div className="py-3  mx-3 my-4 card border-0">
            <img
              src={gif}
              alt="translating ball"
              style={{ borderRadius: "30px" }}
            />
            <p id="common" className="btn btn-lg py-2 fs-5 text-white m-3">
              common
            </p>
            <h4 className="text-center mb-0 fs-3">space cadet</h4>
          </div>
          <div className="py-3 mx-3 my-4 card border-0">
            <img
              src={gif}
              alt="translating ball"
              style={{ borderRadius: "30px" }}
            />
            <p id="uncommon" className="btn text-white btn-lg py-2 fs-5  m-3">
              uncommon
            </p>
            <h4 className="text-center mb-0 fs-3">bloon</h4>
          </div>
          <div className="py-3 mx-3 my-4 card border-0">
            <img
              src={gif}
              alt="translating ball"
              style={{ borderRadius: "30px" }}
            />
            <p className="btn btn-lg py-2 fs-5 text-white m-3" id="rare">
              rare
            </p>
            <h4 className="text-center  mb-0 fs-3">skystar</h4>
          </div>
          <div className="py-3 mx-3 my-4 card border-0">
            <img
              src={gif}
              alt="translating ball"
              style={{ borderRadius: "30px" }}
            />
            <p className="btn btn-lg py-2 fs-5 text-white m-3" id="super-rare">
              {" "}
              super-rare
            </p>
            <h4 className=" mb-0 text-center fs-3">ASTROSHIP</h4>
          </div>
          <div className="py-3 mx-3 my-4 card border-0">
            <img
              src={gif}
              alt="translating ball"
              className=""
              style={{ borderRadius: "30px" }}
            />
            <p
              className="btn btn-lg py-2 fs-5  m-3 rounded-3 text-white"
              id="legendary"
            >
              legendary
            </p>
            <h4 className="text-center mb-0 fs-3">project z</h4>
          </div>
        </div>
      </section>

      {/* utility section */}
      <section className="container">
        <h3 id="makes-great" className="text-center">
          uti<span>lity</span>
        </h3>
      </section>

      <section>
        <img className="w-100" src={Stratosphere} alt="" />
      </section>

      {/* roadmap section */}
      <section className="container">
        <h3 id="makes-great" className="text-center">
          road<span>map</span>
        </h3>
        <div className="text-center">
          {" "}
          <img
            src="https://atmospace.co/wp-content/uploads/2022/04/Atmospace_12_new.png"
            class="attachment-full size-full"
            alt="roadmap"
            loading="lazy"
            srcset="https://atmospace.co/wp-content/uploads/2022/04/Atmospace_12_new.png 1173w, https://atmospace.co/wp-content/uploads/2022/04/Atmospace_12_new-300x123.png 300w, https://atmospace.co/wp-content/uploads/2022/04/Atmospace_12_new-1024x418.png 1024w, https://atmospace.co/wp-content/uploads/2022/04/Atmospace_12_new-768x314.png 768w"
            sizes="(max-width: 1173px) 100vw, 1173px"
            width="1173"
            height="479"
          />
        </div>
      </section>

      {/* atomspace team */}
      <sectio className="container">
        <h3 className="text-uppercase text-center" id="makes-great">
          atmospace <span>team</span>
        </h3>

        <div className="mx-auto">
          <div className="col">
            <div className="card px-5 text-uppercase">
              <h3 className="text-center lh-base">no whitelisting grinding</h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-5  text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                fully <br />
                doxxed{" "}
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-2  text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                100% of Secondary Profits goes to Community Treasury
              </h3>
            </div>
          </div>

          <div className="col">
            <div className="card text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                Cheap Mint <br />
                Price (.02 ETH){" "}
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-4  text-uppercase">
              <h3 className="text-center lh-base">
                {" "}
                30% of mint profits to the community treasury
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="card px-5  text-uppercase">
              <h3 className="text-center lh-base"> Full Transparency</h3>
            </div>
          </div>
        </div>
      </sectio>

      {/* faq */}
      <section className="container">
        <h3 className="text-uppercase text-center" id="makes-great">
          fa<span>q</span>
        </h3>

        <Accordion className="text-white">
          <Accordion.Item eventKey="0" className="mt-4 rounded-3 border-0">
            <Accordion.Header className="">
              <span className="fs-4">how can i mint?</span>
            </Accordion.Header>
            <Accordion.Body className="fs-4" style={{ background: "#BD25D8" }}>
              .02 eth
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-4 rounded-3 border-0">
            <Accordion.Header>
              {" "}
              <span className="fs-4">how many can i mint?</span>
            </Accordion.Header>
            <Accordion.Body style={{ background: "#BD25D8" }}>
              You can mint up to 5 per transaction. (Unlimited Transactions) if
              you mint 5 in 1 transactoin, then you will be able airdropped a
              6th NFT free
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-4 rounded-3 border-0">
            <Accordion.Header>
              <span className="fs-4">what is the collection size?</span>{" "}
            </Accordion.Header>
            <Accordion.Body style={{ background: "#BD25D8" }}>
              7000 Public Mints at .02 + 3000 Whitelisted Free mints
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* footer section */}
      <footer className="text-center" style={{ background: "#362c4685" }}>
        <p className="fs-3 lh-lg py-3 text-capitalize">
          Copyright &copy; 2022 All Right Reserved
        </p>
      </footer>
      <ScrollButton />
    </div>
  );
}

export default App;
