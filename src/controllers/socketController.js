const { socket } = require("../libs");

const socketController = async (socket) => {

  console.log("Servidor conectado con ID: "+socket.id);

  try {
     // events listener
    socket.on("client-message", ({from, fromID, to, toID, text}) => {
        console.log({from,fromID, to, toID, text});
        // event emit
        // socket.broadcast.emit("server-message", data);
        socket.to(toID).emit('server-message', { from, fromID, to, toID, text });
        console.log("bienn")    
    });

    socket.on('disconnect', (reason) => console.log('Servidor desconectado', socket.id, reason));
    console.log("")
  } catch (error) {
    console.log("error", error)
  }
 
};

module.exports = socketController;
