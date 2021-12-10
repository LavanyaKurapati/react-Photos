import { Card, CardBody, CardTitle, CardImg, Col } from "reactstrap";

const Photo = ({ title, url, thumbnailUrl, onPhotoClick }) => {
  return (
    <Col xs="12" md="4" xl="2" className="mb-2">
      <Card>
        <CardImg
          alt={title}
          src={thumbnailUrl}
          width="100%"
          onClick={() => onPhotoClick({ title, url })}
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Photo;
