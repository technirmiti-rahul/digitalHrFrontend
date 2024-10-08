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

import AddEmployee from '../pages/ManageEmployees/AddEmployee.vue';
import UpdateEmployee from '../pages/ManageEmployees/UpdateEmployee.vue';
import ViewEmployee from '../pages/ManageEmployees/ViewEmployee.vue';
import ManageEmployees from '../pages/ManageEmployees/ManageEmployees.vue';
import EmployeesByClient from '../pages/ManageEmployees/EmployeesByClient.vue';
import AddEmployeeBySuperAdmin from '../pages/ManageEmployees/AddEmployeeBySuperAdmin.vue';
import UploadXl from '../pages/ManageEmployees/UploadAttendanceExcel.vue';

import EmployeeAttendance from '../pages/ManageEmployees/EmployeeAttendance.vue';
import ManageAttendance from '../pages/ManageEmployees/ManageAttendance.vue';
import UploadEmployeeExcel from '../pages/ManageEmployees/UploadEmployeeExcel.vue';

import WageSlip from '../pages/WageSlip/WageSlip.vue';
import WageSlipOfMonths from '../pages/WageSlip/WageSlipOfMonths.vue';

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
        props: (route) => ({
          id: route.params.id,
        }),
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
        path: '/wage/slip/:attandanceId/:employeeId',
        component: WageSlip,
        props: (route) => ({
          attandanceId: route.params.attandanceId,
          employeeId: route.params.employeeId,
        }),
      },
      {
        path: '/wage/slip/of/months/:employeeId',
        component: WageSlipOfMonths,
        props: (route) => ({
          employeeId: route.params.employeeId,
        }),
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
        path: '/documents',
        component: UpdateDocuments,
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

      {
        path: '/upload/excel',
        component: UploadXl,
      },
      {
        path: '/upload/employee/excel',
        component: UploadEmployeeExcel,
      },

      {
        path: '/add/employee',
        component: AddEmployee,
      },
      {
        path: '/add/employee/:clientId',
        component: AddEmployee,
        props: (route) => ({
          clientId: route.params.clientId,
        }),
      },

      {
        path: '/add/employee/by/super/admin/:clientId',
        component: AddEmployeeBySuperAdmin,
        props: (route) => ({
          clientId: route.params.clientId,
        }),
      },

      {
        path: '/manage/employees',
        component: ManageEmployees,
      },
      {
        path: '/employee/attendance/:monthYear',
        component: EmployeeAttendance,
        props: (route) => ({
          monthYear: route.params.monthYear,
        }),
      },
      {
        path: '/manage/attendance',
        component: ManageAttendance,
      },

      {
        path: '/update/employee/:employeeId',
        component: UpdateEmployee,
        props: (route) => ({
          employeeId: route.params.employeeId,
        }),
      },
      {
        path: '/view/employee/:employeeId',
        component: ViewEmployee,
        props: (route) => ({
          employeeId: route.params.employeeId,
        }),
      },
      {
        path: '/manage/employees/by/client/:client/:clientId',
        name: 'EmployeesByClient',
        component: EmployeesByClient,
        props: (route) => ({
          clientId: route.params.clientId,
          client: route.params.client,
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
