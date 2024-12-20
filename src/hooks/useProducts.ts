import { AppDispatch, RootState } from '@/app/store';
import {
  loadProductsFailure,
  loadProductsStart,
  loadProductsSuccess,
} from '@/features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const fetchProducts = () => {
    dispatch(loadProductsStart());
    fetch('/group_project/api/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        return response.json();
      })
      .then(data => {
        setTimeout(() => {
          dispatch(loadProductsSuccess(data));
        }, 2000);
      })
      .catch((catchedError: Error) => {
        dispatch(loadProductsFailure(catchedError.message));
      });
  };

  return { products, loading, error, fetchProducts };
};
