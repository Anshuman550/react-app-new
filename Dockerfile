# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package.json .

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
#RUN npm run build

# Install a simple HTTP server to serve the static files
#RUN npm install -g serve

# Expose the port the app runs  on
EXPOSE 3000

# Start the application using 'serve'
#CMD ["serve", "-s", "build", "-l", "3000"]
CMD [ "npm", "start" ]
