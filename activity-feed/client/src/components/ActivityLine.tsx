import React from "react";

import { ParsedActivity } from "../interfaces/ParsedFeed";
import { MouseOutHandler, MouseOverHandler } from "../interfaces/EventHandlers";
import ProfileElement from "./ProfileElement";
import TaskElement from "./TaskElement";
import TextElement from "./TextElement";

import "./ActivityLine.css";

interface Props {
  activity: ParsedActivity;
  onMouseOver: MouseOverHandler;
  onMouseOut: MouseOutHandler;
}

export const ActivityLine = (props: Props) => {
  return (
    <div className="activityLine">
      {props.activity.template.map((token, index) => {
        if (token.kind === "text") {
          return <TextElement key={index.toString()} content={token.content} />;
        } else if (token.kind === "link") {
          if (token.type === "profiles") {
            return (
              <ProfileElement
                key={index.toString()}
                profile={token.entity}
                onMouseOut={props.onMouseOut}
                onMouseOver={props.onMouseOver}
              />
            );
          } else
            return (
              <TaskElement
                key={index.toString()}
                task={token.entity}
                onMouseOut={props.onMouseOut}
                onMouseOver={props.onMouseOver}
              />
            );
        }
      })}
    </div>
  );
};

export default ActivityLine;
