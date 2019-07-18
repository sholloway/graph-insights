# FAQ

## What is this application?
The Insights application is a desktop application that serves as a personal knowledge database. 

## What's special about it?
Insights leverages a graph database to store user data. Rather than have an explicit data model for the user to contend with, Insights leverages a meta model that allows the user to define how to store data. Additionally, the user can create ad-hoc associations between any two pieces of data. This enables rich data capture, analysis and discovery.

## What systems are supported?
Currently just OS X.

## What technology is it built with?
* ES6 Javascript
* Electron
* Neo4J
* Many NPM modules

## Can I use it?
Nope. Insights is currently in development. Feel free to download the source and play with it, but don't expect much.

## Is Neo4J embedded?
No. The concept is that the user is either running an instance of Neo4J locally or remotely. 

## How are the Neo4J credentials stored?
They are provied by the user through the _Insights_ user interface. The application then stores them in the operating system's key store. The application interacts with the key store via the open source framework [keytar](http://atom.github.io/node-keytar/) produced by the [Atom development team](https://github.com/atom).

