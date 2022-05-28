var arr = [];
var cont = 0;
var sumaRate = 0;
var inicio = true;

var arrRate = [
    []
];
arrRate.push([]);
arrRate.push([]);
arrRate.push([]);
arrRate[0].push(0);
arrRate[1].push(0);
arrRate[2].push(0);
var data;
const get_Data = async() => {
    const url = "https://fakestoreapi.com/products?limit=32";
    const res = await fetch(url);
    data = await res.json()
    let lista = document.getElementById('container');
    console.log(data[0]);
    console.log(typeof(data[0].rating.rate));
    for (let i = 0; i < data.length; i++) {
        if (data[i].rating.rate.value < 2)
            arrRate[0][0]++;
        else if (data[i].rating.rate > 2 && data[i].rating.rate < 4)
            arrRate[1][0]++;
        else
            arrRate[2][0]++;
    }
    console.log(arrRate[0][0]);
    console.log(arrRate[1][0]);
    console.log(arrRate[2][0]);
    for (let i = 0; i < data.length; i += 3) {
        lista.innerHTML += `
        <section class="bg-light pt-5 pb-5 shadow-sm">
            <div class="container">
                <div class="row">          
                    <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                        <div class="card" style="width: 18rem;">
                           
                        <div class="container">
                            <div class="h-25 d-inline-block">
                            <img src="${data[i].image}"  alt="Card Image" width="200" height="200">
                            </div>
                        </div>
                                
                            
                            
                            <div class="card-header">
                                <div class="col text-center">
                                    <h5>${data[i].title}</h5>
                                </div>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <ul>
                                    <li>Precio: ${data[i].price}</li>
                                    <li>Calificación: ${data[i].rating.rate}</li>
                                </ul>
                                <a href="./grafica.html" class="btn btn-primary mt-auto align-self-medium">Ir a Gráfica</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                        <div class="card" style="width: 18rem;">
                        <div class="container">
                            <div class="h-25 d-inline-block">
                                <img src="${data[i + 1].image}"  alt="Card Image"  width="200" height="200">
                            </div>
                        </div>
                            
                            <div class="card-header">
                                <div class="col text-center">
                                    <h5>${data[i + 1].title}</h5>
                                </div>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <ul>
                                    <li>Precio: ${data[i + 1].price}</li>
                                    <li>Calificación: ${data[i + 1].rating.rate}</li>
                                </ul>
                                <a href="./grafica.html" class="btn btn-primary mt-auto align-self-medium">Ir a Gráfica</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                    <div class="card" style="width: 18rem;">
                        <div class="container">
                            <div class="h-25 d-inline-block">
                                <img src="${data[i + 2].image}" alt="Card Image"  width="200" height="200">
                            </div>
                        </div>
                        
                        <div class="card-header">
                            <div class="col text-center">
                                <h5>${data[i + 2].title}</h5>
                            </div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <ul>
                                <li>Precio: ${data[i + 2].price}</li>
                                <li>Calificación: ${data[i + 2].rating.rate}</li>
                            </ul>
                            <a href="./grafica.html" class="btn btn-primary mt-auto align-self-medium">Ir a Gráfica</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        `
        arr.push(data);
        cont++;
    }
}




const setGraph2 = () => {

    let labelsData = {}
    for (let i = 0; i < data.length; i++) {
        let palabra = data[i].title
        labelsData = Object.assign(labelsData, {
            [palabra]: { v: data[i].price }
        });
    }
    console.log('labelsdata', labelsData);
    const labels = Object.keys(labelsData)
    const converData = Object.values(labelsData).map((item) => item.v)
    console.log(converData)
    const dataConfig = {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: converData,
        }]
    };
    const config = {
        type: 'bar',
        data: dataConfig,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    const myChart = new Chart(
        document.getElementById('mySecondChart'),
        config
    )


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const setGraph = () => {
    const labels = Object.keys({ 'Menor a 2': { v: arrRate[0][0] }, 'Más de 2 y menos de 4': { v: arrRate[1][0] }, 'Más de 4': { v: arrRate[2][0] } });
    const converData = [arrRate[0][0], arrRate[1][0], arrRate[2][0]];
    const colors = [];
    for (let i = 0; i < Object.values(arrRate).length; i++) {
        colors.push(`rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)} )`)
    }

    const data2 = {
        labels: labels,
        datasets: [{
            label: 'DATA DE RATE',
            data: converData,
            backgroundColor: colors,
            hoveroffset: 4
        }]
    }

    const config = {
        type: 'doughnut',
        data: data2,
    };

    const mySecondChart = new Chart(
        document.getElementById('myChart'),
        config
    )

}

get_Data();


function grafic1() {
    const espacio = document.getElementById('graficos');
    espacio.innerHTML =
        `
        <div style="text-align: center;">
            <div class="h-40 d-inline-block " style="width: 500px; background-color: rgba(0,0,255,.1)">
            <canvas id="myChart"></canvas>
            </div>
        </div>
        
    `
    setGraph();
}


function grafic2() {
    const espacio = document.getElementById('graficos');
    espacio.innerHTML =
        `
        <canvas id="mySecondChart"></canvas>
    `
    setGraph2();
}