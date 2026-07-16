const tabs = document.querySelectorAll('.tab');

const infoUnidades = {

    u1:{
        titulo:"Fundamentos Avanzados 01.",
        descripcion:"Consultas SQL complejas, joins, subconsultas y funciones analíticas.."
    },

    u2:{
        titulo:"Optimización y Rendimiento 02",
        descripcion:"Índices, planes de ejecución y tuning de consultas."
    },

    u3:{
        titulo:"Bases de Datos Distribuidas 03",
        descripcion:"Replicación, sharding y sistemas distribuidos."
    },

    u4:{
        titulo:"NoSQL y Big Data 04",
        descripcion:"MongoDB, Redis, Cassandra y ecosistema Big Data."
    }

};

function mostrarUnidad(id){

    document.querySelectorAll('.unidad')
        .forEach(sec=>{
            sec.classList.remove('activa');
        });

    document.getElementById(id)
        .classList.add('activa');

    tabs.forEach(tab=>{
        tab.classList.remove('active');
    });

    event.target.classList.add('active');

    document.getElementById("tituloUnidad").textContent =
        infoUnidades[id].titulo;

    document.getElementById("descripcionUnidad").textContent =
        infoUnidades[id].descripcion;
}

const avatar = document.querySelector('.avatar');
const modal = document.getElementById('modalPerfil');
const cerrar = document.querySelector('.cerrar');

avatar.onclick = () =>{
    modal.style.display = 'flex';
}

cerrar.onclick = () =>{
    modal.style.display = 'none';
}

modal.onclick = (e)=>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

