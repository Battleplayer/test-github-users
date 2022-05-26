import SearchField from 'components/common/SearchField';
import { IUserRepos } from 'interfaces';
import { FC, useCallback, useMemo, useState } from 'react';

interface IUserReposProps {
	userRepos: IUserRepos[];
}

const UserRepos: FC<IUserReposProps> = ({ userRepos }) => {
	const [searchRepo, setSearchRepo] = useState('');

	const filteredRepos = useMemo(() => {
		if (!searchRepo.length) return userRepos;
		return userRepos.filter((repo) => repo.name.includes(searchRepo));
	}, [userRepos, searchRepo]);

	const handleSearch = useCallback((value) => {
		setSearchRepo(value);
	}, []);

	return (
		<div className="user-repos">
			<SearchField value={searchRepo} onSearch={handleSearch} />
			<ul>
				{filteredRepos?.map(({ stargazers_count, html_url, name, forks_count }) => (
					<li key={name}>
						<a href={html_url} target="_blank" rel="noreferrer" className="paper">
							<p>{name}</p>
							<div>
								<p>Forks:{forks_count}</p>
								<p>Stars:{stargazers_count}</p>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserRepos;
