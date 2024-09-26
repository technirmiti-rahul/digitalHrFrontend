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
  transform: scale(1.15);
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
  <div
    class="modal fade"
    id="ModalNotification"
    tabindex="-1"
    aria-labelledby="ModalNotificationLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title source-400" id="ModalNotificationLabel">Edit</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label source-400">Name</label>
            <input type="text" class="form-control" id="name" v-model="updateEmployee.name" />
          </div>
          <div class="mb-3">
            <label for="present" class="form-label source-400">Present</label>
            <input
              type="number"
              class="form-control"
              id="present"
              v-model="updateEmployee.present"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">
            Close
          </button>
          <button
            @click="updateEmployeeAttendance"
            type="button"
            class="btn text-light border-0 button_bg btn-sm"
            data-bs-dismiss="modal"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="ModalAddAttendance"
    tabindex="-1"
    aria-labelledby="ModalAddAttendanceLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title source-400" id="ModalAddAttendanceLabel">Add Attendance</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label source-400">Employee Id</label>
            <input type="text" class="form-control" id="name" v-model="formAdd.emp_id" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label source-400">Name</label>
            <input type="text" class="form-control" id="name" v-model="formAdd.name" />
          </div>
          <div class="mb-3">
            <label for="present" class="form-label source-400">Present</label>
            <input type="number" class="form-control" id="present" v-model="formAdd.present" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">
            Close
          </button>
          <button
            @click="handleAddAttendance"
            type="button"
            class="btn text-light border-0 button_bg btn-sm"
            data-bs-dismiss="modal"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  <div class="source-400 pt-2 h-100 scroll">
    <div class="border-bottom px-4 d-flex justify-content-between align-items-center py-2">
      <div>
        <h5 class="source-500 page-title">Manage Attendance</h5>
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
            <div class="d-flex justify-content-center align-items-center gap-2">
              <button type="button" class="btn text-light border-0 button_bg btn-sm">
                Upload Excel
              </button>
            </div>
          </div>
          <div class="table border rounded">
            <div :key="renderKey" class="w-100">
              <EasyDataTable
                table-class-name="customize-table text-capitalize pointer"
                :headers="headers"
                :items="items"
                search-field="month_year"
                :search-value="search"
                :rows-per-page="10"
                border-cell
                buttons-pagination
              >
                <template #item-month="item">
                  <div v-for="month in months" :key="month" class="">
                    <div v-if="item.month == month.month">
                      {{ month.name }}
                    </div>
                  </div>
                </template>
                <template #item-absent="item">
                  <div>
                    {{ months[month - 1].days - item.present }}
                  </div>
                </template>
                <template #item-action="item">
                  <div class="d-flex justify-content-evenly">
                    <div class="table-icon action_icon_color" @click="handleRedirect(item._id)">
                      <el-tooltip content="View" placement="bottom">
                        <i class="bi bi-eye-fill pointer" style="font-size"></i>
                      </el-tooltip>
                    </div>
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
import { th } from 'element-plus/es/locales.mjs';

export default {
  name: 'ManageAttendance',
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
      attendance_id: '',

      notifications: [],
      headers: [
        { text: 'month', value: 'month' },
        { text: 'year', value: 'month_year', sortable: true },

        { text: 'Action', value: 'action', sortable: false },
      ],
      optionTypes: ['success', 'warning', 'danger'],
      month_year: {
        month: '',
        year: '',
      },

      form: {
        name: '',
        present: '',
      },
      formAdd: {
        name: '',
        emp_id: '',
        present: '',
      },
      data: '',
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
      const res = await axiosClient.get(`/api/v1/attendance/get/all/${this.user._id}`);
      console.log('res.data.data: ', res.data);
      this.data = res.data;
      this.originalItems = res.data;
      for (let i in this.originalItems) {
        const temp = this.originalItems[i].month_year.split('/');
        this.originalItems[i].month = temp[0];
      }

      this.items = this.originalItems;

      const temp = res.data.month_year.split('/');
      this.month = temp[0];

      this.renderKey++;
    } catch (err) {
      console.log('error: ', err);
    }

    console.log('employee: ', this.items);
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
    handleRedirect(id) {
      console.log('id: ', id);
      this.$router.push(`/employee/attendance/${id}`);
    },

    async handleAddAttendance() {
      console.log('formAdd', this.formAdd);
      try {
        const res = await axiosClient.post(
          `/api/v1/attendance/add/record/${this.attendance_id}`,
          this.formAdd
        );
        console.log('res.data.data: ', res.data);
        toast.success('Attendance Added Successfully', {
          autoClose: 1500,
        });

        setTimeout(() => {
          this.$router.go('0');
        }, 2000);
      } catch (err) {
        console.log('error: ', err);
        toast.error('Some Thing Went Wrong');
      }
    },

    async updateEmployeeAttendance() {
      console.log(
        'attendance_id: ',
        this.attendance_id,
        '  updateEmployee._id',
        this.updateEmployee._id
      );

      this.form = {
        name: this.updateEmployee.name,
        present: this.updateEmployee.present,
      };

      try {
        const res = await axiosClient.put(
          `/api/v1/attendance/edit/${this.attendance_id}/${this.updateEmployee._id}`,
          this.form
        );
        console.log('res.data.data: ', res.data);
        toast.success('Attendance Updated Successfully', {
          autoClose: 1500,
        });
        for (let i in this.originalItems) {
          if (this.originalItems[i]._id == this.updateEmployee._id) {
            this.originalItems[i].name = this.form.name;
            this.originalItems[i].present = this.form.present;
          }
        }

        for (let i in this.items) {
          if (this.items[i]._id == this.updateEmployee._id) {
            this.items[i].name = this.form.name;
            this.items[i].present = this.form.present;
          }
        }

        console.log('items: ', this.items);

        this.renderKey++;
        setTimeout(() => {
          this.$router.go('0');
        }, 2000);
      } catch (err) {
        console.log('error: ', err);
        toast.error('Some Thing Went Wrong');
      }
    },
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
        { month: 1, name: 'January', days: 31 },
        { month: 2, name: 'February', days: 28 },
        { month: 3, name: 'March', days: 31 },
        { month: 4, name: 'April', days: 30 },
        { month: 5, name: 'May', days: 31 },
        { month: 6, name: 'June', days: 30 },
        { month: 7, name: 'July', days: 31 },
        { month: 8, name: 'August', days: 31 },
        { month: 9, name: 'September', days: 30 },
        { month: 10, name: 'October', days: 31 },
        { month: 11, name: 'November', days: 30 },
        { month: 12, name: 'December', days: 31 },
      ];
      this.months = months;
    },
  },
};
</script>
