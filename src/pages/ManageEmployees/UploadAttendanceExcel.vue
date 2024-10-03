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
  <div class="source-400 pt-2 h-100 scroll">
    <div class="border-bottom px-4 d-flex justify-content-between align-items-center py-2">
      <div>
        <h5 class="source-500 page-title">Upload Excel</h5>
      </div>
      <div class=""></div>
    </div>

    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto">
        <div class="container py-3 h-100">
          <div class="w-100 h-100 d-flex justify-content-center gap-3">
            <div>
              <input
                type="file"
                class="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                @change="handleFileUpload"
              />
            </div>
            <div>
              <!-- <VueDatePicker v-model="month_year" month-picker /> -->
              <input type="date" class="form-control form-control-sm" v-model="form.month_year" />
            </div>

            <div>
              <button type="button" class="btn btn-primary border-0 button_bg" @click="uploadFile">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import 'vue-multiselect/dist/vue-multiselect.css';
import EasyDataTable from 'vue3-easy-data-table';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axiosClient from '../../axiosClient';

export default {
  name: 'UploadXl',
  components: {
    EasyDataTable,
    VueDatePicker,
  },

  data() {
    return {
      id: '',
      user: {},
      role: '',

      month_year: {
        month: new Date().getMonth() - 1,
        year: new Date().getFullYear(),
      },
      excelData: [],
      form: {
        employeeData: [],
        client_user_id: '',
        month: '',
        year: '',
        month_year: '',
      },
      file: null,
    };
  },

  async created() {
    await this.getCurrent();

    try {
      const res = await axiosClient.get(`/api/v1/employee/${this.user._id}`);
      console.log('res.data.data: ', res.data.data);
      this.originalItems = res.data.data;
      const notifications = await axiosClient.get(`/api/v1/notification/getall/${this.user._id}`);
      this.notifications = notifications.data.data;
      console.log(' this.notifications: ', this.notifications);
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
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async uploadFile() {
      if (!this.file) {
        console.log('No file selected');
        toast.info(`Select File`, {
          autoClose: 1500,
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming you want the first sheet's data
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Parse Excel data to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        this.excelData = jsonData;

        // Console the Excel data
        console.log('Excel Data:', this.excelData);
        this.form.employeeData = jsonData;
      };
      // this.form.month_year = this.month_year.month + 1 + '/' + this.month_year.year;
      console.log('this.month_year: ', this.month_year);
      console.log('this.form: ', this.form);

      reader.readAsArrayBuffer(this.file);
      const date = Date.now();
      console.log('date: ', Date.now());
      if (this.form.employeeData.length > 0) {
        console.log('adding data');
        try {
          const res = await axiosClient.post(`/api/v1/attendance/add/${this.user._id}`, this.form);

          toast.success(`Data Added`, {
            autoClose: 1500,
          });
          setTimeout(() => {
            this.$router.push('/manage/attendance');
          });
        } catch (err) {
          console.log('error: ', err);
          toast.error(`Something Went Wrong`, {
            autoClose: 1500,
          });
        }
      }
    },

    handleEmployeeUpdate(id) {
      this.$router.push(`/update/employee/${id}`);
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
  },
};
</script>
