type Mods = Record<string, string | boolean>
export const classNames = (cls: string, mods?: Mods, additional?: string[]) =>{
    return[
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ]
        .join(' ');
}
