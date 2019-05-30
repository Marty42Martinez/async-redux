import { createAction } from 'promise-middleware-redux';
import { getQuotes } from '../services/simpsonsApi';

export const [
  fetchQuotes,
  FETCH_QUOTES,
  FETCH_QUOTES_PENDING,
  FETCH_QUOTES_FULFILLED,
  FETCH_QUOTES_REJECTED 
] = createAction('FETCH_QUOTES', getQuotes);
