import Lost from '../components/Lost/Lost';
import {data} from '../postData';
import Container from 'react-bootstrap/Container';
import UploadIcon from '../components/UploadIcon/UploadIcon';


export default function LostPage() {
    return (
        <>
           
                <Container style={{ minHeight: '75vh' }}>
                    <Lost />
                    <a href="/lostupload"><UploadIcon/></a>
                </Container>
            
        </>
    );
}