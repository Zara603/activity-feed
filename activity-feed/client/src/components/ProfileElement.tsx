import React from "react";

import { ParsedProfile } from "../interfaces/ParsedFeed";
import { MouseOutHandler, MouseOverHandler } from "../interfaces/EventHandlers";

import LinkElement from "./LinkElement";

interface Props {
  profile: ParsedProfile;
  onMouseOver: MouseOverHandler;
  onMouseOut: MouseOutHandler;
}

export const ProfileElement = ({ profile, onMouseOut, onMouseOver }: Props) => {
  return (
    <LinkElement
      content={profile.abbreviated_name}
      slug={`/users/${profile.slug}`}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    />
  );
};

export default ProfileElement;
