const btn = () => {
  const dynamicUrl = `https://randomuser.me/api/?results=50`
  fetch(dynamicUrl)
  .then(res => res.json())
  .then(data=>card(data.results[0]))
}
btn()

const card = (data) => {
  // console.log(data.id.name);
  const card = document.getElementById('cardID')
  card.classList.add('card')
  card.innerHTML =
     ` <div class="text-center my-3">
        <img src="${data.picture.thumbnail}" class="img-fluid w-25 rounded-circle" alt="...">
         <p class="card-text my-2">Hey...! My Name is ${data.name.title}  ${data.name.first}  ${data.name.last} </p> 
        </div>
  `
}

