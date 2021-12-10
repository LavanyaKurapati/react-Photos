import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const fecthAlbums = async () => {
      try {
        const resp = await fetch(
          " https://jsonplaceholder.typicode.com/users/1/albums"
        );
        const respData = await resp.json();
        setAlbumData(respData);
        console.log(respData);
      } catch (e) {
        console.log(e);
      }
    };
    fecthAlbums();
  }, []);

  return (
    <>
      {albumData.map((item) => (
        <Link to={`/album/${item.id}`}>
          <ListGroup key={item.id}>
            <ListGroupItem href="#" tag="a" className="mb-2">
              {item.title}
            </ListGroupItem>
          </ListGroup>
        </Link>
      ))}
    </>
  );
};
export default Home;
