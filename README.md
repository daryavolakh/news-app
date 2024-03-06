
# News App project

Developed with React + TypeScript + Vite and can be easily deployed using Docker.
This is a news aggregator website that pulls articles from various sources and displays them.

- Search and filtering: you can search for articles by keyword and filter the results by date and category.
- Personalized news feed: you customize news feed by selecting preferred category.


This APP use three different API:
- [NewsAPI](https://newsapi.org/)
- [The Guardian API](https://newsapi.org/)
- [New York Times API](https://developer.nytimes.com/)

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)

## Getting Started

To get started with deploying the application, follow these steps:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/daryavolakh/news-app

2. **Navigate to the Project Directory**

    ```bash
    cd news-app

3. **Build the Docker Image**

    ```bash
    docker build -t vite-react-ts-app .

4. **Run the Docker Container**
    ```bash
    docker run -d -p 3000:3000 vite-react-ts-app

5. **Access the Application**
Open your web browser and go to http://localhost:3000 to access the deployed News App.
