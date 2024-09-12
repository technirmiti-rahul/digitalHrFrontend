<style scoped>
.main {
  margin-top: 0px;
}

.edit-button {
  margin-right: 2px;
}

.varify-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 11px rgba(0, 0, 0, 0.5);
  box-shadow: 0 -8px -11px rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px;
}

.profile-image {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
}
@media (max-width: 1199px) {
  .profile-image {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
  }
}

@media (max-width: 600px) {
  .profile-image {
    width: 40vw;
    height: 40vw;
    object-fit: cover;
  }
}

@media (max-width: 400px) {
  .profile-image {
    width: 60vw;
    height: 60vw;
    object-fit: cover;
  }
}
</style>

<template>
  <div v-auto-animate class="main h-100">
    <div class="border-bottom px-4">
      <h5 class="pt-2 source-500">View Employee</h5>
    </div>

    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto">
        <div class="container py-3">
          <div class="main2">
            <div class="container-xl px-4">
              <div v-auto-animate class="row" style="padding-top: 5rem">
                <div class="col-xl-4">
                  <div v-auto-animate class="card mb-4 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div
                      v-auto-animate
                      class="card-body text-center scroll d-flex justify-content-center"
                    >
                      <div>
                        <img
                          v-if="profile"
                          class="img-account-profile profile-image rounded-circle mb-2"
                          :src="profile"
                          alt="Profile Picture"
                        />
                        <img
                          v-else
                          class="img-account-profile rounded-circle mb-2"
                          src="../../assets/profile-circle.svg"
                          alt="Default Profile Picture"
                        />

                        <div class="small font-italic text-muted mb-4">
                          <h5>{{ form.name }}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8">
                  <div class="card mb-4 scroll">
                    <div class="card-header">Employee Details</div>
                    <div class="card-body">
                      <div v-auto-animate>
                        <div class="row gx-3 mb3">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <label class="small mb-1" for="name">Name</label>
                              <input
                                disabled
                                class="form-control"
                                id="name"
                                type="text"
                                v-model="form.name"
                              />
                            </div>
                            <div class="mt-1">
                              <div v-auto-animate class="row">
                                <div class="col-2">
                                  <label class="small mb-1" for="email">Email</label>
                                </div>

                                <div class="col-4"></div>
                              </div>
                              <input
                                disabled
                                class="form-control"
                                id="email"
                                type="text"
                                v-model="form.email"
                              />
                            </div>
                            <div>
                              <div class="mt-2" style="padding-top: 0.3rem">
                                <label class="small mb-1" for="pin_code">Pin Code</label>
                                <input
                                  disabled
                                  class="form-control"
                                  id="pin_code"
                                  type="text"
                                  v-model="form.pin_code"
                                />
                              </div>
                            </div>

                            <div>
                              <div class="mt-2" style="padding-top: 0.3rem">
                                <label class="small mb-1" for="city">City</label>
                                <input
                                  disabled
                                  class="form-control"
                                  id="city"
                                  type="text"
                                  v-model="form.city"
                                />
                              </div>
                            </div>

                            <div>
                              <div class="mt-2" style="padding-top: 0.3rem">
                                <label class="small mb-1" for="address">Address</label>
                                <textarea
                                  disabled
                                  class="form-control"
                                  id="address"
                                  type="text"
                                  v-model="form.address"
                                />
                              </div>
                            </div>
                          </div>

                          <!-- ///////////////////////////////// New colunn starts //////////////////////////////////// -->
                          <div class="col-md-6">
                            <div class="">
                              <label class="small mb-1" for="mobile_no">whatsapp Number</label>
                              <input
                                disabled
                                class="form-control"
                                id="mobile_no"
                                type="text"
                                v-model="form.whatsapp_no"
                              />
                            </div>
                            <div class="">
                              <div class="mt-3">
                                <label class="small mb-1" for="designation">Designation</label>
                                <input
                                  disabled
                                  class="form-control"
                                  id="designation"
                                  type="text"
                                  v-model="form.designation"
                                />
                              </div>
                            </div>
                            <div>
                              <div class="mt-2" style="padding-top: 0.3rem">
                                <label class="small mb-1" for="state">State</label>
                                <input
                                  disabled
                                  class="form-control"
                                  id="state"
                                  type="text"
                                  v-model="form.state"
                                />
                              </div>
                            </div>

                            <div>
                              <div class="mt-2" style="padding-top: 0.3rem">
                                <label class="small mb-1" for="country">Country</label>
                                <input
                                  disabled
                                  class="form-control"
                                  id="country"
                                  type="text"
                                  v-model="form.country"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <button
                      @click="handleUpdate"
                      type="button"
                      class="btn btn-dark btn-sm d-block d-sm-none source-500"
                    >
                      Update
                    </button>
                    <button
                      @click="handleUpdate"
                      type="button"
                      class="btn btn-dark d-none d-sm-block source-500"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axiosClient from '../../axiosClient';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';

export default {
  name: 'UpdateEmployee',
  components: {
    Multiselect,
  },

  props: {
    employeeId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      id: '',
      name: 'xyz',
      mobile_no: '11111111',
      email: 'xyz@gmail.com',

      profile_url: '',
      form: {
        _id: '',
        user_id: '',
        name: '',
        email: '',
        whatsapp_no: '',
        password: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pin_code: '',
        designation: '',
        date_of_joining: '',
      },
      placeholderTeam: '',
      placeholderDepartment: '',
      placeholderRoleType: '',
      token: '',
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
      console.log('employeeId: ', this.employeeId);
      const employeeRes = await axiosClient.get(`/api/v1/employee/get/${this.employeeId}`);
      console.log('res: ', employeeRes);
      const employeeData = employeeRes.data.data;

      if (employeeData) {
        this.form._id = employeeData._id;
        this.form.user_id = employeeData.user_id;
        this.form.name = employeeData.name;
        this.form.email = employeeData.email;
        this.form.whatsapp_no = employeeData.whatsapp_no;
        this.form.address = employeeData.address;
        this.form.city = employeeData.city;
        this.form.state = employeeData.state;
        this.form.country = employeeData.country;
        this.form.pin_code = employeeData.pin_code;
        this.form.designation = employeeData.designation;
        this.form.date_of_joining = employeeData.date_of_joining;
      }

      console.log('form: ', this.form);
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
    gsap.from('.scroll', {
      opacity: 0,
      y: 50,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.scroll',
        delay: 0.5,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
  },

  methods: {
    async handleUpdate() {
      this.$router.push(`/update/employee/${this.form._id}`);
    },

    validateForm() {
      if (this.form.name == '') {
        toast.info(`Enter Name`, { autoClose: 1000 });
        return false;
      }
      if (this.form.number == '') {
        toast.info(`Enter Number`, { autoClose: 1000 });
        return false;
      }
      if (this.form.email == '') {
        toast.info(`Enter Email`, { autoClose: 1000 });
        return false;
      }
      if (this.form.designation == '') {
        toast.info(`Enter Designation`, { autoClose: 1000 });
        return false;
      }

      if (this.form.date_of_joining == '') {
        toast.info(`Enter Date of Joining`, { autoClose: 1000 });
        return false;
      }
      if (this.form.pin_code == '') {
        toast.info(`Enter Pin Code`, { autoClose: 1000 });
        return false;
      }

      if (this.form.city == '') {
        toast.info(`Enter City`, { autoClose: 1000 });
        return false;
      }

      if (this.form.state == '') {
        toast.info(`Enter State`, { autoClose: 1000 });
        return false;
      }

      if (this.form.country == '') {
        toast.info(`Enter Country`, { autoClose: 1000 });
        return false;
      }
      if (this.form.address == '') {
        toast.info(`Enter Address`, { autoClose: 1000 });
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
      } catch (err) {
        console.log('error: ', err);
        this.$router.push('/login');
      }
    },
  },
};
</script>
