import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const i = await import('jeep-sqlite/dist/components/jeep-sqlite');
    customElements.define('jeep-sqlite', i.JeepSqlite);
	const jeepEl = document.createElement("jeep-sqlite");
	document.body.appendChild(jeepEl);
	const res = await customElements.whenDefined('jeep-sqlite');
	console.log('Init JeepSqlite');

	return {
		hello: 'world',
	};
};  