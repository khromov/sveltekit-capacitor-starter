import type { PageLoad } from './$types';
import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';

export const load: PageLoad = async ({ params }) => {
    customElements.define('jeep-sqlite', JeepSqlite);
	const jeepEl = document.createElement("jeep-sqlite");
	document.body.appendChild(jeepEl);
	const res = await customElements.whenDefined('jeep-sqlite');
	console.log('Init JeepSqlite');

	return {
		hello: 'world',
	};
};  