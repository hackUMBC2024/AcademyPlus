<template>
      <h1>Career Projections</h1>
  <div id="salary">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      width="999px"
    />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useGlobalStore } from "@/stores/store";
import { Bar } from 'vue-chartjs';

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Career #1', 'Career #2', 'Career #3'],
        datasets: [
          {
            label: 'Projected Salary',
            data: [40, 20, 12],
            backgroundColor: 'rgba(62, 156, 53, 0.6)', 
            borderColor: 'rgba(62, 156, 53, 1)',
            borderWidth: 1
          }
        ]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  },
  computer: {
    ...mapStores(useGlobalStore),
  }
};
</script>

<style scoped>

</style>
