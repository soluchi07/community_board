import './Tile.css';
import CROSS_DATA from './crosshair.json' 

function copyToClipboard() {
  alert("Copied to clipboard");
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
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