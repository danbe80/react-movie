# React Movie App

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
