import { priceCoefficients } from '@/constants/constantsModal';

const calcCostMovie = (cost: number, coefficient: number): number => {
  return Number((cost * coefficient).toFixed(2));
};

export const getPriceMovie = (
  price: number,
  movieQuality: string,
  purchasePeriod: number,
): number => calcCostMovie(price, priceCoefficients[movieQuality][purchasePeriod]);
