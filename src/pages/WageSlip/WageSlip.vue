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

.slip-container {
  width: 1000px;
  height: 520px;
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
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 mooli text-capitalize" id="exampleModalLabel">
            Update Password For {{ updateUser.name }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="">
            <input
              type="text"
              class="form-control"
              placeholder="Enter New Password"
              aria-label="Enter New Password"
              aria-describedby="addon-wrapping"
              v-model="newPassword"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="handleChangePassword" type="button" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  <div class="hind-regular pt-2 h-100 scroll">
    <div class="border-bottom px-3">
      <h5 class="pt-2 hind-medium source-500">Wage Slip</h5>
    </div>

    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto">
        <div class="container py-3">
          <div class="mb-1 mt-5 d-flex justify-content-center gap-2 py-3" id="slip">
            <div class="slip-container border border-dark overflow-hidden">
              <div class="py-1 border-bottom border-dark text-center source-700 font18">
                Wage Slip
              </div>
              <div class="py-1 border-bottom border-dark text-center source-700 font18">
                Form IX (Rule 29 (2))
              </div>
              <div class="py-1 border-bottom border-dark text-center source-700 font18">
                Name Of Establishment - M/S ABC
              </div>
              <div class="py-1 border-bottom border-dark text-center source-700 font18">
                Housing Board Sanquelim Goa
              </div>
              <div class="border-bottom border-dark"></div>
              <div class="border-bottom border-dark" style="padding: 0 11px">
                <div class="row">
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    Name Of The Employee
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    {{ attendance.name }}
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    UAN No
                  </div>
                  <div class="col-3 d-flex align-items-center source-500">8888888888888</div>
                </div>
              </div>
              <div class="border-bottom border-dark" style="padding: 0 11px">
                <div class="row">
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    Fathers/Husbands Name
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    Rahul Patil
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    PF No
                  </div>
                  <div class="col-3 d-flex align-items-center source-500 font12">
                    GAGOA73836277302983823
                  </div>
                </div>
              </div>
              <div class="border-bottom border-dark" style="padding: 0 11px">
                <div class="row">
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    Designation
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    {{ employee.designation }}
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    ESIC No
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    8888888888888
                  </div>
                </div>
              </div>
              <div class="border-bottom border-dark" style="padding: 0 11px">
                <div class="row">
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    Wage Period
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    {{
                      month && month <= months.length
                        ? months[month - 1].short + '-' + year.slice(2, 4)
                        : ''
                    }}
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    Bank A/C No
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    8888888888888434
                  </div>
                </div>
              </div>
              <div class="border-bottom border-dark" style="padding: 0 11px">
                <div class="row">
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    Days In Month
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    {{ months[month - 1]?.days }}
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-700">
                    Total Attendance
                  </div>
                  <div class="border-end border-dark col-3 d-flex align-items-center source-500">
                    {{ attendance.present }}
                  </div>
                </div>
              </div>
              <div class="border-bottom border-dark"></div>
              <div class="" style="padding: 0 11px">
                <div class="row">
                  <div class="col-5 border-end border-dark" style="padding: 0 11px">
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        PF Basic
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">15000</div>
                    </div>
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        Basic
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">40000</div>
                    </div>
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        D.A
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">15000</div>
                    </div>
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        HRA
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">15000</div>
                    </div>
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        Food Allow
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">15000</div>
                    </div>
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        Conveyance
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">15000</div>
                    </div>
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        Reimbursement
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">0</div>
                    </div>
                    <div class="row border-bottom border-dark">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        Overtime Wages
                      </div>
                      <div class="col-5 d-flex align-items-center source-500">0</div>
                    </div>
                    <div class="row">
                      <div
                        class="border-end border-dark col-7 d-flex align-items-center source-700"
                      >
                        Gross Wages
                      </div>
                      <div class="col-5 d-flex align-items-center source-700">15000</div>
                    </div>
                  </div>
                  <div class="col-7" style="padding: 0 11px">
                    <div class="row">
                      <div
                        class="border-end border-bottom border-dark col-6"
                        style="padding: 0 11px"
                      >
                        <div class="row">
                          <div class="border-bottom border-dark col-12 source-700 text-center">
                            Employee's Contribution
                          </div>

                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            EPF
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-500"
                          >
                            1800
                          </div>
                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            ESIC
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-500"
                          >
                            0
                          </div>
                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            LWF
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-500"
                          >
                            0
                          </div>
                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            Advances
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-500"
                          >
                            0
                          </div>
                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            Other Dead
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-500"
                          >
                            9000
                          </div>
                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            Total Dead
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-700"
                          >
                            1800
                          </div>
                          <div
                            class="border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            Net Wages
                          </div>
                          <div class="border-dark col-5 d-flex align-items-center source-700">
                            1800
                          </div>
                        </div>
                      </div>
                      <div class="col-6" style="padding: 0 11px">
                        <div class="row border-bottom border-dark">
                          <div class="border-bottom border-dark col-12 source-700 text-center">
                            Employer's Contribution
                          </div>

                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            E_EPF
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-500"
                          >
                            1950
                          </div>
                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            E_ESIC
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-500"
                          >
                            0
                          </div>
                          <div
                            class="border-bottom border-end border-dark col-7 d-flex align-items-center source-700"
                          >
                            Total
                          </div>
                          <div
                            class="border-bottom border-dark col-5 d-flex align-items-center source-700"
                          >
                            1950
                          </div>
                          <div class="col-12 source-700 text-center" style="height: 99px">
                            Employer's Signature
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-top border-dark text-center source-700">
                This Is Computer Generated Slip ,Seal And Signature Is Not Required
              </div>
            </div>
          </div>
          <div class="mt-4 mb-2 px-5 d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary border-0 button_bg"
              @click="handleDownload"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ////////////////////////////////////////Modal////////////////////////////////////////////// -->
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axiosClient from '../../axiosClient';

export default {
  name: 'WageSlip',
  components: {},

  props: {
    attandanceId: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      months: [
        { month: 1, name: 'January', short: 'Jan', days: 31 },
        { month: 2, name: 'February', short: 'Feb', days: 28 },
        { month: 3, name: 'March', short: 'Mar', days: 31 },
        { month: 4, name: 'April', short: 'Apr', days: 30 },
        { month: 5, name: 'May', short: 'May', days: 31 },
        { month: 6, name: 'June', short: 'Jun', days: 30 },
        { month: 7, name: 'July', short: 'Jul', days: 31 },
        { month: 8, name: 'August', short: 'Aug', days: 31 },
        { month: 9, name: 'September', short: 'Sep', days: 30 },
        { month: 10, name: 'October', short: 'Oct', days: 31 },
        { month: 11, name: 'November', short: 'Nov', days: 30 },
        { month: 12, name: 'December', short: 'Dec', days: 31 },
      ],
      month: '',
      year: '',
      attendance: '',
      attendanceData: '',
      employee: '',
      columns: [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Actions', field: 'actions', sortable: false, slot: 'actions' },
      ],
      form: {
        name: '',
      },
      newPassword: '',
      updateUser: {},
      showDeleteModal: false,

      search: '',
      entries: 0,
      entriesPerPage: 5,
      entriesPerPageOptions: [5, 10, 15, 20],
      page: 1,
      items: [],
      originalItems: [],

      headers: [
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Email', value: 'email' },
        { text: 'Department', value: 'department.name' },
        { text: 'Team', value: 'team.name' },
        { text: 'Role', value: 'roleType.name' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    };
  },

  async created() {
    console.log(this.attandanceId, this.employeeId);
    this.getCurrent();
    this.getMonths();

    try {
      const res = await axiosClient.post(`/api/v1/attendance/get/employee/${this.attandanceId}`);
      this.attendance = res.data;
      console.log('res.data: ', res.data);

      /*   const attendance = await axiosClient.get(`/api/v1/attendance/get/${this.attandanceId}`);
      console.log('attendanceData: ', this.attendanceData);
      this.attendanceData = attendance.data;
      this.attandanceData = this.attendanceData.month_year.slice(0, 10);
      */

      const employee = await axiosClient.get(`/api/v1/employee/get/${this.employeeId}`);
      this.employee = employee.data.data;

      this.attendance.month_year = this.attendance.month_year.slice(0, 10);

      const split = this.attendance.month_year.split('-');

      this.month = parseInt(split[1]);
      this.year = split[0];

      console.log('employee: ', this.employee);
      console.log('attendance: ', this.attendance);
    } catch (err) {
      console.log('error: ', err);
    }

    //console.log(this.items);
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
    async handleDownload() {
      const element = document.getElementById('slip');
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better resolution
      });
      const imgData = canvas.toDataURL('image/png');

      // Get element's width and height in pixels
      const elementWidth = canvas.width;
      const elementHeight = canvas.height;

      // A4 paper size dimensions in mm (portrait)
      const a4Width = 210;
      const a4Height = 297;

      // Calculate the aspect ratio of the element
      const aspectRatio = elementWidth / elementHeight;

      // Calculate PDF width and height based on A4 dimensions and the element's aspect ratio
      let pdfWidth = a4Width;
      let pdfHeight = a4Width / aspectRatio;

      // If the calculated height is larger than A4, adjust to fit within A4
      if (pdfHeight > a4Height) {
        pdfHeight = a4Height;
        pdfWidth = a4Height * aspectRatio;
      }

      // Create a PDF with A4 format and portrait orientation
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4', // Standard A4 format
      });

      // Add the image to the PDF, centered within the A4 dimensions
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('file.pdf');
    },

    getMonths() {
      const months = [
        { month: 1, name: 'January', short: 'Jan', days: 31 },
        { month: 2, name: 'February', short: 'Feb', days: 28 },
        { month: 3, name: 'March', short: 'Mar', days: 31 },
        { month: 4, name: 'April', short: 'Apr', days: 30 },
        { month: 5, name: 'May', short: 'May', days: 31 },
        { month: 6, name: 'June', short: 'Jun', days: 30 },
        { month: 7, name: 'July', short: 'Jul', days: 31 },
        { month: 8, name: 'August', short: 'Aug', days: 31 },
        { month: 9, name: 'September', short: 'Sep', days: 30 },
        { month: 10, name: 'October', short: 'Oct', days: 31 },
        { month: 11, name: 'November', short: 'Nov', days: 30 },
        { month: 12, name: 'December', short: 'Dec', days: 31 },
      ];

      this.months = months;
    },

    async getCurrent() {
      try {
        const token = await axiosClient.get(`api/v1/user/getCurrent/`);
        console.log('Token : ', token);
        if (!token) {
          this.$router.push('/login');
        }
      } catch (err) {
        console.log('error: ', err);
        this.$router.push('/login');
      }
    },
  },
};
</script>
