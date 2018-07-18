const mongoose = require('mongoose');
//model
const Model = mongoose.model('Model');
const Cart = mongoose.model('Cart');


const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
const shortid = require('shortid');


// get all product list
let getAllProducts = (req, res) => {
    Model.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Controller: getAllProducts', 10)
                let apiResponse = response.generate(true, 'Failed To Find product Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No product Found', 'Controller: getAllProducts')
                let apiResponse = response.generate(true, 'No product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All products Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}//end

// function to add new product 
let addProduct = (req, res) => {
    let addProductFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.title) || check.isEmpty(req.body.description) || check.isEmpty(req.body.price) || check.isEmpty(req.body.category)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {


                let prodId = shortid.generate()

                let newProduct = new Model({

                    prodId: prodId,
                    title: req.body.title,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price
                }) // end new product model


                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in product addition')
                        resolve(result)
                    }
                }) // end 
            }
        }) // end 
    } // end add new product function

    // making promise call.
    addProductFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'Product is added successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

let viewProductById = (req, res) => {
    if (check.isEmpty(req.params.prodId)) {

        console.log('Product Id should be passed')
        let apiResponse = response.generate(true, 'Product Id is missing', 403, null)
        res.send(apiResponse)
    } else {

        Model.findOne({ 'prodId': req.params.prodId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "controller:viewProductById", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

//delete a product by it's id

let deleteProduct = (req, res) => {

    if (check.isEmpty(req.params.prodId)) {

        console.log('product Id should be passed')
        let apiResponse = response.generate(true, 'prodId is missing', 403, null)
        res.send(apiResponse)
    } else {

        Model.findOne({ 'prodId': req.params.prodId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                Model.remove({ 'prodId': req.params.prodId }, (err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result)) {
                        console.log('Product Not Found.')
                        let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                        res.send(apiResponse)
                    } else {
                        console.log('Product Deletion Success')
                        let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                        res.send(apiResponse)
                    }
                })
            }
        })


    }
}


// function to edit a product details

let editProduct = (req, res) => {
    console.log(req.params);
    if (check.isEmpty(req.params.prodId)) {

        console.log('prodId should be passed')
        let apiResponse = response.generate(true, 'prodId is missing', 403, null)
        res.send(apiResponse)
    } else {
        Model.findOne({ 'prodId': req.params.prodId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                let options = req.body;
                console.log(options);
                Model.update({ 'prodId': req.params.prodId }, options, { multi: true }).exec((err, result) => {

                    if (err) {

                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result)) {

                        console.log('Product Not Found.')
                        let apiResponse = response.generate(true, 'product Not Found', 404, null)
                        res.send(apiResponse)
                    } else {
                        console.log('Product Edited Successfully')
                        let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                        res.send(apiResponse)
                    }
                })
            }
        })

    }
}


// function to add products to cart
let addProductToCart= (req,res)=>{
    if (check.isEmpty(req.params.prodId)) {

        console.log('Product Id should be passed')
        let apiResponse = response.generate(true, 'Product Id is missing', 403, null)
        res.send(apiResponse)
    } else {

        Model.findOne({ 'prodId': req.params.prodId }, (err, result1) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result1)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'No such Product Found', 404, null)
                res.send(apiResponse)
            } else {

                Cart.findOne({ 'cartId': 'myCart' }, (err, result2) => {

                    if (err) {
        
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result2)) {
                      let newCart = new Cart({
                        numberOfProducts: 1,
                        totalAmount : result1.price,
                        products : [result1] 
                      })
                      newCart.save((err, result) => {
                        if (err) {
                            console.log('Error Occured.')
                            logger.error(`Error Occured : ${err}`, 'Database', 10)
                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                            res.send(apiResponse)
                        } else {
                            let apiResponse = response.generate(true, '1st element is succesfully added to cart', 200, result)
                            res.send(apiResponse)
                        }
                    }) 

                    } else {
                        //check whether product is already in cart

                         let obj = result2.products.find(function (obj) { return obj.prodId === result1.prodId?true:false; });

                        console.log("cheking whether object is alredy in cart ");
                        if(check.isEmpty(obj)){
                        Cart.update({ 'cartId': 'myCart' }, { $push: { "products": result1 },$set: {'numberOfProducts': result2.numberOfProducts+1, 'totalAmount':result2.totalAmount+result1.price } }).exec((err, result) => {

                            if (err) {
        
                                console.log('Error Occured !!!!.')
                                logger.error(`Error Occured : ${err}`, 'Database', 10)
                                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                res.send(apiResponse)
                            } else if (check.isEmpty(result)) {
        
                                console.log('there is no such cart 2 ..')
                                let apiResponse = response.generate(true, 'there is not such cart 2 ..', 404, null)
                                res.send(apiResponse)
                            } else {
                                console.log('Product cart addition Successfully')
                                let apiResponse = response.generate(false, 'Product is Successfully added in cart.', 200, result)
                                res.send(apiResponse)
                            }
                        })
                      }else{
                        let apiResponse = response.generate(true, 'Product is already added in cart.', 400, null)
                        res.send(apiResponse)
                      }
                    }
                })
            }
        })
    }
}
    

// function to get all products in my cart

let getCartProducts = (req,res)=>{
    Cart.find()
    .select('-__v -_id')
    .lean()
    .exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'Controller: getCartProducts', 10)
            let apiResponse = response.generate(true, 'Failed To Find product in cart', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No product Found in cart', 'Controller: getCartProducts')
            let apiResponse = response.generate(true, 'No product Found in cart', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All products Found in Cart', 200, result)
            res.send(apiResponse)
        }
    })
}

// function to remove product from cart

let deleteProductFromCart = (req,res)=>{
    if (check.isEmpty(req.params.prodId)) {

        console.log('Product Id should be passed')
        let apiResponse = response.generate(true, 'Product Id is missing', 403, null)
        res.send(apiResponse)
    } else {

        Model.findOne({ 'prodId': req.params.prodId }, (err, result1) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result1)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'No such Product Found', 404, null)
                res.send(apiResponse)
            } else {

                Cart.findOne({ 'cartId': 'myCart' }, (err, result2) => {

                    if (err) {
        
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result2)) {
                     
                    let apiResponse = response.generate(true, 'Your cart is empty', 200, result)
                    res.send(apiResponse)
                    } else {
                        Cart.update({ 'cartId': 'myCart' }, { $pull: { "products": {'prodId' : result1.prodId}  },$set: {'numberOfProducts': result2.numberOfProducts-1, 'totalAmount':result2.totalAmount-result1.price } }).exec((err, result) => {

                            if (err) {
        
                                console.log('Error Occured !!!!.')
                                logger.error(`Error Occured : ${err}`, 'Database', 10)
                                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                res.send(apiResponse)
                            } else if (check.isEmpty(result)) {
        
                                console.log('there is no such cart 2 ..')
                                let apiResponse = response.generate(true, 'there is not such cart 2 ..', 404, null)
                                res.send(apiResponse)
                            } else {
                                console.log('Product cart addition Successfully')
                                let apiResponse = response.generate(false, 'Product is Successfully deleted from cart.', 200, result)
                                res.send(apiResponse)
                            }
                        })
                    }
                })
            }
        })
    }
}

module.exports = {
    getAllProducts: getAllProducts,
    addProduct: addProduct,
    viewProductById: viewProductById,
    deleteProduct: deleteProduct,
    editProduct: editProduct,
    addProductToCart : addProductToCart,
    getCartProducts : getCartProducts,
    deleteProductFromCart :deleteProductFromCart
    
}