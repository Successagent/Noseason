import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

import { Link } from "react-router-dom";
import SkeLoading from "./SkeLoading";
import { useGlobalContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminCreatedProduct = ({ products, loading, setProducts }) => {
  let accessToken = JSON.parse(sessionStorage.getItem("token"));
  const { hostUrl } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(false);

  const notify = () => toast("Property Deleted");

  // Delete Product
  const deleteProduct = async (id) => {
    notify();
    setIsLoading(true);
    try {
      const removeProduct = await axios.post(
        `${hostUrl}/api/product/delete/${id}`,
        { id: id },
        { headers: { token: accessToken } }
      );
      console.log(removeProduct);

      if (removeProduct.status === 200) {
        setProducts(products.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  if (loading || isLoading === true) return <SkeLoading />;
  return (
    <>
      {products &&
        products?.map((item, idx) => (
          <div className="admin-card-parent-con" key={idx}>
            <div className="admin-card-image-con">
              <img src={item.image[0].url} alt={item.city} />
              <p>{item.state}</p>
            </div>
            <div>
              <p>{item.location}</p>
            </div>
            <div>
              <p>{item.askingPrice}</p>
            </div>
            <div>
              <p>{item.measurementUnit}</p>
            </div>
            <div>
              <BsTrash
                className="d-btn"
                onClick={() => deleteProduct(item._id)}
              />
              <Link to={`/admin/product/edit/${item._id}`}>
                <button className="e-btn">edit</button>
              </Link>
            </div>
          </div>
        ))}
      <ToastContainer />
    </>
  );
};

export default AdminCreatedProduct;
