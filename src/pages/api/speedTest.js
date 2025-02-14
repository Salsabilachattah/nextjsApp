const FastSpeedtest = require("fast-speedtest-api");

export default async function handler(req, res) {
    const token = process.env.token_speedtest;

    if (!token) {
        return res.status(500).json({ error: 'API token is missing' });
    }

    const speedtest = new FastSpeedtest({
        token: token, 
        verbose: true, // default: false
        timeout: 5000, 
        https: true, 
        urlCount: 5, // default: 5 
        bufferSize: 8, // default: 8 
        unit: FastSpeedtest.UNITS.Mbps // default: Bps
    });
    try {
        const speed = await speedtest.getSpeed();
        // console.log(`Speed: ${speed} Mbps`);
        res.status(200).json({ speed });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
}