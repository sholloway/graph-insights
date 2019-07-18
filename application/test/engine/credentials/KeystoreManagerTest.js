import { expect } from 'chai';
import sinon from 'sinon';
import keytar from 'keytar';

import {BasicAuthCredential, KeyStoreManager} from './../../../src/engine/credentials/KeyStoreManager';

describe('Key Store Manager', function(){
	let credentials = new BasicAuthCredential(
		'bolt',
		'localhost',
		'7687',
		'/my/api',
		'some_guy',
		'password123'
	);

	describe('Basic Auth Credential Class', function(){
		it ('should generate a url', ()  => {
			expect(credentials.url()).to.equal('bolt://localhost:7687/my/api');
		});

		it ('should work with json', () => {
			let str = credentials.toJSONString();
			let fromJSON = BasicAuthCredential.fromJSONString(str);
			expect(fromJSON).eql(credentials);
		})
	});

	describe('Saving/Retrieving Credentials', function(){
		let service = 'key store manager tests';
		let account = 'key store test account';

		beforeEach(async () => {
			await keytar.deletePassword(service, account);
		});

		afterEach(async function() {
			await keytar.deletePassword(service, account);
		})

		it ('should store credentials', async () => {
			let keyStore = new KeyStoreManager();
			keyStore.service = service;
			keyStore.account = account;
			await keyStore.save(credentials);
			let retrievedCredentials = await keyStore.getCredentials();
			expect(retrievedCredentials).to.eql(credentials);
		});
	});
});
