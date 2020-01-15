import { useEffect, useReducer } from 'react';

import reducer, { actions, initialState } from './reducer';

export default function useFetchJson(url, options) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      dispatch({ type: actions.REQUEST_START });
      try {
        const response = await fetch(url, { ...options });
        const data = await response.json();
        dispatch({ type: actions.REQUEST_SUCCESS, payload: data });
      } catch (e) {
        dispatch({ type: actions.REQUEST_FAIL, payload: e });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [state];
}
