const { Server } = require("socket.io");

const socketController = async (socket) => {
  console.log("\a");
  try {
    console.log("Servidor conectado con ID: "+socket.id);
     // events listener
    socket.on("client-message", ({from, fromID, to, toID, text, timestamp, newMessages}) => {
        console.log({from,fromID, to, toID, text});
        
        // event emit
        // socket.broadcast.emit("server-message", data);
        socket.to(toID).emit('server-message', { from, fromID, to, toID, text, timestamp, newMessages});
        console.log("bienn")    
    });
    socket.on('disconnect', (reason) => console.log('Servidor desconectado', socket.id, reason));
  } catch (error) {
    console.log("error", error)
  }
};


module.exports = socketController;