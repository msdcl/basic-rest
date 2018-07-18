const express = require('express');

const controller = require("./../controllers/controller");
const appConfig = require("./../config/config");
const auth = require("./../middlewares/auth");


module.exports.setRouter = function(app){

	let baseUrl = appConfig.version;
	
	// request to add a new product
    app.post(baseUrl+'/create',auth.isAuthenticated,controller.addProduct);
     /**
	 * @api {post} /api/v1/create Add product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title title of the product passed as a body parameter
	 * @apiParam {String} description description of the product passed as a body parameter
	 * @apiParam {Number} price price of the product passed as a body parameter
	 * @apiParam {String} category category of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product added successfully",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						title: "string",
						description: "string",
						isAvailable: boolean,
						category: "string",
						price :number
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
   


	 // request to get all products
	app.get(baseUrl+'/allProducts',auth.isAuthenticated,controller.getAllProducts);
	 /**
	 * @api {get} /api/v1/allProducts Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All product Details Found",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						title: "string",
						description: "string",
						category: "string",
						isAvailable: boolean,
						price: number
						
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find product Details",
	    "status": 500,
	    "data": null
	   }
	 */

     // request to get a product by its id
	app.get(baseUrl+'/view/:prodId',auth.isAuthenticated,controller.viewProductById);

	/**
	 * @api {get} /api/v1/view/:prodId Get single product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId The prodId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found Successfully.",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number
					prodId: "string",
					title: "string",
					description: "string",
					price: number,
					isAvailable: boolean,
					category: "string",
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


	 // request to delete a product by it's id

	 app.post(baseUrl+'/:prodId/delete',auth.isAuthenticated,controller.deleteProduct);

    /**
	 * @api {post} /api/v1/:prodId/delete Delete product by product Id
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId prodId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


	 // request to edit a product details

	 app.put(baseUrl+'/:prodId/edit',auth.isAuthenticated,controller.editProduct);

	 /**
	  * @api {put} /api/v1/:prodId/edit Edit Product by product Id
	  * @apiVersion 0.0.1
	  * @apiGroup edit
	  *
	  * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	  * @apiParam {String} prodId prodId of the product passed as the URL parameter
	  *
	  *  @apiSuccessExample {json} Success-Response:
	  *  {
		 "error": false,
		 "message": "Product Edited Successfully.",
		 "status": 200,
		 "data": [
					 {
						 prodId: "string",
						 title: "string",
						 description: "string",
						 price: number,
						 isAvailable: boolean,
						 category: "string",
					 }
				 ]
			 }
		 }
	 }
	   @apiErrorExample {json} Error-Response:
	  *
	  * {
		 "error": true,
		 "message": "Error Occured.,
		 "status": 500,
		 "data": null
		}
	  */


    // add product to my cart using product id
	 app.get(baseUrl+'/addToCart/:prodId',auth.isAuthenticated,controller.addProductToCart);

	 /**
	  * @api {get} /api/v1/addToCart/:prodId Add product to cart by product Id
	  * @apiVersion 0.0.1
	  * @apiGroup edit
	  *
	  * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	  * @apiParam {String} prodId prodId of the product passed as the URL parameter
	  *
	  *  @apiSuccessExample {json} Success-Response:
	  *  {
		 "error": false,
		 "message": "Product is Successfully added in cart.",
		 "status": 200,
		 "data": [
					 {
						 cartId: "string",
						 products:[],
						 numberOfProducts: number,
						 totalAmount: number,
						 
					 }
				 ]
			 }
		 }
	 }
	   @apiErrorExample {json} Error-Response:
	  *
	  * {
		 "error": true,
		 "message": "Error Occured.,
		 "status": 500,
		 "data": null
		}
	  */

	 // get all product in my cart
	 app.get(baseUrl+'/allProductsInCart',auth.isAuthenticated,controller.getCartProducts);
	   /**
	 * @api {get} /api/v1/allProductsInCart Get all products in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All products Found in Cart",
	    "status": 200,
	    "data": [
					{
						cartId: "string",
						products: [],
						numberOfProducts: number,
						 totalAmount: number,
						
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find products in cart",
	    "status": 500,
	    "data": null
	   }
	 */




	 // request to remove a product from cart using product id
	 app.get(baseUrl+'/removeFromCart/:prodId',auth.isAuthenticated,controller.deleteProductFromCart);
       /**
	  * @api {get} /api/v1/removeFromCart/:prodId Remove product from cart by product Id
	  * @apiVersion 0.0.1
	  * @apiGroup edit
	  *
	  * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	  * @apiParam {String} prodId prodId of the product passed as the URL parameter
	  *
	  *  @apiSuccessExample {json} Success-Response:
	  *  {
		 "error": false,
		 "message": "Product is Successfully deleted from cart.",
		 "status": 200,
		 "data": [
					 {
						 cartId: "string",
						 products:[],
						 numberOfProducts: number,
						 totalAmount: number,
						 
					 }
				 ]
			 }
		 }
	 }
	   @apiErrorExample {json} Error-Response:
	  *
	  * {
		 "error": true,
		 "message": "Error Occured.,
		 "status": 500,
		 "data": null
		}
	  */
}