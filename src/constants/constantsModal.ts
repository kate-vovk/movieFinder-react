import { IQuality } from '@/utils/interfaces/priceCoefficientsInterfaces';

export enum EQuality {
  HD = 'HD',
  SD = 'SD',
}

export const priceCoefficients: IQuality = {
  HD: { 7: 0.3, 30: 0.55, 0: 1 },
  SD: { 7: 0.5, 30: 0.7, 0: 0.9 },
};
