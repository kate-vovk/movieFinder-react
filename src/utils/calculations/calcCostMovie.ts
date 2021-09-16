import { EQuality } from '@/constants/constantsModal';

const calcCostMovie = (cost: number, period: number, qualityIndex = 1): number => {
  switch (period) {
    case 0:
      return Number((cost * qualityIndex).toFixed(2));
    case 7:
      return Number((cost * qualityIndex * 0.2).toFixed(2));
    case 30:
      return Number((cost * qualityIndex * 0.5).toFixed(2));
    default:
      return Number((cost * qualityIndex).toFixed(2));
  }
};

export const getPriceMovie = (
  price: number,
  movieQuality: string,
  purchasePeriod: number,
): number => {
  let newPrice = price;
  switch (movieQuality) {
    case EQuality.HD:
      newPrice = calcCostMovie(price, purchasePeriod);
      break;
    case EQuality.SD:
      newPrice = calcCostMovie(price, purchasePeriod, 0.9);
      break;
    default:
      newPrice = price;
  }
  return newPrice;
};
