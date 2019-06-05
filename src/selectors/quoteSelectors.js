export const getQuotesState = state => state.quotes;
export const getQuotes = state => getQuotesState(state).list;
export const getQuotesLoading = state => getQuotesState(state).loading;
export const getQuotesError = state => getQuotesState(state).error;
