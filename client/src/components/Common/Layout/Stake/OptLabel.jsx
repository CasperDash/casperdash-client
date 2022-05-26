import React from 'react';
import './OptLabel.scss';

const CustomOptLabel = (e) => (
	<>
		<div>
			<div>
				<span>
					{e.icon} {e.label}
				</span>

				{e.priority && (
					<span>
						<svg width="40" height="42" viewBox="0 0 50 73" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_28_126)">
								<path
									d="M25.082 25.3694C31.9707 25.3694 36.7651 28.6712 38.7333 34.9523C39.3641 36.9643 39.5912 39.0795 40.0833 41.1302C40.1842 41.5429 40.588 42.0717 41.0043 42.2394C46.7071 44.4449 48.915 48.6495 49.9369 53.5376C50.1388 54.5049 49.7351 55.1498 48.5365 55.382C47.8678 55.5238 47.2117 55.7302 46.5557 55.9366C43.7169 56.8652 42.0893 58.9804 42.2912 61.5857C42.3669 62.6046 42.0641 63.2624 40.8151 63.5074C37.6483 64.1523 35.2637 65.5968 33.4595 68.0087C32.3871 69.4274 30.7595 70.614 29.1698 71.6716C26.5582 73.4127 23.6437 73.3353 20.805 72.0327C18.4456 70.9622 16.5658 69.3887 15.5564 67.2735C14.6732 65.4162 13.0709 64.436 10.9766 63.9717C9.52563 63.6493 9.09666 62.9786 8.9705 61.7921C8.62985 58.3226 5.9551 56.388 1.84206 56.5814C0.706555 56.633 -0.063064 56.3364 -0.0252139 55.3175C0.164037 50.3906 1.84206 45.941 6.68687 42.9617C8.54153 41.8267 9.26068 40.6143 9.6518 38.8345C10.106 36.7451 10.8378 34.6685 11.8093 32.721C14.2317 27.9102 18.9755 25.3694 25.082 25.3694Z"
									fill="#D12529"
								/>
								<path
									d="M15.6825 25.6274C15.1653 24.5053 14.7741 23.3316 14.3326 22.1837C13.5377 20.1072 12.7681 18.0307 11.9985 15.9542C11.8345 15.5028 11.6074 15.2578 11.1027 15.2578C10.6232 15.2578 10.169 15.1675 9.76531 14.858C9.03355 14.2905 8.78121 13.2845 9.19756 12.4332C9.6013 11.5949 10.6359 11.1306 11.4686 11.4014C12.4022 11.711 12.9952 12.6138 12.8312 13.5553C12.7302 14.1744 12.9195 14.6129 13.4242 14.9611C14.1433 15.4512 14.8498 15.9671 15.5564 16.4959C15.8718 16.741 15.998 16.6378 16.1368 16.3154C16.6288 15.1804 17.1335 14.0454 17.6381 12.9233C17.7012 12.7814 17.7769 12.6396 17.8526 12.4719C18.925 13.5037 19.9722 14.4839 21.0068 15.4899C21.2591 15.735 21.3853 15.7866 21.5998 15.4383C22.1928 14.4323 22.8236 13.4392 23.4418 12.4461C23.8077 11.8528 23.7951 11.7754 23.3409 11.1048C22.6722 10.1504 22.811 8.83481 23.6563 8.13834C24.5395 7.40318 25.839 7.51926 26.6086 8.39629C27.2647 9.14435 27.353 10.2277 26.7095 11.0661C26.2806 11.6078 26.3184 12.0463 26.6717 12.5751C27.2899 13.5166 27.8703 14.471 28.438 15.4383C28.6273 15.7479 28.7535 15.7608 28.9932 15.5157C29.9394 14.5871 30.9109 13.6843 31.8572 12.7557C32.1221 12.4977 32.2357 12.4719 32.3997 12.8588C32.8917 14.0325 33.4216 15.1804 33.9263 16.3412C34.0525 16.6249 34.1282 16.7281 34.4184 16.4959C35.188 15.9027 35.9702 15.3223 36.7651 14.7806C37.2445 14.4581 37.2824 14.0712 37.1814 13.5682C37.0174 12.7686 37.3076 12.1237 37.9258 11.6594C38.5566 11.1822 39.2632 11.0919 39.9697 11.4917C40.6384 11.8657 41.0295 12.459 41.0169 13.2587C41.0043 14.2647 40.222 15.1159 39.2506 15.103C38.5062 15.0901 38.2034 15.4383 37.9636 16.0961C36.8786 19.0754 35.7431 22.029 34.6328 24.9954C34.4814 25.3952 34.2922 25.5371 33.8758 25.5113C33.2324 25.4855 32.5763 25.55 31.9329 25.5758C31.8572 25.5758 31.7815 25.5629 31.6931 25.5629C26.432 25.5887 21.1834 25.6016 15.9223 25.6274C15.8339 25.6145 15.7582 25.6274 15.6825 25.6274Z"
									fill="#FDD240"
								/>
								<path
									d="M34.2796 27.936C34.1786 28.0392 34.0651 28.0521 33.9263 28.0521C28.0469 28.0392 22.1675 28.0521 16.2881 28.0392C16.0863 28.0392 15.8844 28.0005 15.6699 27.9747C15.4428 27.4846 15.6447 26.9816 15.6321 26.4786C15.6195 26.1046 15.6573 25.7177 15.6699 25.3436C20.8932 25.3436 26.1165 25.3436 31.3399 25.3436C31.5417 25.3436 31.7436 25.3178 31.9455 25.3049C32.5637 25.3178 33.1693 25.3565 33.7875 25.3307C34.1282 25.3178 34.2669 25.421 34.2417 25.8466C34.2417 26.5302 34.2796 27.2396 34.2796 27.936Z"
									fill="#6190CB"
								/>
								<path
									d="M28.1857 6.92597C27.9334 6.88727 27.7441 6.78409 27.6306 6.53904C27.5044 6.28109 27.5675 6.04893 27.7694 5.88127C28.8292 4.96554 29.788 3.93374 30.7848 2.95353C31.1254 2.61819 31.5039 2.6053 31.7436 2.90194C32.0212 3.25017 31.8698 3.52102 31.6048 3.79187C30.646 4.74628 29.6871 5.7136 28.7282 6.66802C28.5642 6.82279 28.4002 6.90017 28.1857 6.92597Z"
									fill="#FDD240"
								/>
								<path
									d="M22.3189 6.34558C22.3063 6.7583 21.9152 7.01625 21.5619 6.83569C21.3979 6.7583 21.2465 6.61643 21.1204 6.48746C20.2246 5.61042 19.3162 4.7205 18.433 3.83057C18.2438 3.6371 18.0419 3.44364 18.1302 3.1212C18.2438 2.70848 18.7232 2.54081 19.026 2.85035C20.0732 3.85636 21.0951 4.88816 22.1297 5.90707C22.2432 6.03604 22.3063 6.20371 22.3189 6.34558Z"
									fill="#FDD240"
								/>
								<path
									d="M25.5488 2.77297C25.5488 3.45653 25.5615 4.12721 25.5488 4.81078C25.5362 5.30088 25.347 5.52014 24.9558 5.49434C24.5143 5.48145 24.4133 5.17191 24.4133 4.79788C24.4133 3.46943 24.4133 2.14099 24.4133 0.82544C24.4133 0.748054 24.4133 0.657772 24.4259 0.580387C24.5016 0.245051 24.6783 -0.0128996 25.0315 -2.12201e-06C25.3722 0.0128954 25.5615 0.283743 25.5615 0.631977C25.5488 1.34134 25.5488 2.0507 25.5488 2.77297Z"
									fill="#FDD240"
								/>
								<path
									d="M22.2054 34.7975C19.8965 34.7975 17.5877 34.7975 15.2662 34.7975C14.9003 34.7975 14.7111 34.9652 14.7868 35.3521C15.0139 36.4355 15.1905 37.5447 15.6321 38.5636C16.2251 39.9436 17.2975 40.5369 18.4961 40.5756C19.9975 40.5756 21.0573 39.892 21.7259 38.6797C22.2937 37.6479 22.4703 36.5 22.7227 35.3779C22.8236 34.9523 22.5713 34.7975 22.2054 34.7975Z"
									fill="white"
								/>
								<path
									d="M35.3268 34.617C33.0179 34.617 30.7091 34.617 28.3876 34.617C28.0217 34.617 27.8325 34.7846 27.9082 35.1716C28.1353 36.2549 28.3119 37.3641 28.7535 38.383C29.3465 39.7631 30.4189 40.3564 31.6175 40.3951C33.1189 40.3951 34.1787 39.7115 34.8473 38.4991C35.4151 37.4673 35.5917 36.3194 35.8441 35.1973C35.945 34.7717 35.6927 34.617 35.3268 34.617Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_28_126">
									<rect width="50" height="73" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</span>
				)}
			</div>
		</div>
		<div>
			<small>Rate: {e.rate}%</small>
		</div>
	</>
);

export default CustomOptLabel;
