import { combineReducers } from 'redux';
import PlaceReducer from './PlaceReducer';

const reducers = {
  placeStore: PlaceReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
