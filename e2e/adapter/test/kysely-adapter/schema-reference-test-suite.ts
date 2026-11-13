import type { OrreryAuthOptions } from "@orrery/core";
import { createTestSuite } from "@orrery/test-utils/adapter";
import { getNormalTestSuiteTests } from "../adapter-factory";

export const DEFAULT_SCHEMA_REFERENCE = "internal";

const DEFAULT_ORRERY_AUTH_OPTIONS: OrreryAuthOptions = {
	user: {
		modelName: `${DEFAULT_SCHEMA_REFERENCE}.users`,
	},
	session: {
		modelName: `${DEFAULT_SCHEMA_REFERENCE}.sessions`,
	},
	account: {
		modelName: `${DEFAULT_SCHEMA_REFERENCE}.accounts`,
	},
};

/**
 * This tests using schema references for the models.
 * For example, users can modify table names to use something like `public.user` instead of just a plain `user`.
 */
export const schemaRefTestSuite = createTestSuite(
	"schema-reference",
	{
		defaultOrreryAuthOptions: DEFAULT_ORRERY_AUTH_OPTIONS,
		alwaysMigrate: true,
		prefixTests: "schema-reference",
	},
	(helpers) => {
		const {
			"findOne - should find a model with modified model name": _,
			...tests
		} = getNormalTestSuiteTests(helpers);
		return tests;
	},
);

/**
 * Same as the normal standard notation test suite, but with joins enabled.
 */
export const schemaRefJoinTestSuite = createTestSuite(
	"schema-reference-join",
	{
		defaultOrreryAuthOptions: {
			...DEFAULT_ORRERY_AUTH_OPTIONS,
			advanced: {
				database: {
					joins: true,
				},
			},
		},
		alwaysMigrate: true,
		prefixTests: "schema-reference-join",
	},
	(helpers) => {
		const {
			"findOne - should find a model with modified model name": _,
			...tests
		} = getNormalTestSuiteTests(helpers);
		return tests;
	},
);
