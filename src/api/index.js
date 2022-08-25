import axios from "axios";

export const getCharactersRickAndMorty = () => {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
  };