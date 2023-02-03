// a function for this how much paper need for print book

function paperRequirement( book1, book2, book3){
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    let totalBook1Page = book1 * book1Page;
    let totalBook2Page = book2 * book2Page;
    let totalBook3Page = book3 * book3Page;

    console.log( book1, book2, book3)
    if (book1 == "undefined") {
        return totalBook2Page + totalBook3Page
    }else if (book2 == "undefined") {
        return totalBook1Page + totalBook3Page
    }else if (book3 == "undefined") {
        return totalBook1Page + totalBook2Page
    } else{
        return totalBook1Page + totalBook2Page + totalBook3Page;
    }
}

let book1 = 1;
let book2 = 5;
let book3 = 1;

let totalPaper = paperRequirement(book1, book2, book3);
console.log(totalPaper)
