import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [luku,setLuku] = useState(0)
  const [edellinen,setEdellinen] = useState(0)
  const [toimitus,setToimitus] = useState('')
  const [edelToimitus,setEdelToimitus] = useState('')
  const [naytto,setNaytto] = useState(0)
  useEffect(()=> {
    paivitaNaytto()
  },[luku,edellinen,toimitus])

const numeroNappi = (numero) => {
  if(toimitus==='='){
    setToimitus('')
    setLuku(parseFloat(numero))
  }
  else if(toimitus==='.') {
    setLuku(parseFloat(luku + '.' + numero))
    setToimitus(edelToimitus)
    setEdelToimitus('')
  } else {
    setLuku(parseFloat(luku + numero))
  }
}

const tyhjenna = () => {
  setLuku(0)
  setEdellinen(0)
  setToimitus('')
  setEdelToimitus('')
  setNaytto(0)
}

const desimaali = () => {
  if(Number.isInteger(luku) && toimitus!=='.') {
    if(toimitus!==''){
      setEdelToimitus(toimitus)
    }
    setToimitus('.')
  }
}

const yhtaKuin = () => {
  if(toimitus===''||toimitus==='.'||toimitus==='=') {
    setToimitus('=')

    if(edelToimitus==='') {
      setEdellinen(luku)
      return
    } else if(edelToimitus==='+') {
      setEdellinen(edellinen+luku)
      return
    } else if(edelToimitus==='-') {
      setEdellinen(edellinen-luku)
      return
    } else if(edelToimitus==='*') {
      setEdellinen(edellinen*luku)
      return
    } else if(edelToimitus==='/') {
      setEdellinen(edellinen/luku)
      return
    }
  }

  if(toimitus==='+') {
    setEdellinen(edellinen+luku)
    setEdelToimitus('+')
  } else if(toimitus==='-') {
    setEdellinen(edellinen-luku)
    setEdelToimitus('-')
  } else if(toimitus==='*') {
    setEdellinen(edellinen*luku)
    setEdelToimitus('*')
  } else if(toimitus==='/') {
    setEdellinen(edellinen/luku)
    setEdelToimitus('/')
  }

  setToimitus('=')
    return
}

const toimitin = (laskuToimitus) => {
  if(toimitus!=='='||toimitus!==''){
    yhtaKuin()
  } else {
    setEdellinen(luku)
  }
  setLuku(0)
  setToimitus(laskuToimitus)
}

const paivitaNaytto = () => {
  if(toimitus==='=') {
    setNaytto(edellinen)
  } else {
    setNaytto(luku)
  }
}

  return (
    <div>
      <output>{naytto}</output>
      <br />
      <button onClick={tyhjenna}>C</button>
      <br />
      <button onClick={() => numeroNappi('7')}>7</button>
      <button onClick={() => numeroNappi('8')}>8</button>
      <button onClick={() => numeroNappi('9')}>9</button>
      <button onClick={() => toimitin('/')}>&divide;</button>
      <br />
      <button onClick={() => numeroNappi('4')}>4</button>
      <button onClick={() => numeroNappi('5')}>5</button>
      <button onClick={() => numeroNappi('6')}>6</button>
      <button onClick={() => toimitin('*')}>&times;</button>
      <br />
      <button onClick={() => numeroNappi('1')}>1</button>
      <button onClick={() => numeroNappi('2')}>2</button>
      <button onClick={() => numeroNappi('3')}>3</button>
      <button onClick={() => toimitin('-')}>&minus;</button>
      <br />
      <button onClick={() => numeroNappi('0')}>0</button>
      <button onClick={() => desimaali()}>.</button>
      <button onClick={() => yhtaKuin()}>=</button>
      <button onClick={() => toimitin('+')}>+</button>
      <br />
    </div>
  );
}

export default App;
