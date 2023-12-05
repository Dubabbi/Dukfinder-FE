import Find from '../components/Find/Find';
import Container from 'react-bootstrap/Container';
import UploadIcon from '../components/UploadIcon/UploadIcon';


export default function FindPage() {
    return (
        <>
                <Container style={{ minHeight: '75vh' }}>
                    <Find />
                    <a href="/findupload"><UploadIcon/></a>
                </Container>  
        </>
    );
}