import React, { useEffect, useState } from "react";
import { Button, Footer, MobileNavbar, Navbar } from "../../components";
import { useLocation } from "react-router-dom";
import AdminCreatedProduct from "./AdminCreatedProduct";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import { useForm } from "react-hook-form";

const AdminDashboard = () => {
  const [modal, setModal] = useState(1);
  let accessToken = JSON.parse(localStorage.getItem("token"));
  const { hostUrl } = useGlobalContext();
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(() => {
    const sessionStorageProduct = sessionStorage.getItem("createdProducts");
    return sessionStorageProduct
      ? JSON.parse(sessionStorage.getItem("createdProducts"))
      : [];
  });
  const [images, setImages] = useState({ image: [] });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    setImages({ ...images, image: e.target.files });
  };

  const getCreatedProduct = async () => {
    try {
      const newProducts = await axios.get(`${hostUrl}/api/product`);
      setLoading(false);
      console.log(newProducts.data);
      setProducts(newProducts.data);
      sessionStorage.setItem(
        `createdProducts`,
        JSON.stringify(newProducts.data)
      );
      localStorage.setItem(`createdProducts`, JSON.stringify(newProducts.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateProduct = async (data) => {
    const {
      location,
      askingPrice,
      desc,
      city,
      state,
      propertyType,
      listingType,
      measurementUnit,
      marketValue,
      landSize,
    } = data;

    const newProductData = new FormData();
    newProductData.append("location", location);
    newProductData.append("headerDesc", desc);
    newProductData.append("askingPrice", askingPrice);
    for (let i = 0; i < images.image.length; i++) {
      newProductData.append("image", images.image[i]);
    }
    newProductData.append("city", city);
    newProductData.append("state", state);
    newProductData.append("propertType", propertyType);
    newProductData.append("listType", listingType);
    newProductData.append("measurementUnit", measurementUnit);
    newProductData.append("marketValue", marketValue);
    newProductData.append("landSize", landSize);
    newProductData.append("available", available);

    try {
      const res = await axios.post(`${hostUrl}/api/product`, newProductData, {
        headers: {
          token: accessToken,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    getCreatedProduct();
  }, []);

  const toggleModal = (e) => {
    switch (e.target.id) {
      case "case-one":
        setModal(2);
        if (modal == 2) {
          setModal(1);
        }
        break;
      case null:
        setModal(7) || setModal(5) || setModal(3);
        break;
    }
  };

  return (
    <section className="admin-dashboard">
      <Navbar pathname={pathname} />
      <MobileNavbar pathname={pathname} />
      <div className="dashboard-intro">
        <h1>Dashboard</h1>
      </div>
      <section className="admin-hero">
        <div className="admin-hero-header">
          <h2>Add New Propertity</h2>
          <button className="btn" id="case-one" onClick={toggleModal}>
            Add
          </button>
        </div>
        <div
          className={`admin-hero-main-sect ${
            modal === 2 || modal === 3 ? "open-modal" : ""
          }`}
        >
          <div className="admin-hero-main-item admin-hero-main-item-1">
            <h3>Header Description</h3>
            <input {...register("desc")} type="text" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-2">
            <h3>Listing Type</h3>
            <input {...register("listingType")} type="text" id="listing-type" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-3">
            <h3>Property Type</h3>
            <input
              {...register("propertyType")}
              type="text"
              id="property-type"
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-4">
            <h3>Measurement Unit</h3>
            <input
              {...register("measurementUnit")}
              type="text"
              id="measurement-unit"
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-5">
            <h3>Land Size</h3>
            <input {...register("landSize")} type="text" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-6">
            <h3>Asking Price (RM)</h3>
            <input {...register("askingPrice")} type="text" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-7">
            <h3>Market Value (RM)</h3>
            <input {...register("marketValue")} type="text" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-8">
            <h3>State</h3>
            <input {...register("state")} type="text" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-9">
            <h3>City</h3>
            <input {...register("city")} type="text" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-10">
            <h3>Location</h3>
            <input {...register("location")} type="text" />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-11">
            <h3>Images</h3>
            <input
              onChange={handleImageChange}
              name="images"
              type="file"
              multiple
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-12">
            <h3>Available</h3>
            <input
              onClick={(e) => setAvailable(e.target.checked)}
              type="checkbox"
            />
          </div>
          <button
            className="btn"
            id="case-one"
            onClick={handleSubmit((data) => {
              handleCreateProduct(data);
              setModal(1);
            })}
          >
            Save
          </button>
          <button className="btn green" id="case-one" onClick={toggleModal}>
            Close
          </button>
        </div>
      </section>
      {products.length > 0 && (
        <div className="admin-card-header">
          <div>
            <p>Product Name</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Category</p>
          </div>
          <div>
            <p>Status</p>
          </div>
        </div>
      )}
      <AdminCreatedProduct
        products={products}
        loading={loading}
        setProducts={setProducts}
      />
      <Footer />
    </section>
  );
};

export default AdminDashboard;
