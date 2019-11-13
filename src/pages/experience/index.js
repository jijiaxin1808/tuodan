import React,{  useState, useEffect } from "react";
import Card from "antd/es/card";
import experData from "../../assest/experData";
import "./index.less";

const Experience = (props)=> {
    const [ type,setType ] = useState(1)
    useEffect(()=> {

    },[props.location.href])
    if(type ===1) {
        return (
            <div>
                <div className = "expr-title">恋爱经验大秘籍</div>
                {
                    experData.map((item,index)=> {
                        return (
                            <Card 
                            hoverable key = {index} onClick = {()=> {setType(index+2)}}
                            style={{ width: "70%",height: "20vw",margin: "0 auto",marginTop:"2vw" }} className = "expr-card">
                            <img src = {item.picUrl} alt = "" style = {{width:"25vw", height: "15vw"}} /> 
                            <div style = {{width:"60%"}} className = "expr-content">
                        <div className = "expr-content-header"><span>{item.title}</span><i>{item.time}</i></div>
                    <div>{item.content}</div>
                            </div>
                        </Card>
                        )
                    })
                }
            </div>
        )
    }
    else return (
        <div className = "message">
<div className = "message-title">{experData[type-2].title}</div>
    <div className = "message-time">{experData[type-2].time}</div>
            <pre style = {{fontSize:"1vw",wordBreak:"break-all"}}>
{experData[type-2].allContent}
            </pre>
        </div>
    )

}
export default Experience