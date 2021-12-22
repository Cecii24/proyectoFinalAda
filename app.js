// https://rickandmortyapi.com/api/character

const init = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) =>{
        const personajes = datos.results;
        const section = document.querySelector('section');
        let info = '';

        for (let i = 0; i < personajes.length; i++) {
            info += `
            <div>
                <p>Name: ${personajes[i].name} </p>
                <p>Gender: ${personajes[i].gender} </div>
                <p>Origin: ${personajes[i].origin.name} </div>
                <hr>
            </div>`
        }
        return section.innerHTML = info;
    })
};





document.onload = init ();