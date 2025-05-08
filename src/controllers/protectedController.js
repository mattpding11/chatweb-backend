

const getSecret = async (_req, res) =>{
    return res.json({ msg: 'Top‑secret resource', token: _req.headers.authorization });
} 

module.exports =  getSecret ;


