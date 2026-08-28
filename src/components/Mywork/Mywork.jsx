import React from 'react'
import './Mywork.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="work" className='mywork'>

        <div className="mywork-title">
            <h1> My Latest Work  </h1>
            <img src={theme_pattern} alt="" />
          
        </div>

        <div className='mywork_containers'>
            {
                mywork.map((item,i)=>{
                    return(
                        <img src={item.w_img} alt="" key={i}/>
                    )
                })
            }
        </div>
        <div className="mywork_showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork;