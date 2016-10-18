import { baseUrl, buildUrl, isSuccess, parseJson } from './http';

describe('http module', () => {
    describe('buildUrl(path?: string, baseUrl = baseUrl): string', () => {
        it('should build', () => {
            expect(
                buildUrl('path', 'base/')
            ).toEqual(
                'base/path'
            );
        });

        it('should build empty string', () => {
            expect(
                buildUrl('', '')
            ).toEqual(
                ''
            );
        });

        it('should build for default base', () => {
            expect(
                buildUrl('path')
            ).toEqual(
                `${baseUrl}path`
            );
        });

        it('should build for default path and default base', () => {
            expect(
                buildUrl()
            ).toEqual(
                baseUrl
            );
        });
    });

    describe('isSuccess(status: number): boolean', () => {
        it('should handle 1xx informational status code', () => {
            expect(
                isSuccess(100)
            ).toEqual(
                false
            );
        });

        it('should handle success status code', () => {
            expect(
                isSuccess(200)
            ).toEqual(
                true
            );
        });

        it('should handle 3xx redirection status code', () => {
            expect(
                isSuccess(300)
            ).toEqual(
                false
            );
        });

        it('should handle 4xx client error status code', () => {
            expect(
                isSuccess(400)
            ).toEqual(
                false
            );
        });

        it('should handle 5xx server error status code', () => {
            expect(
                isSuccess(500)
            ).toEqual(
                false
            );
        });
    });

    describe('parseJson(response: Response): Promise<any>', () => {
        it('should throw for 1xx informational status code', () => {
            expect(
                () => parseJson(<Response>{ status: 100, statusText: 'Status Error' })
            ).toThrow(
                'Status Error'
            );
        });

        // TODO: Use mocks for this test
        // it('should not throw for success status code', () => {
        //    expect(
        //        parseJson(<Response>{ status: 200, statusText: 'Status Error' })
        //    ).toEqual()
        // });

        it('should throw for 3xx redirection status code', () => {
            expect(
                () => parseJson(<Response>{ status: 300, statusText: 'Status Error' })
            ).toThrow(
                'Status Error'
            );
        });

        it('should throw for 4xx client error status code', () => {
            expect(
                () => parseJson(<Response>{ status: 400, statusText: 'Status Error' })
            ).toThrow(
                'Status Error'
            );
        });

        it('should throw for 5xx server error status code', () => {
            expect(
                () => parseJson(<Response>{ status: 500, statusText: 'Status Error' })
            ).toThrow(
                'Status Error'
            );
        });

        // TODO: Write tests to parse JSON
    });
});