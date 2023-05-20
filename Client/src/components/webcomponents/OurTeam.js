import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TeamMember = ({ name, role, image, description }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="image-flip">
        <div className="mainflip">
          <div className="frontside">
            <Card>
              <Card.Body className="text-center">
                <Card.Img src={image} alt={name} className="img-fluid" />
                <Card.Title>{name}</Card.Title>
                <Card.Text>{role}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="backside">
            <Card>
              <Card.Body className="text-center mt-4">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

const OurTeam = () => {
  const [teamMembers] = useState([
    {
      name: "John Doe",
      role: "CEO",
      image: "path_to_image",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more team members here
  ]);

  return (
    <section id="team" className="pb-5">
      <Container>
        <h5 className="section-title h1">OUR TEAM</h5>
        <Row>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurTeam;
