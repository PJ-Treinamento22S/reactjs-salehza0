import React, { useEffect, useState, createContext } from "react";

import Piu from "../../components/Piu";
import UserInfo from "../../components/UserInfo";
import api from "../../config/api";
import InterfacePiu from "../../interface/Piu";

import * as S from "./styles";

interface GetPiusContextData {
  getPius: () => void;
}

export const GetPiusContext = createContext({} as GetPiusContextData);

const FeedTemplate: React.FC = () => {
  const [piusData, setPiusData] = useState<InterfacePiu[]>([]);
  async function getPius() {
    const pius = await api.get("/pius");
    setPiusData(pius.data);
    console.log(piusData);
  }
  useEffect(() => {
    getPius();
  }, []);

  return (
    <S.ContentWrapper>
      <GetPiusContext.Provider value={{ getPius }}>
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
      </GetPiusContext.Provider>
    </S.ContentWrapper>
  );
};

export default FeedTemplate;
