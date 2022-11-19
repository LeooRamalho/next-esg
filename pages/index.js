import Head from 'next/head'
import Image from 'next/image'
import { Col, Row, Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import profilePic from "../public/images/profile-pic.jpg"
import styles from "../styles/Profile.module.css"

export default function Perfil() {
  return (
    <div>
      <Head>
        <title>Perfil</title>
        <meta name="description" content="Perfil plataforma ESG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className='mt-3' style={{ "max-width": "1200px" }}>
        <Row>
          <Col xs={12} md={6}>
            <Col xs={12} className="text-center">
              <Image height={150} src={profilePic} alt="Foto do Perfil" className={styles.imagemPerfil} />
            </Col>
            <Col xs={12}>
              <h3 class="text-center mt-2 mb-0 text-primary">Usuario Teste</h3>
              <div class="text-center text-muted">Cargo X</div>
            </Col>
          </Col>
          <Col xs={12} md={5} className="mx-auto px-0">
            <Card className='shadow mt-3 pt-1 pb-2 pt-md-2 pb-md-3 px-2 card'>
              <Card.Title className={`${styles.title} text-primary`}>Quem sou eu</Card.Title>
              <Card.Text className={`${styles.cardText} p-0 p-md-2`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                ligula felis, gravida ac arcu non, tempor aliquet ipsum. Aliquam neque
                lorem, dapibus in sagittis non, maximus sit amet quam.
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5} className="mx-auto px-0">
            <Card className='shadow mt-3 pt-1 pb-2 px-2'>
              <Card.Title className={`${styles.title} text-primary`}>Atividades</Card.Title>
              <Card.Body className='py-0 px-3'>
                <Row className='text-terciary'>
                  <Col xs={6} className="text-center">
                    <div className={styles.dialNumber}>10</div>
                    <div className={styles.dialLabel}>Atividades<br />Registradas</div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <div className={styles.dialNumber}>3</div>
                    <div className={styles.dialLabel}>Conquistas<br />Obtidas</div>
                  </Col>
                </Row>
                <div className={`${styles.title} text-muted mt-3`}>Ultimas Registradas</div>
                <ListGroup>
                  <ListGroupItem className='d-flex align-items-center py-1 px-2'>
                    <div>Academia</div>
                    <div className="ms-auto badge badge-sm bg-success">+3</div>
                  </ListGroupItem>
                  <ListGroupItem className='d-flex align-items-center py-1 px-2'>
                    <div>Iniciou cultivo orgânico</div>
                    <div className="ms-auto badge badge-sm bg-success">+6</div>
                  </ListGroupItem>
                  <ListGroupItem className='d-flex align-items-center py-1 px-2'>
                    <div>Foi trabalhar de bicicleta</div>
                    <div className="ms-auto badge badge-sm bg-success">+9</div>
                  </ListGroupItem>
                </ListGroup>
                <div className='text-center mt-2'>
                  <Button className='btn-sm bg-primary'>Criar nova atividade</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={5} className="mx-auto px-0">
            <Card className='shadow mt-3 pt-1 pb-2 pt-md-2 pb-md-3 px-2 card'>
              <Card.Title className={`${styles.title} text-primary`}>Minha Equipe</Card.Title>
              <Card.Body className='py-0 px-3'>
                <ListGroup>
                  <ListGroupItem className='d-flex align-items-center py-1 px-2'>
                    <div>Carlos Roberto</div>
                    <div className="ms-auto badge badge-sm bg-terciary">15</div>
                  </ListGroupItem>
                  <ListGroupItem className='d-flex align-items-center py-1 px-2'>
                    <div>André Valasquez</div>
                    <div className="ms-auto badge badge-sm bg-terciary">10</div>
                  </ListGroupItem>
                  <ListGroupItem className='d-flex align-items-center py-1 px-2'>
                    <div className='text-secondary'>Minha Pontuação</div>
                    <div className="ms-auto badge badge-sm bg-secondary">9</div>
                  </ListGroupItem>
                  <ListGroupItem className='d-flex align-items-center py-1 px-2'>
                    <div>Tony Tuman</div>
                    <div className="ms-auto badge badge-sm bg-terciary">7</div>
                  </ListGroupItem>
                </ListGroup>
                <div className={`${styles.title} text-muted mt-2`}>Ciclos que Venci</div>
                <div className={`${styles.dialNumber} text-center`}>2</div>
                <div className='text-center mt-2'>
                  <Button className='btn-sm bg-primary'>Ver minha equipe</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div >
  )
}
