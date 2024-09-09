import { createWebHistory, createRouter } from 'vue-router';
import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue';
import MyAccount from '../pages/MyAccount.vue';

import DashBoard from '../pages/DashBoard.vue';
import VueDataTable from '../pages/DataTable.vue';

import DashboardView from '../views/DashboardView.vue';
import DefaultView from '../views/DefaultView.vue';

import Teams from '../pages/Teams/Teams.vue';
import Role from '../pages/Role/Role.vue';
import Department from '../pages/Department/Department.vue';

import ManageUsers from '../pages/ManageUser/ManageUsers.vue';
import AddUser from '../pages/ManageUser/AddUser.vue';
import UpdateUser from '../pages/ManageUser/UpdateUser.vue';
import ViewUser from '../pages/ManageUser/ViewUser.vue';

import ManageClients from '../pages/ManageClients/ManageClients.vue';
import AddClient from '../pages/ManageClients/AddClient.vue';
import AddClientDetails from '../pages/ManageClients/AddClientDetails.vue';
import UpdateClient from '../pages/ManageClients/UpdateClient.vue';
import ViewClient from '../pages/ManageClients/ViewClient.vue';
import ViewDocument from '../pages/ManageClients/ViewDocument.vue';
import UpdateDocuments from '../pages/ManageClients/UpdateDocuments.vue';

import roughPage from '../pages/roughPage.vue';
import roughPage2 from '../pages/roughPage2.vue';
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/',
    component: DefaultView,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/signup',
        component: SignUp,
      },
      {
        path: '/view/document/:clientId/:docId',
        component: ViewDocument,
        props: (route) => ({
          docId: route.params.docId,
          clientId: route.params.clientId,
        }),
      },
    ],
  },
  {
    path: '/',
    component: DashboardView,
    children: [
      {
        path: '/rough',
        component: roughPage,
      },
      {
        path: '/rough2',
        component: roughPage2,
      },
      {
        path: '/dashboard',
        component: DashBoard,
      },
      {
        path: '/account',
        component: MyAccount,
      },
      {
        path: '/teams',
        component: Teams,
      },
      {
        path: '/role',
        component: Role,
      },
      {
        path: '/department',
        component: Department,
      },
      {
        path: '/data/table',
        component: VueDataTable,
      },
      {
        path: '/manage/users',
        component: ManageUsers,
      },
      {
        path: '/add/user',
        component: AddUser,
      },
      {
        path: '/update/user/:userId',
        component: UpdateUser,
        props: (route) => ({
          userId: route.params.userId,
        }),
      },
      {
        path: '/view/user/:userId',
        component: ViewUser,
        props: (route) => ({
          userId: route.params.userId,
        }),
      },
      {
        path: '/manage/clients',
        component: ManageClients,
      },
      {
        path: '/add/client/details/:userId',
        component: AddClientDetails,
        props: (route) => ({
          userId: route.params.userId,
        }),
      },
      {
        path: '/add/client',
        component: AddClient,
      },
      {
        path: '/update/client/documents/:clientId',
        component: UpdateDocuments,
        props: (route) => ({
          clientId: route.params.clientId,
        }),
      },
      {
        path: '/update/client/:clientId',
        component: UpdateClient,
        props: (route) => ({
          clientId: route.params.clientId,
        }),
      },
      {
        path: '/view/client/:clientId',
        component: ViewClient,
        props: (route) => ({
          clientId: route.params.clientId,
        }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
