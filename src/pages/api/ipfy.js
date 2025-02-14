export default async function handler(req, res) {
    const apiKey = process.env.API_KEY_IPFY;
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`);
    const data = await response.json(); 
    res.status(200).json(data);
  }
  