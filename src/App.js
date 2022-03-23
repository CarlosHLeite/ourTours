import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import styled from 'styled-components'



const url = 'https://course-api.com/react-tours-project'

function App() {

  const [ isLoading, setIsLoading] = useState(true);
  const [ tourData, sertTourData ] = useState([]);


  const dataFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      sertTourData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }

  useEffect(()=> {
    dataFetch()
  },[])

  const deleteTour = (id) => {
    const newTours = tourData.filter( tour => tour.id !== id )
    sertTourData(newTours)
  }

  

  if(isLoading) {
    return <Loading />
  }

  return (
    <AppContent>
      <h1>Our Tours</h1>
      <Underline></Underline>
      <Tours tourData={tourData} deleteTour={deleteTour} />
      { tourData.length < 1 && <LoadMore onClick={dataFetch}>Load More</LoadMore>}
    </AppContent>
  );
}

const AppContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-top: 80px;
  }

`

const LoadMore = styled.button`

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

const Underline = styled.div` 
    height: 4px;
    width: 100px;
    background-color: #37b78f;
    margin: 6px 0px 40px 0px;
 
`

export default App;
