<template>
  <div>
    <h1>Career Projections</h1>
    <div id="salary">
      <Bar
        id="bar-chart"
        :options="barChartOptions"
        :data="barChartData"
        width="999px"
      />
    </div>
    <div id="line-chart">
      <Line
        id="line-chart-id"
        :options="lineChartOptions"
        :data="lineChartData"
        width="999px"
      />
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useGlobalStore } from "@/stores/store";
import { Bar, Line } from 'vue-chartjs';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register Chart.js components

export default {
  name: 'BarLineChart',
  components: { Bar, Line },
  data() {
    return {
      // Bar Chart Data
      barChartData: {
        labels: ['Career #1', 'Career #2', 'Career #3'],
        datasets: [
          {
            label: 'Projected Salary',
            data: [40000, 20000, 12000],
            backgroundColor: 'rgba(62, 156, 53, 0.6)', 
            borderColor: 'rgba(62, 156, 53, 1)',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Salary ($)'
            }
          }
        }
      },
      
      lineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Monthly Growth',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Growth'
            }
          }
        }
      },
    };
  },
  computed: {
    ...mapStores(useGlobalStore),
  }
};
</script>

<style scoped>
#salary, #line-chart {
  width: 100%;
  height: 400px;
}

#line-chart {
  margin-top:50px;
}
</style>
