  function getLink(path)
  {
    var menuTag = $("#menu").attr('tag');
    var link = `../` + path;
    if (menuTag == "main")
    {
      link = `/` + path;
    }
    return link
  }

  function populateMenu()
  {
    linkToMain = getLink("")
    linkToAbout = getLink("about.html")
    linkToKnitting = "https://goo.gl/photos/ZNStASHPyEdkYbuK6"

    var htmlCode = `
      <div class="menu">
        <div class="header">
          <a class = "header" href="`+ linkToMain + `">Все&nbsp;рецепты</a>
        </div>
        <div class="header">
          <a class = "header" href="`+ linkToAbout + `">О&nbsp;сайте</a>
        </div>
        <div class="header">
          <a class = "header" href="`+ linkToKnitting + `">Вязание</a>
        </div>
       
      </div>
    `;

    $("#menu").html(htmlCode);
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
    maxWidth = 800;
    stretchingCoeff = 0.9;

    var width = $(window).width();
    
    if (width > maxWidth)
    {
      var textWidth = maxWidth * stretchingCoeff;
      var padding = (width - textWidth) / 2
      $(".mainText").css('width', textWidth);
      $(".mainText").css('padding-left', padding);
      }
    else
    {
      stretchingCoeffPercent = (stretchingCoeff * 100).toString()+ '%';
      paddingPercent = ((1 - stretchingCoeff) / 2 * 100).toString()+ '%';
      $(".mainText").css('width', stretchingCoeffPercent);
      $(".mainText").css('padding-left', paddingPercent);
    }
  }    

  function populateTitleName(document)
  {
    stringTitle=$("h1").text();
    stringTitle += $("div.mainText h2").text();
    document.title = stringTitle;
  }
  
  function populateSpoilers()
  {
    var spoilerCode = `
      <div class="spoiler-head">таблица мер и весов<br>
      </div>
      <div class="spoiler-body">
        <dl>
          <dt><b>стакан</b></dt>
          <dd>вода: 300 гр</dd>
          <dd>мука: 180 гр</dd>
          <dd>сахар: 280 гр</dd>
          <dd>растительное масло: 270 гр</dd>
          <dd>сгущенное молоко: 360 - 380 гр</dd>
          <dd>грецкие орехи: 110 гр</dd>
        </dl>
        <dl>
          <dt><b>столовая ложка</b></dt>
          <dd>сахар: 20 гр</dd>
          <dd>растительное масло: 10 гр</dd>
          <dd>мука (с горкой): 40 гр</dd>
          <dd>мед: 30 гр</dd>
        </dl>
        <dl>
        <dt><b>яйцо</b><dt>
        <dd>без скорлупы: 53-55 гр</dd>
        <dd>желток: 20 гр</dd>
        <dd>белок: 33-35 гр</dd>
        </dl>
        <dl>
          <dt><b>мука</b></dt>
          <dd>Хочу обратить ваше внимание на количество муки. Его лучше недоложить, чем переложить. Это касается тех видов теста, которые должны не прилипать к рукам и вам надо их раскатать. Надо отвесить всю муку, которую вам предлагают и, замешивая тесто, оставить грамм 50 про запас. Дело в том, что даже если вы используете одну и ту же муку, то, например, через две недели ее может уйти значительно меньше (мука отлежится).</dd>
        </dl>
        
      </div>
      <br>
    `
    $("div.consist").each(function(){
        $(spoilerCode).insertAfter(this);
    });    
  }

  $( document ).ready(function() 
  {
    populateTitleName(document);
    populateMenu();
    populateCSSSettings();
    populateAllTables();
    populateSpoilers()
  }
  );
  
  $( window ).resize(function() 
  {
    populateCSSSettings();
  }
  );
  
  $( function() 
  {
    $('.spoiler-body').hide();
    $('.spoiler-head').click( function()
    {
        $(this).next().slideToggle('normal');
    })
  });  
