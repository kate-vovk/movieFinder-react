import { addDays } from 'date-fns';
import i18next from 'i18next';
import {
  getDaysHoursMinutesFromExpirationDate,
  getTimeLeftToExpiration,
} from '../../src/utils/getDaysHoursMinutesFromExpirationDate';

describe('utils', () => {
  describe('getDaysHoursMinutesFromExpirationDate', () => {
    test('must return correct data', () => {
      const expirationDate = addDays(new Date(), 4);
      const test = getDaysHoursMinutesFromExpirationDate(String(expirationDate));
      expect(test).toMatchObject({ days: 3, hours: 23, minutes: 59 });
    });
  });
  describe('getTimeLeftToExpiration', () => {
    test('must return hours and minutes', () => {
      const daysHoursMinutesFromExpirationDate = { days: 0, hours: 23, minutes: 59 };
      const test = getTimeLeftToExpiration(daysHoursMinutesFromExpirationDate);
      expect(test).toBe(`23${i18next.t('UserPage:hours')} 59${i18next.t('UserPage:minutes')}`);
    });
    test('must return days and hours', () => {
      const daysHoursMinutesFromExpirationDate = { days: 3, hours: 23, minutes: 59 };
      const test = getTimeLeftToExpiration(daysHoursMinutesFromExpirationDate);
      expect(test).toBe(`3${i18next.t('UserPage:days')} 23${i18next.t('UserPage:hours')}`);
    });
  });
});
