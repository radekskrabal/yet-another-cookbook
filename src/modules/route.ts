export function parseNumberParam(name: string, routeParams: any): number {
    return +routeParams[name] || null; // +undefined = NaN
}
