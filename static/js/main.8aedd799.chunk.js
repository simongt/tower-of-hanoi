(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(42),o=n.n(c),i=n(2),l=n(3),s=n(5),d=n(4),u=n(6),g="".concat(4.5,"vw"),p="(100vh - ".concat("100vmin/6"," - ").concat("2rem",")"),b="(".concat(g,") * (").concat(3," + 1)"),m={TOWER_WIDTH:g,HEADER_HEIGHT:"100vmin/6",FOOTER_HEIGHT:"2rem",SETTING_HEIGHT:p,TOWER_HEIGHT:b,DISK_HEIGHT:"((".concat(b,") / 12)"),NUM_DISKS:3,MIN_TOTAL_DISKS:3,MAX_TOTAL_DISKS:9},f=n(11),h="disk",E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rank,n=e.connectDragSource,r=e.isDragging,c=r?"none":"block",o=r?.5:1,i="2 * (".concat(m.TOWER_WIDTH," + ").concat(t,"vw)"),l="".concat(m.TOWER_WIDTH," / 2 - ").concat(t,"vw"),s=200-t*(164/m.NUM_DISKS),d={display:c,opacity:o,height:"calc(\n        ".concat(m.DISK_HEIGHT," * ").concat(m.MAX_TOTAL_DISKS," / ").concat(m.NUM_DISKS,"\n      )"),width:"calc(".concat(i,")"),transform:"translateX(calc(-".concat(l,"))"),borderRadius:"calc((".concat(m.DISK_HEIGHT,") / 1.5)"),border:"1px solid black",boxShadow:"inset 0 0 2px 0 black",background:"rgba(244, ".concat(s,", 36, 1)")};return n(a.a.createElement("div",{style:d}))}}]),t}(r.Component),T=Object(f.DragSource)(h,{beginDrag:function(e){return{}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(E),O={canDrop:function(e,t){return console.log("Detecting if DISK can be dropped to currently hovered TOWER."),function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return console.log("(Detecting valid DISK move to TOWER)"),!0}()},drop:function(e,t){console.log("DISK is dropped."),function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log("=> DISK moved to TOWER")}()},hover:function(e,t){console.log("DropTarget(Tower) --\x3e towerTarget --\x3e hover")}},D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.disks,n=e.connectDropTarget,r=e.hovered?"linear-gradient(\n          to bottom,\n          rgba(255, 204, 0, 1),\n          rgba(241, 91, 49, 0.9),\n          rgba(252,40, 93, 0.75),\n          rgba(0, 0, 0, 0.4)\n        )":"linear-gradient(\n          to bottom,\n          rgba(241, 91, 49, 0.9),\n          rgba(252,40, 93, 0.75),\n          rgba(0, 0, 0, 0.4)\n        )",c="calc((".concat(m.TOWER_WIDTH,") / 4)"),o={height:"calc(".concat(m.TOWER_HEIGHT,")"),borderStyle:"solid",borderWidth:"1px 1px 0px 1px",borderRadius:"".concat(c," ").concat(c," 0 0"),background:r,display:"grid",alignItems:"end",alignContent:"end"};return n(a.a.createElement("div",{style:o},t.map(function(e){return a.a.createElement(T,{key:e.id,rank:e.id})})))}}]),t}(r.Component),I=Object(f.DropTarget)(h,O,function(e,t){return{connectDropTarget:e.dropTarget(),highlighted:!!t.canDrop(),hovered:!!t.isOver(),diskDragged:t.getItem()}})(D),k=n(74),y=n.n(k),v=Object(f.DragDropContext)(y.a),j=function(){return a.a.createElement("div",{style:{borderBottom:"1px solid black"}})},H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.towers,t=0;return a.a.createElement("div",{style:S},a.a.createElement(j,null),a.a.createElement(I,{key:e[t].id,disks:e[t++].disks}),a.a.createElement(j,null),a.a.createElement(I,{key:e[t].id,disks:e[t++].disks}),a.a.createElement(j,null),a.a.createElement(I,{key:e[t].id,disks:e[t++].disks}),a.a.createElement(j,null))}}]),t}(r.Component),S={height:"calc(".concat(m.SETTING_HEIGHT,")"),display:"grid",gridTemplateColumns:"\n    1fr \n    calc(".concat(m.TOWER_WIDTH,")\n    1.75fr\n    calc(").concat(m.TOWER_WIDTH,")\n    1.75fr\n    calc(").concat(m.TOWER_WIDTH,")\n    1fr\n  "),justifyContent:"stretch",alignItems:"end",overflow:"hidden"},_=v(H),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{style:{paddingBottom:"0.5rem",display:"flex",justifyContent:"center",alignItems:"flex-end",background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",borderBottom:"1px solid black"}},a.a.createElement("h1",{style:{color:"rgba(229, 172, 0, 1)",fontSize:"calc(100vmin/12)",textTransform:"uppercase",fontWeight:"100",textShadow:"4px 4px 2px rgba(0, 0, 0, 1)"}},"Towers of Hanoi"))}}]),t}(r.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={color:"rgba(241, 91, 49, 1)",textDecoration:"none",fontWeight:"600",textShadow:"1.5px 1.5px 0px black"};return a.a.createElement("footer",{style:{padding:"0 0.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",color:"white",fontSize:"1rem",background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))"}},a.a.createElement("p",{style:{textTransform:"uppercase"}},a.a.createElement("a",{href:"https://github.com/simongt/towers-of-hanoi",target:"_blank",rel:"noopener noreferrer",style:e},a.a.createElement("i",{className:"fab fa-github",style:{marginRight:"0.25rem"}}),"GitHub")),a.a.createElement("p",{style:{textTransform:"uppercase"}},a.a.createElement("a",{href:"https://simongt.net",target:"_blank",rel:"noopener noreferrer",style:e},"// simongt . net")))}}]),t}(r.Component),W=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){for(var e=[],t=1;t<=m.NUM_DISKS;t++)e.push({id:t});n.setState({towers:[{id:1,disks:e},{id:2,disks:[]},{id:3,disks:[]}]})},n.state={towers:[{id:1,disks:[]},{id:2,disks:[]},{id:3,disks:[]}]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:R},a.a.createElement(x,null),a.a.createElement(_,{towers:this.state.towers})," ",a.a.createElement(w,null))}}]),t}(r.Component),R={display:"grid",gridTemplateRows:"\n    calc(".concat(m.HEADER_HEIGHT,")\n    calc(").concat(m.SETTING_HEIGHT,")\n    ").concat(m.FOOTER_HEIGHT,"\n  "),overflow:"hidden"},G=W,K=(n(210),document.getElementById("root"));o.a.render(a.a.createElement(G,null),K)},75:function(e,t,n){e.exports=n(211)}},[[75,1,2]]]);
//# sourceMappingURL=main.8aedd799.chunk.js.map