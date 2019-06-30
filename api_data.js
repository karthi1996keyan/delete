define({ "api": [
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1.0.0/issue/notifications/:userId",
    "title": "api for notification details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "desription",
            "description": "<p>desription of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"notifications  created successfully\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"_id\" : ObjectId(\"5d18b041b13bb12e4c31bbe9\"),\n                \"userId\" : \"fzacNxl6K\",\n                \"description\" : [\n                    \"Issue has beend addded to watch list\"\n                ],\n                \"issueId\" : \"nvTKnv7UQ\",\n                \"notificationCount\" : 0,\n                \"createdOn\" : ISODate(\"2019-06-30T18:21:13.000+05:30\"),\n                \"__v\" : 0\n            }\n        ]\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "GetApiV100IssueNotificationsUserid"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1.0.0/issue/search",
    "title": "api for search details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "arg",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"search  found successfully\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"_id\" : ObjectId(\"5d18b041b13bb12e4c31bbe9\"),\n                \"userId\" : \"fzacNxl6K\",\n                \"description\" : [\n                    \"Issue has beend addded to watch list\"\n                ],\n                \"issueId\" : \"nvTKnv7UQ\",\n                \"notificationCount\" : 0,\n                \"createdOn\" : ISODate(\"2019-06-30T18:21:13.000+05:30\"),\n                \"__v\" : 0\n            }\n        ]\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "GetApiV100IssueSearch"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1.0.0/issue/view/all",
    "title": "api for get issue details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Issues found\",\n        \"status\": 200,\n        \"data\": [\n           {\n                \"_id\" : ObjectId(\"5d18a2fe76e5e23cc4f9745a\"),\n                \"issueId\" : \"wDk_K1iW6\",\n                \"status\" : \"Backlog\",\n                \"title\" : \"tests\",\n                \"description\" : \"sdf\",\n                \"reporter\" : \"Karthikeyan k\",\n                \"reporterId\" : \"Karthikeyan k\",\n                \"assignedTo\" : \"Karthikeyan k\",\n                \"assignedToId\" : \"fzacNxl6K\",\n                \"images\" : [\n                    \"\"\n                ],\n                \"createdOn\" : ISODate(\"2019-06-30T17:24:38.000+05:30\"),\n                \"__v\" : 0\n            }\n        ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "GetApiV100IssueViewAll"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1.0.0/issue/view/comment/",
    "title": "api for comment details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"comments  found successfully\",\n        \"status\": 200,\n        \"data\": [{\n            \"_id\" : ObjectId(\"5d18aabb541a99446cecdfbd\"),\n            \"commentId\" : \"pb5s5E49R\",\n            \"issueId\" : \"gfpCSHPLn\",\n            \"description\" : \"Hi there\",\n            \"reporter\" : \"Karthikeyan k\",\n            \"reporterId\" : \"fzacNxl6K\",\n            \"createdOn\" : ISODate(\"2019-06-30T17:57:39.000+05:30\"),\n            \"__v\" : 0\n            }]\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "GetApiV100IssueViewComment"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1.0.0/issue/view/:issueId",
    "title": "api for get issue details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Issue found\",\n        \"status\": 200,\n        \"data\": [\n           {\n                \"_id\" : ObjectId(\"5d18a2fe76e5e23cc4f9745a\"),\n                \"issueId\" : \"wDk_K1iW6\",\n                \"status\" : \"Backlog\",\n                \"title\" : \"tests\",\n                \"description\" : \"sdf\",\n                \"reporter\" : \"Karthikeyan k\",\n                \"reporterId\" : \"Karthikeyan k\",\n                \"assignedTo\" : \"Karthikeyan k\",\n                \"assignedToId\" : \"fzacNxl6K\",\n                \"images\" : [\n                    \"\"\n                ],\n                \"createdOn\" : ISODate(\"2019-06-30T17:24:38.000+05:30\"),\n                \"__v\" : 0\n            }\n        ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "GetApiV100IssueViewIssueid"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1.0.0/issue/watch/view/",
    "title": "api for watch details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "watcherId",
            "description": "<p>id of the watcher. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"watch  found successfully\",\n        \"status\": 200,\n        \"data\": [{\n            \"_id\" : ObjectId(\"5d18b041b13bb12e4c31bbe8\"),\n            \"watcherId\" : \"fzacNxl6K\",\n            \"issueId\" : \"nvTKnv7UQ\",\n            \"__v\" : 0   \n                }]\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "GetApiV100IssueWatchView"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/issue/add/comment/",
    "title": "api for comment details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporter",
            "description": "<p>reporter of the comment. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterId",
            "description": "<p>reporterid of the comment. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the comment. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"comment found successfully\",\n        \"status\": 200,\n        \"data\": [{\n            \"_id\" : ObjectId(\"5d18aabb541a99446cecdfbd\"),\n            \"commentId\" : \"pb5s5E49R\",\n            \"issueId\" : \"gfpCSHPLn\",\n            \"description\" : \"Hi there\",\n            \"reporter\" : \"Karthikeyan k\",\n            \"reporterId\" : \"fzacNxl6K\",\n            \"createdOn\" : ISODate(\"2019-06-30T17:57:39.000+05:30\"),\n            \"__v\" : 0\n            }]\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "PostApiV100IssueAddComment"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/issue/create",
    "title": "api for create issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>Assigned to user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "files",
            "optional": false,
            "field": "images",
            "description": "<p>Comma seprated file names. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Issue Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"_id\" : ObjectId(\"5d18a2fe76e5e23cc4f9745a\"),\n        \"issueId\" : \"wDk_K1iW6\",\n        \"status\" : \"Backlog\",\n        \"title\" : \"tests\",\n        \"description\" : \"sdf\",\n        \"reporter\" : \"Karthikeyan k\",\n        \"reporterId\" : \"Karthikeyan k\",\n        \"assignedTo\" : \"Karthikeyan k\",\n        \"assignedToId\" : \"fzacNxl6K\",\n        \"images\" : [\n            \"\"\n        ],\n        \"createdOn\" : ISODate(\"2019-06-30T17:24:38.000+05:30\"),\n        \"__v\" : 0\n    }\n]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "PostApiV100IssueCreate"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/issue/delete/:issueId",
    "title": "api to delete issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"deleted Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "PostApiV100IssueDeleteIssueid"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/issue/edit/:issueId",
    "title": "api for edit issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>Assigned to user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "files",
            "optional": false,
            "field": "images",
            "description": "<p>Comma seprated file names. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Issue updated\",\n\"status\": 200,\n\"data\": [\n    {\n        \"_id\" : ObjectId(\"5d18a2fe76e5e23cc4f9745a\"),\n        \"issueId\" : \"wDk_K1iW6\",\n        \"status\" : \"Backlog\",\n        \"title\" : \"tests\",\n        \"description\" : \"sdf\",\n        \"reporter\" : \"Karthikeyan k\",\n        \"reporterId\" : \"Karthikeyan k\",\n        \"assignedTo\" : \"Karthikeyan k\",\n        \"assignedToId\" : \"fzacNxl6K\",\n        \"images\" : [\n            \"\"\n        ],\n        \"createdOn\" : ISODate(\"2019-06-30T17:24:38.000+05:30\"),\n        \"__v\" : 0\n    }\n]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "PostApiV100IssueEditIssueid"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/issue/notifications/count",
    "title": "api for update notification details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"notifications  update successfully\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"_id\" : ObjectId(\"5d18b041b13bb12e4c31bbe9\"),\n                \"userId\" : \"fzacNxl6K\",\n                \"description\" : [\n                    \"Issue has beend addded to watch list\"\n                ],\n                \"issueId\" : \"nvTKnv7UQ\",\n                \"notificationCount\" : 1,\n                \"createdOn\" : ISODate(\"2019-06-30T18:21:13.000+05:30\"),\n                \"__v\" : 0\n            }\n        ]\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "PostApiV100IssueNotificationsCount"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/issue/watch",
    "title": "api for get issue details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "watcherId",
            "description": "<p>id of the watcher. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"watch created successfully\",\n        \"status\": 200,\n        \"data\": [{\n            \"_id\" : ObjectId(\"5d18b041b13bb12e4c31bbe8\"),\n            \"watcherId\" : \"fzacNxl6K\",\n            \"issueId\" : \"nvTKnv7UQ\",\n            \"__v\" : 0\n            }]\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "issue",
    "name": "PostApiV100IssueWatch"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/users/delete/:userId",
    "title": "api to delete user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"deleted Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV100UsersDeleteUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/users/edit/:userID",
    "title": "api for edit User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User upadted\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"email\": \"karhirajakarthik.k@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"9788364345\",\n        \"lastName\": \"k\",\n        \"firstName\": \"karthikeyan\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV100UsersEditUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/users/login",
    "title": "api for login User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n        \"error\": false,\n        \"message\": \"Logged in successfully\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"authToken\": \"jaNNknlkMLMLmkN,mlMTc1NzU1NywiZXhwIjoxNTM3MTc4MTU3LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6Ik51bGwiLCJlbWFpbCI6InNheXllZHNvZnR0ZWNoMzEzQGdtYWlsLmNvbSIsImlzQWRtaW4iOiJ0cnVlIiwibW9iaWxlTnVtYmVyIjoiOTEgNzg0MDk2Mjg4NyIsImNvdW50cnlOYW1lIjoiSW5kaWEiLCJ1c2VyTmFtZSI6IlNoYWgtYWRtaW4iLCJsYXN0TmFtZSI6IlNheXllZCIsImZpcnN0TmFtZSI6IlNoYWhydWtoIiwidXNlcklkIjoiQjFjeXVjOE9YIn19.fcCu0TZQ-WnAs8bOmZa9YhF1YVv2JscTwOPT--rTwbc\",\n\t\t\t\t\t\"userDetails\": {\n                \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n                \"email\": \"karhirajakarthik.k@gmail.com\",\n                \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n                \"mobileNumber\": \"9788364345\",\n                \"lastName\": \"k\",\n                \"firstName\": \"karthikeyan\",\n                \"userId\": \"B1cyuc8OX\"\n                    }\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV100UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/users/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV100UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"email\": \"karhirajakarthik.k@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"9788364345\",\n        \"lastName\": \"k\",\n        \"firstName\": \"karthikeyan\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV100UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/users/view/all",
    "title": "api for  get User details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"User Details found\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"_id\" : ObjectId(\"5d189f1f76e5e23cc4f9743b\"),\n                \"userId\" : \"fzacNxl6K\",\n                \"firstName\" : \"Karthikeyan\",\n                \"lastName\" : \"k\",\n                \"password\" : \"$2b$10$QJ.WKAr7wMQHCzPrwztP9O/31xqgn6S0pJJdVGWVCeZOoC8tClhbS\",\n                \"email\" : \"karthirajakarthik.k@gmail.com\",\n                \"mobileNumber\" : \"9788364345\",\n                \"createdOn\" : ISODate(\"2019-06-30T17:08:07.000+05:30\"),\n                \"__v\" : 0\n            }\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV100UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1.0.0/users/view/:userId",
    "title": "api for get User details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"User Details found\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"_id\" : ObjectId(\"5d189f1f76e5e23cc4f9743b\"),\n                \"userId\" : \"fzacNxl6K\",\n                \"firstName\" : \"Karthikeyan\",\n                \"lastName\" : \"k\",\n                \"password\" : \"$2b$10$QJ.WKAr7wMQHCzPrwztP9O/31xqgn6S0pJJdVGWVCeZOoC8tClhbS\",\n                \"email\" : \"karthirajakarthik.k@gmail.com\",\n                \"mobileNumber\" : \"9788364345\",\n                \"createdOn\" : ISODate(\"2019-06-30T17:08:07.000+05:30\"),\n                \"__v\" : 0\n            }\n   \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV100UsersViewUserid"
  }
] });
