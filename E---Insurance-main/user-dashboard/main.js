document.addEventListener("DOMContentLoaded", function() {
    const sidenav = document.querySelectorAll(".sidenav");
    const sidenavInstance = M.Sidenav.init(sidenav);
  });

  /**inputs */
  
  $(document).ready(function() {
    M.updateTextFields();
  });


  /**profile tabs */

   

  $(document).ready(function(){
    $('.tabs').tabs();
  });


  /*Annuals*/
   $(document).ready(function(){
    $('select').formSelect();
  });



  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });