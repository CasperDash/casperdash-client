import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
import CasperApp from '@zondax/ledger-casper';
import { useAutoRefreshEffect } from '../../../hooks/useAutoRefreshEffect';
import { getPublicKey } from '../../../../selectors/user';
import { getTheme } from '../../../../selectors/settings';
import { isConnectedCasper, getSignerStatus } from '../../../../selectors/signer';
import { updateConnectStatus, handleUnlockSigner, handleLockSigner } from '../../../../actions/signerActions';
import { updatePublicKeyFromSigner, getUserDetails, setPublicKey } from '../../../../actions/userActions';
import { switchTheme } from '../../../../actions/settingActions';
import { connectCasperSigner } from '../../../../services/casperServices';
import { isValidPublicKey } from '../../../../helpers/validator';
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/settings';
import { MiddleTruncatedText } from '../../MiddleTruncatedText/MiddleTruncatedText';
import { AddPublicKeyModal } from './AddPublicKeyModal';

const SIGNER_EVENTS = {
	connected: 'signer:connected',
	disconnected: 'signer:disconnected',
	tabUpdated: 'signer:tabUpdated',
	activeKeyChanged: 'signer:activeKeyChanged',
	locked: 'signer:locked',
	unlocked: 'signer:unlocked',
};

const HeadingModule = (props) => {
	const publicKey = useSelector(getPublicKey);
	const { isUnlocked, isConnected, isAvailable } = useSelector(getSignerStatus);
	const theme = useSelector(getTheme);

	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [showPublicKeyInput, setShowPublicKeyInput] = useState(false);
	const [publicKeyError, setPublicKeyError] = useState('');

	const dispatch = useDispatch();

	const dispatchUnlockSinger = useCallback(
		(event) => {
			dispatch(handleUnlockSigner(event.detail));
		},
		[dispatch],
	);

	const dispatchDisconnectedSinger = useCallback(() => {
		dispatch(handleLockSigner());
	}, [dispatch]);

	useEffect(() => {
		[SIGNER_EVENTS.unlocked, SIGNER_EVENTS.activeKeyChanged, SIGNER_EVENTS.connected].forEach((event) =>
			window.addEventListener(event, dispatchUnlockSinger),
		);
		[SIGNER_EVENTS.locked, SIGNER_EVENTS.disconnected].forEach((event) =>
			window.addEventListener(event, dispatchDisconnectedSinger),
		);

		return () => {
			[SIGNER_EVENTS.unlocked, SIGNER_EVENTS.activeKeyChanged, SIGNER_EVENTS.connected].forEach((event) =>
				window.removeEventListener(event, dispatchUnlockSinger),
			);
			[SIGNER_EVENTS.locked, SIGNER_EVENTS.disconnected].forEach((event) =>
				window.removeEventListener(event, dispatchDisconnectedSinger),
			);
		};
	});

	useEffect(() => {
		isConnectedCasper().then((isConnected) => {
			dispatch(updateConnectStatus(isConnected));
			if (isConnected) {
				dispatch(updatePublicKeyFromSigner());
			}
		});
	}, [isConnected, dispatch]);

	useAutoRefreshEffect(() => {
		if (publicKey) {
			dispatch(getUserDetails(publicKey));
		}
	}, [publicKey, dispatch]);

	const handleCloseError = () => setShowError(false);
	const handleShowError = () => setShowError(true);

	const handleConnectCasper = () => {
		const connectMessage = connectCasperSigner();
		if (connectMessage) {
			handleShowError();
			setErrorMessage(connectMessage);
		}
	};

	const handleConnectLedger = async () => {
		try {
			const transport = await TransportWebUSB.create();
			const app = new CasperApp(transport);
			const { publicKey } = await app.getAddressAndPubKey("m/44'/506'/0'/0/0");
			if (!publicKey) {
				return;
			}

			const key = `02${publicKey.toString('hex')}`;
			dispatch(setPublicKey(key));
		} catch (error) {
			console.error('Ledger connection error', error);
			if ('TransportInterfaceNotAvailable' === error.name) {
				alert('You must open the Casper app on your Ledger device to connect.');
			} else if ('TransportOpenUserCancelled' === error.name) {
				alert(error.message);
			} else {
				alert(error);
			}
		}
	};

	const onClickViewMode = () => {
		setShowPublicKeyInput(true);
	};

	const onClosePublicKeyModal = () => {
		setShowPublicKeyInput(false);
	};

	const handleAddPublicKey = (pk) => {
		if (isValidPublicKey(pk)) {
			dispatch(setPublicKey(pk));
			onClosePublicKeyModal();
		} else {
			setPublicKeyError('Invalid public key');
		}
	};

	const onSwitchTheme = () => {
		const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
		dispatch(switchTheme(newTheme));
	};

	return (
		<>
			<div className="cd_all_page_heading_section">
				<div className="cd_all_page_heading">
					<h2>{props.name}</h2>
				</div>

				<div className="cd_all_page_notify_logout_btn">
					<Button className="cd_theme_switch" onClick={onSwitchTheme}>
						<i className={`bi ${theme === DARK_THEME ? 'bi-brightness-high-fill' : 'bi-moon-fill'}`} />
					</Button>
					<Button className="cd_all_page_logout_btn" onClick={handleConnectLedger}>{`Connect Ledger`}</Button>
					{!publicKey && !isAvailable && (
						<Button className="cd_all_page_logout_btn" onClick={onClickViewMode}>
							View Mode
						</Button>
					)}
					{!isConnected ? (
						<Button
							className="cd_all_page_logout_btn"
							onClick={handleConnectCasper}
						>{`Connect Casper`}</Button>
					) : !isUnlocked ? (
						<Button
							className="cd_all_page_logout_btn"
							onClick={handleConnectCasper}
						>{`Unlock Casper`}</Button>
					) : (
						<div className="cd_heading_public_key">
							<MiddleTruncatedText placement="bottom">{publicKey}</MiddleTruncatedText>
						</div>
					)}
				</div>
				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					show={showError}
					onHide={handleCloseError}
				>
					<Modal.Body>
						<p>{errorMessage}</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleCloseError}>Close</Button>
					</Modal.Footer>
				</Modal>
				<AddPublicKeyModal
					show={showPublicKeyInput}
					handleClose={onClosePublicKeyModal}
					handleAddPublicKey={handleAddPublicKey}
					error={publicKeyError}
				/>
			</div>
		</>
	);
};

export default HeadingModule;
