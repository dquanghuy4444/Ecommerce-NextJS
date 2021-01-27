import Products from '../../../models/product';
import connectDB from '../../../ultis/connect-database';

connectDB();

export default async (req, res) =>{
    switch (req.method) {
        case "GET":
            await getProducts(req , res);
            break;
    }
}

const getProducts = async (req, res)=>{
    try {
        const products = await Products.find();
        res.status(200).json({
            result: products.length,
            products
        })
    } catch (error) {
        return res.status(500).json({err: error.message});
    }
}