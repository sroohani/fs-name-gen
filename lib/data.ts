import capitals from "./data/capitals";
import celebrities from "./data/celebrities";
import countries from "./data/countries";
import words from "./data/words";
import sizes from "./data/sizes";
import topics from "./data/topics";
import placements from "./data/placements";

interface DataCollections {
  capitals: string[];
  celebrities: string[];
  countries: string[];
  words: string[];
  sizes: string[];
  topics: string[];
  placements: string[];
}

const data: DataCollections = {
  capitals,
  celebrities,
  countries,
  words,
  sizes,
  topics,
  placements,
};

export default data;
