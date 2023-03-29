const site = () => 'NorthStar eCommerce - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

// eslint-disable-next-line no-console
console.log(site());

function openTab(evt) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(this.id).style.display = "block";
    evt.currentTarget.className += " checked";
  }

  






  console.log("End of JS");