import LostDetail from '../components/LostDetail/LostDetail';
import Container from 'react-bootstrap/Container';


export default function LostDetailPage() {
    return (
        <>
                <Container style={{ minHeight: '75vh' }}>
                    <LostDetail/>
                </Container> 
        </>
    );
}