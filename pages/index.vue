<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row pt-4 mb-2">
        <div class="col-sm-6">
          <h3>Dashboard Monitoring</h3>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              Home
            </li>
            <li class="breadcrumb-item active">
              Dashboard
            </li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <div class="row">
            <div class="col-lg-6">
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>{{ totalPelamar() }}</h3>
                  <p>Total Pelamar</p>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>Backend Dev</h3>
                  <p>Lowongan paling banyak dibutuhkan</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header border-0">
                  <div class="d-flex justify-content-between">
                    <h3 class="card-title">Statistik Lowongan</h3>
                  </div>
                </div>
                <div class="card-body">

                  <div class="position-relative mb-4">
                    <canvas id="chartBar1" style="min-height: 340px; height: 340px; max-height: 340px; max-width: 100%;"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
        
        <div class="col-lg-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header border-0">
                  <div class="d-flex justify-content-between">
                    <h3 class="card-title">Produktivitas upload lowongan 2022</h3>
                  </div>
                </div>
                <div class="card-body">

                  <div class="position-relative mb-4">
                    <canvas id="chartBar" height="110"></canvas>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header border-0">
                  <div class="d-flex justify-content-between">
                    <h3 class="card-title">Demograpi Gender Pelamar 2022</h3>
                  </div>
                </div>
                <div class="card-body">

                  <div class="position-relative mb-4">
                    <canvas id="chartGender" height="108"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-0">
              <div class="d-flex justify-content-between">
                <h3 class="card-title">Statistik Pendidikan</h3>
              </div>
            </div>
            <div class="card-body">

              <div class="position-relative mb-4">
                <canvas id="chartBar3" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-0">
              <div class="d-flex justify-content-between">
                <h3 class="card-title">Statistik Keahlian Pelamar</h3>
              </div>
            </div>
            <div class="card-body">

              <div class="position-relative mb-4">
                <canvas id="chartBar4" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrSetLowongan: [{
        index: 0,
        label: 'Pelamar',
        data: [86,11,10,10],
        borderColor: "red",
        fill: false
      },{
        index: 1,
        label: 'Usia Pelamar',
        data: [18,18,22,30],
        borderColor: "green",
        fill: false
      },{
        index: 2,
        label: 'Jenis Lowongan',
        data: [30,20,50,70],
        borderColor: "blue",
        fill: false
      }]
    };
  },
  mounted() {
    this.produktifitasLowongan()
    this.statistikLowongan()
    this.statistikPendidikan()
    this.statistikKeahlian()
    this.totalPelamar()
    this.demograpiGender()
  },
  methods:{
    demograpiGender() {
      var xValues = ["Perempuan", "Laki-laki"];
      var yValues = [70, 30];
      var barColors = [
        "#b91d47",
        "#00aba9"
      ];

      new Chart("chartGender", {
        type: "doughnut",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        }
      });
    },
    totalPelamar() {
      var cekdataPelamar = this.arrSetLowongan.find(item =>item.index === 0)
      
      const sum = cekdataPelamar.data.reduce(add, 0);

      function add(accumulator, a) {
        return accumulator + a;
      }

      return sum
    },
    produktifitasLowongan() {
      var xValues = ["Backend Dev", "Java Dev", "Frontend Dev", "Mobile Dev"];
      var yValues = [44, 30, 50, 60];
      var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9"
      ];

      new Chart("chartBar", {
        type: "doughnut",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        }
      });
    },
    statistikLowongan() {
      var xValues = ['Backend Dev','Java Dev','Frontend Dev','Mobile Dev'];

      new Chart("chartBar1", {
        type: "line",
        data: {
          labels: xValues,
          datasets: this.arrSetLowongan
        },
        options: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              fontColor: "#000080",
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    },
    statistikPendidikan() {
      var ctx = document.getElementById("chartBar3").getContext("2d");
      var mybarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['S1', 'D3', 'SMK'],
          datasets: [{
            backgroundColor: "#000080",
            data: [90,0,0]
          }, {
            backgroundColor: "#d3d3d3",
            data: [0,70,0]
          }, {
            backgroundColor: "#add8e6",
            data: [0,0,60]
          }]
        },

        options: {
          legend: {
            display: false
          }
        }
      });
    },
    statistikKeahlian() {
      var ctx = document.getElementById("chartBar4").getContext("2d");
      var xValues = ['HTML', 'CSS', 'Javascript', 'PHP']
      var yValues = [55, 49, 36, 50]
      var barColors = ["rgba(0,0,255,0.5)", "rgb(245, 172, 154)","rgb(235, 188, 134)","rgb(212, 237, 154)"]
      var mybarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }
          ]
        },

        options: {
          legend: {
            display: false
          }
        }
      });
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    background-color: #f4f6f9;
  }
  .breadcrumb {
    background-color: #f4f6f9;
  }
</style>
