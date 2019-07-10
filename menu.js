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
    var font = 40;
    $(".mainText").css('font-size', font);
    $(".header").css('font-size', font);
    $(".mainText").css('padding-left', "5%");
    $(".mainText").css('width', "90%");
  }

  function populateDesktopSettings()
  {
    var font = 20;
    $(".mainText").css('font-size', font);
    $(".header").css('font-size', font);
  }
  
  $( document ).ready(function() 
  {
    populateMenu();

    if (isMobile())
    {
      populateMobileSettings();
    }
    else
    {
      populateDesktopSettings();
    }
  }
   );
  
