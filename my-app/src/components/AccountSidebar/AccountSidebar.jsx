import { Skeleton } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function AccountSidebar({ data, isLoading }) {
  const location = useLocation();
  //   const params = useParams();
  console.log("Loading : ", isLoading, "data : ", data);

  return (
    <div className="account-section">
      <div className="account-dropdown">
        <div className="account-name">
          {isLoading && <Skeleton />}
          {!isLoading && <h1>Hello {data.first_name} </h1>}
        </div>
        <div
          className="account-config"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Link
            className={
              location.pathname === "/account/accountInfo" ? "activeLink" : ""
            }
            to="./accountInfo"
          >
            Visit Account info
          </Link>
          <Link
            className={
              location.pathname === "/account/favorites" ? "activeLink" : ""
            }
            to="./favorites"
          >
            Visit Favorites
          </Link>
          <Link
            className={
              location.pathname === "/account/orders" ? "activeLink" : ""
            }
            to="./orders"
          >
            Visit Orders
          </Link>
        </div>
      </div>
      <div className="account-details">
        <Outlet />
      </div>
    </div>
  );
}
