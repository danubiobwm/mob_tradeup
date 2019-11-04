import React, {Component} from 'react';
import Proptypes from 'prop-types';
import Background from '~/components/Background';
import api from '~/services/api';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Avatar, Name,LName, Email } from './styles';

export default class Users extends Component {
  static navigationOptions = ({navigation})=>({
    title: navigation.getParam('user').first_name,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Icon name="chevron-left" size={20} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  static proptypes={
    navigation:Proptypes.shape({
      getParam:Proptypes.func,
    }).isRequired
  }

  state={
    inf: [],
  }

async componentDidMount(){
  const {navigation}=this.props;
  const user = navigation.getParam('user')

  const response = await api.get(`users/${user.id}`);
  this.setState({inf: response.data})
}


  render() {

    const {navigation}=this.props;
    const {inf}=this.state;
    const user=navigation.getParam('user')

    return (
      <Background>
      <Container>
      <Header>
      <Avatar source={{ uri: user.avatar, }}/>
        <Name>{user.first_name}</Name>
        <LName>{user.last_name}</LName>
        <Email>{user.email}</Email>
      </Header>

    </Container>
    </Background>
    );
  }
}

