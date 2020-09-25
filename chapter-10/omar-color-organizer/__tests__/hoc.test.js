import { mount } from 'enzyme'
import Expandable from '../src/components/HOC/Expandable'

describe("Expandable Higher Order Component", () => {

    let props,
        wrapper,
        instance,
        ComposedComponent,
        MockComponent = ({collapsed, expandCollapse}) =>
            <div onClick={expandCollapse}>
                {(collapsed) ? 'collapsed' : 'expanded'}
            </div>

    beforeAll(() => {
        ComposedComponent = Expandable(MockComponent)
        wrapper = mount(<ComposedComponent foo="foo" gnar="gnar" />)
        instance = wrapper.instance()
        props = wrapper.find(MockComponent).props()
    })

    describe('rending ui', () => {
        it('test', () => {
            expect(props.collapsed).toBe(true)
        })

        it('test', () => {
            expect(typeof props.expandCollapse).toBe("function")
        })

        it('2', () => {
            expect(props.foo).toBe("foo")
            expect(props.gnar).toBe("gnar")
        })
    })

    describe('expand collapse functionality', () => {
        it('3', () => expect(
            wrapper.first().is(ComposedComponent)
        ).toBe(true))
    })
    describe('expand collapse functionality 4', () => {
        it('4', () => expect(
            instance.state.collapsed
        ).toBe(true))
    })
    describe('expand collapse functionality 5', () => {

        it('5', () => {
            instance.expandCollapse()
            expect(instance.state.collapsed).toBe(false)
        })
    })
})
