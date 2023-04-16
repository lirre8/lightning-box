import { Database } from "sqlite";

export interface IUserDB {
  alias: string;
  pubkey: string;
  supportsForward: boolean;
}

export async function createUser(db: Database, { alias, pubkey, supportsForward }: IUserDB) {
  await db.run(
    `INSERT INTO payment
      (alias, pubkey, supportsForward)
    VALUES
      ($alias, $pubkey, $supportsForward)
    `,
    {
      $alias: alias,
      $pubkey: pubkey,
      $supportsForward: supportsForward,
    },
  );
}

export function getUserByAlias(db: Database, alias: string) {
  return db.get<IUserDB>(`SELECT * FROM user WHERE alias = $alias`, {
    $alias: alias,
  });
}
