# TYS DID DRIVER #

## Getting Started

### Prerequisites
You will need NodeJS LTS minimum version 14.

### The Code

 To start, clone the repository and install node_modules.

 ```
 git clone https://github.com/itpeople-cy/tys-did-driver.git
 cd tys-did-driver
 npm install
 ```

### DID Resolver

This project was developed with the Universal Resover perspective to support as driver for any DID across Chainyard. 

### How To Add a Driver

For adding a driver we need to configure in `config/drivers.json` by adding the configuration as mentioned below:
```
{
    "pattern": "^(did:<method-name>:<regex-pattern-for-method-specific-identifier>",
    "driverId": "<unique-driver-name>",
    "apiUrl":"<API_URL to resolve the DID>",
    "testIdentifiers": [ "<sample-did-for testing>" ]
}

```

After doing the changes as mentioned in the above structure add this into the `config/drivers.json`

### Build a Docker Image
 
After adding the driver, next step is to build it as docker image
- `docker build -t itpeoplecorp/tys-did-driver .`

Once the docker image is build, next step is to push the above mentioned image.
Current image version is `1.0`. So each time an image is build you need to add the current version with `0.1`
- `docker push itpeoplecorp/tys-did-driver:1.1`

### Bring up the Service

 - `npm start` will start the application from source.