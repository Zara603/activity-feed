import { shallow } from 'enzyme'
import * as React from 'react'

import LinkElement from '../LinkElement'

describe('LinkElement', () => {
    const content = 'James T.'
    const slug = '/users/james-tippett'
    const onMouseOut = jest.fn()
    const onMouseOver = jest.fn()

    const wrapper = shallow(
        <LinkElement
            content={content}
            slug={slug}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
        />,
    )

    it('should render an a element', () => {
        expect(wrapper.find('a').length).toBe(1)
    })

    it('should render the slug', () => {
        const anchor = wrapper.find('a')
        expect(anchor.prop('href')).toBe(slug)
    })

    it('should render the content', () => {
        const children = wrapper.find('a').children()
        expect(children.length).toBe(1)
        expect(children.text()).toBe(content)
    })

    it('should triggered over handler with the slug', () => {
        wrapper.simulate('mouseover')
        expect(onMouseOver).toHaveBeenCalledWith(slug)
    })

    it('should triggered over handler with nothing', () => {
        wrapper.simulate('mouseout')
        expect(onMouseOut).toHaveBeenCalledWith()
    })
})
