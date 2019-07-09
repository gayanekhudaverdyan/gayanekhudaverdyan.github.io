  function populateMenu()
  {
    var htmlCode = `
      <table class="header">
        <tr>
          <td class="header" bgcolor="#000000"><a class = "header" href="../">Главная&nbsp;страница</a></td>
          <td bgcolor="#000000"></td>
        </tr>
      </table>
    `;

    $("#menu").html(htmlCode);
  }
  
  function isMobile()
  {
      var md = new MobileDetect(window.navigator.userAgent);
      return md.mobile()!=null;
  }
  
  function populateMobileSettings()
  {
    var font = 30;
    $(".mainText").css('font-size', font);
  }
  
  $( document ).ready(function() 
  {
    populateMenu();
    alert(isMobile());
    //populateMobileSettings();
  }
   );
  
