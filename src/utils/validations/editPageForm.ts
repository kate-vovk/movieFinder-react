import * as yup from 'yup';

export const editPageFormValidation = yup.object({
  coverUrl: yup.string().url(),
  releaseDate: yup.date(),
  trailerUrl: yup.string().url(),
});
