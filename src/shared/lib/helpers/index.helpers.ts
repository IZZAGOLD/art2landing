export function enumToArray<T extends string, K extends string | number>(
    list: Record<T, K>
) {
    return Object.values(list) as K[]
}
