import { MigrationBuilder } from "node-pg-migrate"


export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTable("urls", {
		id: 'id',
		target_url: { type: 'text', notNull: true },
		short_url: { type: 'text', notNull: true }
	})
}


