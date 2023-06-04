import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import Container from "../components/Container";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { TfiLayoutColumn2 } from "react-icons/tfi";
import LipsSkincareCard from "../components/LipsSkincareCard";
import { Link } from "react-router-dom";

const LipsSkincare = () => {
  const [grid, setGrid] = useState(3);

  return (
    <>
      <Meta title={"Lips"} />
      <BreadCrumb title="Lips Skincare" />

      <Container class1="store-wrapper home-wrapper-2 py-1">
        <div className="row">
          <div className="col-12">
            <div className="mb-2">
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-young-beatufiul-woman-looking-mirror-fixing-her-makeup-put-lipstick-s_1258-123042.jpg?w=826&t=st=1680209377~exp=1680209977~hmac=5bf87539666c0273790900e58b349c8497beb9a1073879250c5d22fa96c899da"
                alt="Lips"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>
                    {" "}
                    <Link
                      to="/Shop-All"
                      style={{
                        textDecoration: "none",
                        color: "var(--color-777777)",
                      }}
                    >
                      Shop by All
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/eyes-skincare"
                      style={{
                        textDecoration: "none",
                        color: "var(--color-777777)",
                      }}
                    >
                      Eyes
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/face-skincare"
                      style={{
                        textDecoration: "none",
                        color: "var(--color-777777)",
                      }}
                    >
                      Face
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/lips-skincare"
                      style={{
                        textDecoration: "none",
                        color: "var(--color-777777)",
                      }}
                    >
                      Lips
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/body"
                      style={{
                        textDecoration: "none",
                        color: "var(--color-777777)",
                      }}
                    >
                      Body
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Eye Liner
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Eye Lashes
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Lip Liner
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Lip Gloss
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Cream
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Scrub
                  </span>
                </div>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title"> Random Products </h3>

              <div>
                <div className="random-products mb-3 d-flex gap-10">
                  <div className="w-50">
                    <img
                      src="https://media.istockphoto.com/id/1283388866/photo/part-of-womans-face-womans-lips-nose-and-hand-soft-skin.jpg?b=1&s=170667a&w=0&k=20&c=CUWTPFaRYupf3KMN6WSpROGJGHYOKGq3Mm675ugWbY8="
                      className="img-fluid"
                      alt="Lipstick"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Lorem Ipsum is simply dummy text. </h5>
                    <ReactStars
                      count={5}
                      value="3"
                      edit={false}
                      size={15}
                      activeColor="#ffd700"
                    />
                    <p>$200</p>
                  </div>
                </div>

                <div className="random-products d-flex gap-10">
                  <div className="w-50">
                    <img
                      src="https://media.istockphoto.com/id/1283388866/photo/part-of-womans-face-womans-lips-nose-and-hand-soft-skin.jpg?b=1&s=170667a&w=0&k=20&c=CUWTPFaRYupf3KMN6WSpROGJGHYOKGq3Mm675ugWbY8="
                      className="img-fluid"
                      alt="Lipstick"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Lorem Ipsum is simply dummy text. </h5>
                    <ReactStars
                      count={5}
                      value="3"
                      edit={false}
                      size={15}
                      activeColor="#ffd700"
                    />
                    <p>$200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select "
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling </option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      {" "}
                      Alphabetically, Z-A{" "}
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <button className="border-0 bg-transparent">
                      <TfiLayoutColumn4
                        onClick={() => {
                          setGrid(3);
                        }}
                      />
                    </button>
                    <button className="border-0 bg-transparent">
                      <TfiLayoutColumn3
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                    </button>
                    <button className="border-0 bg-transparent">
                      <TfiLayoutColumn2
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="products-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                <LipsSkincareCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LipsSkincare;
