console.log('%c HI', 'color: firebrick')

/////////////////////

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const dogImageContainer = document.querySelector("#dog-image-container");

function renderData(data){
    const image = document.createElement('img');
    image.setAttribute("src", data)
    image.setAttribute("height", "100px")
    dogImageContainer.append(image)
}

fetch(imgUrl)
.then(response => response.json())
.then(dogData => {
    console.log(dogData.message);
    dogData.message.forEach(renderData);
});

//////////////////////////

const breedUrl = "https://dog.ceo/api/breeds/list/all";

const breedContainer = document.querySelector("#dog-breeds");

function renderBreedList(data){
    const listItem = document.createElement('li');
    listItem.textContent = data;
    listItem.setAttribute("style", "cursor: pointer")
    listItem.addEventListener("click", () => {
        console.log(listItem.textContent);
        listItem.setAttribute("style", "color: orange")
    })
    breedContainer.appendChild(listItem);
}

fetch(breedUrl)
.then(response => response.json())
.then(breedData => {
    console.log(breedData.message);
    const breedList = Object.keys(breedData.message);
    breedList.forEach(renderBreedList);
    
    const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener("change", (e) => {
        console.log(e.target.value);
        breedContainer.innerHTML = "";
        if (e.target.value === "all"){
            breedList.forEach(renderBreedList);
        } else {
        let filteredList = breedList.filter(breed => breed[0] === e.target.value)
        filteredList.forEach(renderBreedList)
        }
    })

    // debugger;
    // console.log(breedList.keys);
    // const dogArray = breedList.map(item => item[0])
    // breedList.forEach(renderBreedList);
});

////////////////////////////




