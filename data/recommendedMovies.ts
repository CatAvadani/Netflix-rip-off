import { Movie } from "./movies";

export const recommendedMovies: Movie[] = [
  {
    id: "4",
    title: "The Dark Knight",
    year: 2008,
    rating: "PG-13",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    genre: "Action, Crime, Drama",
    synopsis:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: "12",
    title: "Inception",
    year: 2010,
    rating: "PG-13",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    genre: "Action, Adventure, Sci-Fi",
    synopsis:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: "13",
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: "PG-13",
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    genre: "Action, Adventure, Drama",
    synopsis:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    isTrending: true,
  },
  {
    id: "11",
    title: "Forrest Gump",
    year: 1994,
    rating: "PG-13",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    genre: "Drama, Romance",
    synopsis:
      "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: "15",
    title: "The Matrix",
    year: 1999,
    rating: "R",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    genre: "Action, Sci-Fi",
    synopsis:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: "16",
    title: "Goodfellas",
    year: 1990,
    rating: "R",
    actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    genre: "Biography, Crime, Drama",
    synopsis:
      "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: "22",
    title: "Indiana Jones and the Raiders of the Lost Ark",
    year: 1981,
    rating: "PG",
    actors: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
    genre: "Action, Adventure",
    synopsis:
      "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
  },

  {
    id: "6",
    title: "Schindler's List",
    year: 1993,
    rating: "R",
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    genre: "Biography, Drama, History",
    synopsis:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: "19",
    title: "The Silence of the Lambs",
    year: 1991,
    rating: "R",
    actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    genre: "Crime, Drama, Thriller",
    synopsis:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
];
