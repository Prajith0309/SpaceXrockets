
 document.querySelector('#getval').addEventListener('click', getdata)


async function getdata(e){
    e.preventDefault();
    const options = {
        headers: {
            "Content-Type": "application/json" 
        },
      };
      let value = await fetch('https://api.spacexdata.com/v4/rockets', options)
    let nectval = await value.json()
    const data = document.querySelector('.data-list')
    nectval.forEach((ele) => {
        data.innerHTML += ` 
        <div class="card card-body mb-3 mt-5">
        <div class="row">
            <div class="col-md-6">
               <ul class="list-group">
                   <li class="list-group-item">Rocket Name : ${ele.name}</li>
                   <li class="list-group-item">First Flight : ${ele.first_flight}</li>
                   <li class="list-group-item">Stages : ${ele.stages}</li>
                   <li class="list-group-item">Boosters : ${ele.boosters}</li>
                   <li class="list-group-item">Status_Active : ${ele.active}</li>
               </ul>
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Country : ${ele.country}</li>
                    <li class="list-group-item">Cost_Per_Launch(in dollars) : ${ele.cost_per_launch}</li>
                    <li class="list-group-item">Height(meters) : ${ele.height.meters}</li>
                    <li class="list-group-item">Landing legs : ${ele.landing_legs.number}</li>
                    <li class="list-group-item">Success rate: ${ele.success_rate_pct}</li>
                </ul>
            </div>
        </div>
        <div class="mt-4">
                <p class= "border border-black border-1 p-2 rounded-2">Description: ${ele.description}</p>
        </div>
        </div>
        `
    });
}

