(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{N3Et:function(e,t,b){"use strict";b.r(t),b.d(t,"PeopleModule",function(){return g});var i=b("ofXK"),o=b("tk/3"),r=b("tyNb"),p=b("fXoL"),s=b("7RJT"),n=b("lJxs"),l=b("IzEk");class c{}let a=(()=>{class e{constructor(e){this.http=e,this.people$=new s.BehaviorSubject([])}get peoples(){return this.people$.asObservable()}get(e){return this.http.get(`https://swapi.dev/api/people/${e}`).pipe(Object(n.a)(e=>this.mapPeople(e)))}search(e){return this.http.get(`https://swapi.dev/api/people?search=${e}`).pipe(Object(l.a)(10),Object(n.a)(e=>e.results.map(e=>this.mapPeople(e)))).subscribe({next:e=>this.people$.next(e)}),this.people$.asObservable()}getPeoples(){return this.http.get("https://swapi.dev/api/people").pipe(Object(l.a)(10),Object(n.a)(e=>e.results.map(e=>this.mapPeople(e)))).subscribe({next:e=>this.people$.next(e)}),this.people$.asObservable()}mapHeight(e){return e>200?"high":e<200&&e>100?"normal":"low"}mapPeople(e){const t=e.url.substring(e.url.lastIndexOf("/",e.url.length-2)+1,e.url.lastIndexOf("/")),b=new c;return b.id=parseInt(t),b.name=e.name,b.birthyear=e.birth_year,b.eyeColor=e.eye_color,b.hairColor=e.hair_color,b.skinColor=e.skin_color,b.height=this.mapHeight(e.height),b.gender=e.gender,b.mass=e.mass,this.http.get(e.homeworld).subscribe(e=>b.homeworld=e.name),b}}return e.\u0275fac=function(t){return new(t||e)(p.Pb(o.a))},e.\u0275prov=p.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=b("z6py");function h(e,t){if(1&e&&(p.Mb(0,"tr"),p.Kb(1,"td",5),p.Kb(2,"td",5),p.Kb(3,"td",5),p.Mb(4,"td"),p.Mb(5,"a",6),p.ec(6,"More Details"),p.Lb(),p.Lb(),p.Lb()),2&e){const e=t.$implicit;p.zb(1),p.Vb("innerText",e.name),p.zb(1),p.Vb("innerText",e.height),p.zb(1),p.Vb("innerText",e.homeworld),p.zb(2),p.Vb("routerLink","/people/"+e.id)}}let u=(()=>{class e{constructor(e,t){this.peopleService=e,this.activatedRoute=t,this.peoples=new Array,this.search=""}ngOnInit(){this.peopleSub=this.peopleService.peoples.subscribe({next:e=>this.peoples=e}),this.paramsSub=this.activatedRoute.queryParams.subscribe({next:e=>{e.search?this.peopleService.search(e.search):this.peopleService.getPeoples()}})}ngOnDestroy(){this.paramsSub.unsubscribe(),this.peopleSub.unsubscribe()}loadPeople(e){e?this.peopleService.search(this.search).subscribe({next:e=>this.peoples=e}):this.peopleService.getPeoples().subscribe({next:e=>this.peoples=e})}}return e.\u0275fac=function(t){return new(t||e)(p.Jb(a),p.Jb(r.a))},e.\u0275cmp=p.Db({type:e,selectors:[["app-people-list"]],decls:6,vars:1,consts:[["tab","people"],[1,"row"],[1,"col-md-12"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[3,"innerText"],[3,"routerLink"]],template:function(e,t){1&e&&(p.Kb(0,"link-component",0),p.Mb(1,"div",1),p.Mb(2,"div",2),p.Mb(3,"table",3),p.Mb(4,"tbody"),p.cc(5,h,7,4,"tr",4),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&e&&(p.zb(5),p.Vb("ngForOf",t.peoples))},directives:[d.a,i.i,r.c],styles:[""]}),e})();function v(e,t){if(1&e&&(p.Mb(0,"div"),p.Mb(1,"h4"),p.ec(2,"Details"),p.Lb(),p.Kb(3,"hr"),p.Mb(4,"div",3),p.Mb(5,"div",4),p.Mb(6,"div",5),p.Mb(7,"label",6),p.ec(8,"Name"),p.Lb(),p.Mb(9,"div",7),p.ec(10),p.Lb(),p.Lb(),p.Lb(),p.Mb(11,"div",4),p.Mb(12,"div",5),p.Mb(13,"label",6),p.ec(14,"Gender"),p.Lb(),p.Mb(15,"div",7),p.ec(16),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(17,"div",3),p.Mb(18,"div",4),p.Mb(19,"div",5),p.Mb(20,"label",6),p.ec(21,"Birth year"),p.Lb(),p.Mb(22,"div",7),p.ec(23),p.Lb(),p.Lb(),p.Lb(),p.Mb(24,"div",4),p.Mb(25,"div",5),p.Mb(26,"label",6),p.ec(27,"Homeworld"),p.Lb(),p.Mb(28,"div",7),p.ec(29),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(30,"div",3),p.Mb(31,"div",4),p.Mb(32,"div",5),p.Mb(33,"label",6),p.ec(34,"Height"),p.Lb(),p.Mb(35,"div",7),p.ec(36),p.Lb(),p.Lb(),p.Lb(),p.Mb(37,"div",4),p.Mb(38,"div",5),p.Mb(39,"label",6),p.ec(40,"Mass"),p.Lb(),p.Mb(41,"div",7),p.ec(42),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(43,"div",3),p.Mb(44,"div",4),p.Mb(45,"div",5),p.Mb(46,"label",6),p.ec(47,"Hair color"),p.Lb(),p.Mb(48,"div",7),p.ec(49),p.Lb(),p.Lb(),p.Lb(),p.Mb(50,"div",4),p.Mb(51,"div",5),p.Mb(52,"label",6),p.ec(53,"Eye color"),p.Lb(),p.Mb(54,"div",7),p.ec(55),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(56,"div",3),p.Mb(57,"div",4),p.Mb(58,"div",5),p.Mb(59,"label",6),p.ec(60,"Hair color"),p.Lb(),p.Mb(61,"div",7),p.ec(62),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Kb(63,"hr"),p.Mb(64,"div",3),p.Mb(65,"div",8),p.Mb(66,"a",9),p.ec(67,"Back"),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&e){const e=p.Ub();p.zb(10),p.fc(e.people.name),p.zb(6),p.fc(e.people.gender),p.zb(7),p.fc(e.people.birthyear),p.zb(6),p.fc(e.people.homeworld),p.zb(7),p.fc(e.people.height),p.zb(6),p.fc(e.people.mass),p.zb(7),p.fc(e.people.hairColor),p.zb(6),p.fc(e.people.eyeColor),p.zb(7),p.fc(e.people.skinColor)}}function M(e,t){1&e&&(p.Mb(0,"div"),p.Mb(1,"h2",10),p.ec(2,"Character not found"),p.Lb(),p.Lb())}const L=[{path:"",component:u},{path:":id",component:(()=>{class e{constructor(e,t){this.peopleService=e,this.activatedRoute=t,this.people=new c}ngOnInit(){this.activatedRoute.params.subscribe({next:e=>{this.peopleService.get(e.id).subscribe({next:e=>{this.people=e},error:e=>{this.people=void 0}})}})}}return e.\u0275fac=function(t){return new(t||e)(p.Jb(a),p.Jb(r.a))},e.\u0275cmp=p.Db({type:e,selectors:[["app-people-detail"]],decls:4,vars:2,consts:[["tab","people"],[4,"ngIf","ngIfElse"],["nothingFound",""],[1,"row"],[1,"col-md-6"],[1,"field"],[1,"field-label"],[1,"field-value"],[1,"col-md-12","content-right"],["routerLink","/people",1,"btn","btn-primary"],[1,"text-center","message"]],template:function(e,t){if(1&e&&(p.Kb(0,"link-component",0),p.cc(1,v,68,9,"div",1),p.cc(2,M,3,0,"ng-template",null,2,p.dc)),2&e){const e=p.Zb(3);p.zb(1),p.Vb("ngIf",t.people)("ngIfElse",e)}},directives:[d.a,i.j,r.c],styles:[".field[_ngcontent-%COMP%]{margin-bottom:10px}.field-label[_ngcontent-%COMP%]{font-weight:700;margin-left:8px;margin-bottom:4px;font-size:14px}.field-value[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:5px 15px;border-radius:20px}"]}),e})()},{path:"**",component:u}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({imports:[[i.b,r.d.forChild(L)]]}),e})();var m=b("J9nG");let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({providers:[],imports:[[i.b,r.d,o.b,m.a,f]]}),e})()}}]);