import Lost from '../components/Lost/Lost';
import {data} from '../postData';
import Container from 'react-bootstrap/Container';
import Layout from '../Layout/Layout';
import Icon from './../components/UploadIcon/UploadIcon';
import { Link } from 'react-router-dom';

export default function LostPage() {
    return (
        <>
            <Layout>
                <Container style={{ minHeight: '75vh' }}>
                    <Lost />
                </Container>
                <Link to='/lost/upload'><Icon /></Link>
            </Layout>
        </>
    );
}