import Lost from '../components/Lost/Lost';
import {data} from '../postData';
import Container from 'react-bootstrap/Container';


export default function LostPage() {
    return (
        <>
           
                <Container style={{ minHeight: '75vh' }}>
                    <Lost />
                </Container>
            
        </>
    );
}