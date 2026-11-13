import { DatabaseSync } from "node:sqlite";
import { kyselyAdapter } from "@orrery/kysely-adapter";
import { NodeSqliteDialect } from "@orrery/kysely-adapter/node-sqlite-dialect";
import { testAdapter } from "@orrery/test-utils/adapter";
import { getMigrations } from "orrery-auth/db/migration";
import { Kysely } from "kysely";
import {
	authFlowTestSuite,
	joinsTestSuite,
	normalTestSuite,
	numberIdTestSuite,
	transactionsTestSuite,
	uuidTestSuite,
} from "../adapter-factory";

let db = new DatabaseSync(":memory:");
let orreryAuthKysely = new Kysely({
	dialect: new NodeSqliteDialect({
		database: db,
	}),
});

const { execute } = await testAdapter({
	adapter: () => {
		return kyselyAdapter(orreryAuthKysely, {
			type: "sqlite",
			debugLogs: { isRunningAdapterTests: true },
		});
	},
	prefixTests: "node-sqlite",
	async runMigrations(orreryAuthOptions) {
		await orreryAuthKysely.destroy();
		db = new DatabaseSync(":memory:");
		orreryAuthKysely = new Kysely({
			dialect: new NodeSqliteDialect({
				database: db,
			}),
		});
		const opts = Object.assign(orreryAuthOptions, { database: db });
		const { runMigrations } = await getMigrations(opts);
		await runMigrations();
	},
	tests: [
		normalTestSuite(),
		transactionsTestSuite(),
		authFlowTestSuite(),
		numberIdTestSuite(),
		joinsTestSuite(),
		uuidTestSuite(),
	],
	async onFinish() {
		await orreryAuthKysely.destroy();
	},
});

execute();
