import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

const rawDatabaseUrl = process.env.DATABASE_URL;
const databaseUrl = (rawDatabaseUrl ?? '').trim();
if (!databaseUrl) {
  throw new Error('DATABASE_URL is required');
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

export const prismaClientOptions = { adapter };

const prisma = new PrismaClient(prismaClientOptions);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role_id: {
        type: 'string',
        input: true,
      },
      last_name: {
        type: 'string',
        input: true,
      },
      phone: {
        type: 'string',
        input: true,
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
});
