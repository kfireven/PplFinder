import React, { useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, fetchUsers } = usePeopleFetch();

  useEffect(() => {
    if (localStorage.getItem("favorites") == null) { // inital run add Tel Aviv City as defualt favorite
      localStorage.setItem("favorites", JSON.stringify([]));
    }
   }, []);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} fetchUsers={fetchUsers} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
