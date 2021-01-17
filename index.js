import app from './src/app';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`🚀 Server listening on port: http://localhost:${port}`);
  /* eslint-enable no-console */
});
