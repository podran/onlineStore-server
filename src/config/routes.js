const express = require('express');
const users = require('../controllers/users');
const products = require('../controllers/products');
const categories = require('../controllers/categories');
const authorization = require('./middleware/authorization')


const apiRouter = express.Router();

apiRouter.get('/user', users.all);
apiRouter.put('/user', users.create);
apiRouter.post('/user/login', users.login);
apiRouter.get('/user/me',authorization, users.me);
apiRouter.post('/user/:id', users.update);


apiRouter.get('/product', products.all);
apiRouter.put('/product', products.create);


apiRouter.get('/category', categories.all);
apiRouter.get('/category/:id/product', categories.products)
apiRouter.put('/category', categories.create);

module.exports = apiRouter;
