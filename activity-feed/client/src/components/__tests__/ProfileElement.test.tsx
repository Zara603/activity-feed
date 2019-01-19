import { shallow } from "enzyme";
import * as React from "react";

import ProfileElement from "../ProfileElement";
import LinkElement from "../LinkElement";

describe("ProfileElement", () => {
  const id = 229;
  const profile = {
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
    slug: `slug${id}`,
    default_location_id: id,
    default_location: {
      id: 1,
      display_name: "one",
      latitude: "0",
      longitude: "0"
    }
  };
  const onMouseOut = jest.fn();
  const onMouseOver = jest.fn();

  const wrapper = shallow(
    <ProfileElement
      profile={profile}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    />
  );

  it("should render a LinkElement", () => {
    expect(wrapper.find(LinkElement).length).toBe(1);
  });
  it("should assign first-name as value of content", () => {
    const link = wrapper.find(LinkElement).first();
    expect(link.prop("content")).toBe(profile.abbreviated_name);
  });
  it("should render slug", () => {
    const link = wrapper.find(LinkElement).first();
    expect(link.prop("slug")).toBe(`/users/${profile.slug}`);
  });
  it("should has the event handlers", () => {
    const link = wrapper.find(LinkElement).first();
    expect(link.prop("onMouseOut")).toBe(onMouseOut);
    expect(link.prop("onMouseOver")).toBe(onMouseOver);
  });
});
