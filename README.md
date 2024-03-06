# News App project
Developed with React + TypeScript + Vite and can be easily deployed using Docker

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)

## Getting Started

To get started with deploying the application, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/daryavolakh/news-app

2. **Navigate to the Project Directory
  ```bash
  cd news-app

3. **Build the Docker Image
  ```bash
  docker build -t vite-react-ts-app .

4. **Run the Docker Container
  ```bash
  docker run -d -p 3000:3000 vite-react-ts-app

5. **Access the Application
Open your web browser and go to http://localhost:3000 to access the deployed News App.
