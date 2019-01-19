import { Activity, Profile, Task} from "../interfaces/ActivityFeed";
import { ParsedActivity} from "../interfaces/ParsedFeed";
import parseTemplate from "./ParseTemplate";

export function  parseActivity(
  activities: Activity[],
  profiles: Profile[],
  tasks: Task[]
) {
  return activities.map(a => {
    const { task_id: taskId, profile_ids: profileIds, template } = a;

    let tokens = parseTemplate(template);
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
