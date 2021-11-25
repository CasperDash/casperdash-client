import { getQuerySelector } from '@redux-requests/core';
import { tokensSelector, getTokensAddressList, getMassagedTokenData } from './tokens';

jest.mock('@redux-requests/core', () => {
	return {
		getQuerySelector: jest.fn().mockReturnValue(() => ({ data: [{ decimals: { hex: 0x00 } }] })),
	};
});
test('tokensSelector should call getQuerySelector ', () => {
	tokensSelector;
	expect(getQuerySelector).toHaveBeenCalled();
});

test('getTokensAddressList should return default token address list', () => {
	expect(getTokensAddressList({ tokens: { address: ['test'] } })).toEqual([
		'43f01f0a9798e64837e7244eafd7b1e6462ebd2023336feb9505ae59c4af3bf8',
		'test',
	]);
	expect(getTokensAddressList({})).toEqual(['43f01f0a9798e64837e7244eafd7b1e6462ebd2023336feb9505ae59c4af3bf8']);
});

describe('getMassagedTokenData', () => {
	test('Should return empty array if no data', () => {
		getQuerySelector.mockReturnValue();
		expect(getMassagedTokenData()).toEqual([
			{
				balance: {
					displayValue: undefined,
				},
				decimals: {
					displayValue: 0,
					hex: 0,
				},
				total_supply: {
					displayValue: 0,
				},
			},
		]);
	});
});
