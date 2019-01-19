import {
    Profile,
    Task,
    ActivityBase,
    Location,
} from './ActivityFeed'
import { EnhancedToken } from './TemplateTokens'


export interface ParsedLocation extends Location {}

export interface ParsedProfile extends Profile {
    default_location : ParsedLocation | null
}

export interface ParsedTask extends Task {
    clone_tasks : ParsedTask[] | null
    created_at : Date
    deadline : Date
    default_location : ParsedLocation | null
    first_posted_at : Date
    locations : ParsedLocation[]
    posted_or_edited_at : Date
    origin_task : ParsedTask | null
    review_by_runner : ParsedProfile | null
    runner : ParsedProfile | null
    sender : ParsedProfile
}

export interface ParsedActivity extends ActivityBase {
    template : EnhancedToken[]
}
export type ParsedFeed = ParsedActivity[]
export default ParsedFeed
