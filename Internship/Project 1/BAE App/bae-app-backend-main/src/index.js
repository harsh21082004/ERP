import mongoose from 'mongoose';
import app from './app.js';

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB CONNECTED');

    app.on('error', (err) => {
      console.error('ERROR: ', err);
      throw err;
    });

    const onListening = () => {
      console.log(`Listening on ${process.env.PORT}`);
    };

    app.listen(process.env.PORT || 8001, onListening);
  } catch (err) {
    console.error('ERROR: ', err);
    throw err;
  }
})();
