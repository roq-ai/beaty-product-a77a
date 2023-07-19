import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  availability: yup.boolean().required(),
  organization_id: yup.string().nullable(),
});
