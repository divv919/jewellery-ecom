import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "@mui/material";
import "./styles.css";
export default function Accounts() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, error, reFetch } = useFetch(
    `http://localhost:3000/api/accounts/accountInfo`
  );

  useEffect(() => {
    if (data) {
      setFormData({
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      });
    }
  }, [data]);
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/accounts/accountInfo",
        {
          method: "PUT",
          credentials: "include",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error updating the accountData");
      }
      reFetch();
    } catch (err) {
      console.error(err);
    }
    setIsEditing(false);
  };
  if (isLoading) {
    return <Skeleton />;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      {isEditing ? (
        <div>
          <form className="account-info-form">
            <label for="first_name">First Name : </label>
            <input
              onChange={handleChange}
              value={formData.first_name}
              id="first_name"
              name="first_name"
            ></input>
            <label for="last_name">Last Name : </label>
            <input
              onChange={handleChange}
              value={formData.last_name}
              id="last_name"
              name="last_name"
            ></input>
            <label for="address">Address : </label>
            <input
              onChange={handleChange}
              value={formData.address}
              id="address"
              name="address"
            ></input>
            <label for="phone_number">Phone number : </label>
            <input
              onChange={handleChange}
              value={formData.phone_number}
              id="phone_number"
              name="phone_number"
            ></input>
            <button
              style={{ display: isEditing ? "block" : "none" }}
              className="account-save-button"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <div className="account-info-section">
          <button
            className="account-edit-button"
            style={{ display: !isEditing ? "block" : "none" }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <div className="account-info-details">
            <div className="account-info-first-name">
              <p className="account-title">First Name</p>
              <p className="account-value">{data.first_name}</p>
            </div>
            <div className="account-info-last-name">
              <p className="account-title">Last Name</p>
              <p className="account-value">{data.last_name}</p>
            </div>
            <div className="account-info-address">
              <p className="account-title">Address</p>
              <p className="account-value">{data.address}</p>
            </div>
            <div className="account-info-phone-number">
              <p className="account-title">Phone number</p>
              <p className="account-value">{data.phone_number}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
