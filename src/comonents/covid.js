import React, { useEffect , useState }  from 'react'
import './covid.css'
const Covid1=()=>{
    const [data,setData]=useState([]);
        const getCovidData=async()=>{
            try{
                const res =await  fetch('https://api.covid19india.org/data.json');
                const actualData=await res.json();
                console.log(actualData.statewise[0]);
                setData(actualData.statewise[0]);
            }catch(err){
             console.log(err);       
            }
        }
    useEffect(()=>{
       getCovidData();
    },[])
  return (
    <>
    <section>
    <h1>
    🔴LIVE✔
    </h1>
    <h2>
        COVID 19 TRACKER APP
    </h2>
    <ul>
        <li className="card">
            <div className="cart_main">
                <div className="cart_inner">
                    <h1 className="cart_name">Our COUNTRY</h1>
                    <h2 className="cart_total card_small">INDIA❤</h2> 

                </div>
            </div>
        </li>
        <li className="card">
            <div className="cart_main">
                <div className="cart_inner">
                    <h1 className="cart_name">Total Recovered</h1>
                    <h2 className="cart_total card_small">{data.recovered}</h2> 
                </div>
            </div>
        </li>
        <li className="card">
            <div className="cart_main">
                <div className="cart_inner">
                    <h1 className="cart_name">TOTAL DEATHS</h1>
                    <h2 className="cart_total card_small">{data.deaths}</h2> 

                </div>
            </div>
        </li>
        <li className="card">
            <div className="cart_main">
                <div className="cart_inner">
                    <h1 className="cart_name">Active Cases</h1>
                    <h2 className="cart_total card_small">{data.active}</h2> 

                </div>
            </div>
        </li>
        <li className="card">
            <div className="cart_main">
                <div className="cart_inner">
                    <h1 className="cart_name">Total Confirmed</h1>
                    <h2 className="cart_total card_small">{data.confirmed}</h2> 

                </div>
            </div>
        </li>
        <li className="card">
            <div className="cart_main">
                <div className="cart_inner">
                    <h1 className="cart_name">Last Updated On</h1>
                    <h2 className="cart_total card_small">{data.lastupdatedtime}</h2> 

                </div>
            </div>
        </li>
    </ul>
    </section>
    </>
  )
}
export default Covid1