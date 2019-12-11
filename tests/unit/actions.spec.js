import { actions } from '../../src/store/index.js'

describe('getData', () => {
    it('makes an API and commits the response', async () => {
        const store = { commit: jest.fn() }
        await actions.getData(store)
        expect(store.commit).toHaveBeenCalledWith('SET_DATA', { id: 1 })
    })
})
