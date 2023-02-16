//your code here
let display = document.querySelector(".display")
let list = document.querySelector(".list")
let btn1 = document.querySelector("#load_prev")
let btn2 = document.querySelector("#load_next")
btn1.disabled = true;
let pageNumber = 1;
async function fetchData(pageNumber) {
    const response = await fetch(
        `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
    );
    const data = await response.json();
    let arr = data;
    console.log(arr)
    arr.map((e) => {

        list.innerHTML +=
            `
    <li>${e.title}</li>
    
    `
    })


}



function loadPrev() {
    pageNumber--;
    if (pageNumber == 1) {
        btn1.disabled = true;
    }
    display.innerHTML = `Page number ${pageNumber}`
    list.innerHTML = ''

    fetchData(pageNumber);
}

function loadNext() {
    btn1.disabled = false;
    pageNumber++;
    // if (pageNumber == 2) {
    //   document.getElementById("load_prev").disabled = false;
    // }
    display.innerHTML = `Page number ${pageNumber}`
    list.innerHTML = ''
    fetchData(pageNumber);
}

fetchData(1);