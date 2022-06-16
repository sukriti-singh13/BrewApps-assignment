

export default function Card(props){
    return(
        <div className="card">
            <img className="nft-images" src={props.image}/>
            <div className="card-info">
             <h3> {props.heading}</h3>
             <div className="more-info">
             <div className="nft-address">
              <p>{props.info.name}</p>
              <p>{props.info.address}</p>
             </div>
             {props.left===2 &&  
            <div className="nft-address1">
              <p>{props.secondinfo.name1}</p>
              <p>{props.secondinfo.address1}</p>
             </div>}
             </div>
            
            </div>

        </div>
    )

}