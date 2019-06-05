import { fetchQuotes, FETCH_QUOTES_PENDING, FETCH_QUOTES, FETCH_QUOTES_FULFILLED, FETCH_QUOTES_REJECTED } from './characterQuoteActions';

jest.mock('../services/simpsonsApi.js', () => ({
  getQuotes: () => Promise.resolve([])
}));

describe('character Quote Actions', () => {
  it('dispatches 4 actions associated with createAction', () => {
    const banana = fetchQuotes();

    expect(banana).toEqual({
      type: FETCH_QUOTES,
      payload: Promise.resolve([]),
      pendingType: FETCH_QUOTES_PENDING,
      fulfilledType: FETCH_QUOTES_FULFILLED,
      rejectedType: FETCH_QUOTES_REJECTED
    });
  });
});
