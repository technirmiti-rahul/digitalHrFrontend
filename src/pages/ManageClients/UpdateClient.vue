<style scoped>
.main h-100 {
}

.form-container {
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin: auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
}

.form-group label {
  color: #333;
}

.form-control {
  background-color: #f8f9fa;
  border: none;
  border-radius: 10px;
  box-shadow: inset 2px 2px 5px #e9ecef, inset -2px -2px 5px #ffffff;
  color: #333;
}

.form-control:focus {
  box-shadow: inset 2px 2px 5px #e9ecef, inset -2px -2px 5px #ffffff, 0 0 10px #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 2px 2px 5px #e9ecef, -2px -2px 5px #ffffff, 0 0 10px #0056b3;
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
      <h5 class="pt-2 hind-medium source-500">Update Client</h5>
    </div>

    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto d-flex justify-content-center align-items-center">
        <div class="container py-3">
          <form v-auto-animate class="form-container border shadow-lg rounded-3">
            <h1 class="text-center source-600 text-dark mb-2">Update Client</h1>

            <div v-if="formPage == 1" class="row">
              <div class="form-group col-12 col-md-6">
                <label for="name source-500" class="source-500">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control border"
                  id="name"
                  placeholder="Enter name"
                />
                <label for="email" class="source-500 mt-2">Email address</label>
                <input
                  disabled
                  v-model="form.email"
                  type="email"
                  class="form-control border"
                  id="email"
                  placeholder="Enter email"
                />
                <label for="pan_card" class="source-500 mt-2">Pan Card</label>
                <input
                  v-model="form.pan_card"
                  type="text"
                  class="form-control border"
                  id="pan_card"
                  placeholder="Enter Pan Number"
                />

                <label for="gst_no" class="source-500 mt-2">GST Number</label>
                <input
                  v-model="form.gst_no"
                  type="number"
                  class="form-control border"
                  id="gst_no"
                  placeholder="Enter GST Number"
                />
                <label for="incorporation" class="source-500 mt-2">Incorporation</label>
                <div class="">
                  <multiselect
                    class=""
                    v-model="form.incorporation_type"
                    :options="incorporation_typeOptions"
                    placeholder="Select Incorporation Type"
                  ></multiselect>
                </div>

                <label for="address" class="source-500 mt-2">Address</label>
                <textarea
                  v-model="form.address"
                  type="text"
                  class="form-control border"
                  id="address"
                  placeholder="Enter GST Number"
                />
              </div>
              <!-- /////////////////////////////////////////////////////////////////////////////////////////////////// -->
              <div class="form-group col-12 col-md-6">
                <label for="phone_number source-500" class="source-500">whatsapp Number</label>
                <input
                  v-model="form.whatsapp_no"
                  type="number"
                  class="form-control border"
                  id="phone_number"
                  placeholder="Enter whatsapp number"
                />

                <label for="adhar_card" class="source-500 mt-2">Adhar Card</label>
                <input
                  v-model="form.adhar_card"
                  type="number"
                  class="form-control border"
                  id="adhar_card"
                  placeholder="Enter Adhar Number"
                />

                <label for="cin_no" class="source-500 mt-2">CIN Number</label>
                <input
                  v-model="form.cin_no"
                  type="number"
                  class="form-control border"
                  id="cin_no"
                  placeholder="Enter CIN Number"
                />
                <label for="employee_count_range" class="source-500 mt-2">
                  Number Of Employees
                </label>
                <input
                  v-model="form.employee_count_range"
                  type="number"
                  class="form-control border"
                  id="employee_count_range"
                  placeholder="Enter whatsapp number"
                />
                <label for="industry_type" class="source-500 mt-2">Industry Type</label>
                <div class="">
                  <multiselect
                    v-model="form.industry_type"
                    :options="industry_typeOptions"
                    placeholder="Select Industry Type"
                  ></multiselect>
                </div>
              </div>
            </div>
            <div v-if="formPage == 2" class="mt-3 mb-2 source-600 d-flex gap-2">
              <div v-if="formPage == 2" @click="formPage = 1" class="pointer pb-2">
                <i class="bi bi-arrow-left icon-font-2"></i>
              </div>
              <div class="w-100 text-center">
                <h5>Contact Person Information</h5>
              </div>
            </div>

            <div v-if="formPage == 2" class="row">
              <div class="form-group col-12 col-md-6">
                <label for="contact_person.name" class="source-500 mt-2">Conatact Name</label>
                <input
                  v-model="form.contact_person.name"
                  type="text"
                  class="form-control border"
                  id="contact_person.name"
                  placeholder="Enter Contact Name"
                />
                <label for="contact_person.contact_no" class="source-500 mt-2">
                  Conatct Number
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
                <label for="contact_person.email" class="source-500 mt-2">Conatct Email</label>
                <input
                  v-model="form.contact_person.email"
                  type="text"
                  class="form-control border"
                  id="contact_person.email"
                  placeholder="Enter Conatct Email "
                />
                <label for="contact_person.designation" class="source-500 mt-2">
                  Contact Designation
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
                v-if="formPage == 1"
                @click="changeFormPage"
                type="button"
                class="btn bg-dark bg-gradient source-500 text-light mt-4 w-50"
              >
                Next
              </button>
              <button
                v-if="formPage == 2"
                @click="handleUpdateClient"
                type="button"
                class="btn bg-dark bg-gradient source-500 text-light mt-4 w-50"
              >
                Update Client
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
  name: 'UpdateClientClient',
  props: {
    clientId: {
      type: String,
      required: true,
    },
  },

  components: {
    Multiselect,
  },
  data() {
    return {
      formPage: 1,
      form: {
        user_id: '',
        name: '',
        email: '',
        whatsapp_no: '',

        address: '',
        pan_card: '',
        adhar_card: '',
        gst_no: '',
        cin_no: '',
        industry_type: '',
        employee_count_range: '',
        contact_person: {
          name: ' ',
          email: '',
          contact_no: '',
          designation: '',
        },
        incorporation_type: '',
      },
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
    };
  },

  async created() {
    this.getCurrent();
    try {
      const clientRes = await axiosClient.get(`/api/v1/client/get/${this.clientId}`);
      const clientData = clientRes.data.data[0];
      this.form = {
        user_id: clientData.user_id,
        name: clientData.name,
        email: clientData.email,
        whatsapp_no: clientData.whatsapp_no,

        address: clientData.address,
        pan_card: clientData.pan_card,
        adhar_card: clientData.adhar_card,
        gst_no: clientData.gst_no,
        cin_no: clientData.cin_no,
        industry_type: clientData.industry_type,
        employee_count_range: clientData.employee_count_range,
        contact_person: {
          name: clientData.contact_person.name,
          email: clientData.contact_person.email,
          contact_no: clientData.contact_person.contact_no,
          designation: clientData.contact_person.designation,
        },
        incorporation_type: clientData.incorporation_type,
      };
      console.log('res: ', clientRes.data.data[0]);
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
  },

  methods: {
    async handleUpdateClient(e) {
      if (this.validateForm() == false) {
        return;
      }

      console.log('form: ', this.form);

      try {
        const res = await axiosClient.put(`/api/v1/client/update/${this.clientId}`, this.form);

        if (res) {
          toast.success(`Client Updated`, {
            autoClose: 1500,
          });

          setTimeout(() => {
            this.$router.push('/manage/clients');
          }, 2000);
        }
      } catch (err) {
        console.log('error: ', err);
        if (err.response.status == 409) {
          toast.error(`Client Already Exist`, {
            autoClose: 1500,
          });
        } else {
          toast.error(`Something Went Wrong`, {
            autoClose: 1500,
          });
        }
      }
    },

    nameWithLang({ name }) {
      console.log(name);
      return `${name} `;
    },
    changeFormPage() {
      console.log('changeFormPage');
      this.formPage = 2;
    },

    validateForm() {
      console.log('validateForm');

      if (this.form.name === '') {
        toast.info(`Enter Name`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.whatsapp_no === '') {
        toast.info(`Enter WhatsApp Number`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.email === '') {
        toast.info(`Enter Email`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.password === '') {
        toast.info(`Enter Password`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.address === '') {
        toast.info(`Enter Address`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.pan_card === '') {
        toast.info(`Enter PAN Card Number`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.adhar_card === '') {
        toast.info(`Enter Aadhar Card Number`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.gst_no === '') {
        toast.info(`Enter GST Number`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.cin_no === '') {
        toast.info(`Enter CIN Number`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.industry_type === '') {
        toast.info(`Enter Industry Type`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }

      if (this.form.employee_count_range === '') {
        toast.info(`Enter Employee Count Range`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }
      if (this.form.incorporation_type === '') {
        toast.info(`Enter Incorporation Type`, { autoClose: 1000 });
        this.formPage = 1;
        return false;
      }
      if (this.form.contact_person.name === '') {
        toast.info(`Enter Contact Person Name`, { autoClose: 1000 });
        this.formPage = 2;
        return false;
      }

      if (this.form.contact_person.email === '') {
        toast.info(`Enter Contact Person Email`, { autoClose: 1000 });
        this.formPage = 2;
        return false;
      }

      if (this.form.contact_person.contact_no === '') {
        toast.info(`Enter Contact Person Contact Number`, { autoClose: 1000 });
        this.formPage = 2;
        return false;
      }

      if (this.form.contact_person.designation === '') {
        toast.info(`Enter Contact Person Designation`, { autoClose: 1000 });
        this.formPage = 2;
        return false;
      }

      return true;
    },

    async getCurrent() {
      try {
        const token = await axiosClient.get(`api/v1/user/getCurrent/`);
        console.log('Token : ', token);

        if (!token) {
          this.$router.push('/login');
        }
        this.form.user_id = token.data.user._id;
      } catch (err) {
        console.log('error: ', err);
        this.$router.push('/login');
      }
    },
  },
};
</script>
