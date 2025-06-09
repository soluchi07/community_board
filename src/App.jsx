import './App.css'
import Tile from './components/Tile.jsx'

function App() {
  return (
    <>
      <div className="header">
        <h1>Copy the crosshair codes of your favourite Valorant Pros!</h1>
      </div>
      <div className="tile-row">
      <Tile pro="tenz" />
      <Tile pro="sacy" />
      <Tile pro="sinatraa" />
      <Tile pro="derke" />
      <Tile pro="scream" />
      <Tile pro="zekken" />
      <Tile pro="nats" />
      <Tile pro="leaf" />
      <Tile pro="asuna" /> 
      <Tile pro="mako" />
      <Tile pro="boaster" />
      <Tile pro="aspas" />
      </div>
    </>
  )
}

export default App
