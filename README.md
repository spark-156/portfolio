# Portfolio
Portfolio website made in React with a NodeJS backend and a MongoDB database and hosted in docker behind an nxgin reverse proxy.

# Design
https://www.figma.com/file/TMMnrJi1sPN4eckA6VtNlx/Portfolio-website?node-id=0%3A1

# ERD
https://lucid.app/lucidchart/043f1350-beee-4a52-81b9-f25e32834d34/view?page=0_0#?folder_id=home&browser=icon

# Usage
Dependecies:

1. Docker
2. Docker-compose

Steps to run website:
1. Git clone this repo
2. cd in to cloned repo folder
3. cd in to server folder
4. make a .env file with the following two environment variables: 
```
ADMIN_EMAIL = ""
ADMIN_PASSWORD = ""
```
These will be your basicAuth credentials

5. cd back to root of cloned repo folder
6. run ```make buildProd``` in the command line
7. run ```make startProd``` in the command line
8. go to localhost:80 in your browser of choice to see my portfolio
