# Dustins-FEC-proxy
Proxy Repo for Etsy Mock

1. [Description](#Project-Description)
2. [Usage](#Usage)
3. [Requirements](#requirements)


## Project-Description
Name: Etsy Mock Listings App

- [Proxy Visual](./https://us04web.zoom.us/j/8145542692?pwd=cXhoM2tmSG5CbGJZZUdjVkZjQ21mQT09)

This app connects the 4 Etsy Mock services found under the [Related-Projects](#Related-Projects) heading.
Each service takes the id number at the end of the url and retrieves the service specific information.

## Related-Projects

  - [Product Service](https://github.com/rpt19-taniwha/mervin-fec-service)
  - [You May Also Like Service](https://github.com/rpt19-taniwha/andy-fec-service)
  - [Image Service](https://github.com/rpt19-taniwha/Dustins-FEC-Service)
  - [Reviews Service](https://github.com/teamName/repo)



## Usage

- It requires each of the services along with their DBMS to be installed locally.
- to install dependencies: npm install
- to get bundle: npm run bundle
- to start server: npm run start or npm run server-dev for development

## Requirements
- "node": ">=6.13.0"
- "axios": "^0.19.2",
- "express": "^4.17.1",
- "react": "^16.13.1",
- "webpack": "^4.42.1"


