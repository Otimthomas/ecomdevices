import React from "react";
import styled from "styled-components";

import ListItem from "../components/ListItem";

function ListItems() {
  const items = [
    {
      id: 1,
      image: "/static/iphone.jpg",
      name: "Iphone",
    },
    {
      id: 2,
      image: "/static/laptop.jpg",
      name: "Laptop",
    },
    {
      id: 3,
      image: "/static/printer.jpg",
      name: "Printer",
    },
  ];

  return (
    <Wrapper>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <ListItem {...item} />
          </div>
        );
      })}
    </Wrapper>
  );
}

export default ListItems;

const Wrapper = styled.div`
  padding: 60px 80px;

  display: flex;
  justify-content: center;

  div:not(:first-child) {
    margin-left: 30px;
  }
`;
