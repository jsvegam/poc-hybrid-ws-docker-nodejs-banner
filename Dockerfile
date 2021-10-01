# This indicate the images that we use from Docker Hub
FROM node:14

# WORKDIR FOR NODE-ORACLE
WORKDIR /tmp
RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade && apt-get install -y alien libaio1
RUN wget https://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient/x86_64/getPackage/oracle-instantclient19.3-basiclite-19.3.0.0.0-1.x86_64.rpm
RUN alien -i --scripts oracle-instantclient*.rpm
RUN rm -f oracle-instantclient19.3*.rpm && apt-get -y autoremove && apt-get -y clean

# Create app directory
WORKDIR /usr/src/app
# Install app dependecies
# a wildcar is used to ensure both package.json AND package-lock are copied
# where avaible (npm@5+)

COPY package*.json ./


RUN npm install

# for production use 
# RUN npm ci --only=production

# Now we copy the code
COPY . .

# We need to indicate the PORT to expose
EXPOSE 80

CMD [ "node", "app2.js" ]



