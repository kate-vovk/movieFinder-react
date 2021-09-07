export const calcCostMovie = (cost: number, period: number, qualityIndex = 1): number => {
  switch (period) {
    case 0:
      return cost * qualityIndex;
    case 7:
      return cost * qualityIndex * 0.2;
    case 30:
      return cost * qualityIndex * 0.5;
    default:
      return cost * qualityIndex;
  }
};
