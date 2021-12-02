import "bootstrap/dist/css/bootstrap.min.css";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Spinner,
  Container,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
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
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [newData, setNewData] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newData);

    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newData),
    };
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos",
      options
    );
    const updatedData = await res.json();
    console.log(updatedData);
    setNewData({});
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewData((newData) => ({ ...newData, [name]: value }));
  };

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
      <Button onClick={() => setIsButtonClick(true)} className="mb-2">
        New Photo
      </Button>
      {isButtonClick && (
        <Modal size="lg" isOpen>
          <ModalHeader toggle={() => setIsButtonClick(false)}>
            Modal Form
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <label>Title : </label>
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                value={newData.title || ""}
                onChange={handleChange}
              />
              <label>URL : </label>
              <input
                type="text"
                placeholder="Enter Url"
                name="url"
                value={newData.url || ""}
                onChange={handleChange}
              />
              <label>Domain URL : </label>
              <input
                type="text"
                placeholder="Enter domainUrl"
                name="domainUrl"
                value={newData.domainUrl || ""}
                onChange={handleChange}
              />
              <Button
                className="button"
                disabled={!newData.title || !newData.url || !newData.domainUrl}
              >
                Save
              </Button>
            </form>
          </ModalBody>
        </Modal>
      )}
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
