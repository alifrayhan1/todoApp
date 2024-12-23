const date123 =document.querySelector('#date123');

const today = new Date();
const date = today.getDate();
const dayOfWeek = today.getDay(); 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayOfWeek];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];  
const month = monthNames[today.getMonth()];
date123.innerHTML = `${month} ${date},${dayName}`;

