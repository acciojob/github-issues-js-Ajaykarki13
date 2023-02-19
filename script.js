//your code here
let main = document.querySelector("main");
let pageNumberHere = 1;

let getIssue = () => {
    console.log(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`);
  fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
  )
    .then((res) => res.json())
    .then((data) => displayIssue(data))
    .catch((err) => console.log(err));
};
getIssue();

let displayIssue = (data) => {
    main.innerHTML="";
    let pageNum = document.createElement("p");
    pageNum.textContent = `Page number ${pageNumberHere}`;
    let prev = document.createElement("button");
    prev.textContent = "Previous Page";
    prev.id="load_prev";
    let next = document.createElement("button");
    next.textContent = "Next Page";
    next.id="load_next"
    let ol=document.createElement("ol");

  data.map((issue) => {
    let li=document.createElement("li");
    li.textContent=issue.url;
    ol.append(li);
  });

  main.append(pageNum,ol,prev, next);
    prev.addEventListener("click", () => {
        if(pageNumberHere>1){
            pageNumberHere--;
            getIssue();
        }
    });
    next.addEventListener("click", () => {
      pageNumberHere++;
      getIssue();
    });
};

/*
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
*/