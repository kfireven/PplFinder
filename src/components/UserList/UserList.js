import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({ users, isLoading, fetchUsers }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [nationalities, setNationalities] = useState('');
  const [favIndexs, setfavIndexs] = useState([]);

  useEffect(() => {
    fetchUsers(nationalities);
  }, [nationalities]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const nationalityChange = (value) => {
    let isNationalityEmptyString = nationalities === '';
    let isNationalityContainsOneNation = nationalities.length === 2;

    nationalities.includes(value) ? 
      setNationalities(isNationalityContainsOneNation ? '' : nationalities.replace(',' + value, '')) : 
      setNationalities(isNationalityEmptyString ?  value : nationalities + ',' + value);
  };

  const AddRemoveUsersFromFavs = (userIndex) => {
    let favUsers = JSON.parse(localStorage.getItem("favorites"));
    var hasMatch = false;

    for (var i = 0; i < favUsers.length; i++) {
      if(favUsers[i].email === users[userIndex].email) {
        favUsers.splice(i, 1);
        setfavIndexs(favIndexs.filter(item => item != userIndex));
        hasMatch = true;
        break;
      }
    }

    if(!hasMatch) {
      favUsers.push(users[userIndex]);
      setfavIndexs(favIndexs => [...favIndexs, userIndex]);
    }

    localStorage.setItem("favorites", JSON.stringify(favUsers));
  };

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox onChange={value => nationalityChange(value)} value="BR" label="Brazil" />
        <CheckBox onChange={value => nationalityChange(value)} value="AU" label="Australia" />
        <CheckBox onChange={value => nationalityChange(value)} value="CA" label="Canada" />
        <CheckBox onChange={value => nationalityChange(value)} value="DE" label="Germany" />
        <CheckBox onChange={value => nationalityChange(value)} value="NL" label="Netherlands" />
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId || favIndexs.includes(index)}>
                <IconButton onClick={_ => AddRemoveUsersFromFavs(hoveredUserId)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
