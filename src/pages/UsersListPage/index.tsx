import { FC } from 'react';
import SearchField from 'components/common/SearchField';
import SearchedList from 'components/UsersList/SearchedList';
import { useQueryGetUsers } from 'components/UsersList/hooks/use-query-get-users';

const UsersListPage: FC = () => {
	const { isLoading, error, data, searchValue, handleSearch } = useQueryGetUsers();

	return (
		<>
			<SearchField value={searchValue} onSearch={handleSearch} />
			<SearchedList isLoading={isLoading} data={data} error={error} />
		</>
	);
};

export default UsersListPage;
