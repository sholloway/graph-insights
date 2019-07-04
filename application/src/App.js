import React, { Component, createElement } from 'react';
import ReactDOM from 'react-dom';

//var neo4j = require('neo4j-driver').v1
import { v1 as neo4j } from 'neo4j-driver';

function talkToDatabase(){
	return new Promise((resolve, reject) => {
		var driver = neo4j.driver(
			'bolt://localhost',
			neo4j.auth.basic('neo4j', 'admin')
		);
		let session = driver.session();
		session.run('CALL dbms.procedures()')
			.then(result => {
				session.close();
				driver.close();
				resolve(result);
			}).catch(function(error) {
				console.log(error);
				session.run('CALL dbms.procedures()')
				reject(error);
			});
	});
}

function render(fromNeo){
	return new Promise((resolve, reject) => {
		console.log(fromNeo);
		let records = fromNeo.records.map(r =>  <li>{r.get('name')}</li>);
		let wrappedApp = (
			<div>
				<p>Hello World</p>
				<ul>
					{records}
				</ul>
			</div>
		);
		ReactDOM.render(wrappedApp, document.getElementById('root'));
		resolve();
	});
}

talkToDatabase()
	.then(result => render(result))
	.catch(error => {
		console.log('Top level promise catch');
		console.log(error);
	});
