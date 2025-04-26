import { useFetch } from "../../hooks/useFetch";
export default function Orders() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/accounts/orderInfo`
  );
  return <h1>Your orders</h1>;
}
