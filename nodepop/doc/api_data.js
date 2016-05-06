define({ "api": [
  {
    "type": "get",
    "url": "/anuncios/:lang",
    "title": "Listado de anuncios filtrados por los parámetros de entrada y paginados.",
    "name": "GetAnuncios",
    "version": "1.0.0",
    "group": "Anuncios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación que se devolvió en el login</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre por el que buscar. Sacará todos los que su nombre empiece por este valor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>lista de Tags(strings) separados por comas.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "venta",
            "description": "<p>Si true sólo saca las ventas, si false las búsquedas.</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "preciomin",
            "description": "<p>precio mínimo del artículo</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "preciomax",
            "description": "<p>precio máximo del artículo</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>a partir de qué resultado enviar</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>número de resultados a enviar</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort",
            "description": "<p>campo por el que ordenar. - delante ordena decreciente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Objeto",
            "description": "<p>con un array de anuncios disponibles.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>El usuario no está autenticado</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/anuncios.js",
    "groupTitle": "Anuncios"
  },
  {
    "type": "get",
    "url": "/anuncios/:lang/tags",
    "title": "Listado de los tags disponibles",
    "name": "GetTags",
    "version": "1.0.0",
    "group": "Anuncios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación que se devolvió en el login</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Objeto",
            "description": "<p>con un array de strings con los tags disponibles.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>El usuario no está autenticado</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/anuncios.js",
    "groupTitle": "Anuncios"
  },
  {
    "type": "post",
    "url": "/pushtoken/:lang",
    "title": "Registra un token para envío de notificaciones Push",
    "name": "PostPushToken",
    "version": "1.0.0",
    "group": "PushToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lang",
            "description": "<p>Idioma en el que queremos que devuelva los errores</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"android\"",
              "\"ios\""
            ],
            "optional": false,
            "field": "plataforma",
            "description": "<p>Plataforma del dispositivo que generó el token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token al que enviar las notificaciones Push</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "usuario",
            "description": "<p>identificador del usuario registrado asociado al token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tokenPush",
            "description": "<p>objeto que ha guardado el sistema</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Ese usuario no existe en el sistema.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>Error en la validación de los campos.</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/pushtoken.js",
    "groupTitle": "PushToken"
  },
  {
    "type": "post",
    "url": "/usuarios/:lang",
    "title": "Registra un usuario",
    "name": "PostUser",
    "version": "1.0.0",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lang",
            "description": "<p>Idioma en el que queremos que devuelva los errores</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario que se mostrará en la aplicación.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Identifica al usuario. No puede cambiarse.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "clave",
            "description": "<p>Contraseña de usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "usuario",
            "description": "<p>Usuario que se ha guardado en el sistema.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"success\":true,\n     \"saved\":{\n         \"nombre\": \"test 3\",\n         \"email\": \"test3@test.com\",\n         \"clave\": \"password codificada\"\n         \"_id\": \"id único en base de datos, del usuario.\".\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserFound",
            "description": "<p>Ese usuario ya existe en el sistema.</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/usuarios.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/usuarios/:lang/login",
    "title": "Registra un usuario",
    "name": "PostUser",
    "version": "1.0.0",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lang",
            "description": "<p>Idioma en el que queremos que devuelva los errores</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Identifica al usuario. No puede cambiarse.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "clave",
            "description": "<p>Contraseña de usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Token devuelto para que el cliente haga peticiones.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"success\":true,\n     \"saved\":{\n         \"token\": \"token para peticiones\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>El usuario no existe en el sistema</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/usuarios.js",
    "groupTitle": "User"
  }
] });