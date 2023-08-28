import * as types from './homeTypes';

const initialState = {
  loading: false,
  promotions: [],
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROMOTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_PROMOTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        promotions: action.payload,
      };
    case types.FETCH_PROMOTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
