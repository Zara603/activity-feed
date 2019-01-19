import { shallow } from "enzyme";
import * as React from "react";

import { ParsedActivity } from "../../interfaces/ParsedFeed";
import {
  MouseOutHandler,
  MouseOverHandler
} from "../../interfaces/EventHandlers";
import ProfileElement from "../ProfileElement";
import TaskElement from "../TaskElement";
import TextElement from "../TextElement";

import ActivityLine from "../ActivityLine";

describe("Describe Component ActivityLine", () => {
  const onMouseOut = jest.fn();
  const onMouseOver = jest.fn();
  const activityBase: ParsedActivity = {
    created_at: new Date(),
    event: "joined",
    template: [],
    profile_ids: [2663]
  };

  it("if template is a text kind, it should render a TextElement", () => {
    const content = "signed up";
    const activity: ParsedActivity = {
      ...activityBase,
      template: [
        {
          kind: "text",
          content
        }
      ]
    };

    const wrapper = shallow(
      <ActivityLine
        activity={activity}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      />
    );

    const text = wrapper.find(TextElement);
    expect(text.length).toBe(1);
  });

  it("if template is a Link kind and a Profile type, it should render a ProfileElement", () => {
    const id = 222;
    const entity = {
      abbreviated_name: `abbr_name${id}`,
      allow_calls_on_tasks: false,
      avatar: {
        medium: {
          url: `url_medium${id}`
        },
        profile: {
          url: `url_profile${id}`
        },
        resize_url: `resize_url${id}`,
        small: {
          url: `url_small${id}`
        },
        source_url: `source_url${id}`,
        thumb: {
          url: `url_thumb${id}`
        },
        tiny: {
          url: `url_tiny${id}`
        },
        url: `url${id}`
      },
      average_rating: id,
      comments_count: id,
      first_name: `first_name${id}`,
      id,
      posted_tasks_count: id,
      pro: false,
      ranking: id,
      ranking_position: null,
      received_reviews_count: id,
      run_tasks_count: id,
      slug: `slug${id}`
    };
    const activity: ParsedActivity = {
      ...activityBase,
      template: [
        {
          kind: "link",
          type: "profiles",
          entity
        }
      ]
    };

    const wrapper = shallow(
      <ActivityLine
        activity={activity}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      />
    );

    const profile = wrapper.find(ProfileElement);
    expect(profile.length).toBe(1);
  });

  it("if template is a Link kind and Task type, it should render a TaskElement", () => {
    const id = 238;
    const entity = {
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
      state: `state${id}`
    };
    const activity: ParsedActivity = {
      ...activityBase,
      template: [
        {
          kind: "link",
          type: "task",
          entity
        }
      ]
    };

    const wrapper = shallow(
      <ActivityLine
        activity={activity}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      />
    );

    const task = wrapper.find(TaskElement);
    expect(task.length).toBe(1);
  });
});
