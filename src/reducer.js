export const actions = {
  REQUEST_START: 'REQUEST_START',
  REQUEST_SUCCESS: 'REQUEST_END',
  REQUEST_FAIL: 'REQUEST_FAIL'
};

export const initialState = {
  isLoading: false,
  error: null,
  data: null
};

export default function reducer(state, action) {
  switch (action.type) {
    case actions.REQUEST_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };
    case actions.REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload
      };
    default:
      return { ...state };
  }
}
