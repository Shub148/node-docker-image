# 🐳 Node.js Docker Task Manager

A simple REST API built with **Node.js and Express** and containerized using **Docker**.

This project is created to practice the complete Docker workflow with a Node.js application:

```text
Node.js Application
       ↓
   Dockerfile
       ↓
  Docker Image
       ↓
 Docker Container
       ↓
    Docker Hub
```

---

## 📌 Project Structure

```text
docker-node-task-manager/
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* Docker
* Docker Hub
* Git & GitHub

---

# 🚀 1. Run the Application Locally

Make sure Node.js and npm are installed.

Check:

```bash
node --version
npm --version
```

Navigate to the project:

```bash
cd docker-node-task-manager
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

---

# 🐳 2. Dockerfile

The project uses the following Dockerfile:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

## Dockerfile Explanation

| Instruction | Purpose                                         |
| ----------- | ----------------------------------------------- |
| `FROM`      | Selects the Node.js base image                  |
| `WORKDIR`   | Sets the working directory inside the container |
| `COPY`      | Copies project files into the image             |
| `RUN`       | Executes commands during image building         |
| `EXPOSE`    | Documents the application's port                |
| `CMD`       | Starts the application                          |

---

# 🏗️ 3. Build the Docker Image

From the project directory:

```bash
docker build -t node-docker-image .
```

### What does `.` mean?

The `.` represents the **current directory**.

Docker uses the current directory as the build context and looks for the `Dockerfile` there.

General syntax:

```bash
docker build -t <image-name> <path>
```

Example:

```bash
docker build -t node-docker-image .
```

---

# 🔍 4. Check Docker Images

```bash
docker images
```

Example:

```text
REPOSITORY          TAG       IMAGE ID
node-docker-image   latest    xxxxxxx
```

---

# 🚀 5. Run the Docker Container

Run the image:

```bash
docker run -d -p 3000:3000 --name node-task-manager node-docker-image
```

### Understanding the command

```text
docker run
```

Creates and starts a container.

```text
-d
```

Runs the container in detached/background mode.

```text
-p 3000:3000
```

Maps the host port to the container port:

```text
Host Port : Container Port
3000      : 3000
```

```text
--name node-task-manager
```

Assigns a name to the container.

```text
node-docker-image
```

Specifies the Docker image used to create the container.

---

# 🔎 6. Check the Container

Check running containers:

```bash
docker ps
```

Check all containers:

```bash
docker ps -a
```

View container logs:

```bash
docker logs node-task-manager
```

---

# 🌐 7. Access the Application

Open:

```text
http://localhost:3000
```

You should see:

```json
{
  "message": "Node.js Docker Task Manager API",
  "status": "running"
}
```

---

# 📡 8. API Endpoints

## Get all tasks

```http
GET /tasks
```

Example:

```text
http://localhost:3000/tasks
```

---

## Get a task by ID

```http
GET /tasks/:id
```

Example:

```text
http://localhost:3000/tasks/1
```

---

## Create a task

```http
POST /tasks
```

Request body:

```json
{
  "title": "Learn Docker"
}
```

---

## Delete a task

```http
DELETE /tasks/:id
```

Example:

```text
http://localhost:3000/tasks/1
```

---

# 🐳 9. Login to Docker Hub

Login:

```bash
docker login
```

Enter your Docker Hub username and password/token.

Successful login:

```text
Login Succeeded
```

---

# 🏷️ 10. Tag the Docker Image

Docker Hub image format:

```text
USERNAME/REPOSITORY:TAG
```

Example:

```bash
docker tag node-docker-image:latest YOUR_USERNAME/docker-node-task-manager:latest
```

For example:

```bash
docker tag node-docker-image:latest shubham123/docker-node-task-manager:latest
```

Check:

```bash
docker images
```

---

# 📤 11. Push Image to Docker Hub

```bash
docker push YOUR_USERNAME/docker-node-task-manager:latest
```

Example:

```bash
docker push shubham123/docker-node-task-manager:latest
```

After a successful push, Docker Hub will contain your image.

---

# 📥 12. Pull Image from Docker Hub

You can download the image on another computer using:

```bash
docker pull YOUR_USERNAME/docker-node-task-manager:latest
```

Example:

```bash
docker pull shubham123/docker-node-task-manager:latest
```

---

# ▶️ 13. Run the Docker Hub Image

```bash
docker run -d -p 3000:3000 --name node-task-manager YOUR_USERNAME/docker-node-task-manager:latest
```

Example:

```bash
docker run -d -p 3000:3000 --name node-task-manager shubham123/docker-node-task-manager:latest
```

Then open:

```text
http://localhost:3000
```

---

# 🧹 Useful Docker Commands

### Stop container

```bash
docker stop node-task-manager
```

### Remove container

```bash
docker rm node-task-manager
```

### Remove image

```bash
docker rmi node-docker-image
```

### View running containers

```bash
docker ps
```

### View all containers

```bash
docker ps -a
```

### View images

```bash
docker images
```

### View logs

```bash
docker logs node-task-manager
```

---

# 🧠 Docker Workflow

```text
             Node.js Project
                    │
                    ▼
               Dockerfile
                    │
                    ▼
        docker build -t image .
                    │
                    ▼
             Docker Image
                    │
                    ▼
              docker run
                    │
                    ▼
```
