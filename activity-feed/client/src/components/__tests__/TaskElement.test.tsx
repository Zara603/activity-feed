import { shallow } from 'enzyme'
import * as React from 'react'

import TaskElement from '../TaskElement'
import LinkElement from '../LinkElement'

describe('TaskElement', () => {
    const id = 77;
    const task = {
        assigned_price: id,
        bids_count: id,
        clone_task_slugs: [],
        comments_count: id,
        distance: null,
        fixed_price: false,
        id,
        name: `name${id}`,
        online_or_phone: false,
        origin_task_slug: null,
        price: id,
        private_messages_count: id,
        project: false,
        runners_required_count: id,
        runners_assigned_count: id,
        slug: `slug${id}`,
        sort_present: false,
        state: `state${id}`,
        clone_task_ids: [id],
        created_at: new Date(),
        deadline: new Date(),
        default_location_id: id,
        first_posted_at: new Date(),
        location_ids: [id],
        origin_task_id: id,
        posted_or_edited_at: new Date(),
        review_by_runner_id: id,
        runner_id: id,
        sender_id: id,
      };

    const onMouseOut = jest.fn()
    const onMouseOver = jest.fn()

    const wrapper = shallow(
        <TaskElement
            task={task}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
        />,
    )
    it('should render a LinkElement', () => {
        expect(wrapper.find(LinkElement).length).toBe(1)
    })
    it('should pass the task name as content', () => {
        const link = wrapper.find(LinkElement).first()
        expect(link.prop('content')).toBe(task.name)
    })
    it('should compose the slug', () => {
        const link = wrapper.find(LinkElement).first()
        expect(link.prop('slug')).toBe(`/task/${task.slug}`)
    })
    it('should pass the handlers unchanged', () => {
        const link = wrapper.find(LinkElement).first()
        expect(link.prop('onMouseOut')).toBe(onMouseOut)
        expect(link.prop('onMouseOver')).toBe(onMouseOver)
    })
})
