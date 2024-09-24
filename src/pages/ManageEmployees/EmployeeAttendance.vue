<style scoped>
/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */

::-webkit-scrollbar {
  width: 10px; /* Set the width of the scrollbar */
  height: 90vh; /* Set the height of the scrollbar */
}
::-webkit-scrollbar-track {
  margin-top: 1rem;
  margin-bottom: 1rem;

  background: #c9c9c9;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(#000000, #5e5e5e);
  border-radius: 5px;
}

.customize-table {
  --easy-table-header-font-size: 1.1rem;
  --easy-table-body-row-font-size: 1rem;
}

.main {
}
.table-icon {
}
h1 {
}

.animated_input {
  height: 3rem;
  max-width: 19rem;
}

.table-icon:hover {
  transform: translateY(-2px) scale(1.15);
  transition: transform 0.3s ease-out;
}

.thumbs-down {
  color: rgb(235, 46, 21);
}

@media (max-width: 576px) {
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>

<template>
  <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  <div class="source-400 pt-2 h-100 scroll">
    <div class="border-bottom px-4 d-flex justify-content-between align-items-center py-2">
      <div>
        <h5 class="source-500 page-title">Manage Clients</h5>
      </div>
      <div class="">
        <div class="position-relative" data-bs-toggle="modal" data-bs-target="#ModalNotification">
          <i class="bi bi-bell-fill pointer text-danger" style="font-size: 1.2rem"></i>
          <span
            v-if="notifications.length > 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
          >
            {{ notifications.length }}
          </span>
          <span
            v-if="notifications.length > 99"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
          >
            99+
          </span>
        </div>
      </div>
    </div>

    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto">
        <div class="container py-3">
          <div class="mt-5 mb-3 d-flex justify-content-between px-2 gap-2">
            <div class="d-flex">
              <input
                v-model="search"
                class="border form-control form-control-sm"
                size="small"
                placeholder="Type to search"
              />
            </div>
            <div
              v-if="role != 'super_admin'"
              class="d-flex justify-content-center align-items-center gap-2"
            >
              <div>
                <VueDatePicker v-model="month_year" month-picker />
              </div>
              <div>
                <button
                  @click="getAttendanceByMonthYear"
                  type="button"
                  class="btn btn-primary border-0 button_bg btn-sm"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="table border rounded">
            <div :key="renderKey" class="w-100">
              <EasyDataTable
                table-class-name="customize-table text-capitalize pointer"
                :headers="headers"
                :items="items"
                search-field="name"
                :search-value="search"
                :rows-per-page="10"
                border-cell
                buttons-pagination
              >
                <template #item-present="item">
                  <div>
                    {{ months[month - 1].days - item.absent }}
                  </div>
                </template>
              </EasyDataTable>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ////////////////////////////////////////Modal////////////////////////////////////////////// -->
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';
import EasyDataTable from 'vue3-easy-data-table';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axiosClient from '../../axiosClient';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'EmployeeAttendance',
  components: {
    EasyDataTable,
    Multiselect,
    VueDatePicker,
  },

  data() {
    return {
      id: '',
      user: {},
      role: '',
      renderKey: 0,

      notifications: [],
      headers: [
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Present', value: 'present', sortable: false },
        { text: 'Absent', value: 'absent', sortable: true },
      ],
      optionTypes: ['success', 'warning', 'danger'],
      month_year: {
        month: '',
        year: '',
      },
      form: {
        name: '',
        type: '',
        text: '',
        to_user: '',
        by_user: '',
      },
      months: [],
      month: null,
      newPassword: '',
      updateEmployee: {},
      showDeleteModal: false,

      search: '',

      items: [],
      originalItems: [],
    };
  },

  async created() {
    await this.getCurrent();
    this.getMonths();

    try {
      const res = await axiosClient.get(`/api/v1/attendance/get/latest/${this.user._id}`);
      console.log('res.data.data: ', res.data);
      this.originalItems = res.data.AttendanceData;
      const temp = res.data.month_year.split('/');
      this.month = temp[0];
      this.month_year = res.data.month_year;
    } catch (err) {
      console.log('error: ', err);
    }

    this.items = this.originalItems;

    console.log('Users: ', this.items);
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.scroll', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.scroll',
        delay: 0.7,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
  },

  setup() {},

  methods: {
    async getAttendanceByMonthYear() {
      const month_year = this.month_year.month + 1 + '/' + this.month_year.year;
      console.log('getAttendanceByMonthYear called', '  ', month_year);
      const form = {
        month_year: month_year,
      };
      try {
        const res = await axiosClient.post(`/api/v1/attendance/get/${this.user._id}`, form);
        console.log('res.data.data: ', res.data);
        this.originalItems = res.data.AttendanceData;
        const temp = res.data.month_year.split('/');
        this.month = temp[0];
        //this.month_year = res.data.month_year;
        this.items = this.originalItems;
      } catch (err) {
        console.log('errror: ', err);
        if (err.response.status == 404) {
          toast.error(`No Data Found For ${month_year}`, {
            autoClose: 1500,
          });
          setTimeout(() => {
            this.$router.go(0);
          }, 2000);
        }
      }
    },

    handleViewEmployee(id) {
      this.$router.push(`/view/employee/${id}`);
    },

    async getCurrent() {
      try {
        const token = await axiosClient.get(`api/v1/user/getCurrent/`);

        this.user = token.data.user;
        this.role = this.user.roleType.name;
        //console.log('user', this.user, ' this.role ', this.role);
        if (!token) {
          this.$router.push('/login');
        }
        this.user = token.data.user;
        console.log(' this.user : ', this.user);
      } catch (err) {
        console.log('error: ', err);
        this.$router.push('/login');
      }

      return;
    },

    getMonths() {
      const months = [
        { month: 1, days: 31 },
        { month: 2, days: 28 },
        { month: 3, days: 31 },
        { month: 4, days: 30 },
        { month: 5, days: 31 },
        { month: 6, days: 30 },
        { month: 7, days: 31 },
        { month: 8, days: 31 },
        { month: 9, days: 30 },
        { month: 10, days: 31 },
        { month: 11, days: 30 },
        { month: 12, days: 31 },
      ];
      this.months = months;
    },
  },
};
</script>
