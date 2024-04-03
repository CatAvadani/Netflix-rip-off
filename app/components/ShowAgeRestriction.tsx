import { Movie } from "@/data/movies";

export default function showAgeRestriction(movie: Movie) {
  switch (movie?.rating) {
    case "PG":
      return "8+";
    case "PG-13":
      return "13+";
    case "R":
      return "16+";
    default:
      return "ALL";
  }
}
