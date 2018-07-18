(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mapa_home_mapa_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mapa-home/mapa-home.component */ "./src/app/components/mapa-home/mapa-home.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_cerveceria_cerveceria_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cerveceria/cerveceria.component */ "./src/app/components/cerveceria/cerveceria.component.ts");
/* harmony import */ var _components_cervecerias_cervecerias_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cervecerias/cervecerias.component */ "./src/app/components/cervecerias/cervecerias.component.ts");
/* harmony import */ var _components_destacadas_home_destacadas_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/destacadas-home/destacadas-home.component */ "./src/app/components/destacadas-home/destacadas-home.component.ts");
/* harmony import */ var _components_nueva_cerveceria_nueva_cerveceria_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/nueva-cerveceria/nueva-cerveceria.component */ "./src/app/components/nueva-cerveceria/nueva-cerveceria.component.ts");
/* harmony import */ var _components_admin_add_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/add/add.component */ "./src/app/components/admin/add/add.component.ts");
/* harmony import */ var _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/admin-home/admin-home.component */ "./src/app/components/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _components_admin_delete_delete_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/delete/delete.component */ "./src/app/components/admin/delete/delete.component.ts");
/* harmony import */ var _components_admin_update_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/update/update.component */ "./src/app/components/admin/update/update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Google Maps

//Rutas

//Servicios











//admin




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_mapa_home_mapa_home_component__WEBPACK_IMPORTED_MODULE_8__["MapaHomeComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_cerveceria_cerveceria_component__WEBPACK_IMPORTED_MODULE_13__["CerveceriaComponent"],
                _components_cervecerias_cervecerias_component__WEBPACK_IMPORTED_MODULE_14__["CerveceriasComponent"],
                _components_destacadas_home_destacadas_home_component__WEBPACK_IMPORTED_MODULE_15__["DestacadasHomeComponent"],
                _components_nueva_cerveceria_nueva_cerveceria_component__WEBPACK_IMPORTED_MODULE_16__["NuevaCerveceriaComponent"],
                _components_admin_add_add_component__WEBPACK_IMPORTED_MODULE_17__["AddComponent"],
                _components_admin_delete_delete_component__WEBPACK_IMPORTED_MODULE_19__["DeleteComponent"],
                _components_admin_update_update_component__WEBPACK_IMPORTED_MODULE_20__["UpdateComponent"],
                _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_18__["AdminHomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCdZJ4FE_E5uVGEa_EmdOhOEbS5wNJUe-4',
                    libraries: ['geometry']
                }),
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTING"]
            ],
            providers: [
                _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_6__["CerveceriasService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cerveceria_cerveceria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cerveceria/cerveceria.component */ "./src/app/components/cerveceria/cerveceria.component.ts");
/* harmony import */ var _components_cervecerias_cervecerias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cervecerias/cervecerias.component */ "./src/app/components/cervecerias/cervecerias.component.ts");
/* harmony import */ var _components_nueva_cerveceria_nueva_cerveceria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nueva-cerveceria/nueva-cerveceria.component */ "./src/app/components/nueva-cerveceria/nueva-cerveceria.component.ts");
/* harmony import */ var _components_admin_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/add/add.component */ "./src/app/components/admin/add/add.component.ts");
/* harmony import */ var _components_admin_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/delete/delete.component */ "./src/app/components/admin/delete/delete.component.ts");
/* harmony import */ var _components_admin_update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/update/update.component */ "./src/app/components/admin/update/update.component.ts");
/* harmony import */ var _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin-home/admin-home.component */ "./src/app/components/admin/admin-home/admin-home.component.ts");





//Admin




var APP_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'cerveceria/:slug', component: _components_cerveceria_cerveceria_component__WEBPACK_IMPORTED_MODULE_2__["CerveceriaComponent"] },
    { path: 'cervecerias', component: _components_cervecerias_cervecerias_component__WEBPACK_IMPORTED_MODULE_3__["CerveceriasComponent"] },
    { path: 'nueva', component: _components_nueva_cerveceria_nueva_cerveceria_component__WEBPACK_IMPORTED_MODULE_4__["NuevaCerveceriaComponent"] },
    { path: 'cervecerias/add', component: _components_admin_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"] },
    { path: 'cervecerias/delete/:id', component: _components_admin_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["DeleteComponent"] },
    { path: 'cervecerias/update/:id', component: _components_admin_update_update_component__WEBPACK_IMPORTED_MODULE_7__["UpdateComponent"] },
    { path: 'admin', component: _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_8__["AdminHomeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/admin/add/add.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/admin/add/add.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n<br>\n<h1>\n  Alta cerveceria\n</h1>\n<br><br>\n<form method=\"post\" (ngSubmit)=\"alta()\" #formcerveceria=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"title\">Nombre</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter cerveceria Title\" name=\"nombreCer\" [(ngModel)]=\"cerveceria.nombreCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"title\">Slug</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter cerveceria Title\" name=\"slug\" [(ngModel)]=\"cerveceria.slug\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"year\">Dirección</label>\n    <input type=\"text\" class=\"form-control\" id=\"year\" placeholder=\"Enter cerveceria Year\" name=\"ubicacionCer\" [(ngModel)]=\"cerveceria.ubicacionCer\" >\n    <button type=\"button\" (click)=\"geocoderSer()\" class=\"btn btn-danger\">Geocoder</button>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Imagen</label>\n    <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Enter cerveceria Country\" name=\"urlImagenCer\" [(ngModel)]=\"cerveceria.urlImagenCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"poster\">Promedio Bebida</label>\n    <input type=\"text\" class=\"form-control\" id=\"poster\" placeholder=\"Enter cerveceria Poster\" name=\"promBebCer\" [(ngModel)]=\"cerveceria.promBebCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Promedio Comida</label>\n    <input type=\"text\" class=\"form-control\" id=\"seasons\" placeholder=\"Enter cerveceria Seasons\" name=\"promComCer\" [(ngModel)]=\"cerveceria.promComCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Latitud</label>\n    <input type=\"text\" class=\"form-control\" id=\"seasons\" placeholder=\"Enter cerveceria Seasons\" name=\"lat\" [(ngModel)]=\"cerveceria.lat\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Longitud</label>\n    <input type=\"text\" class=\"form-control\" id=\"seasons\" placeholder=\"Enter cerveceria Seasons\" name=\"lng\" [(ngModel)]=\"cerveceria.lng\" >\n  </div>\n<input type=\"hidden\" class=\"form-control\" id=\"title\" placeholder=\"1\" name=\"id\" [(ngModel)]=\"cerveceria.id\" >\n  <div class=\"form-group row\">\n    <div class=\"input-group col-md-8\">\n      <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n      <button type=\"button\" (click)=\"cancelar()\" class=\"btn btn-danger\">Cancelar</button>\n    </div>\n  </div>\n</form>\n\n{{ cerveceria | json }}\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin/add/add.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/add/add.component.ts ***!
  \*******************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = /** @class */ (function () {
    function AddComponent(_cerveceriasService, router) {
        this._cerveceriasService = _cerveceriasService;
        this.router = router;
        this.cerveceria = {};
        this.coordenadas = {};
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.alta = function () {
        var _this = this;
        console.log(this.cerveceria);
        this._cerveceriasService.addCerveceria(this.cerveceria).subscribe(function (res) { console.log('Agregado!'); _this.router.navigate(['/admin']); });
    };
    AddComponent.prototype.cancelar = function () {
        this.router.navigate(['/admin']);
    };
    AddComponent.prototype.geocoderSer = function () {
        this.coordenadas = this._cerveceriasService.geocoder('Bogotá+367,Ciudad+de+Buenos+Aires,+Argentina');
        console.log(this.coordenadas);
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/admin/add/add.component.html")
        }),
        __metadata("design:paramtypes", [_services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__["CerveceriasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-home/admin-home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/admin-home/admin-home.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-home/admin-home.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-home/admin-home.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n<br><br>\n<h1>\n  Cervecerias\n</h1>\n<br><br>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"addCerveceria()\">Nueva Cerveceria</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"importCerveceria()\">Importar Cervecerias</button>\n<br><br>\n<br><br>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Detalles</th>\n      <th scope=\"col\">Editar</th>\n      <th scope=\"col\">Borrar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let post of cervecerias; let i=index\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{post.nombreCer}}</td>\n      <td><button type=\"button\" (click)=\"verCerveceria(post.slug)\" class=\"btn btn-info\">Detalles</button></td>\n      <td><button type=\"button\" class=\"btn btn-warning\" (click)=\"updateCerveceria(post._id)\">Editar</button></td>\n      <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCerveceria(post._id)\">Borrar</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin/admin-home/admin-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-home/admin-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _services_import_cerveceria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/import-cerveceria.service */ "./src/app/services/import-cerveceria.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(_conectapiService, _importCervecerias, router) {
        this._conectapiService = _conectapiService;
        this._importCervecerias = _importCervecerias;
        this.router = router;
        this.cervecerias = [];
        this.cerveceriasImport = [];
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._conectapiService.getCervecerias().subscribe(function (data) {
            console.log(data);
            _this.cervecerias = data;
        });
    };
    AdminHomeComponent.prototype.verCerveceria = function (slug) {
        this.router.navigate(['/cerveceria', slug]);
    };
    AdminHomeComponent.prototype.addCerveceria = function () {
        this.router.navigate(['/cervecerias', 'add']);
    };
    AdminHomeComponent.prototype.deleteCerveceria = function (id) {
        this.router.navigate(['/cervecerias', 'delete', id]);
    };
    AdminHomeComponent.prototype.updateCerveceria = function (id) {
        this.router.navigate(['/cervecerias', 'update', id]);
    };
    AdminHomeComponent.prototype.importCerveceria = function () {
        var _this = this;
        this.cerveceriasImport = this._importCervecerias.importCervecerias();
        console.log(this.cerveceriasImport);
        this.cerveceriasImport.forEach(function (item) {
            _this._conectapiService.addCerveceria(item).subscribe(function (res) { console.log('Agregado: ' + item.nombreCer); });
        });
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/components/admin/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/components/admin/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__["CerveceriasService"], _services_import_cerveceria_service__WEBPACK_IMPORTED_MODULE_2__["ImportCerveceriaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/delete/delete.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/delete/delete.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/delete/delete.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/delete/delete.component.ts ***!
  \*************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(_cerveceriasService, activatedRoute, router) {
        this._cerveceriasService = _cerveceriasService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this._cerveceriasService.deleteCerveceria(params['id']).subscribe(function (res) { console.log('Eliminado!'); _this.router.navigate(['/admin']); });
        });
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-del',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/components/admin/delete/delete.component.html")
        }),
        __metadata("design:paramtypes", [_services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__["CerveceriasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/update/update.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/update/update.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n<h1>\n  Editar cerveceria\n</h1>\n\n<form method=\"post\" (ngSubmit)=\"modificar()\" #formcerveceria=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"title\">Nombre</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter cerveceria Title\" name=\"nombreCer\" [(ngModel)]=\"cerveceria.nombreCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"title\">Slug</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter cerveceria Title\" name=\"slug\" [(ngModel)]=\"cerveceria.slug\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"year\">Dirección</label>\n    <input type=\"text\" class=\"form-control\" id=\"year\" placeholder=\"Enter cerveceria Year\" name=\"ubicacionCer\" [(ngModel)]=\"cerveceria.ubicacionCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Imagen</label>\n    <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Enter cerveceria Country\" name=\"urlImagenCer\" [(ngModel)]=\"cerveceria.urlImagenCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"poster\">Promedio Bebida</label>\n    <input type=\"text\" class=\"form-control\" id=\"poster\" placeholder=\"Enter cerveceria Poster\" name=\"promBebCer\" [(ngModel)]=\"cerveceria.promBebCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Promedio Comida</label>\n    <input type=\"text\" class=\"form-control\" id=\"seasons\" placeholder=\"Enter cerveceria Seasons\" name=\"promComCer\" [(ngModel)]=\"cerveceria.promComCer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Latitud</label>\n    <input type=\"text\" class=\"form-control\" id=\"seasons\" placeholder=\"Enter cerveceria Seasons\" name=\"lat\" [(ngModel)]=\"cerveceria.lat\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"country\">Longitud</label>\n    <input type=\"text\" class=\"form-control\" id=\"seasons\" placeholder=\"Enter cerveceria Seasons\" name=\"lng\" [(ngModel)]=\"cerveceria.lng\" >\n  </div>\n<input type=\"hidden\" class=\"form-control\" id=\"title\" placeholder=\"1\" name=\"id\" [(ngModel)]=\"cerveceria.id\" >\n  <div class=\"form-group row\">\n    <div class=\"input-group col-md-8\">\n      <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n      <button type=\"button\" (click)=\"cancelar()\" class=\"btn btn-danger\">Cancelar</button>\n    </div>\n  </div>\n</form>\n\n{{ cerveceria | json }}\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin/update/update.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/update/update.component.ts ***!
  \*************************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_cerveceriasService, activatedRoute, router) {
        this._cerveceriasService = _cerveceriasService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.cerveceria = {};
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['id']);
            _this._cerveceriasService.getCerveceriaById(params['id'])
                .subscribe(function (data) { return _this.cerveceria = {
                _id: data['_id'],
                id: data['id'],
                slug: data['slug'],
                nombreCer: data['nombreCer'],
                ubicacionCer: data['ubicacionCer'],
                urlImagenCer: data['urlImagenCer'],
                promBebCer: data['promBebCer'],
                promComCer: data['promComCer'],
                lat: data['lat'],
                lng: data['lng']
            }; });
        });
    };
    UpdateComponent.prototype.modificar = function () {
        var _this = this;
        console.log(this.cerveceria);
        this._cerveceriasService.updateCerveceria(this.cerveceria).subscribe(function (res) { console.log('Editado!'); _this.router.navigate(['admin/']); });
    };
    UpdateComponent.prototype.cancelar = function () {
        this.router.navigate(['/cervecerias']);
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/components/admin/update/update.component.html")
        }),
        __metadata("design:paramtypes", [_services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__["CerveceriasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/cerveceria/cerveceria.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/cerveceria/cerveceria.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {max-width: 100%;}\nh1{margin:15px 10px;}\n.container{margin-top:30px;}\n.regresar{margin-top: 30px;}\nagm-map {\n  height: 200px;\n  margin: 0;\n}\n.comentario-item{background: #eee;margin-bottom: 30px;padding: 20px;}\n"

/***/ }),

/***/ "./src/app/components/cerveceria/cerveceria.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/cerveceria/cerveceria.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <img [src]=\"cerveceria.urlImagenCer\" [alt]=\"cerveceria.nombreCer\">\n    </div>\n    <div class=\"col-sm\">\n     <h1>{{ cerveceria.nombreCer }} <small>{{ cerveceria.ubicacionCer }}</small></h1>\n     <ul>\n       <li>Puntaje Bebida: {{ promBebCer | number : '1.1-1' }}</li>\n       <li>Puntaje Comida: {{ promComCer | number : '1.1-1' }}</li>\n     </ul>\n     <agm-map\n       [latitude]=\"lat\"\n       [longitude]=\"lng\"\n       [zoom]=\"zoom\"\n       [disableDefaultUI]=\"false\"\n       [zoomControl]=\"false\"\n       (mapClick)=\"mapClicked($event)\">\n\n       <agm-marker\n           *ngFor=\"let m of markers; let i = index\"\n           (markerClick)=\"clickedMarker(m.label, i)\"\n           [latitude]=\"m.lat\"\n           [longitude]=\"m.lng\"\n           [label]=\"m.label\"\n           >\n\n           <agm-info-window\n           [latitude]=\"m.lat\"\n           [longitude]=\"m.lng\">\n           <h3>{{m.nombreCer}}</h3>\n           <p>{{m.ubicacionCer}}</p>\n           </agm-info-window>\n\n       </agm-marker>\n     </agm-map>\n    </div>\n  </div>\n  <br/>\n  <br/>\n  <h2>Comentarios</h2>\n  <div *ngFor=\"let comentario of comentarios; let i=index\">\n    <div class=\"comentario-item\">\n      <h4>{{comentario.nombreUsuario}}</h4>\n      <p><strong>Comentario:</strong> {{comentario.comentarioUsuario}}</p>\n      <p>Votó bebida: {{comentario.puntajeBebidaUsuario}} - Votó comida: {{comentario.puntajeComidaUsuario}}</p>\n    </div>\n  </div>\n  <br/>\n  <div id=\"form-comentario\">\n    <h3>Dejá tu comentario</h3>\n    <p>La votación se habilita completando todos los campos</p>\n    <form method=\"post\" (ngSubmit)=\"altaComentario();formcerveceria.reset()\" #formcerveceria=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" required minlength=\"5\" maxlength=\"30\" id=\"title\" placeholder=\"Tu nombre\" name=\"nombreUsuario\" [(ngModel)]=\"cerveceria.nombreUsuario\" #nombreUsuario=\"ngModel\" >\n        <div *ngIf=\"nombreUsuario.errors && (nombreUsuario.dirty || nombreUsuario.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!nombreUsuario.errors.required\">\n          Tu nombre es requerido!\n        </div>\n      </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"title\">Comentario</label>\n        <input type=\"text\" class=\"form-control\" required minlength=\"5\" maxlength=\"90\"  id=\"nombre\" placeholder=\"Que te pareció la cervercería?\" name=\"comentarioUsuario\" [(ngModel)]=\"cerveceria.comentarioUsuario\" #comentarioUsuario=\"ngModel\" >\n        <div *ngIf=\"comentarioUsuario.errors && (comentarioUsuario.dirty || comentarioUsuario.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!comentarioUsuario.errors.required\">\n            Tu comentario es requerido!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"poster\">Puntaje Bebida</label>\n        <input type=\"text\" class=\"form-control\" required id=\"puntajeBebida\" placeholder=\"Valores de 1 a 10\" name=\"puntajeBebidaUsuario\" [(ngModel)]=\"cerveceria.puntajeBebidaUsuario\" #puntajeBebidaUsuario=\"ngModel\" >\n        <div *ngIf=\"puntajeBebidaUsuario.errors && (puntajeBebidaUsuario.dirty || puntajeBebidaUsuario.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!puntajeBebidaUsuario.errors.required\">\n            Tu puntaje de la bebida es requerido!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"country\">Puntaje Comida</label>\n        <input type=\"text\" class=\"form-control\" required id=\"puntajeComida\" placeholder=\"Valores de 1 a 10\" name=\"puntajeComidaUsuario\" [(ngModel)]=\"cerveceria.puntajeComidaUsuario\" #puntajeComidaUsuario=\"ngModel\">\n        <div *ngIf=\"puntajeComidaUsuario.errors && (puntajeComidaUsuario.dirty || puntajeComidaUsuario.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!puntajeComidaUsuario.errors.required\">\n            Tu puntaje de la Comida es requerido!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"input-group col-md-8\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formcerveceria.form.valid\">Votar</button>\n        </div>\n      </div>\n    </form>\n\n  </div>\n  <div class=\"row regresar\">\n    <a [routerLink]=\"['/cervecerias']\" class=\"btn btn-outline-danger btn-block\">Regresar</a>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cerveceria/cerveceria.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cerveceria/cerveceria.component.ts ***!
  \***************************************************************/
/*! exports provided: CerveceriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CerveceriaComponent", function() { return CerveceriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CerveceriaComponent = /** @class */ (function () {
    function CerveceriaComponent(_conectapiService, router, routerGen) {
        this._conectapiService = _conectapiService;
        this.router = router;
        this.routerGen = routerGen;
        this.cerveceria = {};
        //mapa
        this.zoom = 15;
        this.lat = -34.59433815911231;
        this.lng = -58.4236350560447;
        this.markers = [];
    }
    CerveceriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this._conectapiService.getCerveceria(params['slug']).subscribe(function (result) {
                _this.cerveceria = result[0];
                _this.comentarios = _this.cerveceria.comentarios;
                _this.promBebCer = _this.cerveceria.promBebCer;
                _this.promComCer = _this.cerveceria.promComCer;
                _this.markers.push({ 'lat': Number(result[0].lat), 'lng': Number(result[0].lng), 'nombreCer': result[0].nombreCer, 'ubicacionCer': result[0].ubicacionCer });
                _this.lat = Number(result[0].lat);
                _this.lng = Number(result[0].lng);
            }, //result
            function (//result
            error) {
                console.log(error);
            });
        });
    }; // Fin ngOnInit
    CerveceriaComponent.prototype.altaComentario = function () {
        var _this = this;
        console.log(this.cerveceria.slug);
        this._conectapiService.updateComentarios(this.cerveceria).subscribe(//agrego el comentario
        function (//agrego el comentario
        res) {
            console.log('Comentario agregado!');
            _this.comentarios = res.comentarios;
            _this.promBebCer = res.promBebCer;
            _this.promComCer = res.promComCer;
            console.log(_this.promBebCer);
            console.log(_this.promComCer);
        });
    };
    CerveceriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cerveceria',
            template: __webpack_require__(/*! ./cerveceria.component.html */ "./src/app/components/cerveceria/cerveceria.component.html"),
            styles: [__webpack_require__(/*! ./cerveceria.component.css */ "./src/app/components/cerveceria/cerveceria.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__["CerveceriasService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CerveceriaComponent);
    return CerveceriaComponent;
}());



/***/ }),

/***/ "./src/app/components/cervecerias/cervecerias.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/cervecerias/cervecerias.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cervecerias/cervecerias.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/cervecerias/cervecerias.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n<br/><br/><br/>\n<h1>Cervecerias <small>de Buenos Aires</small></h1>\n<hr>\n\n\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let post of cervecerias; let i=index\">\n    <img class=\"card-img-top\" [src]=\"post.urlImagenCer\" [alt]=\"post.nombreCer\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{post.nombreCer}}</h5>\n      <p class=\"card-text\">{{post.ubicacionCer}}</p>\n      <p class=\"card-text\"><small class=\"text-muted\">Puntaje Comida: {{post.promBebCer | number : '1.1-1'}} - Puntaje Comida: {{post.promComCer | number : '1.1-1'}}</small></p>\n      <button type=\"button\" (click)=\"verCerveceria(post.slug)\" class=\"btn btn-info\">Más info</button>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cervecerias/cervecerias.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/cervecerias/cervecerias.component.ts ***!
  \*****************************************************************/
/*! exports provided: CerveceriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CerveceriasComponent", function() { return CerveceriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CerveceriasComponent = /** @class */ (function () {
    function CerveceriasComponent(_conectapiService, router) {
        this._conectapiService = _conectapiService;
        this.router = router;
        this.cervecerias = [];
    }
    CerveceriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._conectapiService.getCervecerias().subscribe(function (data) {
            //console.log(data);
            _this.cervecerias = data;
        });
    };
    CerveceriasComponent.prototype.verCerveceria = function (slug) {
        this.router.navigate(['/cerveceria', slug]);
    };
    CerveceriasComponent.prototype.addCerveceria = function () {
        this.router.navigate(['/cervecerias', 'add']);
    };
    CerveceriasComponent.prototype.deleteCerveceria = function (id) {
        this.router.navigate(['/cervecerias', 'delete', id]);
    };
    CerveceriasComponent.prototype.updateCerveceria = function (id) {
        this.router.navigate(['/cervecerias', 'update', id]);
    };
    CerveceriasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cervecerias',
            template: __webpack_require__(/*! ./cervecerias.component.html */ "./src/app/components/cervecerias/cervecerias.component.html"),
            styles: [__webpack_require__(/*! ./cervecerias.component.css */ "./src/app/components/cervecerias/cervecerias.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__["CerveceriasService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CerveceriasComponent);
    return CerveceriasComponent;
}());



/***/ }),

/***/ "./src/app/components/destacadas-home/destacadas-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/destacadas-home/destacadas-home.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/destacadas-home/destacadas-home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/destacadas-home/destacadas-home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  destacadas-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/destacadas-home/destacadas-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/destacadas-home/destacadas-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: DestacadasHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestacadasHomeComponent", function() { return DestacadasHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DestacadasHomeComponent = /** @class */ (function () {
    function DestacadasHomeComponent() {
    }
    DestacadasHomeComponent.prototype.ngOnInit = function () {
    };
    DestacadasHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destacadas-home',
            template: __webpack_require__(/*! ./destacadas-home.component.html */ "./src/app/components/destacadas-home/destacadas-home.component.html"),
            styles: [__webpack_require__(/*! ./destacadas-home.component.css */ "./src/app/components/destacadas-home/destacadas-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DestacadasHomeComponent);
    return DestacadasHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mapa-home></app-mapa-home>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/mapa-home/mapa-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/mapa-home/mapa-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 600px;\n  margin: 0;\n}\n/*img{max-width: 50%!important}*/\n"

/***/ }),

/***/ "./src/app/components/mapa-home/mapa-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/mapa-home/mapa-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map\n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"zoom\"\n  [disableDefaultUI]=\"false\"\n  [zoomControl]=\"false\"\n  [scrollwheel]=\"false\"\n  [styles]=\"styles\"\n  (mapClick)=\"mapClicked($event)\">\n\n  <agm-marker\n      *ngFor=\"let m of markers; let i = index\"\n      (markerClick)=\"clickedMarker(m.nombreCer, i)\"\n      [latitude]=\"m.lat\"\n      [longitude]=\"m.lng\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"m.draggable\"\n      (dragEnd)=\"markerDragEnd(m, $event)\">\n\n      <agm-info-window\n        [latitude]=\"m.lat\"\n        [longitude]=\"m.lng\">\n        <!--<img [src]=\"m.urlImagenCer\" [alt]=\"m.nombreCer\">-->\n        <h3>{{m.nombreCer}} </h3>\n        <p>{{m.ubicacionCer}}</p>\n        <p>{{ m.distance | number : '1.1-1'}} Km</p>\n        <div class=\"alert alert-dismissible alert-success\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            <strong>Apurate!</strong> Cierra en 20 minutos.\n        </div>\n        <button type=\"button\" (click)=\"verCerveceria(m.slug)\" class=\"btn btn-info\">Más info</button>\n      </agm-info-window>\n\n  </agm-marker>\n\n  <agm-circle\n    *ngFor=\"let c of circles; let i = index\"\n    [latitude]=\"c.latUserLoc\" [longitude]=\"c.lngUserLoc\"\n      [radius]=\"c.radioUserLoc\"\n      [fillColor]=\"'red'\"\n      [circleDraggable]=\"false\"\n      [editable]=\"true\"\n      (radiusChange)=\"cambiaRadio($event)\"\n      (centerChange)=\"cambiaCentro($event)\"\n      >\n  </agm-circle>\n\n</agm-map>\n<div class=\"container main-container\">\n<br/>\n<br/>\n<h1>Cervecerias <small>de Buenos Aires</small></h1>\n<hr>\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let post of markers; let i=index\">\n    <img class=\"card-img-top\" [src]=\"post.urlImagenCer\" [alt]=\"post.nombreCer\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{post.nombreCer}}</h5>\n      <p class=\"card-text\">{{post.ubicacionCer}} ({{ post.distance | number : '1.1-1'}} Km)</p>\n      <p class=\"card-text\"><small class=\"text-muted\">Puntaje Comida: {{post.promBebCer | number : '1.1-1'}} - Puntaje Comida: {{post.promComCer | number : '1.1-1'}}</small></p>\n      <button type=\"button\" (click)=\"verCerveceria(post.slug)\" class=\"btn btn-info\">Más info</button>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mapa-home/mapa-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/mapa-home/mapa-home.component.ts ***!
  \*************************************************************/
/*! exports provided: MapaHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaHomeComponent", function() { return MapaHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cervecerias.service */ "./src/app/services/cervecerias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapaHomeComponent = /** @class */ (function () {
    function MapaHomeComponent(mapsAPILoader, _conectapiService, router) {
        this.mapsAPILoader = mapsAPILoader;
        this._conectapiService = _conectapiService;
        this.router = router;
        // Parametros iniciales del mapa
        this.zoom = 12;
        this.lat = -34.59433815911231;
        this.lng = -58.4236350560447;
        this.location = {};
        this.latUserLoc = -34.59433815911231;
        this.lngUserLoc = -58.4236350560447;
        this.radioUserLoc = 3000;
        //Marcadores y Circulos
        this.markers = [];
        this.circles = [];
        this.markersAll = [];
        //Estilos del mapa - theme
        this.styles = [
            { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
            { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
            { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
            { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] },
            { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "color": "#757575" }, { "visibility": "off" }] },
            { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
            { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] },
            { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
            { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
            { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#181818" }] },
            { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
            { "featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{ "color": "#1b1b1b" }] },
            { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#2c2c2c" }] },
            { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
            { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#8a8a8a" }] },
            { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#373737" }] },
            { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#3c3c3c" }] },
            { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#4e4e4e" }] },
            { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
            { "featureType": "transit", "stylers": [{ "visibility": "off" }] },
            { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
            { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
            { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#3d3d3d" }] }
        ];
    }
    //METODOS
    MapaHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            if (navigator.geolocation) {
                //Ubicación del usuario
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.location = position.coords;
                    _this.latUserLoc = position.coords.latitude;
                    _this.lngUserLoc = position.coords.longitude;
                    _this.lat = position.coords.latitude;
                    _this.lng = position.coords.longitude;
                    _this.centerUserLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    //Agrego el circulo
                    _this.circles.push({ 'latUserLoc': Number(_this.lat), 'lngUserLoc': Number(_this.lng), 'radioUserLoc': _this.radioUserLoc });
                    //Agrego los marcadores
                    _this._conectapiService.getCervecerias().subscribe(function (data) {
                        data.forEach(function (item) {
                            var markerLoc = new google.maps.LatLng(item.lat, item.lng);
                            _this.markersAll.push({
                                'lat': Number(item.lat),
                                'lng': Number(item.lng),
                                'nombreCer': item.nombreCer,
                                'ubicacionCer': item.ubicacionCer,
                                'slug': item.slug,
                                'urlImagenCer': item.urlImagenCer,
                                'promBebCer': item.promBebCer,
                                'promComCer': item.promComCer,
                                'markerLoc': markerLoc,
                                'distance': 0
                            });
                            var distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, _this.centerUserLoc) / 1000;
                            if (distanceInKm < _this.radioUserLoc / 1000) {
                                _this.markers.push({
                                    'lat': Number(item.lat),
                                    'lng': Number(item.lng),
                                    'nombreCer': item.nombreCer,
                                    'ubicacionCer': item.ubicacionCer,
                                    'slug': item.slug,
                                    'urlImagenCer': item.urlImagenCer,
                                    'promBebCer': item.promBebCer,
                                    'promComCer': item.promComCer,
                                    'markerLoc': markerLoc,
                                    'distance': distanceInKm
                                });
                            }
                        }); //fin foreach
                    }); //fin suscribe
                }); //fin getCurrentPosition
            }
        });
    }; //Fin ngOnInit
    MapaHomeComponent.prototype.verCerveceria = function (slug) {
        this.router.navigate(['/cerveceria', slug]);
    };
    MapaHomeComponent.prototype.cambiaRadio = function ($event) {
        var _this = this;
        this.markers = [];
        this.radioUserLoc = Number($event) / 1000;
        //this._conectapiService.getCervecerias().subscribe(data => {
        this.markersAll.forEach(function (item) {
            //const markerLoc = new google.maps.LatLng(item.lat, item.lng);
            var distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(item.markerLoc, _this.centerUserLoc) / 1000;
            if (distanceInKm < _this.radioUserLoc) {
                _this.markers.push({
                    'lat': Number(item.lat),
                    'lng': Number(item.lng),
                    'nombreCer': item.nombreCer,
                    'ubicacionCer': item.ubicacionCer,
                    'slug': item.slug,
                    'urlImagenCer': item.urlImagenCer,
                    'promBebCer': item.promBebCer,
                    'promComCer': item.promComCer,
                    'markerLoc': item.markerLoc,
                    'distance': distanceInKm
                });
            }
        });
        //});
    };
    MapaHomeComponent.prototype.markersConFiltro = function (lat, lng, kms) {
        var _this = this;
        var markerLoc = new google.maps.LatLng(lat, lng);
        this._conectapiService.getCervecerias().subscribe(function (data) {
            _this.markers.forEach(function (item) {
                var distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, _this.centerUserLoc) / 1000;
                if (distanceInKm < kms / 1000) {
                    _this.markers.push({ 'lat': Number(item.lat), 'lng': Number(item.lng), 'nombreCer': item.nombreCer, 'ubicacionCer': item.ubicacionCer, 'slug': item.slug, 'urlImagenCer': item.urlImagenCer, 'promBebCer': item.promBebCer, 'promComCer': item.promComCer, 'markerLoc': item.markerLoc, 'distance': item.distance });
                }
            });
        });
    };
    MapaHomeComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapaHomeComponent.prototype.mapClicked = function ($event) {
        /*
          this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
          });
        */
    };
    MapaHomeComponent.prototype.cambiaCentro = function ($event) {
    };
    MapaHomeComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MapaHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mapa-home',
            template: __webpack_require__(/*! ./mapa-home.component.html */ "./src/app/components/mapa-home/mapa-home.component.html"),
            styles: [__webpack_require__(/*! ./mapa-home.component.css */ "./src/app/components/mapa-home/mapa-home.component.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"],
            _services_cervecerias_service__WEBPACK_IMPORTED_MODULE_1__["CerveceriasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MapaHomeComponent);
    return MapaHomeComponent;
}()); //Fin clase MapaHomeComponent



/***/ }),

/***/ "./src/app/components/nueva-cerveceria/nueva-cerveceria.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/nueva-cerveceria/nueva-cerveceria.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nueva-cerveceria/nueva-cerveceria.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/nueva-cerveceria/nueva-cerveceria.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nueva-cerveceria works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/nueva-cerveceria/nueva-cerveceria.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/nueva-cerveceria/nueva-cerveceria.component.ts ***!
  \***************************************************************************/
/*! exports provided: NuevaCerveceriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaCerveceriaComponent", function() { return NuevaCerveceriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NuevaCerveceriaComponent = /** @class */ (function () {
    function NuevaCerveceriaComponent() {
    }
    NuevaCerveceriaComponent.prototype.ngOnInit = function () {
    };
    NuevaCerveceriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nueva-cerveceria',
            template: __webpack_require__(/*! ./nueva-cerveceria.component.html */ "./src/app/components/nueva-cerveceria/nueva-cerveceria.component.html"),
            styles: [__webpack_require__(/*! ./nueva-cerveceria.component.css */ "./src/app/components/nueva-cerveceria/nueva-cerveceria.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NuevaCerveceriaComponent);
    return NuevaCerveceriaComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\">Buenos Aires Beer</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['cervecerias']\">Cervecerias</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['cervecerias/add']\">Enviá una cerveceria</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['admin']\">(Admin)</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/cervecerias.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/cervecerias.service.ts ***!
  \*************************************************/
/*! exports provided: CerveceriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CerveceriasService", function() { return CerveceriasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CerveceriasService = /** @class */ (function () {
    function CerveceriasService(http) {
        this.http = http;
        this.cervecerias = [];
        this.cerveceria = {};
        //cerveceriasUrl: string = 'http://localhost:3000/'; //Api rest en localhost
        this.cerveceriasUrl = 'https://buenosairesbeer-api-rest.herokuapp.com/'; //Api rest en Heroku
    }
    CerveceriasService.prototype.getCervecerias = function () {
        var _this = this;
        return this.http.get(this.cerveceriasUrl + 'cervecerias')
            .map(function (resp) {
            _this.cervecerias = resp;
            return _this.cervecerias;
        });
    };
    CerveceriasService.prototype.addCerveceria = function (cerveceria) {
        var _this = this;
        return this.http.post(this.cerveceriasUrl + 'cerveceria', cerveceria)
            .map(function (resp) {
            _this.cervecerias = resp;
            return _this.cervecerias;
        });
    };
    CerveceriasService.prototype.getCerveceria = function (slug) {
        this.cerveceria = this.http.get(this.cerveceriasUrl + 'cerveceria/' + slug);
        //console.log(this.cerveceria);
        return this.cerveceria;
    };
    CerveceriasService.prototype.getCerveceriaById = function (id) {
        this.cerveceria = this.http.get(this.cerveceriasUrl + 'cerveceria/id/' + id);
        //console.log(this.cerveceria);
        return this.cerveceria;
    };
    CerveceriasService.prototype.deleteCerveceria = function (id) {
        return this.http.delete(this.cerveceriasUrl + 'cerveceria/' + id);
    };
    CerveceriasService.prototype.updateCerveceria = function (cerveceria) {
        var _this = this;
        console.log(cerveceria);
        return this.http.put(this.cerveceriasUrl + 'cerveceria/' + cerveceria._id, cerveceria)
            .map(function (resp) {
            _this.cerveceria = resp;
            return _this.cerveceria;
        });
    };
    CerveceriasService.prototype.geocoder = function (term) {
        this.cerveceria = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=Bogot%C3%A1+367,Ciudad+de+Buenos+Aires,+Argentina&key=YAIzaSyCdZJ4FE_E5uVGEa_EmdOhOEbS5wNJUe-4');
        //console.log(this.cerveceria);
        return this.cerveceria;
    };
    CerveceriasService.prototype.getComentarios = function (cerveceria) {
        console.log(cerveceria);
        this.comentarios = this.http.get(this.cerveceriasUrl + 'cerveceria/comentarios/' + cerveceria._id);
        console.log(this.comentarios);
        return this.comentarios;
    };
    CerveceriasService.prototype.updateComentarios = function (cerveceria) {
        var _this = this;
        console.log(cerveceria);
        return this.http.put(this.cerveceriasUrl + 'cerveceria/comentario/add/' + cerveceria._id, cerveceria)
            .map(function (resp) {
            _this.cerveceria = resp;
            return _this.cerveceria;
        });
    };
    CerveceriasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CerveceriasService);
    return CerveceriasService;
}());



/***/ }),

/***/ "./src/app/services/import-cerveceria.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/import-cerveceria.service.ts ***!
  \*******************************************************/
/*! exports provided: ImportCerveceriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportCerveceriaService", function() { return ImportCerveceriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportCerveceriaService = /** @class */ (function () {
    function ImportCerveceriaService(http) {
        this.http = http;
        this.cerveceriasImport = [
            {
                "nombreCer": "Lekker Smokehouse",
                "slug": "cerve1",
                "lat": -34.5927674,
                "lng": -58.4244508,
                "ubicacionCer": "Honduras 4416",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "La casona de Humahuaca",
                "slug": "cerve2",
                "lat": -34.6029056,
                "lng": -58.414414,
                "ubicacionCer": "Humahuaca 3508",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Le Troquet de Henry",
                "slug": "cerve3",
                "lat": -34.6022972,
                "lng": -58.4136177,
                "ubicacionCer": "Guardia Vieja 3460",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "El bar de Roberto",
                "slug": "cerve4",
                "lat": -34.6071258,
                "lng": -58.4186117,
                "ubicacionCer": "Bulnes 331",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Birrary",
                "slug": "cerve5",
                "lat": -34.5608076,
                "lng": -58.4548205,
                "ubicacionCer": "Cuba 2111",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Casa China",
                "slug": "cerve6",
                "lat": -34.5573761,
                "lng": -58.4506161,
                "ubicacionCer": "Arribeños 2173",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Aldonza Bar",
                "slug": "cerve7",
                "lat": -34.5613059,
                "lng": -58.4506035,
                "ubicacionCer": "Mariscal Antonio José de Sucre 1920",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Tina & Co",
                "slug": "cerve8",
                "lat": -34.5569832,
                "lng": -58.4505787,
                "ubicacionCer": "Mendoza 1678",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Piaf",
                "slug": "cerve9",
                "lat": -34.5831214,
                "lng": -58.4443327,
                "ubicacionCer": "Av Dorrego 1605",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Baris",
                "slug": "cerve10",
                "lat": -34.5963472,
                "lng": -58.378224,
                "ubicacionCer": "Marcelo T. de Alvear 787",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Rosa de los Vientos",
                "slug": "cerve11",
                "lat": -34.623929,
                "lng": -58.3712141,
                "ubicacionCer": "Defensa 1376",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "La Bohème Creperie & Bar",
                "slug": "cerve12",
                "lat": -34.5834044,
                "lng": -58.4392434,
                "ubicacionCer": "Gorriti 5796",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Don Osvaldo",
                "slug": "cerve13",
                "lat": -34.5579133,
                "lng": -58.4568806,
                "ubicacionCer": "Blanco Encalada 2166",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Morgan Bar",
                "slug": "cerve14",
                "lat": -34.5606822,
                "lng": -58.4606603,
                "ubicacionCer": "Amenábar 2363",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Mercado Solidario Bonpland",
                "slug": "cerve15",
                "lat": -34.5836699,
                "lng": -58.4377295,
                "ubicacionCer": "Bonpland 1660",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Oveja Descarriada",
                "slug": "cerve16",
                "lat": -34.5953393,
                "lng": -58.429879,
                "ubicacionCer": "Aráoz 1047",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Gastropub Nola",
                "slug": "cerve17",
                "lat": -34.5935595,
                "lng": -58.4250841,
                "ubicacionCer": "Gorriti 4389",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "La espuma de los días",
                "slug": "cerve18",
                "lat": -34.5802557,
                "lng": -58.4254901,
                "ubicacionCer": "Güemes 4818",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Local Restaurante",
                "slug": "cerve19",
                "lat": -34.5779719,
                "lng": -58.4369693,
                "ubicacionCer": "Arévalo 2063",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Bio Restaurante",
                "slug": "cerve20",
                "lat": -34.581137,
                "lng": -58.4311078,
                "ubicacionCer": "Humboldt 2192",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Oliverio Bar",
                "slug": "cerve21",
                "lat": -34.5775901,
                "lng": -58.43876,
                "ubicacionCer": "Av Dorrego 2202",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            },
            {
                "nombreCer": "Estados Unidos 509",
                "slug": "cerve22",
                "lat": -34.6184655,
                "lng": -58.3731387,
                "ubicacionCer": "Estados Unidos 509",
                "urlImagenCer": "/assets/img/placeholder.jpg",
                "promBebCer": 3,
                "promComCer": 3
            }
        ];
    }
    ImportCerveceriaService.prototype.importCervecerias = function () {
        return this.cerveceriasImport;
    };
    ImportCerveceriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImportCerveceriaService);
    return ImportCerveceriaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lean/Documents/JS/Curso UTN 2018/TPFINAL/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map