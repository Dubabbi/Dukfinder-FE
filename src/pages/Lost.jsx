import Lost from '../components/Lost/Lost';
import {data} from '../postData';
import Container from 'react-bootstrap/Container';
import Layout from '../Layout/Layout';

export default function LostPage() {
    return (
        <>
            <Layout>
                <Container style={{ minHeight: '75vh' }}>
                    <Lost />
                </Container>
            </Layout>
        </>
    );
}