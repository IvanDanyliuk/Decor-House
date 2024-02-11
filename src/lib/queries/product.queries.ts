import { AXIOS } from '../axios';


export const getProducts = async ({ 
  page, 
  itemsPerPage, 
  category,
  types,
  features,
  manufacturers
}: { 
  page?: number, 
  itemsPerPage?: number, 
  category?: string;
  types?: string,
  features?: string,
  manufacturers?: string;
}) => {
  const { data } = await AXIOS.get(
    '/api/products', 
    { params: { 
        page, 
        itemsPerPage, 
        category, 
        types, 
        features, 
        manufacturers 
    } }
  );
  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await AXIOS.get(`/api/products/${id}`);
  return data;
};

export const getProductsFilterData = async (category: string) => {
  const { data } = await AXIOS.get(
    '/api/products/filters',
    { params: { category }}
  );
  return data;
}