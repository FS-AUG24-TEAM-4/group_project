import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import {
  loadProductFailure,
  loadProductSuccess,
} from '@/features/phones/productSlice';
import { loadProductsStart } from '@/features/products/productSlice';

export const usePhones = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    products: phones,
    loading,
    error,
  } = useSelector((state: RootState) => state.phones);

  const fetchPhones = () => {
    dispatch(loadProductsStart());

    fetch('/group_project/api/phones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch phones');
        }

        return response.json();
      })
      .then(data => {
        dispatch(loadProductSuccess(data));
      })
      .catch((catchedError: Error) => {
        dispatch(loadProductFailure(catchedError.message));
      });
  };

  useEffect(() => {
    fetchPhones();
  }, [dispatch]);

  return { phones, loading, error };
};
