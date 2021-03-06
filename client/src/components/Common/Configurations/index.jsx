import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getConfigurations } from '../../../actions/configurationActions';
import { saveConfigurationToLocalStorage } from '../../../services/configurationServices';

const WithConfigurations = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		async function getConfig() {
			try {
				const { data, error } = await dispatch(getConfigurations());

				if (!error) {
					saveConfigurationToLocalStorage(data);
				}
			} catch (error) {
				console.error(error);
			}
		}

		getConfig();
	}, [dispatch]);

	return children;
};

export default WithConfigurations;
