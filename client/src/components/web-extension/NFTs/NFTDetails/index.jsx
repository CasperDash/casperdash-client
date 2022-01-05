import React from 'react';
import { useLocation } from 'react-router-dom';
import nftHeaderImage from 'assets/image/nft-header.png';
import { MiddleTruncatedText } from '../../../Common/MiddleTruncatedText';
import Copy from '../../../Common/Button/Copy';
import './NFTDetails.scss';

export const NFTDetails = () => {
	const {
		state: { nftDetails },
	} = useLocation();
	const { image, nftName, nftContractName, metadata, contractAddress } = nftDetails || {};

	return (
		<section className="cd_we_nft_details">
			<div className="cd_we_nft_details_image">
				<img
					src={image}
					alt={nftName}
					onError={(e) => {
						e.target.error = null;
						e.target.src = nftHeaderImage;
					}}
				/>
			</div>
			<div className="cd_we_nft_content">
				<div className="cd_we_nft_content_header">
					<div className="cd_we_input_label">Collection</div>
					<div>{nftContractName}</div>
					<div className="cd_we_nft_contract">
						<div className="cd_we_nft_contract_address">
							<MiddleTruncatedText>{contractAddress}</MiddleTruncatedText>
						</div>
						<Copy value={contractAddress} />
					</div>
				</div>
				{metadata && metadata.length ? (
					<div className="cd_we_nft_attr">
						<div className="cd_we_nft_attr_header cd_we_input_label">Attributes</div>
						<div className="cd_we_nft_attr_grid hide_scroll_bar">
							{metadata.map(({ key, value }) => {
								return (
									<div key={key} className="cd_we_nft_attr_card">
										<div className="cd_we_nft_attr_key">{key}</div>
										<div className="cd_we_nft_attr_value">{value}</div>
									</div>
								);
							})}
						</div>
					</div>
				) : null}
			</div>
		</section>
	);
};