# Use the official Golang 1.22.5 runtime as a parent image
FROM golang:1.22.5-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY . .

# Install any needed dependencies
RUN go mod download

# Build the Go app
RUN go build -o main .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the executable
CMD ["./main"]
