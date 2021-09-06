export const calcCostMovie = (cost: number, period: number, index = 1): number => {
  switch (period) {
    case 7:
      return cost * index * 0.2;
    case 30:
      return cost * index * 0.5;
    default:
      return cost * index;
  }
};
