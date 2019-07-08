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
	"CREATE CONSTRAINT ON (e:element) ASSERT e.mid IS UNIQUE",
	"CREATE CONSTRAINT ON (bac:basic_auth_credential) ASSERT e.mid IS UNIQUE"
];

export const CREATE_SYSTEM_SPACE_STMT = 
`create (ss:internal_system_space{
  | mid:{mid},
  | name:{name},
  | creation_time:timestamp(),
  | last_modified_time:timestamp()
  |})`;

function runCommand(session, cmd){
	return new Promise((resolve, reject) => {
		session.run(cmd).then(result => { 
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

function createIndices(session){
	return new Promise((resolve, reject) => {
		resolve();
	});
} 

function setupSystemSpace(session){
	return runCommand(session, CREATE_SYSTEM_SPACE_STMT);
}

function defineSystemElementDefinitions(){
	return new Promise((resolve, reject) => {
		resolve();
	});
} 

function handleFailure(error){
	console.log('An error occurred');
	console.log(error);
	return error;
} 

export class SchemaCreator{
	constructor(session){
		this.session = session;
	}

	createPropertyGraphDataModel(){
		return createConstraints(this.session)
			.then(() => createIndices(this.session)) // Placehlder: All indexes are currently created by constraints.
			.then(() => setupSystemSpace(this.session))
			.then(() => defineSystemElementDefinitions(this.session)) //Placeholder
			.then(() => { return 'database provisioned' })
			.catch(error => handleFailure(error));
	}
}
