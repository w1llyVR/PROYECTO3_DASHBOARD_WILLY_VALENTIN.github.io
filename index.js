var arr = [];
var cont = 0;
var inicio = true;
const get_Dogs = async() => {
    const url = "https://api.thedogapi.com/v1/breeds?limit=16";
    const res = await fetch(url);
    console.log(res);
    const data = await res.json()
    let lista = document.getElementById('container');
    lista.innerHTML = '';
    console.log(data.length);
    for (let i = 0; i < data.length; i += 4) {
        console.log(inicio);
        lista.innerHTML += `
         <div class="row">
                 <div class="col">
                     <div class="card" style="width: 19rem;">
                         <img height="160px" width = "80px" src="${data[i].image.url}" class="card-img-top" alt="...">
                         <div class="card-body">
                             <h5 class="card-title">${data[i].name}</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet nesciunt voluptate, laudantium harum sed alias eveniet expedita ipsum obcaecati in. Debitis earum excepturi enim quaerat deleniti quibusdam laboriosam nemo?</p>
                             <a href="#" class="btn btn-primary">Go somewhere</a>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div class="card" style="width: 19rem;">
                         <img height="160px" width = "80px" src="${data[i + 1].image.url}" class="card-img-top" alt="...">
                         <div class="card-body">
                             <h5 class="card-title">${data[i + 1].name}</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet nesciunt voluptate, laudantium harum sed alias eveniet expedita ipsum obcaecati in. Debitis earum excepturi enim quaerat deleniti quibusdam laboriosam nemo?</p>
                             <a href="#" class="btn btn-primary">Go somewhere</a>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div class="card" style="width: 19rem;">
                         <img height="160px" width = "80px" src="${data[i + 2].image.url}" class="card-img-top" alt="...">
                         <div class="card-body">
                             <h5 class="card-title">${data[i + 2].name}</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet nesciunt voluptate, laudantium harum sed alias eveniet expedita ipsum obcaecati in. Debitis earum excepturi enim quaerat deleniti quibusdam laboriosam nemo?</p>
                             <a href="#" class="btn btn-primary">Go somewhere</a>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div class="card" style="width: 19rem;">
                         <img height="160px" width = "80px" src="${data[i + 3].image.url}" class="card-img-top" alt="...">
                         <div class="card-body">
                             <h5 class="card-title">${data[i + 3].name}</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet nesciunt voluptate, laudantium harum sed alias eveniet expedita ipsum obcaecati in. Debitis earum excepturi enim quaerat deleniti quibusdam laboriosam nemo?</p>
                             <a href="#" class="btn btn-primary">Go somewhere</a>
                         </div>
                     </div>
                 </div>
        </div> <br>
        `
            // if (inicio == true) {
            //     lista.innerHTML += `
            //     <div class="row">
            //         <div class="col">
            //             <div class="card" style="width: 19rem;">
            //                 <img src="..." class="card-img-top" alt="...">
            //                 <div class="card-body">
            //                     <h5 class="card-title">Card title</h5>
            //                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet nesciunt voluptate, laudantium harum sed alias eveniet expedita ipsum obcaecati in. Debitis earum excepturi enim quaerat deleniti quibusdam laboriosam nemo?</p>
            //                     <a href="#" class="btn btn-primary">Go somewhere</a>
            //                 </div>
            //             </div>
            //         </div>
            //     `;
            //     inicio = false;
            // } else {
            //     if (cont >= 3) {
            //         lista.innerHTML += `
            //         <div class="col">
            //             <div class="card" style="width: 19rem;">
            //                 <img src="..." class="card-img-top" alt="...">
            //                 <div class="card-body">
            //                     <h5 class="card-title">Card title</h5>
            //                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet nesciunt voluptate, laudantium harum sed alias eveniet expedita ipsum obcaecati in. Debitis earum excepturi enim quaerat deleniti quibusdam laboriosam nemo?</p>
            //                     <a href="#" class="btn btn-primary">Go somewhere</a>
            //                 </div>
            //             </div>
            //         </div>

        //     </div>
        //     <br>
        //         `;
        //         inicio = true;
        //         cont = 0;
        //     } else {
        //         lista.innerHTML += `
        //         <div class="col">
        //             <div class="card" style="width: 19rem;">
        //                 <img src="..." class="card-img-top" alt="...">
        //                 <div class="card-body">
        //                     <h5 class="card-title">Card title</h5>
        //                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet nesciunt voluptate, laudantium harum sed alias eveniet expedita ipsum obcaecati in. Debitis earum excepturi enim quaerat deleniti quibusdam laboriosam nemo?</p>
        //                     <a href="#" class="btn btn-primary">Go somewhere</a>
        //                 </div>
        //             </div>
        //         </div>
        //         `;
        //     }
        // }
        arr.push(data);

        cont++;
    }
    console.log(data);
}

get_Dogs();