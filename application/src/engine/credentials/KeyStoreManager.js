/**
 * Manages the credentials for communicating with the user's Neo4J instance.
 * @module engine/credentials
 */
import keytar from 'keytar';

/**
 * Represents a set of credentials for communicating with a service via Basic Auth.
 */
export class BasicAuthCredential{
	/**
	 * Creates a new BasicAuthCredential
	 * @param {string} scheme - e.g. bolt
	 * @param {string} host - e.g. localhost
	 * @param {string} port - e.g. 7342
	 * @param {string} uri - e.g. /my/api
	 * @param {string} username - The user name to connect with.
	 * @param {string} password - The password for the username.
	 */
	constructor(scheme, host, port, uri, username, password){
		this.scheme = scheme;
		this.host = host;
		this.port = port;
		this.uri = uri;
		this.username = username;
		this.password = password;
	}

	/**
	 * Creates a JSON string representation of the class.
	 * @returns {string}
	 */
	toJSONString(){
		return JSON.stringify(this);
	}

	/**
	 * Creates an instance of the BasicAuthCredential class from a JSON string.
	 * @param {string} str - The JSON string to parse.
	 * @returns {BasicAuthCredential}
	 */
	static fromJSONString(str){
		let json = JSON.parse(str);
		return new BasicAuthCredential(json.scheme, json.host, json.port, json.uri, json.username, json.password);
	}

	/**
	 * Creates a URL string from the instance's properties.
	 * @returns {string}
	 */
	url(){
		return `${this.scheme}://${this.host}:${this.port}${this.uri}`;
	}
}

/**
 * Orchestration class for working with the operating system's key store.
 */
export class KeyStoreManager{
	/**
	 * Creates a new instance of the KeyStoreManager
	 */
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
