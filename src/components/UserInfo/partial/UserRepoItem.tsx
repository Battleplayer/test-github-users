import { FC } from 'react';
import { IUserRepos } from 'interfaces';

const UserRepoItem: FC<IUserRepos> = ({ name, html_url, forks_count, stargazers_count }) => {
	return (
		<li>
			<a href={html_url} target="_blank" rel="noreferrer" className="paper">
				<p>{name}</p>
				<div>
					<p>Forks:{forks_count}</p>
					<p>Stars:{stargazers_count}</p>
				</div>
			</a>
		</li>
	);
};

export default UserRepoItem;
