export const baseUrl = '/Playground/yet-another-cookbook/';

export function buildUrl(path: string = '', base: string = baseUrl): string {
    return `${base}${path}`;
}

// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
export function isSuccess(status: number): boolean {
    return status >= 200 && status < 300;
}

export function parseJson(response: Response): Promise<any> {
    if (!isSuccess(response.status)) {
        throw new Error(response.statusText);
    }

    return response.json(); // parse data
}