import { combineReducers } from "redux";
import { rickAndMortyReducer } from "./modules/rickAndMorty/reducer";

const rootReducer = combineReducers({
    charactersRickAndMorty: rickAndMortyReducer
})

export default rootReducer;