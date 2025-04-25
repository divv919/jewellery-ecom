import { Skeleton } from "@mui/material";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import { useFetch } from "../hooks/useFetch";
export default function AccountPage() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/accounts/accountInfo`
  );

  return <AccountSidebar data={data} isLoading={isLoading} />;
}
