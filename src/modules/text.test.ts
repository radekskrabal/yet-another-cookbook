import { decorate } from './text'

describe('text module', () => {
    it('should handle empty text and empty query', () => {
        expect(
            decorate('', '')
        ).toEqual(
            ''
        );
    });

    it('should handle empty text', () => {
        expect(
            decorate('', 'q')
        ).toEqual(
            ''
        );
    });

    it('should handle empty query', () => {
        expect(
            decorate('text', '')
        ).toEqual(
            'text'
        );
    });

    it('should handle query', () => {
        expect(
            decorate('tex', 't')
        ).toEqual(
            '<mark>t</mark>ex'
        );

        expect(
            decorate('tex', 'e')
        ).toEqual(
            't<mark>e</mark>x'
        );

        expect(
            decorate('tex', 'x')
        ).toEqual(
            'te<mark>x</mark>'
        );
    });

    it('should handle query with multiple occurrences', () => {
        expect(
            decorate('text', 't')
        ).toEqual(
            '<mark>t</mark>ex<mark>t</mark>'
        );
    });
});