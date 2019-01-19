import React from "react";

import { Task } from "../interfaces/ActivityFeed";
import { MouseOutHandler, MouseOverHandler } from "../interfaces/EventHandlers";

import LinkElement from "./LinkElement";

interface Props {
  task: Task;
  onMouseOver: MouseOverHandler;
  onMouseOut: MouseOutHandler;
}

export const TaskElement = ({ task, onMouseOver, onMouseOut }: Props) => {
  return (
    <LinkElement
      content={task.name}
      slug={`/task/${task.slug}`}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    />
  );
};

export default TaskElement;
