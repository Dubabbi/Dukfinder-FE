import * as M from './MainStyle';
import { dummy } from './../../core/mainDummy';

export default function Card() {
    return (dummy.results.map((item) => {
        return(
           
                <M.Card>
                    <M.Image src={item.image} />
                    <M.CardTitle>{item.title}</M.CardTitle>
                    <M.TagWrapper>
                        <M.Tag>{item.location}</M.Tag>
                        <M.Tag>{item.date}</M.Tag> 
                    </M.TagWrapper> 
                </M.Card>
        
        );
    })) 
}