# API documentation

All api calls to the backend begin with "/api/".

If a key/ value pair in a dict does not include the //optional behind it then it is *required*.

# /api/projects/

All api calls related to projects

### GET /api/projects/all

Returns all projects without the image attachment in the following format:
```
 [
   { 
    title: String, 
    description: String,
    startDate: Date,
    endDate: Date, //optional
    company: String
    _id: String,
    createdAt: String,
    updatedAt: String
   },
   {...}
 ]
 ```
 
### GET /api/projects/id/:id/
Returns a single project found by id paramater
 
`Example: /api/projects/image/60188fee30adf5035df6b54b`

```
 [
   { 
    title: String, 
    description: String,
    startDate: Date,
    endDate: Date, //optional
    company: String
    _id: String,
    createdAt: String,
    updatedAt: String
   }
 ]
```
 
### GET /api/projects/id/:id/image
 
Returns a single image from a single project found by ID paramater in the string.

`Example: /api/projects/image/60188fee30adf5035df6b54b`

### GET /api/projects/latest

Returns the latest added project in the following format:

```
 [
   { 
    title: String, 
    description: String,
    startDate: Date,
    endDate: Date, //optional
    company: String
    _id: String,
    createdAt: String,
    updatedAt: String
   }
 ]
```

### POST /api/projects/new 

Post a new project to backend

Use a form file selector to upload an image. 
Allowed file formats are:
  - .jpg
  - .jpeg
  - .png
The following json must be included in the body:
```
 [
   { 
    title: String, 
    description: String,
    startDate: Date,
    endDate: Date, //optional
    company: String,
    image: File
   }
 ]
```
Retuns status code 201 with the "_id" included in the body upon succesfull creation 

### PUT /api/projects/id/:id

Update a project in the database

`Example: /api/projects/id/60188fee30adf5035df6b54b`

Include a json in the body with all the fields you want to update:

*All fields are optional but make sure you include the one you want to update*

```
   { 
    title: String, 
    description: String,
    startDate: Date,
    endDate: Date,
    company: String,
    image: File
   }
```

### DELETE /api/projects/id/:id

Deletes a project from the database

`Example: /api/projects/id/60188fee30adf5035df6b54b`

# /api/about/
All api calls surrounding about
### GET /api/about/all

Gets all abouts
### GET /api/about/latest

Gets latest about

### GET /api/about/id/:id
Get a specific About by id

### POST /api/about/new
Upload a new About

### PUT /api/about/id/:id
Update a specific about

### DELETE /api/about/id/:id
Delete a specific about

## /api/images/
All image api calls

### GET /api/images/all
Get all images excluding image data

### GET /api/images/id/:id
Get a specific image
### GET /api/images/latest
Get latest added image
### POST /api/images/new
Upload new image

### PUT /api/images/id/:id
Update specific image

### DELETE /api/image/id/:id
Delete specific image
