const {Router} = require('express'); //const router = express.Router();
const WelcomeController = require('./controllers/welcome');
const ContactController = require('./controllers/contact');

// Define Router Instances
const root = Router();
root.get('/', WelcomeController.home);
root.post('/contact', ContactController.submit);

module.exports = root;
