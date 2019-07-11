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
    //var font = 13;
    //$(".mainText").css('font-size', font);
    //$(".header").css('font-size', font);
    $(".mainText").css('padding-left', "5%");
    $(".mainText").css('width', "90%");
  }

  function populateDesktopSettings()
  {
    //var font = 20;
    //$(".mainText").css('font-size', font);
    //$(".header").css('font-size', font);
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
    
    populateTables();
  }
   );
  
