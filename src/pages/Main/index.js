import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Background from '~/components/Background';
import {signOut} from '~/store/modules/auth/actions';
import api from '~/services/api';

import {
  Container,
  List,
  User,
  Avatar,
  Name,
  ProfileButton,
  ProfileButtonText,
  ProfileRemoveButton,
  ProfileButtonRemoveText,
  LogoutButton,
} from './styles';

export default function Main({navigation}) {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      setUsers(response.data.data);
    }
    loadUsers();
  }, []);

  // Detalhes do User
  handleNavigate = user => {
    navigation.navigate('Users', {user});
  };

  // Excluir User, Api retorna um erro, verificar
  handleRemove = user => {};

  // Sair da App para login
  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <List
          data={users}
          keyExtractor={user => String(user.id)}
          renderItem={({item: usuario}) => (
            <User>
              <Avatar
                source={{
                  uri: usuario.avatar,
                }}
              />
              <Name>{usuario.first_name}</Name>
              <ProfileButton onPress={() => this.handleNavigate(usuario)}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
              <ProfileRemoveButton onPress={() => this.handleRemove(usuario)}>
                <ProfileButtonRemoveText>Remove</ProfileButtonRemoveText>
              </ProfileRemoveButton>
            </User>
          )}
        />
        <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
      </Container>
    </Background>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
