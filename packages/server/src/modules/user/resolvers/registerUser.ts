import { MutationResolvers } from '../typesGenerated';
import { User } from '../../../entity/User';
import bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-express';
import { ErrorCodes, registerUserSchema, t } from '@project-better/common';
import { argsValidate } from '../../../lib/argsValidation';

export const registerUser: MutationResolvers['registerUser'] = async (_, { data }) => {
  argsValidate(registerUserSchema(), data);

  let user: User | undefined;

  const hashedPassword = await bcrypt.hash(data.password, 12);

  try {
    user = await User.create({
      ...data,
      password: hashedPassword
    }).save();

    return !!user;
  } catch (err) {
    user = await User.findOne({ email: data.email });

    if (user) {
      throw new ApolloError(t('common.errors.emailAlreadyInUse'), ErrorCodes.EmailInUse);
    } else {
      throw new Error(err);
    }
  }
};
