import React from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import agent from "../assets/NO SEASON I (1).png";
import { useGlobalContext } from "../context/context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = ({ pathname, fade_up, slug }) => {
  const { properties, query, loading } = useGlobalContext();
  let filter9 = properties.slice(0, 9);
  let filter12 = properties.slice(0, 12);
  let view = properties.slice(0, 4);

  const ShowProducts = () => {
    if (loading)
      return (
        <>
          {properties.map((item, idx) => (
            <section className="container-link" key={idx}>
              <div className="property-product-image-con">
                <Skeleton height={`${100}%`} />
              </div>
              <div className="property-product-details">
                <Skeleton width={300} height={14} />
                <Skeleton width={100} height={20}></Skeleton>
              </div>
            </section>
          ))}
        </>
      );
    return properties
      .filter((item) => {
        return item.location.toLowerCase().includes(query);
      })
      .map((product, idx) => (
        <section className="container-link" key={idx}>
          <div className="property-product-image-con">
            <img src={product.image[0].url} alt="" />
          </div>
          <div className="property-product-details">
            <h1>N{product.marketValue}/Year</h1>
            <h3>{product.headerDesc}</h3>
            <div className="product-viewmore-con">
              <div>
                <p>{product.city}</p>
                <h5>{product.location}</h5>
              </div>
              <Link to={`/products/${product._id}`}>
                <button className="btn">View Property</button>
              </Link>
            </div>
            <div className="property-product-agent-con">
              <h3>No Season</h3>
              <img src={agent} alt="" />
            </div>
          </div>
        </section>
      ));
  };
  return (
    <div>
      <div
        className="property-product-con"
        data-visible={pathname}
        data-aos={fade_up}
      >
        <ShowProducts />
      </div>
    </div>
  );
};

export default Products;
