import { resolve } from "path";
import stringify from 'safe-stable-stringify';
import * as TJS from "typescript-json-schema";
import * as fs from 'fs';

const configs: { [key: string]: { title: string, source: string, destination: string, root: string } } = {
    'columns.yaml': {
        title: 'OctoberCMS List Columns',
        source: './types/columns.yaml.ts',
        destination: './schemas/columns.yaml.json',
        root: 'ColumnsRoot'
    },
    'fields.yaml': {
        title: 'OctoberCMS Form Fields',
        source: './types/fields.yaml.ts',
        destination: './schemas/fields.yaml.json',
        root: 'FieldsRoot'
    },
    'repeater_groups.yaml': {
        title: 'OctoberCMS Repeater Groups',
        source: './types/repeater_groups.yaml.ts',
        destination: './schemas/repeater_groups.yaml.json',
        root: 'Groups'
    },
    'config_list.yaml': {
        title: 'OctoberCMS List Controller',
        source: './types/config_list.yaml.ts',
        destination: './schemas/config_list.yaml.json',
        root: 'ConfigListRoot'
    },
    'config_filter.yaml': {
        title: 'OctoberCMS Filter Scopes',
        source: './types/config_filter.yaml.ts',
        destination: './schemas/config_filter.yaml.json',
        root: 'ConfigFilterRoot'
    },
    'config_form.yaml': {
        title: 'OctoberCMS Form Controller',
        source: './types/config_form.yaml.ts',
        destination: './schemas/config_form.yaml.json',
        root: 'ConfigFormRoot'
    },
    'config_relation.yaml': {
        title: 'OctoberCMS Relation Controller',
        source: './types/config_relation.yaml.ts',
        destination: './schemas/config_relation.yaml.json',
        root: 'ConfigRelationRoot'
    },
    'config_import_export.yaml': {
        title: 'OctoberCMS Import Export Controller',
        source: './types/config_import_export.yaml.ts',
        destination: './schemas/config_import_export.yaml.json',
        root: 'ConfigImportExportRoot'
    },
    'config_reorder.yaml': {
        title: 'OctoberCMS Reorder Controller',
        source: './types/config_reorder.yaml.ts',
        destination: './schemas/config_reorder.yaml.json',
        root: 'ConfigReorderRoot'
    },
    'theme.yaml': {
        title: 'OctoberCMS Theme Settings',
        source: './types/theme.yaml.ts',
        destination: './schemas/theme.yaml.json',
        root: 'ThemeRoot'
    },
    'version.yaml': {
        title: 'OctoberCMS Version File',
        source: './types/version.yaml.ts',
        destination: './schemas/version.yaml.json',
        root: 'VersionRoot'
    },
    'blueprint.yaml': {
        title: 'OctoberCMS Tailor Blueprint',
        source: './types/blueprint.ts',
        destination: './schemas/blueprint.yaml.json',
        root: 'Blueprint'
    },
    'gromit-popup.yaml': {
        title: 'GromIT Popup Plugin for OctoberCMS',
        source: './types/plugins/gromit/oc-popupbuilder-plugin.ts',
        destination: './schemas/plugins/gromit-popup.yaml.json',
        root: 'PopupConfigRoot'
    }
};

if (!fs.existsSync('./schemas')) {
    fs.mkdirSync('./schemas');
}

if (!fs.existsSync('./schemas/plugins')) {
    fs.mkdirSync('./schemas/plugins');
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
            const schema = generator?.getSchemaForSymbol(config.root);
            schema.title = config.title;

            fs.writeFileSync(destination, stringify(schema, null, 4));
        }
    }
}

console.log('Done.');
