const bcrypt = require("bcrypt");
const userService = require("../services/userService");
const tokenService = require("../services/tokenService");

const register = async (req, res) => {

    try {
        const { username, password, avatar} = req.body;

        console.log(username, password)

        if (await userService.findByUsername(username))
            return res.status(400).json({ msg: "User exists" });

        const hash = await bcrypt.hash(password, 8);
        const numberOfUsers = await userService.addUser( username, hash, avatar);
        console.log(numberOfUsers)

        return res.status(201).json({ msg: "Registered", numberOfUsers: numberOfUsers });
                
    } catch (error) {
        console.log("error",error)
        return res.status(400).json({
            error: err.name,
            messagge: err.message,
          });
    }
  
};


const login = async (req, res) => {

    try {

        const { username, password } = req.body;

        console.log(username, password)

        const user = await userService.findByUsername(username);
        const userList = await userService.getUsers();
        
        if (!user) return res.status(401).json({ msg: "Invalid creds" });
      
        console.log("1")

        const ok = await bcrypt.compare(password, user.passwordHash);
      
        if (!ok) return res.status(401).json({ msg: "Invalid creds" });

        console.log("2")

        const token = await tokenService.generateToken({ username });
      
        return res.json({ token,  user, userList });
        
    } catch (error) {
        console.log("error",error)
       return res.status(400).json({
            error: err.name,
            messagge: err.message,
          });
    }

};

module.exports = { register, login };
