import { call, put, takeEvery } from "redux-saga/effects";
import { getCharactersRickAndMorty } from "../../../api";
import { getApiRickAndMorty } from "./actions";

function* getCharactersSaga() {
    try {
      yield put(getApiRickAndMorty.request());
      const response = yield call(getCharactersRickAndMorty);
      yield put(getApiRickAndMorty.success(response));
    } catch (error) {
      yield put(getApiRickAndMorty.failure());
    } finally {
      yield put(getApiRickAndMorty.fulfill());
    }
  }

  export default function* pokemonsSaga() {
    yield takeEvery(getApiRickAndMorty.TRIGGER, getCharactersSaga);
  }