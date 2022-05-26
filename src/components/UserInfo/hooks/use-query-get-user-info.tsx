import { useQuery } from 'react-query';
import { ISearchedUser } from 'interfaces';
import { getUserInfo } from '../api';

interface IUseQueryGetUserInfoProps {
	data: ISearchedUser;
	isLoading: boolean;
	error: unknown;
}

export const useQueryGetUserInfo = (id): IUseQueryGetUserInfoProps => {
	const { isLoading, error, data } = useQuery(['user-info', id], () => getUserInfo(id));

	return {
		isLoading,
		error,
		data,
	};
};
