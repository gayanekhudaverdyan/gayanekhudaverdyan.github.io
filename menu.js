  function populateMenu()
  {
    var menuTag = $("#menu").attr('tag');
    var link = `../index.html`;
    if (menuTag == "main")
    {
      link = ``;
    }

    var htmlCode = `
      <table class="header">
        <tr>
          <td class="header" bgcolor="#000000"><a class = "header" href="`+ link + `">Главная&nbsp;страница</a></td>
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
    return `<td class="mainTable"><img class="mainTable" src="image`+ imageNumber.toString() +`.jpg"></td>`;

  }
  function populateTables()
  {
    var idMin = parseInt($("#mainTableId").attr('idMin'));
    var idMax = parseInt($("#mainTableId").attr('idMax'));
    var htmlCode = `<table class="mainTable">`;

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
    htmlCode += `</table>`;
    
    $("#mainTableId").html(htmlCode);

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
