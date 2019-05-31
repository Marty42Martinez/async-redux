import quotesReducer from './quotesReducer';
import { FETCH_QUOTES, FETCH_QUOTES_PENDING } from '../actions/characterQuoteActions';

describe('Quote reducer testsssssssss', () => {
  it('handles the fetchQuotes action', () => {
    const initial = {
      loading: false,
      list: [],
      error: null
    };
    const action = {
      type: FETCH_QUOTES,
      payload: ['hihi', 'also hi']
    };

    const newState = quotesReducer(initial, action);

    expect(newState).toEqual({
      loading: false,
      list: ['hihi', 'also hi'],
      error: null
    });
  });

  it('handles the fetch_quotes_pending action', () => {
    const initial = {
      loading: false,
      list: [],
      error: null
    };
    const action = {
      type: FETCH_QUOTES_PENDING
    };
    const newState = quotesReducer(initial, action);
    expect(newState).toEqual({
      loading: true,
      list: [],
      error: null
    });
  });
});
