<style scoped>
.pie_chart {
  width: auto;
  height: 10vw;
}

@media (max-width: 576px) {
}

@media (min-width: 576px) {
  .pie_chart {
    width: auto;
    height: 25vw;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>

<template>
  <div class="main source-400 pt-5 h-100 w-100">
    <div class="h-100 w-100">
      <span class="bg-dark">
        <canvas id="barChart1" class="border rounded"></canvas>
      </span>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import 'chartjs-plugin-annotation';

export default {
  name: 'BarGraph',

  props: {
    propsChartData: Object,
  },

  data() {
    return {
      chartData: {},
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bar Graph',
          },
        },
        scales: {
          x: {
            barThickness: 5, // Adjusted width of the bars
          },
        },
      },
    };
  },

  created() {
    this.chartData = this.propsChartData;
  },

  mounted() {
    const ctx = document.getElementById('barChart1').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: this.chartData,
      options: this.chartOptions,
    });
  },

  methods: {},
};
</script>
