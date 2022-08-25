import { createAction } from "redux-actions";
import { createRoutine } from "redux-saga-routines";
import { GET_API_RICK_AND_MORTY, SET_FAVORITE } from "./types";

export const getApiRickAndMorty = createRoutine(GET_API_RICK_AND_MORTY);
export const setFavorite = createAction(SET_FAVORITE);
