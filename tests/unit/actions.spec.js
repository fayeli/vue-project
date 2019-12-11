import { actions } from '../../src/store/index.js'

jest.mock('axios', () => {
    return {
        get: () => ({ data: { projectId: '8182fad6'}})
    }
})

describe('getData', () => {
    it('makes an API and commits the response', async () => {
        const store = { commit: jest.fn() }
        await actions.getData(store)
        expect(store.commit).toHaveBeenCalledWith('SET_DATA', { projectId: '8182fad6'})
    })
})
