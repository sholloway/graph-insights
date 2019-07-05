import { expect } from 'chai';
import sinon from 'sinon';
//const expect = require('chai').expect;
//const sinon = require('sinon');
import {SchemaCreator, CREATE_SYSTEM_SPACE_STMT} from '../src/engine/graph/internal/SchemaCreator';

describe('SchemaCreator', function(){
	describe('Happy Path', ()=>{

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
			expect(spy.callCount).to.equal(11); //All run calls.
		});
		
		it ('should create constraints', async () =>{
			let constraints = spy.args.slice(0,10); //Should be 10 constraints.
			constraints.forEach( c => { expect(c[0].startsWith('CREATE CONSTRAINT ON')).to.be.true; });
		});
		
		it ('should setup the system space', () => {
			let systemSpaceStmt = spy.args[10];
			expect(systemSpaceStmt[0]).to.equal(CREATE_SYSTEM_SPACE_STMT)	
		});

		it ('should define the system element definitions');
		it ('should create the database indexes');
	});
	
	describe('Error Handling', ()=>{
		it ('should not run if constraints already exist');
		it ('should handle failure')
	});
});
