import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS, FETCH_CHARACTERS_ERROR } from '../actions/charactersActions';

cons initialState = {

};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
  }
}