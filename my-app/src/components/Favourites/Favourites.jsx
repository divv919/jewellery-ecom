import { useFetch } from "../../hooks/useFetch";
export default function Favourites() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/accounts/favoritesInfo`
  );
  return (
    <>
      <h1>Your Favourites Info</h1>
    </>
  );
}
