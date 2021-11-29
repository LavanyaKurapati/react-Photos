import {Card, CardBody, CardTitle,CardImg,Col} from 'reactstrap'

const Photo = ({details}) => {
    const {title,url} = details
    return(
    <Col xs='6' md='4' xl='2'>
    <Card>
        <CardImg alt={title} src={url} width='100%' />
        <CardBody>
            <CardTitle>{title}</CardTitle>
        </CardBody>
    </Card>
    </Col>
    )
}
export default Photo