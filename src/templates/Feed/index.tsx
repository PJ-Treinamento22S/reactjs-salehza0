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
      setPiusData(pius.data);
      console.log(piusData);
    }
    getPius();
  }, []);

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
          />
        ))}
      </S.Container>
    </S.ContentWrapper>
  );
};

export default FeedTemplate;
