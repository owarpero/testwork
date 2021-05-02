import { call, put, takeEvery } from "redux-saga/effects";
import { FEACH_POSTERS } from "./action";
import { searchedPosters } from "./search/action";

const feachData = async (action) => {
  console.log(action.payload);
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${action.payload}`
  ).then((response) => response.json());
  console.log(response);

  return response;
};

function* fetchPosters(action) {
  const posters = yield call(feachData, action);
  console.log(posters);
  yield put(searchedPosters(posters));
}

export function* watchFetchData() {
  yield takeEvery(FEACH_POSTERS, fetchPosters);
}
