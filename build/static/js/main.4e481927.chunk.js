(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],{22:function(e,t,n){e.exports=n(38)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),i=(n(27),n(15)),s=n(16),l=n(20),m=n(17),u=n(21),h=Object(a.createContext)(),d=h.Provider,g=h.Consumer,f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={highscore:0,currentscore:0,lastClicked:"",clickedIcons:[],icons:["./images/doberman1.jpg","./images/doberman2.jpg","./images/doberman3.jpg","./images/doberman4.jpg","./images/doberman5.jpg","./images/doberman6.jpg","./images/doberman7.jpg","./images/doberman8.jpg","./images/doberman9.jpg"],handleClick:function(e){var t=n.state,a=t.highscore,c=t.currentscore,r=t.clickedIcons,o=t.icons,i=r,s=o,l=c,m=a,u=!1;r.map((function(t){t===e&&(u=!0,alert("you lost"))})),!1===u?(i.push(e),l+=1,m+=1,n.setState({clickedIcons:i}),n.setState({currentscore:l}),n.setState({highscore:m})):(console.log("itsa me"),i=[],l=0,n.setState({clickedIcons:i}),n.setState({currentscore:l})),s.sort((function(){return Math.random()-.5})),s.sort((function(){return Math.random()-.5})),s.sort((function(){return Math.random()-.5})),n.setState({icons:s}),console.log(a,c,r,o)}},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(d,{value:{highscore:this.state.highscore,currentscore:this.state.currentscore,clickedIcons:this.state.clickedIcons,icons:this.state.icons,shuffleArray:this.state.shuffleArray,handleClick:this.state.handleClick}},this.props.children)}}]),t}(a.Component),b=g,p=n(8),k=n(5);n(28),n(29);var v=function(e){return c.a.createElement("main",Object.assign({className:"wrapper"},e))},E=(n(30),n(31),function(e){return c.a.createElement(b,null,(function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light  sticky"},c.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Clicky Game"),c.a.createElement("div",{className:"navbar-brand center"},"Click Image To Begin!"),c.a.createElement("div",{className:"navbar-brand right"},"Highscore: ",e.highscore," | Score: ",e.currentscore))}))}),j=function(e){return c.a.createElement(b,null,(function(e){return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement("div",{className:"container"},e.icons.map((function(t){return c.a.createElement("div",{onClick:function(){return e.handleClick("".concat(t))},className:"icons click-item shake",key:t,role:"img","aria-label":"click item",height:"50px",width:"50px",style:{backgroundImage:"url(".concat(t,")")}})}))))}))},y=(n(37),function(e){return c.a.createElement("div",{className:"head"},c.a.createElement("h1",null,"Play that Clicky"))});var C=function(){return a.createElement("div",{className:"div"},a.createElement(f,null,a.createElement(p.a,null,a.createElement(y,null),a.createElement(v,null,a.createElement(k.a,{exact:!0,path:"/",component:j})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4e481927.chunk.js.map