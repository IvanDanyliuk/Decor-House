export const getManufacturers = async ({ 
  page, 
  itemsPerPage 
}: { 
  page?: number, 
  itemsPerPage?: number 
}) => {
  const searchParams = page && itemsPerPage ? `?page=${page}&itemsPerPage=${itemsPerPage}` : '';
  const data = await fetch(
    `${process.env.BASE_URL}/api/manufacturers${searchParams}`, 
    { cache: 'no-store' 
  });
  return data.json();
};

export const getManufacturer = async (id: string) => {
  const data = await fetch(
    `${process.env.BASE_URL}/api/manufacturers/${id}`, 
    { cache: 'no-store' }
  );
  return data.json();
};