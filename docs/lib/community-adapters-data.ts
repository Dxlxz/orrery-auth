export interface CommunityAdapter {
	name: string;
	url: string;
	database: string;
	databaseUrl: string;
	author: {
		name: string;
		url: string;
		avatar: string;
	};
}

export const communityAdapters: CommunityAdapter[] = [
	{
		name: "@convex-dev/orrery-auth",
		url: "https://github.com/get-convex/orrery-auth",
		database: "Convex",
		databaseUrl: "https://www.convex.dev/",
		author: {
			name: "erquhart",
			url: "https://github.com/erquhart",
			avatar: "https://github.com/erquhart.png",
		},
	},
	{
		name: "surreal-orrery-auth",
		url: "https://github.com/oskar-gmerek/surreal-orrery-auth",
		database: "SurrealDB",
		databaseUrl: "https://surrealdb.com/",
		author: {
			name: "Oskar Gmerek",
			url: "https://oskargmerek.com",
			avatar: "https://github.com/oskar-gmerek.png",
		},
	},
	{
		name: "surrealdb-orrery-auth",
		url: "https://github.com/Necmttn/surrealdb-orrery-auth",
		database: "SurrealDB",
		databaseUrl: "https://surrealdb.com/",
		author: {
			name: "Necmttn",
			url: "https://github.com/Necmttn",
			avatar: "https://github.com/Necmttn.png",
		},
	},
	{
		name: "orrery-auth-surrealdb",
		url: "https://github.com/msanchezdev/orrery-auth-surrealdb",
		database: "SurrealDB",
		databaseUrl: "https://surrealdb.com/",
		author: {
			name: "msanchezdev",
			url: "https://github.com/msanchezdev",
			avatar: "https://github.com/msanchezdev.png",
		},
	},
	{
		name: "payload-auth",
		url: "https://github.com/payload-auth/payload-auth",
		database: "Payload CMS",
		databaseUrl: "https://payloadcms.com/",
		author: {
			name: "forrestdevs",
			url: "https://github.com/forrestdevs",
			avatar: "https://github.com/forrestdevs.png",
		},
	},
	{
		name: "@delmaredigital/payload-orrery-auth",
		url: "https://github.com/delmaredigital/payload-orrery-auth",
		database: "Payload CMS",
		databaseUrl: "https://payloadcms.com/",
		author: {
			name: "Delmare Digital",
			url: "https://github.com/delmaredigital",
			avatar: "https://github.com/delmaredigital.png",
		},
	},
	{
		name: "@hedystia/orrery-auth-typeorm",
		url: "https://github.com/Zastinian/orrery-auth-typeorm",
		database: "TypeORM",
		databaseUrl: "https://typeorm.io/",
		author: {
			name: "Zastinian",
			url: "https://github.com/Zastinian",
			avatar: "https://github.com/Zastinian.png",
		},
	},
	{
		name: "orrery-auth-instantdb",
		url: "https://github.com/daveyplate/orrery-auth-instantdb",
		database: "InstantDB",
		databaseUrl: "https://www.instantdb.com/",
		author: {
			name: "daveycodez",
			url: "https://github.com/daveycodez",
			avatar: "https://github.com/daveycodez.png",
		},
	},
	{
		name: "@nerdfolio/remult-orrery-auth",
		url: "https://github.com/nerdfolio/remult-orrery-auth",
		database: "Remult",
		databaseUrl: "https://remult.dev/",
		author: {
			name: "Tai Vo",
			url: "https://github.com/taivo",
			avatar: "https://github.com/taivo.png",
		},
	},
	{
		name: "pocketbase-orrery-auth",
		url: "https://github.com/LightInn/pocketbase-orrery-auth",
		database: "PocketBase",
		databaseUrl: "https://pocketbase.io/",
		author: {
			name: "LightInn",
			url: "https://github.com/LightInn",
			avatar: "https://github.com/LightInn.png",
		},
	},
	{
		name: "orrery-auth-firestore",
		url: "https://github.com/yultyyev/orrery-auth-firestore",
		database: "Firebase Firestore",
		databaseUrl: "https://firebase.google.com/docs/firestore",
		author: {
			name: "yultyyev",
			url: "https://github.com/yultyyev",
			avatar: "https://github.com/yultyyev.png",
		},
	},
	{
		name: "@zenstackhq/orrery-auth",
		url: "https://github.com/zenstackhq/zenstack/tree/main/packages/auth-adapters/orrery-auth",
		database: "ZenStack",
		databaseUrl: "https://zenstack.dev",
		author: {
			name: "zenstackhq",
			url: "https://github.com/zenstackhq",
			avatar: "https://github.com/zenstackhq.png",
		},
	},
	{
		name: "@strapi-community/plugin-orrery-auth",
		url: "https://github.com/strapi-community/plugin-orrery-auth",
		database: "Strapi CMS",
		databaseUrl: "https://strapi.io/",
		author: {
			name: "boazpoolman",
			url: "https://github.com/boazpoolman",
			avatar: "https://github.com/boazpoolman.png",
		},
	},
	{
		name: "neo4j-orrery-auth",
		url: "https://github.com/florianamette/orrery-auth-neo4j",
		database: "Neo4j",
		databaseUrl: "https://neo4j.com/",
		author: {
			name: "florianamette",
			url: "https://github.com/florianamette",
			avatar: "https://github.com/florianamette.png",
		},
	},
	{
		name: "@lubiah/orrery-auth-mikro-orm",
		url: "https://github.com/lubiah/orrery-auth-mikro-orm",
		database: "MikroORM",
		databaseUrl: "https://mikro-orm.io/",
		author: {
			name: "lubiah",
			url: "https://github.com/lubiah",
			avatar: "https://github.com/lubiah.png",
		},
	},
	{
		name: "orrery-auth-mikro-orm",
		url: "https://github.com/octet-stream/orrery-auth-mikro-orm",
		database: "MikroORM",
		databaseUrl: "https://mikro-orm.io/",
		author: {
			name: "octet-stream",
			url: "https://github.com/octet-stream",
			avatar: "https://github.com/octet-stream.png",
		},
	},
	{
		name: "@proofkit/orrery-auth",
		url: "https://github.com/proofsh/proofkit/tree/main/packages/orrery-auth",
		database: "FileMaker OData",
		databaseUrl: "https://www.claris.com/filemaker/",
		author: {
			name: "eluce2",
			url: "https://github.com/eluce2",
			avatar: "https://github.com/eluce2.png",
		},
	},
	{
		name: "@datar-platform/orrery-auth-dynamodb",
		url: "https://github.com/datar-platform/orrery-auth-dynamodb",
		database: "DynamoDB",
		databaseUrl: "https://aws.amazon.com/dynamodb/",
		author: {
			name: "joesome-git",
			url: "https://github.com/joesome-git",
			avatar: "https://github.com/joesome-git.png",
		},
	},
	{
		name: "@bjorntech/betterauth-dynamodb",
		url: "https://github.com/bjorntech/betterauth-dynamodb",
		database: "DynamoDB",
		databaseUrl: "https://aws.amazon.com/dynamodb/",
		author: {
			name: "BjornTech AB",
			url: "https://github.com/bjorntech",
			avatar: "https://github.com/bjorntech.png",
		},
	},
	{
		name: "orrery-auth-azure-cosmos",
		url: "https://github.com/9hsein5/orrery-auth-azure-cosmos",
		database: "Azure Cosmos DB",
		databaseUrl: "https://learn.microsoft.com/azure/cosmos-db/nosql/",
		author: {
			name: "9hsein5",
			url: "https://github.com/9hsein5",
			avatar: "https://github.com/9hsein5.png",
		},
	},
	{
		name: "orrery-auth-mongoose",
		url: "https://github.com/AshwinSathian/orrery-auth-mongoose",
		database: "Mongoose",
		databaseUrl: "https://mongoosejs.com",
		author: {
			name: "Ashwin Sathian",
			url: "https://github.com/AshwinSathian",
			avatar: "https://github.com/AshwinSathian.png",
		},
	},
	{
		name: "@ilbertt/orrery-auth-bun-sql",
		url: "https://github.com/ilbertt/orrery-auth-bun-sql",
		database: "Bun SQL",
		databaseUrl: "https://bun.com/docs/api/sql",
		author: {
			name: "ilbertt",
			url: "https://github.com/ilbertt",
			avatar: "https://github.com/ilbertt.png",
		},
	},
	{
		name: "@a77ay/orrery-auth-mikro-orm",
		url: "https://github.com/a77ay/orrery-auth-mikro-orm",
		database: "MikroORM",
		databaseUrl: "https://mikro-orm.io/",
		author: {
			name: "A77AY",
			url: "https://github.com/a77ay",
			avatar: "https://github.com/a77ay.png",
		},
	},
	{
		name: "orrery-auth-arcadedb",
		url: "https://github.com/DevSnap/orrery-auth-arcadedb",
		database: "ArcadeDB",
		databaseUrl: "https://arcadedb.com/",
		author: {
			name: "DevSnap",
			url: "https://github.com/DevSnap",
			avatar: "https://github.com/DevSnap.png",
		},
	},
	{
		name: "@typesql/orrery-auth",
		url: "https://github.com/ismailkarsli/TypeSQL/tree/main/packages/orrery-auth",
		database: "TypeSQL",
		databaseUrl: "https://typesql.karsli.net/",
		author: {
			name: "ismailkarsli",
			url: "https://github.com/ismailkarsli",
			avatar: "https://github.com/ismailkarsli.png",
		},
	},
];
