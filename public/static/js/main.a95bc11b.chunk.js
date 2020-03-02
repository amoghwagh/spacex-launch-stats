(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/logo.ab10d000.png"},47:function(e,a,t){e.exports=t(63)},52:function(e,a,t){},53:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(37),r=t.n(l),s=(t(52),t(46)),m=t(5),u=t(18),i=t(15),o=(t(53),t(38)),h=t.n(o),p=t(20),E=t(21),d=t(27),g=t(22),b=t(28),f=t(23),_=t(17),y=t.n(_),N=t(64),v=t(26),k=t.n(v),j=t(39),O=t.n(j);function w(e){var a=e.launch,t=a.flight_number,n=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:k()({"text-success":r,"text-danger":!r})},n)),c.a.createElement("p",{style:{fontSize:20}}," ","Date:",c.a.createElement(O.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(u.b,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function x(){return c.a.createElement("div",{className:"my-3",style:{fontSize:20}},c.a.createElement("p",null,c.a.createElement("span",{className:"px-4 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-4 mr-2 bg-danger"})," = Fail"))}function L(){var e=Object(f.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return L=function(){return e},e}var D=y()(L()),Y=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(x,null),c.a.createElement(N.a,{query:D},(function(e){var a=e.loading,t=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,l.launches.map((function(e){return c.a.createElement(w,{key:e.flight_number,launch:e})}))))}))))}}]),a}(n.Component);function q(){var e=Object(f.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return q=function(){return e},e}var F=y()(q()),S=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(N.a,{query:F,variables:{flight_number:e}},(function(a){var t=a.loading,n=a.error,l=a.data;if(t)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var r=l.launch,s=r.mission_name,m=r.launch_year,i=r.launch_success,o=r.rocket,h=o.rocket_id,p=o.rocket_name,E=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",s),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",e),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:k()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",E)),c.a.createElement("hr",null),c.a.createElement(u.b,{to:"/",className:"btn btn-secondary"},"Back"))})))}}]),a}(n.Component),I=new s.a({uri:"/graphql"});var M=function(){return c.a.createElement(m.a,{client:I},c.a.createElement(u.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:h.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(i.a,{exact:!0,path:"/",component:Y}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.a95bc11b.chunk.js.map