import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import {
  loadPhonesStart,
  loadPhonesSuccess,
  loadPhonesFailure,
} from '../features/phones/phoneSlice';

export const usePhones = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { phones, loading, error } = useSelector(
    (state: RootState) => state.phones,
  );

  const fetchPhones = () => {
    dispatch(loadPhonesStart());

    fetch('http://localhost:3000/group_project/api/phones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch phones');
        }
        return response.json();
      })
      .then(data => {
        dispatch(loadPhonesSuccess(data));
      })
      .catch((error: Error) => {
        dispatch(loadPhonesFailure(error.message));
      });
  };
  useEffect(() => {
    fetchPhones();
  }, [dispatch]);

  return { phones, loading, error };
};
