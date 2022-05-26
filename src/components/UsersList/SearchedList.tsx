import { FC } from 'react';
import { ISearchUsersResult } from 'interfaces';
import SearchedListItem from './partial/SearchedListItem';

interface ISearchedListProps {
	isLoading: boolean;
	error: unknown;
	data: ISearchUsersResult;
}

const SearchedList: FC<ISearchedListProps> = ({ data, isLoading, error }) => {
	if (isLoading) {
		return <h2>Loading...</h2>;
	}
	if (error) {
		return <h2>error</h2>;
	}

	if (!data?.items?.length) {
		return <h2>type something</h2>;
	}

	if (data?.total_count === 0) {
		return <h2>no search results</h2>;
	}

	return (
		<>
			<h2>Number of users: {data?.total_count}</h2>
			<ul>
				{data.items.map((item) => (
					<SearchedListItem item={item} key={item.id} />
				))}
			</ul>
		</>
	);
};

export default SearchedList;
