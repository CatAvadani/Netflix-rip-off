import { Box } from "@chakra-ui/react";
import MoviesRow from "./components/MoviesRow";

export default function Home() {
  return (
    // add the padding top to the Box component
    <Box color='red' pt='5rem'>
      {/* Netflix */}
      <MoviesRow title='Trending Movies' movies={[]} />
    </Box>
  );
}
