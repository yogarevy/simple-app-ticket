# Adonis fullstack simple application

This is the fullstack boilerplate for simple application from AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup
If not install adonis yet
run `npm i -g @adonisjs/cli`

Then use the adonis command to install the blueprint/new project

```bash
adonis new yardstick
```

or manually clone this project then run `npm install` in the directory project.

The database project is using PostgreSQL

### Environment
Create file .env then copy all text from .env.example file and make your adjustment setting environment

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seed Data

Run the following command to run startup seed data.

```js
adonis seed
```

run server ```adonis serve --dev```

for login, I give one information account to login
email: yoga@gmail.com
pass: yoga1234

author: Yoga Revy Setiadi
