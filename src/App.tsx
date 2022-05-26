import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import UsersListPage from './pages/UsersListPage';
import UserInfoPage from './pages/UserInfoPage';

const App: FC = () => {
	return (
		<div className="container">
			<h1>Github searcher 2022</h1>
			<Routes>
				<Route path="/*" element={<UsersListPage />} />
				<Route path=":id/*" element={<UserInfoPage />} />
			</Routes>
		</div>
	);
};

export default App;
