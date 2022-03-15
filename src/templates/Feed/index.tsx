import React, { useEffect, useState } from "react";

import Piu from "../../components/Piu";
import UserInfo from "../../components/UserInfo";
import api from "../../config/api";
import InterfacePiu from "../../interface/Piu";

import * as S from "./styles";

const FeedTemplate: React.FC = () => {
  const [piusData, setPiusData] = useState<InterfacePiu[]>([]);
  useEffect(() => {
    async function getPius() {
      const pius = await api.get("/pius");
      console.log(pius);
      setPiusData(pius.data);
    }

    getPius();
  }, [piusData]);

  return (
    <S.ContentWrapper>
      <UserInfo />
      <S.Container>
        {piusData.map((piu) => (
          <Piu
            key={piu.id}
            image={piu.user.photo}
            username={piu.user.username}
            content={piu.text}
            user={false}
            likes={piu.likes.length}
            id={piu.id}
          />
        ))}
      </S.Container>
    </S.ContentWrapper>
  );
};

export default FeedTemplate;
