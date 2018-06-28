<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>欢迎登录</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>账号：</f7-label>
              <f7-input name="username" placeholder="请输入账号" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>密码</f7-label>
              <f7-input name="password" type="password" placeholder="请输入密码"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <!--<f7-list-button title="登录" login-screen-close></f7-list-button> -->
            <f7-list-button title="登录"></f7-list-button>
            <f7-list-button title="取消" login-screen-close></f7-list-button>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>

  </div>
</template>

<script>
export default {}    
</script>
