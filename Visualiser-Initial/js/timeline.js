var events=data;

function list(body){
    return`
    <li>
         </div>
         <!-- begin timeline-time -->
         <div class="timeline-time">
            <span class="time">${body.Date}</span>
         </div>
         <!-- end timeline-time -->
         <!-- begin timeline-icon -->
         <div class="timeline-icon">
            <a href="javascript:;">&nbsp;</a>
         </div>
         <!-- end timeline-icon -->
         <!-- begin timeline-body -->
         <div class="timeline-body">
         <div class="timeline-content">
               <p>
                  <b><span>${body.Name}</span></b><br> 
                  <b><span>${body.Country}</span></b><br>
                  <b><span>${body.Event}</span></b><br>
               </p>
          </div>
         <p class="m-t-20">
             <img src='${body.Imglink}' alt="" width=50% height=50%>
          </p>
          <div class="timeline-footer">
            <p> 
              ${body.Summary}
            </p>
          </div>
    `
}

document.getElementById("importJson").innerHTML = `
${events.map(list).join('')}
`