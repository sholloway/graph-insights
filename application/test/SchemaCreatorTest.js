import { expect } from 'chai';
import sinon from 'sinon';
//const expect = require('chai').expect;
//const sinon = require('sinon');
import SchemaCreator from '../src/engine/graph/internal/SchemaCreator';

describe('SchemaCreator', function(){
	let session = { run: function(query, params){
		return Promise.resolve();
	}};
	let spy = sinon.spy(session, "run");
	let result;

	before(async () =>{
		let sc = new SchemaCreator(session);
		result = await sc.createPropertyGraphDataModel();
	});

	it ('should have ran all steps', () => {
		expect(result).to.equal('database provisioned');
		expect(spy.callCount).to.equal(10); //All run calls.
	});

	it ('should create constraints', async () =>{
		let constraints = spy.args.slice(0,10); //Should be 10 constraints.
		constraints.forEach( c => { expect(c[0].startsWith('CREATE CONSTRAINT ON')).to.be.true; });
	});
});
