import i18next from 'i18next';

export const getDaysHoursMinutesFromExpirationDate = (
  expiration: string,
): { days: number; hours: number; minutes: number } => {
  const dateFuture = new Date(expiration);
  const dateNow = new Date();
  const distance = dateFuture.getTime() - dateNow.getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
};

export const getTimeLeftToExpiration = ({
  days,
  hours,
  minutes,
}: {
  days: number;
  hours: number;
  minutes: number;
}): string => {
  return days <= 0
    ? `${hours}${i18next.t('UserPage:hours')} ${minutes}${i18next.t('UserPage:minutes')}`
    : `${days}${i18next.t('UserPage:days')} ${hours}${i18next.t('UserPage:hours')}`;
};
