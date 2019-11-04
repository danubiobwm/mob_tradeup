import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 80px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 70px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
export const LName = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 2px;
  text-align: center;
`;

export const Email = styled.Text`
  font-size: 16px;
  line-height: 18px;
  color: #333;
  margin-top: 5px;
  text-align: center;
`;
