import React from "react";

import ParsedFeed from "../interfaces/ParsedFeed";
import { MouseOutHandler, MouseOverHandler } from "../interfaces/EventHandlers";
import ActivityLine from "./ActivityLine";

interface Props {
  items: ParsedFeed;
  onMouseOver: MouseOverHandler;
  onMouseOut: MouseOutHandler;
}

export const ActivityContainer = class MyComponent extends React.Component<
  Props
> {
  public render() {
    return (
      <div className="activityLine">
        {this.props.items.map((activity, index) => (
          <ActivityLine
            key={index.toString()}
            activity={activity}
            onMouseOut={this.props.onMouseOut}
            onMouseOver={this.props.onMouseOver}
          />
        ))}
      </div>
    );
  }
};

export default ActivityContainer;
