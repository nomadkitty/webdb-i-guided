# Notes

## Menu

- Introduction to RDBMS
- SQL
- Knex ++
- CRUD operations persisting data

R = Relational

DB = Database, a collection of data that organized for future manipulation

M = Management

S = System

A Relation is similar to a spreadsheet, it has rows with columns.

Another name for a Relations is: **Table**.

The data on a Relational Database is stored in **Tables**.

[Client] <HTTP (methods/endponts/JSON data)> [API running on a Web Server] <> [Database Management System]

Some popular DBMS

- Oracle
- MySQL
- PostgresSQL
- MS SQL Server
- SQLite3 (file-based RDBMS)
- MongoDB (No [Not Only] SQL database)

HTTP is a network protocol. A protocol is a set of rules for communication over the network.

Each database vendor can (and probably will) have it's own protocol.

SQL = Structured **Query** Language. SQL is a Standard.

Each DBMS will implement part of the SQL standard and add extra features on top.

DBMS is the one running and manage database server. Not stored in database server

Some SQL commands

select ProductName as Name //will change the column to Name aliasing
[] just takes the value from that table, use it literally, not key word. The brackets will tell the DBMS to ignore any keywords unique to SQL, along with literally use this combination of characters
for filter rows will use where
order by price desc
Where needs to before order by
