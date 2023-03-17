import dbConn from "../config/config.js"
import { productSchema } from "../helper/product.validator.js"

export const addProduct = async(req, res) => {
    try {
        const {name, description, price, quantity} = req.body

        const {error} = productSchema.validate(req.body)
        if(error) return res.status(400).json({error: error.message})

        dbConn.query(`select * from products where name = '${name}'`, (error, results, fields) => {            
            if(error) return res.status(400).json({error: error})

            if (results[0]) {
                return res.status(400).json({message: 'Product already exists'})
            } else {
                dbConn.query(`insert into products(name, description, price, quantity) values('${name}', '${description}', ${price}, ${quantity})`, (error, results, fields) => {
                    if(error) return res.status(400).json({error: error})
        
                    if (results.affectedRows == 1) {
                        return res.status(200).json({message: 'Added successfully'})
                    } else {
                        return res.status(400).json({message: 'Failed to add'})
                    }
                })
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}

export const getProduct = async(req, res) => {
    try {
        const id = req.params.id

        dbConn.query(`select 
        products.id,
        products.name,
        products.description,
        products.price,
        products.quantity - (select sum(order_items.quantity) from order_items where order_items.product_id = products.id) as quantity, 
        products.date_added
    from products
    where products.id = '${id}'`, (error, results, fields) => {
            if(error) return res.status(400).json({error: error})
            
            if (results[0]) {
                return res.status(200).json({message: 'Product found', data: results[0]})
            } else {
                return res.status(400).json({message: 'Product not found', data: {}})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}

export const getProducts = async(req, res) => {
    try {
        dbConn.query(`select 
        products.id,
        products.name,
        products.description,
        products.price,
        products.quantity - (select sum(order_items.quantity) from order_items where order_items.product_id = products.id) as quantity, 
        products.date_added
    from products`, (error, results, fields) => {
            if(error) return res.status(400).json({error: error})
            
            if (results.length > 1) {
                return res.status(200).json({message: 'Products found', data: results})
            } else if(results.length == 1) {
                return res.status(200).json({message: 'Product found', data: results})
            } else {
                return res.status(400).json({message: 'Products not found', data: {}})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}

export const updateProduct = async(req, res) => {
    try {
        const id = req.params.id
        const {name, description, price, quantity} = req.body

        const {error} = productSchema.validate(req.body)
        if(error) return res.status(400).json({error: error.message})

        dbConn.query(`update products set name = '${name}', description = '${description}', price = ${price}, quantity = ${quantity} where id = ${id}`, (error, results, fields) => {
            if(error) return res.status(400).json({error: error})
            
            if (results.changedRows == 1) {
                return res.status(200).json({message: 'Product updated successfully'})
            } else if(results.affectedRows == 1 && results.changedRows == 0){
                return res.status(200).json({message: 'No changes were made'})
            } else {
                return res.status(400).json({message: 'Products update failed'})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const id = req.params.id

        dbConn.query(`select * from products where id = ${id}`, (error, results, fields) => {            
            if(error) return res.status(400).json({error: error})

            if (results[0]) {
                dbConn.query(`delete from products where id = ${id}`, (error, results, fields) => {
                    if(error) return res.status(400).json({error: error})
        
                    if (results.affectedRows == 1) {
                        return res.status(200).json({message: 'Product deleted successfully'})
                    } else {
                        return res.status(400).json({message: 'Failed to delete'})
                    }
                })
            } else {
                return res.status(400).json({message: 'Product does not exist'})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}