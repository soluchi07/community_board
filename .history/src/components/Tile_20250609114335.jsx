import './Tile.css';
import CROSS_DATA from './crosshair.json' 

function copyToClipboard() {
  CROSS_DATA.par  
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard");;
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

function Tile(props) {
  const link = props.pro + ".png";
  return(
    <>
    <div className="tile">
      <img src={link}/>
        <h3>{props.pro}</h3>
        <button onClick={() => copyToClipboard(props.pro)}>Click to copy</button>      
    </div>
    </>
  );
}

export default Tile