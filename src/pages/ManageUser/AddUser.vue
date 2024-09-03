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
      <h5 class="pt-2 hind-medium source-500">Add User</h5>
    </div>

    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto d-flex justify-content-center align-items-center">
        <div class="container py-3">
          <form class="form-container border shadow-lg rounded-3">
            <h1 class="text-center source-600 text-dark mb-4">Add User</h1>
            <div class="row">
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
                  v-model="form.email"
                  type="email"
                  class="form-control border"
                  id="email"
                  placeholder="Enter email"
                />
                <label for="pin_code" class="source-500 mt-2">Pin Code</label>
                <input
                  v-model="form.pin_code"
                  @input="validatePinCode"
                  type="text"
                  class="form-control border"
                  id="pin_code"
                  placeholder="Enter pin code"
                />
                <label for="state" class="source-500 mt-2">State</label>
                <input
                  v-model="form.state"
                  type="text"
                  class="form-control border"
                  id="state"
                  placeholder="Enter state"
                />

                <div class="mt-2">
                  <label for="department" class="source-500">Department</label>
                  <multiselect
                    v-model="selected_department"
                    :options="departments"
                    placeholder="Select Department"
                    label="name"
                    track-by="name"
                  ></multiselect>
                </div>

                <div class="mt-2">
                  <label for="team" class="source-500">Team</label>
                  <multiselect
                    v-model="selected_team"
                    :options="teams"
                    placeholder="Select Team"
                    label="name"
                    track-by="name"
                  ></multiselect>
                </div>
              </div>
              <!-- ///////////////////////////////////////////// -->
              <div class="form-group col-12 col-md-6">
                <label for="phone_number source-500" class="source-500">Phone Number</label>
                <input
                  v-model="form.whatsapp_no"
                  type="number"
                  class="form-control border"
                  id="phone_number"
                  placeholder="Enter phone number"
                />

                <label for="password" class="source-500 mt-2">Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control border"
                  id="password"
                  placeholder="Password"
                />
                <label for="city" class="source-500 mt-2">City</label>
                <input
                  v-model="form.city"
                  type="text"
                  class="form-control border"
                  id="city"
                  placeholder="Enter city"
                />

                <label for="country" class="source-500 mt-2">Country</label>
                <input
                  v-model="form.country"
                  type="text"
                  class="form-control border"
                  id="country"
                  placeholder="Enter country"
                />

                <div class="mt-2">
                  <label for="role_type" class="source-500">Role Type</label>
                  <multiselect
                    v-model="selected_roleType"
                    :options="roles"
                    placeholder="Select Role"
                    label="name"
                    track-by="name"
                  ></multiselect>
                </div>

                <label for="address" class="source-500 mt-2">Address</label>
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
                @click="handleAddUser"
                type="button"
                class="btn bg-dark bg-gradient source-500 text-light mt-4 w-50"
              >
                Add User
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
      form: {
        name: '',
        email: '',
        password: '',
        whatsapp_no: '',
        roleType: '',
        team: '',
        department: '',
        city: '',
        state: '',
        country: '',
        address: '',
        pin_code: '',
      },
      selected_roleType: '',
      selected_team: '',
      selected_department: '',
      departments: [],
      roles: [],
      teams: [],
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
  },

  methods: {
    async validatePinCode() {
      if (this.form.pin_code.length >= 6) {
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
      }
    },

    async handleAddUser(e) {
      if (this.validateForm() == false) {
        return;
      }
      this.form.roleType = this.selected_roleType._id;
      this.form.department = this.selected_department._id;
      this.form.team = this.selected_team._id;
      console.log('form: ', this.form);

      try {
        const res = await axiosClient.post(`api/v1/user/add`, this.form);

        if (res) {
          console.log(res);
          toast.success(`User Added`, {
            autoClose: 1500,
          });

          setTimeout(() => {
            this.$router.push(`/manage/users`);
          }, 2000);
        }
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
    },

    validateForm() {
      console.log('validateForm');
      if (this.form.name == '') {
        toast.info(`Enter Name`, { autoClose: 1000 });
        return false;
      }
      if (this.form.whatsapp_no == '') {
        toast.info(`Enter Number`, { autoClose: 1000 });
        return false;
      }
      if (this.form.email == '') {
        toast.info(`Enter Email`, { autoClose: 1000 });
        return false;
      }

      if (this.form.password == '') {
        toast.info(`Enter Password`, { autoClose: 1000 });
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
      if (this.selected_department == '') {
        toast.info(`Select Department `, { autoClose: 1000 });
        return false;
      }
      if (this.selected_roleType == '') {
        toast.info(`Select Role `, { autoClose: 1000 });
        return false;
      }
      if (this.selected_team == '') {
        toast.info(`Select Team `, { autoClose: 1000 });
        return false;
      }

      return true;
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
