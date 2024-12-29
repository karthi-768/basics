import React, { Children } from "react";
import "./Check.css";
import EventExample from "./EventExample";
import { books } from "./books";

const Check = () => {
  const var1 = "Fuck u";
  const var2 = "Karthik Good Boy";
  // const books = [
  //   { author: "karthi", title: "success", id: 1 },
  //   { author: "ravi", title: "Double success", id: 2 },
  // ];
  const getBook = (id) => {
    const bk1 = books.find((book) => book.id === id);
    // console.log(bk1);
    console.log(bk1);
    return (
      <>
        <h2>Selected book author : {bk1.author}</h2>
        <h2>Selected book title : {bk1.title}</h2>
      </>
    );
  };
  return (
    <>
      {books.map((book, index) => {
        const { author, title, id } = book;
        return (
          <>
            <Check1
              author={author}
              title={title}
              number={index}
              getBook={getBook}
              id={id}
            />
            {/* <Check1 book={book} displayValue={displayValue} /> */}
            {/* <EventExample /> */}
          </>
        );
      })}
    </>
  );
};

const Check1 = (props) => {
  // console.log(props);
  const { author, title, getBook, id, number } = props;
  // const { author, title, displayValue } = props.book;
  // const getSingleBook = () => {
  //   getBook(id);
  //   console.log(getBook(id));
  // };
  return (
    <>
      <h1>{author}</h1>
      <p>{title}</p>
      <span>{number + 1}</span>
      <button
        onClick={() => {
          getBook(id);
        }}
      >
        Click Me{" "}
      </button>
    </>
  );
};

export default Check;
