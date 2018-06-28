import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import GoodsPage from './pages/goods.vue';
import AttendancePage from './pages/attendance.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/attendance/',
    component: AttendancePage,
    picker: {
        rotateEffect: true,
        openIn: 'popover',
      }
  },
  {
    path: '/form/:business_id',
    component: FormPage,
    // popup: {
    //   content: `
    //     <div class="popup">
    //       <div class="view">
    //         <div class="page">
    //         这里是点击跳转弹框的
    //         </div>
    //       </div>
    //     </div>
    //   `
    // },
    // loginScreen: {
    //   url: './api/business/business/view',
    //   /* login-screen.html contains:
    //     <div class="login-screen">
    //       <div class="view">
    //         <div class="page">
    //           ...
    //         </div>
    //       </div>
    //     </div>
    //   */
    // },
    on: {
      // 初次进入页面 事件
      pageAfterIn: function (e, page) {
        //console.log(e); 
      }
    }
  },
  {
    path: '/goods/:id',
    component: GoodsPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
