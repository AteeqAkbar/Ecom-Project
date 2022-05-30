const db = require("../models");
// const uploadFile = require("../middlewares/multer");


// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/data/uploads')
//     },
//     filename: function (req, file, cb) {
//         const ext = file.mimetype.split('/')[1]
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
//     }
// })

// function fileFilter(req, file, cb) {

//     // The function should call cb with a boolean
//     // to indicate if the file should be accepted
//     if (file.mimetype.split('/')[0] == 'image') {

//         // To accept the file pass true, like so:
//         console.log('img')
//         cb(null, true)
//     } else {
//         // To reject this file pass false, like so:
//         console.log('not img')
//         // cb(new Error('I don't have a clue!'), false)


//     }
//     // You can always pass an error if something goes wrong:

// }
// const upload = multer({ storage: storage, fileFilter: fileFilter })
// const uplodFile = upload.single('upload');


const admin = (req, res) => {

    res.render("admin/index")

}

////////////////////////////////admin product/////////////////////////////////////\

// add pro from
const addproductfrom = async (req, res) => {



    const category = await db.Category.findAll();
    if (category === null) {
        console.log('Not found!');
    }
    else {

        // console.log(category);
        // res.send(category)
        res.render("admin/addproduct", { category })
    }

}

// add product
const addproduct = async (req, res) => {
    try {
        console.log(req.file.filename);
        console.log(req.body.pro_featured);

        const { name, cat_id, price, des, pro_featured } = req.body

        const addproduct = await db.Product.create({
            name,
            cat_id,
            price,
            des,
            pro_featured,
            image: req.file.filename,
        });

        console.log(addproduct);
        res.send("working")

    } catch (error) {
        res.send(error)

    }

}

// show all product
const allproductShow = async (req, res) => {

    const category = await db.Category.findAll();

    const product = await db.Product.findAll();
    if (product === null) {
        console.log('Not found!');
    }
    else {

        // console.log(product);
        // res.send(product)
        res.render("admin/viewsproduct", { product, category })
    }
}




// get product by id

const getsinglepro = async (req, res) => {
    try {
        const id = req.params.id

        const product = await db.Product.findByPk(id);

        console.log(product);
        // res.send(product)
        res.render("admin/singleproduct", { product })

    } catch (error) {
        res.send(error)

    }

}
const updatesinglepro = async (req, res) => {
    try {
        const id = req.params.id

        const product = await db.Product.findByPk(id);

        const category = await db.Category.findAll();
        if (category === null) {
            console.log('Not found!');
        }
        else {

            // console.log("kam thik aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", category);
            // res.send(product)
            res.render("admin/updateproduct", { product, category })
        }

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const update = async (req, res) => {
    try {
        const id = req.params.id
        const { name, cat_id, price, des, pro_featured } = req.body
        // console.log("reqs");

        const product = await db.Product.update({
            name,
            cat_id,
            price,
            des,
            pro_featured,
            image: req.file.filename,

        }, {
            where: {
                id: id
            }
        });

        // console.log(product);
        res.send(product)

    } catch (error) {
        res.send(error)

    }

}

//  delete
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id


        const product = await db.Product.destroy({
            where: {
                id: id
            }
        });

        // console.log(product);
        res.send("prodcut deleted")

    } catch (error) {
        res.send(error)

    }

}








////////////category//////
const addcategoryfrom = (req, res) => {

    res.render("admin/addcategory")
}


////////////////////////all category start/////////////////////////////////


const allCategory = async (req, res) => {
    try {

        const category = await db.Category.findAll();
        if (category === null) {
            console.log('Not found!');
        }
        else {

            console.log(category);
            // res.send(category)
            res.render("admin/viewscategory", { category })

        }
    } catch (error) {
        res.send(error)
    }
}

// add category
const addcategory = async (req, res) => {
    try {

        // console.log(req.file.filename);
        // console.log("with i ");
        const name = req.body.name
        // console.log(name);
        const addcategory = await db.Category.create({
            name,
            cat_img: req.file.filename

        });

        console.log(addcategory);
        res.send("category added")

    } catch (error) {
        res.send(error)

    }

}
// get category by id

const getsinglecategory = async (req, res) => {
    try {
        const id = req.params.id

        const category = await db.Category.findByPk(id);

        console.log(category);
        res.render("admin/singlecategory", { category })

    } catch (error) {
        res.send(error)

    }

}

const updatesinglecat = async (req, res) => {
    try {
        const id = req.params.id

        const category = await db.Category.findByPk(id);

        if (category === null) {
            console.log('Not found!');
        }
        else {

            // res.send(product)
            res.render("admin/updatecategory", { category })
        }

    } catch (error) {
        res.send(error)

    }

}

// update by id and spasific filled

const updatecategory = async (req, res) => {
    try {
        const id = req.params.id



        const category = await db.Category.update({ name: req.body.name, cat_img: req.file.filename }, {
            where: {
                id: id
            }
        });

        // console.log(category);
        // res.send(category)
        res.render("admin/singlecategory", { category })


    } catch (error) {
        res.send(error)

    }

}

//  delete
const deletecategory = async (req, res) => {
    try {
        const id = req.params.id


        const category = await db.Category.destroy({
            where: {
                id: id
            }
        });

        console.log(category);
        res.send("category deleted")

    } catch (error) {
        res.send(error)

    }

}

const getcategorybyproduct = async (req, res) => {
    try {
        const id = req.params.id

        const category = await db.Category.findByPk(
            id,
            {
                include: db.Product
            },

        );

        console.log(category);
        // res.send(category)
        res.render("pages/categorybyproduct", { category })

    } catch (error) {
        res.send(error)

    }

}
//get all category with all products
const allCategorywithallproduct = async (req, res) => {
    try {

        const category = await db.Category.findAll({ include: db.Product });
        if (category === null) {
            console.log('Not found!');
        }
        else {

            console.log(category);
            res.send(category)

        }
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    admin,
    addproductfrom,
    allproductShow,
    update,
    updatesinglepro,
    addcategoryfrom,
    allCategory,
    addproduct,
    getsinglepro,
    updatesinglecat,
    deleteProduct,
    addcategory,
    getsinglecategory,
    updatecategory,
    deletecategory,
    getcategorybyproduct,
    allCategorywithallproduct

}