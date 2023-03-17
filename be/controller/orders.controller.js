import dbConn from "../config/config.js"

export const getOrders = async(req, res) => {
    try {
        dbConn.query(`select 
        orders.id,
        orders.customer_name,
        orders.customer_address,
        orders.order_date,
        order_items.id as order_items_id,
        order_items.quantity,
        order_items.product_id,
        products.name,
        products.description,
        products.price,
        products.quantity - (select sum(order_items.quantity) from order_items where order_items.product_id = products.id) as product_instock
    from orders
    inner join order_items on orders.id = order_items.order_id
    inner join products on order_items.product_id = products.id`, (error, results, fields) => {
            if(error) return res.status(400).json({error: error})
            
            if (results.length > 1) {
                return res.status(200).json({message: 'Orders found', data: results})
            } else if(results.length == 1) {
                return res.status(200).json({message: 'Order found', data: results})
            } else {
                return res.status(400).json({message: 'Orders not found', data: {}})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}

export const getOrder = async(req, res) => {
    try {
        const id = req.params.id

        dbConn.query(`select 
        orders.id,
        orders.customer_name,
        orders.customer_address,
        orders.order_date,
        order_items.id as order_items_id,
        order_items.quantity,
        order_items.product_id,
        products.name,
        products.description,
        products.price,
        products.quantity - (select sum(order_items.quantity) from order_items where order_items.product_id = products.id) as product_instock
    from orders
    inner join order_items on orders.id = order_items.order_id
    inner join products on order_items.product_id = products.id
    where orders.id = '${id}'`, (error, results, fields) => {
            if(error) return res.status(400).json({error: error})
            
            if (results[0]) {
                return res.status(200).json({message: 'Order found', data: results[0]})
            } else {
                return res.status(400).json({message: 'Order not found', data: {}})
            }
        })
    } catch (error) {
        res.json({error: error})
    }
}