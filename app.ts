import { resolve } from "path";
import stringify from 'safe-stable-stringify';
import * as TJS from "typescript-json-schema";
import * as fs from 'fs';

const configs: { [key: string]: { source: string, destination: string } } = {
    'columns.yaml': {
        source: './types/columns.yaml.ts',
        destination: './schemas/columns.yaml.json',
    },
    'fields.yaml': {
        source: './types/fields.yaml.ts',
        destination: './schemas/fields.yaml.json',
    },
    'config_list.yaml': {
        source: './types/config_list.yaml.ts',
        destination: './schemas/config_list.yaml.json',
    },
    'config_filter.yaml': {
        source: './types/config_filter.yaml.ts',
        destination: './schemas/config_filter.yaml.json',
    },
    'config_form.yaml': {
        source: './types/config_form.yaml.ts',
        destination: './schemas/config_form.yaml.json',
    },
    'config_relation.yaml': {
        source: './types/config_relation.yaml.ts',
        destination: './schemas/config_relation.yaml.json',
    },
    'config_import_export.yaml': {
        source: './types/config_import_export.yaml.ts',
        destination: './schemas/config_import_export.yaml.json',
    },
    'config_reorder.yaml': {
        source: './types/config_reorder.yaml.ts',
        destination: './schemas/config_reorder.yaml.json',
    }
};

if (!fs.existsSync('./schemas')) {
    fs.mkdirSync('./schemas');
}

for (const key in configs) {
    if (Object.prototype.hasOwnProperty.call(configs, key)) {
        const config = configs[key];

        console.log('Generating schema for ' + key + '...');

        const source = config.source;
        const destination = config.destination;

        const program: TJS.Program = TJS.getProgramFromFiles([resolve(source)],);
        const settings: TJS.PartialArgs = { required: true, };
        const generator: TJS.JsonSchemaGenerator | null = TJS.buildGenerator(program, settings);

        if (generator) {
            const schema = stringify(generator?.getSchemaForSymbol('Root'), null, 4);

            fs.writeFileSync(destination, schema);
        }
    }
}

console.log('Done.');
