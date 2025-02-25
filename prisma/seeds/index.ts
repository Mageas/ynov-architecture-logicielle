import { PrismaClient } from '@prisma/client';
import { users } from './users.seed';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

load();

async function load() {
  try {
    for (const item of users) {
      await prisma.user.create({
        data: {
          ...item,
          password: await bcrypt.hash(item.password, 10),
        },
      });
    }

    // for (const item of plantSpecies) {
    //   await prisma.plantSpecies.create({
    //     data: item,
    //   });
    // }
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
