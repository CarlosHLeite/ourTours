import React, { useState } from 'react';
import styled from 'styled-components';

function Tour({ id, name, info, image, price, deleteTour}) {

  const [readMore, setReadMore ] = useState(false)


  return (
    <Container>
      <img src={image} />

      <footer>

        <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        

        <p>
          {readMore ? info : `${info.substring(0, 180)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>

        <Btn onClick={() => deleteTour(id)}>Not Interestd</Btn>
      </footer>
      
      
    </Container>
  )
}


const Container = styled.article`
  width: 450px;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  transition: all .4s ease;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 4px 4px 0px 0px;
  }

  footer {
    padding: 24px;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    align-items: center;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin-bottom: 10px;

      h4:nth-child(2){
        color: #2e7e48;
        background-color: #d8ebde;
        padding: 4px 8px;
        font-size: 12px;
        border-radius: 6px;
      }
    }

    p {

      font-size: 14px;
      color: #363636;
      line-height: 120%;
      letter-spacing: 1px;

      button {
        border: none;
        background: transparent;
        text-transform: capitalize;
        margin: 0 2px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        color: #2e7e48;
        cursor: pointer;
        
      }
    }
  }
`

const Btn = styled.button`
  margin-top: 20px;
  font-size: 16px;
  color: #2e7e48;
  cursor: pointer;
  padding: 4px 12px;
  width: 160px;
  border: 1px solid #2e7e48;
  border-radius: 4px;
  background-color: #ebf5ef;
  transition: all .4s ease;

  &:hover {
    background-color: #d8ebde;
  }
`


export default Tour