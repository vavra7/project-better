import * as yup from 'yup';
import { t } from '../../lib/translations';

export type ValidationSchema = yup.ObjectSchema;

yup.setLocale({
  mixed: {
    required: ({ label }) => t('common.validation.required', { label })
  },
  string: {
    min: ({ label, min }) => t('common.validation.stringMin', { label, min }),
    max: ({ label, max }) => t('common.validation.stringMax', { label, max }),
    email: ({ label }) => t('common.validation.email', { label })
  }
});

export const registerUserSchema = (): ValidationSchema =>
  yup.object().shape({
    email: yup.string().required().max(100).email().label(t('common.entity.user.email')),
    firstName: yup.string().required().min(2).max(50).label(t('common.entity.user.firstName')),
    lastName: yup.string().required().min(2).max(50).label(t('common.entity.user.lastName')),
    password: yup.string().required().min(5).max(5).label(t('common.entity.user.password'))
  });
