import React from 'react'

function Pokemon({p}) {
    return (
        <div
          key={p.pokemonId}
          className="column is-3-desktop is-4-tablet is-6-mobile"
        >
          <div
            className="card has-text-black"
            style={{ backgroundColor: p.color }}
          >
            <div className="card-image">
              <figure className="image is-square">
                <img src={p.thumbURL} />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p
                  className="title is-3 has-text-centered"
                  style={{ color: "black" }}
                ></p>
                <div className="mb-0">
                  <span className="has-text-weight-bold">Species: </span>
                  <span>{p?.species?.name}</span>
                </div>
                <div className="mb-0">
                  <span className="has-text-weight-bold">Habitat: </span>
                  <span>{p?.habitat?.name}</span>
                </div>
                <div className="mb-0">
                  <span className="has-text-weight-bold">
                    PokeTypes:{p?.poketypes.map((e) => e.name).join(", ")}
                  </span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Pokemon