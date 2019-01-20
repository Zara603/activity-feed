import { Activity, Profile, Task} from "../interfaces/ActivityFeed";
import { ParsedActivity} from "../interfaces/ParsedFeed";
import parseActivityTemplate from "./ParseActivityTemplate";

export function  parseActivity(
  activities: Activity[],
  profiles: Profile[],
  tasks: Task[]
) {
  return activities.map(a => {
    const { template } = a;

    let tokens = parseActivityTemplate(template);
    const newActivity = {
        template:tokens.map(token => {
            if (token.kind === "text") {
              return token;
            }
      
            if (token.kind === "link") {
              if (token.type === "profiles") {
                const entity = profiles.reduce((acc,profile) => {
                    if(profile.id === token.id) {
                        acc = profile
                    }
                     return acc
                }, {});
    
                return {
                  kind: "link",
                  type: "profiles",
                  entity
                };
              }
            }

            if (token.kind === "link") {
                if (token.type === "task") {
                  const entity = tasks.reduce((acc,task) => {
                      if(task.id === token.id) {
                          acc = task
                      }
                       return acc
                  }, {});
                  return {
                    kind: "link",
                    type: "tasks",
                    entity
                  };
                }
              }
          })
    }

    return newActivity

  }).filter(a => !!a) as ParsedActivity[]
}

export default parseActivity;
