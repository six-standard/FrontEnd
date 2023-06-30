const date = new Date();
const firstdate = new Date((date.getFullYear())+'-'+(Number(date.getMonth())+1)+'-1').getDay();
const caption = document.querySelector("caption");
const url = "https://cors-anywhere.herokuapp.com/https://dsmhs.djsch.kr/scheduleH/list.do?m=0203&s=dsmhs";
caption.innerText = (Number(date.getMonth())+1) + "월 학사일정";
let days = [];
for(let i = 0; i<=34; i++) { days[i] = document.querySelector("#d" + i); }

switch(date.getMonth()+1) {
    case 2:
        for(let i = 1; i<=28; i++) { days[i-1+firstdate].innerText = i+1; if(date.getDate()==i) days[i-1+firstdate].className="today"; }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
        for(let i = 1; i<=30; i++) { days[i-1+firstdate].innerText = i; if(date.getDate()==i) days[i-1+firstdate].className="today"; }
      break;
    default:
        for(let i = 1; i<=31; i++) { days[i-1+firstdate].innerText = i; if(date.getDate()==i) days[i-1+firstdate].className="today"; }
      break;
}

fetch(url)
 .then((response) => response.text())
 .then(data => {
    const cal = data.split("</tr>")
    const month = date.getMonth();
    let events = []
    for(let i=0; i < cal.length; i++) {
      if(cal[i].includes("행사내용")) {
        events.push(cal[i]
          .replaceAll("\n", "")
          .replaceAll("</table>", "")
          .replaceAll("            ", "")
          .replaceAll("</div>", "")
          .replaceAll("<dl class='event'>", "")
          .replaceAll("<dt>", "")
          .replaceAll("</dt>", "")
          .replaceAll("<ul>", "")
          .replaceAll("a href='#insSchl' onClick=\"javascript:setData(", "")
          .replaceAll(",'null'", "")
          .replaceAll("&nbsp;", "")
          .replaceAll("'", "")
          .replaceAll(")\"", "")
          .replaceAll("</dd>", "")
          .replaceAll("</li>", "")
          .replaceAll("</ul>", "")
          .replaceAll("\t\t\t\t\t\t\t\t\t", "")
          .replaceAll("</a>", "")
          .replaceAll("<dd", "")
          .replaceAll("<div class=calendar>", "")
          .replaceAll("</dl>", "")
          .replaceAll("의 학교일정에 대한  달력 정보(일,월,화,수,목,금,토)를 제공합니다.", "")
          .replaceAll("<div class=date>", "")
          .replaceAll("<col width=10%>", "")
          .replaceAll("<th scope=\"col\">", "")
          .replaceAll("\t\t\t\t\t\t\t행사내용\t\t\t>", "")
          .replaceAll("li id=date", "")
          .replaceAll("</th>", "")
          .replaceAll("<thead>", "")
          .replaceAll("<colgroup></colgroup>", "")
          .replaceAll("\t\t\t\t\t<span>", "")
          .replaceAll("</span><table border=0 cellspacing=0 cellpadding=0 class=calendar_table><caption", "")
          .replaceAll("</caption>\t\t\t<tr>", "")
          .replaceAll("일월화수목금토", "")
          .replaceAll("\r\t\t\t\r\t\t\t\r\t\t\t\r\t\t\r\t\t<br>\r\t\t<div id=\"deleteByTheMonth_Area\"  style=\"display:none;\">\r\t\t\t<div class=\"tableTy2\" id=\"delDiv\">\r\t\t\t\r\t\t\t\r\t\t\t<div class=\"btnGrp\">\r\t\t\t\t<a href=\"javascript:deleteSchlData();\"><span>실행</span>>\r\t\t\t\t<a href=\"javascript:hideDeleteByTheMonth();\"><span>닫기</span>>\r\t\t\t\r\t\t\r\t\t\r\t\t\t<input type=\"hidden\" name=\"sdate\" />\r\t\t\t<input type=\"hidden\" name=\"edate\" />\r\t\t\t<input type=\"hidden\" name=\"subject\" />\r\t\t\r\t\t<iframe name=\"schdlCalFrm\" src=\"\" width=\"0\" height=\"0\" style=\"display:none\" title=\"행사일정\"></iframe>\r\t</form>\r\t\r\t\r\t\r</body>\r\t\t\t\t\r\r\t\r\t<!-- 서브 페이지 내용 끝 -->\r           \t</section>\r<!-- //sub Content 끝 -->\r\r        \r\t\t\t\t\r\t\t\t\t<!-- //컨테이너 --> \r\t        \t<!-- footer -->\r\t        \t\r\r\r\r\r\r\r<script>\r//관련사이트 (바로가기)\rfunction goSite(a)\r{\t\r \tvar obj = document.getElementById(ice+a);\r \tvar strSite = obj.value;\r\r \tif(strSite != \"\")\r \t\twindow.open(strSite);\r \telse\r  \t\talert(\"관련사이트를 선택해주세요\");\r}\r</script>\r\t\r\t<!-- footer -->\r        <footer>\r<div class=\"area_footer\">\r    <div class=\"box_footer\">\r        <div class=\"footer_link clearfix\">\r<button type=\"button\">Footer Link</button>\r\r    <li class=\"point\"><a href=\"/privacy.do\">개인정보처리방침>\r    <li><a href=\"/copyright.do\">저작권보호정책>\r    <li><a href=\"/policy.do\">이용약관>\r    <li><a href=\"/web/acc/info.do\">웹접근성안내>\r\t\t\t\t\t\t\t<li><a href=\"/videoInfo.do\">영상정보처리기기운영·관리방침>\r\r        \r\t\t\t\t\t\t\t<div class=\"box_info clearfix\">\r\t\t\t\t\t\t\t<address>\r \t\t\t\t<address>(34111) 대전광역시 유성구 가정북로 76(장동 23-9)<br/>Tel: 교무실042-866-8822 (08:30 ~ 16:30), 행정실042-866-8885 (08:30 ~ 16:30), 당직실042-866-8888 (평일 야간, 휴일)</br>취업지원센터:전화:042-866-8843, Fax: 행정실 042-863-4308</br>Fax: 교무실:042-867-9900, 취업센터:042-866-8844, 사업자 등록 번호: 3148301600, 기관 메일: dsmhs@korea.krddress>\r\t\t\t\t\t\t    ddress>\r\t\t\t\t\t\t\t\r\t\t\t\t\t\t\t<p class=\"copyright\">Copyrightⓒ 대덕소프트웨어마이스터고등학교. All rights reserved.</p>   \r          <!--관련링크-->\r\r    \r\r        </footer>\r    <!-- // footer -->\r\t\r\r\r\r\r\t\t\t\t<!-- // footer --> \r\t\t\t\r\t\t\r\t</body>\r</html>\r\r", "")
          );
      }
    }
    console.log(events);
    let now_events = events[month-2].split(">");
    for(let i = 2; i<now_events.length; i++) {
      console.log(now_events[i]);
    }
 })
