import React, { useEffect, useState } from "react";
import { useParams, useLocation, Form } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { client, urlFor } from "../lib/client";
import { Products } from "../components";
import Login from "./Login";

const Product = () => {
  const [house, setHouse] = useState([]);
  const { slug } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
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
        setHouse(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <div className="product-view-con">
      <div className="product-view-image-con">
        {house[0]?.image?.map((item, idx) => (
          <img key={idx} src={urlFor(item)} />
        ))}
      </div>
      <div className="product-view-text-con">
        <h1>{house[0]?.street}</h1>
        <p>{house[0]?.city}</p>
        <div>
          <h2>${house[0]?.price}</h2>
          <img src={""} alt="" />
        </div>
        <form className="product-form"></form>
      </div>
    </div>
  );
};

export default Product;
