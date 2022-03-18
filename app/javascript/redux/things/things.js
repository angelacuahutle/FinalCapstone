const URL = '/api/things';

// Action types
const LOAD_THING = 'LOAD_THING';

const initialState = {
  message: '',
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_THING:
      return action.payload;
    default:
      return state;
  }
};

// Action Creators
export const loadThing = () => async (dispatch) => {
  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const payload = await res.json();
  dispatch({ type: LOAD_THING, payload });
};