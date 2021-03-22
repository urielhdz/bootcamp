// estas funciones son de ejemplo
// filterData([],{team: 'Mexico'})
export const filterData = (data, conditions = {}) => {
  let filteredData = data.athletes;
  const filters = Object.entries(conditions);
  filters.forEach(([condition, value]) => {
    filteredData = filteredData.filter(athlete => athlete[condition] === value);
  });
  return { athletes: filteredData };
};

export const sortData = (data, sortBy, sortOrder) => {
  const sortedData = data.athletes.sort((firstEl, secondEl) => {
    let result = firstEl[sortBy].localeCompare(secondEl[sortBy], undefined, { sensitivity: 'accent' });

    if (sortOrder === 'desc') result *= -1;

    return result;
  });

  return { athletes: sortedData };
};

export const demo = () => [];
