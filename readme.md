# Api endpoints:

- http://localhost:5000/api/profile (get all profiles)

- http://localhost:5000/api/profile/post (insert a single profile)

- http://localhost:5000/api/profile/update/:id (update the profile of an existing user)

# requirements:

- node (ver 14.16.1 up)
- mongodb(ver 4.4.6 up)

# initializing project:

- cd into the directory

```bash
cd ~/user-validation-api/
```

- install packages

```bash
npm install
```

- run the project with nodemon

```bash
npm run dev
```

# Environment

#### include them in .env file at root of project

- NODE_ENV: "production" or "development"
- MONGO_LOCAL_URI: "mongodb://localhost:27017/yourDbName"
