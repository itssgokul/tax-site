// Server configuration file
import express from 'express';
import forceSSL from 'express-force-ssl';

const app = express();

// Force SSL in production
if (process.env.NODE_ENV === 'production') {
  app.use(forceSSL());
}

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
