# Use the official Node.js 14.21.1 image as the base
FROM node:14.21.1

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .


# Set the environment variable for the desired port
ENV PORT 5000
ENV MONGODB_URI ""
ENV USER_JWT_SECRET "asfkhaiwh!@$%&()*IFUBF"

# Expose the port on which the application will run
EXPOSE 4040

# Start the Node.js application
CMD [ "src", "index.js" ]