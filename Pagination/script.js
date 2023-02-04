const listItems = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
    "item 11",
    "item 12",
    "item 13",
    "item 14",
    "item 15",
    "item 16",
    "item 17",
    "item 18",
    "item 19",
    "item 20",
    "item 21",
    "item 22",
    "item 23",
    "item 24",
    "item 25",
    "item 26",
    "item 27",
    "item 28",
    "item 29",
    "item 30",
    "item 31",
    "item 32",
    "item 33",
]

const listEl = document.getElementById("list")
const paginationEl = document.getElementById("pagination")

// halaman yang sedang dibuka
let currentPage = 1

// row per page
let rows = 5;

function displayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = ""
    page--;

    // formula
    let loopStart = rowsPerPage * page
    let loopEnd = loopStart + rowsPerPage
    let paginationItems = items.slice(loopStart, loopEnd)

    // testing data array
    console.log(paginationItems);

    for (let i = 0; i < paginationItems.length; i++) {
        // testing item per page
        console.log(paginationItems[i]);
        let item = paginationItems[i]

        let itemEl = document.createElement("div")
        itemEl.classList.add("item")
        itemEl.innerText = item

        wrapper.appendChild(itemEl)
    }
}

function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";

    let pageCount = Math.ceil(items.length / rowsPerPage)

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationBtn(i, items)
        wrapper.appendChild(btn)
    }
}

function paginationBtn(page, items) {
    let btnPagination = document.createElement("button")
    btnPagination.innerText = page

    if (currentPage == page) {
        btnPagination.classList.add("active")

    }
    btnPagination.addEventListener("click", () => {
        // alert("test button")
        currentPage = page
        displayList(items, listEl, rows, currentPage)

        let currenBtn = document.querySelector(".pagenumbers button.active")

        currenBtn.classList.remove("active")

        btnPagination.classList.add("active")
    })
    return btnPagination
}

displayList(listItems, listEl, rows, currentPage)
setupPagination(listItems, paginationEl, rows)