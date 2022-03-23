import Tour from "./Tour"

function Tours({tourData, deleteTour}) {

    console.log(tourData)


  return (
    <>
        {tourData.map( tour => {
          return (
            <Tour key={tour.id} {...tour} deleteTour={deleteTour}/>
          )
        })}
        
    </>
  )
}

export default Tours