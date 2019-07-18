# Queries
The application has many database queries embedded in the Engine. To ease 
onboarding and to aid designing enhancements the full list of queries the 
application uses is provided.

## Helper Queries
Helper queries are not used by the application but can aid development.

### List all constraints in the database.
```cypher
CALL db.constraints
```

### Delete all nodes. (Only do on a database you don't care about.)
```cypher
match (n) detach delete n;
```

### Create a couple of simple associated Nodes.
```cypher
create 
  (a:Person {name: 'Steve', mid:123}) - [:association {associationId: 1}] -> (b:Person {name: 'Bob', mid:456}) 
  - [:association {associationId: 2}] -> (c:Person {name: 'Alice', mid:789});

match (b:Person {mid:456})
create (d:DataSet)-[:contains]->(b);
```

```
match (x)-[a:association]->(y {mid: 456})
delete a;

match (x)-[a]->(y {mid: 456}) 
where type(a) <> "contains"
delete a;
```

## Working with Elements
### Removing associations between Elements.
Removing an association is as simple as deleting the edge. However, care must 
be taken to not remove the element from the data set. An edge with the label
_contains_ is what registers the element with the data set. To remove all 
inbound associations the following query can be used.
```cypher
match (x)-[a]->(y {mid: {elementId}}) 
where type(a) <> "contains"
delete a; 
``` 

## Application Queries
TBD

## Notes
- Document how to get the [Cypher Shell](https://neo4j.com/docs/operations-manual/current/tools/cypher-shell/) working.
- Document profile=ing queries using the Cypher profile command. As each query is documented, profile it.
  [Example](https://graphaware.com/neo4j/2015/01/16/neo4j-graph-model-design-labels-versus-indexed-properties.html)
