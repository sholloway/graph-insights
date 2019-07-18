import keytar from 'keytar';

export class BasicAuthCredential{
	constructor(scheme, host, port, uri, username, password){
		this.scheme = scheme;
		this.host = host;
		this.port = port;
		this.uri = uri;
		this.username = username;
		this.password = password;
	}

	toJSONString(){
		return JSON.stringify(this);
	}

	static fromJSONString(str){
		let json = JSON.parse(str);
		return new BasicAuthCredential(json.scheme, json.host, json.port, json.uri, json.username, json.password);
	}

	url(){
		return `${this.scheme}://${this.host}:${this.port}${this.uri}`;
	}
}

export class KeyStoreManager{
	constructor(){
		this.service = 'insights';
		this.account = 'neo4j';
	}

	/**
	 * Saves a credential object to the OS key store.
	 * @param {BasicAuthCredential} credentials 
	 * @return {Promise}
	 */
	async save(credentials){
		let credStr = credentials.toJSONString();
		return keytar.setPassword(this.service, this.account, credStr);
	}

	/**
	 * Finds the credential if it exists.
	 * @returns {BasicAuthCredential}
	 */
	async getCredentials(){
		let str = await keytar.getPassword(this.service, this.account);
		return BasicAuthCredential.fromJSONString(str);
	}
}
