import './Tile.css';
import CROSS_JSON from './crosshair.json' 

CROSS_DATA = JSON.parse(CO);
function copyToClipboard() {
  pro = props.pro;
  const text = CROSS_DATA.pro;
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
        <button onClick={copyToClipboard}>Click to copy</button>      
    </div>
    </>
  );
}

export default Tile