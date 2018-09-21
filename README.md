# Workspace Configuration

## Docker

### Server image

Build the server image: `docker build -t workspace:latest`

Run the server image: `docker run -p 3000:3000 workspace:latest`

Grab an interactive shell in the docker container: `docker run -it workspace:latest /bin/bash`
