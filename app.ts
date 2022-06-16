import { resolve } from "path";
import stringify from 'safe-stable-stringify';
import * as TJS from "typescript-json-schema";
import * as fs from 'fs';

const configs: { [key: string]: { source: string, destination: string, root:string } } = {
    'columns.yaml': {
        source: './types/columns.yaml.ts',
        destination: './schemas/columns.yaml.json',
        root: 'ColumnsRoot'
    },
    'fields.yaml': {
        source: './types/fields.yaml.ts',
        destination: './schemas/fields.yaml.json',
        root: 'FieldsRoot'
    },
    'config_list.yaml': {
        source: './types/config_list.yaml.ts',
        destination: './schemas/config_list.yaml.json',
        root: 'ConfigListRoot'
    },
    'config_filter.yaml': {
        source: './types/config_filter.yaml.ts',
        destination: './schemas/config_filter.yaml.json',
        root: 'ConfigFilterRoot'
    },
    'config_form.yaml': {
        source: './types/config_form.yaml.ts',
        destination: './schemas/config_form.yaml.json',
        root: 'ConfigFormRoot'
    },
    'config_relation.yaml': {
        source: './types/config_relation.yaml.ts',
        destination: './schemas/config_relation.yaml.json',
        root: 'ConfigRelationRoot'
    },
    'config_import_export.yaml': {
        source: './types/config_import_export.yaml.ts',
        destination: './schemas/config_import_export.yaml.json',
        root: 'ConfigImportExportRoot'
    },
    'config_reorder.yaml': {
        source: './types/config_reorder.yaml.ts',
        destination: './schemas/config_reorder.yaml.json',
        root: 'ConfigReorderRoot'
    },
    'theme.yaml': {
        source: './types/theme.yaml.ts',
        destination: './schemas/theme.yaml.json',
        root: 'ThemeRoot'
    },
    'version.yaml': {
        source: './types/version.yaml.ts',
        destination: './schemas/version.yaml.json',
        root: 'VersionRoot'
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
            const schema = stringify(generator?.getSchemaForSymbol(config.root), null, 4);

            fs.writeFileSync(destination, schema);
        }
    }
}

console.log('Done.');
