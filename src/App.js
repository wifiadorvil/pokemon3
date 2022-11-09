import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
function App() {
  const [filtrePoketype, setFiltrePoketypes] = useState("");
  const [filtrePokemons, setFiltrePokemons] = useState([]);
  const [idPoketype, setIdPoketypes] = useState(null);

  const [idSpecies, setIdSpecies] = useState(null);
  const [idHabitats, setIdHabitat] = useState(null);
  const [poketypes, setPoketypes] = useState([]);
  const [habitats, setHabitat] = useState([]);
  const [species, setSpecies] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  async function getPokemons() {
    const url = `https://pokemonsapi.herokuapp.com/pokemons`;
    let rep = await fetch(url);

    if (rep.ok) {
      let data = await rep.json();
      console.log(data);
      setPokemons(data);
    }
  }
  useEffect(() => {
    getPokemons();

    return () => {};
  }, []);
  async function getSpecies() {
    const url = `https://pokemonsapi.herokuapp.com/species`;
    let rep = await fetch(url);

    if (rep.ok) {
      let data = await rep.json();
      console.log(data);
      setSpecies(data);
    }
  }
  useEffect(() => {
    getSpecies();

    return () => {};
  }, []);
  async function getHabitats() {
    const url = `https://pokemonsapi.herokuapp.com/habitats`;
    let rep = await fetch(url);

    if (rep.ok) {
      let data = await rep.json();
      console.log(data);
      setHabitat(data);
    }
  }
  useEffect(() => {
    getHabitats();

    return () => {};
  }, []);
  async function getPoketypes() {
    const url = `https://pokemonsapi.herokuapp.com/poketypes`;
    let rep = await fetch(url);

    if (rep.ok) {
      let data = await rep.json();
      console.log(data);
      setPoketypes(data);
    }
  }
  useEffect(() => {
    getPoketypes();

    return () => {};
  }, []);
  function handleSpecies(e){
   setIdSpecies(e.target.value) ;

   var finalSpecies=[]
    if (idHabitats){
       finalSpecies=pokemons.filter(p=>p.habitat.habitatId==idHabitats&&p.species.speciesId==e.target.value)

    }else{
       finalSpecies=pokemons.filter(p=>p.species.speciesId==e.target.value)

    }
    if(idPoketype){
      finalSpecies=pokemons.filter(p=>p.poketypes.filter(pk=>pk.poketypeId=idPoketype))

    }
    
   //setPokemons()
   console.log(finalSpecies)
   console.log(idSpecies)
   setFiltrePokemons(finalSpecies)


  }
  
  function handleHabitat(e){
    const h= e.target.value;
    setIdHabitat(h)
    console.log(idSpecies)
    var finalHabitat=[]
    if (idSpecies){
       finalHabitat=pokemons.filter(p=>p.habitat.habitatId==h&&p.species.speciesId==idSpecies)

    }else{
       finalHabitat=pokemons.filter(p=>p.habitat.habitatId==h)

    }
 
    //setPokemons()
    console.log(finalHabitat)
    console.log(h)
    setFiltrePokemons(finalHabitat)
 
 
   }
   var filtre=[]
if (!idSpecies && !idHabitats){
  filtre=pokemons
}else{
  if (filtrePokemons.length){
    filtre=filtrePokemons
  }else{
    filtre=[]

  }

}

  return (
    <div>
      <div className="section">
        <div className="columns is-centered">
          <div className="field is-horizontal" style={{ paddingLeft: 20 }}>
            <div className="field-label is-normal">
              <label className="label" forhtml="species">
                Species
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control" style={{ minWidth: 200 }}>
                  <div className="select is-fullwidth">
                    <select id="species" onChange={handleSpecies}>
                      <option value="">Séléctionner</option>
                      {species.map((s) => (
                        <option value={s.speciesId}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal" style={{ paddingLeft: 20 }}>
            <div className="field-label is-normal">
              <label className="label" forhtml="poketypes">
                Poketypes
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control" style={{ minWidth: 200 }}>
                  <div className="select is-fullwidth">
                    <select id="poketypes">
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal" style={{ paddingLeft: 20 }}>
            <div className="field-label is-normal">
              <label className="label" forhtml="habitats">
                Habitat
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control" style={{ minWidth: 200 }}>
                  <div className="select is-fullwidth">
                    <select id="habitats" onChange={handleHabitat}>
                    <option value="">Séléctionner</option>
                      {habitats.map((h) => (
                        <option value={h.habitatId}>{h.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="row columns is-multiline is-mobile">

          {
          
          
          
          filtre.map((p) => (<Pokemon p={p}/>))}
        </div>
      </div>
    </div>
  );
}

export default App;
