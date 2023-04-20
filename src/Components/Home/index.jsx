import React, { useEffect } from 'react'
import './Home.css'
import settings from '../../assets/setting_icon.png'
import dash from '../../assets/dashboard_icon.png'
import schedule from '../../assets/schedule_icon.png'
import vector from '../../assets/Vector.png'
import user from '../../assets/user_icon.png'
import profile from '../../assets/image 1.png'
import notify from '../../assets/notifications.png'
import search from '../../assets/Search.png'
import revenue from '../../assets/revenue.png'
import transaction from '../../assets/transaction.png'
import users from '../../assets/users.png'
import likes from '../../assets/likes.png'
import {data,options,piedata} from '../../data/data'
import {Line,Pie} from 'react-chartjs-2'
import point from '../../assets/pointdown.png'
import { Chart as ChartJS, LineElement,CategoryScale, LinearScale,PointElement,ArcElement,Tooltip} from 'chart.js'
import legend1 from '../../assets/legend1.png'
import legend2 from '../../assets/legend2.png'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
)

const Home = () => {

  const [toggle,setToggle]=React.useState("visible animation");
  const [toggle2,setToggle2]=React.useState("hcontainer1 animation");

  const changestate = () => {
    if(toggle==="visible"){
    {  
      setToggle("toggle2");
      
      setToggle2("toggle hcontainer1 animation");
    }
    }
    else{
      setToggle("visible");
      setToggle2("hcontainer1 animation");
    }
  }
  return (
    <div className='outer-container'>
       <div className={toggle2}>
            <div className='hamburger' onClick={changestate}>
            <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
            </div>
             <div className={toggle}>
            <div className='align-left'>
            <h1 className='hheading'>Board.</h1>
            <div className='navicons'>
            <div style={{fontWeight:"500"}}><img width="12.6px"src={dash} alt="icon" className='icon'/> &nbsp;&nbsp;Dashboard</div>
            <div><img width="12.6px"src={vector} alt="icon" className='icon'/> &nbsp;&nbsp;Transactions</div>
            <div><img width="12.6px"src={schedule} alt="icon" className='icon'/> &nbsp;&nbsp;Schedules</div>
            <div><img width="12.6px"src={user} alt="icon" className='icon'/> &nbsp;&nbsp;Users</div>
            <div><img width="12.6px"src={settings} alt="icon" className='icon'/> &nbsp;&nbsp;Settings</div>
            </div>
            </div>
            <div className='bottom-content'>
            <p>Help</p>
            <p>Contact Us</p>
            </div>
            </div>
        </div>
        <div className='hcontainer2'>
            <div className="navbar">
            <div className='Logo'>
            <h1>Dashboard</h1>
            </div>
            <div className='right-section'>
            <div className='searchhere'>
            <input type="text" placeholder="Search..." className='search-input'/>
            <img src={search} className="search-btn" alt="" />
             </div>
             <div className='notifyimages'>
             <img src={notify} alt="icon" className='notify'/>
             <img src={profile} alt="icon" className='profile'/>
             </div>
            </div>
            </div>
            <div className="cards-section">
                <div className="card1 home-cards">
               <img src={revenue} alt="" className='card-image'/>
               <div className='sub-portion'>
               <h4 className='home-sub'>Total Revenues</h4>
               <h3 className='card-price'>$2,129,430</h3>
               </div>
                </div>
                <div className="card2 home-cards">
               <img src={transaction} alt="" className='card-image'/>
               <div className='sub-portion'>
               <h4 className='home-sub'>Total Transactions</h4>
               <h3 className='card-price'>1,520</h3>
               </div>
                </div>
                <div className="card3 home-cards">
               <img src={likes} alt="" className='card-image'/>
               <div className='sub-portion'>
               <h4 className='home-sub'>Total Likes</h4>
               <h3 className='card-price'>9,721</h3>
               </div>
                </div>
                <div className="card4 home-cards">
               <img src={users} alt="" className='card-image'/>
               <div className='sub-portion'>
               <h4 className='home-sub'>Total Users</h4>
               <h3 className='card-price'>892</h3>
               </div>
                </div>
            </div>
            <div className="chart-section">
              <div className='cover-content'>
              <h2>Activities</h2>
              <div className='chart-details'>
              <p className='details'>May - June 2021 &nbsp;<img src={point} alt="pointdown"/></p>
              <div className='legend'>
              <p><img src={legend2} className="lcolor" alt="" /> &nbsp;&nbsp;Guest</p>
                <p><img src={legend1} className="lcolor" alt="" /> &nbsp;&nbsp;Users</p> 
              </div>
              </div>
            <div className='chart-line'>
            <Line data={data} options={options} />
            </div>
            </div>
            </div>
            <div className="general">
              <div className="products">
              <div className='general-cover'>
              <div className="head-sub">
              <h2>Top Products</h2>
              <p className='details'>May - June 2021 &nbsp;<img src={point} alt="pointdown"/></p>
              </div>
              <div className="piechart">
              <div className="pie">
              <Pie 
              data={piedata}
              />
              </div>
              <div className="pie-details">
              <div className='subsections'>
              <h3><div className='circle'></div> Basic Tees</h3>
              <p>55%</p>
              </div>
              <div className='subsections'>
              <h3><div className='circle' style={{background: "#ebd277"}}></div> Custom Short Pants</h3>
              <p>31%</p>
              </div>
              <div className='subsections'>
              <h3><div className='circle' style={{background:"#EE8484"}}></div>Super Hoodies</h3>
              <p>14%</p>
              </div>
              </div>
              </div>
              </div>
              </div>
              <div className='schedule'>
                <div className="general-cover">
                <div className="head-sub">
                  <h2 style={{fontWeight:'700'}}>Today's schedule</h2>
                  <p className='details'style={{fontSize:"12px"}}>See All &nbsp;<img src={point} alt="pointdown" style={{transform: "rotate(270deg)"}}/></p>
              </div>
              <div className="timeline">
                <div className='bar'></div>
                <div className="pie-details">
                  <h5>Meeting with suppliers from Kuta Bali</h5>
                  <p className="para">14.00-15.00</p>
                  <p className='para'>at Sunset Road, Kuta, Bali</p>
                </div>
              </div>
              <div className="timeline" style={{marginTop:"-1.5vh"}}>
                <div className='bar' style={{background:"#6972C3"}}></div>
                <div className="pie-details">
                  <h5>Check operation at Giga Factory 1</h5>
                  <p className="para">18.00-20.00</p>
                  <p className='para'>at Central Jakarta</p>
                </div>
              </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home

