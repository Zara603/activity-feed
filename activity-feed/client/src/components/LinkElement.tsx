import React from "react";
import { MouseOutHandler, MouseOverHandler } from "../interfaces/EventHandlers";

import './LinkElement.css';

interface Props {
  content: string;
  slug: string;
  onMouseOver: MouseOverHandler;
  onMouseOut: MouseOutHandler;
}

export const LinkElement = class LinkElement extends React.Component<Props> {
  private onMouseOver = () => {
    this.props.onMouseOver(this.props.slug);
  };
  private onMouseOut = () => {
    this.props.onMouseOut();
  };

  public render() {
    return (
      <a
        href={this.props.slug}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        className="link"
      >
        {this.props.content}
      </a>
    );
  }
};

export default LinkElement;
