import { Tabs,Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Tabs defaultActiveKey="profile" className="my-5">
  <Tab eventKey="24h Trending" title="24h Trending">
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
  <Tab eventKey="In genisis" title="In genisis">
  <div className="sectionstyle" >
  {CardElement}
  </div>
  </Tab>
  <Tab eventKey="In Temple" title="In Temple">
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
