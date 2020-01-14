import { useEffect, useReducer } from 'react';

import reducer, { actions, initialState } from './reducer';

export default function useCustomFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      dispatch({ type: actions.REQUEST_START });
      try {
        const response = await fetch(url, {});
        const data = await response.json();
        dispatch({ type: actions.REQUEST_SUCCESS, payload: data });
      } catch (e) {
        dispatch({ type: actions.REQUEST_FAIL, payload: e });
      }
    })();
  }, [url]);

  return [state];
}
