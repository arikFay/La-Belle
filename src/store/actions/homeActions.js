import * as types from './homeTypes';

export const fetchPromotionsRequest = () => ({
  type: types.FETCH_PROMOTIONS_REQUEST,
});

export const fetchPromotionsSuccess = (promotions) => ({
  type: types.FETCH_PROMOTIONS_SUCCESS,
  payload: promotions,
});

export const fetchPromotionsFailure = (error) => ({
  type: types.FETCH_PROMOTIONS_FAILURE,
  payload: error,
});

export const fetchPromotions = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPromotionsRequest());
      // Replace with your API call to fetch promotions
      const promotions = await api.fetchPromotions();
      dispatch(fetchPromotionsSuccess(promotions));
    } catch (error) {
      dispatch(fetchPromotionsFailure(error));
    }
  };
};
