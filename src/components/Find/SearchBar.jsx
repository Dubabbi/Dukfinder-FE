import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as F from './FindStyle';
// import Stack from 'react-bootstrap/Stack';
import { FaSearch } from 'react-icons/fa';


function SearchBar() {
    return (
        <>
            <F.Search_Container>
                <F.StyledForm>
                    <Form.Control type="text"
                        placeholder="게시글 검색"size="lg" className="form-control" />
                        <F.StyledButton type="submit" variant="none"><FaSearch size={20} /></F.StyledButton>

                </F.StyledForm>
            </F.Search_Container>
        </>
      );
}

export default SearchBar;
