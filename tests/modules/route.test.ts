import { parseNumberParam } from '../../src/modules/route';

describe('route module', () => {
    describe('parseNumberParam', () => {
        it('should parse recipe id', () => {
            expect(
                parseNumberParam('recipeId', { recipeId: '1' })
            ).toEqual(
                1
            );
        });

        it('should not parse recipe id', () => {
            expect(
                parseNumberParam('recipeId', { recipeId: undefined })
            ).toEqual(
                null
            );
        });
    })
});