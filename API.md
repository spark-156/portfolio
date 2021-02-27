# API documentation

All api calls to the backend begin with "/api/".

If a key/ value pair in a dict does not include the //optional behind it then it is *required*.

There are also certain api calls that require 
## authorization

mainly PUT, DELETE and POST requests. These will be marked with an extra "Requires auth" at the first line. These all require a username and password header so that only I can request these. 

Username and password are in basicauth format.

Returns a `401 unauthorized` upon unsuccesful authorization 

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

**Requires auth**

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

**Requires auth**

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

**Requires auth**

Deletes a project from the database

`Example: /api/projects/id/60188fee30adf5035df6b54b`

Returns code 200 with the following body:
```
{
  id: Integer
}
```
# /api/about/
All api calls surrounding about
### GET /api/about/all
Gets all abouts in the following format:
```
[
  {
    "_id": String,
    "name": String,
    "description": String,
    "createdAt": String,
    "updatedAt": String,
  },
  {...}
]
```

### GET /api/about/latest
Gets latest about in the following format
```
[
  {
    "_id": String,
    "name": String,
    "description": String,
    "createdAt": String,
    "updatedAt": String,
  }
]
```
### GET /api/about/id/:id
Get a specific About by id.
Replace the ":id" part of the string with your id.

`Example: /api/about/id/6034f905543b4c011b468f8b`

Returns the following json format:
```
[
  {
    "_id": String,
    "name": String,
    "description": String,
    "createdAt": String,
    "updatedAt": String,
  }
]
```
### POST /api/about/new
Requires auth

Upload a new About
The following fields are required in the body of the request.
```
{
  "name": String
  "description": String
}
```
Will return the following json upon succesfull creation with code 201:
```
{
  "id": Integer
}
```
### PUT /api/about/id/:id
Requires auth

Update a specific about by id
Replace ":id" part of the string with the id of the about you wish to update.

`Example: /api/about/id/6034f905543b4c011b468f8b`

All of the following fields are optional, if you wish to update one then put it in the body of the request like so:
```
{
  "name": String, //optional
  "description": String //optional
}
```
Will return a 200 upon succesful update with the following body:
```
{
  "id": Integer
}
```

### DELETE /api/about/id/:id
Requires auth

Delete a specific about by id.
Replace ":id" part of the string with the id of the about you wish to delete.

`Example: /api/about/id/6034f905543b4c011b468f8b`

Returns 200 upon succesful deletion with the following body:
```
{
  "id": Integer
}
```
# /api/images/
All api calls surrounding images

### GET /api/images/all
Get all images excluding image data
Returns the following body:
```
[
  {
    "_id": String,
    "alt": String,
    "createdAt": String,
    "updatedAt": String 
  },
  {...},
  ...
]
```

### GET /api/images/id/:id
Get a specific image

Replace the ":id" part of the string with the id of the skills object you wish to delete

`Example: /api/images/id/1897264681`

Returns a picture that you can use in the src="ApiCallHere" of an "<img src=`ApiCallHere`> " tag in HTML or JSX.

### GET /api/images/latest
Returns the same as GET /api/images/id/:id but instead always returns the latest added image.
### POST /api/images/new
Requires Auth

Upload a new image. Must have the following body:
```
{
  "alt": String, // short text describing the image 
  "image": imagefile 
}
```
Returns the following body:
```
{
  id: String
}
```
### PUT /api/images/id/:id
Requires auth

Update a specific image. 

__Warning you can not update the alt of an image!__

You can however update the imagefile by including the following body

{
  "image": imagefile
}
Returns the following body:
```
{
  id: String
}
```
### DELETE /api/image/id/:id
Requires auth

Delete a specific image by id.

Replace the ":id" part of the string with the id of the skills object you wish to delete

`Example: /api/skills/id/1897264681`

Returns the following body:
```
{
  id: String
}
```

# /api/skills
All api calls surrounding skills

### GET /api/skills/id/:id
Get a specific skill by id

Replace the ":id" part of the string with the id of the skills object you wish to delete

`Example: /api/skills/id/1897264681`

returns a json in the following format:
```
[
  {
    _id: String,
    skills: [
      {
        skillName: String,
        skillGrade: Integer
      },
      {...},
      {...}
    ],
    createdAt: String,
    updatedAt: String
  }
]
```

### GET /api/skills/latest
Get the latest skill returns a json in the following format:
```
[
  {
    _id: String,
    skills: [
      {
        skillName: String,
        skillGrade: Integer
      },
      {...},
      ...
    ],
    createdAt: String,
    updatedAt: String
  }
]
```
### GET /api/skills/all
Get all skills sorted by latest first. Returns a json in the following format with status code 200:
```
[
  {
    _id: String,
    skills: [
      {
        skillName: String,
        skillGrade: Integer
      },
      {...},
      ...
    ],
    createdAt: String,
    updatedAt: String
  },
  {...},
  ...
]
```
### POST /api/skills/new
**Requires auth**

Add a new skills object.
Must have the follwing json in the body:
```
{
  skills: [
    {
      skillName: String,
      skillGrade: Integer
    },
    {...},
    ...
  ]
}
```
Returns 200 code with the following body upon succesful creation:
```
{
  id: Integer
}
```

### DELETE /api/skills/id/:id
Requires auth

Replace the ":id" part of the string with the id of the skills object you wish to delete

`Example: /api/skills/id/1897264681`

Returns code 200 with the following body upon succesful deletion:
```
{
  _id: Integer
}
```
### PUT /api/skills/id/:id
Update a specific skills object by id.
Watch out the entire skills object will be updated at once, if you wish to update just one of the skillName, skillGrade, then you must still include all the other ones. Otherwise they will be lost.
Must include the following body:

Replace the ":id" part of the string with the id of the skills object you wish to delete

`Example: /api/skills/id/1897264681`
```
{
  skills: [
    {
      {
        skillName: String,
        skillGrade: Integer
      },
      {...},
      ...
    }
  ]
}
```
Returns status 200 with the following body where id is the updated skill:
```
{
  id: Integer
}
```