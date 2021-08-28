
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))

const displayUser = (users) => {
console.log(users)
const randomusers = document.getElementById('random-users')
const div = document.createElement('div')
div.innerHTML = `
<div class="card" style="width: 18rem;">
<img src="${users.picture.large}" class="card-img-top" alt="...">
<div class="card-body">
     <h5 class="card-title"> Name: ${users.name.title} ${users.name.first} ${users.name.last}</h5>
     <h6> City: ${users.location.country}</h6>
     <h6>Street: ${users.location.street.name}</h6>

     <h6>Timezone: ${users.location.timezone.description} ${users.location.timezone.offset}</h6>
    <p class="card-text">.</p>
</div>
</div>
`;
randomusers.appendChild(div);

}
const refresh = ()=>{
window.location.reload();
}