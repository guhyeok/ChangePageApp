# 1ChangePage & LoadingPage (Logo)

# 2페이지 전환
설명 : App.js 파일에서 각 스크린별 페이지를 등록 , 각 스크린에서 onPress로 페이지 전환

### 주요 키워드

(페이지 등록부분)
NavigationContainer, 
Stack = createStackNavigator(),
Stack.Navigator
Stack.Screen

(페이지 전환부분)
this.props.navigation.navigate('[등록된 페이지 명]')

# 3로딩 페이지 구현
설명 : State 를 사용하여 첫실행시 수 초동안 로딩페이지를 랜더링 하고, 수 초 이후 setState로 상태를 변경하여 페이지 렌더링

### 주요 키워드

(State 구현부)
```
state ={
    isLoading : true
};
```

(State에 따른 렌더링)
```
if(this.state.isLoading){
    return <LoadingPage/>
}else{
    return <MainPage />
}
```

(첫실행시 호출)
```
componentDidMount = async() => {
    setTimeout(()=> {this.setState({isLoading: false})}, 3000);
}
```

