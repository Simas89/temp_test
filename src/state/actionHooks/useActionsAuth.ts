import { useMemo } from 'react';
import { slice } from 'state/reducers/auth';
import { bindActionCreators } from 'redux';
import { useStateDispatch } from 'state/typedHooks';

const useActionsAuth = () => {
  const { actions } = slice;
  const dispatch = useStateDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};

export default useActionsAuth;
