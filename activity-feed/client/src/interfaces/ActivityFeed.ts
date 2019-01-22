export interface LinkItem {
  id: number;
}

export interface Task extends LinkItem {
  assigned_price: number | null;
  bids_count: number;
  clone_task_slugs: any[];
  comments_count: number;
  distance: any;
  fixed_price: boolean;
  name: string;
  online_or_phone: boolean;
  origin_task_slug: any;
  price: number;
  private_messages_count: number;
  project: boolean;
  runners_required_count: number;
  runners_assigned_count: number;
  slug: string;
  sort_present: boolean;
  state: string;
  clone_task_ids: number[] | null;
  created_at: Date;
  deadline: Date;
  default_location_id: number | null;
  first_posted_at: Date;
  location_ids: number[];
  origin_task_id: number;
  posted_or_edited_at: Date;
  review_by_runner_id: number | null;
  runner_id: number | null;
  sender_id: number;
}

export interface Location {
  id: number;
  display_name: string;
  latitude: string;
  longitude: string;
}

export interface AvatarImage {
  url: string;
}

export interface Avatar {
  medium: AvatarImage;
  profile: AvatarImage;
  resize_url: string;
  small: AvatarImage;
  source_url: string;
  thumb: AvatarImage;
  tiny: AvatarImage;
  url: string;
}

export interface Profile extends LinkItem {
  abbreviated_name: string;
  allow_calls_on_tasks: boolean;
  avatar: Avatar;
  average_rating: number;
  comments_count: number;
  first_name: string;
  posted_tasks_count: number;
  pro: boolean;
  ranking: number;
  ranking_position: any;
  received_reviews_count: number;
  run_tasks_count: number;
  slug: string;
  default_location_id: number;
}

export interface ActivityBase {
  event: string;
  created_at: Date;
  profile_ids: number[];
  task_id?: number;
}

export interface Activity extends ActivityBase {
  template: string;
}

export interface RootObject {
  activity_feed: Activity[];
  locations: Location[];
  profiles: Profile[];
  tasks: Task[];
}
export default RootObject;
