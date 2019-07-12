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
      return md.phone()!=null;
  }
  
  function populateMobileSettings()
  {
    //nothing here
  }

  function populateDesktopSettings()
  {
    var width = $(window).width();
    if (width > 800)
    {
      $(".mainText").css('width', 600);
    }
    else
    {
      $(".mainText").css('width', "90%");
    }
  }
  
  function getTDCellCode(imageNumber)
  {
    return `<td><img class="mainTable" src="image`+ imageNumber.toString() +`.jpg"></td>`;

  }
  function populateTables()
  {
    var idMin = parseInt($("#mainTable").attr('idMin'));
    var idMax = parseInt($("#mainTable").attr('idMax'));
    var htmlCode = '';
    for (id = idMin; id <= idMax; id+=2)
    {

      htmlCode +=`<tr>`;
      htmlCode += getTDCellCode(id);

      if (id < idMax)
      {
        htmlCode += getTDCellCode(id + 1);
      }
      else
      {
        htmlCode += `<td></td>`;
      }

      htmlCode += `</tr>`;
    }

    $("#mainTable").html(htmlCode);

  }
  
  function populateCSSSettings()
  {
    if (isMobile())
    {
      populateMobileSettings();
    }
    else
    {
      populateDesktopSettings();
    }
  }    

  $( document ).ready(function() 
  {
    populateMenu();
    populateCSSSettings();
    populateTables();
  }
  );
  
  $( window ).resize(function() 
  {
    populateCSSSettings();
  }
  );
