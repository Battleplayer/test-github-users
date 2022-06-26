import {useQuery} from 'react-query';
import {useCallback, useEffect, useState} from 'react';
import useDebounce from 'helper/useDebounce';
import {ISearchUsersResult} from 'interfaces';
import {useSearchParams} from 'react-router-dom';
import {getUsers} from '../api';

interface IUseQueryUser {
	isLoading: boolean;
	error: unknown;
	data: ISearchUsersResult;
	searchValue: string;
	handleSearch: (val: string) => void;
}

export const useQueryGetUsers = (): IUseQueryUser => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get('searchBy') ?? '');
	const search = useDebounce(searchValue);
	useEffect(() => {
		if (searchParams.get('searchBy')) {
			setSearchValue(searchParams.get('searchBy'));
		} else {
			searchParams.delete('searchBy');
		}
	}, [searchParams]);

	useEffect(() => {
		if (!searchValue) {
			searchParams.delete('searchBy');
			setSearchParams(searchParams);
		}
	}, [searchParams, searchValue, setSearchParams]);

	const handleSearch = useCallback(
		(value: string) => {
			setSearchValue(value);
			setSearchParams({ searchBy: value });
		},
		[setSearchParams],
	);

    const {isLoading, error, data} = useQuery(['users-list', search], () => getUsers(search), {
        staleTime: 5 * 6 * 1000
    });

	return {
		isLoading,
		error,
		data,
		searchValue,
		handleSearch,
	};
};
