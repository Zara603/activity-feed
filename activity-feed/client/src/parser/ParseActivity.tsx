import { Activity, Profile, Task, LinkItem } from "../interfaces/ActivityFeed";
import { ParsedActivity } from "../interfaces/ParsedFeed";
import parseActivityTemplate from "./ParseActivityTemplate";

export function parseActivity(
  activities: Activity[],
  profiles: Profile[],
  tasks: Task[]
) {
  return activities
    .map(a => {
      const { template } = a;

      let tokens = parseActivityTemplate(template);
      const newActivity = {
        template: tokens.map(token => {
          if (token.kind === "text") {
            return token;
          }
          if (token.kind === "link") {
            let itemList: LinkItem[] =
            token.type === "profiles" ? profiles : tasks;
            return {
              kind: token.kind,
              type: token.type,
              entity: itemList.find(item => item.id === token.id)
            };
          }
        })
      };
      return newActivity;
    })
    .filter(a => !!a) as ParsedActivity[];
}

export default parseActivity;
