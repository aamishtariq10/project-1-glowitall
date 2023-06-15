import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";

const MascaraQ5 = () => {
  return (
    <>
      <Meta title={"Welcome"} />
      <Container class1="cart-wrapper home-wrapper-2 py-1">
        <div className="row">
          <div className="col-12">
            <div className="strip ">
              <h1 className="Start-title">BEAUTY STUDIO</h1>
            </div>
          </div>
          <div className="content py-4">
            <div className="col-7 text-content">
              <h4 className="Start-content py-2">
                5. What is the price range you require for the products?
              </h4>
              <div className="button-holder py-3">
                <Link to="/M-Result">
                  <button className="rec-button">
                    <span>COST-EFFECTIVE</span>
                  </button>
                </Link>
              </div>
              <div className="button-holder py-3">
                <Link to="/M-Result">
                  <button className="rec-button">
                    <span>HIGH-END</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-5">
              <img
                src="https://media.istockphoto.com/id/979015970/vector/price-tag-icon-in-vector.jpg?s=612x612&w=0&k=20&c=4k93vGY0ln3HUoJlPDiWJ8pkUAwybuBYp0O2Na5x58M="
                alt="picture"
                style={{ width: "100%", height: "320px" }}
              />
            </div>
           
          </div>
        </div>
      </Container>
    </>
  );
};

export default MascaraQ5;
