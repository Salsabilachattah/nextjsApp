import React , {useState , useEffect} from 'react';
import { useRouter } from 'next/router';
import IpPannel from '../components/IpPannel.js'; 
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import './styles.css';
const handleFetchIpData = async (setIpData , ip='') => {
  try {
    const response = await fetch(`/api/ipfy?ip=${ip}`);
    const data = await response.json();
    setIpData(data);
    console.log(data);
  } catch (error) {
    console.error('Error fetching location:', error);
  }
};

export default function MyIP() {
  const [IpData, setIpData] = useState('');
  const router = useRouter();
  const { ip } = router.query;

  useEffect(() => {
    handleFetchIpData(setIpData, ip);
  }, [ip]);
 const handleSearch = (ip) => {
    handleFetchIpData(setIpData, ip);
  };
  console.log(IpData);
  const Data = [];
 // The api offers a lot more ,  but I only kept these to keep it simple :)
  IpData.ip ? Data[0] = IpData.ip : 'unknown';  
  IpData.isp ?Data[1] = IpData.isp : 'unknown';
  if (IpData.location) { 
  Data[2] = IpData.location.country + '/' + IpData.location.region;
  Data[3] = IpData.location.lat + '/' + IpData.location.lng ;
  Data[4] = IpData.location.timezone;
  }
  else {
    Data[2] = 'unknown';
    Data[3] = 'unknown';
    Data[4] = 'unknown';
  }
  return (
    <div className="home-page-container">
      <Navbar onSearch={handleSearch}/>
      <IpPannel data={Data} />
      <Footer />
    </div>
  );
}