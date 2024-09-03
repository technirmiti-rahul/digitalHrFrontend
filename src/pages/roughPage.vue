<style scoped></style>

<template>
  <div class="login-container">
    <div class="container">
      <form>
        <div class="form-group">
          <label for="file">Upload file:</label>
          <div class="mb-3">
            <label for="formFileSm" class="form-label">Small file input example</label>
            <input
              class="form-control form-control-sm"
              accept="image/png, image/jpeg, application/pdf"
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFile()"
            />
          </div>
        </div>
        <button type="button" @click="uploadFile()" class="btn btn-sm btn-dark">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axiosClient from '../axiosClient';
import { ToastifyContainer } from 'vue3-toastify';
import { toast } from 'vue3-toastify';

export default {
  name: 'LoginForm',
  data() {
    return {
      file: '',
    };
  },
  methods: {
    async uploadFile() {
      const formData = new FormData();
      formData.append('file', this.file);
      try {
        const data = await axiosClient.post('/api/v1/document/upload', formData);
        console.log(data);
        toast.success(`File uploaded successfully`, {
          autoClose: 1500,
        });
      } catch (err) {
        console.log('');
      }
    },

    handleFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  width: 500px;
  height: 300px;
  border: 1px solid black;
  padding: 20px;
}
</style>
<<<<<<< c6aebf40-20bd-4acb-ada4-dd9ba781a8f4 >>>>>>>
