# Seperation of concerns 

`index.js` 
* renders application 
`app.js` 
* application logic 

## Why? 

This enables us to test our application logic without actually running our application. 

### Supertest 
What is [supertest](https://www.npmjs.com/package/supertest) ? 
* npm package 
* automates api testing 



## Routers 

The term "routing" refers to how an application's endpoint (URIs) respond to requests. For simple express apps, it is not uncommon that we just use `app.get('/route', controllerFunction)` or `app.post('/route', controllerFunction)`, but when the application gets larger, this could be cumbersome to navigate and result in a lot of tightly coupled code. 

First, let's demonstrate a very basic route to make sure that we are all on the same page: 

```js 
const express = require("express") 
const app = express() 

// basic http GET request to index, responds with "hello world" 
app.get("/", function(request, response) =>{
    response.send("hello world"); 
})
```

By using the `express.Router` class, we can seperate out the middleware component of route handling from the core application. Some may even think of this as building "mini-apps" within our "bigger application". 

a short example:

```js
// let's pretend this example is called `sampleController.js` 
const express = require("express")
const router = express.Router(); // here is where we get the router functionality 

// now we declare the middleware functions speicific to this router: 
// this will be executed everytime a route in this Router is processed
router.use(function timeLog(reqest, response, next) {
    console.log(`Time: ${Date.now()}`)
    next(); 
})

// define the routes for this mini app: 
router.get("/", (request, response) => {
    response.send("you are at the index page!"); 
})
router.get("/about", (request, response) => {
    request.send("you are at the about page!"); 
})

// now we need to export the router to use in the core applicaiton 
module.exports = router; 
```
Now in the main application logic, we can place the following code: 

```js
const express = require("express"); 
const app = express(); 

// miscellaneous application logic may be here....

// Now we pull in the router we declared in the previous file 
const exampleRouter = require("./controllers/sampleController")
// and  provide the router to be used by the app 
app.use("/example", exampleRouter); 
```

With the code above, we are directing any HTTP requests (any action) to the `exampleRouter` or `sampleController.js`. Since we have stated that anything destined for `/example`, we do not need the prefix in the router class. 

What does this mean? 

This means that in the example above, the `router.get("/about"...)` is actually handling requests from `"/example/about"` because in the main application, we stated that the root for that router was `example`. 

