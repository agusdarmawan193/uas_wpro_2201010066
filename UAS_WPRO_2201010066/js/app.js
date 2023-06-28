// const weatherapi = "http://api.weatherapi.com/v1/current.json?key=a1adf31889df45aba1933509232406&q=bali&aqi=no";
const weatherapi = "http://api.weatherapi.com/v1/current.json?key=a1adf31889df45aba1933509232406&aqi=no";
const keyword = document.querySelector(".keyword");

const btnsearch = document.querySelector(".btnsearch");

const container = document.getElementById('container');

btnsearch,addEventListener('click', function() {
      fetch(`${weatherapi}&q=${keyword.value}`)
      .then((res) => res.json())
      .then((data) => {
            console.log(data);
            let element = ''; 
   
            element = showElement(data);  
   
            container.innerHTML = element;
      });
})

 function showElement(data) {
   return` <h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
   <div class="box">
      <img src="https:${data.current.condition.icon}" alt="">
      <h1>${data.current.temp_c} 'C</h1>
   </div>
   <p>${data.current.last_updated}</p>
   <p>${data.current.condition.text}</p>'`;
}