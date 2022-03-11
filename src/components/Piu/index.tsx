import React from "react";

import highlight from "../../assets/home.svg";
import like from "../../assets/like.svg";

import * as S from "./styles";

// interface PiuProps {
//   image: string;
//   username: string;
//   content: string;
// }

const Piu: React.FC = () => {
  return <div></div>;
};

// const Piu: React.FC<PiuProps> = ({ image }, { username }, { content }) => {
//   return (
//     <div>
//       <S.Container>
//         <S.User>
//           <S.ProfPhoto src={image} />
//           <S.Username>{username}</S.Username>
//         </S.User>
//         <S.PiuText>{content}</S.PiuText>
//         <S.BtnWrapper>
//           <S.PiuButton>
//             <S.PiuButtonIcon src={highlight} />
//           </S.PiuButton>
//           <S.PiuButton>
//             <S.PiuButtonIcon src={like} />
//           </S.PiuButton>
//         </S.BtnWrapper>
//       </S.Container>
//     </div>
//   );
// };

export default Piu;
