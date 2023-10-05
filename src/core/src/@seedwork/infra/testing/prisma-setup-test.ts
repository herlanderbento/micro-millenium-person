import { execSync } from 'node:child_process';

export function setupPrismaTests() {
  execSync(
    'npx dotenv-cli -e .env.test -- npx prisma migrate deploy --schema prisma/schema.prisma'
  );
}
