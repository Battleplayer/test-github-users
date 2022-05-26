import { FC } from 'react';
import './SearchField.scss';

interface ISearchFieldProps {
	value: string;
	onSearch: (value: string) => void;
}

const Index: FC<ISearchFieldProps> = ({ value, onSearch }) => {
	return <input value={value} onChange={(e) => onSearch(e.target.value.toLowerCase())} />;
};

export default Index;
