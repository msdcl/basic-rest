define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/create",
    "title": "Add product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product added successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tprice :number\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "create",
    "name": "PostApiV1Create"
  },
  {
    "type": "post",
    "url": "/api/v1/:prodId/delete",
    "title": "Delete product by product Id",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProdidDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/addToCart/:prodId",
    "title": "Add product to cart by product Id",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t \"error\": false,\n\t\t \"message\": \"Product is Successfully added in cart.\",\n\t\t \"status\": 200,\n\t\t \"data\": [\n\t\t\t\t\t {\n\t\t\t\t\t\t cartId: \"string\",\n\t\t\t\t\t\t products:[],\n\t\t\t\t\t\t numberOfProducts: number,\n\t\t\t\t\t\t totalAmount: number,\n\t\t\t\t\t\t \n\t\t\t\t\t }\n\t\t\t\t ]\n\t\t\t }\n\t\t }\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t \"error\": true,\n\t\t \"message\": \"Error Occured.,\n\t\t \"status\": 500,\n\t\t \"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "edit",
    "name": "GetApiV1AddtocartProdid"
  },
  {
    "type": "get",
    "url": "/api/v1/removeFromCart/:prodId",
    "title": "Remove product from cart by product Id",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t \"error\": false,\n\t\t \"message\": \"Product is Successfully deleted from cart.\",\n\t\t \"status\": 200,\n\t\t \"data\": [\n\t\t\t\t\t {\n\t\t\t\t\t\t cartId: \"string\",\n\t\t\t\t\t\t products:[],\n\t\t\t\t\t\t numberOfProducts: number,\n\t\t\t\t\t\t totalAmount: number,\n\t\t\t\t\t\t \n\t\t\t\t\t }\n\t\t\t\t ]\n\t\t\t }\n\t\t }\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t \"error\": true,\n\t\t \"message\": \"Error Occured.,\n\t\t \"status\": 500,\n\t\t \"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "edit",
    "name": "GetApiV1RemovefromcartProdid"
  },
  {
    "type": "put",
    "url": "/api/v1/:prodId/edit",
    "title": "Edit Product by product Id",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t \"error\": false,\n\t\t \"message\": \"Product Edited Successfully.\",\n\t\t \"status\": 200,\n\t\t \"data\": [\n\t\t\t\t\t {\n\t\t\t\t\t\t prodId: \"string\",\n\t\t\t\t\t\t title: \"string\",\n\t\t\t\t\t\t description: \"string\",\n\t\t\t\t\t\t price: number,\n\t\t\t\t\t\t isAvailable: boolean,\n\t\t\t\t\t\t category: \"string\",\n\t\t\t\t\t }\n\t\t\t\t ]\n\t\t\t }\n\t\t }\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t \"error\": true,\n\t\t \"message\": \"Error Occured.,\n\t\t \"status\": 500,\n\t\t \"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProdidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/allProducts",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All product Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\t\tprice: number\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Allproducts"
  },
  {
    "type": "get",
    "url": "/api/v1/allProductsInCart",
    "title": "Get all products in cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All products Found in Cart\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tcartId: \"string\",\n\t\t\t\t\t\tproducts: [],\n\t\t\t\t\t\tnumberOfProducts: number,\n\t\t\t\t\t\t totalAmount: number,\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find products in cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Allproductsincart"
  },
  {
    "type": "get",
    "url": "/api/v1/view/:prodId",
    "title": "Get single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>The prodId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewProdid"
  }
] });
