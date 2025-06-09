import './Tile.css';
import CROSS_DATA from './crosshair.json' 

//CROSS_DATA= JSON.parse(CROSS_JSON);
function copyToClipboard(pro) {
  const text = CROSS_DATA.pro;
  navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied to clipboard:', text);
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