<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>门店管家</f7-nav-title>
    </f7-navbar>
    <f7-list>
      <f7-list-item link="/about/" title="商机列表"></f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-item link="/attendance/" title="考勤管理"></f7-list-item>
    </f7-list>
        <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
    </f7-list>
    

  </f7-page>
</template>
<script>
export default {}
</script>
