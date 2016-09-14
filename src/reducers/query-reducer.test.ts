import * as actions from '../actions/action-types'
import queryReducer from './query-reducer'

describe('query reducer', () => {
    it('should handle initial state', () => {
        expect(
            queryReducer(undefined, {})
        ).toEqual(
            {
                query: ''
            }
        );
    });

    it('should handle SEARCH_RECIPES', () => {
        expect(
            queryReducer({ query: '' }, {
                type: actions.SEARCH_RECIPES,
                query: ''
            })
        ).toEqual(
            {
                query: ''
            }
        );

        expect(
            queryReducer({ query: '' }, {
                type: actions.SEARCH_RECIPES,
                query: 'query'
            })
        ).toEqual(
            {
                query: 'query'
            }
        );

        expect(
            queryReducer({ query: 'query' }, {
                type: actions.SEARCH_RECIPES,
                query: 'different query'
            })
        ).toEqual(
            {
                query: 'different query'
            }
        );

        expect(
            queryReducer({ query: 'query' }, {
                type: actions.SEARCH_RECIPES,
                query: ''
            })
        ).toEqual(
            {
                query: ''
            }
        );
    });
});