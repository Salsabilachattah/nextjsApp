export default async function handler(req, res) {
    const apiKey = process.env.API_KEY_IPFY;
    const { ip } = req.query; 
    let url="";
    if (ip) // if the user provides an ip address in the search bar
    {
        url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
    }
    // else , use the client's ip and not the vercel server's
    else if (req.headers["x-forwarded-for"] == '::1') // localhost , for development
    {
       url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
    }
    else { // for production
        const forwarded = req.headers["x-forwarded-for"];
        const clientIp = forwarded ? forwarded.split(",")[0] : req.socket.remoteAddress;
        url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${clientIp}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
  
// export default async function handler(req, res) {
//     const apiKey = process.env.API_KEY_IPFY;
//     const { ip } = req.query;
//     const url = ip 
//         ?  `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
//         : `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// }