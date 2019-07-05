const constraints = [
	"CREATE CONSTRAINT ON (u:user) ASSERT u.mid IS UNIQUE",
	"CREATE CONSTRAINT ON (u:user) ASSERT u.username IS UNIQUE",
	"CREATE CONSTRAINT ON (d:data_set) ASSERT d.mid IS UNIQUE",
	"CREATE CONSTRAINT ON (d:data_set) ASSERT d.name IS UNIQUE",
	"CREATE CONSTRAINT ON (s:internal_system_space) ASSERT s.mid IS UNIQUE",
	"CREATE CONSTRAINT ON (s:internal_system_space) ASSERT s.name IS UNIQUE",
	"CREATE CONSTRAINT ON (ed:element_definition) ASSERT ed.mid IS UNIQUE",
	"CREATE CONSTRAINT ON (ed:element_definition) ASSERT ed.name IS UNIQUE",
	"CREATE CONSTRAINT ON (pd:property_definition) ASSERT pd.mid IS UNIQUE",
	"CREATE CONSTRAINT ON (e:element) ASSERT e.mid IS UNIQUE"
];

function runCommand(session, cmd){
	return new Promise((resolve, reject) => {
		session.run(cmd).then(result => { 
			console.log(`Ran: ${cmd}`);
			resolve();
		})
		.catch(function(error) { 
			console.log('There was an error running a command.')
			reject(error);
		});
	});
}

function createConstraints(session){
	return new Promise((resolve, reject) => {
		let promises = constraints.map( cmd => { return runCommand(session, cmd);});
		Promise.all(promises)
		.then(() => {
			resolve();
		})
		.catch(error => {
			reject(error);
		});
	});
}

function createIndices(){
	return new Promise((resolve, reject) => {
		console.log('createIndices');
		resolve();
	});
} 

function setupSystemSpace(){
	return new Promise((resolve, reject) => {
		console.log('setupSystemSpace');
		resolve();
	});
}

function defineSystemElementDefinitions(){
	return new Promise((resolve, reject) => {
		console.log('defineSystemElementDefinitions');
		resolve();
	});
} 

function handleFailure(error){
	console.log('An error occurred');
	console.log(error);
	return error;
} 

class SchemaCreator{
	constructor(session){
		this.session = session;
	}

	createPropertyGraphDataModel(){
		return createConstraints(this.session)
			.then(() => createIndices(this.session))
			.then(() => setupSystemSpace(this.session))
			.then(() => defineSystemElementDefinitions(this.session))
			.then(() => { return 'database provisioned' })
			.catch(error => handleFailure(error));
	}
}

export default SchemaCreator;
