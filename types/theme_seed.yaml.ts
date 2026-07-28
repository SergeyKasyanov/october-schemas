export type ThemeSeed = Array<{
    name: string,
    class: string,
    file: string,
    attributes: {
        file_format: 'json',
        blueprint_uuid: string
    }
}>