import C from '../src/constants'
import { color } from '../src/reducers'


describe('color reducer', () => {
    it('ADD_COLOR success', () => {
        const state = {}
        const action = {
            type: C.ADD_COLOR,
            id: 'xyz',
            title: 'Test Teal',
            color: '#90C3D4',
            date: new Date().toString()
        }

        const results = color(state, action)
        expect(resuts).toEqual({
            id: 'xyz',
            title: 'Test Teal',
            color: '#90C3D4',
            date: action.date,
            rating: 0
        })
    })
    it('RATE_COLOR success', () => {

    })
})