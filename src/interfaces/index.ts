export interface ISearchUser {
	avatar_url: string;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	score: number;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: string;
	url: string;
}

export interface ISearchUsersResult {
	incomplete_results: boolean;
	total_count: number;
	items: ISearchUser[];
}

export interface ISearchedUser {
	avatar_url: string;
	bio?: string;
	blog: string;
	company?: string;
	created_at: string;
	email: string;
	events_url: string;
	followers: number;
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	hireable?: string;
	html_url: string;
	id: number;
	location: string;
	login: string;
	name: string;
	node_id: string;
	organizations_url: string;
	public_gists: 17;
	public_repos: 44;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	twitter_username?: string;
	type: string;
	updated_at: string;
	url: string;
}

export interface IUserRepos {
	forks: number;
	forks_count: number;
	html_url: string;
	name: string;
	stargazers_count: number;
}
