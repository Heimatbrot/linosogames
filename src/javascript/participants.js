/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

var password;
var skeypass1secret = "Linus";
var cacheExpiration = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

// Check if password is stored in local storage
if (localStorage.getItem("password") && localStorage.getItem("timestamp")) {
  var currentTime = new Date().getTime();
  var storedTime = localStorage.getItem("timestamp");
  if (currentTime - storedTime < cacheExpiration) {
    password = localStorage.getItem("password");
  } else {
    localStorage.removeItem("password");
    localStorage.removeItem("timestamp");
    password = prompt('Ohne Passwort kommst du hier nicht weiter!\n','');
  }
} else {
  password = prompt('Ohne Passwort kommst du hier nicht weiter!\n','');
}

if (password == skeypass1secret) {
  localStorage.setItem("password", password);
  localStorage.setItem("timestamp", new Date().getTime());
} else {
  window.location = "../../index.html";
}




//table

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until no switching has been done: */
  while (switching) {
     // Start by saying: no switching is done:
     switching = false;
     rows = table.rows;
     /* Loop through all table rows (except the first, which contains table headers): */
     for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare, one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place, based on the direction, asc or desc: */
        if (dir == "asc") {
           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
           }
        } else if (dir == "desc") {
           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
           }
        }
     }
     if (shouldSwitch) {
        /* If a switch has been marked, make the switch and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
     } else {
        /* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
           dir = "desc";
           switching = true;
        }
     }
  }
}
function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  console.log(input, filter, table, tr)

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
           tr[i].style.display = "";
        } else {
           tr[i].style.display = "none";
        }
     }
  }
}

var participants = [['Linus', 3, 0, 2, 1], ['Sean', 3, 0, 0, 2], ['Lara', 3, 1, 1, 0], ['Nicole', 3, 1, 1, 1], ['Simon', 3, 1, 1, 0], ['Caroline', 3, 0, 2, 1], ['Valerio', 3, 1, 0, 1], ['Marc', 3, 1, 1, 1], ['Sofia', 3, 2, 0, 0], ['Jana', 3, 0, 0, 1],['Gian', 0, 0, 0, 0],['Livio', 2, 1, 0, 0],['Andri', 2, 1, 1, 0]];



  for (var i = 0; i < participants.length; i++) {
    var row= document.getElementById("myTable").insertRow()
    var player = row.insertCell()
    var participations = row.insertCell()
    var bronze = row.insertCell()
    var silver = row.insertCell()
    var gold = row.insertCell()
  player.innerHTML = participants[i][0]
  participations.innerHTML = participants[i][1]
  bronze.innerHTML = participants[i][2]
  silver.innerHTML = participants[i][3]
  gold.innerHTML = participants[i][4]
  }
  sortTable(2)
  sortTable(2)
  sortTable(3)
  sortTable(3)
  sortTable(4)
  sortTable(4)
  sortTable(1)
  sortTable(1)
