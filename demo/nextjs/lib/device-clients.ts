/**
 * Device clients this app registered, mapped to names users recognize.
 * The server accepts only these IDs, so the approval page can trust the name.
 */
export const deviceClients = new Map<string, string>([
	["demo-cli", "Orrery Auth demo CLI"],
	["orrery-auth-cli", "Orrery Auth CLI"],
]);
