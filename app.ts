import { resolve } from "path";
import stringify from 'safe-stable-stringify';
import * as TJS from "typescript-json-schema";
import * as fs from 'fs';

const types: { [source: string]: string } = {
    './types/columns.yaml.ts': './schemas/columns.yaml.json',
    './types/fields.yaml.ts': './schemas/fields.yaml.json',
};

if (!fs.existsSync('./schemas')) {
    fs.mkdirSync('./schemas');
}

for (const source in types) {
    if (Object.prototype.hasOwnProperty.call(types, source)) {
        const destination = types[source];

        const program: TJS.Program = TJS.getProgramFromFiles([resolve(source)],);
        const settings: TJS.PartialArgs = { required: true, };
        const generator: TJS.JsonSchemaGenerator | null = TJS.buildGenerator(program, settings);

        if (generator) {
            const schema = stringify(generator?.getSchemaForSymbol('Root'), null, 4);

            fs.writeFileSync(destination, schema);
        }
    }
}

console.log('Done');
