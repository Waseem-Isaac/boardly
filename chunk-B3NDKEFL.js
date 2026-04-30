import{b as Ln,f as Pn,j as v,k as Bn,l as zn,m as G,n as Et,o as tt,p as Jt,r as jn,x as Un,y as te}from"./chunk-4TKGLXVD.js";import{$b as U,Aa as Cn,B as ct,Ba as An,C as _n,Cb as Fe,Cc as Vn,Db as bt,E as vn,Fb as J,Gb as rt,Hb as _,I as yn,Ib as En,Jb as Ie,Jc as Nn,K as xn,Kb as w,L as Ht,Lb as E,M as Gt,Mb as Dn,Nb as Mn,O as Q,Oa as y,Ob as Te,Pb as Se,Q as mt,R as Wt,Rb as x,Sa as De,Sb as Fn,T as ut,Tb as In,U as u,Ua as Kt,Ub as Tn,V as k,Va as ot,Wa as f,X as m,Z as a,a as Ut,ab as j,bb as R,c as dt,cb as d,d as h,e as mn,fb as D,fc as Sn,ga as X,gb as Zt,ha as B,i as un,ic as K,j as fn,jb as Me,jc as H,ka as z,kb as wn,la as p,n as P,nb as pt,o as pn,ob as M,oc as wt,pa as S,pb as F,pc as On,qa as $t,qc as Xt,r as hn,ra as ft,sa as we,sc as V,t as bn,tb as ht,tc as kn,ua as b,ub as I,uc as Rn,va as Ee,vb as T,w as gn,wb as At,wc as Oe,x as Y,xa as qt,xb as Yt,yb as Qt,zb as q}from"./chunk-EOK4J5D5.js";import{a as c,b as O}from"./chunk-IONH7NRB.js";var Hn=class n{http=a(Nn);router=a(Pn);_currentUser=S(this._loadUser());currentUser=this._currentUser.asReadonly();get isAuthenticated(){return!!localStorage.getItem("auth_token")}login(e,t){return this.http.post("auth/login",{email:e,password:t}).pipe(mt(i=>this._persist(i)))}register(e,t,i){return this.http.post("auth/register",{name:e,email:t,password:i}).pipe(mt(o=>this._persist(o)))}validateInvitation(e){return this.http.get("auth/validate-invitation",{params:{token:e}})}setPassword(e,t){return this.http.post("auth/set-password",{token:e,password:t}).pipe(mt(i=>this._persist(i)))}logout(){localStorage.removeItem("auth_token"),localStorage.removeItem("auth_user"),this._currentUser.set(null),this.router.navigate(["/auth/login"])}_persist(e){localStorage.setItem("auth_token",e.token),localStorage.setItem("auth_user",JSON.stringify(e.user)),this._currentUser.set(e.user)}_loadUser(){try{let e=localStorage.getItem("auth_user");return e?JSON.parse(e):null}catch{return null}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})};var Jn=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(f(ot),f(b))};static \u0275dir=d({type:n})}return n})(),xo=(()=>{class n extends Jn{static \u0275fac=(()=>{let t;return function(o){return(t||(t=we(n)))(o||n)}})();static \u0275dir=d({type:n,features:[D]})}return n})(),Ne=new m("");var Co={provide:Ne,useExisting:ut(()=>ti),multi:!0};function Ao(){let n=Oe()?Oe().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var wo=new m(""),ti=(()=>{class n extends Jn{_compositionMode;_composing=!1;constructor(t,i,o){super(t,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Ao())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(f(ot),f(b),f(wo,8))};static \u0275dir=d({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&bt("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[U([Co]),D]})}return n})();function Le(n){return n==null||Pe(n)===0}function Pe(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var ce=new m(""),me=new m(""),Eo=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Gn=class{static min(e){return Do(e)}static max(e){return Mo(e)}static required(e){return Fo(e)}static requiredTrue(e){return Io(e)}static email(e){return To(e)}static minLength(e){return So(e)}static maxLength(e){return Oo(e)}static pattern(e){return ko(e)}static nullValidator(e){return ei()}static compose(e){return si(e)}static composeAsync(e){return li(e)}};function Do(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function Mo(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Fo(n){return Le(n.value)?{required:!0}:null}function Io(n){return n.value===!0?null:{required:!0}}function To(n){return Le(n.value)||Eo.test(n.value)?null:{email:!0}}function So(n){return e=>{let t=e.value?.length??Pe(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Oo(n){return e=>{let t=e.value?.length??Pe(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function ko(n){if(!n)return ei;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(Le(i.value))return null;let o=i.value;return e.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function ei(n){return null}function ni(n){return n!=null}function ii(n){return wn(n)?un(n):n}function oi(n){let e={};return n.forEach(t=>{e=t!=null?c(c({},e),t):e}),Object.keys(e).length===0?null:e}function ri(n,e){return e.map(t=>t(n))}function Ro(n){return!n.validate}function ai(n){return n.map(e=>Ro(e)?e:t=>e.validate(t))}function si(n){if(!n)return null;let e=n.filter(ni);return e.length==0?null:function(t){return oi(ri(t,e))}}function Be(n){return n!=null?si(ai(n)):null}function li(n){if(!n)return null;let e=n.filter(ni);return e.length==0?null:function(t){let i=ri(t,e).map(ii);return bn(i).pipe(P(oi))}}function ze(n){return n!=null?li(ai(n)):null}function Wn(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function di(n){return n._rawValidators}function ci(n){return n._rawAsyncValidators}function ke(n){return n?Array.isArray(n)?n:[n]:[]}function ne(n,e){return Array.isArray(n)?n.includes(e):n===e}function $n(n,e){let t=ke(e);return ke(n).forEach(o=>{ne(t,o)||t.push(o)}),t}function qn(n,e){return ke(e).filter(t=>!ne(n,t))}var ie=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Z=class extends ie{name;get formDirective(){return null}get path(){return null}},at=class extends ie{_parent=null;name=null;valueAccessor=null},oe=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var La=(()=>{class n extends oe{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(f(at,2))};static \u0275dir=d({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&x("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[D]})}return n})(),Pa=(()=>{class n extends oe{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(f(Z,10))};static \u0275dir=d({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&x("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[D]})}return n})();var Dt="VALID",ee="INVALID",gt="PENDING",Mt="DISABLED",et=class{},re=class extends et{value;source;constructor(e,t){super(),this.value=e,this.source=t}},It=class extends et{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},Tt=class extends et{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},_t=class extends et{status;source;constructor(e,t){super(),this.status=e,this.source=t}},ae=class extends et{source;constructor(e){super(),this.source=e}},Ot=class extends et{source;constructor(e){super(),this.source=e}};function je(n){return(ue(n)?n.validators:n)||null}function Vo(n){return Array.isArray(n)?Be(n):n||null}function Ue(n,e){return(ue(e)?e.asyncValidators:n)||null}function No(n){return Array.isArray(n)?ze(n):n||null}function ue(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function mi(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new Wt(1e3,"");if(!i[t])throw new Wt(1001,"")}function ui(n,e,t){n._forEachChild((i,o)=>{if(t[o]===void 0)throw new Wt(1002,"")})}var vt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return K(this.statusReactive)}set status(e){K(()=>this.statusReactive.set(e))}_status=H(()=>this.statusReactive());statusReactive=S(void 0);get valid(){return this.status===Dt}get invalid(){return this.status===ee}get pending(){return this.status==gt}get disabled(){return this.status===Mt}get enabled(){return this.status!==Mt}errors;get pristine(){return K(this.pristineReactive)}set pristine(e){K(()=>this.pristineReactive.set(e))}_pristine=H(()=>this.pristineReactive());pristineReactive=S(!0);get dirty(){return!this.pristine}get touched(){return K(this.touchedReactive)}set touched(e){K(()=>this.touchedReactive.set(e))}_touched=H(()=>this.touchedReactive());touchedReactive=S(!1);get untouched(){return!this.touched}_events=new h;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators($n(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators($n(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(qn(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(qn(e,this._rawAsyncValidators))}hasValidator(e){return ne(this._rawValidators,e)}hasAsyncValidator(e){return ne(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(O(c({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new Tt(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new Tt(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(O(c({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new It(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new It(!0,i))}markAsPending(e={}){this.status=gt;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new _t(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(O(c({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Mt,this.errors=null,this._forEachChild(o=>{o.disable(O(c({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new re(this.value,i)),this._events.next(new _t(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(O(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Dt,this._forEachChild(i=>{i.enable(O(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(O(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Dt||this.status===gt)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new re(this.value,t)),this._events.next(new _t(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(O(c({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Mt:Dt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=gt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=ii(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new _t(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new z,this.statusChanges=new z}_calculateStatus(){return this._allControlsDisabled()?Mt:this.errors?ee:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(gt)?gt:this._anyControlsHaveStatus(ee)?ee:Dt}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),o&&this._events.next(new It(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Tt(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ue(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Vo(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=No(this._rawAsyncValidators)}},yt=class extends vt{constructor(e,t,i){super(je(t),Ue(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){ui(this,!0,e),Object.keys(e).forEach(i=>{mi(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let o=this.controls[i];o&&o.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,o)=>{i.reset(e?e[o]:null,O(c({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Ot(this))}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((o,r)=>{i=t(i,o,r)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Re=class extends yt{};var kt=new m("",{factory:()=>fe}),fe="always";function fi(n,e){return[...e.path,n]}function se(n,e,t=fe){He(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Po(n,e),zo(n,e),Bo(n,e),Lo(n,e)}function Kn(n,e,t=!0){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),de(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function le(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Lo(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function He(n,e){let t=di(n);e.validator!==null?n.setValidators(Wn(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=ci(n);e.asyncValidator!==null?n.setAsyncValidators(Wn(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let o=()=>n.updateValueAndValidity();le(e._rawValidators,o),le(e._rawAsyncValidators,o)}function de(n,e){let t=!1;if(n!==null){if(e.validator!==null){let o=di(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==e.validator);r.length!==o.length&&(t=!0,n.setValidators(r))}}if(e.asyncValidator!==null){let o=ci(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==e.asyncValidator);r.length!==o.length&&(t=!0,n.setAsyncValidators(r))}}}let i=()=>{};return le(e._rawValidators,i),le(e._rawAsyncValidators,i),t}function Po(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&pi(n,e)})}function Bo(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&pi(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function pi(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function zo(n,e){let t=(i,o)=>{e.valueAccessor.writeValue(i),o&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function hi(n,e){n==null,He(n,e)}function jo(n,e){return de(n,e)}function bi(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Uo(n){return Object.getPrototypeOf(n.constructor)===xo}function gi(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function _i(n,e){if(!e)return null;Array.isArray(e);let t,i,o;return e.forEach(r=>{r.constructor===ti?t=r:Uo(r)?i=r:o=r}),o||i||t||null}function Ho(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Go={provide:Z,useExisting:ut(()=>Wo)},Ft=Promise.resolve(),Wo=(()=>{class n extends Z{callSetDisabledState;get submitted(){return K(this.submittedReactive)}_submitted=H(()=>this.submittedReactive());submittedReactive=S(!1);_directives=new Set;form;ngSubmit=new z;options;constructor(t,i,o){super(),this.callSetDisabledState=o,this.form=new yt({},Be(t),ze(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Ft.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),se(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Ft.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Ft.then(()=>{let i=this._findContainer(t.path),o=new yt({});hi(o,t),i.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Ft.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){Ft.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),gi(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new ae(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||n)(f(ce,10),f(me,10),f(kt,8))};static \u0275dir=d({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,o){i&1&&bt("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[U([Go]),D]})}return n})();function Zn(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Yn(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var St=class extends vt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(je(t),Ue(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ue(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Yn(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Ot(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Zn(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Zn(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Yn(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var $o=n=>n instanceof St;var qo={provide:at,useExisting:ut(()=>Ko)},Qn=Promise.resolve(),Ko=(()=>{class n extends at{_changeDetectorRef;callSetDisabledState;control=new St;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new z;constructor(t,i,o,r,s,l){super(),this._changeDetectorRef=s,this.callSetDisabledState=l,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=_i(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),bi(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){se(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Qn.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&V(i);Qn.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?fi(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(f(Z,9),f(ce,10),f(me,10),f(Ne,10),f(Xt,8),f(kt,8))};static \u0275dir=d({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[U([qo]),D,ft]})}return n})();var za=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Ve=class extends vt{constructor(e,t,i){super(je(t),Ue(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let o=this._adjustIndex(e);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){ui(this,!1,e),e.forEach((i,o)=>{mi(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,o)=>{i.reset(e[o],O(c({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Ot(this))}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Zo=(()=>{class n extends Z{callSetDisabledState;get submitted(){return K(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=H(()=>this._submittedReactive());_submittedReactive=S(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(de(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let i=this.form.get(t.path);return se(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Kn(t.control||null,t,!1),Ho(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,i){this.form.get(t.path).setValue(i)}onReset(){this.resetForm()}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,gi(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ae(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,o=this.form.get(t.path);i!==o&&(Kn(i||null,t),$o(o)&&(se(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);hi(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&jo(i,t)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){He(this.form,this),this._oldForm&&de(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(f(ce,10),f(me,10),f(kt,8))};static \u0275dir=d({type:n,features:[D,ft]})}return n})();var vi=new m("");var Yo={provide:at,useExisting:ut(()=>Qo)},Qo=(()=>{class n extends at{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new z;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=_i(this,r)}ngOnChanges(t){this._added||this._setUpControl(),bi(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return fi(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(f(Z,13),f(ce,10),f(me,10),f(Ne,10),f(vi,8))};static \u0275dir=d({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[U([Yo]),D,ft]})}return n})();var Xo={provide:Z,useExisting:ut(()=>Jo)},Jo=(()=>{class n extends Zo{form=null;ngSubmit=new z;get control(){return this.form}static \u0275fac=(()=>{let t;return function(o){return(t||(t=we(n)))(o||n)}})();static \u0275dir=d({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&bt("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[U([Xo]),D]})}return n})();var yi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=R({type:n});static \u0275inj=k({})}return n})();function Xn(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ja=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,i=null){let o=this._reduceControls(t),r={};return Xn(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new yt(o,r)}record(t,i=null){let o=this._reduceControls(t);return new Re(o,i)}control(t,i,o){let r={};return this.useNonNullable?(Xn(i)?r=i:(r.validators=i,r.asyncValidators=o),new St(t,O(c({},r),{nonNullable:!0}))):new St(t,i,o)}array(t,i,o){let r=t.map(s=>this._createControl(s));return new Ve(r,i,o)}_reduceControls(t){let i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){if(t instanceof St)return t;if(t instanceof vt)return t;if(Array.isArray(t)){let i=t[0],o=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(i,o,r)}else return this.control(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ua=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:kt,useValue:t.callSetDisabledState??fe}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=R({type:n});static \u0275inj=k({imports:[yi]})}return n})(),Ha=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:vi,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:kt,useValue:t.callSetDisabledState??fe}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=R({type:n});static \u0275inj=k({imports:[yi]})}return n})();function Rt(n){return n.buttons===0||n.detail===0}function Vt(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}function Ge(n,e=0){return xi(n)?Number(n):arguments.length===2?e:0}function xi(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function W(n){return n instanceof b?n.nativeElement:n}var Ci=new m("cdk-input-modality-detector-options"),Ai={ignoreKeys:[18,17,224,91,16]},wi=650,We={passive:!0,capture:!0},Ei=(()=>{class n{_platform=a(v);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new mn(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(i=>i===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=G(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<wi||(this._modality.next(Rt(t)?"keyboard":"mouse"),this._mostRecentTarget=G(t))};_onTouchstart=t=>{if(Vt(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=G(t)};constructor(){let t=a(p),i=a(B),o=a(Ci,{optional:!0});if(this._options=c(c({},Ai),o),this.modalityDetected=this._modality.pipe(Ht(1)),this.modalityChanged=this.modalityDetected.pipe(vn()),this._platform.isBrowser){let r=a(Kt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(i,"keydown",this._onKeydown,We),r.listen(i,"mousedown",this._onMousedown,We),r.listen(i,"touchstart",this._onTouchstart,We)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Nt=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Nt||{}),Di=new m("cdk-focus-monitor-default-options"),pe=Et({passive:!0,capture:!0}),he=(()=>{class n{_ngZone=a(p);_platform=a(v);_inputModalityDetector=a(Ei);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=a(B);_stopInputModalityDetector=new h;constructor(){let t=a(Di,{optional:!0});this._detectionMode=t?.detectionMode||Nt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let i=G(t);for(let o=i;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,i=!1){let o=W(t);if(!this._platform.isBrowser||o.nodeType!==1)return fn();let r=Bn(o)||this._document,s=this._elementInfo.get(o);if(s)return i&&(s.checkChildren=!0),s.subject;let l={checkChildren:i,subject:new h,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let i=W(t),o=this._elementInfo.get(i);o&&(o.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(o))}focusVia(t,i,o){let r=W(t),s=this._document.activeElement;r===s?this._getClosestElementsInfo(r).forEach(([l,g])=>this._originChanged(l,i,g)):(this._setOrigin(i),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Nt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===Nt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?wi:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,i){let o=this._elementInfo.get(i),r=G(t);!o||!o.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),o)}_onBlur(t,i){let o=this._elementInfo.get(i);!o||o.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(o,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,o=this._rootNodeFocusListenerCount.get(i)||0;o||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,pe),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,pe)}),this._rootNodeFocusListenerCount.set(i,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Q(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let o=this._rootNodeFocusListenerCount.get(i);o>1?this._rootNodeFocusListenerCount.set(i,o-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,pe),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,pe),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,o){this._setClasses(t,i),this._emitOrigin(o,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&i.push([r,o])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tr=(()=>{class n{_elementRef=a(b);_focusMonitor=a(he);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new z;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();function $e(n){return Array.isArray(n)?n:[n]}var Mi=new Set,st,be=(()=>{class n{_platform=a(v);_nonce=a(An,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):nr}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&er(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function er(n,e){if(!Mi.has(n))try{st||(st=document.createElement("style"),e&&st.setAttribute("nonce",e),st.setAttribute("type","text/css"),document.head.appendChild(st)),st.sheet&&(st.sheet.insertRule(`@media ${n} {body{ }}`,0),Mi.add(n))}catch(t){console.error(t)}}function nr(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var qe=(()=>{class n{_mediaMatcher=a(be);_zone=a(p);_queries=new Map;_destroySubject=new h;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Fi($e(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Fi($e(t)).map(s=>this._registerQuery(s).observable),r=pn(o);return r=hn(r.pipe(_n(1)),r.pipe(Ht(1),ct(0))),r.pipe(P(s=>{let l={matches:!1,breakpoints:{}};return s.forEach(({matches:g,query:L})=>{l.matches=l.matches||g,l.breakpoints[L]=g}),l}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),r={observable:new dt(s=>{let l=g=>this._zone.run(()=>s.next(g));return i.addListener(l),()=>{i.removeListener(l)}}).pipe(Gt(i),P(({matches:s})=>({query:t,matches:s})),Q(this._destroySubject)),mql:i};return this._queries.set(t,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fi(n){return n.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}function ir(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let e=0;e<n.addedNodes.length;e++)if(!(n.addedNodes[e]instanceof Comment))return!1;for(let e=0;e<n.removedNodes.length;e++)if(!(n.removedNodes[e]instanceof Comment))return!1;return!0}return!1}var Ii=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ti=(()=>{class n{_mutationObserverFactory=a(Ii);_observedElements=new Map;_ngZone=a(p);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,i)=>this._cleanupObserver(i))}observe(t){let i=W(t);return new dt(o=>{let s=this._observeElement(i).pipe(P(l=>l.filter(g=>!ir(g))),Y(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{o.next(l)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let i=new h,o=this._mutationObserverFactory.create(r=>i.next(r));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:i,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:i,stream:o}=this._observedElements.get(t);i&&i.disconnect(),o.complete(),this._observedElements.delete(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ts=(()=>{class n{_contentObserver=a(Ti);_elementRef=a(b);event=new z;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Ge(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(ct(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",V],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),Si=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=R({type:n});static \u0275inj=k({providers:[Ii]})}return n})();var Vi=(()=>{class n{_platform=a(v);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return rr(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=or(fr(t));if(i&&(Oi(i)===-1||!this.isVisible(i)))return!1;let o=t.nodeName.toLowerCase(),r=Oi(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!mr(t)?!1:o==="audio"?t.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,i){return ur(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function or(n){try{return n.frameElement}catch{return null}}function rr(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function ar(n){let e=n.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function sr(n){return dr(n)&&n.type=="hidden"}function lr(n){return cr(n)&&n.hasAttribute("href")}function dr(n){return n.nodeName.toLowerCase()=="input"}function cr(n){return n.nodeName.toLowerCase()=="a"}function Ni(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let e=n.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function Oi(n){if(!Ni(n))return null;let e=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function mr(n){let e=n.nodeName.toLowerCase(),t=e==="input"&&n.type;return t==="text"||t==="password"||e==="select"||e==="textarea"}function ur(n){return sr(n)?!1:ar(n)||lr(n)||n.hasAttribute("contenteditable")||Ni(n)}function fr(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var ge=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,i,o,r=!1,s){this._element=e,this._checker=t,this._ngZone=i,this._document=o,this._injector=s,r||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(e),!!i}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary("start");return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary("end");return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=0;i<t.length;i++){let o=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(o)return o}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=t.length-1;i>=0;i--){let o=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(o)return o}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._injector?De(e,{injector:this._injector}):setTimeout(e)}},Li=(()=>{class n{_checker=a(Vi);_ngZone=a(p);_document=a(B);_injector=a(X);constructor(){a(tt).load(Jt)}create(t,i=!1){return new ge(t,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pr=(()=>{class n{_elementRef=a(b);_focusTrapFactory=a(Li);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){a(v).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let i=t.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=zn(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",V],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",V]},exportAs:["cdkTrapFocus"],features:[ft]})}return n})(),Pi=new m("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Bi=new m("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),hr=0,br=(()=>{class n{_ngZone=a(p);_defaultOptions=a(Bi,{optional:!0});_liveElement;_document=a(B);_sanitizer=a(Ln);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=a(Pi,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...i){let o=this._defaultOptions,r,s;return i.length===1&&typeof i[0]=="number"?s=i[0]:[r,s]=i,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),s==null&&o&&(s=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:jn(this._liveElement,t,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",i=this._document.getElementsByClassName(t),o=this._document.createElement("div");for(let r=0;r<i.length;r++)i[r].remove();return o.classList.add(t),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${hr++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<i.length;o++){let r=i[o],s=r.getAttribute("aria-owns");s?s.indexOf(t)===-1&&r.setAttribute("aria-owns",s+" "+t):r.setAttribute("aria-owns",t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var nt=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(nt||{}),ki="cdk-high-contrast-black-on-white",Ri="cdk-high-contrast-white-on-black",Ke="cdk-high-contrast-active",zi=(()=>{class n{_platform=a(v);_hasCheckedHighContrastMode=!1;_document=a(B);_breakpointSubscription;constructor(){this._breakpointSubscription=a(qe).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return nt.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,o=i&&i.getComputedStyle?i.getComputedStyle(t):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return nt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return nt.BLACK_ON_WHITE}return nt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ke,ki,Ri),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===nt.BLACK_ON_WHITE?t.add(Ke,ki):i===nt.WHITE_ON_BLACK&&t.add(Ke,Ri)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gr=(()=>{class n{constructor(){a(zi)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||n)};static \u0275mod=R({type:n});static \u0275inj=k({imports:[Si]})}return n})();var _r=200,_e=class{_letterKeyStream=new h;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new h;selectedItem=this._selectedItem;constructor(e,t){let i=typeof t?.debounceInterval=="number"?t.debounceInterval:_r;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(mt(t=>this._pressedLetters.push(t)),ct(e),Y(()=>this._pressedLetters.length>0),P(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let i=1;i<this._items.length+1;i++){let o=(this._selectedItemIndex+i)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function ji(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var xt=class{_items;_activeItemIndex=S(-1);_activeItem=S(null);_wrap=!1;_typeaheadSubscription=Ut.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=e=>e.disabled;constructor(e,t){this._items=e,e instanceof Ee?this._itemChangesSubscription=e.changes.subscribe(i=>this._itemsChanged(i.toArray())):Me(e)&&(this._effectRef=$t(()=>this._itemsChanged(e()),{injector:t}))}tabOut=new h;change=new h;skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new _e(t,{debounceInterval:typeof e=="number"?e:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){let t=e.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!e[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(r<s?r:s-1,-1);break}else return;default:(o||ji(e,"shiftKey"))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),i=typeof e=="number"?e:t.indexOf(e),o=t[i];this._activeItem.set(o??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let i=1;i<=t.length;i++){let o=(this._activeItemIndex()+e*i+t.length)%t.length,r=t[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){let i=this._getItemsArray();if(i[e]){for(;this._skipPredicateFn(i[e]);)if(e+=t,!i[e])return;this.setActiveItem(e)}}_getItemsArray(){return Me(this._items)?this._items():this._items instanceof Ee?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let i=e.indexOf(t);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Ze=class extends xt{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}};var Ye=class extends xt{_origin="program";setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};var Qe={},lt=class n{_appId=a(qt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){return this._appId!=="ng"&&(e+=this._appId),Qe.hasOwnProperty(e)||(Qe[e]=0),`${e}${t?n._infix+"-":""}${Qe[e]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hi=" ";function vr(n,e,t){let i=ye(n,e);t=t.trim(),!i.some(o=>o.trim()===t)&&(i.push(t),n.setAttribute(e,i.join(Hi)))}function yr(n,e,t){let i=ye(n,e);t=t.trim();let o=i.filter(r=>r!==t);o.length?n.setAttribute(e,o.join(Hi)):n.removeAttribute(e)}function ye(n,e){return n.getAttribute(e)?.match(/\S+/g)??[]}var Gi="cdk-describedby-message",ve="cdk-describedby-host",Je=0,Fl=(()=>{class n{_platform=a(v);_document=a(B);_messageRegistry=new Map;_messagesContainer=null;_id=`${Je++}`;constructor(){a(tt).load(Jt),this._id=a(qt)+"-"+Je++}describe(t,i,o){if(!this._canBeDescribed(t,i))return;let r=Xe(i,o);typeof i!="string"?(Ui(i,this._id),this._messageRegistry.set(r,{messageElement:i,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(i,o),this._isElementDescribedByMessage(t,r)||this._addMessageReference(t,r)}removeDescription(t,i,o){if(!i||!this._isElementNode(t))return;let r=Xe(i,o);if(this._isElementDescribedByMessage(t,r)&&this._removeMessageReference(t,r),typeof i=="string"){let s=this._messageRegistry.get(r);s&&s.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${ve}="${this._id}"]`);for(let i=0;i<t.length;i++)this._removeCdkDescribedByReferenceIds(t[i]),t[i].removeAttribute(ve);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,i){let o=this._document.createElement("div");Ui(o,this._id),o.textContent=t,i&&o.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Xe(t,i),{messageElement:o,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let r=0;r<i.length;r++)i[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(t),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(t){let i=ye(t,"aria-describedby").filter(o=>o.indexOf(Gi)!=0);t.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(t,i){let o=this._messageRegistry.get(i);vr(t,"aria-describedby",o.messageElement.id),t.setAttribute(ve,this._id),o.referenceCount++}_removeMessageReference(t,i){let o=this._messageRegistry.get(i);o.referenceCount--,yr(t,"aria-describedby",o.messageElement.id),t.removeAttribute(ve)}_isElementDescribedByMessage(t,i){let o=ye(t,"aria-describedby"),r=this._messageRegistry.get(i),s=r&&r.messageElement.id;return!!s&&o.indexOf(s)!=-1}_canBeDescribed(t,i){if(!this._isElementNode(t))return!1;if(i&&typeof i=="object")return!0;let o=i==null?"":`${i}`.trim(),r=t.getAttribute("aria-label");return o?!r||r.trim()!==o:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xe(n,e){return typeof n=="string"?`${e||""}/${n}`:n}function Ui(n,e){n.id||(n.id=`${Gi}-${e}-${Je++}`)}function Nl(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Wi(n){return n!=null&&`${n}`!="false"}function Pl(n,e=/\s+/){let t=[];if(n!=null){let i=Array.isArray(n)?n:`${n}`.split(e);for(let o of i){let r=`${o}`.trim();r&&t.push(r)}}return t}var tn=class{_box;_destroyed=new h;_resizeSubject=new h;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new dt(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Y(t=>t.some(i=>i.target===e)),xn({bufferSize:1,refCount:!0}),Q(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},$i=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=a(p);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let o=i?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new tn(o)),this._observers.get(o).observe(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xr=new m("MATERIAL_ANIMATIONS"),qi=null;function Cr(){return a(xr,{optional:!0})?.animationsDisabled||a(Cn,{optional:!0})==="NoopAnimations"?"di-disabled":(qi??=a(be).matchMedia("(prefers-reduced-motion)").matches,qi?"reduced-motion":"enabled")}function it(){return Cr()!=="enabled"}var Ar=["notch"],wr=["matFormFieldNotchedOutline",""],Er=["*"],Ki=["iconPrefixContainer"],Zi=["textPrefixContainer"],Yi=["iconSuffixContainer"],Qi=["textSuffixContainer"],Dr=["textField"],Mr=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Fr=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Ir(n,e){n&1&&At(0,"span",21)}function Tr(n,e){if(n&1&&(I(0,"label",20),_(1,1),M(2,Ir,1,0,"span",21),T()),n&2){let t=J(2);ht("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),pt("for",t._control.disableAutomaticLabeling?null:t._control.id),y(2),F(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Sr(n,e){if(n&1&&M(0,Tr,3,5,"label",20),n&2){let t=J();F(t._hasFloatingLabel()?0:-1)}}function Or(n,e){n&1&&At(0,"div",7)}function kr(n,e){}function Rr(n,e){if(n&1&&Zt(0,kr,0,0,"ng-template",13),n&2){J(2);let t=Se(1);ht("ngTemplateOutlet",t)}}function Vr(n,e){if(n&1&&(I(0,"div",9),M(1,Rr,1,1,null,13),T()),n&2){let t=J();ht("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),y(),F(t._forceDisplayInfixLabel()?-1:1)}}function Nr(n,e){n&1&&(I(0,"div",10,2),_(2,2),T())}function Lr(n,e){n&1&&(I(0,"div",11,3),_(2,3),T())}function Pr(n,e){}function Br(n,e){if(n&1&&Zt(0,Pr,0,0,"ng-template",13),n&2){J();let t=Se(1);ht("ngTemplateOutlet",t)}}function zr(n,e){n&1&&(I(0,"div",14,4),_(2,4),T())}function jr(n,e){n&1&&(I(0,"div",15,5),_(2,5),T())}function Ur(n,e){n&1&&At(0,"div",16)}function Hr(n,e){n&1&&(I(0,"div",18),_(1,6),T())}function Gr(n,e){if(n&1&&(I(0,"mat-hint",22),In(1),T()),n&2){let t=J(2);ht("id",t._hintLabelId),y(),Tn(t.hintLabel)}}function Wr(n,e){if(n&1&&(I(0,"div",19),M(1,Gr,2,2,"mat-hint",22),_(2,7),At(3,"div",23),_(4,8),T()),n&2){let t=J();y(),F(t.hintLabel?1:-1)}}var Xi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["mat-label"]]})}return n})(),ao=new m("MatError"),bd=(()=>{class n{id=a(lt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,o){i&2&&Fe("id",o.id)},inputs:{id:"id"},features:[U([{provide:ao,useExisting:n}])]})}return n})(),Ji=(()=>{class n{align="start";id=a(lt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,o){i&2&&(Fe("id",o.id),pt("align",null),x("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),$r=new m("MatPrefix");var so=new m("MatSuffix"),gd=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[U([{provide:so,useExisting:n}])]})}return n})(),lo=new m("FloatingLabelParent"),to=(()=>{class n{_elementRef=a(b);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=a($i);_ngZone=a(p);_parent=a(lo);_resizeSubscription=new Ut;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return qr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,o){i&2&&x("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function qr(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var eo="mdc-line-ripple--active",xe="mdc-line-ripple--deactivating",no=(()=>{class n{_elementRef=a(b);_cleanupTransitionEnd;constructor(){let t=a(p),i=a(ot);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(xe),t.add(eo)}deactivate(){this._elementRef.nativeElement.classList.add(xe)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,o=i.contains(xe);t.propertyName==="opacity"&&o&&i.remove(eo,xe)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),io=(()=>{class n{_elementRef=a(b);_ngZone=a(p);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(".mdc-floating-label");i?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width="":i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,o){if(i&1&&Ie(Ar,5),i&2){let r;w(r=E())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,o){i&2&&x("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:wr,ngContentSelectors:Er,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,o){i&1&&(rt(),q(0,"div",1),Yt(1,"div",2,0),_(3),Qt(),q(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Kr=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n})}return n})();var Zr=new m("MatFormField"),Yr=new m("MAT_FORM_FIELD_DEFAULT_OPTIONS"),oo="fill",Qr="auto",ro="fixed",Xr="translateY(-50%)",_d=(()=>{class n{_elementRef=a(b);_changeDetectorRef=a(Xt);_platform=a(v);_idGenerator=a(lt);_ngZone=a(p);_defaults=a(Yr,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=wt("iconPrefixContainer");_textPrefixContainerSignal=wt("textPrefixContainer");_iconSuffixContainerSignal=wt("iconSuffixContainer");_textSuffixContainerSignal=wt("textSuffixContainer");_prefixSuffixContainers=H(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=On(Xi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Wi(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Qr}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||oo;this._appearanceSignal.set(i)}_appearanceSignal=S(oo);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ro}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||ro}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new h;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=it();constructor(){let t=this._defaults,i=a(Un);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),$t(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=H(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let i=this._control,o="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(o+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Gt([void 0,void 0]),P(()=>[i.errorState,i.userAriaDescribedBy]),yn(),Y(([[r,s],[l,g]])=>r!==l||s!==g)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Q(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),gn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Rn({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=H(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,s=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),s&&t.push(s.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let i=this._control.describedByIds,o;if(i){let r=this._describedByIds||t;o=t.concat(i.filter(s=>s&&!r.includes(s)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,s=t?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,g=o?.getBoundingClientRect().width??0,L=r?.getBoundingClientRect().width??0,A=this._currentDirection==="rtl"?"-1":"1",Bt=`${s+l}px`,zt=`calc(${A} * (${Bt} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Ct=`var(--mat-mdc-form-field-label-transform, ${Xr} translateX(${zt}))`,$=s+l+g+L;return[Ct,$]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,o,r){if(i&1&&(Dn(r,o._labelChild,Xi,5),En(r,Kr,5)(r,$r,5)(r,so,5)(r,ao,5)(r,Ji,5)),i&2){Te();let s;w(s=E())&&(o._formFieldControl=s.first),w(s=E())&&(o._prefixChildren=s),w(s=E())&&(o._suffixChildren=s),w(s=E())&&(o._errorChildren=s),w(s=E())&&(o._hintChildren=s)}},viewQuery:function(i,o){if(i&1&&(Mn(o._iconPrefixContainerSignal,Ki,5)(o._textPrefixContainerSignal,Zi,5)(o._iconSuffixContainerSignal,Yi,5)(o._textSuffixContainerSignal,Qi,5),Ie(Dr,5)(Ki,5)(Zi,5)(Yi,5)(Qi,5)(to,5)(io,5)(no,5)),i&2){Te(4);let r;w(r=E())&&(o._textField=r.first),w(r=E())&&(o._iconPrefixContainer=r.first),w(r=E())&&(o._textPrefixContainer=r.first),w(r=E())&&(o._iconSuffixContainer=r.first),w(r=E())&&(o._textSuffixContainer=r.first),w(r=E())&&(o._floatingLabel=r.first),w(r=E())&&(o._notchedOutline=r.first),w(r=E())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,o){i&2&&x("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[U([{provide:Zr,useExisting:n},{provide:lo,useExisting:n}])],ngContentSelectors:Fr,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,o){if(i&1&&(rt(Mr),Zt(0,Sr,1,1,"ng-template",null,0,Sn),I(2,"div",6,1),bt("click",function(s){return o._control.onContainerClick(s)}),M(4,Or,1,0,"div",7),I(5,"div",8),M(6,Vr,2,2,"div",9),M(7,Nr,3,0,"div",10),M(8,Lr,3,0,"div",11),I(9,"div",12),M(10,Br,1,1,null,13),_(11),T(),M(12,zr,3,0,"div",14),M(13,jr,3,0,"div",15),T(),M(14,Ur,1,0,"div",16),T(),I(15,"div",17),M(16,Hr,2,0,"div",18)(17,Wr,5,1,"div",19),T()),i&2){let r;y(2),x("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),y(2),F(!o._hasOutline()&&!o._control.disabled?4:-1),y(2),F(o._hasOutline()?6:-1),y(),F(o._hasIconPrefix?7:-1),y(),F(o._hasTextPrefix?8:-1),y(2),F(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),y(2),F(o._hasTextSuffix?12:-1),y(),F(o._hasIconSuffix?13:-1),y(),F(o._hasOutline()?-1:14),y(),x("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let s=o._getSubscriptMessageType();y(),F((r=s)==="error"?16:r==="hint"?17:-1)}},dependencies:[to,io,Vn,no,Ji],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var N=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(N||{}),en=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=N.HIDDEN;constructor(e,t,i,o=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},co=Et({passive:!0,capture:!0}),nn=class{_events=new Map;addHandler(e,t,i,o){let r=this._events.get(t);if(r){let s=r.get(i);s?s.add(o):r.set(i,new Set([o]))}else this._events.set(t,new Map([[i,new Set([o])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,co)})}removeHandler(e,t,i){let o=this._events.get(e);if(!o)return;let r=o.get(t);r&&(r.delete(i),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,co)))}_delegateEventHandler=e=>{let t=G(e);t&&this._events.get(e.type)?.forEach((i,o)=>{(o===t||o.contains(t))&&i.forEach(r=>r.handleEvent(e))})}},Lt={enterDuration:225,exitDuration:150},Jr=800,mo=Et({passive:!0,capture:!0}),uo=["mousedown","touchstart"],fo=["mouseup","mouseleave","touchend","touchcancel"],ta=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Pt=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new nn;constructor(e,t,i,o,r){this._target=e,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=W(i)),r&&r.get(tt).load(ta)}fadeInRipple(e,t,i={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=c(c({},Lt),i.animation);i.centered&&(e=o.left+o.width/2,t=o.top+o.height/2);let s=i.radius||ea(e,t,o),l=e-o.left,g=t-o.top,L=r.enterDuration,A=document.createElement("div");A.classList.add("mat-ripple-element"),A.style.left=`${l-s}px`,A.style.top=`${g-s}px`,A.style.height=`${s*2}px`,A.style.width=`${s*2}px`,i.color!=null&&(A.style.backgroundColor=i.color),A.style.transitionDuration=`${L}ms`,this._containerElement.appendChild(A);let Bt=window.getComputedStyle(A),ln=Bt.transitionProperty,zt=Bt.transitionDuration,Ct=ln==="none"||zt==="0s"||zt==="0s, 0s"||o.width===0&&o.height===0,$=new en(this,A,i,Ct);A.style.transform="scale3d(1, 1, 1)",$.state=N.FADING_IN,i.persistent||(this._mostRecentTransientRipple=$);let jt=null;return!Ct&&(L||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let dn=()=>{jt&&(jt.fallbackTimer=null),clearTimeout(cn),this._finishRippleTransition($)},Ae=()=>this._destroyRipple($),cn=setTimeout(Ae,L+100);A.addEventListener("transitionend",dn),A.addEventListener("transitioncancel",Ae),jt={onTransitionEnd:dn,onTransitionCancel:Ae,fallbackTimer:cn}}),this._activeRipples.set($,jt),(Ct||!L)&&this._finishRippleTransition($),$}fadeOutRipple(e){if(e.state===N.FADING_OUT||e.state===N.HIDDEN)return;let t=e.element,i=c(c({},Lt),e.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=N.FADING_OUT,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=W(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,uo.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{fo.forEach(t=>{this._triggerElement.addEventListener(t,this,mo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===N.FADING_IN?this._startFadeOutTransition(e):e.state===N.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=N.VISIBLE,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=N.HIDDEN,t!==null&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=Rt(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Jr;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!Vt(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===N.VISIBLE||e.config.terminateOnPointerUp&&e.state===N.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(uo.forEach(t=>n._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(fo.forEach(t=>e.removeEventListener(t,this,mo)),this._pointerUpEventsRegistered=!1))}};function ea(n,e,t){let i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+o*o)}var on=new m("mat-ripple-global-options"),Sd=(()=>{class n{_elementRef=a(b);_animationsDisabled=it();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=a(p),i=a(v),o=a(on,{optional:!0}),r=a(X);this._globalOptions=o||{},this._rippleRenderer=new Pt(this,t,this._elementRef,i,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:c(c(c({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,c(c({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,c(c({},this.rippleConfig),t))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,o){i&2&&x("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var na={capture:!0},ia=["focus","mousedown","mouseenter","touchstart"],rn="mat-ripple-loader-uninitialized",an="mat-ripple-loader-class-name",po="mat-ripple-loader-centered",Ce="mat-ripple-loader-disabled",ho=(()=>{class n{_document=a(B);_animationsDisabled=it();_globalRippleOptions=a(on,{optional:!0});_platform=a(v);_ngZone=a(p);_injector=a(X);_eventCleanups;_hosts=new Map;constructor(){let t=a(Kt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ia.map(i=>t.listen(this._document,i,this._onInteraction,na)))}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(t,i){t.setAttribute(rn,this._globalRippleOptions?.namespace??""),(i.className||!t.hasAttribute(an))&&t.setAttribute(an,i.className||""),i.centered&&t.setAttribute(po,""),i.disabled&&t.setAttribute(Ce,"")}setDisabled(t,i){let o=this._hosts.get(t);o?(o.target.rippleDisabled=i,!i&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):i?t.setAttribute(Ce,""):t.removeAttribute(Ce)}_onInteraction=t=>{let i=G(t);if(i instanceof HTMLElement){let o=i.closest(`[${rn}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",t.getAttribute(an)),t.append(i);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Lt.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??Lt.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Ce),rippleConfig:{centered:t.hasAttribute(po),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},g=new Pt(l,this._ngZone,i,this._platform,this._injector),L=!l.rippleDisabled;L&&g.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:g,hasSetUpEvents:L}),t.removeAttribute(rn)}destroyRipple(t){let i=this._hosts.get(t);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var oa=["mat-icon-button",""],ra=["*"],aa=new m("MAT_BUTTON_CONFIG");function go(n){return n==null?void 0:kn(n)}var sn=(()=>{class n{_elementRef=a(b);_ngZone=a(p);_animationsDisabled=it();_config=a(aa,{optional:!0});_focusMonitor=a(he);_cleanupClick;_renderer=a(ot);_rippleLoader=a(ho);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){a(tt).load(bo);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",i){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,o){i&2&&(pt("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Fn(o.color?"mat-"+o.color:""),x("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",V],disabled:[2,"disabled","disabled",V],ariaDisabled:[2,"aria-disabled","ariaDisabled",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V],tabIndex:[2,"tabIndex","tabIndex",go],_tabindex:[2,"tabindex","_tabindex",go]}})}return n})(),sa=(()=>{class n extends sn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[D],attrs:oa,ngContentSelectors:ra,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,o){i&1&&(rt(),q(0,"span",0),_(1),q(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var _o=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=R({type:n});static \u0275inj=k({imports:[te]})}return n})();var la=["matButton",""],da=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ca=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var vo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),oc=(()=>{class n extends sn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=ma(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let i=this._elementRef.nativeElement.classList,o=this._appearance?vo.get(this._appearance):null,r=vo.get(t);o&&i.remove(...o),i.add(...r),this._appearance=t}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[D],attrs:la,ngContentSelectors:ca,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,o){i&1&&(rt(da),q(0,"span",0),_(1),Yt(2,"span",1),_(3,1),Qt(),_(4,2),q(5,"span",2)(6,"span",3)),i&2&&x("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function ma(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var rc=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=R({type:n});static \u0275inj=k({imports:[_o,te]})}return n})();var sc=(()=>{class n{isErrorState(t,i){return!!(t&&t.invalid&&(t.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yo=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(e,t,i,o,r){this._defaultMatcher=e,this.ngControl=t,this._parentFormGroup=i,this._parentForm=o,this._stateChanges=r}updateErrorState(){let e=this.errorState,t=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=i?.isErrorState(o,t)??!1;r!==e&&(this.errorState=r,this._stateChanges.next())}};var mc=new m("MAT_INPUT_VALUE_ACCESSOR");export{sc as a,$e as b,be as c,qe as d,Cr as e,it as f,Rt as g,Vt as h,Ge as i,W as j,he as k,tr as l,Ts as m,Si as n,Vi as o,Li as p,pr as q,br as r,gr as s,ji as t,Ze as u,Ye as v,lt as w,vr as x,yr as y,Fl as z,Nl as A,Wi as B,Pl as C,Pt as D,on as E,Sd as F,bo as G,_o as H,yo as I,Hn as J,Ne as K,ti as L,ce as M,Gn as N,at as O,La as P,Pa as Q,Wo as R,Ko as S,za as T,Qo as U,Jo as V,ja as W,Ua as X,Ha as Y,bd as Z,gd as _,Kr as $,Zr as aa,_d as ba,mc as ca,sa as da,oc as ea,rc as fa};
