import { getApiRickAndMorty, setFavorite } from "./actions";
import { initialState } from "./states";
import * as types from "./types";

export const rickAndMortyReducer = (state = initialState, action) => {
  switch (action.type) {
    case getApiRickAndMorty.TRIGGER:
      return { ...state, loading: true };
    case getApiRickAndMorty.REQUEST:
      return { ...state };
    case getApiRickAndMorty.SUCCESS:
      return { ...state, characters: action.payload };
    case getApiRickAndMorty.FAILURE:
      return {
        ...state,
        characters: [],
        error: "falla al acceder a los datos",
      };
    case getApiRickAndMorty.FULFILL:
      return { ...state, loading: false };

    case types.SET_FAVORITE:
      const newCharactersList = [...state.characters];
      const currentCharacterIndex = newCharactersList.findIndex((charater) => {
        return charater.id === action.payload;
      });
      if (currentCharacterIndex < 0) {
        return state;
      }

      newCharactersList[currentCharacterIndex].favorite =
        !newCharactersList[currentCharacterIndex].favorite;

      return { ...state, characters: newCharactersList };

    default:
      return state;
  }
};
