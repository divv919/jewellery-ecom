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

  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/accounts/accountInfo`
  );
  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  if (isLoading) {
    return <Skeleton />;
  }
  const handleChange = (e) => {
    setFormData({ ...formData });
  };
  return (
    <>
      {isEditing ? (
        <div>
          <form className="account-info-form">
            <label for="first_name">First Name : </label>
            <input id="first_name" name="first_name"></input>
            <label for="last_name">Last Name : </label>
            <input id="last_name" name="last_name"></input>
            <label for="address">Address : </label>
            <input id="address" name="address"></input>
            <label for="phone_number">Phone number : </label>
            <input id="phone_number" name="phone_number"></input>
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
