# React Native: App testes-tradeup

## To run this project:

- Clone this project.
	git clone https://github.com/danubiobwm/mob_tradeup.git
  
- Run yarn or npm

- Run your mobile enviroment

- Run `react-native run android` or `react-native run-ios`

- If the metro bundler doesn't start automaticaly, run `react-native start`

## Doc API:

- https://reqres.in/


## Scope:

Application android or Ios.

## Dependencies Used
axios
prop-types
react-Navigation/ Gesture Handler/ Vector Icons/
eslint
react-redux
reactotron-react-native
reactotron-redux
reactotron-redux-saga
redux
styled-components

## Login de Users da Api

"email": "eve.holt@reqres.in",
"password": "cityslicka"


Using the API to retrieve all users and data.
- [x] Login de Users
- [x] register users
- [x] Componentes
- [x] Navegação
- [x] Estilizando Header e StatusBar
- [x] Listando Usuários da API
- [x] Scroll infinito com FlatList
- [x] Detalhar Usuários
- [ ] Delete o Usuários, Erro na requisição da api.



## Dados

### Autenticação:

##### Request

POST [/api/login](https://reqres.in/api/login)

```js
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```

##### Response

200

```js
{
    "token": "QpwL5tke4Pnpja7X4"
}
```

### Listagem de usuários:

##### Request

GET [/api/users?page=2](https://reqres.in/api/users?page=2)

##### Response

200

```js
{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ]
}
```

### Listagem de usuários:

##### Request

GET [/api/users/2](https://reqres.in/api/users/2)

##### Response

200

```js
{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    }
}




