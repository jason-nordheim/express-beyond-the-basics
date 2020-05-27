/* by convention, this file contains all the logic for 
   serving up the application */

const app = require('./app')

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log("Currently listening on port", PORT))
