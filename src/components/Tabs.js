import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFire, FaGem } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";
import Fade from 'react-bootstrap/Fade'
import Card from "./Cards";
import "../index.css";
import data from "../data";



export default function TabsCustom() {
  const RecentCardElement = data.data1.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const LatestShowCardElement = data.data2.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const PopularCardElement = data.data3.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const GenisisCardElement = data.data4.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const InTempleCardElement = data.data5.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const InVoidCardElement = data.data6.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const BAYCCardElement = data.data7.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <Tabs defaultActiveKey="24h-trending" className="my-5">
      <Tab
        transition={false}
        eventKey="24h-trending"
        title={
          <span>
            <FaFire />
            <span className="margin-given">{"24h Trending"}</span>
          </span>
        }
      >
        <div className="sectionstyle">{RecentCardElement}</div>
      </Tab>
      <Tab 
        transition={false}
        eventKey="Latest shows" title="Latest shows">
        <div className="sectionstyle">{LatestShowCardElement}</div>
      </Tab>
      <Tab 
      transition={false}
       eventKey="Most Popular" title="Most Popular">
        <div className="sectionstyle">{PopularCardElement}</div>
      </Tab>
      <Tab
      transition={false}
        eventKey="In genisis"
        title={
          <span>
            <FaGem />
            <span className="margin-given">{"In Genisis"}</span>
          </span>
        }
      >
        <div className="sectionstyle">{GenisisCardElement}</div>
      </Tab>
      <Tab
      transition={false}
        eventKey="In Temple"
        title={
          <span>
            <GiByzantinTemple />
            <span className="margin-given">{"In Temple"}</span>
          </span>
        }
      >
        <div className="sectionstyle">{InTempleCardElement}</div>
      </Tab>
      <Tab 
      transition={false}
      eventKey="In void" title="In void">
        <div className="sectionstyle">{ InVoidCardElement}</div>
      </Tab>
      <Tab 
      transition={false}
      eventKey="#BAYC" title="#BAYC">
        <div className="sectionstyle">{BAYCCardElement}</div>
      </Tab>
    </Tabs>
  );
}
