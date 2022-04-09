import { actionTypes } from "../types/actionTypes";
import {
  debounce,
  map,
  timeInterval,
  mergeMap,
  switchMap,
  takeUntil,
  tap,
} from "rxjs/operators";
import { Epic, ofType } from "redux-observable";
import { increment } from "../slices/counterSlice";
import { interval } from "rxjs";

export const incrementDebounceEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.INCREMENT_DEBOUNCE),
    map((val) => console.log(val)),
    debounce(() => interval(1000)),
    map(() => increment()),
  );
