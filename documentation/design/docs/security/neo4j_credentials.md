# Neo4J Credentials
Insights connects to a Neo4J database using the [Javascript Bolt driver](https://neo4j.com/docs/driver-manual/1.7/).
In order to connect the user must provide the below list of fields.

| Field Name         | Description                                                        | Type      | Example                              |
|--------------------|--------------------------------------------------------------------|-----------|--------------------------------------|
| scheme             | The protocol to communicate with.                                  | String    | bolt                                 |
| host               | The DNS name of the location to connect to.                        | String    | localhost                            |
| port               | The port to connect to on the host machine.                        | Integer   | 80                                   |
| uri                | Anything to the right of the PORT number.                          | String    | /api                                 |
| username           | The Neo4J username.                                                | String    | n/a                                  |
| password           | The Neo4J password.                                                | String    | n/a                                  |

Example: 
```markdown
Format: scheme://host:port:uri
Example (URI is empty): bolt://localhost:7687
```

## Credentials Storage
The Neo4J credentials are stored in the operating system's key store.
