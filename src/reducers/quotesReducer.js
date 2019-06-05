import { FETCH_QUOTES, FETCH_QUOTES_PENDING, FETCH_QUOTES_FULFILLED, FETCH_QUOTES_REJECTED } from '../actions/characterQuoteActions';

const initialState = {
  loading: false,
  list: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTES:
      return { ...state, loading: false, list: action.payload };
    case FETCH_QUOTES_PENDING:
      return { ...state, loading: true };
    case FETCH_QUOTES_FULFILLED:
      return { ...state, loading: false };
    case FETCH_QUOTES_REJECTED:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
