(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var n=s(4),a=s.n(n),c=s(13),i=s.n(c),o=(s(23),s(7)),r=s.n(o),l=s(10),j=s(14),d=s(15),h=s(8),u=s(18),b=s(17),m=s(1),p=s(6),O=s(3),x=["user-top-read","user-read-currently-playing","user-read-playback-state"],g=s.p+"static/media/ResumeTaylor2021.6752102a.pdf",f=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var s=t.split("=");e[s[0]]=decodeURIComponent(s[1])}return e}),{});window.location.hash="";var v=f,y=(s(30),s(0)),N=function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},s={width:100*e.progress_ms/e.item.duration_ms+"%"};return Object(y.jsxs)("div",{className:"Player",children:[Object(y.jsx)("div",{className:"now-playing__img",children:Object(y.jsx)("img",{src:e.item.album.images[0].url})}),Object(y.jsxs)("div",{className:"now-playing__side",children:[Object(y.jsx)("div",{className:"now-playing__name",children:e.item.name}),Object(y.jsx)("div",{className:"now-playing__artist",children:e.item.artists[0].name}),Object(y.jsx)("div",{className:"play-pause",children:e.is_playing?Object(y.jsx)(m.a,{icon:O.e}):Object(y.jsx)(m.a,{icon:O.f})}),Object(y.jsx)("div",{className:"progress",children:Object(y.jsx)("div",{className:"progress__bar",style:s})})]}),Object(y.jsx)("div",{className:"background",style:t})," "]})},w=function(e){var t=e.repos;return Object(y.jsxs)("div",{className:"github",children:[Object(y.jsx)("div",{children:Object(y.jsx)("h2",{children:"My Repositories"})}),t.map((function(e){return Object(y.jsxs)("div",{className:"repo",children:[Object(y.jsx)(m.a,{className:"icon",icon:p.a}),Object(y.jsx)("a",{href:e,children:e.split("/")[e.split("/").length-1]})]})}))]})},k=function(){return Object(y.jsx)("div",{className:"socials",children:Object(y.jsxs)("div",{className:"links",children:[Object(y.jsx)("div",{children:Object(y.jsx)("a",{href:"https://github.com/tapdal2020",children:Object(y.jsx)(m.a,{className:"icon",icon:p.a})})}),Object(y.jsx)("div",{children:Object(y.jsx)("a",{href:"http://linkedin.com/in/taylor-williamson-2020",children:Object(y.jsx)(m.a,{className:"icon",icon:p.b})})}),Object(y.jsx)("div",{children:Object(y.jsx)("a",{href:"mailto:tawilliamson2020@gmail.com",children:Object(y.jsx)(m.a,{className:"icon",icon:O.c})})})]})})},_=function(e){var t=e.img;return Object(y.jsxs)("div",{className:"bio",children:[Object(y.jsx)("div",{className:"avatar",children:Object(y.jsx)("img",{src:t,alt:"Taylor Williamson"})}),Object(y.jsxs)("div",{className:"info",children:[Object(y.jsx)("h3",{children:"About Me"}),Object(y.jsx)("p",{children:"My name is Taylor Williamson and I am a recent Computer Science and Engineering graduate from Texas A&M University actively seeking a software engineering position in the Houston area."}),Object(y.jsx)("p",{children:"Throughout my collegiate career, I have gained a plethora of experience developing desktop and console applications in primarily C++ and Java, while simultaneously exploring and learning about other languages such as python, HTML/CSS, and JavaScript in my free time. Since graduation, I have been continuing to learn and explore the world of full-stack development, and learning in-demand skills such as web development utilizing the MERN (MongoDB, Express, React, Node.js) stack, SQL, and JavaScript/TypeScript."}),Object(y.jsx)("p",{children:"I am constantly learning and gathering new knowledge as I am striving to become a more efficient, effective, and well-rounded developer. "}),Object(y.jsx)(k,{})]})]})},S=s(5),C=function(){var e=Object(n.useState)({content:"",author:""}),t=Object(S.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(0),i=Object(S.a)(c,2),o=i[0],j=i[1];return Object(n.useEffect)(Object(l.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,a({content:s.content,author:s.author});case 7:case"end":return e.stop()}}),e)}))),[o]),Object(y.jsxs)("div",{className:"quotes",children:[Object(y.jsxs)("div",{className:"quote",children:[Object(y.jsx)("h3",{children:s.content}),Object(y.jsxs)("h4",{children:["-",s.author]})]}),Object(y.jsx)("button",{className:"new",onClick:function(e){j(o+1)},children:"New Quote"})]})},P=s(16),I=s.p+"static/media/flight-dash.40f3a869.png",T=s.p+"static/media/imagedetection.28734e7d.png",M=s.p+"static/media/screenshots.4e293b1f.png",z=function(){var e=[I,T,M],t=Object(n.useState)(0),s=Object(S.a)(t,2),a=s[0],c=s[1];return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("h2",{children:"Safety Gear Detection"}),Object(y.jsx)("h3",{children:"Senior Captstone Project"})]}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("p",{children:'My group and I partnered with the Construction Science department at A&M to develop this project as a part of my senior capstone course. Our mission was to develop an Android application which can simultaneously operate the drone and perform image processing in order to detect Personal Protective Equipment (PPE) violations. To create our object detection engine, we trained our model using a combination of premade and self-collected data, and utilized a "You Only Look Once" (YOLO) algorithm to perform object deteciton in real time.'}),Object(y.jsx)("img",{src:e[a],alt:"pic"}),Object(y.jsxs)("div",{class:"arrows",children:[Object(y.jsx)("button",{onClick:function(e){a>0&&c(a-1)},children:0===a?Object(y.jsx)(m.a,{class:"invisible",icon:O.a}):Object(y.jsx)(m.a,{class:"icon",icon:O.a})}),Object(y.jsx)("button",{onClick:function(t){a<e.length-1&&c(a+1)},children:a===e.length-1?Object(y.jsx)(m.a,{class:"invisible",icon:O.b}):Object(y.jsx)(m.a,{class:"icon",icon:O.b})})]})]})]})},L=s.p+"static/media/musication.8728c7ff.png",R=s.p+"static/media/musicmap.67584c11.png",E=function(){var e=Object(n.useState)(0),t=Object(S.a)(e,2),s=t[0],a=t[1],c=[L,R];return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("h2",{children:"Musication"}),Object(y.jsx)("h3",{children:"Human-Computer Interaction"})]}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("p",{children:"This was a group project conducted as part of my Human-Computer Interactions course. It is essentially a location-based music visualizer which links to the user's Spotify account, and allows them to save the current song as well as their geographical location, a musical snapshot if you will. The idea is that after some traveling and some consistent use, the user would have a map full of various pins which they can go back and relive the memories they associate with the song and to that place."}),Object(y.jsx)("img",{src:c[s],alt:"pic"}),Object(y.jsxs)("div",{class:"arrows",children:[Object(y.jsx)("button",{onClick:function(e){s>0&&a(s-1)},children:0===s?Object(y.jsx)(m.a,{class:"invisible",icon:O.a}):Object(y.jsx)(m.a,{class:"icon",icon:O.a})}),Object(y.jsx)("button",{onClick:function(e){s<c.length-1&&a(s+1)},children:s===c.length-1?Object(y.jsx)(m.a,{class:"invisible",icon:O.b}):Object(y.jsx)(m.a,{class:"icon",icon:O.b})})]})]})]})},A=function(){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("h2",{children:"Donation Manager"}),Object(y.jsx)("h3",{children:"Brazos Valley Jazz Society"})]}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("p",{children:"As part of my programming studio class, my team and I partnered with a local non-profit organization called the Brazos Valley Jazz Society, and developed a SaaS solution to act as their donation management system powered by Ruby on Rails, mySQL, and deployed using Heroku."}),Object(y.jsx)("iframe",{className:"yt-player",src:"https://www.youtube.com/embed/UTZUZB-R-ew",frameborder:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(y.jsxs)("div",{class:"arrows",children:[Object(y.jsx)("button",{children:Object(y.jsx)(m.a,{class:"null",icon:O.a})}),Object(y.jsx)("button",{children:Object(y.jsx)(m.a,{class:"null",icon:O.b})})]})]})]})},B=function(){var e=Object(n.useState)(0),t=Object(S.a)(e,2),s=t[0],a=t[1],c=[Object(y.jsx)(A,{}),Object(y.jsx)(z,{}),Object(y.jsx)(E,{})],i=function(e){s>0&&a(s-1)},o=function(e){s<c.length-1&&a(s+1)};return Object(y.jsxs)("div",{className:"project",children:[c[s],0===s?Object(y.jsxs)("button",{onClick:function(e){return i()},className:"disabled",children:[Object(y.jsx)(m.a,{class:"icon-dis",icon:O.a}),"Previous Project"]}):Object(y.jsxs)("button",{onClick:function(e){return i()},className:"btn",children:[Object(y.jsx)(m.a,{class:"icon",icon:O.a}),"Previous Project"]}),s===c.length-1?Object(y.jsxs)("button",{onClick:function(e){return o()},className:"disabled",children:["Next Project",Object(y.jsx)(m.a,{class:"icon-dis",icon:O.b})]}):Object(y.jsxs)("button",{onClick:function(e){return o()},className:"btn",children:["Next Project",Object(y.jsx)(m.a,{class:"icon",icon:O.b})]})]})},H=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0,no_data:!1,repos:[],img:""},e.getCurrentlyPlaying=e.getCurrentlyPlaying.bind(Object(h.a)(e)),e.tick=e.tick.bind(Object(h.a)(e)),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t,s,n,a,c,i,o,l=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=v.access_token)&&(this.setState({token:t}),this.getCurrentlyPlaying(t)),this.interval=setInterval((function(){return l.tick()}),5e3),e.next=5,fetch("https://api.github.com/users/tapdal2020/repos");case 5:return s=e.sent,e.next=8,s.json();case 8:for(n=e.sent,a=[],c=0;c<n.length;c++)a.push(n[c].html_url);return e.next=13,fetch("https://api.github.com/users/tapdal2020");case 13:return i=e.sent,e.next=16,i.json();case 16:o=e.sent,this.setState({repos:a,img:o.avatar_url,loading:!0});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"tick",value:function(){this.state.token&&this.getCurrentlyPlaying(this.state.token)}},{key:"getCurrentlyPlaying",value:function(e){var t=this;P.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){e?t.setState({item:e.item,is_playing:e.is_playing,progress_ms:e.progress_ms,no_data:!1}):t.setState({no_data:!0})}})}},{key:"render",value:function(){return Object(y.jsxs)(n.Fragment,{children:[Object(y.jsxs)("div",{className:"navbar",children:[Object(y.jsx)("h2",{children:"Taylor Williamson"}),Object(y.jsxs)("a",{className:"menu-item",href:"https://github.com/tapdal2020",children:[Object(y.jsx)(m.a,{className:"icon",icon:p.a}),"Github"]}),Object(y.jsxs)("a",{className:"menu-item",href:"http://linkedin.com/in/taylor-williamson-2020",children:[Object(y.jsx)(m.a,{className:"icon",icon:p.b}),"LinkedIn"]}),Object(y.jsxs)("a",{className:"menu-item",href:g,children:[Object(y.jsx)(m.a,{className:"icon",icon:O.d}),"Resume"]}),Object(y.jsxs)("a",{className:"menu-item",href:"mailto:tawilliamson2020@gmail.com",children:[Object(y.jsx)(m.a,{className:"icon",icon:O.c}),"Email"]})]}),Object(y.jsx)("div",{className:"title",children:Object(y.jsx)("h1",{children:"Howdy! My name is Taylor Williamson and welcome to my portfolio!"})}),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{className:"sidebar",children:[Object(y.jsxs)("div",{className:"spotify",children:[this.state.token?Object(y.jsx)("div",{}):Object(y.jsx)("h3",{class:"kick-back",children:"Kick back and enjoy some music during your visit!"}),!this.state.token&&Object(y.jsxs)("div",{className:"login-btn",children:[Object(y.jsxs)("a",{className:"login",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("80bd87927d7646ee80b09b1eda3a412f","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(x.join("%20"),"&response_type=token&show_dialog=false"),children:[Object(y.jsx)(m.a,{className:"icon",icon:p.c})," Login to Spotify"]})," "]}),this.state.token&&!this.state.no_data&&Object(y.jsx)(N,{item:this.state.item,is_playing:this.state.is_playing,progress_ms:this.state.progress_ms}),this.state.no_data&&Object(y.jsx)("p",{children:"You need to be playing a song on Spotify for something to appear here."})]}),this.state.img?Object(y.jsx)(_,{img:this.state.img}):Object(y.jsx)("h2",{children:"Loading..."}),Object(y.jsx)("div",{children:Object(y.jsx)(w,{repos:this.state.repos})})]}),Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)(B,{}),Object(y.jsx)(C,{})]})]})]})}}]),s}(n.Component),J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(H,{})}),document.getElementById("root")),J()}},[[32,1,2]]]);
//# sourceMappingURL=main.bff043ad.chunk.js.map