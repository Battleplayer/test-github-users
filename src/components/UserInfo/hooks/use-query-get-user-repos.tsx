import { useQuery } from 'react-query';
import { IUserRepos } from 'interfaces';
import { getUserRepos } from '../api';

interface IUseQueryGetUserInfoProps {
	data: IUserRepos[];
	isLoading: boolean;
	error: unknown;
}

export const useQueryGetUserRepos = (id): IUseQueryGetUserInfoProps => {
	const { isLoading, error, data } = useQuery(['user-repos', id], () => getUserRepos(id));

	return {
		isLoading,
		error,
		data,
	};
};
