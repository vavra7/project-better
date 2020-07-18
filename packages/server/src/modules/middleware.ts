import { AuthenticationError } from 'apollo-server-express';
import { t } from '@project-better/common';

type MiddlewareResolver = (root: any, args: any, context: any, info: any) => any;
type MiddlewareFn = (next: any) => MiddlewareResolver;
type Middleware = () => MiddlewareFn;

export const isAuthenticated: Middleware = () => next => async (root, args, context, info) => {
  const test = true;

  if (test) {
    throw new AuthenticationError(t('common.errors.unauthenticated'));
  }

  return next(root, args, context, info);
};
