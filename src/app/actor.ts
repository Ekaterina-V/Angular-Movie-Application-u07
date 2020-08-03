export interface ActorResult {
  //profile_path: string | null;
  //adult: boolean;
  id: number;
  // known_for: oneOf
  name: string;
  //popularity: number;
}

// unused
export interface ActorResponse {
  page: number;
  results: ActorResult[];
//  total_results: number;
//  total_pages: number;
}

// unused
export interface ActorDetail {
  birthday: string | null;
//  known_for_department: string;
//  deathday: null | string;
  id: number;
  name: string;
//  also_known_as: string[];
//  gender: number;
//  biography: string;
//  popularity: number;
//  place_of_birth: string | null;
//  profile_path: string | null;
//  adult: boolean;
//  imdb_id: string;
//  homepage: null | string;
}