import SearchField from 'components/common/SearchField';
import SearchedList from './SearchedList';
import { useQueryGetUsers } from './hooks/use-query-get-users';

const UserList = () => {
	const { isLoading, error, data, searchValue, handleSearch } = useQueryGetUsers();

	return (
		<>
			<SearchField value={searchValue} onSearch={handleSearch} />
			<SearchedList isLoading={isLoading} data={data} error={error} />
		</>
	);
};

export default UserList;
