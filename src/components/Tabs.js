import { Tabs,Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFire,FaGem} from "react-icons/fa";
import {GiByzantinTemple} from "react-icons/gi"
import Card from "./Cards"
import "../index.css"
import data from "../data"


export default function TabsCustom(){

    const CardElement= data.map(item=>{
        return <Card 
        key={item.id}
         {...item}
       />
      })
    return(
        <Tabs defaultActiveKey="24h-trending" className="my-5">
  <Tab eventKey="24h-trending" title={
   <span>
     <FaFire/><span className="margin-given">{"24h Trending"}</span>
   </span>
   
  }>
  
  <div className="sectionstyle" >
  {CardElement}
  </div>

 
 

  </Tab>
  <Tab eventKey="Latest shows" title="Latest shows">
  <div className="sectionstyle" >
  {CardElement}
  </div>
  
  </Tab>
  <Tab eventKey="Most Popular" title="Most Popular">
  <div className="sectionstyle" >
  {CardElement}
  </div>
  </Tab>
  <Tab eventKey="In genisis" title={<span><FaGem/><span className="margin-given">{"In Genisis"}</span></span>}>
  <div className="sectionstyle" >
  {CardElement}
  </div>
  </Tab>
  <Tab eventKey="In Temple" title={
   <span>
     <GiByzantinTemple/><span className="margin-given">{"In Temple"}</span>
   </span>
   
  }>
  <div className="sectionstyle" >
  {CardElement}
  </div>
  </Tab>
  <Tab eventKey="In void" title="In void">
  <div className="sectionstyle" >
  {CardElement}
  </div>
  </Tab>
  <Tab eventKey="#BAYC" title="#BAYC">
    
  <div className="sectionstyle" >
  {CardElement}
  </div>
  </Tab>
</Tabs>

    )
}
