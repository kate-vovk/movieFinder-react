import { EQuality } from '@/user/constants/constantsModal';

export const convertQualityToNumber = (quality: string): number => {
  if (quality === EQuality.HD) {
    return 1;
  }
  if (quality === EQuality.SD) {
    return 2;
  }
  return 2;
};
