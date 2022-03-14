(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{mmyE:function(t,e,i){"use strict";i.r(e),i.d(e,"FilmsModule",function(){return w});var b=i("tyNb"),s=i("ofXK");class n{}var r=i("fXoL"),c=i("7RJT"),l=i("lJxs"),a=i("IzEk"),o=i("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.films$=new c.BehaviorSubject([])}get films(){return this.films$.asObservable()}get(t){return this.http.get(`https://swapi.dev/api/films/${t}`).pipe(Object(l.a)(t=>this.mapFilm(t)))}getFilms(){return this.http.get("https://swapi.dev/api/films").pipe(Object(a.a)(10),Object(l.a)(t=>t.results.map(t=>this.mapFilm(t)))).subscribe({next:t=>this.films$.next(t)}),this.films$.asObservable()}search(t){return this.http.get(`https://swapi.dev/api/films?search=${t}`).pipe(Object(a.a)(10),Object(l.a)(t=>t.results.map(t=>this.mapFilm(t)))).subscribe({next:t=>this.films$.next(t)}),this.films$.asObservable()}mapFilm(t){const e=t.url.substring(t.url.lastIndexOf("/",t.url.length-2)+1,t.url.lastIndexOf("/"));let i=new n;return i.id=parseInt(e),i.director=t.director,i.episodeId=t.episode_id,i.openingCrawl=t.opening_crawl,i.producer=t.producer,i.title=t.title,i}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=i("z6py");function p(t,e){if(1&t&&(r.Mb(0,"div"),r.Mb(1,"h4"),r.ec(2,"Details"),r.Lb(),r.Kb(3,"hr"),r.Mb(4,"div",3),r.Mb(5,"div",4),r.Mb(6,"div",5),r.Mb(7,"label",6),r.ec(8,"Title"),r.Lb(),r.Mb(9,"div",7),r.ec(10),r.Lb(),r.Lb(),r.Lb(),r.Mb(11,"div",4),r.Mb(12,"div",5),r.Mb(13,"label",6),r.ec(14,"Director"),r.Lb(),r.Mb(15,"div",7),r.ec(16),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(17,"div",3),r.Mb(18,"div",4),r.Mb(19,"div",5),r.Mb(20,"label",6),r.ec(21,"Episode"),r.Lb(),r.Mb(22,"div",7),r.ec(23),r.Lb(),r.Lb(),r.Lb(),r.Mb(24,"div",4),r.Mb(25,"div",5),r.Mb(26,"label",6),r.ec(27,"Producer"),r.Lb(),r.Mb(28,"div",7),r.ec(29),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(30,"div",3),r.Mb(31,"div",8),r.Mb(32,"div",5),r.Mb(33,"label",6),r.ec(34,"Opening crawl"),r.Lb(),r.Mb(35,"div",7),r.ec(36),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(37,"hr"),r.Mb(38,"div",3),r.Mb(39,"div",9),r.Mb(40,"a",10),r.ec(41,"Back"),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&t){const t=r.Ub();r.zb(10),r.fc(t.film.title),r.zb(6),r.fc(t.film.director),r.zb(7),r.fc(t.film.episodeId),r.zb(6),r.fc(t.film.producer),r.zb(7),r.fc(t.film.openingCrawl)}}function m(t,e){1&t&&(r.Mb(0,"div"),r.Mb(1,"h4",11),r.ec(2,"Film not found"),r.Lb(),r.Lb())}let u=(()=>{class t{constructor(t,e){this.filmService=t,this.activatedRoute=e,this.film=new n}ngOnInit(){this.paramsSub=this.activatedRoute.params.subscribe({next:t=>{t.id&&(this.filmSub=this.filmService.get(t.id).subscribe({next:t=>{this.film=t},error:t=>{this.film=void 0}}))}})}ngOnDestroy(){this.paramsSub.unsubscribe(),this.filmSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(d),r.Jb(b.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-film-detail"]],decls:4,vars:2,consts:[["tab","films"],[4,"ngIf","ngIfElse"],["nothingFound",""],[1,"row"],[1,"col-md-6"],[1,"field"],[1,"field-label"],[1,"field-value"],[1,"col-md-12"],[1,"col-md-12","content-right"],["routerLink","/films",1,"btn","btn-primary"],[1,"text-center","message"]],template:function(t,e){if(1&t&&(r.Kb(0,"link-component",0),r.cc(1,p,42,5,"div",1),r.cc(2,m,3,0,"ng-template",null,2,r.dc)),2&t){const t=r.Zb(3);r.zb(1),r.Vb("ngIf",e.film)("ngIfElse",t)}},directives:[f.a,s.j,b.c],styles:[".field[_ngcontent-%COMP%]{margin-bottom:10px}.field-label[_ngcontent-%COMP%]{font-weight:700;margin-left:8px;margin-bottom:4px;font-size:14px}.field-value[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:5px 15px;border-radius:20px}"]}),t})();function h(t,e){if(1&t&&(r.Mb(0,"tr"),r.Kb(1,"td",5),r.Kb(2,"td",5),r.Kb(3,"td",5),r.Mb(4,"td"),r.Mb(5,"a",6),r.ec(6,"More Details"),r.Lb(),r.Lb(),r.Lb()),2&t){const t=e.$implicit;r.zb(1),r.Vb("innerText",t.title),r.zb(1),r.Vb("innerText",t.director),r.zb(1),r.Vb("innerText",t.episodeId),r.zb(2),r.Wb("href","films/",t.id,"",r.ac)}}let v=(()=>{class t{constructor(t,e){this.filmService=t,this.activatedRoute=e,this.films=new Array}ngOnInit(){this.filmsSubscription=this.filmService.films.subscribe(t=>this.films=t),this.paramsSubscription=this.activatedRoute.queryParams.subscribe({next:t=>{t.search?this.filmService.search(t.search):this.filmService.getFilms()}})}ngOnDestroy(){this.paramsSubscription.unsubscribe(),this.filmsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(d),r.Jb(b.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-film-list"]],decls:6,vars:1,consts:[["tab","films"],[1,"row"],[1,"col-md-12"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[3,"innerText"],[3,"href"]],template:function(t,e){1&t&&(r.Kb(0,"link-component",0),r.Mb(1,"div",1),r.Mb(2,"div",2),r.Mb(3,"table",3),r.Mb(4,"tbody"),r.cc(5,h,7,4,"tr",4),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.zb(5),r.Vb("ngForOf",e.films))},directives:[f.a,s.i],styles:[""]}),t})();const M=[{path:"",component:v},{path:":id",component:u},{path:"**",component:v}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[b.d.forChild(M)]]}),t})();var g=i("J9nG");let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[s.b,o.b,L,g.a,b.d]]}),t})()}}]);