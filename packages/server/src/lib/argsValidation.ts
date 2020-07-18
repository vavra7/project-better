import { ValidationSchema, ErrorCodes, t } from '@project-better/common';
import { ApolloError } from 'apollo-server-express';

export function argsValidate(schema: ValidationSchema, data: object): void {
  try {
    schema.validateSync(data, { abortEarly: false });
  } catch (err) {
    const errors: { [key: string]: {} } = {};

    err.inner.forEach((item: any) => {
      errors[item.path] = {
        path: item.path,
        value: item.value,
        error: item.errors[0]
      };
    });

    throw new ApolloError(
      t('common.errors.badUserInput', { number: err.inner.length }),
      ErrorCodes.BadUserInput,
      errors
    );
  }
}
