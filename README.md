# React Movie App

**_ 개인적인 공부를 위해 제작된 페이지입니다 _**

- react-router-dom 6버전 부턴 Switch 대신 routes를 사용
- component도 element로 바뀌었다고 한다.

  [공식문서](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes)

```js
// v5.xx
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
--------------------------------------
// v6
<Router>
  <Routes>
    <Route path="/" element={<Home />}>
    </Route>
  </Routes>
</Router>

```

## 사용할 API

[YTS](https://yts.mx/api) :
평점이 8.8 이상인 영화를 년도로 정렬

## 사용한 dependencies

- react
- react-dom
- react-router-dom
- prop-types
- react-icons
