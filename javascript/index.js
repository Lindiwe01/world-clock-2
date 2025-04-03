setInterval(function (updateTime) {
  //johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  johannesburgTime = moment().tz("Africa/Johannesburg");
  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //nairobi
  let nairobiElement = document.querySelector("#nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = nairobiElement.querySelector(".time");
  nairobiTime = moment().tz("Africa/nairobi");
  nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
  nairobiTimeElement.innerHTML = nairobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

function updatecity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = "
  <div class="city">
  <div>
    <h2>+[cityName]</h2>
    </div>
  </div>";
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updatecity);

