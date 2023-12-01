import FindDetail from '../components/FindDetail/FindDetail';
import Container from 'react-bootstrap/Container';
import Layout from '../Layout/Layout';

export default function FindDetailPage() {
    return (
        <>
            <Layout>
                <Container style={{ minHeight: '75vh' }}>
                    <FindDetail/>
                </Container>
            </Layout>
        </>
    );
}