import React from "react";
import styled from "styled-components";

function ListItem({ name, image }) {
  return (
    <Wrapper>
      <div className="card">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </Wrapper>
  );
}

export default ListItem;

const Wrapper = styled.div`
  .card {
    border: 1px solid #003931;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 4px 6px #003931;
  }

  img {
    width: 250px;
    height: 250px;
    border-bottom: 2px solid #003931;
  }

  p {
    font-weight: 500;
    font-size: 25px;
    text-align: center;
    padding: 20px;
  }
`;
