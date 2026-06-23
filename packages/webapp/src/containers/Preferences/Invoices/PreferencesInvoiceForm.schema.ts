// @ts-nocheck
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  termsConditions: Yup.string().optional(),
  customerNotes: Yup.string().optional(),
  mailBccEnabled: Yup.boolean(),
  mailBcc: Yup.string()
    .email()
    .when('mailBccEnabled', {
      is: true,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional(),
    }),
});

export const PreferencesInvoiceFormSchema = Schema;
