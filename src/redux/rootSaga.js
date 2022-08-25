import { all } from "redux-saga/effects";
import charactersRickAndMorty from "./modules/rickAndMorty/saga";

export default function* rootSaga() {
  yield all([charactersRickAndMorty()]);
}
