import{c as N}from"./chunk-3IIXU7L6.js";import{a as L,b as z}from"./chunk-KWKQ7RAN.js";import"./chunk-NNN5NXOY.js";import"./chunk-TWUQ2O4V.js";import"./chunk-RGQX6O6R.js";import{Hb as P,Ib as O,Jb as I,Pa as c,Qc as E,Tb as A,Ub as u,V as M,Vb as m,Wb as p,X as x,Z as l,bb as d,cb as _,cc as T,db as D,lc as F,pb as w,pc as j,qb as k,sb as S,tb as h,ub as b,vb as g,wb as r,xb as o,yb as s}from"./chunk-KSCUPZV5.js";import"./chunk-IONH7NRB.js";var $=["*"];var W=new x("MAT_CARD_CONFIG"),B=(()=>{class t{appearance;constructor(){let e=l(W,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=d({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,i){a&2&&A("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:$,decls:1,vars:0,template:function(a,i){a&1&&(O(),I(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var R=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=D({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var H=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=_({type:t});static \u0275inj=M({imports:[E]})}return t})();var f=class t{statistic=j.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-statistic-card"]],inputs:{statistic:[1,"statistic"]},decls:13,vars:10,consts:[[1,"statistic-card"],[1,"statistic-header"],[1,"statistic-icon"],[1,"statistic-title"],[1,"statistic-value"],[1,"statistic-change"],[1,"change-value"],[1,"change-label"]],template:function(e,a){e&1&&(r(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),s(3,"i",2),r(4,"span",3),m(5),o()(),r(6,"div",4),m(7),o(),r(8,"div",5)(9,"span",6),m(10),o(),r(11,"span",7),m(12),o()()()()),e&2&&(u(a.statistic().type),c(3),u(a.statistic().type!=="total"?"dot "+a.statistic().type:"show_chart"),c(2),p(a.statistic().title),c(2),p(a.statistic().value),c(),u(a.statistic().changeType),c(2),p(+a.statistic().change>0?a.statistic().change:""),c(2),p(a.statistic().changeLabel))},dependencies:[H,B,R],styles:['.statistic-card[_ngcontent-%COMP%]{border-radius:var(--radius-lg);transition:transform .2s ease,box-shadow .2s ease;background-color:var(--color-primary-contrast);border:1px solid var(--color-light-grey);padding:0 1rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]   .statistic-value[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;padding:1rem 0}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem;font-size:.8125rem}.statistic-card[_ngcontent-%COMP%]   .statistic-change.positive[_ngcontent-%COMP%]{color:var(--color-success)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.negative[_ngcontent-%COMP%]{color:var(--color-danger)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.neutral[_ngcontent-%COMP%]{color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]{border-top-width:.3rem}.statistic-card.overdue[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-danger)}.statistic-card.in-progress[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-info)}.statistic-card.completed[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-success)}.show_chart[_ngcontent-%COMP%]:before{font-family:Material Icons;content:"show_chart";font-feature-settings:"liga";display:inline-block;vertical-align:middle;color:var(--color-neutral)}']})};var Z=()=>[1,2,3,4],J=(t,n)=>n.type;function K(t,n){t&1&&(r(0,"div",1),s(1,"div",2)(2,"div",3)(3,"div",4),o())}function Q(t,n){t&1&&(r(0,"div",0),h(1,K,4,0,"div",1,S),o()),t&2&&(c(),b(T(0,Z)))}function U(t,n){if(t&1&&s(0,"app-statistic-card",5),t&2){let e=n.$implicit;g("statistic",e)}}function Y(t,n){if(t&1&&(r(0,"div",0),h(1,U,1,1,"app-statistic-card",5,J),o()),t&2){let e=P();c(),b(e.statisticsService.statistics())}}var v=class t{statisticsService=l(L);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-statistics-list"]],decls:2,vars:1,consts:[[1,"statistics-grid"],[1,"skeleton-stat-card"],[1,"skeleton","skeleton-icon-row"],[1,"skeleton","skeleton-value"],[1,"skeleton","skeleton-label"],[3,"statistic"]],template:function(e,a){e&1&&w(0,Q,3,1,"div",0)(1,Y,3,0,"div",0),e&2&&k(a.statisticsService.isLoading()?0:1)},dependencies:[f],styles:[".statistics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem}.skeleton-stat-card[_ngcontent-%COMP%]{background:var(--color-primary-contrast);border-radius:var(--radius-lg);padding:1rem 2rem;box-shadow:0 4px 8px #0000001f;display:flex;flex-direction:column;gap:.6rem}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-icon-row[_ngcontent-%COMP%]{height:16px;width:55%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-value[_ngcontent-%COMP%]{height:44px;width:40%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-label[_ngcontent-%COMP%]{height:14px;width:70%}"]})};var V=class t{taskService=l(z);ngOnInit(){this.taskService.loadTasks().subscribe()}barChartData=F(()=>{let n=this.taskService.tasks(),e=["todo","in_progress","done"],a=(i,X)=>n?.filter(y=>y.status===i&&y.priority===X).length;return{labels:["To Do","In Progress","Done"],datasets:[{label:"Low",data:e.map(i=>a(i,"low")),backgroundColor:"rgba(56, 142, 60, 0.75)",borderColor:"#388E3C",borderWidth:1,borderRadius:4},{label:"Medium",data:e.map(i=>a(i,"medium")),backgroundColor:"rgba(245, 124, 0, 0.75)",borderColor:"#F57C00",borderWidth:1,borderRadius:4},{label:"High",data:e.map(i=>a(i,"high")),backgroundColor:"rgba(211, 47, 47, 0.75)",borderColor:"#D32F2F",borderWidth:1,borderRadius:4}]}});barChartOptions={responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Tasks by Status & Priority (Per active Board)",align:"start",font:{size:15,weight:"bold"},color:"#212121",padding:{bottom:16}},tooltip:{callbacks:{label:n=>` ${n.dataset.label} priority: ${n.parsed.y} task(s)`}}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,ticks:{stepSize:1,precision:0},grid:{color:"rgba(0,0,0,0.06)"},title:{display:!0,text:"Number of tasks",color:"#757575"}}}};barChartType="bar";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-analytics"]],decls:6,vars:3,consts:[[1,"title"],[1,"divider"],[1,"analytics-container"],["baseChart","",3,"data","options","type"]],template:function(e,a){e&1&&(r(0,"h3",0),m(1," (in development - Analytics coming soon!) "),o(),s(2,"app-statistics-list")(3,"div",1),r(4,"div",2),s(5,"canvas",3),o()),e&2&&(c(5),g("data",a.barChartData())("options",a.barChartOptions)("type",a.barChartType))},dependencies:[N,v],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-primary-contrast);background-color:var(--color-danger);font-weight:600;display:inline-block;padding:.5rem}[_nghost-%COMP%]   .analytics-container[_ngcontent-%COMP%]{background-color:var(--color-primary-contrast);padding:1.5rem;border-radius:var(--radius-lg);box-shadow:0 2px 4px #00000014}"]})};export{V as AnalyticsComponent};
