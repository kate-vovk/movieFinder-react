import { EQuality } from '@/constants/constantsModal';

const calcCostMovie = (cost: number, coefficient: number): number => {
  return Number((cost * coefficient).toFixed(2));
};

export const getPriceMovie = (
  price: number,
  movieQuality: string,
  purchasePeriod: number,
): number => {
  let newPrice = price;
  if (movieQuality === EQuality.HD) {
    switch (purchasePeriod) {
      case 7:
        newPrice = calcCostMovie(price, 0.3);
        break;
      case 30:
        newPrice = calcCostMovie(price, 0.55);
        break;
      case 0:
        newPrice = calcCostMovie(price, 1);
        break;
      default:
        newPrice = calcCostMovie(price, 1);
    }
  } else if (movieQuality === EQuality.SD) {
    switch (purchasePeriod) {
      case 7:
        newPrice = calcCostMovie(price, 0.5);
        break;
      case 30:
        newPrice = calcCostMovie(price, 0.7);
        break;
      case 0:
        newPrice = calcCostMovie(price, 0.9);
        break;
      default:
        newPrice = calcCostMovie(price, 0.9);
    }
  }
  return newPrice;
};
