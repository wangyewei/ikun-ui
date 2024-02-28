import fg from 'fast-glob';
import { copy } from 'fs-extra';

const __TYPES_D_TS_FILE_NAME__ = 'types.d.ts';
fg.sync(`components/*/src/${__TYPES_D_TS_FILE_NAME__}`).forEach((file) => {
	const tartget = `${file.match(/.*(?=\/src\/types\.d\.ts)/)[0]}/dist/${__TYPES_D_TS_FILE_NAME__}`;
	console.log(file);
	console.log(tartget);
	try {
		copy(file, tartget);
	} catch (err) {
		console.log(err);
	}
});
