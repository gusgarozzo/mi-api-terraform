import app from './src/app.js';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`[API v1] Servidor corriendo en puerto ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! Cerrando servidor...', err);
  server.close(() => process.exit(1));
});