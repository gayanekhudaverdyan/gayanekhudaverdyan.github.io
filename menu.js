  function getLink(path)
  {
    var menuTag = $("#menu").attr('tag');
    var link = `../` + path;
    if (menuTag == "main")
    {
      link = path;
    }
    return link
  }

  function populateMenu()
  {
    linkToMain = getLink("index.html")
    linkToAbout = getLink("about.html")

    var htmlCode = `
      <div class="menu">
        <div class="header">
          <a class = "header" href="`+ linkToMain + `">Все&nbsp;рецепты</a>
        </div>
        <div class="header">
          <a class = "header" href="`+ linkToAbout + `">О&nbsp;сайте</a>
        </div>
      </div>
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
  function populateTables(idKey)
  {
    var idMin = parseInt($(idKey).attr('idMin'));
    var idMax = parseInt($(idKey).attr('idMax'));
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
    $(idKey).html(htmlCode);

  }
  
  function populateAllTables()
  {
    populateTables("#mainTableId");
    populateTables("#mainTableId1");
    populateTables("#mainTableId2");
    populateTables("#mainTableId3");
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
    populateAllTables();
  }
  );
  
  $( window ).resize(function() 
  {
    populateCSSSettings();
  }
  );
