import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeadingModule from '../Common/Layout/HeadingComponent/Heading';
import { useAutoRefreshEffect } from '../hooks/useAutoRefreshEffect';
import { getPublicKey } from '../../selectors/user';
import { getNFTInfo } from '../../selectors/NFTs';
import { fetchNFTInfo } from '../../actions/NFTActions';
import { NFTModal } from './NFTModal';

const NFTs = () => {
	const dispatch = useDispatch();

	// Selector
	const publicKey = useSelector(getPublicKey);
	const NFTInfo = useSelector(getNFTInfo);
	// State
	const [showModal, setShowModal] = useState(false);
	const [selectedMetadata, setSelectedMetadata] = useState([]);
	const [selectedTokenId, setSelectedTokenId] = useState();

	// Effect
	useAutoRefreshEffect(() => {
		dispatch(fetchNFTInfo(publicKey));
	}, [dispatch, publicKey]);

	// Functions
	const onCloseModal = () => {
		setShowModal(false);
		setSelectedMetadata([]);
	};

	const onOpenModal = (metadata, tokenId) => {
		setShowModal(true);
		setSelectedMetadata(metadata);
		setSelectedTokenId(tokenId);
	};

	return (
		<>
			<section className="cd_wallets_page">
				<HeadingModule name={'NFTs'} />

				<div className="cd_nft_row row">
					{NFTInfo && NFTInfo.length ? (
						NFTInfo.map(({ tokenId, metadata = [] }) => {
							const image = metadata.find((meta) => meta.key === 'image');
							const tokenName = metadata.find((meta) => meta.key === 'name');
							return tokenId ? (
								<div
									className="cd_nft_col col-lg-3 col-md-3"
									key={tokenId}
									onClick={() => onOpenModal(metadata, tokenId)}
								>
									<div className="cd_nft_content position-relative">
										<div className="cd_nft_image">
											<img
												src={image ? image.value : 'assets/image/nft-empty.png'}
												alt="nft-image"
											/>
										</div>
										<div className="cd_nft_content_text">
											{tokenName ? tokenName.value : tokenId || 'NFT'}
										</div>
									</div>
								</div>
							) : null;
						})
					) : (
						<div className="cd_nft_empty">
							<img src="assets/image/nft-empty.png" alt="no-nft-image" />
							<div className="cd_no_nft_message">You do not have any NFT collectables yet.</div>
						</div>
					)}
				</div>

				<NFTModal
					show={showModal}
					handleClose={onCloseModal}
					metadata={selectedMetadata}
					tokenId={selectedTokenId}
				/>
			</section>
		</>
	);
};

export default NFTs;
