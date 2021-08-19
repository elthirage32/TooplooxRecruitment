export interface IUserModel {
  avatar_url: string;
  html_url: string;
  id: number;
  login: string;
  bio: string;
  name: string;
}

export interface IUserSearchResponse {
  incomplete_results: boolean;
  items: Array<IUserModel>;
  total_count: number;
}

export interface IRepoModel {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
}
