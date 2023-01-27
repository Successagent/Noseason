import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import agent from "../assets/agent-7.jpg";
import { client, urlFor } from "../lib/client";

import { Button } from "../components";

const Products = ({ pathname, fade_up }) => {
  const [loading, setLoading] = useState(false);
  const [houses, setHouses] = useState([]);
  let filter9 = houses.slice(0, 9);
  let filter12 = houses.slice(0, 12);
  let view = houses.slice(0, 4);
  let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    if (componentMounted) {
      setLoading(false);
    }

    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    getProducts();
    client
      .fetch(
        `*[_type == "product"] {
    city,
    details,
    image,
    name,
    price,
     slug,
    street,
    logo,
    id
  }`
      )
      .then((data) => {
        setHouses(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="loading-con">
          <div>
            <Skeleton count={5} height={450} />
          </div>
          <div>
            <Skeleton count={5} height={450} />
          </div>
          <div>
            <Skeleton count={5} height={450} />
          </div>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      pathname == "/properties"
        ? filter9
        : pathname == "/search"
        ? filter12
        : pathname == "/products/:slug"
        ? view
        : houses
    ).map((product, idx) => (
      <Link
        className="container-link"
        key={idx}
        to={`/products/${product.slug.current}`}
      >
        <div className="property-product-image-con">
          <img src={urlFor(product.image[0])} alt="" />
        </div>
        <div className="property-product-details">
          <h1>${product.price}/Year</h1>
          <h3></h3>
          <div className="product-viewmore-con">
            <div>
              <p>{product.city}</p>
              <h5>{product.street}</h5>
            </div>
            <Button title="View All" />
          </div>
          <div className="property-product-agent-con">
            <h3>No Season</h3>
            <img src={agent} alt="" />
          </div>
        </div>
      </Link>
    ));
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="property-product-con"
          data-visible={pathname}
          data-aos={fade_up}
        >
          <ShowProducts />
        </div>
      )}
    </div>
  );
};

export default Products;
