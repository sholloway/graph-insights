# Graph Insights PKB Books
- - -
This directory houses the various documentation artifacts for the 
project.

## Getting Started
1. Install mkdocs (Currently version 1.0.1).
```shell
brew install mkdoc
```
2. Via the terminal, navigate to the directory containing a book (e.g. books/system-design) and start the server.
```shell
mkdocs serve
```
3. You should now be able to read the book in the browser at the url
   specified in the terminal output.
4. To build a book for hosting, use the mkdocs build. Enable strict mode 
   to check local links and image references.
   Note, this does not verify the navigation links
   in the mkdocs.yml or external links.
```shell
mkdocs build --strict
```

## Books
The current books are:
* Design: Details the application architecture.
* User Manual: Provides insight on how to use the application. 
