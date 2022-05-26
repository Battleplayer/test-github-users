import { FC } from 'react';
import { ISearchUser } from 'interfaces';
import '../styles.scss';
import { Link } from 'react-router-dom';

const SearchedListItem: FC<{ item: ISearchUser }> = ({ item }) => {
	const { avatar_url, login } = item;

	return (
		<li>
			<Link to={login} className="search-item paper">
				{avatar_url ? <img src={avatar_url} alt="user avatar" /> : <span>no avatar</span>}
				<span>{login}</span>
			</Link>
		</li>
	);
};

export default SearchedListItem;
