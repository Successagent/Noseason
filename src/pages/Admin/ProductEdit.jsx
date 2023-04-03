import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer, Hero, MobileNavbar, Navbar } from "../../components";
import { Link, useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../context/context";

const ProductEdit = () => {
  const [modal, setModal] = useState(1);
  const [editProduct, setEditProduct] = useState([]);
  let {
    location,
    marketValue,
    landSize,
    measurementUnit,
    state,
    image,
    propertType,
    listType,
    headerDesc,
    askingPrice,
    city,
    available,
  } = editProduct;
  let accessToken = JSON.parse(sessionStorage.getItem("token"));
  const [showImages, setShowImages] = useState(false);
  const { id } = useParams();
  const { hostUrl } = useGlobalContext();
  const { pathname } = useLocation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const getCreatedProduct = async () => {
    try {
      const singleProduct = await axios.get(`${hostUrl}/api/product/${id}`);
      setEditProduct(singleProduct.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProduct = async (data) => {
    console.log(data);

    data.landSize = data.landSize ? data.landSize : landSize;
    data.headerDesc = data.headerDesc ? data.headerDesc : headerDesc;
    data.measurementUnit = data.measurementUnit
      ? data.measurementUnit
      : measurementUnit;
    data.state = data.state ? data.state : state;
    data.location = data.location ? data.location : location;
    data.city = data.city ? data.city : city;
    data.listType = data.listType ? data.listType : listType;
    data.propertType = data.propertType ? data.propertType : propertType;
    data.askingPrice = data.askingPrice ? data.askingPrice : askingPrice;
    data.marketValue = data.marketValue ? data.marketValue : marketValue;
    data.available = data.available ? data.available : available;

    try {
      const editedProduct = await axios.put(
        `${hostUrl}/api/product/update/${id}`,
        data,
        {
          headers: { token: accessToken },
        }
      );
      console.log(editedProduct.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = (e) => {
    switch (e.target.id) {
      case "case-one":
        setModal(2);
        if (modal == 2) {
          setModal(1);
        }
        break;
    }
  };

  const toggleImage = () => {
    setShowImages(!showImages);
  };

  useEffect(() => {
    getCreatedProduct();
  }, []);

  return (
    <>
      <section className="admin-product-edit">
        <Navbar pathname={pathname} slug={id} />
        <MobileNavbar pathname={pathname} slug={id} />
        <div className="dashboard-intro">
          <h1>Dashboard</h1>
        </div>
        <div className="admin-card">
          <section className="edit-product">
            <div className="admin-hero-header">
              <h2>Edit Product</h2>
              <button className="btn" id="case-one" onClick={toggleModal}>
                Edit
              </button>
            </div>
            <div
              className={`admin-hero-main-sect ${
                modal === 2 || modal === 3 || modal === 4 ? "open-modal" : ""
              }`}
            >
              <div className="admin-hero-main-item admin-hero-main-item-1">
                <h3>Header Description</h3>
                <input
                  {...register("headerDesc")}
                  type="text"
                  defaultValue={headerDesc}
                />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-2">
                <h3>Listing Type</h3>
                <input
                  {...register("listType")}
                  type="text"
                  id="listing-type"
                  defaultValue={listType}
                />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-3">
                <h3>Property Type</h3>
                <input
                  {...register("propertType")}
                  type="text"
                  id="property-type"
                  defaultValue={propertType}
                />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-4">
                <h3>Category</h3>
                <input
                  {...register("measurementUnit")}
                  type="text"
                  id="measurement-unit"
                  defaultValue={measurementUnit}
                />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-5">
                <h3>Land Size</h3>
                <input
                  {...register("landSize")}
                  type="text"
                  defaultValue={landSize}
                />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-6">
                <h3>Asking Price (RM)</h3>
                <input
                  {...register("askingPrice")}
                  type="text"
                  defaultValue={askingPrice}
                />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-7">
                <h3>Market Value (RM)</h3>
                <input
                  {...register("marketValue")}
                  type="text"
                  defaultValue={marketValue}
                />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-8">
                <h3>State</h3>
                <input
                  {...register("state")}
                  type="text"
                  defaultValue={state}
                />
              </div>

              <div className="admin-hero-main-item admin-hero-main-item-9">
                <h3>City</h3>
                <input {...register("city")} type="text" defaultValue={city} />
              </div>
              <div className="admin-hero-main-item admin-hero-main-item-10">
                <h3>Location</h3>
                <input
                  {...register("location")}
                  type="text"
                  defaultValue={location}
                />
              </div>

              <div className="admin-hero-main-item admin-hero-main-item-12">
                <h3>Available</h3>
                <input type="checkbox" defaultChecked={available} />
              </div>
              <button
                className="btn"
                onClick={handleSubmit((e) => handleUpdateProduct(e))}
                id="case-two"
              >
                Save
              </button>
              <button className="btn green" id="case-one" onClick={toggleModal}>
                Close
              </button>
            </div>
          </section>
          <section className="admin-card">
            <div className="admin-card-header">
              <div>
                <p>Product</p>
              </div>
              <div>
                <p>Price</p>
              </div>
              <div>
                <p>Location</p>
              </div>
              <div>
                <p>Category</p>
              </div>
              <div>
                <p>Land Size</p>
              </div>
            </div>
          </section>
          <div className="admin-card-parent-con">
            <div onClick={toggleImage} className="admin-card-image-con">
              <img
                style={{ cursor: "pointer" }}
                src={image && image[0].url}
                alt={location}
              />
              <p>{state}</p>
            </div>
            <div>
              <p>{marketValue}</p>
            </div>
            <div>
              <p>{location}</p>
            </div>
            <div>
              <p>{measurementUnit}</p>
            </div>
            <div>
              <p>{landSize}</p>
            </div>
          </div>
          <div
            onClick={toggleImage}
            className="edit-image-con"
            style={{ display: `${showImages == true ? "grid" : ""}` }}
          >
            {image?.map((item, idx) => {
              return (
                <div key={idx}>
                  <img className="edit-image" src={item.url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ProductEdit;
