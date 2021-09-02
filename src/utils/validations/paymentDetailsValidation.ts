interface ICardDetailsValidation {
  cardNumber: string | null;
  expirationDate: string | null;
  cvv: string | null;
}
interface ICardValidationErrors {
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
}
export const cardDetailsValidation = ({
  cardNumber,
  expirationDate,
  cvv,
}: ICardDetailsValidation): ICardValidationErrors => {
  const errors: ICardValidationErrors = {};
  // validate on emptiness
  if (!cardNumber) {
    errors.cardNumber = 'Please enter cart number';
  }
  if (!expirationDate) {
    errors.expirationDate = 'Please enter expiration date';
  }
  if (!cvv) {
    errors.cvv = 'Please enter CVV';
  }

  if (cardNumber) {
    const value = cardNumber
      .split(' ')
      .map((item) => Number(item))
      .every((el) => !Number.isNaN(el));

    // validate if the whole field is filled
    if (!value) {
      errors.cardNumber = 'Please enter exactly 16 digits';
    }
  }

  if (expirationDate) {
    const now = new Date();
    const nextMonth = new Date(now);
    nextMonth.setMonth(now.getMonth() + 1);

    const monthYear = expirationDate.split(' / ').map((item) => {
      return Number(item);
    });
    // check if all items are digits
    const value = monthYear.every((el) => !Number.isNaN(el));

    // validate if the whole field is filled
    if (value) {
      const month = monthYear[0];
      const year = Number(`20${monthYear[1]}`);

      // validate if Month: 1 > month < 12 and Year: year >= 2021
      if (month < 1 || month > 12 || year < now.getUTCFullYear()) {
        errors.expirationDate = 'Please enter correct date';
      } else {
        const dateOfExpiration = new Date(year, month - 1);

        // validate if the expiration date is at least 1 month above the current date
        if (dateOfExpiration.getTime() < nextMonth.getTime()) {
          errors.expirationDate = 'Expiration date must 1 month above the current date';
        }
      }
    }
    if (!value) {
      errors.expirationDate = 'Please fill month and year of the cart expiration date';
    }
  }

  if (cvv) {
    const value = Array.from(cvv)
      .map((digit: string) => Number(digit))
      .every((el) => !Number.isNaN(el));

    // validate if the whole field is filled
    if (!value) {
      errors.cvv = 'Please enter 3 digits of CVV';
    }
  }
  return errors;
};
