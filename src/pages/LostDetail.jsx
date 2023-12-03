import LostDetail from '../components/LostDetail/LostDetail';
import Container from 'react-bootstrap/Container';
import Layout from '../Layout/Layout';

export default function LostDetailPage() {
    return (
        <>
            <Layout>
                <Container style={{ minHeight: '75vh' }}>
                    <LostDetail/>
                </Container>
            </Layout>
        </>
    );
}