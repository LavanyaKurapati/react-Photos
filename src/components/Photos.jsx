import "bootstrap/dist/css/bootstrap.min.css";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Spinner,
  Container,
  Row,
} from "reactstrap";
import { useState, useEffect } from "react";
import Photo from "./Photo";
import ImagePreview from "./ImagePreview";

const Photos = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isImagePreview, setIsImagePreview] = useState(null);

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/albums/${page}/photos`;
    const fetchPhotos = async () => {
      setLoading(true);
      let response = await fetch(url);
      let fetchedData = await response.json();
      setLoading(false);
      setData(fetchedData);
      console.log(page);
    };
    fetchPhotos();
  }, [page]);

  const handlePrevClick = () => {
    page === 1 ? setPage(1) : setPage(page - 1);
  };

  const showImagePreview = (photoObject) => {
    setIsImagePreview(photoObject);
    setIsImageOpen(true);
    console.log(photoObject);
  };

  const hideImagePreview = () => {
    setIsImageOpen(false);
    setIsImagePreview(null);
  };

  return (
    <Container>
      {isImageOpen && (
        <ImagePreview
          title={isImagePreview.title}
          url={isImagePreview.url}
          closePreview={hideImagePreview}
        />
      )}

      {loading ? (
        <Spinner type="border">Loading...</Spinner>
      ) : (
        <Row>
          {data.map(({ title, url, id }) => (
            <Photo
              key={id}
              title={title}
              url={url}
              onPhotoClick={showImagePreview}
            />
          ))}
        </Row>
      )}

      <div className="pagi-container">
        <Pagination>
          <PaginationItem>
            <PaginationLink
              first
              href="#"
              onClick={() => {
                setPage(1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" previous onClick={handlePrevClick} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => {
                setPage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => {
                setPage(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => {
                setPage(3);
              }}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => {
                setPage(4);
              }}
            >
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => {
                setPage(5);
              }}
            >
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              next
              onClick={() => {
                setPage(page + 1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              last
              onClick={() => {
                setPage(10);
              }}
            />
          </PaginationItem>
        </Pagination>
      </div>
    </Container>
  );
};

export default Photos;
