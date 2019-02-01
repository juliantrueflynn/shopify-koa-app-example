import 'isomorphic-fetch';
import server from './server';

const {PORT = 3000} = process.env;

// start the server on the given port
server.listen(3000, () => {
  console.log(`🚀 Listening on port ${PORT}`);
});
