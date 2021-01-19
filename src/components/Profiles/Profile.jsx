import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  Row,
  Col,
  // Media,
} from 'reactstrap';
import Loader from '../Loader';

const Profile = ({ loading, data }) => {
  if (loading) {
    return (
      <div className='row'>
        <Loader />
      </div>
    );
  }

  const renderedProfiles = data.map((entry, index) => {
    return (
      <Col key={index} className='my-3'>
        <Card>
          <CardBody>
            <CardTitle>
              <h3>
                {entry.FirstName} {entry.LastName}
              </h3>
            </CardTitle>
            <ul style={{ listStyle: 'none' }}>
              <li>
                <strong>Gender</strong>: {entry.Gender}
              </li>
              <li>
                <strong>Latitude</strong>: {entry.Latitude}
              </li>
              <li>
                <strong>Longitude</strong>: {entry.Longitude}
              </li>
              <li>
                <strong>CreditCardNumber</strong>: {entry.CreditCardNumber}
              </li>
              <li>
                <strong>CreditCardType</strong>: {entry.CreditCardType}
              </li>
              <li>
                <strong>DomainName</strong>: {entry.DomainName}
              </li>
              <li>
                <strong>Email</strong>:
                <a href={`mailto:${entry.Email}`}> {entry.Email}</a>
              </li>
              <li>
                <strong>LastLogin</strong>: {entry.LastLogin}
              </li>
              <li>
                <strong>MacAddress</strong>: {entry.MacAddress}
              </li>
              <li>
                <strong>UserName</strong>: {entry.UserName}
              </li>
              <li>
                <strong>PaymentMethod</strong>: {entry.PaymentMethod}
              </li>
              <li>
                <strong>URL</strong>: {entry.URL}
              </li>
              <li>
                <strong>PhoneNumber</strong>: {entry.PhoneNumber}
              </li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return <Row>{renderedProfiles}</Row>;
};

export default Profile;
