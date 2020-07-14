type MiddlewareResolver = (root: any, args: any, context: any, info: any) => any;
type MiddlewareFn = (next: any) => MiddlewareResolver;
type Middleware = () => MiddlewareFn;

export const isAuthenticated: Middleware = () => next => async (root, args, context, info) => {
  const test = false;

  if (test) {
    throw new Error('You are not authenticated!');
  }

  return next(root, args, context, info);
};
