import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function HeartIcon({ index }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return isFavorite ? (
    <FavoriteIcon onClick={() => setIsFavorite(false)} />
  ) : (
    <FavoriteBorderIcon
      onClick={() => {
        setIsFavorite(true);
      }}
    />
  );
}
