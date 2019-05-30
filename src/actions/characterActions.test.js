import {
  fetchCharacters,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS
} from './characterActions';
import { JestEnvironment } from '@jest/environment';
jest.mock('../../services/avatarApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('characters actions', () => {
  it('dispatches a loading action and a fetch characters action', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWtih({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWtih({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
