import './Tile.css';
import '/crosshair.json' CROSS_DATA


function Tile(props) {
  const link = props.pro + ".png";
  return(
    <>
    <div className="tile">
      <img src={link}/>
        <h3>{props.pro}</h3>
        <button onClick={() => 
          alert('Copied to clipboard!')}
          >Click to copy</button>      
    </div>
    </>
  );
}

export default Tile