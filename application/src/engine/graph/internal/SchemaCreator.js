function createConstraints(nSession){
	return new Promise((resolve, reject) => {
		console.log('createConstraints');
		resolve();
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
} 

class SchemaCreator{
	constructor(nSession){
		this.nSession = nSession;
	}

	createPropertyGraphDataModel(){
		createConstraints(this.nSession)
			.then(() => createIndices(this.nSession))
			.then(() => setupSystemSpace(this.nSession))
			.then(() => defineSystemElementDefinitions(this.nSession))
			.catch(error => handleFailure(error));
	}
}

export default SchemaCreator;
