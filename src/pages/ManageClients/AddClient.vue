<style scoped>
.main h-100 {
}

.form-container {
  width: 100%;
  max-width: 1000px;
  padding: 15px;
  margin: auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
}

.form-container2 {
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin: auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
}

.form-control {
  color: #333;
}

.form-control:focus {
  box-shadow: inset 2px 2px 5px #e9ecef, inset -2px -2px 5px #ffffff, 0 0 10px #007bff;
}

@media (max-width: 576px) {
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .form-container {
    padding: 30px;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>

<template>
  <div class="main h-100">
    <div class="border-bottom px-4">
      <h5 class="pt-2 hind-medium source-600 page-title">Add Client</h5>
    </div>

    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto">
        <div
          v-auto-animate
          class="container h-100 py-3 d-flex justify-content-center align-items-start align-items-sm-center"
        >
          <form v-if="formPage == 1" v-auto-animate class="form-container border rounded-3">
            <div class="d-flex justify-content-center">
              <div class="w-100">
                <h4 class="text-center source-600 text-dark mb-4">Add Client</h4>
              </div>
            </div>
            <div class="row source-400">
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="name source-500" class="">
                  Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control border"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="email" class="mt-2 mt-sm-0">
                  Email Address
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-if="userAdded == false"
                  v-model="form.email"
                  type="email"
                  class="form-control border"
                  id="email"
                  placeholder="Enter email"
                />
                <input
                  v-if="userAdded == true"
                  disabled
                  v-model="form.email"
                  type="email"
                  class="form-control border"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="password" class="mt-2 mt-sm-0">
                  Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control border"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="phone_number source-500 " class="mt-2">
                  WhatsApp Number
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.whatsapp_no"
                  type="number"
                  class="form-control border"
                  id="phone_number"
                  placeholder="Enter phone number"
                />
              </div>
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="pin_code" class="mt-2">
                  Pin Code
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.pin_code"
                  @input="validatePinCode"
                  type="text"
                  class="form-control border"
                  id="pin_code"
                  placeholder="Enter pin code"
                />
              </div>
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="state" class="mt-2">
                  State
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.state"
                  type="text"
                  class="form-control border"
                  id="state"
                  placeholder="Enter state"
                />
              </div>

              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="city" class="mt-2">
                  City
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.city"
                  type="text"
                  class="form-control border"
                  id="city"
                  placeholder="Enter city"
                />
              </div>
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="country" class="mt-2">
                  Country
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.country"
                  type="text"
                  class="form-control border"
                  id="country"
                  placeholder="Enter country"
                />
              </div>

              <div class="form-group col-12 col-sm-6 col-lg-4">
                <div class="mt-2">
                  <label for="department" class="">
                    Department
                    <span class="text-danger">*</span>
                  </label>
                  <multiselect
                    v-model="selected_department"
                    :options="departments"
                    placeholder="Select Department"
                    label="name"
                    track-by="name"
                  ></multiselect>
                </div>
              </div>
              <div class="form-group col-12 col-sm-6 col-lg-4">
                <div class="mt-2">
                  <label for="team" class="">
                    Team
                    <span class="text-danger">*</span>
                  </label>
                  <multiselect
                    v-model="selected_team"
                    :options="teams"
                    placeholder="Select Team"
                    label="name"
                    track-by="name"
                  ></multiselect>
                </div>
              </div>

              <div class="form-group col-12 col-sm-6 col-lg-4">
                <label for="address" class="mt-2">
                  Address
                  <span class="text-danger">*</span>
                </label>
                <textarea
                  v-model="form.address"
                  type="text"
                  class="form-control border"
                  id="address"
                  placeholder="Enter address"
                />
              </div>
            </div>

            <div class="w-100 d-flex justify-content-center align-items-center">
              <button
                v-if="formPage == 1 && userAdded == false"
                @click="handleAddClient"
                type="button"
                class="btn btn-primary border-0 button_bg source-500 text-light mt-4 px-5"
              >
                Next
              </button>
              <button
                v-if="formPage == 1 && userAdded == true"
                @click="handleUpdateCreatedClient"
                type="button"
                class="btn btn-primary border-0 button_bg source-500 text-light mt-4 px-5"
              >
                Update
              </button>
            </div>
          </form>
          <!-- /////////////////////////////////////////////////////////////////////// -->
          <form v-if="formPage == 2" v-auto-animate class="form-container2 border rounded-3">
            <div class="d-flex justify-content-center">
              <div class="">
                <i @click="formPage = 1" class="bi bi-arrow-left icon-font-2 pointer"></i>
              </div>
              <div class="w-100">
                <h4 class="text-center source-600 text-dark mb-4">Add Details</h4>
              </div>
            </div>

            <div class="row source-400">
              <div class="form-group col-12 col-sm-6">
                <label for="pan_card" class="mt-2">
                  Pan Card

                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.pan_card"
                  type="text"
                  class="form-control border"
                  id="pan_card"
                  placeholder="Enter Pan Number"
                />
              </div>
              <div class="form-group col-12 col-sm-6">
                <label for="gst_no" class="mt-2">GST Number</label>
                <input
                  v-model="form.gst_no"
                  type="text"
                  class="form-control border"
                  id="gst_no"
                  placeholder="Enter GST Number"
                />
              </div>

              <div class="form-group col-12 col-sm-6">
                <label for="adhar_card" class="mt-2">
                  Adhar Card

                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.adhar_card"
                  type="text"
                  class="form-control border"
                  id="adhar_card"
                  placeholder="Enter Adhar Number"
                />
              </div>

              <div class="form-group col-12 col-sm-6">
                <label for="cin_no" class="mt-2">CIN Number</label>
                <input
                  v-model="form.cin_no"
                  type="text"
                  class="form-control border"
                  id="cin_no"
                  placeholder="Enter CIN Number"
                />
              </div>
              <div class="form-group col-12 col-sm-6">
                <div class="mt-3">
                  <label for="incorporation_type" class="">
                    Incorporation Type
                    <span class="text-danger">*</span>
                  </label>
                  <multiselect
                    class=""
                    v-model="form.incorporation_type"
                    :options="incorporation_typeOptions"
                    placeholder="Select Incorporation Type"
                  ></multiselect>
                </div>
              </div>
              <div class="form-group col-12 col-sm-6">
                <div class="mt-3">
                  <label for="industry_type" class="">
                    Industry Type
                    <span class="text-danger">*</span>
                  </label>
                  <multiselect
                    v-model="form.industry_type"
                    :options="industry_typeOptions"
                    placeholder="Select Industry Type"
                  ></multiselect>
                </div>
              </div>
              <div class="form-group col-12 col-sm-6">
                <label for="pan_card" class="mt-2">
                  Number Of Employees
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.employee_count_range"
                  type="text"
                  class="form-control border"
                  id="pan_card"
                  placeholder="Enter Number Of Employees"
                />
              </div>
            </div>

            <div class="w-100 d-flex justify-content-center align-items-center">
              <button
                v-if="formPage == 2"
                @click="validateFormPage2"
                type="button"
                class="btn btn-primary border-0 button_bg source-500 text-light mt-4 px-5"
              >
                Next
              </button>
            </div>
          </form>
          <!-- /////////////////////////////////////////////////////////////////////// -->
          <form v-if="formPage == 3" v-auto-animate class="form-container2 border= rounded-3">
            <div class="d-flex justify-content-center">
              <div class="">
                <i @click="formPage = 2" class="bi bi-arrow-left icon-font-2 pointer"></i>
              </div>
              <div class="w-100">
                <h4 class="text-center source-600 text-dark mb-4">Add Contact</h4>
              </div>
            </div>

            <div class="row source-400">
              <div class="form-group col-12 col-md-6">
                <label for="contact_person.name" class="mt-2">
                  Conatact Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.contact_person.name"
                  type="text"
                  class="form-control border"
                  id="contact_person.name"
                  placeholder="Enter Contact Name"
                />
                <label for="contact_person.contact_no" class="mt-2">
                  Conatct Number
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.contact_person.contact_no"
                  type="number"
                  class="form-control border"
                  id="contact_person.contact_no"
                  placeholder="Enter Conatct Number"
                />
              </div>
              <div class="form-group col-12 col-md-6">
                <label for="contact_person.email" class="mt-2">
                  Conatct Email
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.contact_person.email"
                  type="email"
                  class="form-control border"
                  id="contact_person.email"
                  placeholder="Enter Conatct Email "
                />
                <label for="contact_person.designation" class="mt-2">
                  Contact Designation
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.contact_person.designation"
                  type="text"
                  class="form-control border"
                  id="contact_person.designation"
                  placeholder="Enter Pan Number"
                />
              </div>
            </div>

            <div class="w-100 d-flex justify-content-center align-items-center">
              <button
                v-if="formPage == 3"
                @click="handleAddClientDetails"
                type="button"
                class="btn btn-primary border-0 button_bg source-500 text-light mt-4 px-5"
              >
                Add Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from '../../axiosClient';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default {
  name: 'SignUp',
  components: {
    Multiselect,
  },
  data() {
    return {
      formPage: 1,
      isLoading: false,
      userAdded: false,
      form: {
        user_id: '66d7f425ad326a6f50ef00d5',
        name: '',
        email: '',
        whatsapp_no: '',
        password: '',
        address: '',
        pan_card: '',
        adhar_card: '',
        gst_no: '',
        cin_no: '',
        team: '',
        department: '',
        roleType: '',
        industry_type: '',
        employee_count_range: '',
        incorporation_type: '',

        document_type: '',
        doc_url: '',
        contact_person: {
          name: '',
          email: '',
          contact_no: '',
          designation: '',
        },
      },
      selected_roleType: '',
      selected_team: '',
      selected_department: '',
      departments: [],
      roles: [],
      teams: [],
      documentOoptions: ['pan', 'adhar', 'gst', 'cin'],
      industry_typeOptions: ['Factories', 'Restaurants', 'Hotels', 'IT Company'],
      incorporation_typeOptions: [
        'Proprietory Firm',
        'Partnership Firm',
        'LLP',
        'Private Limited',
        'Public Limited',
        'Local Bodies / Municipal Corporations',
        'State Govt. Controlled',
        'State Govt. Department',
        'Co-Operative Society',
        'Registered Society',
        'Firms Run by Trust',
      ],
      submitedDocuments: [
        { document_typ: 'pan', uploaded: false },
        { document_typ: 'adhar', uploaded: false },
        { document_typ: 'gst', uploaded: false },
        { document_typ: 'cin', uploaded: false },
      ],
    };
  },

  async created() {
    this.getCurrent();
    try {
      const departments = await axiosClient.get(`/api/v1/department/getall`);
      this.departments = departments.data.data;

      const roles = await axiosClient.get(`/api/v1/role/getall`);
      this.roles = roles.data.data;

      const teams = await axiosClient.get(`/api/v1/team/getall`);
      this.teams = teams.data.data;

      for (let i = 0; i < this.roles.length; i++) {
        if (this.roles[i].name == 'client') {
          this.selected_roleType = this.roles[i];
        }
      }
      console.log('departments : ', this.departments);
      console.log('roles : ', this.roles);
      console.log('teams : ', this.teams);
    } catch (err) {}
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.form-container', {
      opacity: 0,
      y: 50,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.form-container',
        delay: 0.5,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });

    // Add event listeners when the component is mounted
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    window.addEventListener('popstate', this.handlePopState);
    window.history.pushState(null, null, null);
  },

  beforeUnmount() {
    // Remove event listeners when the component is unmounted
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    window.removeEventListener('popstate', this.handlePopState);
  },

  methods: {
    handleBeforeUnload(event) {
      event.preventDefault();
      event.returnValue = 'Are you sure you want to leave this page?';
    },
    handlePopState(event) {
      event.preventDefault();
      event.returnValue = 'Are you sure you want to go back?';
      window.history.pushState(null, null, null);
    },

    async validatePinCode() {
      /* if (this.form.pin_code.length >= 6) {
        try {
          const res = await axiosClient.get(`https://dev.apiman.in/pincode/${this.form.pin_code}`);
          console.log('res: ', res);
          if (res.data[0]) {
            // this.form.city = res.data[0].PostOffice[0].name;
            this.form.state = res.data.PostOffice[0].State;
            this.form.country = res.data.PostOffice[0].Country;
          }
        } catch (err) {
          console.log('error: ', err);
        }
      } */
    },

    async handleAddClient() {
      if (this.validateFormPage1() == false) {
        return;
      }
      this.isLoading = true;
      this.form.roleType = this.selected_roleType._id;
      this.form.department = this.selected_department._id;
      this.form.team = this.selected_team._id;
      console.log('form: ', this.form);

      try {
        const res = await axiosClient.post(`api/v1/client/add`, this.form);

        if (res) {
          console.log('success: ', res);

          this.form.user_id = res.data._id;
        }
        this.formPage = 2;
        this.userAdded = true;
      } catch (err) {
        console.log('error: ', err);
        if (err.response.status == 409) {
          toast.error(`Email Already Registered`, {
            autoClose: 1500,
          });
        } else {
          toast.error(`Something Went Wrong`, {
            autoClose: 1500,
          });
        }
      }

      this.isLoading = false;
    },

    async handleUpdateCreatedClient() {
      if (this.validateFormPage1() == false) {
        return;
      }
      this.isLoading = true;
      this.form.roleType = this.selected_roleType._id;
      this.form.department = this.selected_department._id;
      this.form.team = this.selected_team._id;
      console.log('form: ', this.form);

      try {
        const res = await axiosClient.post(`api/v1/client/update/created`, this.form);
        this.formPage = 2;
        this.userAdded = true;
      } catch (err) {
        console.log('error: ', err);
        if (err.response.status == 409) {
          toast.error(`Email Already Registered`, {
            autoClose: 1500,
          });
        } else {
          toast.error(`Something Went Wrong`, {
            autoClose: 1500,
          });
        }
      }

      this.isLoading = false;
    },

    async handleAddClientDetails() {
      console.log('form: ', this.form);
      if (this.validateFormPage3() == false) {
        return;
      }

      this.isLoading = true;

      try {
        const res = await axiosClient.put(
          `/api/v1/client/add/details/${this.form.user_id}`,
          this.form
        );
        console.log(res);

        if (res) {
          toast.success(`Client Added`, {
            autoClose: 1500,
          });
        }
        setTimeout(() => {
          this.$router.push(`/add/client/details/${this.form.user_id}`);
        }, 2000);
      } catch (err) {
        console.log('error: ', err);
        if (err.response.status == 409) {
          toast.error(`User Already Exist`, {
            autoClose: 1500,
          });
        } else {
          toast.error(`Something Went Wrong`, {
            autoClose: 1500,
          });
        }
      }

      this.isLoading = false;
    },

    validateFormPage1() {
      console.log('validateForm');
      if (this.form.name == '') {
        toast.info(`Enter Name`, { autoClose: 1000 });
        return false;
      }
      if (this.form.whatsapp_no == '') {
        toast.info(`Enter Number`, { autoClose: 1000 });
        return false;
      }

      if (this.form.whatsapp_no.length < 10) {
        toast.info(`Enter valid Whatsapp Number`, { autoClose: 1000 });
        return false;
      }
      if (this.form.email == '') {
        toast.info(`Enter Email`, { autoClose: 1000 });
        return false;
      }
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.form.email)) {
        toast.info(`Enter Valid Email`, { autoClose: 1000 });
        return false;
      }

      if (this.form.password == '') {
        toast.info(`Enter Password`, { autoClose: 1000 });
        return false;
      }
      if (this.form.password.length < 6) {
        toast.info(`Password Must Contain At Least 6 Characters`, { autoClose: 1000 });
        return false;
      }
      if (this.form.pin_code == '') {
        toast.info(`Enter Pin Code`, { autoClose: 1000 });
        return false;
      }
      if (this.form.city == '') {
        toast.info(`Enter city`, { autoClose: 1000 });
        return false;
      }
      if (this.form.state == '') {
        toast.info(`Enter state`, { autoClose: 1000 });
        return false;
      }
      if (this.form.country == '') {
        toast.info(`Enter country`, { autoClose: 1000 });
        return false;
      }
      if (this.form.address == '' || this.form.address.length < 10) {
        toast.info(`Enter address properly`, { autoClose: 1000 });
        return false;
      }
      if (this.form.country == '') {
        toast.info(`Enter country`, { autoClose: 1000 });
        return false;
      }

      if (this.selected_department == '') {
        toast.info(`Select Department`, { autoClose: 1000 });
        return false;
      }

      if (this.selected_team == '') {
        toast.info(`Select Team`, { autoClose: 1000 });
        return false;
      }

      if (this.selected_roleType == '') {
        toast.info(`Select Role Type`, { autoClose: 1000 });
        return false;
      }
    },

    validateFormPage2() {
      console.log('validateForm2');
      console.log('adhar length: ', this.form.adhar_card.length);
      if (this.form.pan_card == '') {
        toast.info(`Enter Pan Card`, { autoClose: 1000 });
        return;
      }

      if (this.form.pan_card.length < 10) {
        console.log('pan length: ', this.form.pan_card.length);
        toast.info(`Enter Valid Pan Id`, { autoClose: 1000 });
        return;
      }

      if (this.form.adhar_card == '') {
        toast.info(`Enter Aadhar Card`, { autoClose: 1000 });
        return;
      }

      if (this.form.adhar_card.length < 12) {
        console.log('adhar length: ', this.form.adhar_card.length);
        toast.info(`Enter Valid Aadhar Number`, { autoClose: 1000 });
        return;
      }
      /*  if (this.form.cin_no == '') {
        toast.info(`Enter CIN Number`, { autoClose: 1000 });
        return;
      }
      if (this.form.gst_no == '') {
        toast.info(`Enter GST Number`, { autoClose: 1000 });
        return;
      } */
      if (this.form.incorporation_type == '') {
        toast.info(`Enter Incorporation Type`, { autoClose: 1000 });
        return;
      }
      if (this.form.industry_type == '') {
        toast.info(`Enter Industry Type`, { autoClose: 1000 });
        return;
      }

      this.formPage = 3;
    },

    validateFormPage3() {
      console.log('validateForm3');
      if (this.form.contact_person.name == '') {
        toast.info(`Enter Contact Person Name`, { autoClose: 1000 });
        return;
      }
      if (this.form.contact_person.email == '') {
        toast.info(`Enter Contact Person Email`, { autoClose: 1000 });
        return;
      }
      let re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.form.contact_person.email)) {
        toast.info(`Enter Valid Contact Person Email`, { autoClose: 1000 });
        return;
      }
      if (this.form.contact_person.contact_no == '') {
        toast.info(`Enter Contact Person Number`, { autoClose: 1000 });
        return;
      }
      if (this.form.contact_person.designation == '') {
        toast.info(`Enter Contact Person Designation`, { autoClose: 1000 });
        return;
      }

      this.formPage = 4;
    },

    nameWithLang({ name }) {
      console.log(name);
      return `${name} `;
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
