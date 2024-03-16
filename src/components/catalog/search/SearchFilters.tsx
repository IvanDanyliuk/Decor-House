'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Select } from 'antd';
import { productsSortItems } from '@/lib/constants';
import { IFilterItem } from '@/lib/types/products.types';
import FilterSelect from '../ProductFilters/FilterSelect';
import { useWindowSize } from '@/utils/hooks/use-window-size';


interface ISearchFilters {
  categories: IFilterItem[];
  types: IFilterItem[];
  manufacturers: IFilterItem[];
  minPrice: number;
  maxPrice: number;
}


const SearchFilters: React.FC<ISearchFilters> = ({ categories, types, manufacturers, minPrice, maxPrice }) => {
  const { width } = useWindowSize();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sortValueInitialState = searchParams.get('order') && searchParams.get('sortIndicator') ? 
    JSON.stringify({ 
      order: searchParams.get('order'), 
      sortIndicator: searchParams.get('sortIndicator') 
    }) : 
    productsSortItems[0].value;
  
  const [sortValue, setSortValue] = useState<string>(sortValueInitialState);

  const createSortingQueryString = useCallback(
    (order: string, sortIndicator: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('order', order);
      params.set('sortIndicator', sortIndicator);
      params.set('page', '1');
      return params.toString();
    },
    [searchParams]
  );

  const handleSortChange = (value: string) => {
    setSortValue(value);
    const parsedValue = JSON.parse(value);
    router.push(`${pathname}?${createSortingQueryString(parsedValue.order, parsedValue.sortIndicator)}`);
  };

  useEffect(() => {
    if(!searchParams.get('order') && !searchParams.get('sortIndicator')) {
      setSortValue(productsSortItems[0].value);
    }
  }, [searchParams]);

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex gap-6'>
        <FilterSelect 
          name='category'
          title='Category' 
          options={categories} 
        />
        <FilterSelect 
          name='types'
          title='Types' 
          options={types} 
          disabled={types.length === 0}
          multiple
        />
        <FilterSelect 
          name='manufacturers'
          title='Manufacturers' 
          options={manufacturers} 
        />
      </div>
      <Select 
        options={productsSortItems}
        value={sortValue}
        onChange={handleSortChange}
        className='w-52'
      />
    </div>
  );
};

export default SearchFilters;