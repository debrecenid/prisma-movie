## Installation
```bash
$ npm install
```
## Running the app
### Local env
DATABASE_URL="file:./db.sqlite3"
### Prisma
```bash
# generate client
$ npx prisma generate client

#generate database
$ npx prisma migrate dev --name init

#run seeder
$ npx prisma db seed --preview-feature
```
### Commands
```bash
# development
$ npm run develop
# production mode
$ npm run build && npm run start
```
## Examples
### After the application starts on the **localhost:8080/graphql** you can access the graphql interface
### *The test folder contains database mock data, the following examples works with the imported collections*
- Get movies by title  
```
query {
	movies(where: {
    title: {
      contains: "Harry"
    }
  }) {
    title
  }
}
```
- Get movies by actor
```
query {
	movies(where: {
    actors: {
      some: {
        id: {
          equals: 1
        }
      }
    }
  }) {
    title
  }
}
```
- Get movie with wikipedia link and extract
```
query {
	movies(where: {
		id: {
      equals: 1
    }
  }) {
    title
    wiki {
      link
      desc
    }
  }
}
```
- Get simlar movies
```
query {
	movies(where: {
		id: {
      equals: 1
    }
  }) {
    title
		similar {
      title 
    }
  }
}
```
