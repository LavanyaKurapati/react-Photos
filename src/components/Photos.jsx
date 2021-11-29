import 'bootstrap/dist/css/bootstrap.min.css';
import {Pagination, PaginationItem, PaginationLink, Spinner, Container, Row} from 'reactstrap'
import { useState, useEffect } from 'react';
import Photo from './Photo';

const Photos = () => {
    
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let url=`https://jsonplaceholder.typicode.com/albums/${page}/photos`
    const fetchPhotos = async() => {
      setLoading(true)
      let response = await fetch(url)
      let fetchedData = await response.json()
      setLoading(false)
      setData(fetchedData)
      console.log(page)
    }
    fetchPhotos()
  },[page])


  const handleFirstClick = () => {
    setPage(1)
  }

  const handlePrevClick = () => {
    page === 1 ? setPage(1) : setPage(page-1)
  }

  const handle1Click = () => {
    setPage(1)
  }

  const handle2Click = () => {
    setPage(2)
  }

  const handle3Click = () => {
    setPage(3)
  }

  const handle4Click = () => {
    setPage(4)
  }

  const handle5Click = () => {
    setPage(5)
  }

  const handleNextClick = () => {
    setPage(page+1)
  }

  const handleLastClick = () => {
    setPage(10)
  }

  const LoaderView = () => {
    return(
    <Spinner type="border">
        Loading...
    </Spinner>
    )
}

const displayData = () => {
    return(
        <Container>
            <Row >  
                {data.map(item => <Photo key={item.id} details={item}/>)}  
            </Row>
        </Container>
        
    )
}

  return (
    <div className="App">
        <div >
            {loading ? LoaderView() : displayData()}
        </div>
        
    <div className="pagi-container">
      <Pagination className="text-center">
        <PaginationItem>
          <PaginationLink first href="#" onClick={handleFirstClick}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" previous onClick={handlePrevClick}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={handle1Click}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={handle2Click}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={handle3Click}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={handle4Click}>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={handle5Click}>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" next onClick={handleNextClick}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" last onClick={handleLastClick}/>
        </PaginationItem>
      </Pagination>
      </div>
    </div>
  );

}

export default Photoss