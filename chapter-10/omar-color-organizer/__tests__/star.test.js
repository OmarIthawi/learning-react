import { shallow } from 'enzyme'
import Star from '../src/components/ui/Star'

describe('<Star /> component', () => {
    it("render default star", () => expect(
        shallow( <Star /> ).find('div.star').length
    ).toBe(1))

    it("render selected star", () => expect(
        shallow( <Star selected={true} /> ).find('div.star.selected').length
    ).toBe(1))

    it('invokes onClick', () => {
        const _click = jest.fn()

        shallow(<Star onClick={_click} />)
            .find('div.star')
            .simulate('click')

        expect(_click).toBeCalled()
    })
})