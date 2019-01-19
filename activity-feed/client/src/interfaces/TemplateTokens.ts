import { ParsedProfile, ParsedTask } from './ParsedFeed'

export interface TextToken {
    kind : 'text'
    content : string
}

export interface LinkToken {
    kind : 'link'
    type : string
    id : number
}
export interface linkProfilesToken {
    kind : 'link' 
    type : 'profiles'
    entity : ParsedProfile
}
export interface linkTaskToken {
    kind : 'link'
    type : 'task'
    entity : ParsedTask
}

export type ParsingToken = TextToken | LinkToken
export type EnhancedToken = TextToken | linkProfilesToken | linkTaskToken
