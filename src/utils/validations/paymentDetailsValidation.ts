interface IBillingDetailsValidationErrors {
  fullName?: string;
}
export const billingDetailsValidation = ({
  fullName,
}: {
  fullName: string;
}): IBillingDetailsValidationErrors => {
  const errors: IBillingDetailsValidationErrors = {};
  if (fullName === '') {
    errors.fullName = 'Name field is incomplete.';
  }
  return errors;
};
