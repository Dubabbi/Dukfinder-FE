import * as M from './MainStyle';
// import { dummy } from './../../core/mainDummy';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Card() {
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 여부 상태

  useEffect(() => {
    // 여기서 사용자의 로그인 여부를 확인하는 로직을 추가해야 합니다.
    // 예를 들어, 백엔드에서 사용자의 인증 토큰을 확인하는 요청을 보내거나
    // 프론트엔드에서 로컬 스토리지 등을 사용하여 로그인 여부를 확인할 수 있습니다.

    // 예시로, 특정 API 엔드포인트에 인증된 사용자만 접근할 수 있도록 헤더에 토큰을 추가하는 방법을 보여드립니다.
    const token = localStorage.getItem('authToken'); // 로컬 스토리지에서 토큰 가져오기

    if (token) {
      // 토큰이 있다면, 사용자가 로그인한 상태로 간주하여 데이터를 가져옵니다.
      axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/lost_posts/', {
        headers: {
          Authorization: `Bearer ${token}` // 인증 토큰을 헤더에 추가
        }
      })
        .then(response => {
          setData(response.data);
          setLoggedIn(true); // 로그인 상태로 설정
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    } else {
      // 토큰이 없다면, 로그인 페이지로 이동하거나 필요한 작업을 수행합니다.
      setLoggedIn(false); // 로그인되지 않은 상태로 설정
      // 예시: 로그인 페이지로 리디렉션하는 등의 작업을 수행할 수 있습니다.
    }
  }, []);

  return (
    loggedIn ? (
      data.map((item, index) => (
        <M.Card key={index}>
          <M.Image src={item.image} />
          <M.CardTitle>{item.title}</M.CardTitle>
          <M.TagWrapper>
            <M.Tag>{item.location}</M.Tag>
            <M.Tag>{item.date}</M.Tag>
          </M.TagWrapper>
        </M.Card>
      ))
    ) : (
      <p>Please log in to view posts</p>
      // 로그인되지 않은 경우, 로그인을 유도하는 메시지를 보여줄 수 있습니다.
    )
  );
}


// export default function Card() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/lost_posts/')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data: ', error);
//       });
//   }, []);

//   return (
//     data.map((item, index) => (
//       <M.Card key={index}>
//         <M.Image src={item.head_image} />
//         <M.CardTitle>{item.title}</M.CardTitle>
//         <M.TagWrapper>
//           <M.Tag>{item.location}</M.Tag>
//           <M.Tag>{item.created_at}</M.Tag> 
//         </M.TagWrapper> 
//       </M.Card>
//     ))
//   );
// }

// const [card, setCard] = useState([]);

// function cardData() {
//     var getTitle = document.getElementById("title").value;
//     var getContent = document.getElementById("content").value;
//     axios.get("http://127.0.0.1:8000/lost_posts/", {
//       title: getTitle,
//       content: getContent,
//     })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });


// export default function Card() {
//     return (dummy.results.map((item) => {
//         return(
           
//                 <M.Card>
//                     <M.Image src={item.image} />
//                     <M.CardTitle>{item.title}</M.CardTitle>
//                     <M.TagWrapper>
//                         <M.Tag>{item.location}</M.Tag>
//                         <M.Tag>{item.date}</M.Tag> 
//                     </M.TagWrapper> 
//                 </M.Card>
        
//         );
//     })) 
// }