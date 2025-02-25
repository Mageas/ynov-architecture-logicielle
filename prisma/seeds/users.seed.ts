import { Roles } from '../../src/user/types/roles.type';

export const users = [
  {
    pseudo: 'admin',
    email: 'admin@test.fr',
    password: 'admin123',
    roles: {
      create: [
        {
          name: Roles.Admin,
        },
        {
          name: Roles.User,
        },
      ],
    },
  },
];
