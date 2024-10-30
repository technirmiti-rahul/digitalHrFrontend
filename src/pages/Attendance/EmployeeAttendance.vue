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
          <h5 class="modal-title source-400" id="ModalNotificationLabel">
            Edit {{ updateEmployee.name }}
          </h5>
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

          <div class="mb-3">
            <label for="present" class="form-label source-400">Remark</label>
            <input
              type="number"
              class="form-control"
              id="present"
              v-model="updateEmployee.remark"
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
            <multiselect
              v-model="selectedEmployee"
              :options="employees"
              placeholder="Select Employee"
              label="name"
              track-by="name"
            ></multiselect>
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
        <h5 class="source-500 page-title">
          Employee Attendance
          {{ monthYear }}
        </h5>
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
              <button
                type="button"
                class="btn text-light border-0 button_bg btn-sm"
                @click="downloadSalarySheet"
              >
                <i class="bi bi-download"></i>
                Salary Sheet
              </button>
              <button
                type="button"
                class="btn text-light border-0 button_bg btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#ModalAddAttendance"
              >
                Add Attendance
              </button>
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
                <template #item-absent="item">
                  <div>
                    {{ months[month - 1].days - item.present }}
                  </div>
                </template>
                <template #item-action="item">
                  <div class="d-flex justify-content-evenly">
                    <div
                      class="table-icon action_icon_color"
                      data-bs-toggle="modal"
                      data-bs-target="#ModalNotification"
                      @click="updateEmployee = JSON.parse(JSON.stringify(item))"
                    >
                      <el-tooltip content="Edit" placement="bottom">
                        <i class="bi bi-pen-fill pointer" style="font-size"></i>
                      </el-tooltip>
                    </div>
                    <div
                      class="table-icon action_icon_color"
                      @click="updateEmployee = JSON.parse(JSON.stringify(item))"
                    >
                      <el-tooltip content="Salary Slip" placement="bottom">
                        <router-link
                          :to="'/wage/slip/' + item._id + '/' + item.email"
                          style="text-decoration: none"
                        >
                          <i
                            class="bi bi-receipt-cutoff pointer action_icon_color"
                            style="font-size"
                          ></i>
                        </router-link>
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
import * as XLSX from 'xlsx'; // Import the XLSX library
import { saveAs } from 'file-saver';
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
  props: {
    monthYear: {
      type: String,
      required: true,
    },
  },
  components: {
    EasyDataTable,
    Multiselect,
    VueDatePicker,
  },

  data() {
    return {
      gross: 100658,
      id: '',
      user: {},
      role: '',
      renderKey: 0,
      attendance_id: '',
      employees: [],
      selectedEmployee: '',

      notifications: [],
      headers: [
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Present', value: 'present', sortable: false },
        { text: 'Absent', value: 'absent', sortable: true },
        { text: 'Total  Days', value: 'totalWorkingDays' },
        { text: 'Month', value: 'month' },
        { text: 'Year', value: 'year' },
        { text: 'Remark', value: 'remark' },
        { text: 'Action', value: 'action', sortable: false },
      ],
      optionTypes: ['success', 'warning', 'danger'],
      month_year: {
        month: '',
        year: '',
      },
      data: '',

      form: {
        name: '',
        present: '',
      },
      formAdd: {
        name: '',
        emp_id: '',
        email: '',
        present: '',
        month_year: '',
        totalWorkingDays: '',
        month: '',
        year: '',
        remark: '',
        gross: '',
      },
      months: [],
      month: '',
      newPassword: '',
      updateEmployee: {},
      showDeleteModal: false,

      search: '',

      items: [],
      originalItems: [],
    };
  },

  async created() {
    //console.log('monthYear: ', this.monthYear);
    await this.getCurrent();
    this.getMonths();

    try {
      const res = await axiosClient.get(
        `/api/v1/attendance/get/${this.user._id}/${this.monthYear}`
      );
      this.data = res.data;
      console.log('res.data.data: ', this.data);
      for (let i in this.data) {
        this.data[i].month_year = this.data[i].month_year.slice(0, 10);
      }

      this.attendance_id = res.data._id;
      this.originalItems = this.data;
      const temp = this.data[0].month_year.split('-');
      this.month = temp[1];
      this.month_year = this.data[0].month_year;

      const resEmployees = await axiosClient.get(
        `/api/v1/employee/get/employees/by/client/${this.user._id}`
      );
      // console.log('resEmployees.data.data: ', resEmployees.data.data);
      this.employees = resEmployees.data.data;

      //console.log('month_year: ', this.month_year, ' temp : ', temp);
      this.renderKey++;
    } catch (err) {
      console.log('error: ', err);
    }

    this.items = this.originalItems;

    console.log('this.items : ', this.items);
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
    CalculatePayableWage(
      pBasic,
      pHra,
      pDA,
      pConvayance,
      pFoodAllow,
      pOtherAllowance = 0,
      pReimbursement = 0,
      pESI = 0,
      pLwf = 0,
      pAdvances = 0,
      pTdsOther = 9000
    ) {
      const gross = pBasic;
      const days = 30;
      const attendance = 30;
      const basic = Math.round((gross / days) * attendance);
      const DA = Math.round((pDA / days) * attendance);
      let pfBasic = basic + DA;
      if (pfBasic > 15000) pfBasic = 15000;
      const pf = Math.round((pfBasic * 12) / 100);

      const hra = Math.round((pHra / days) * attendance);
      const conveyance = Math.round((pConvayance / days) * attendance);
      const FoodAllow = Math.round((pFoodAllow / days) * attendance);
      const otherAllowance = Math.round((pOtherAllowance / days) * attendance);
      const payableGross =
        basic + hra + DA + conveyance + FoodAllow + otherAllowance + pReimbursement;
      const totalDeduction = pESI + pLwf + pAdvances + pf + pTdsOther;
      const netWages = payableGross - totalDeduction;
      console.log('payable basic: ', basic);
      console.log('payable hra: ', hra);
      console.log('payable DA, conveyance, FoodAllow: ', DA, conveyance, FoodAllow);
      console.log('pfBasic: ', pfBasic);
      console.log('payable pf: ', pf);
      console.log('payable otherAllowance: ', otherAllowance);
      console.log('payable Gross: ', payableGross);
      console.log('totalDeduction: ', totalDeduction);
      console.log('netWages: ', netWages);
    },

    calculateMinimumRateWage() {
      const gross = this.gross;

      const basic = Math.round((gross * 40) / 100);
      const hra = Math.round((gross * 30) / 100);
      const DA = Math.round((gross * 10) / 100);
      const conveyance = Math.round((gross * 10) / 100);
      const FoodAllow = Math.round((gross * 10) / 100);

      console.log('basic: ', basic);
      console.log('hra: ', hra);
      console.log('DA, conveyance, FoodAllow: ', DA, conveyance, FoodAllow);
      this.CalculatePayableWage(basic, hra, DA, conveyance, FoodAllow);
    },

    downloadSalarySheet() {
      console.log('downloadSalarySheet called');
      // Create a worksheet from the JSON data

      let tempItems = [];

      for (let i = 0; i < this.originalItems.length; i++) {
        const gross = this.originalItems[i].gross;
        const days = this.originalItems[i].totalWorkingDays;
        const attendance = this.originalItems[i].present;

        const basic = Math.round((gross * 40) / 100);
        const hra = Math.round((gross * 30) / 100);
        const DA = Math.round((gross * 10) / 100);
        const conveyance = Math.round((gross * 10) / 100);
        const FoodAllow = Math.round((gross * 10) / 100);

        const payableBasic = Math.round((basic / days) * attendance);
        const payableDA = Math.round((DA / days) * attendance);

        let pfBasic = payableBasic + payableDA;
        if (pfBasic > 15000) pfBasic = 15000;
        const pf = Math.round((pfBasic * 12) / 100);
        const e_pf = Math.round((pfBasic * 13) / 100);

        const payableHra = Math.round((hra / days) * attendance);
        const payableConveyance = Math.round((conveyance / days) * attendance);
        const payableFoodAllow = Math.round((FoodAllow / days) * attendance);
        const payableOtherAllowance = 0;
        const otEarnings = 0;

        const reimbursement = 0;

        const grossSalary =
          payableBasic +
          payableDA +
          payableHra +
          payableConveyance +
          payableFoodAllow +
          payableOtherAllowance +
          otEarnings +
          reimbursement;

        let esi = 0;
        if (grossSalary <= 21000) esi = Math.round((grossSalary * 0.75) / 100);
        let lwf = 0;

        const tdsOther = 0;
        const totalDeduction = esi + pf + lwf + tdsOther;

        const netWages = grossSalary - totalDeduction;

        tempItems.push({
          name: this.originalItems[i].name,
          minimum_basic: basic,
          minimum_hra: hra,
          minimum_DA: DA,
          minimum_conveyance: conveyance,
          minimum_FoodAllow: FoodAllow,
          minimum_gross: gross,
          daysInMonth: days,
          attendance: attendance,
          payableBasic: payableBasic,
          payableDA: payableDA,
          payableHra: payableHra,
          payableConveyance: payableConveyance,
          payableFoodAllow: payableFoodAllow,
          payableOtherAllowance: payableOtherAllowance,
          otEarnings: otEarnings,
          reimbursement: reimbursement,
          grossSalary: grossSalary,
          esi: esi,
          pf: pf,
          lwf: lwf,
          tdsOther: tdsOther,
          totalDeduction: totalDeduction,
          netWages: netWages,
        });
      }

      console.log('tempItems', tempItems);

      const worksheet = XLSX.utils.json_to_sheet(tempItems);

      // Create a new workbook
      const workbook = XLSX.utils.book_new();

      // Append the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      // Write the workbook to binary string
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

      // Create a Blob from the buffer and save it as an Excel file
      const blob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      // Use file-saver to download the file

      saveAs(blob, `SalarySheet-${this.items[0].month_year}.xlsx`);
    },

    async handleAddAttendance() {
      this.formAdd.name = this.selectedEmployee.name;
      this.formAdd.emp_id = this.selectedEmployee._id;
      this.formAdd.email = this.selectedEmployee.email;
      this.formAdd.month_year = this.month_year;
      this.formAdd.totalWorkingDays = this.items[0].totalWorkingDays;
      this.formAdd.month = this.items[0].month;
      this.formAdd.year = this.items[0].year;
      this.formAdd.gross = this.selectedEmployee.gross;

      console.log('formAdd', this.formAdd);

      if (this.validateFormAdd() == false) return;

      try {
        const res = await axiosClient.post(
          `/api/v1/attendance/add/single/${this.user._id}`,
          this.formAdd
        );
        console.log('res.data.data: ', res.data);
        toast.success('Attendance Added Successfully', {
          autoClose: 1500,
        });

        setTimeout(() => {
          this.$router.go(0);
        });

        this.originalItems = res.data.AttendanceData;
        this.items = this.originalItems;
        this.selectedEmployee = '';
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

      if (this.validateForm() == false) return;
      try {
        const res = await axiosClient.put(
          `/api/v1/attendance/edit/${this.updateEmployee._id}`,
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

        this.items = this.originalItems;
      } catch (err) {
        console.log('error: ', err);
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

    validateFormAdd() {
      console.log('validateFormAdd called');
      if (this.formAdd.name == '') {
        toast.info('Please Enter Employee Name', {
          autoClose: 1500,
        });
        return false;
      }

      if (this.formAdd.emp_id == '') {
        toast.info('Please Enter Employee Id', {
          autoClose: 1500,
        });
        return false;
      }

      if (this.formAdd.present == '') {
        toast.info('Please Enter Present', {
          autoClose: 1500,
        });
        return false;
      }

      return true;
    },

    validateForm() {
      console.log('validateFormAdd called');
      if (this.form.name == '') {
        toast.info('Please Enter Employee Name', {
          autoClose: 1500,
        });
        return false;
      }

      if (this.form.present == '') {
        toast.info('Please Enter Present', {
          autoClose: 1500,
        });
        return false;
      }

      return true;
    },
  },
};
</script>
