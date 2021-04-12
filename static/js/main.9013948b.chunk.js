(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),c=s(13),i=s.n(c),o=(s(23),s(7)),r=s.n(o),l=s(10),j=s(14),d=s(15),u=s(8),b=s(18),h=s(17),m=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var s=t.split("=");e[s[0]]=decodeURIComponent(s[1])}return e}),{});window.location.hash="";var p=m,O=["user-top-read","user-read-currently-playing","user-read-playback-state"],x=s(1),g=s(6),f=s(4),v=(s(30),s(0)),y=function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},s={width:100*e.progress_ms/e.item.duration_ms+"%"};return Object(v.jsxs)("div",{className:"Player",children:[Object(v.jsx)("div",{className:"now-playing__img",children:Object(v.jsx)("img",{src:e.item.album.images[0].url})}),Object(v.jsxs)("div",{className:"now-playing__side",children:[Object(v.jsx)("div",{className:"now-playing__name",children:e.item.name}),Object(v.jsx)("div",{className:"now-playing__artist",children:e.item.artists[0].name}),Object(v.jsx)("div",{className:"play-pause",children:e.is_playing?Object(v.jsx)(x.a,{icon:f.e}):Object(v.jsx)(x.a,{icon:f.f})}),Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:"progress__bar",style:s})})]}),Object(v.jsx)("div",{className:"background",style:t})," "]})},N=function(e){var t=e.state;return Object(v.jsxs)("section",{className:"spotify",children:[t.token?Object(v.jsx)("div",{}):Object(v.jsx)("h3",{class:"kick-back",children:"Kick back and enjoy some music during your visit!"}),!t.token&&Object(v.jsxs)("div",{className:"login-btn",children:[Object(v.jsxs)("a",{className:"login",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("80bd87927d7646ee80b09b1eda3a412f","&redirect_uri=").concat("http://tapdal2020.github.io/portfolio","&scope=").concat(O.join("%20"),"&response_type=token&show_dialog=false"),children:[Object(v.jsx)(x.a,{className:"icon",icon:g.c})," Login to Spotify"]})," "]}),t.token&&!t.no_data&&Object(v.jsx)(y,{item:t.item,is_playing:t.is_playing,progress_ms:t.progress_ms}),t.no_data&&Object(v.jsx)("p",{children:"You need to be playing a song on Spotify for something to appear here."})]})},k=function(e){var t=e.repos;return Object(v.jsxs)("section",{className:"github",children:[Object(v.jsx)("h2",{children:"My Repositories"}),Object(v.jsx)("div",{className:"repos",children:t.map((function(e){return Object(v.jsxs)("div",{className:"repo",children:[Object(v.jsx)(x.a,{className:"icon",icon:g.a}),Object(v.jsx)("a",{href:e,children:e.split("/")[e.split("/").length-1]})]})}))})]})},w=s(5),_=function(){var e=Object(n.useState)({content:"",author:""}),t=Object(w.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)(Object(l.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes.rest/qod");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,a({content:s.contents.quotes[0].quote,author:s.contents.quotes[0].author});case 7:case"end":return e.stop()}}),e)}))),[]),Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)("section",{className:"quote",children:[Object(v.jsx)("h1",{children:"Quote of the Day:"}),Object(v.jsx)("h3",{children:s.content}),Object(v.jsxs)("h4",{children:["-",s.author]})]})})},S=function(e){var t=e.img;return Object(v.jsxs)("section",{className:"bio",children:[Object(v.jsx)("div",{className:"avatar",children:Object(v.jsx)("img",{src:t,alt:"Taylor Williamson"})}),Object(v.jsxs)("div",{className:"info",children:[Object(v.jsx)("div",{className:"title",children:Object(v.jsx)("h1",{children:"Howdy! My name is Taylor Williamson and welcome to my portfolio!"})}),Object(v.jsx)(_,{})]})]})},C=function(){return Object(v.jsxs)("section",{className:"about",children:[Object(v.jsx)("h1",{children:"About Me"}),Object(v.jsx)("div",{className:"blurb",children:Object(v.jsx)("p",{children:" My name is Taylor Williamson and I am a recent Computer Science and Engineering graduate from Texas A&M University actively seeking a software engineering position in the Houston area. Throughout my collegiate career, I have gained a plethora of experience developing desktop and console applications in primarily C++ and Java, while simultaneously exploring and learning about other languages such as python, HTML/CSS, and JavaScript in my free time. Since graduation, I have been continuing to learn and explore the world of full-stack development, and learning in-demand skills such as web development utilizing the MERN (MongoDB, Express, React, Node.js) stack, SQL, and JavaScript/TypeScript. I am constantly learning and gathering new knowledge as I am striving to become a more efficient, effective, and well-rounded developer. "})})]})},I=s.p+"static/media/flight-dash.40f3a869.png",P=s.p+"static/media/imagedetection.28734e7d.png",T=s.p+"static/media/screenshots.4e293b1f.png",M=function(){var e=[I,P,T],t=Object(n.useState)(0),s=Object(w.a)(t,2),a=s[0],c=s[1],i=function(e){a>0&&c(a-1)},o=function(t){a<e.length-1&&c(a+1)};return Object(v.jsxs)("section",{className:"project-content",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h2",{children:"Safety Gear Detection"}),Object(v.jsx)("h3",{children:"Senior Captstone Project"}),Object(v.jsx)("p",{children:'My group and I partnered with the Construction Science department at A&M to develop this project as a part of my senior capstone course. Our mission was to develop an Android application which can simultaneously operate the drone and perform image processing in order to detect Personal Protective Equipment (PPE) violations. To create our object detection engine, we trained our model using a combination of premade and self-collected data, and utilized a "You Only Look Once" (YOLO) algorithm to perform object deteciton in real time.'})]}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("img",{src:e[a],alt:"pic"}),Object(v.jsxs)("div",{class:"arrows",children:[0===a?Object(v.jsxs)("button",{onClick:function(e){return i()},className:"disabled",children:[Object(v.jsx)(x.a,{class:"icon-dis",icon:f.a}),"Previous Image"]}):Object(v.jsxs)("button",{onClick:function(e){return i()},className:"btn",children:[Object(v.jsx)(x.a,{class:"icon",icon:f.a}),"Previous Image"]}),a===e.length-1?Object(v.jsxs)("button",{onClick:function(e){return o()},className:"disabled",children:["Next Image",Object(v.jsx)(x.a,{class:"icon-dis",icon:f.b})]}):Object(v.jsxs)("button",{onClick:function(e){return o()},className:"btn",children:["Next Image",Object(v.jsx)(x.a,{class:"icon",icon:f.b})]})]})]})]})},z=s.p+"static/media/musication.8728c7ff.png",L=s.p+"static/media/musicmap.67584c11.png",R=function(){var e=Object(n.useState)(0),t=Object(w.a)(e,2),s=t[0],a=t[1],c=[z,L],i=function(e){s>0&&a(s-1)},o=function(e){s<c.length-1&&a(s+1)};return Object(v.jsxs)("section",{className:"project-content",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h2",{children:"Musication"}),Object(v.jsx)("h3",{children:"Human-Computer Interaction"}),Object(v.jsx)("p",{children:"This was a group project conducted as part of my Human-Computer Interactions course. It is essentially a location-based music visualizer which links to the user's Spotify account, and allows them to save the current song as well as their geographical location, a musical snapshot if you will. The idea is that after some traveling and some consistent use, the user would have a map full of various pins which they can go back and relive the memories they associate with the song and to that place."})]}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("img",{src:c[s],alt:"pic"}),Object(v.jsxs)("div",{class:"arrows",children:[0===s?Object(v.jsxs)("button",{onClick:function(e){return i()},className:"disabled",children:[Object(v.jsx)(x.a,{class:"icon-dis",icon:f.a}),"Previous Image"]}):Object(v.jsxs)("button",{onClick:function(e){return i()},className:"btn",children:[Object(v.jsx)(x.a,{class:"icon",icon:f.a}),"Previous Image"]}),s===c.length-1?Object(v.jsxs)("button",{onClick:function(e){return o()},className:"disabled",children:["Next Image",Object(v.jsx)(x.a,{class:"icon-dis",icon:f.b})]}):Object(v.jsxs)("button",{onClick:function(e){return o()},className:"btn",children:["Next Image",Object(v.jsx)(x.a,{class:"icon",icon:f.b})]})]})]})]})},E=function(){return Object(v.jsxs)("section",{className:"project-content",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h2",{children:"Donation Manager"}),Object(v.jsx)("h3",{children:"Brazos Valley Jazz Society"}),Object(v.jsx)("p",{children:"As part of my programming studio class, my team and I partnered with a local non-profit organization called the Brazos Valley Jazz Society, and developed a SaaS solution to act as their donation management system powered by Ruby on Rails, mySQL, and deployed using Heroku."})]}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("iframe",{className:"yt-player",src:"https://www.youtube.com/embed/UTZUZB-R-ew",frameborder:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(v.jsxs)("div",{class:"arrows",children:[Object(v.jsx)("button",{className:"btn-invisible"}),Object(v.jsx)("button",{className:"btn-invisible"})]})]})]})},q=function(){var e=Object(n.useState)(0),t=Object(w.a)(e,2),s=t[0],a=t[1],c=[Object(v.jsx)(E,{}),Object(v.jsx)(M,{}),Object(v.jsx)(R,{})],i=function(e){s>0&&a(s-1)},o=function(e){s<c.length-1&&a(s+1)};return Object(v.jsxs)("section",{className:"project",children:[c[s],Object(v.jsxs)("div",{className:"buttons",children:[0===s?Object(v.jsxs)("button",{onClick:function(e){return i()},className:"disabled",children:[Object(v.jsx)(x.a,{class:"icon-dis",icon:f.a}),"Previous Project"]}):Object(v.jsxs)("button",{onClick:function(e){return i()},className:"btn",children:[Object(v.jsx)(x.a,{class:"icon",icon:f.a}),"Previous Project"]}),s===c.length-1?Object(v.jsxs)("button",{onClick:function(e){return o()},className:"disabled",children:["Next Project",Object(v.jsx)(x.a,{class:"icon-dis",icon:f.b})]}):Object(v.jsxs)("button",{onClick:function(e){return o()},className:"btn",children:["Next Project",Object(v.jsx)(x.a,{class:"icon",icon:f.b})]})]})]})},A=s.p+"static/media/ResumeTaylor2021.c1a534ee.pdf",B=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)("nav",{children:[Object(v.jsx)("h2",{className:"nav-title",children:"Taylor Williamson"}),Object(v.jsxs)("ul",{className:"navlinks",children:[Object(v.jsx)("li",{className:"link",children:Object(v.jsxs)("a",{href:"https://github.com/tapdal2020",children:[Object(v.jsx)(x.a,{className:"icon",icon:g.a}),"Github"]})}),Object(v.jsx)("li",{className:"link",children:Object(v.jsxs)("a",{href:"http://linkedin.com/in/taylor-williamson-2020",children:[Object(v.jsx)(x.a,{className:"icon",icon:g.b}),"LinkedIn"]})}),Object(v.jsx)("li",{className:"link",children:Object(v.jsxs)("a",{href:A,children:[Object(v.jsx)(x.a,{className:"icon",icon:f.d}),"Resume"]})}),Object(v.jsx)("li",{className:"link",children:Object(v.jsxs)("a",{href:"mailto:tawilliamson2020@gmail.com",children:[Object(v.jsx)(x.a,{className:"icon",icon:f.c}),"Email"]})})]})]})})},H=s(16),J=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).handlePlay=function(t){e.setState({is_playing:!e.state.is_playing})},e.state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0,no_data:!1,repos:[],img:""},e.getCurrentlyPlaying=e.getCurrentlyPlaying.bind(Object(u.a)(e)),e.tick=e.tick.bind(Object(u.a)(e)),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t,s,n,a,c,i,o,l=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=p.access_token)&&(this.setState({token:t}),this.getCurrentlyPlaying(t),console.log(t)),this.interval=setInterval((function(){return l.tick()}),5e3),e.next=5,fetch("https://api.github.com/users/tapdal2020/repos");case 5:return s=e.sent,e.next=8,s.json();case 8:for(n=e.sent,a=[],c=0;c<n.length;c++)a.push(n[c].html_url);return e.next=13,fetch("https://api.github.com/users/tapdal2020");case 13:return i=e.sent,e.next=16,i.json();case 16:o=e.sent,this.setState({repos:a,img:o.avatar_url,loading:!0});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"tick",value:function(){this.state.token&&this.getCurrentlyPlaying(this.state.token)}},{key:"getCurrentlyPlaying",value:function(e){var t=this;H.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){e?t.setState({item:e.item,is_playing:e.is_playing,progress_ms:e.progress_ms,no_data:!1}):t.setState({no_data:!0})}})}},{key:"render",value:function(){return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(B,{}),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("div",{className:"intro",children:this.state.img?Object(v.jsx)(S,{img:this.state.img}):Object(v.jsx)("h2",{children:"Loading..."})}),Object(v.jsx)("div",{children:Object(v.jsx)(C,{})}),Object(v.jsxs)("div",{className:"modules",children:[Object(v.jsx)(N,{state:this.state}),Object(v.jsx)(k,{repos:this.state.repos})]}),Object(v.jsx)("section",{className:"showcase",children:Object(v.jsx)(q,{})})]})]})}}]),s}(n.Component),D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),D()}},[[32,1,2]]]);
//# sourceMappingURL=main.9013948b.chunk.js.map