$(document).ready(function(){
  $.post("http://localhost:3000/getList",{}, function(data){
      console.log(data);
      var setName = [];
     
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
       type: 'horizontalBar',
      data: {
        labels: data.places,
        datasets: [{
            label: "Популярное",
            backgroundColor: 'rgb(252, 168, 0)',
            borderColor: 'rgb(252, 168, 0)',
            data: data.times,
            borderWidth: 2
            
        }]
    },
    options: {}
})
      
  });
});