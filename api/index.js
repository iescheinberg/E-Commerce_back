const app = require("./src/app")

require('dotenv').config({quiet: true})

const port = process.env.PORT

// starts a simple http server locally on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
