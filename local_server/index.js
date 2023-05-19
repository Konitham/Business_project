const books = [
    {
        id: 1,
        title: "May hu kon",
        author: "kon hu may",
        pages: 224,
        read: true,
    },
    {
        id: 2,
        title: "terminator",
        author: "vinod",
        pages: 899,
        read:false ,
    },
    {
        id: 3,
        title: "sky",
        author: "valmiki",
        pages: 567,
        read: false,
    },
    {
        id: 4,
        title: "y not",
        author: "van diesel",
        pages: 5679,
        read: true,
    },
    {
        id: 5,
        title: "let it be",
        author: "henry jackson",
        pages: 456,
        read: false,
    },

];
getPagesRead(books,3)
getPagesRead(books,5)

const getPagesRead = (books,authorId)=>{
 console.log(books.id)


}
