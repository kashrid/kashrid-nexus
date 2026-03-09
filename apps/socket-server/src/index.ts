import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["https://kashrid.com", "https://admin.kashrid.com", "https://socketio.kashrid.com"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

const PORT = process.env.PORT || 3002;
httpServer.listen(PORT, () => console.log(`Socket server on port ${PORT}`));
