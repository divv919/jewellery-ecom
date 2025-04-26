import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "@mui/material";
import "./styles.css";
export default function Accounts() {
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/accounts/accountInfo`
  );

  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <>
      {isEditing ? (
        <div></div>
      ) : (
        <div className="account-info-section">
          <div className="account-info-names">
            <div className="account-info-first-name">
              <p className="account-title">First Name</p>
              <p className="account-value">{data.first_name}</p>
            </div>
            <div className="account-info-last-name">
              <p className="account-title">Last Name</p>
              <p className="account-value">{data.last_name}</p>
            </div>
          </div>
          <div className="account-info-details">
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
