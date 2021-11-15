import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HeadingModule from '../Common/Layout/HeadingComponent/Heading';
import StakingAccountList from '../Common/Layout/Stake/AllStakingAccountList';
import StakingForm from '../Common/Layout/Stake/Form';
import { MessageModal } from '../Common/Layout/Modal/MessageModal';

import { getMassagedUserDetails, getPublicKey } from '../../selectors/user';

import './style.scss';
import { getTokenAddressFromLocalStorage } from '../../actions/tokensActions';
import { getCurrentPrice } from '../../selectors/price';

const Stake = () => {
	const dispatch = useDispatch();

	// State
	const [send, setSend] = useState(false);
	const [showError, setShowError] = useState(false);

	// Selector
	const publicKey = useSelector(getPublicKey);
	const currentPrice = useSelector(getCurrentPrice);

	useEffect(() => {
		if (publicKey) {
			dispatch(getTokenAddressFromLocalStorage(publicKey));
		}
	}, [publicKey, dispatch]);

	// Function
	const handleToggle = () => {
		if (publicKey) {
			setSend(!send);
		} else {
			setShowError(true);
		}
	};

	const stakingDeployList = [
		{
			validator: '123',
			amount: '1000',
			status: 'peding',
		},
	];

	const toggleStakingForm = send ? 'toggle_form' : '';
	return (
		<>
			<section className="cd_staking_page">
				<HeadingModule name={'Staking'} />
				<div className={`cd_staking_component ${toggleStakingForm}`}>
					<Button variant="outline-danger" className="cd_btn_stake_cspr" onClick={handleToggle}>
						Stake Your CSPR
					</Button>
					<div className="cd_staking_form">
						<h3 className="cd_transaction_list_main_heading">How much would you like to stake?</h3>
						<StakingForm handleToggle={handleToggle} fromAddress={publicKey} csprPrice={currentPrice} />
					</div>
					<h3 className="cd_transaction_list_main_heading">
						Your Delegations
						<Link to={'/history'}>View rewards</Link>
					</h3>
					<StakingAccountList stakingDeployList={stakingDeployList} />
				</div>
				<MessageModal
					type="Error"
					message="Unlock your Signer!"
					show={showError}
					handleClose={() => setShowError(false)}
				/>
			</section>
		</>
	);
};

export default Stake;