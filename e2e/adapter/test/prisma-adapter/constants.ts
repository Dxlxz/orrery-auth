export type Dialect = "sqlite" | "postgresql" | "mysql";

export const DATABASE_URLS: Record<Dialect, string> = {
	sqlite: "file:./dev.db",
	postgresql: "postgres://user:password@localhost:5434/orrery_auth",
	mysql: "mysql://user:password@localhost:3308/orrery_auth",
};
