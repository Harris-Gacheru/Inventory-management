import dbConn from "../config/config.js"

export const getCart = async(req, res) => {
    try {
        dbConn.query(`select id, customer_name from cart`, (error, results, fields) => {
            if(error) return res.status(400).json({error: error})
            
            if (results.length > 1) {
                return res.status(200).json({message: 'Carts found', data: results})
            } else if(results.length == 1) {
                return res.status(200).json({message: 'Cart found', data: results})
            } else {
                return res.status(400).json({message: 'Carts not found', data: {}})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}

export const getCartItems = async(req, res) => {
    try {
        const id = req.params.id

        dbConn.query(`select 
        cart_items.id,
        cart_items.cart_id,
        cart.customer_name,
        cart_items.product_id,
        products.name,
        products.description,
        products.price
    from cart_items
    inner join cart on cart_items.cart_id = cart.id
    inner join products on cart_items.product_id = products.id
    where cart_items.cart_id = '${id}'`, (error, results, fields) => {
            if(error) return res.status(400).json({error: error})
            
            if (results[0]) {
                return res.status(200).json({message: 'Cart items found', data: results})
            } else {
                return res.status(400).json({message: 'Cart items not found', data: {}})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}