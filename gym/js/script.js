var options = {
    series: [{
      name: 'Income',
      data: [30, 22, 18, 15, 20, 15, 11, 20, 22, 17, 14, 25] // dalam ribuan
  }],
  chart: {
      type: 'bar',
      height: 250
  },
  plotOptions: {
      bar: {
          columnWidth: '80%',
          distributed: true,
          borderRadius: 20
      }
  },
  fill: {
      type: 'pattern',
      pattern: {
          style: ['slantedLines','slantedLines','slantedLines','slantedLines','slantedLines','slantedLines','slantedLines','slantedLines','slantedLines','slantedLines','slantedLines','slantedLines'],
          width: 6,
          height: 6,
          strokeWidth: 2
      }
  },
  colors: [
      '#D1D5DB', '#D1D5DB', '#D1D5DB', '#D7FC01', 
      '#D1D5DB', '#D1D5DB', '#D1D5DB', '#D1D5DB', 
      '#D1D5DB', '#D1D5DB', '#D1D5DB', '#D1D5DB'
  ],
  dataLabels: {
      enabled: false
  },
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
          style: {
              colors: '#6B7280',
              fontSize: '12px'
          }
      }
  },
  tooltip: {
      enabled: true,
      y: {
          formatter: function (val) {
              return "$" + (val * 1000).toLocaleString(); // Konversi ke format mata uang
          }
      }
  }
  };
  
  
  
  
  var options2 = {
    chart: {
      type: 'donut'
    },
    series: [30, 20, 35, 15],
    labels: ['Basic Members', 'Premium Members', 'Product Sales', 'Family Members'],
    stroke: {
      show: true,
      width: 5, 
      colors: ['#111'] 
    },
    plotOptions: {
      pie: {
        donut: { 
        },
        expandOnClick: false, 
        customScale: 1, 
        offsetX: 0,
        offsetY: 0
      }
    },
    fill: {
      colors: ['#777777', '#D7FC01', '#222222', '#444444'] 
    },
    dataLabels: {
      enabled: false ,
      style: {
        colors: ['#ffffff'], 
        fontSize: '12px'
      }
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: '#ffffff', // Warna teks pada legend
        useSeriesColors: false
      }
    }
  };
  
  
  
    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    chart2.render();
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  
  
  
  //dropdown sidebar
  function toggleDropdown(menu) {
    const dropdown = document.querySelector(`[data-menu="${menu}"]`);
    dropdown.classList.toggle("hidden");
  }
  
  
  //popup
  document.addEventListener("DOMContentLoaded", function () {
      const trashBtns = document.querySelectorAll(".trashBtn");
      const popup = document.getElementById("popup");
      const cancelBtn = document.getElementById("cancelBtn");
  
      
      trashBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
              popup.classList.remove("hidden");
          });
      });
  
      cancelBtn.addEventListener("click", function () {
          popup.classList.add("hidden");
      });
  
  
      popup.addEventListener("click", function (event) {
          if (event.target === popup) {
              popup.classList.add("hidden");
          }
      });
  });
  
  // start: Sidebar
  document.addEventListener("DOMContentLoaded", function () {
      const sidebarToggle = document.querySelector('.sidebar-toggle');
      const sidebarOverlay = document.querySelector('.sidebar-overlay');
      const sidebarMenu = document.querySelector('.sidebar-menu');
      const main = document.querySelector('.main');
  
      function closeSidebar() {
          main.classList.remove('active');
          sidebarOverlay.classList.add('hidden');
          sidebarMenu.classList.add('-translate-x-full');
      }
  
      function toggleSidebar() {
          main.classList.toggle('active');
          sidebarOverlay.classList.toggle('hidden');
          sidebarMenu.classList.toggle('-translate-x-full');
              // kasih delay sedikit biar transisi selesai dulu
              setTimeout(() => {
                if (chartBar && chartBar.resize) chartBar.resize();
                if (chartDonut && chartDonut.resize) chartDonut.resize();
              }, 300); // sesuai durasi transisi
            
      }
  
      sidebarToggle.addEventListener('click', function (e) {
          e.preventDefault();
          requestAnimationFrame(toggleSidebar);
      });
  
      sidebarOverlay.addEventListener('click', function (e) {
          e.preventDefault();
          requestAnimationFrame(closeSidebar);
      });
      
      let initialChartWidth;
  
  document.addEventListener("DOMContentLoaded", function () {
      const chartContainer = document.querySelector("#chart-container");
      initialChartWidth = chartContainer.clientWidth; // simpan ukuran awal
  });
  
  function resizeChart() {
      const chartContainer = document.querySelector("#chart-container");
      const isSidebarOpen = !sidebarMenu.classList.contains("-translate-x-full");
  
      if (isSidebarOpen) {
          // Sidebar sedang terbuka → kembali ke ukuran semula
          chartContainer.style.maxWidth = initialChartWidth + "px";
      } else {
          // Sidebar ditutup → chart melebar tapi dibatasi
          chartContainer.style.maxWidth = "85%"; // atau ganti sesuai kebutuhan
      }
  
      // Update chart size (jika pakai ApexCharts atau sejenis)
      if (chart && chart.resize) {
          chart.resize(); // pakai chart.updateOptions kalau resize() tidak ada
      }
  }
  
      
  
      window.addEventListener("resize", resizeChart);
  
      window.addEventListener('resize', function () {
          if (window.innerWidth < 1024) {
              closeSidebar();
          }
      });
      if (window.innerWidth < 1024) {
          closeSidebar();
      }
      document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (item) {
          item.addEventListener('click', function (e) {
              e.preventDefault();
              const parent = item.closest('.group');
  
              if (parent.classList.contains('selected')) {
                  parent.classList.remove('selected');
              } else {
                  document.querySelectorAll('.sidebar-dropdown-toggle').forEach(i => {
                      i.closest('.group').classList.remove('selected');
                  });
                  parent.classList.add('selected');
              }
          });
      });
  });
  
  // end: Sidebar
  
  // start: Popper
  const popperInstance = {}
  document.querySelectorAll('.dropdown').forEach(function (item, index) {
      const popperId = 'popper-' + index
      const toggle = item.querySelector('.dropdown-toggle')
      const menu = item.querySelector('.dropdown-menu')
      menu.dataset.popperId = popperId
      popperInstance[popperId] = Popper.createPopper(toggle, menu, {
          modifiers: [
              {
                  name: 'offset',
                  options: {
                      offset: [0, 8],
                  },
              },
              {
                  name: 'preventOverflow',
                  options: {
                      padding: 24,
                  },
              },
          ],
          placement: 'bottom-end'
      });
  })
  document.addEventListener('click', function (e) {
      const toggle = e.target.closest('.dropdown-toggle')
      const menu = e.target.closest('.dropdown-menu')
      if (toggle) {
          const menuEl = toggle.closest('.dropdown').querySelector('.dropdown-menu')
          const popperId = menuEl.dataset.popperId
          if (menuEl.classList.contains('hidden')) {
              hideDropdown()
              menuEl.classList.remove('hidden')
              showPopper(popperId)
          } else {
              menuEl.classList.add('hidden')
              hidePopper(popperId)
          }
      } else if (!menu) {
          hideDropdown()
      }
  })
  
  function hideDropdown() {
      document.querySelectorAll('.dropdown-menu').forEach(function (item) {
          item.classList.add('hidden')
      })
  }
  function showPopper(popperId) {
      popperInstance[popperId].setOptions(function (options) {
          return {
              ...options,
              modifiers: [
                  ...options.modifiers,
                  { name: 'eventListeners', enabled: true },
              ],
          }
      });
      popperInstance[popperId].update();
  }
  function hidePopper(popperId) {
      popperInstance[popperId].setOptions(function (options) {
          return {
              ...options,
              modifiers: [
                  ...options.modifiers,
                  { name: 'eventListeners', enabled: false },
              ],
          }
      });
  }
  // end: Popper
  