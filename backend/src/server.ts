/* eslint-disable no-console */
import config from './config';
import app from './app';

async function main() {
  try {
    app.listen(config.PORT, () => {
      console.log(`server is running on port ${config.PORT} 🏃‍♂️‍➡️`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
