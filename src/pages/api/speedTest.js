const FastSpeedtest = require("fast-speedtest-api");
   
const myPromise = fastnetApi();
myPromise.then(res =>{
  console.log('it returned:', res);
  return res 
})

function fastnetApi() {

    let speedtest = new FastSpeedtest({
        token: "YOUR-TOKEN(CAN BE FOUND IN THE GITHUB DOC)", //**** required
        verbose: false, // default: false
        timeout: 5000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5 
        bufferSize: 8, // default: 8 
        unit: FastSpeedtest.UNITS.Mbps // default: Bps
    });

    return speedtest.getSpeed().then(s => {
        console.log(`Speed: ${s} Mbps`);
    console.log(typeof s)
    return s;
    }).catch(e => {
        console.error(e.message);
    });
}