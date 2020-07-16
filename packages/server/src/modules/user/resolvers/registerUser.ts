import { MutationResolvers } from '../typesGenerated';
import { User } from '../../../entity/User';
import bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-express';

export const registerUser: MutationResolvers['registerUser'] = async (_, { data }) => {
  let user: User | undefined;

  const hashedPassword = await bcrypt.hash(data.password, 12);

  try {
    user = await User.create({
      ...data,
      password: hashedPassword
    }).save();

    return !!user;
  } catch {
    throw new ApolloError('message', 'code', {
      test: 'test'
    });
  }
};
