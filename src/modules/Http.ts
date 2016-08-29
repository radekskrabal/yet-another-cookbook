function isSuccess(status: number): boolean {
    return status >= 200 && status < 300;
}

export function parseJson(response: Response): Promise<any> {
    if (!isSuccess(response.status)) {
        throw new Error(response.statusText);
    }

    return response.json(); // parse data
}