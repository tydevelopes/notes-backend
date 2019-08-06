const app = require('./app');
const http = require('http');
const config = require('./utils/config');

const server = http.createServer(app);

server.listen(config.PORT, () =>
  conole.log(`Server running on port ${config.PO}`)
);

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
