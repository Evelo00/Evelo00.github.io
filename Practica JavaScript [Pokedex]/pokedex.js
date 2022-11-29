const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./imagenes/sadpoke.gif")
            document.getElementById('error').style.display = 'block';
            
            const vacio1 = document.getElementById('abilities');
            vacio1.innerHTML="";

            const vacio2 = document.getElementById('nombre');
            vacio2.innerHTML="";

            const vacio3 = document.getElementById('idPokemon');
            vacio3.innerHTML="";

            const vacio4 = document.getElementById('weightPokemon');
            vacio4.innerHTML="";

            const vacio5 = document.getElementById('type');
            vacio5.innerHTML="";

            const vacio6 = document.getElementById('estadisticas');
            vacio6.innerHTML="";        
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfoabilities = data.abilities;
            let pokeInfoName = data.name;
            let pokeInfoId = data.id;
            let pokeInfoWeight = data.weight;
            let pokeInfoType = data.types;
            let pokeInfoStats = data.stats;

            pokeImage(pokeImg);
            pokeAbilities(pokeInfoabilities);
            pokeNames(pokeInfoName);
            pokeId(pokeInfoId);
            pokeWeight(pokeInfoWeight);
            pokeType(pokeInfoType);
            pokeStats(pokeInfoStats);

            console.log(data.stats);
            document.getElementById('error').style.display = 'none';
            document.getElementById('datospokemon').style.display = 'block';
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeAbilities = (abilites) => {
    const abilities = document.getElementById("abilities");
    const abilitiesName = abilites.map((item) => item.ability.name);
    abilities.innerHTML = "<b> Habilidades: </b>" + abilitiesName;
}
const pokeNames = (namepokemon) => {
    const pokeNombre = document.getElementById("nombre");
    nameP = namepokemon;
    pokeNombre.innerHTML = "<b> Nombre: </b>" + nameP;
}
const pokeId = (idpokemon) => {
    const pokeId = document.getElementById("idPokemon");
    idP = idpokemon;
    pokeId.innerHTML = "<b> N°: </b>" + idP;
}
const pokeWeight = (weightpokemon) => {
    const pokeWeight = document.getElementById("weightPokemon");
    weightP = weightpokemon;
    pokeWeight.innerHTML = "<b> Peso: </b>" + weightP;
}
const pokeType = (type) => {
    const types = document.getElementById("type");
    const typeName = type.map((item) => item.type.name);
    types.innerHTML = "<b> Tipo: </b>" + typeName;
}

const stats = document.getElementById("estadisticas");
const pokeStats = (stat) => {
    stats.innerHTML = "<b>" + "Estadisticas: " + " </b>" ;
    stat.forEach(item => {
        const statElement = document.createElement("h4");
        const statElementName = document.createElement("h5");
        const statElementAmount = document.createElement("p");
        statElementName.textContent = item.stat.name;
        statElementAmount.textContent = item.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        stats.appendChild(statElement);
    });

}