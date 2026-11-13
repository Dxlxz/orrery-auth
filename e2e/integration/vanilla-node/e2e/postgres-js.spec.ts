import { expect, test } from "@playwright/test";
import { orreryAuth } from "orrery-auth";
import { getMigrations } from "orrery-auth/db/migration";
import { nextCookies } from "orrery-auth/next-js";
import { PostgresJSDialect } from "kysely-postgres-js";
import postgres from "postgres";

test.describe("postgres-js", () => {
	test("run migration", async () => {
		const sql = postgres(
			process.env.DATABASE_URL ||
				"postgres://user:password@localhost:5432/orrery_auth",
		);
		const dialect = new PostgresJSDialect({
			postgres: sql,
		});
		const auth = orreryAuth({
			database: {
				dialect,
				type: "postgres",
				transaction: false,
			},
			emailAndPassword: {
				enabled: true,
			},
			plugins: [nextCookies()],
			baseURL: "http://localhost:3000",
		});

		const { runMigrations } = await getMigrations(auth.options);
		await runMigrations();
		const allTables = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema='public'
      AND table_type='BASE TABLE';
    `;
		const tableNames = allTables.map((row) => row.table_name);
		const expectedTableNames = ["user", "session", "account", "verification"];
		expect([...tableNames].sort()).toEqual([...expectedTableNames].sort());
	});
});
