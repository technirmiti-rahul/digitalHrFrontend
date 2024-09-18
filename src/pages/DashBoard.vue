<style scoped>
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

@media (max-width: 576px) {
  .left {
    width: 100%;
    height: 90%;
  }
  .right {
    width: 100%;
    height: 90%;
  }
}

@media (min-width: 576px) {
  .left {
    width: 100%;
    height: 90%;
  }
  .right {
    width: 100%;
    height: 90%;
  }
}

@media (min-width: 768px) {
  .left {
    width: 50%;
    height: 75vh;
  }
  .right {
    width: 50%;
    height: 75vh;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>

<template>
  <div class="main source-400 pt-2 h-100">
    <div class="border-bottom px-3">
      <h5 class="source-500 text-dark">Dashboard</h5>
    </div>
    <div class="overflow-y-hidden pb-5 h-100">
      <div class="h-100 overflow-y-auto">
        <div class="container py-3">
          <div class="d-flex flex-column flex-md-row gap-1">
            <div
              class="left scroll border d-flex justify-content-center align-items-center rounded-4 px-4"
              id="bar_graph"
            >
              <BarGraph :propsChartData="graphData" />
            </div>
            <div
              class="right scroll border d-flex justify-content-center align-items-center pb-4 rounded-4"
              id="doughnut"
            >
              <DoughnutChart :propsChartData="pieData" />
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row gap-1 mt-3">
            <div
              class="left scroll border d-flex justify-content-center align-items-center rounded-4 px-4"
              id="pie"
            >
              <PieChart :propsChartData="pieData" />
            </div>
            <div
              class="right scroll px-3 border d-flex justify-content-center align-items-center pb-4 rounded-4"
              id="line"
            >
              <LineChart :propsChartData="graphData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from '../axiosClient';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BarGraph from '../components/BarGraph.vue';
import PieChart from '../components/PieChart.vue';
import DoughnutChart from '../components/DoughnutChart.vue';
import LineChart from '../components/LineChart.vue';
import 'chartjs-plugin-annotation';

export default {
  name: 'DashBoard',
  components: {
    PieChart,
    BarGraph,
    DoughnutChart,
    LineChart,
  },
  data() {
    return {
      graphData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 1)'],

            borderRadius: 5,
          },
          {
            label: 'Dataset 2',
            data: [5, 3, 12, 7, 19, 3],
            backgroundColor: ['rgba(0, 255, 64, 1)'],

            borderRadius: 5,
          },
          {
            label: 'Dataset 3',
            data: [7, 6, 10, 15, 14, 5],
            backgroundColor: ['rgba(100 , 0, 255, 1)'],

            borderRadius: 5,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      },
      pieData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 205, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(201, 203, 207, 1)',
            ],
            borderColor: 'white',
            borderWidth: 1,
          },
        ],
      },
    };
  },

  async created() {
    this.getCurrent();
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.scroll', {
      opacity: 0.3,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: '#bar_graph, #doughnut, #pie, #line',
        delay: 0.2,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
  },

  methods: {
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
