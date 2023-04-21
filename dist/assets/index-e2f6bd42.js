(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const y=[{TodayTodo:{todolist:[{todo:"일찍일어나기",finished:!1},{todo:"과제를 완성하는",finished:!1},{todo:"옴나리송송개나맆던 밤오늘하루",finished:!1}],mainColor:"yellow"}},{개발은재밌어:{todolist:[{todo:"코딩과제 마무리하기",finished:!1},{todo:"Html Css javascript 타스",finished:!1},{todo:"리액트 , 리덕스 , 상태관리",finished:!1}],mainColor:"blue"}},{감성하루할일:{todolist:[{todo:"야식은 역시 치킨이쥐",finished:!1},{todo:"검은 화면 빼곡한 코드 하루가 지나면 남아있나",finished:!1},{todo:"옴나리송송개나맆던 밤오늘하루 저기저달 웹 팟 세미나",finished:!1}],mainColor:"green"}},{"기대되는 솝활동":{todolist:[{todo:"솝커톤",finished:!1},{todo:"웹엠티",finished:!1},{todo:"앱잼",finished:!1}],mainColor:"pink"}},{"얻어가야하는 일":{todolist:[{todo:"프로젝트 무조건",finished:!1},{todo:"삼겹살에 쏘주는 진리지⏰",finished:!1}],mainColor:"aqua"}}],r={setItem:(o,a)=>localStorage.setItem(o,a),getItem:o=>localStorage.getItem(o),removeItem:o=>localStorage.removeItem(o),clearAll:()=>localStorage.clear(),getItemReturnParse:o=>{const a=localStorage.getItem(o);return JSON.parse(a)}},f=()=>{const o=document.querySelector(".chageNum");let a=0;r.getItemReturnParse("todoData").forEach(n=>{for(let e in n)n[e].todolist.forEach(i=>{i.finished||(a+=1)})}),o.innerHTML=a},m=o=>{const a=document.querySelector("#temp-todo"),d=document.querySelector("#todoSection");for(;d.firstChild;)d.removeChild(d.firstChild);const n=document.createElement("div");n.innerHTML=a.innerHTML,o.forEach(e=>{for(let t in e){const i=e[t],s=n.cloneNode(!0),h=s.querySelector(".todoList");i.todolist.map(l=>{let c=document.createElement("li");c.innerHTML=`<input id="${t+l.todo}" type="checkbox" class="heart" value="${l.todo}" ${l.finished?"checked":""} >
          <label for="${t+l.todo}">${l.todo}</label>`,c.className="todo",h.appendChild(c)});let u=s.innerHTML;u=u.replace("{todoCategory}",t),u=u.replace("{mainColor}",i.mainColor),s.innerHTML=u;const g=s.querySelectorAll(".heart");Array.from(g).map(l=>{l.addEventListener("change",function(c){const L=c.target.checked,p=e[t].todolist.findIndex(C=>C.todo===l.value);L?(e[t].todolist[p].finished=!0,r.setItem("todoData",JSON.stringify(o)),f()):(e[t].todolist[p].finished=!1,r.setItem("todoData",JSON.stringify(o)),f())})});const T=s.querySelector(".plusButton"),v=document.querySelector(".addTodoModal");let S=document.querySelector("#categoryName");const I=document.querySelector(".exitIcon");T.addEventListener("click",l=>{S.innerHTML=t,v.style.display="flex",document.querySelector("#addTodoInput").focus()}),I.addEventListener("click",l=>{v.style.display="none"}),d.appendChild(s)}})},D=(o,a)=>{const d=r.getItemReturnParse("todoData");d.forEach((e,t)=>{if(e[o]){if(d[t][o].todolist.findIndex(s=>s.todo===a)!==-1)return alert("중복된 할일이 있습니다!");d[t][o].todolist.push({todo:a,finished:!1})}}),r.setItem("todoData",JSON.stringify(d));const n=r.getItemReturnParse("todoData");m(n),f()},b=()=>{const o=document.querySelector("#addTodoInput");document.querySelector("#addTodoBtn").addEventListener("click",d=>{if(d.preventDefault(),!o.value||o.value===" ")return alert("할일을 적어주세요!");let n=document.querySelector("#categoryName").innerHTML;D(n,o.value);const e=document.querySelector(".addTodoModal");document.querySelector("#addTodoInput").value=" ",e.style.display="none"})};window.onload=function(){if(!r.getItem("todoData"))r.setItem("todoData",JSON.stringify(y)),m(y);else{const o=r.getItemReturnParse("todoData");m(o)}f(),b()};function M(o){this.$container=o,this.render=()=>{this.$container.innerHTML=` 
        <div id="mobileContainer">
        <header>
            <h1>❤️WEB TODO MATE❤️</h1>
        </header>
        <main>
            <section id="calendar">
                <div id="calendar-content">
                    <ul id="day-Week">
                        <li class="day">월</li>
                        <li class="day">화</li>
                        <li class="day">수</li>
                        <li class="day">목</li>
                        <li class="day">금</li>
                        <li class="day">토</li>
                        <li class="day">일</li>
                    </ul>
                    <ul id="todo-week">
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">5</div>
                            </div>
                            <div>27</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">3</div>
                            </div>
                            <div>28</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">7</div>
                            </div>
                            <div>29</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">5</div>
                            </div>
                            <div>30</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">9</div>
                            </div>
                            <div>31</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">💜
                                <div class="count chageNum">{leftTodo}</div>
                            </div>
                            <div>1</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">3</div>
                            </div>
                            <div>2</div>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="todoSection">
                
            </section>
        </main>
        <footer>
            <button type="button" onclick="location.href='/calendar'">
                <img src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844435-home-house_110321.png" alt="calendar"/>
                <div>달력</div>
            </button>
            <button type="button" onclick="location.href='/myCategory'">
                <img src="https://cdn-icons-png.flaticon.com/512/880/880590.png" alt="My"/>
                <div>MY</div>
            </button>
        </footer>
        <div class="addTodoModal">
            <div class="addTodoModalContainer">
                <div class="exitIcon">&#10008;</div>
                <h2 id="categoryName">categoryName</h2>
                <input id="addTodoInput" placeholder="할일을 적어주세요🍀"   />
                <button id="addTodoBtn" type="submit">추가하기</button>
            </div>
        </div>
       
    </div>

    <template id="temp-todo" type="text/template">
        <article class="category">
            <h2 class="category-title {mainColor}">
                <div class="title">{todoCategory}</div>
                <button class="plusButton" type="button">+</button>
            </h2>
            <ul class="todoList">
                
            </ul>
        </article>
    </template>
  `},this.render()}function E(o){this.$container=o,window.onload=function(){const a=r.getItemReturnParse("todoData"),d=document.querySelectorAll(".dragDropcontainer")[0];a.forEach(n=>{for(const e in n){const t=document.createElement("div");t.classList.add("dragElement"),t.classList.add(n[e].mainColor),t.draggable=!0,t.innerHTML=e,t.addEventListener("dragstart",()=>{t.classList.add("dragging")}),t.addEventListener("dragend",()=>{t.classList.remove("dragging")}),d.appendChild(t)}}),d.addEventListener("dragover",n=>{n.preventDefault();const e=document.querySelector(".dragging");d.insertBefore(e,n.target)}),d.addEventListener("drop",n=>{n.preventDefault();const e=document.querySelectorAll(".dragElement"),i=Array.from(e).map(s=>a.filter(h=>h[s.innerHTML])[0]);r.setItem("todoData",JSON.stringify(i))})},this.render=()=>{this.$container.innerHTML=` 
      <div id="changeCategoryContainer">
        <header>
            <h1>❤️Drag Todo Category Index❤️</h1>
        </header>

        <div class="dragDropcontainer">
        </div>
        <footer>
            <button type="button" onclick="location.href='/'">
                <img src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844435-home-house_110321.png" alt="calendar"/>
                <div>홈</div>
            </button>
        </footer>
      </div>
    `},this.render()}function x(o){this.$container=o,this.render=()=>{this.$container.innerHTML=` 
      Calendar
    `},this.render()}const N=[{path:"/SOPTWebTodo",element:M},{path:"/SOPTWebTodo/calendar",element:x},{path:"/SOPTWebTodo/myCategory",element:E}];function O(o){this.$container=o,this.render=()=>{this.$container.innerHTML=`
          <main class="errorPage">
              <p>에러 페이지입니다</p>
          </main>
          `},this.render()}function q(o){this.$container=o,(()=>{const d=()=>N.find(e=>e.path===location.pathname);(()=>{var t;const e=((t=d())==null?void 0:t.element)||O;new e(this.$container)})()})()}window.addEventListener("DOMContentLoaded",()=>{new q(document.querySelector("#app"))});
