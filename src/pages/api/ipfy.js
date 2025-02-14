export default async function handler(req, res) {
    const apiKey = process.env.API_KEY_IPFY;
    const { ip } = req.query;
    const url = ip 
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
        : `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
  