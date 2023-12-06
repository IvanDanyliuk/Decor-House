'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, MenuProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation';


const menuItems: MenuProps['items'] = [
  {
    label: <Link href='/dashboard/products'>Products</Link>,
    key: 'products',
  },
  {
    label: <Link href='/dashboard/categories'>Categories</Link>,
    key: 'categories',
  },
  {
    label: <Link href='/dashboard/users'>Users</Link>,
    key: 'users',
  },
  {
    label: <Link href='/dashboard/manufacturers'>Manufacturers</Link>,
    key: 'manufacturers',
  },
  {
    label: <Link href='/dashboard/interiors'>Interiors</Link>,
    key: 'interiors',
  },
  {
    label: <Link href='/dashboard/promotions'>Promotions</Link>,
    key: 'promotions',
  },
  {
    label: <Link href='/dashboard/shops'>Shops</Link>,
    key: 'shops',
  },
  {
    label: <Link href='/dashboard/posts'>Posts</Link>,
    key: 'posts',
  },
];


const DashboardMenu = () => {
  const [currentLink, setCurrentLink] = useState('products');

  const router = useRouter();
  const pathname = usePathname();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentLink(e.key);
  };

  useEffect(() => {
    const url = pathname.split('/');
    
    if(currentLink !== url[2]) {
      setCurrentLink(url[2]);
    }

    if(url.length === 2) {
      router.push('/dashboard/products');
    }
  }, [pathname]);

  return (
    <Menu 
      onClick={onClick} 
      selectedKeys={[currentLink]} 
      mode='horizontal' 
      items={menuItems} 
    />
  );
};

export default DashboardMenu;