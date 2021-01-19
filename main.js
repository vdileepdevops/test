(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 p-0\">\r\n        <form class=\"\" [formGroup]=\"Reviewerform\">\r\n    \r\n                    <div class=\"col-md-12\">\r\n                        <h4 class=\"mb-2\"> Reviewer </h4>\r\n                    </div>\r\n        \r\n                 \r\n    \r\n                      \r\n                        <div class=\"col-md-4 col-xl-4 mt-3\">\r\n                                <div class=\"form-group\">\r\n                                        <label id=\"branchname\" title=\"Branch Name\">Branch Name</label>\r\n                                        <ng-select title=\"Select Branch Name\" id=\"branchname\" [items]=\"BranchList\"\r\n                                            formControlName=\"branchname\" bindLabel=\"branch\" bindValue=\"branch\" [multiple]=false\r\n                                            placeholder=\"Select\" [searchable]=true [clearable]=true dropdownPosition=\"bottom\"\r\n                                            [clearOnBackspace]=true (change)=\"BranchNamechange($event)\"\r\n                                            ></ng-select>\r\n                                        \r\n                                       \r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"mt-3\">\r\n                            <div class=\"col-md-12\">\r\n                            \r\n                             <kendo-grid [kendoGridBinding]=\"AuctionsList\" [groupable]=\"false\"\r\n                              [resizable]=\"true\"  [columnMenu]=\"{ filter: true }\"\r\n                             [sortable]=\"true\">\r\n                  \r\n                  \r\n                  \r\n                             <kendo-grid-column field=\"branch\" width=\"120\" title=\"Branch Name\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                             </kendo-grid-column>\r\n                             <kendo-grid-column field=\"groupcode\" title=\"Group Code\" width=\"120\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                             </kendo-grid-column>\r\n                             <kendo-grid-column field=\"auctiondate\" width=\"90\" title=\"Auction Date\" class=\"kendo-left\">\r\n                                   \r\n                                 </kendo-grid-column>\r\n                             <kendo-grid-column field=\"auctiontime\" width=\"100\" title=\"Auction Time\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                             </kendo-grid-column>\r\n                             <kendo-grid-column field=\"status\" width=\"100\" title=\"status\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-command-column title=\"View\" width=\"100\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    <a  (click)=\"Review(dataItem)\">Review</a>\r\n                                  \r\n                                 \r\n                                </ng-template>\r\n                              </kendo-grid-command-column>\r\n         \r\n                 </kendo-grid>\r\n                               \r\n                            </div>\r\n                        </div> \r\n                       \r\n                    \r\n                     \r\n                   \r\n                </form>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    \r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/authentication/authentication.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Admin/authentication/authentication.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"mt-2\" [formGroup]=\"Authenticationform\">\r\n        <!-- <h2 class=\"bc-2 mb-4\"> LOGIN  </h2> -->\r\n        <!-- <div class=\"form-group\">\r\n                <h4 class=\"mb-4\">Authenticate</h4>\r\n                </div> -->\r\n                <div class=\"form-group\">\r\n                <label id=\"pAuthenticationid\" title=\"Authentication ID\">Authentication ID</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"pAuthenticationid\"  [ngClass]=\"{ 'is-invalid': Authenticationvalidations?.pAuthenticationid }\" />\r\n                <div class=\"invalid-feedback\">\r\n                        <span *ngIf=\"Authenticationvalidations.pAuthenticationid\">{{Authenticationvalidations?.pAuthenticationid}}</span>\r\n                      </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                <label id=\"pOTPCode\" title=\"OTP\">OTP</label>\r\n                \r\n                <input type=\"text\" class=\"form-control\" formControlName=\"pOTPCode\" [ngClass]=\"{ 'is-invalid': Authenticationvalidations?.pOTPCode }\" />\r\n              \r\n                <div class=\"invalid-feedback\">\r\n                        <span *ngIf=\"Authenticationvalidations.pOTPCode\">{{Authenticationvalidations?.pOTPCode}}</span>\r\n                    </div>\r\n\r\n               \r\n                </div>\r\n                <button  (click)=\"Login()\" class=\"btn btn-primary btn-block\">LOGIN</button>\r\n        <div class=\"text-center\" style=\"font-size:12px;\">\r\n            <!--<a href=\"#\" class=\"text-decoration-none\"> Forgot your login details? </a>\r\n<a href=\"#\" class=\"text-decoration-none lc-title\" style=\"font-size:12px !important; \"> Get help signing in </a>-->\r\n        </div>\r\n    </form>\r\n\r\n<!-- <main class=\"container\">\r\n    \r\n        <div class=\"row\">\r\n            <div class=\"col-4\"></div>\r\n            <div class=\"col-4\">\r\n            <div class=\"mt-4\">\r\n            <a>Auctioneer - Authentication</a>\r\n            </div>\r\n                <div class=\"login-card\">\r\n                    <form  [formGroup]=\"Authenticationform\" >\r\n                        <div class=\"form-group\">\r\n                        <h4 class=\"mb-4\">Authenticate</h4>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                        <label id=\"pAuthenticationid\" title=\"Authentication ID\">Authentication ID</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pAuthenticationid\"  [ngClass]=\"{ 'is-invalid': Authenticationvalidations?.pAuthenticationid }\" />\r\n                        <div class=\"invalid-feedback\">\r\n                                <span *ngIf=\"Authenticationvalidations.pAuthenticationid\">{{Authenticationvalidations?.pAuthenticationid}}</span>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                        <label id=\"pOTPCode\" title=\"OTP\">OTP</label>\r\n                        \r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pOTPCode\" [ngClass]=\"{ 'is-invalid': Authenticationvalidations?.pOTPCode }\" />\r\n                      \r\n                        <div class=\"invalid-feedback\">\r\n                                <span *ngIf=\"Authenticationvalidations.pOTPCode\">{{Authenticationvalidations?.pOTPCode}}</span>\r\n                            </div>\r\n\r\n                       \r\n                        </div>\r\n                        <button  (click)=\"Login()\" class=\"btn btn-primary btn-block\">LOGIN</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/group-selection/group-selection.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Admin/group-selection/group-selection.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-6\">\r\n                <h4>Select Group</h4>\r\n            </div>\r\n            <div class=\"col-6\">\r\n            <div class=\"d-flex justify-content-end\">\r\n                <h4>Hall No : {{hallname}} </h4>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-12\">\r\n                <div class=\"table-responsive\">\r\n                <!-- <table class=\"table custom-table table-bordered text-center\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Group Code</th>\r\n                    <th>Chit Value</th>\r\n                    <th>Auction Month</th>\r\n                    <th>Auction Date & Time </th>\r\n                    <th>Auction Begins</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>FKNLO2J-10</td>\r\n                    <td>5,00,000</td>\r\n                    <td>13/14</td>\r\n                    <td>25<sup>th</sup>-Sep-2020<br> 10:00-10:35am </td>\r\n                    <td>00:00:00</td>\r\n                    <td><a href=\"ticket-selection.html\" class=\"btn btn-success text-white btn-block\">Start</a></td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td>FKNLO2J-10</td>\r\n                    <td>5,00,000</td>\r\n                    <td>13/14</td>\r\n                    <td>25<sup>th</sup>-Sep-2020<br> 10:00-10:35am </td>\r\n                    <td>00:00:00</td>\r\n                    <td><a class=\"btn btn-light btn-block\">Start</a></td>\r\n                </tr>\r\n            </tbody>\r\n            </table> -->\r\n            <kendo-grid [data]=\"groupdata\" [groupable]=\"false\" [resizable]=\"true\" [resizable]=\"true\" [pageable]=\"false\" [sortable]=\"false\" [selectable]=\"true\">\r\n\r\n                    <kendo-grid-column field=\"pGroupCode\" width=\"120\" title=\"Group Code\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                    </kendo-grid-column>\r\n                    <kendo-grid-column field=\"pAuctMonth\" width=\"150\" title=\"Auction Month\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                              {{dataItem.pAuctMonth}}/{{dataItem.pChitPeriod}}\r\n                            </ng-template>\r\n                          </kendo-grid-column>\r\n                          <kendo-grid-column field=\"pAuctionDate\" title=\"Auction Date\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                  {{dataItem.pAuctionDate}} {{dataItem.pAuctionTime}}\r\n                                </ng-template>\r\n                              </kendo-grid-column>\r\n                    \r\n                              <kendo-grid-command-column title=\"Actions\" width=\"100\">\r\n                                    <ng-template kendoGridCellTemplate let-dataItem>\r\n                                        <a  (click)=\"Initiate(dataItem)\">Initiate</a>\r\n                                      \r\n                                     \r\n                                    </ng-template>\r\n                                  </kendo-grid-command-column>\r\n\r\n                </kendo-grid>\r\n\r\n \r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/hall-allotment/hall-allotment.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Admin/hall-allotment/hall-allotment.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container\">\r\n    <div class=\"row\"><div class=\"col-xl-6 col-md-6\">  </div>\r\n    <div class=\"col-xl-6 col-md-6\"> \r\n         <button class=\"btn btn-primary mr-2\" (click)=\"openprizedsubsribers()\">Prized Subscribers Report</button>\r\n         <button class=\"btn btn-primary\" (click)=\"openAuctionHistory()\">Auction-history Report</button>\r\n       </div></div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 p-0\">\r\n    <form class=\"\" [formGroup]=\"hallallotmentform\">\r\n       \r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"mb-2\"> Hall Allotment </h4>\r\n                    \r\n                    \r\n                                 \r\n                </div>\r\n    \r\n                \r\n     \r\n                    <div class=\"col-md-4 col-xl-4 mt-3\">\r\n                            <div class=\"form-group\">\r\n                                    <label id=\"pEmployeeName\" title=\"Auctioneer\">Auctioneer</label>\r\n                                    <ng-select title=\"Select Employee\" id=\"pEmployeeName\" [items]=\"EmployeeList\"\r\n                                        formControlName=\"pEmployeeName\" bindLabel=\"pEmployeeName\" bindValue=\"pEmployeeName\" [multiple]=false\r\n                                        placeholder=\"Select\" [searchable]=true [clearable]=true dropdownPosition=\"bottom\"\r\n                                        [clearOnBackspace]=true (change)=\"Employeechange($event)\"\r\n                                        [ngClass]=\"{ 'is-invalid': HallAllotmentvalidations?.pEmployeeName }\">\r\n                                    </ng-select>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        <span\r\n                                            *ngIf=\"HallAllotmentvalidations.pEmployeeName\">{{HallAllotmentvalidations?.pEmployeeName}}</span>\r\n                                    </div>\r\n                                   \r\n                                </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-xl-4\">\r\n                            <div class=\"form-group\">\r\n                                    <label id=\"pHallName\" title=\"Hall\">Hall</label>\r\n                                   \r\n                                    <ng-select title=\"Select Hall\" id=\"pHallName\" [items]=\"Halllist\" formControlName=\"pHallName\"\r\n                                        bindLabel=\"pHallName\" bindValue=\"pHallName\" [multiple]=false placeholder=\"Select\" [searchable]=true\r\n                                        [clearable]=true dropdownPosition=\"bottom\" [clearOnBackspace]=true (change)=\"HallChange($event)\"\r\n                                        [ngClass]=\"{ 'is-invalid': HallAllotmentvalidations?.pHallName }\">\r\n                                    </ng-select>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        <span *ngIf=\"HallAllotmentvalidations.pHallName\">{{HallAllotmentvalidations?.pHallName}}</span>\r\n                                    </div>\r\n                                </div>\r\n                    </div>               \r\n                    <div class=\"col-md-4 col-xl-4 mb-3\">\r\n                            <div class=\"d-flex justify-content-end mt-2\">\r\n                            <!-- <button (click)=\"submit()\" [disabled]=buttondisabled class=\"btn btn-b-icon px-3 border-0\" role=\"tab\"\r\n                            aria-controls=\"hot\" aria-selected=\"false\">SUBMIT</button> -->\r\n                            <button (click)=\"submit()\" data-toggle=\"tab\" class=\"btn btn-b-icon btn-block px-3 border-0\" role=\"tab\"\r\n                            aria-controls=\"hot\" aria-selected=\"false\">\r\n                      <i class=\"fa fa-check-circle fa-lg\" ></i>\r\n                      <span>\r\n                        Save\r\n                      </span>\r\n                    </button>\r\n                            </div>\r\n                    </div>\r\n                \r\n                    <hr>\r\n           \r\n               <div class=\"mt-3\">\r\n                   <div class=\"col-md-12\">\r\n                   \r\n                    <kendo-grid [kendoGridBinding]=\"halldata\" [groupable]=\"false\"\r\n                     [resizable]=\"true\"  [columnMenu]=\"{ filter: true }\"\r\n                    [sortable]=\"true\">\r\n         \r\n         \r\n         \r\n                    <kendo-grid-column field=\"pBranchName\" width=\"120\" title=\"Branch Name\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                    </kendo-grid-column>\r\n                    <kendo-grid-column field=\"pConductedby\" title=\"Auctioneer\" width=\"120\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                    </kendo-grid-column>\r\n                    <kendo-grid-column field=\"pAllotmentdate\" width=\"90\" title=\"Allotment Date\" class=\"kendo-left\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                {{dataItem.pAllotmentdate | date: 'dd/MM/yyyy'}}\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    <kendo-grid-column field=\"pHallName\" width=\"100\" title=\"Hall Name\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                    </kendo-grid-column>\r\n\r\n\r\n        </kendo-grid>\r\n                        <!-- <kendo-grid [data]=\"halldata\" [groupable]=\"false\" [resizable]=\"true\" [resizable]=\"true\" [pageable]=\"false\" [sortable]=\"false\" [selectable]=\"true\" [group]=\"groups\">\r\n    \r\n                                <kendo-grid-column field=\"pBranchName\" width=\"120\" title=\"Branch Name\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                                </kendo-grid-column>\r\n                                <kendo-grid-column field=\"pConductedby\" title=\"Auctioneer\" width=\"120\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                                </kendo-grid-column>\r\n                                <kendo-grid-column field=\"pAllotmentdate\" width=\"90\" title=\"Allotment Date\" class=\"kendo-left\">\r\n                                        <ng-template kendoGridCellTemplate let-dataItem>\r\n                                            {{dataItem.pAllotmentdate | date: 'dd/MM/yyyy'}}\r\n                                        </ng-template>\r\n                                    </kendo-grid-column>\r\n                                <kendo-grid-column field=\"pHallName\" width=\"100\" title=\"Hall Name\" [headerClass]=\"{'kendo-left': true}\" class=\"kendo-left\">\r\n                                </kendo-grid-column>\r\n    \r\n                            </kendo-grid> -->\r\n                   </div>\r\n               </div>\r\n               \r\n            </form>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/ticket-selection/ticket-selection.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Admin/ticket-selection/ticket-selection.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      \r\n      <main class=\"container\">\r\n\r\n            <div class=\"bg-light rounded border border-warning mt-4\">\r\n                    <div class=\"container\">\r\n                      <div class=\"row\">\r\n                      <div class=\"col-3\">\r\n                          <div class=\"ticket-info\">\r\n                            \r\n                            <label> SELECT TICKETS</label>\r\n                              <p> Before {{auctiontime}} </p>\r\n                            </div>\r\n                          \r\n                      </div>\r\n                      \r\n                      <div class=\"col-3\">\r\n                      <div class=\"ticket-info\">\r\n                          <label> GROUP CODE </label>\r\n                              <p>{{groupcode}} </p>\r\n                          </div>\r\n                      </div>\r\n                      \r\n                      <div class=\"col-3\">\r\n                      <div class=\"ticket-info\">\r\n                        <label>HALL NO</label>\r\n                              <p>{{hallname}}</p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-3\">\r\n                        <div class=\"ticket-info\">\r\n                          <label>MEETING ID</label>\r\n                                <p>{{meetingid}}</p>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                      </div>\r\n                  </div>\r\n          \r\n          <div class=\"row mt-4\">\r\n              <div class=\"col-12\">\r\n                  <ul class=\"ticket-card\">\r\n                       <li *ngFor=\"let i of ticketdetails\">\r\n                        <label class=\"card-ticket\">\r\n                            <input class=\"card__input\" (change)=\"checkbox(i,$event)\"  type=\"checkbox\"/>\r\n                            <div class=\"card__body\">\r\n                              <div class=\"card__body-cover\"><span class=\"card__body-cover-checkbox\"> \r\n                                  <svg class=\"card__body-cover-checkbox--svg\" viewBox=\"0 0 12 10\">\r\n                                    <polyline points=\"1.5 6 4.5 9 10.5 1\"></polyline>\r\n                                  </svg>\r\n                                </span>\r\n                                      <header class=\"card__body-header\">\r\n                                      <span>{{i.ticketNo}} </span>\r\n                                      <h2 class=\"card__body-header-title\">{{i.subscriberName}}</h2>\r\n                                      <p class=\"card__body-header-subtitle\">Due : {{i.due}}</p>\r\n                                      </header>\r\n                                </div>\r\n                            </div>\r\n                          </label>\r\n                          </li>                      \r\n                  </ul>\r\n              </div>\r\n          </div>\r\n          <div class=\"row ml-1 mb-4 pb-4\">\r\n            <div class=\"col-md-12 col-xl-12\">\r\n              <div class=\"d-flex justify-content-end mt-4 mb-4\">\r\n                \r\n            \r\n                <button (click)=\"startauction()\" class=\"btn btn-b-icon px-3 border-0\"\r\n                        >\r\n                  Start Auction\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </main>\r\n      <div class=\"modal fade\" id=\"Dueparticipants\" tabindex=\"\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content text-center\">\r\n              <a type=\"button\" class=\"close text-white text-right\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n              </a>\r\n              <div class=\"modal-body\">\r\n                <form class=\"\" [formGroup]=\"ticketselectionform\">\r\n                  <div class=\"container\">\r\n                      \r\n                      <div class=\"row justify-content-center\" >\r\n\r\n                          <div class=\"col-6 text-center\">\r\n\r\n                              <p><span class=\"nblue\"> {{username}}</span></p>\r\n                              <p>Ticket No:<span class=\"nblue\"> {{ticketno}}</span></p>\r\n                              <div class=\"form-group\">\r\n                                  <label>Reference No.</label>\r\n                                  <input type=\"text\" class=\"form-control\" formControlName=\"Reference\" (keyup)=\"Referencechange()\">\r\n                                  <div class=\"invalid-feedback\">\r\n                                    <span *ngIf=\"referencevalidation\">Reference No Required</span>\r\n                                </div>\r\n\r\n                                  <textarea   class=\"form-control mt-4\"\r\n                                      maxlength=\"1000\"\r\n                                      placeholder=\"Please enter auction comments and Submit\" formControlName=\"comments\"> </textarea>\r\n                              </div>\r\n                              <button class=\"btn btn-success shadow-sm btn-block btn-lg\" (click)=\"AddreferenceNo()\">Submit\r\n                                  </button>\r\n                          </div>\r\n                      </div>\r\n\r\n\r\n                  </div>\r\n                </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Common/companydetails/companydetails.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Common/companydetails/companydetails.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border rounded pl-4 pt-2 pr-4  border-bottom-0\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"temp-img float-md-left\">\r\n                    <img class=\"img-fluid\" src=\"assets/images/finsta-logo.png\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"temp-head float-md-center pt-3\">\r\n                    <h2 class=\"font-18 text-dark text-center m-0 font-weight-bold\"> {{pCompanyName}}</h2>\r\n                    <p class=\"font-16 text-dark text-center m-0\"> {{pAddress1}} {{pAddress2}} {{pDistrict}}, {{pcity}}, {{pState}} - {{pPincode}} </p>\r\n                    <p class=\"font-14 text-dark text-center\">CIN : {{pCinNo}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-2\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"\">\r\n                    <p class=\"font-14 text-left m-0 mr-4 font-weight-bold m-0\">Printed On: {{todaydate | date :'dd-MMM-yyyy h:mm:ss a '}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"\">\r\n                    <p class=\"font-14 text-right m-0 font-weight-bold m-0\">Branch : {{pBranchname | titlecase}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Common/validation-message/validation-message.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Common/validation-message/validation-message.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invalid-feedback-cst\">\r\n  <span *ngIf=\"messgae\">{{messgae}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Home/dashboard.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Home/dashboard.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Dashboard"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Home/navigation.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Home/navigation.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t\t\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-3 col-sm-3\">\r\n\t\t\t\t<div class=\"logo\">\r\n\t\t\t\t\t<a><img src=\"assets/images/logo.png\" alt=\"logo\" /></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-6 col-sm-6\">\r\n\t\t\t\t<div class=\"aut-title pt-4\">\r\n\t\t\t\t\t<p>Welcome <span class=\"nblue\">{{auctioneer}}</span></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\r\n\t\t\t<div class=\"col-3 col-sm-3\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <div class=\"dropdown\">\r\n                    <div class=\"user-pic dropdown\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        <img src=\"assets/images/user.png\">\r\n                    </div>\r\n\r\n                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" >Profile</a>\r\n                        <a class=\"dropdown-item\" (click)=\"Signout()\" >Logout</a>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<router-outlet>\r\n\r\n</router-outlet>\r\n\r\n\r\n\r\n<footer class=\"footer\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<p class=\"footer-disc\">Financial District, Nanakarmguda, Hyderabad - From Your Internet Address</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Home/test.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Home/test.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "status: {{status}} <br>\n<countdown #countdown [config]=\"notifyConfig\" (event)=\"handleEvent2($event)\"></countdown>\n<!-- <countdown #countdown  [config]=\"{leftTime: 30}\" (event)=\"handleEvent($event)\" (finished)=\"finishTest()\">\n  \n  \n  </countdown> -->\n<div>\n  <button (click)=\"resetTimer()\" class=\"btn btn-link btn-sm\">Reset</button>\n  <button (click)=\"start()\" class=\"btn btn-link btn-sm\">Start</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Reports/AuctionHistoryReport/auction-history-report.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Reports/AuctionHistoryReport/auction-history-report.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n\r\n    <div class=\"col-md-12 col-xl-12 p-0\">\r\n        <p class=\"bc-2\">Auction-History Report</p>\r\n    </div>\r\n    <!-- <div class=\"my-container\">\r\n            <ng-template #customLoadingTemplate>\r\n                <div class=\"custom-class\">\r\n        \r\n                </div>\r\n            </ng-template>\r\n            <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\r\n            </ngx-loading>\r\n        \r\n        </div> -->\r\n    <div class=\"col-md-12 p-0 mt-4\">\r\n        <div id=\"template\">\r\n            <form [formGroup]=\"AuctionHistoryReport\" autocomplete=\"off\">\r\n                <div class=\"row mb-4 pb-4\">\r\n                    <div class=\"col-xl-3 col-md-4 form-group\">\r\n\r\n                        <label id=\"fromDate\" title=\"Date\" class=\"mt-1\" for=\"\">Date</label>\r\n\r\n\r\n                        <input readonly type=\"text\" class=\"form-control\" formControlName=\"fromDate\"\r\n                            [bsConfig]=\"dpConfig\" #dp=\"bsDatepicker\" bsDatepicker placement=\"bottom\"\r\n                            [ngClass]=\"{ 'is-invalid': AuctionHistoryReporterrors.fromDate }\">\r\n                        <div class=\"invalid-feedback\">\r\n                            <span\r\n                                *ngIf=\"AuctionHistoryReporterrors.fromDate\">{{AuctionHistoryReporterrors?.fromDate}}</span>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-3\">\r\n                        <label>Branch</label>\r\n                        <!-- <select class=\"form-control\" (change)=\"Branchchange($event)\" id=\"branch\" title=\"Branch\"\r\n                                    formControlName=\"branch\">\r\n                                    <option value=\"\" ng-selected=\"selected\" disabled>Select</option>\r\n                                    <option *ngFor=\"let tds of branchdetails;trackBy: trackByFn\" [value]=\"tds.branch\">\r\n                                        {{tds.branch}}\r\n                                    </option>\r\n                                </select> -->\r\n\r\n\r\n                        <ng-select title=\"Branch\" id=\"branch\" [items]=\"branchdetails\" formControlName=\"branch\"\r\n                            bindLabel=\"branch\" bindValue=\"branch\" [multiple]=false placeholder=\"Select\"\r\n                            [searchable]=true [clearable]=true dropdownPosition=\"bottom\" [clearOnBackspace]=true\r\n                            (change)=\"Branchchange($event);\"\r\n                            [ngClass]=\"{ 'is-invalid': AuctionHistoryReporterrors.branch }\">\r\n                        </ng-select>\r\n\r\n                        <div class=\"invalid-feedback\">\r\n                            <span\r\n                                *ngIf=\"AuctionHistoryReporterrors.branch\">{{AuctionHistoryReporterrors?.branch}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-3 form-group\">\r\n                        <label>Group</label>\r\n                        <ng-select title=\"Group Code\" id=\"groupcode\" [items]=\"groupcodedetails\"\r\n                            formControlName=\"groupcode\" bindLabel=\"groupcode\" bindValue=\"groupcode\" [multiple]=false\r\n                            placeholder=\"Select\" [searchable]=true [clearable]=true dropdownPosition=\"bottom\"\r\n                            [clearOnBackspace]=true (change)=\"GroupChange($event);\"\r\n                            [ngClass]=\"{ 'is-invalid': AuctionHistoryReporterrors.groupcode }\">\r\n                        </ng-select>\r\n\r\n                        <div class=\"invalid-feedback\">\r\n                            <span\r\n                                *ngIf=\"AuctionHistoryReporterrors.groupcode\">{{AuctionHistoryReporterrors?.groupcode}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-md-3 mt-4 pt-2\">\r\n                        <div class=\"form-group\">\r\n                            <!-- *ngIf=\"!isLoading\" -->\r\n                            <button aria-controls=\"hot\" aria-selected=\"false\" class=\"btn btn-b-icon  border-0\"\r\n                                data-toggle=\"tab\" role=\"tab\" (click)=\"generatereport()\">\r\n                                <!-- <i class=\"fa\" [ngClass]=\"{'fa-spin fa-spinner': isLoading}\"></i> -->\r\n                                <span><img class=\"mr-3\" height=\"20px\" src=\"assets/images-old/reports-white.svg\"\r\n                                        width=\"20px\"></span> Generate\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <p class=\"font-16 text-dark text-center m-0\">\r\n                        Auction-History Report\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row pt-2\">\r\n                    <div class=\"col-md-12 col-xl-12 pt-4 \">\r\n  \r\n                \r\n                            <kendo-grid [kendoGridBinding]=\"AuctionDetails\"\r\n                                         [sortable]=\"true\"  \r\n                                       \r\n                                        height=\"500\">\r\n          \r\n                                        <ng-template kendoGridToolbarTemplate>\r\n                                          <div class=\"mb-3\">\r\n                                            <div class=\"col-12 mt-2\">\r\n                                              <ul class=\"temp-ul pull-right\">\r\n                                                <li class=\"temp-ico ml-2\">\r\n                                                  <a kendoGridPDFCommand><img class=\"pt-2\" src=\"assets/images-old/pdf-icon-blue.svg \" title=\"pdf\"\r\n                                                      width=\"20px\"></a></li>\r\n                                                <!-- <li class=\"temp-ico ml-2\">\r\n                                                  <a kendoGridExcelCommand><img class=\"pt-2\" src=\"assets/images-old/icon-excel.svg \" title=\"excel\"\r\n                                                      width=\"20px\"></a></li> -->\r\n                                              </ul>\r\n                                            </div>\r\n                                          </div>\r\n                                        </ng-template>  \r\n                                        \r\n                                        <kendo-grid-pdf fileName=\"Auction-History.pdf\" [allPages]=\"true\" paperSize=\"A2\" [repeatHeaders]=\"true\"\r\n                                        [landscape]=\"true\">\r\n\r\n                          <kendo-grid-pdf-margin top=\"8cm\" left=\"1cm\" right=\"1cm\" bottom=\"2cm\"></kendo-grid-pdf-margin>\r\n\r\n                          <ng-template kendoGridPDFTemplate>\r\n                            <div class=\"page-template\">\r\n                              <div class=\"header\">\r\n                                    <!-- <div class=\"logo\">\r\n                                            <img src=\"assets/images/logo.png\" alt=\"logo\" />\r\n                                        </div> -->\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                        </kendo-grid-pdf>\r\n                              \r\n                              <!-- <kendo-grid-column field=\"\" title=\"Branch Name\" width=\"200\">\r\n                              </kendo-grid-column> -->\r\n                              <kendo-grid-column field=\"groupcode\"  title=\"Group Code\" width=\"100\">\r\n                              </kendo-grid-column>\r\n                              <kendo-grid-column field=\"ticketNo\" title=\"Ticket No.\" width=\"100\">\r\n                              </kendo-grid-column>\r\n                             \r\n                              <kendo-grid-column field=\"biddamount\" title=\"Quoted Bid Amount\" class=\"kendo-center\" width=\"100\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                  {{dataItem.biddamount |currencypipewithdecimal }}\r\n                                </ng-template>\r\n                               \r\n                              </kendo-grid-column>\r\n                              <kendo-grid-column field=\"livedate\" title=\"Date\" width=\"100\">\r\n                                    <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\r\n                                            {{value | date:'shortDate'}}\r\n                                        </ng-template>\r\n                                </kendo-grid-column>\r\n                                <kendo-grid-column field=\"livetime\" title=\"Time\" width=\"100\">\r\n                                    </kendo-grid-column>\r\n        \r\n        \r\n                         \r\n                             \r\n                            </kendo-grid>\r\n           \r\n                        </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Reports/prizedsubscribers.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Reports/prizedsubscribers.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n\r\n    <div class=\"col-md-12 col-xl-12 p-0\">\r\n        <p class=\"bc-2\">Prized-Subscribers Report</p>\r\n    </div>\r\n    <!-- <div class=\"my-container\">\r\n                <ng-template #customLoadingTemplate>\r\n                    <div class=\"custom-class\">\r\n            \r\n                    </div>\r\n                </ng-template>\r\n                <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\r\n                </ngx-loading>\r\n            \r\n            </div> -->\r\n    <div class=\"col-md-12 p-0 mt-4\">\r\n        <div id=\"template\">\r\n            <form [formGroup]=\"AuctionDataReport\" autocomplete=\"off\">\r\n                <div class=\"row mb-4 pb-4\">\r\n                    <div class=\"col-xl-3 col-md-4 form-group\">\r\n\r\n                        <label id=\"fromDate\" title=\"Date\" class=\"mt-1\" for=\"\">Date</label>\r\n\r\n\r\n                        <input readonly type=\"text\" class=\"form-control\" formControlName=\"fromDate\"\r\n                            [bsConfig]=\"dpConfig\" #dp=\"bsDatepicker\" bsDatepicker placement=\"bottom\"\r\n                            [ngClass]=\"{ 'is-invalid': AuctionDataReporterrors.fromDate }\">\r\n                        <div class=\"invalid-feedback\">\r\n                            <span *ngIf=\"AuctionDataReporterrors.fromDate\">{{AuctionDataReporterrors?.fromDate}}</span>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-3\">\r\n                        <label>Branch</label>\r\n                        <!-- <select class=\"form-control\" (change)=\"Branchchange($event)\" id=\"branch\" title=\"Branch\"\r\n                                        formControlName=\"branch\">\r\n                                        <option value=\"\" ng-selected=\"selected\" disabled>Select</option>\r\n                                        <option *ngFor=\"let tds of branchdetails;trackBy: trackByFn\" [value]=\"tds.branch\">\r\n                                            {{tds.branch}}\r\n                                        </option>\r\n                                    </select> -->\r\n\r\n\r\n                        <ng-select title=\"Branch\" id=\"branch\" [items]=\"branchdetails\" formControlName=\"branch\"\r\n                            bindLabel=\"branch\" bindValue=\"branch\" [multiple]=false placeholder=\"Select\"\r\n                            [searchable]=true [clearable]=true dropdownPosition=\"bottom\" [clearOnBackspace]=true\r\n                            (change)=\"Branchchange($event);\"\r\n                            [ngClass]=\"{ 'is-invalid': AuctionDataReporterrors.branch }\">\r\n                        </ng-select>\r\n\r\n                        <div class=\"invalid-feedback\">\r\n                            <span *ngIf=\"AuctionDataReporterrors.branch\">{{AuctionDataReporterrors?.branch}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-3 form-group\">\r\n                        <label>Group</label>\r\n                        <ng-select title=\"Group Code\" id=\"groupcode\" [items]=\"groupcodedetails\"\r\n                            formControlName=\"groupcode\" bindLabel=\"groupcode\" bindValue=\"groupcode\" [multiple]=false\r\n                            placeholder=\"Select\" [searchable]=true [clearable]=true dropdownPosition=\"bottom\"\r\n                            [clearOnBackspace]=true (change)=\"GroupChange($event);\"\r\n                            [ngClass]=\"{ 'is-invalid': AuctionDataReporterrors.groupcode }\">\r\n                        </ng-select>\r\n\r\n                        <div class=\"invalid-feedback\">\r\n                            <span\r\n                                *ngIf=\"AuctionDataReporterrors.groupcode\">{{AuctionDataReporterrors?.groupcode}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-md-3 mt-4 pt-2\">\r\n                        <div class=\"form-group\">\r\n                            <!-- *ngIf=\"!isLoading\" -->\r\n                            <button aria-controls=\"hot\" aria-selected=\"false\" class=\"btn btn-b-icon  border-0\"\r\n                                data-toggle=\"tab\" role=\"tab\" (click)=\"generatereport()\">\r\n                                <!-- <i class=\"fa\" [ngClass]=\"{'fa-spin fa-spinner': isLoading}\"></i> -->\r\n                                <span><img class=\"mr-3\" height=\"20px\" src=\"assets/images-old/reports-white.svg\"\r\n                                        width=\"20px\"></span> Generate\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <p class=\"font-16 text-dark text-center m-0\">\r\n                        Auction-Data Report\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-2\">\r\n                <div class=\"col-md-12 col-xl-12 pt-4 \">\r\n\r\n\r\n                    <kendo-grid [kendoGridBinding]=\"prizedsubscribersdata\" [sortable]=\"true\"\r\n                         height=\"500\"\r\n                        >\r\n\r\n                        <ng-template kendoGridToolbarTemplate>\r\n                            <div class=\"mb-3\">\r\n                                <div class=\"col-12 mt-2\">\r\n                                    <ul class=\"temp-ul pull-right\">\r\n                                        <li class=\"temp-ico ml-2\">\r\n                                            <a kendoGridPDFCommand><img class=\"pt-2\"\r\n                                                    src=\"assets/images-old/pdf-icon-blue.svg \" title=\"pdf\"\r\n                                                    width=\"20px\"></a></li>\r\n                                        <!-- <li class=\"temp-ico ml-2\">\r\n                                                      <a kendoGridExcelCommand><img class=\"pt-2\" src=\"assets/images-old/icon-excel.svg \" title=\"excel\"\r\n                                                          width=\"20px\"></a></li> -->\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n\r\n                        <kendo-grid-pdf fileName=\"prizedsubscribersdata.pdf\" [allPages]=\"true\" paperSize=\"A2\"\r\n                            [repeatHeaders]=\"true\" [landscape]=\"true\">\r\n\r\n                            <kendo-grid-pdf-margin top=\"8cm\" left=\"1cm\" right=\"1cm\" bottom=\"2cm\">\r\n                            </kendo-grid-pdf-margin>\r\n\r\n                            <ng-template kendoGridPDFTemplate>\r\n                                <div class=\"page-template\">\r\n                                    \r\n                                        <!-- <div class=\"logo\">\r\n                                            <img src=\"assets/images/logo.png\" alt=\"logo\" />\r\n                                        </div> -->\r\n\r\n                                    \r\n\r\n                                </div>\r\n                            </ng-template>\r\n\r\n                        </kendo-grid-pdf>\r\n\r\n                        <kendo-grid-column field=\"branch\" title=\"Branch Name\" width=\"100\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"groupcode\" title=\"Group Code\" width=\"80\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"auctiondate\" title=\"Auction Date\" width=\"80\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"auctiontime\" title=\"Auction Time\" width=\"80\">\r\n                        </kendo-grid-column>\r\n\r\n                        <kendo-grid-column field=\"auctionhall\" title=\"Hall No.\" width=\"80\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"prizedticket\" title=\"Ticket No.\" width=\"80\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"subscribername\" title=\"Subscriber Name\" width=\"100\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"mobile\" title=\"Mobile No.\" width=\"100\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"chitvalue\" title=\"Chit Value\" class=\"kendo-center\"\r\n                            width=\"100\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                {{dataItem.chitvalue |currencypipewithdecimal }}\r\n                            </ng-template>\r\n\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column field=\"discount\" title=\"Discount\" class=\"kendo-center\"\r\n                        width=\"100\">\r\n                        <ng-template kendoGridCellTemplate let-dataItem>\r\n                            {{dataItem.discount |currencypipewithdecimal }}\r\n                        </ng-template>\r\n\r\n                    </kendo-grid-column>\r\n                    <kendo-grid-column field=\"bidpayable\" title=\"Bid Payable\" class=\"kendo-center\"\r\n                    width=\"100\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem>\r\n                        {{dataItem.bidpayable |currencypipewithdecimal }}\r\n                    </ng-template>\r\n\r\n                </kendo-grid-column>\r\n                \r\n                        \r\n\r\n\r\n\r\n\r\n                    </kendo-grid>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/Users/user-login/user-login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Settings/Users/user-login/user-login.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n\r\n       \r\n                <div class=\"col-md-12\">\r\n                        \r\n                   \r\n                      \r\n                    \r\n                    <div class=\"login-card\">\r\n                            <div class=\"text-left border-bottom border-top  p-2 mb-2 \">\r\n                                    <img src=\"..\\assets\\images\\logo.png\" width=\"60\" />\r\n                            </div>\r\n                 \r\n                            <ul class=\"nav nav-tab\">\r\n                             <li class=\"active\"><a data-toggle=\"tab\" href=\"#auctioner\">\r\n                             <img src=\"..\\assets\\images\\001-bidding.svg\" width=\"24\">\r\n                             <span> Auctioneer </span></a></li>\r\n\r\n                             <li><a data-toggle=\"tab\" href=\"#admin\">\r\n                             <img src=\"..\\assets\\images\\002-man.svg\" width=\"24\">\r\n                             <span> Admin </span>\r\n                             \r\n                             </a></li>\r\n                           </ul>\r\n                           \r\n                           <div class=\"tab-content shadow-lg\">\r\n\r\n                               \r\n\r\n                             <div id=\"auctioner\" class=\"tab-pane  active\">\r\n                                           <!-- <form class=\"login\" action=\"group-selection.html\">\r\n                           \r\n                                           <div class=\"form-group\">\r\n                                               <h4 class=\"mb-4\">Auctioneer Authentication</h4>\r\n                                               </div>\r\n                                               <div class=\"form-group\">\r\n                                               <label>User Name or User ID</label>\r\n                                               <input type=\"text\" class=\"form-control\" />\r\n                                               </div>\r\n                                               <div class=\"form-group\">\r\n                                               <label>Password</label>\r\n                                               <input type=\"text\" class=\"form-control\" />\r\n                                               </div>\r\n                                               <button type=\"submit\" class=\"btn btn-primary btn-block\">LOGIN</button>\r\n                                               \r\n                                           </form> -->\r\n                                           \r\n                                           <app-authentication></app-authentication>\r\n                              \r\n                             </div> \r\n                            \r\n                             <div id=\"admin\" class=\"tab-pane fade\">\r\n                            <!-- <form class=\"login\" action=\"group-selection.html\">\r\n                           \r\n                                           <div class=\"form-group\">\r\n                                               <h4 class=\"mb-4\">Admin Login</h4>\r\n                                               </div>\r\n                                               <div class=\"form-group\">\r\n                                               <label>Authenication ID</label>\r\n                                               <input type=\"text\" class=\"form-control\" />\r\n                                               </div>\r\n                                               <div class=\"form-group\">\r\n                                               <label>Passcode</label>\r\n                                               <input type=\"text\" class=\"form-control\" />\r\n                                               </div>\r\n                                               <button type=\"submit\" class=\"btn btn-primary btn-block\">LOGIN</button>\r\n                                               \r\n                                           </form> -->\r\n                                           \r\n\r\n\r\n\r\n                                           <form class=\"mt-2\" [formGroup]=\"LoginForm\">\r\n                                                <!-- <h2 class=\"bc-2 mb-4\"> LOGIN  </h2> -->\r\n                                                <div class=\"form-group\">\r\n                                                    <label>User Name </label>\r\n                                                    <input formControlName=\"pUserName\" type=\"text\" class=\"form-control\" name=\"username\" [ngClass]=\"{ 'is-invalid':  submitted && LoginForm.controls.pUserName.errors }\">\r\n                                                    <div *ngIf=\" submitted &&  LoginForm.controls.pUserName.errors\" class=\"invalid-feedback\">\r\n                                                        <div *ngIf=\"LoginForm.controls.pUserName.errors.required\">User Name Required!</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                        <label>Password</label>\r\n                                                        <input formControlName=\"pPassword\" type=\"password\" class=\"form-control\" name=\"password\" [ngClass]=\"{ 'is-invalid':  submitted && LoginForm.controls.pPassword.errors }\">\r\n                                                        <div *ngIf=\" submitted &&  LoginForm.controls.pPassword.errors\" class=\"invalid-feedback\">\r\n                                                          <div *ngIf=\"LoginForm.controls.pPassword.errors.required\">Password Required!</div>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                <div class=\"from-group mt-4 mb-2\">\r\n                                                    <input type=\"submit\" (click)=\"loginclick()\" value=\"Sign In\" class=\"btn btn-b-icon px-3 border-0 btn-block\">\r\n                                                </div>\r\n                                                <div class=\"text-center\" style=\"font-size:12px;\">\r\n                                                    <!--<a href=\"#\" class=\"text-decoration-none\"> Forgot your login details? </a>\r\n                                    <a href=\"#\" class=\"text-decoration-none lc-title\" style=\"font-size:12px !important; \"> Get help signing in </a>-->\r\n                                                </div>\r\n                                            </form>\r\n                            \r\n                             </div>\r\n                             </div>\r\n                           </div> \r\n                        </div>\r\n        \r\n        \r\n        \r\n            </div>\r\n\r\n\r\n\r\n    <!-- ======================================================================= tab nav end ============================================================================== -->\r\n    <!-- <div class=\"d-flex justify-content-center mt-4\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"rounded mt-5 h-100 shadow-lg col-12 d-flex p-0 login-bg\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"m-4\">\r\n                        <div onClick=\"location.href='#'\" class=\"text-center\">\r\n                            <a href=\"#\" class=\"text-center\"><img src=\"assets/images/logo.png\" width=\"100px\" height=\"100px\" /></a>\r\n                        </div>\r\n                        <form class=\"mt-2\" [formGroup]=\"LoginForm\">\r\n                           \r\n                            <div class=\"form-group\">\r\n                                <label>User Name </label>\r\n                                <input formControlName=\"pUserName\" type=\"text\" class=\"form-control\" name=\"username\" [ngClass]=\"{ 'is-invalid':  submitted && LoginForm.controls.pUserName.errors }\">\r\n                                <div *ngIf=\" submitted &&  LoginForm.controls.pUserName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"LoginForm.controls.pUserName.errors.required\">User Name Required!</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                    <label>Password</label>\r\n                                    <input formControlName=\"pPassword\" type=\"password\" class=\"form-control\" name=\"password\" [ngClass]=\"{ 'is-invalid':  submitted && LoginForm.controls.pPassword.errors }\">\r\n                                    <div *ngIf=\" submitted &&  LoginForm.controls.pPassword.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"LoginForm.controls.pPassword.errors.required\">Password Required!</div>\r\n                                    </div>\r\n                                  </div>\r\n                            <div class=\"from-group mt-4 mb-2\">\r\n                                <input type=\"submit\" (click)=\"loginclick()\" value=\"Sign In\" class=\"btn btn-b-icon px-3 border-0 btn-block\">\r\n                            </div>\r\n                            <div class=\"text-center\" style=\"font-size:12px;\">\r\n                            \r\n                            </div>\r\n                        </form>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n</div>\r\n<!--container-fluid-end-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/Users/usersregistration/usersregistration.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Settings/Users/usersregistration/usersregistration.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <!--row-end-->\r\n    <!-- ======================================================================= tab nav end ============================================================================== -->\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-md-6 col-xl-6\">\r\n            <h2 class=\"bc-2\">User Registration</h2>\r\n        </div>\r\n        <div class=\"col-md-6 col-xl-6\">\r\n            <span (click)=\"back('UsersView')\" style=\"background-color: #4b70ff;\r\n          color: #fff; padding: 5px 10px 3px 0px;cursor: pointer;float: right;\"><img src=\"assets/images/icon-back-blue.svg\" width=\"25px\" height=\"25px\"> View</span>\r\n        </div>\r\n        <hr>\r\n        <form [formGroup]=\"RegistrationForm\">\r\n            <div class=\"col-md-12 col-xl-12\">\r\n                <div class=\" individual\">\r\n                    <div class=\"\">\r\n                        <label class=\"mt-1\" for=\"\"> Contact</label>\r\n                        <div class=\"form-group\">\r\n                            <select (change)=\"getrole($event)\" class=\"form-control w-100\" formControlName=\"pEmployeeName\" [ngClass]=\"{ 'is-invalid':  submitted && RegistrationForm.controls.pEmployeeName.errors }\">\r\n                  <option value=\"\">Select</option>\r\n                  <option *ngFor=\"let User of Users\" [value]=\"User.pEmployeeName\">{{User.pEmployeeName}}</option>\r\n\r\n                </select>\r\n                            <div *ngIf=\" submitted &&  RegistrationForm.controls.pEmployeeName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"RegistrationForm.controls.pEmployeeName.errors.required\">Select User</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"mt-1\">Designation</label>\r\n                            <select (change)=\"getroleId($event)\" class=\"form-control w-100\" formControlName=\"pRoleName\" [ngClass]=\"{ 'is-invalid':  submitted && RegistrationForm.controls.pRoleName.errors }\">\r\n                  <option value=\"\">Select</option>\r\n                  <option *ngFor=\"let User of Roles\" [value]=\"User.prolename\">{{User.prolename}}</option>\r\n\r\n                </select>\r\n\r\n                            <div *ngIf=\" submitted &&  RegistrationForm.controls.pRoleName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"RegistrationForm.controls.pRoleName.errors.required\">Enetr Designation</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"mt-1\">User Name</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pUserName\" [ngClass]=\"{ 'is-invalid':  submitted && RegistrationForm.controls.pUserName.errors }\" placeholder=\"\" />\r\n                            <div *ngIf=\" submitted &&  RegistrationForm.controls.pUserName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"RegistrationForm.controls.pUserName.errors.required\">Enetr User Name</div>\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class=\"form-group\">\r\n                <label class=\"mt-1\">password</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"pPassword\" [ngClass]=\"{ 'is-invalid':  submitted && RegistrationForm.controls.pPassword.errors }\" placeholder=\"\" />\r\n                <div *ngIf=\" submitted &&  RegistrationForm.controls.pPassword.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"RegistrationForm.controls.pPassword.errors.required\">Enter Password</div>\r\n                </div>\r\n              </div>-->\r\n                        <div hidden class=\"form-group\">\r\n                            <label class=\"mt-1\" for=\"\">Access Type</label>\r\n                            <div class=\"form-group \">\r\n                                <select class=\"form-control w-100\" formControlName=\"pUserType\" [ngClass]=\"{ 'is-invalid':  submitted && RegistrationForm.controls.pUserType.errors }\">\r\n                    <option selected>Web</option>\r\n                    <option>Mobile</option>\r\n                  </select>\r\n                                <div *ngIf=\" submitted &&  RegistrationForm.controls.pUserType.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"RegistrationForm.controls.pUserType.errors.required\">Select User</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--<div class=\"col-md-3 col-xl-3\">\r\n              <div class=\"loans-card mt-4\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"dropdown lc-dd col-auto position-absolute float-right p-0\" style=\"right:0px;\">\r\n                      <button class=\"btn dropdown-toggle  border-0\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <img src=\"assets/images/icon-more-dots-blue.svg\" width=\"25px\" height=\"25px\">\r\n                      </button>\r\n                      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\"> <a class=\"dropdown-item\" href=\"#\">View profile</a> <a class=\"dropdown-item\" href=\"#\">History</a> <a class=\"dropdown-item\" href=\"#\">Delete</a> </div>\r\n                    </div>\r\n                    <div class=\"user-pic\"> <img src=\"assets/images/user.svg\"> </div>\r\n                  </div>\r\n                  <div class=\"col-12 pt-2\">\r\n                    <p class=\"lc-title text-center mb-auto\">Vignesh Kumar</p>\r\n                    <div class=\"mt-3\">\r\n                      <p class=\"lc-sub-title mb-0 text-center mt-3\">98487 99777</p>\r\n                      <p class=\"lc-txt mb-0 mt-1 text-center\"> Unique ID - 123456 </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <button class=\"btn btn-s-icon px-3 mt-4 w-100 btn-lg border-0\">\r\n                      <img src=\"assets/images/icon-check-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\" />\r\n                      Select as applicant\r\n                    </button>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>-->\r\n\r\n\r\n\r\n                    <div class=\"d-flex mt-4\" (click)=\"SaveRegistration()\">\r\n                        <a data-toggle=\"tab\" class=\"btn btn-b-icon px-3 border-0\" role=\"tab\" aria-controls=\"hot\" aria-selected=\"false\"><img src=\"assets/images/icon-check-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\" />Submit</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- ================================================================= Select business entity======================================================================== -->\r\n            <div class=\"col-md-12 col-xl-12\">\r\n                <div class=\"businessentity radio-toggle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 col-xl-4\">\r\n                            <label class=\"mt-1\" for=\"\"> Loan Type</label>\r\n                            <div class=\"form-group\">\r\n                                <select class=\"form-control w-100\">\r\n                  <option>Vehicle Loan</option>\r\n                  <option>Home Loan</option>\r\n                  <option>Gold Loan</option>\r\n                  <option>Loan Against Deposit</option>\r\n                  <option>Business/Small Business Loan/Working Capital Loan</option>\r\n                  <option>Education Loan</option>\r\n                  <option>Loan against property</option>\r\n                </select>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Loan Name and Code</label>\r\n                                <select class=\"form-control\">\r\n                  <option>Vehicle Loan-2wheeler</option>\r\n                  <option>Vehicle Loan-4wheeler</option>\r\n                </select>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"mt-1\" for=\"\">Select Business Entity</label>\r\n                                <div class=\"form-group \">\r\n                                    <select class=\"form-control w-100\">\r\n                    <option>BVM Energy</option>\r\n                    <option>Dakshin</option>\r\n                    <option>CG Alive</option>\r\n                  </select>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n                        <div class=\"col-md-3 col-xl-3\">\r\n                            <div class=\"loans-card mt-4\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <div class=\"dropdown lc-dd col-auto position-absolute float-right p-0\" style=\"right:0px;\">\r\n                                            <button class=\"btn dropdown-toggle  border-0\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <img src=\"assets/images/icon-more-dots-blue.svg\" width=\"25px\" height=\"25px\">\r\n                      </button>\r\n                                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\"> <a class=\"dropdown-item\" href=\"#\">View profile</a> <a class=\"dropdown-item\" href=\"#\">History</a> <a class=\"dropdown-item\" href=\"#\">Delete</a> </div>\r\n                                        </div>\r\n                                        <div class=\"user-pic\"> <img src=\"assets/images/user.svg\"> </div>\r\n                                    </div>\r\n                                    <div class=\"col-12 pt-2\">\r\n                                        <p class=\"lc-title text-center mb-auto\">BVM Energy Pvt. Ltd.</p>\r\n                                        <div class=\"mt-3\">\r\n                                            <p class=\"lc-sub-title text-center mb-auto\">Krishnaiah V.</p>\r\n                                            <p class=\"lc-txt mb-0 text-center mt-2\">98487 99777</p>\r\n                                            <p class=\"lc-txt mb-0 mt-1 text-center\"> Unique ID - 123456 </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <button class=\"btn btn-s-icon px-3 mt-4 w-100 btn-lg border-0\">\r\n                      <img src=\"assets/images/icon-check-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\" />\r\n                      Select as applicant\r\n                    </button>\r\n                                    </div>\r\n                                    <!--dropdown-end-->\r\n                                </div>\r\n                                <!--row-end-->\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end mt-4\">\r\n                        <a href=\"#loanconfig\" data-toggle=\"tab\" class=\"btn btn-b-icon px-3 border-0\" role=\"tab\" aria-controls=\"hot\" aria-selected=\"false\"><img src=\"assets/images/icon-chewron-right-whitesolid.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\" />Next</a>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/Users/usersview/usersview.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Settings/Users/usersview/usersview.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n    <div class=\"col d-flex flex-wrap align-items-center\">\r\n        <a routerLink=\"/UsersRegistration\" class=\"btn btn-b-icon border-0\"><img src=\"assets/images/icon-add-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-2\" />New</a>\r\n    </div>\r\n</div>\r\n<div class=\"row  mt-3\">\r\n    <div class=\"col-md-12 col-xl-12\">\r\n        <div class=\"my-container\">\r\n            <ng-template #customLoadingTemplate>\r\n                <div class=\"custom-class\">\r\n\r\n                </div>\r\n            </ng-template>\r\n            <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n\r\n        </div>\r\n        <kendo-grid [kendoGridBinding]=\"Usersdata\" [pageSize]=\"pageSize\" [skip]=\"gridState.skip\" [pageable]=\"{buttonCount: 2}\" [sort]=\"gridState.sort\" [sortable]=\"true\" [resizable]=\"true\">\r\n            <ng-template kendoGridToolbarTemplate>\r\n                <div class=\"row p-3 mb-3\">\r\n                    <div class=\"col-4 pl-0 mt-n1\">\r\n                        <input placeholder=\"Search in all columns...\" kendoTextBox class=\"form-control search-k-cst sb\" (input)=\"onFilter($event.target.value)\" />\r\n                    </div>\r\n                    <div class=\"col-7 pr-0 pl-4 ml-4\">\r\n                        <ul class=\"temp-ul mt-n1 mr-n2  pull-right\">\r\n                            <li class=\"temp-ico ml-2\">\r\n                                <a kendoGridPDFCommand><img class=\"pt-2\" src=\"assets/images/pdf-icon-blue.svg \" title=\"pdf\" width=\"20px\"></a>\r\n                            </li>\r\n                            <li class=\"temp-ico ml-2\">\r\n                                <a kendoGridExcelCommand><img class=\"pt-2\" src=\"assets/images/icon-excel.svg \" title=\"excel\" width=\"20px\"></a>\r\n                            </li>\r\n                            <!-- <li class=\"temp-ico ml-2\"><a    (click)=\"print()\"><img class=\"pt-2\" src=\"assets/images/print-icon-blue.svg \" title=\"print\" width=\"20px\"></a></li> -->\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-template>\r\n          \r\n            <kendo-grid-column-group title=\"User View\" [headerClass]=\"{'kendo-g-center' : true}\">\r\n            <kendo-grid-column field=\"pUserID\" title=\"S.No\">\r\n                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                    {{rowIndex+1}}\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"pUserName\" title=\"User Name\"></kendo-grid-column>\r\n            <kendo-grid-column field=\"pEmployeeName\" title=\"Name\"></kendo-grid-column>\r\n            <kendo-grid-column field=\"pPassword\" title=\"Reset Password\">\r\n                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                    <a (click)=\"Resetpassword(dataItem)\" class=\"btn btn-b-icon border-0\" style=\"height: 26px !important;\"><img src=\"assets/images/settings.svg\" width=\"20px\" height=\"20px\" class=\"mr-2 \"><span class=\"text-white\">Reset</span></a>\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n\r\n            <kendo-grid-column field=\"pEmployeeName\" title=\"User rights\">\r\n                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                    <a>\r\n                        <div id=\"icon-edit\" title=\"Edit\" (click)=\"Userrights(dataItem)\"></div>\r\n                    </a>\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n\r\n\r\n            <kendo-grid-column field=\"pActiveorInactive\" title=\"Status\" field=\"ID\" class=\"material-switch\">\r\n                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                    <input id=\"status{{rowIndex}}\" type=\"checkbox\" [checked]=\"dataItem.pActiveorInactive\" data-toggle=\"collapse\" data-target=\"#tds\" (click)=\"status(dataItem)\">\r\n                    <label for=\"status{{rowIndex}}\" class=\"badge-success\" data-toggle=\"collapse\" data-target=\"#tds\"></label>\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n\r\n\r\n            </kendo-grid-column-group>\r\n            <kendo-grid-pdf fileName=\"User View.pdf\" paperSize=\"A4\" [allPages]=\"true\" [repeatHeaders]=\"true\" [landscape]=\"true\">\r\n                    <ng-template kendoGridPDFTemplate>\r\n                            <div class=\"page-template\">\r\n                               <div class=\"header bc-2 text-center\">\r\n                                <h5> User View </h5>\r\n                               </div>\r\n                             </div>\r\n                           </ng-template>\r\n                <kendo-grid-pdf-margin top=\"2cm\" left=\"1cm\" right=\"1cm\" bottom=\"1cm\"></kendo-grid-pdf-margin>\r\n\r\n                <kendo-grid-column field=\"pUserName\" title=\"User Name\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"pEmployeeName\" title=\"Name\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"pActiveorInactive\" title=\"Status\"></kendo-grid-column>\r\n            </kendo-grid-pdf>\r\n\r\n\r\n            <kendo-grid-excel fileName=\"User View.xlsx\" [fetchData]=\"allData\">\r\n                    <kendo-excelexport-column-group title=\"User View\" [headerCellOptions]=\"headerCells\">\r\n                <kendo-excelexport-column field=\"pUserName\" title=\"User Name\"></kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"pEmployeeName\" title=\"Name\"></kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"pActiveorInactive\" title=\"Status\"></kendo-excelexport-column>\r\n                    </kendo-excelexport-column-group>\r\n            </kendo-grid-excel>\r\n\r\n        </kendo-grid>\r\n\r\n</div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/add-menu/add-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Settings/add-menu/add-menu.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n    <div class=\"col-12\">\r\n        <p class=\"bc-2\">Add Menu/ Navigation</p>\r\n    </div>\r\n</div>\r\n<form [formGroup]=\"AddModuleForm\" id=\"Addmenuform\">\r\n    <div class=\"\">\r\n<div class=\"card-box p-0 pt-3 mt-2 mb-3\">\r\n        <div class=\"col-md-6 col-xl-4 pb-4\">\r\n            <div class=\"form-group\">\r\n                <label>Module</label>\r\n                <div class=\"input-group\">\r\n                    <select class=\"form-control\" formControlName=\"pModulename\" (change)=\"SelectModule($event)\" [ngClass]=\"{ 'is-invalid': submitted && errorsAddModuleForm.pModulename.errors }\" #ref>\r\n                          <option value=\"\" disabled>Select</option>\r\n                          <option *ngFor=\"let modules of Modulesdata;\" [value]=\"modules.pModuleId\"> {{modules.pModulename}}</option>\r\n                        </select>\r\n\r\n\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-lg-icon px-2 p-0\" (click)=\"OpenModel()\"> <img src=\"assets/images/icon-add-blue.svg\" class=\"\" width=\"18px\" height=\"18px\" ></button>\r\n                    </div>\r\n                    <div *ngIf=\" submitted &&  errorsAddModuleForm.pModulename.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"errorsAddModuleForm.pModulename.errors.required\">Select Module Name</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Sub Module</label>\r\n                <div class=\"input-group\">\r\n                    <select class=\"form-control\" formControlName=\"pSubmodulename\" (change)=\"SelectsubModule($event)\" [ngClass]=\"{ 'is-invalid': submitted && errorsAddModuleForm.pSubmodulename.errors }\" #ref>\r\n                      <option value=\"\" disabled>Select</option>\r\n                      <option *ngFor=\"let SubModules of SubModulesdata;\" [value]=\"SubModules.pSubmoduleId\"> {{SubModules.pSubmodulename}}</option>\r\n                    </select>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-lg-icon px-2 p-0\" (click)=\"OpenSubModel()\"> <img src=\"assets/images/icon-add-blue.svg\" class=\"\" width=\"18px\" height=\"18px\"></button>\r\n                    </div>\r\n                    <div *ngIf=\" submitted &&  errorsAddModuleForm.pSubmodulename.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"errorsAddModuleForm.pSubmodulename.errors.required\">Select Sub Module Name</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Create Form</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"pFunctionname\" [ngClass]=\"{ 'is-invalid': submitted && errorsAddModuleForm.pFunctionname.errors }\" #ref/>\r\n                <div *ngIf=\" submitted &&  errorsAddModuleForm.pFunctionname.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"errorsAddModuleForm.pFunctionname.errors.required\">Enter Form Name</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group \">\r\n                <label>Form Url</label>\r\n                <div class=\"demo-section k-content\">\r\n                    <input id=\"contactsaa\" formControlName=\"pFunctionurl\" name=\"url\" class=\"form-control\" (change)=\"SelectPath($event)\" [ngClass]=\"{ 'is-invalid': submitted && errorsAddModuleForm.pFunctionurl.errors }\" #ref />\r\n                </div>\r\n                <div *ngIf=\" submitted &&  errorsAddModuleForm.pFunctionurl.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"errorsAddModuleForm.pFunctionurl.errors.required\">Enter Form Url</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"d-flex\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"material-switch pull-right\"> <span class=\"mr-2\">Show in Navigation</span>\r\n                        <input id=\"show-in-navigation\" formControlName=\"pIsfunctionshowinNavigation\" type=\"checkbox\">\r\n                        <label for=\"show-in-navigation\" class=\"badge-success\"></label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group ml-5 pl-2\">\r\n                    <div class=\"material-switch pull-right\"> <span class=\"mr-2\">Allow Roles</span>\r\n                        <input id=\"allow-role\" formControlName=\"pIsFunctionshowinRoles\" type=\"checkbox\">\r\n                        <label for=\"allow-role\" class=\"badge-success\"></label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end mt-4\">\r\n                <a (click)=\"ClearAddMenu()\" class=\"btn btn-g-icon mr-4 px-3 border-0\"><img src=\"assets/images/icon-cancel-white.svg\" class=\"mr-3\" width=\"20px\" height=\"20px\">Clear</a>\r\n                <a (click)=\"AddMenu()\" data-toggle=\"tab\" class=\"btn btn-b-icon px-3 border-0\" role=\"tab\" aria-controls=\"hot\" aria-selected=\"false\"><img src=\"assets/images/icon-check-white.svg\" class=\"mr-3\" width=\"20px\" height=\"20px\">Add & Save</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"my-container\">\r\n    <ng-template #customLoadingTemplate>\r\n        <div class=\"custom-class\">\r\n\r\n        </div>\r\n    </ng-template>\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n\r\n</div>\r\n<kendo-grid [kendoGridBinding]=\"Navigationdata\" [pageSize]=\"pageSize\" [skip]=\"gridState.skip\" [pageable]=\"{buttonCount: 2}\" [sort]=\"gridState.sort\" [sortable]=\"true\" [resizable]=\"true\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n        <div class=\"row mb-3 p-3\">\r\n            <div class=\"col-4 pl-0 mt-n1\">\r\n                <input placeholder=\"Search in all columns...\" kendoTextBox class=\"form-control search-k-cst sb\" (input)=\"onFilter($event.target.value)\" />\r\n            </div>\r\n            <div class=\"col-7 pr-0 pl-4 ml-4\">\r\n                <ul class=\"temp-ul mt-n1 mr-n2  pull-right\">\r\n                    <li class=\"temp-ico ml-2\">\r\n                        <a kendoGridPDFCommand><img class=\"pt-2\" src=\"assets/images/pdf-icon-blue.svg \" title=\"pdf\" width=\"20px\"></a>\r\n                    </li>\r\n                    <li class=\"temp-ico ml-2\">\r\n                        <a kendoGridExcelCommand><img class=\"pt-2\" src=\"assets/images/icon-excel.svg \" title=\"excel\" width=\"20px\"></a>\r\n                    </li>\r\n                    <!-- <li class=\"temp-ico ml-2\"><a    (click)=\"print()\"><img class=\"pt-2\" src=\"assets/images/print-icon-blue.svg \" title=\"print\" width=\"20px\"></a></li> -->\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n    </ng-template>\r\n    <kendo-grid-column-group title=\"Menu\" [headerClass]=\"{'kendo-g-center' : true}\">\r\n    <kendo-grid-column field=\"pModulename\" title=\"Module Name\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"pSubmodulename\" title=\"Submodule Name\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"pFunctionname\" title=\"Function Name\"></kendo-grid-column>\r\n\r\n    <kendo-grid-column field=\"pFunctionId\" title=\"Select\" width=\"80\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div id=\"icon-delete\" (click)=\"NavigationDelete(dataItem)\"></div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    </kendo-grid-column-group>\r\n    <kendo-grid-pdf fileName=\"Navigation.pdf\" paperSize=\"A4\" [allPages]=\"true\" [repeatHeaders]=\"true\" [landscape]=\"true\">\r\n            <ng-template kendoGridPDFTemplate>\r\n                    <div class=\"page-template\">\r\n                       <div class=\"header bc-2 text-center\">\r\n                        <h5> Menu </h5>\r\n                       </div>\r\n                     </div>\r\n                   </ng-template>\r\n        <kendo-grid-pdf-margin top=\"2cm\" left=\"1cm\" right=\"1cm\" bottom=\"1cm\"></kendo-grid-pdf-margin>\r\n        <kendo-grid-column field=\"pModulename\" title=\"Module Name\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"pSubmodulename\" title=\"Submodule Name\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"pFunctionname\" title=\"Function Name\"></kendo-grid-column>\r\n    </kendo-grid-pdf>\r\n\r\n\r\n    <kendo-grid-excel fileName=\"Navigation.xlsx\" [fetchData]=\"allData\">\r\n            <kendo-excelexport-column-group title=\"Menu\" [headerCellOptions]=\"headerCells\">\r\n        <kendo-excelexport-column field=\"pModulename\" title=\"Module Name\"></kendo-excelexport-column>\r\n        <kendo-excelexport-column field=\"pSubmodulename\" title=\"Submodule Name\"></kendo-excelexport-column>\r\n        <kendo-excelexport-column field=\"pFunctionname\" title=\"Function Name\"></kendo-excelexport-column>\r\n            </kendo-excelexport-column-group>\r\n    </kendo-grid-excel>\r\n\r\n</kendo-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- modal  Module-->\r\n<div class=\"modal right animated slideInRight\" id=\"add-detail\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"model-cst modal-content\">\r\n            <!-- Modal body -->\r\n            <div class=\"modal-body\">\r\n\r\n                <button type=\"button\" class=\"close\" (click)=\"CloseModel()\">&times;</button>\r\n                <form [formGroup]=\"ModuleForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">New Module</label>\r\n                        <input formControlName=\"pModulename\" appTitlecaseword appCharactersonly (keyup)=\"ModuleTitle($event)\" id=\"pModulename\" type=\"text\" maxlength=\"100\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': issubmitted && errorsModuleForm.pModulename.errors }\" #ref>\r\n\r\n                        <div *ngIf=\" issubmitted &&  errorsModuleForm.pModulename.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"errorsModuleForm.pModulename.errors.required\">Enter Module Name</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex justify-content-end mt-4\">\r\n                        <a class=\"btn close btn-g-icon mr-4 px-3 border-0\" (click)=\"Clear()\"><img src=\"assets/images/icon-cancel-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\">Clear </a>\r\n                        <a (click)=\"ModelSave()\" data-toggle=\"tab\" class=\"btn btn-b-icon px-3 border-0\" role=\"tab\" aria-controls=\"hot\" aria-selected=\"false\">\r\n                            <img src=\"assets/images/icon-check-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\">Save</a>\r\n\r\n\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- modal  Sub Module-->\r\n<div class=\"modal right animated slideInRight\" id=\"add-submodule\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"model-cst modal-content\">\r\n            <!-- Modal body -->\r\n            <div class=\"modal-body\">\r\n\r\n                <button type=\"button\" class=\"close\" (click)=\"CloseModel()\">&times;</button>\r\n                <form [formGroup]=\"SubModuleForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Module</label>\r\n                        <input value=\"{{modalname}}\" type=\"text\" maxlength=\"100\" class=\"form-control\" readonly>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Sub Module</label>\r\n                        <input formControlName=\"pSubmodulename\" appTitlecaseword appCharactersonly (keyup)=\"ModuleTitle($event)\" id=\"idpSubmodulename\" type=\"text\" maxlength=\"100\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': issubmitted && errorsSubModuleForm.pSubmodulename.errors }\"\r\n                            #ref>\r\n                        <div *ngIf=\" issubmitted &&  errorsSubModuleForm.pSubmodulename.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"errorsSubModuleForm.pSubmodulename.errors.required\">Enter Sub Module</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end mt-4\">\r\n                        <a class=\"btn close btn-g-icon mr-4 px-3 border-0\" (click)=\"Clear()\"><img src=\"assets/images/icon-cancel-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\">Clear </a>\r\n                        <a (click)=\"SubModelSave()\" data-toggle=\"tab\" class=\"btn btn-b-icon px-3 border-0\" role=\"tab\" aria-controls=\"hot\" aria-selected=\"false\">\r\n                            <img src=\"assets/images/icon-check-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\">Save</a>\r\n\r\n\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/user-rights/user-rights.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/Settings/user-rights/user-rights.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n    <div class=\"col-12\">\r\n        <p class=\"bc-2\">Rights allocation on</p>\r\n    </div>\r\n</div>\r\n<form>\r\n\r\n    <div class=\"col-md-12 col-lg-12 col-xl-12 pl-0\">\r\n        <div class=\"form-group\">\r\n            <div class=\"form-check radio-btn form-check-inline mr-1  \">\r\n                <input class=\"form-check-input \" [checked]=\"Type === 'Designation'\" type=\"radio\" name=\"inlineRadioOptions1\" id=\"inlineRadio2\" value=\"designation\" (click)=\"DesignationClick()\">\r\n                <label class=\"mt-1\" for=\"inlineRadio2\">Designation</label>\r\n            </div>\r\n            <div class=\"form-check radio-btn form-check-inline mr-2\">\r\n                <input class=\"form-check-input radio-btn\" [checked]=\"Type === 'User'\" type=\"radio\" name=\"inlineRadioOptions1\" id=\"inlineRadio3\" value=\"others\" (click)=\"UsersClick()\">\r\n                <label class=\"mt-1\" for=\"inlineRadio3\">Users</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"designation\" *ngIf=\"Designationsview\">\r\n        <div class=\"col-md-6 col-xl-4 pl-0\">\r\n            <div class=\"form-group\">\r\n                <label>Designation</label>\r\n                <select class=\"form-control\" (change)=\"SelectDesignation($event)\">\r\n          <option value=\"\">Select</option>\r\n          <option *ngFor=\"let Roles of Rolesdata;\" [value]=\"Roles.prolename\"\r\n            [selected]=\"Roles.prolename === Selectdata\"> {{Roles.prolename}}</option>\r\n\r\n        </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Designation end -->\r\n    <div class=\"others\" *ngIf=\"Usersview\">\r\n        <div class=\"col-md-6 col-xl-4 p-0\">\r\n            <div class=\"form-group\">\r\n                <label>Select User</label>\r\n                <select class=\"form-control\" (change)=\"SelectUser($event)\">\r\n          <option value=\"\">Select</option>\r\n          <option *ngFor=\"let User of Userdata;\" [value]=\"User.pUserName\" [selected]=\"User.pUserName === Selectdata\">\r\n            {{User.pUserName}}</option>\r\n\r\n        </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- others end -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-xl-12\">\r\n            <div class=\"table-responsive\">\r\n                <div class=\"my-container\">\r\n                    <ng-template #customLoadingTemplate>\r\n                        <div class=\"custom-class\">\r\n\r\n                        </div>\r\n                    </ng-template>\r\n                    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\r\n                    </ngx-loading>\r\n\r\n                </div>\r\n               \r\n\r\n                <kendo-grid [kendoGridBinding]=\"Navigationdata\" [groupable]=\"false\" [group]=\"groups\" [resizable]=\"true\" [resizable]=\"true\" [pageable]=\"false\" [sortable]=\"false\" [resizable]=\"true\">\r\n                    <ng-template kendoGridToolbarTemplate>\r\n                        <div class=\"row mb-4 p-3\">\r\n                            <div class=\"col-4 pl-0 mt-n1\">\r\n                                <input placeholder=\"Search in all columns...\" kendoTextBox class=\"form-control search-k-cst sb\" (input)=\"onFilter($event.target.value)\" />\r\n                            </div>\r\n\r\n                        </div>\r\n                    </ng-template>\r\n\r\n                    <kendo-grid-column field=\"pmodulename\" title=\"Module\">\r\n                        <ng-template kendoGridCellTemplate let-group let-field=\"field\" let-value=\"value\">\r\n                            <!-- {{dataItem.ptransactiondate}} -->\r\n                        </ng-template>\r\n                    </kendo-grid-column>\r\n\r\n\r\n                    <kendo-grid-column field=\"psubmodulename\" title=\"Sub Module\">\r\n                        <ng-template kendoGridCellTemplate let-dataItem>\r\n                            <!-- {{dataItem.ptransactiondate}} -->\r\n                        </ng-template>\r\n                    </kendo-grid-column>\r\n\r\n\r\n                    <kendo-grid-column field=\"pFunctionName\" title=\"Form Name\"></kendo-grid-column>\r\n\r\n                    <kendo-grid-checkbox-column title=\"View\">\r\n                        <ng-template kendoGridCellTemplate let-dataItem let-idx=\"rowIndex\">\r\n                            <input type=\"checkbox\" [checked]=\"dataItem.pIsviewpermission\" (click)=\"clickaview(dataItem)\" />\r\n                        </ng-template>\r\n                    </kendo-grid-checkbox-column>\r\n\r\n                    <kendo-grid-checkbox-column title=\"Create\">\r\n                        <ng-template kendoGridCellTemplate let-dataItem let-idx=\"rowIndex\">\r\n                            <input type=\"checkbox\" [checked]=\"dataItem.pIscreatepermission\" (click)=\"clickacreate(dataItem)\" />\r\n                        </ng-template>\r\n                    </kendo-grid-checkbox-column>\r\n\r\n                    <kendo-grid-checkbox-column title=\"Update\">\r\n                        <ng-template kendoGridCellTemplate let-dataItem let-idx=\"rowIndex\">\r\n                            <input type=\"checkbox\" [checked]=\"dataItem.pIsupdatepermission\" (click)=\"clickaupdate(dataItem)\" />\r\n                        </ng-template>\r\n                    </kendo-grid-checkbox-column>\r\n\r\n                    <kendo-grid-checkbox-column title=\"Delete\">\r\n                        <ng-template kendoGridCellTemplate let-dataItem let-idx=\"rowIndex\">\r\n                            <input type=\"checkbox\" [checked]=\"dataItem.pIsdeletepermission\" (click)=\"Clickadelete(dataItem)\" />\r\n                        </ng-template>\r\n                    </kendo-grid-checkbox-column>\r\n\r\n                </kendo-grid>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--row-end-->\r\n    <div class=\"col-12 mt-4 p-0\" (click)=\"Addpermissions()\">\r\n        <a href=\"\" data-toggle=\"tab\" class=\"btn btn-s-icon border-0\" role=\"tab\" aria-controls=\"hot\" aria-selected=\"false\"><img src=\"assets/images/icon-check-white.svg\" width=\"20px\" height=\"20px\" class=\"mr-3\" />Add permissions</a>\r\n    </div>\r\n</form>\r\n\r\n<!--buttons-end-->\r\n<script>\r\n    $('.k-grouping-row').each(function(e) {\r\n        if ($(this).next('tr').hasClass('k-grouping-row')) {\r\n            let input = $(this).find('.select-group')\r\n            $(input).attr(\"disabled\", true)\r\n        }\r\n    })\r\n</script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/User/live-bidding/drawspinner.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/User/live-bidding/drawspinner.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"auction-tree\">\r\n                <h2 class=\"text-white\">AUCTION IS TIE / DRAW</h2>\r\n                <h4 class=\"text-white pt-2\">Between {{drawticketslength}} Members Ticket no's are </h4>\r\n\r\n                <div class=\"row\">\r\n                    <ul class=\"tie-tickets\">\r\n                        <li class=\"tkt-green\" *ngFor=\"let draw of drawtickets\">\r\n                            <span>{{draw}}</span>\r\n                        </li>\r\n                        <!-- <li class=\"tkt-blue\"><span>26</span></li>\r\n                        <li class=\"tkt-red\"><span>11</span></li> -->\r\n                    </ul>\r\n                </div>\r\n\r\n                <h4 class=\"text-white font-weight-light font-12 \">Please wait\r\n                    Auctioneer<strong> {{auctioneer}}</strong> is conducting a draw\r\n                    <br>Draw will begin now..</h4>\r\n                   \r\n                    <ngx-wheel\r\n                        #wheel\r\n                        width='300'\r\n                        height='300'\r\n                        spinDuration='8'\r\n                        [items]='items'\r\n                        [innerRadius]='20'\r\n                        [disableSpinOnClick]=true\r\n                        [spinAmount]='10'\r\n                        pointerStrokeColor='black'\r\n                        pointerFillColor='gold'\r\n                        [idToLandOn]='idToLandOn'\r\n                        (onSpinStart)='before()'\r\n                        (onSpinComplete)='after(idToLandOn)'\r\n                        ></ngx-wheel>\r\n                        <button (click)=\"Spinwheel()\"  *ngIf=\"disabledforButtons\">spin</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n   \r\n\r\n          \r\n             \r\n            \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UI/User/live-bidding/live-bidding.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UI/User/live-bidding/live-bidding.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\r\n    <div class=\"container\">\r\n            <div class=\"row\">\r\n\r\n                    <div class=\"col-2 col-sm-2\">\r\n                        <div class=\"logo\">\r\n                            <img src=\"assets/images/logo.png\" alt=\"logo\" />\r\n                        </div>\r\n                    </div>\r\n        \r\n                    <div class=\"col-6 col-sm-6\">\r\n                        <div class=\"aut-title pt-4\">\r\n                            <p>Welcome <span class=\"nblue\">{{username}}   </span>\r\n                                <span class=\"badge badge-light\" *ngIf=\"showbadge\"> {{ticketno}} </span>\r\n                           </p>\r\n                         \r\n                        </div>\r\n        \r\n                    </div>\r\n        \r\n                    \r\n                    <!-- <div class=\"d-flex justify-content-end pt-3\">\r\n                        <a class=\"btn btn-success text-white font-10\" (click)=\"testconfirmpopup()\">Confirm\r\n                                popup</a>\r\n                            <a class=\"btn btn-primary text-white mr-3 font-10\" (click)=\"testwheelpopup()\">Draw\r\n                                popup</a>\r\n                            <a class=\"btn btn-success text-white font-10\" (click)=\"testsuccesspopup()\">Success\r\n                                popup</a>\r\n    \r\n    \r\n                    </div> -->\r\n    \r\n                    <div class=\"col-4 col-sm-4\">\r\n                        <div class=\"d-flex justify-content-end\">\r\n                            <div class=\"dropdown\">\r\n                            <div class=\"user-pic dropdown\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                <img src=\"assets/images/user.png\">\r\n                            </div>\r\n        \r\n                            <!-- <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a class=\"dropdown-item\" >Profile</a>\r\n                                <a class=\"dropdown-item\" (click)=\"Signout()\" >Logout</a>\r\n                            </div> -->\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n        \r\n            </div>\r\n    </div>\r\n\r\n</header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<section id=\"main\">\r\n    <!--Side bar starts here-->\r\n    <button class=\"openbtn d-none d-md-block font-12\" onclick=\"openNav()\" (click)=\"Getparticipants()\">\r\n            Participants <span class=\"badge badge-success\"> {{participantscount}} </span></button>\r\n\r\n            <button class=\"openbtn-sm d-sm-block d-md-none  font-12\" onclick=\"openNav()\" (click)=\"Getparticipants()\">\r\n                    {{participantscount}}\r\n                    \r\n\r\n            </button>\r\n\r\n    <div id=\"mySidebar\" class=\"sidebar\">\r\n        <div id=\"bid-list\" class=\"bid-list\">\r\n            <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">×</a>\r\n            <div class=\"col-12\">\r\n                <div class=\"list-info\">\r\n                    <p class=\"font-10 mt-0 font-weight-light\">Auctioneer</p>\r\n                    <h4 class=\"text-center font-18 mb-0 font-weight-normal\">{{auctioneer}}</h4>\r\n                    <p class=\"font-12 mt-0 font-weight-bold text-primary\">Auction Hall : {{autionhall}}</p>\r\n                    <hr>\r\n                    <!-- <p class=\"text-left font-weight-light\"> Participants <span class=\"font-weight-bold\">\r\n                            {{participantscount}}\r\n                            Members</span></p> -->\r\n                </div>\r\n\r\n        <!-----------------tabs--------->\r\n                <ul class=\"nav nav-tabs side-tabs\">\r\n                    <!-- <li class=\"active\"><a href=\"#branch-st\" data-toggle=\"tab\">Branch - {{walkinparticipantslength}}</a></li> -->\r\n                    <li><a href=\"#online-st\" data-toggle=\"tab\">Online - {{onlineparticipantslength}}</a></li>\r\n                </ul>\r\n                <ul class=\"ticket-card\">\r\n                <div class=\"tab-content pt-4\">\r\n                    <div id=\"branch-st\" class=\"tab-pane active fade\">\r\n                        <fieldset id=\"disablewalkinclients\" class=\"walkin\">\r\n                            <!-- <li *ngFor=\"let walkin of walkinparticipants\">\r\n                                        <a>\r\n                                            <div class=\"ticket-no odd\"><span>{{walkin.ticketNo}}</span></div>\r\n                                            <div class=\"ticket-disc\">\r\n                                                <p class=\"ticket-txt\"> <input  (change)=\"participantchange(walkin,$event)\"id=\"participant_{{walkin.ticketNo}}\"  type=\"radio\" name=\"participants\"> {{walkin.subscriberName}}</p>\r\n                                              \r\n                                            </div>\r\n                                        </a>\r\n                                    </li> -->\r\n    \r\n    \r\n                            <li *ngFor=\"let walkin of walkinparticipants\" class=\"radio\">\r\n                                <label class=\"card-ticket\">\r\n                                    <input class=\"card__input\" name=\"participants\"\r\n                                        (change)=\"participantchange(walkin,$event)\" id=\"participant_{{walkin.ticketNo}}\"\r\n                                        type=\"radio\" />\r\n                                    <div class=\"card__body\">\r\n                                        <div class=\"card__body-cover\"><span class=\"card__body-cover-checkbox\">\r\n                                                <svg class=\"card__body-cover-checkbox--svg\" viewBox=\"0 0 12 10\">\r\n                                                    <polyline points=\"1.5 6 4.5 9 10.5 1\"></polyline>\r\n                                                </svg>\r\n                                            </span>\r\n                                            <header class=\"card__body-header\">\r\n                                                <span>{{walkin.ticketNo}}</span>\r\n                                                <h2 class=\"card__body-header-title\">{{walkin.subscriberName}}</h2>\r\n    \r\n                                            </header>\r\n                                        </div>\r\n                                    </div>\r\n                                </label>\r\n                            </li>\r\n                 </fieldset>\r\n                    </div>\r\n                    <div id=\"online-st\" class=\"tab-pane active in\">\r\n                        <li *ngFor=\"let online of onlineparticipants\">\r\n                            <a>\r\n                                <div class=\"ticket-no odd\"><span>{{online.ticketNo}}</span></div>\r\n    \r\n                                <div class=\"ticket-disc\">\r\n                                    <p class=\"ticket-txt\">{{online.subscriberName}}</p>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                       <!-- <p class=\"text-dark\"> Bbbbb,mb,mn,mn,mn,mn,n,mn,n,nxcdfdf</p> -->\r\n                    </div>\r\n                </div>\r\n                </ul>\r\n                <!-----------------tabs closed--------->\r\n\r\n                <!-- <ul class=\"ticket-card\">\r\n                    <li *ngFor=\"let online of onlineparticipants\">\r\n                        <a>\r\n                            <div class=\"ticket-no odd\"><span>{{online.ticketNo}}</span></div>\r\n\r\n                            <div class=\"ticket-disc\">\r\n                                <p class=\"ticket-txt\">{{online.subscriberName}}</p>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <hr>\r\n\r\n\r\n                    <fieldset id=\"disablewalkinclients\" class=\"walkin\">\r\n                       \r\n                        <li *ngFor=\"let walkin of walkinparticipants\" class=\"radio\">\r\n                            <label class=\"card-ticket\">\r\n                                <input class=\"card__input\" name=\"participants\"\r\n                                    (change)=\"participantchange(walkin,$event)\" id=\"participant_{{walkin.ticketNo}}\"\r\n                                    type=\"radio\" />\r\n                                <div class=\"card__body\">\r\n                                    <div class=\"card__body-cover\"><span class=\"card__body-cover-checkbox\">\r\n                                            <svg class=\"card__body-cover-checkbox--svg\" viewBox=\"0 0 12 10\">\r\n                                                <polyline points=\"1.5 6 4.5 9 10.5 1\"></polyline>\r\n                                            </svg>\r\n                                        </span>\r\n                                        <header class=\"card__body-header\">\r\n                                            <span>{{walkin.ticketNo}}</span>\r\n                                            <h2 class=\"card__body-header-title\">{{walkin.subscriberName}}</h2>\r\n\r\n                                        </header>\r\n                                    </div>\r\n                                </div>\r\n                            </label>\r\n                        </li>\r\n                  </fieldset>\r\n                </ul> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n  \r\n    <!--Side bar ends here -->\r\n\r\n\r\n    <form class=\"example-form\" [formGroup]=\"chathistoryform\">\r\n\r\n        <div style=\"background:#03224e;\">\r\n\r\n            <div class=\"container\">\r\n                <div class=\"row p-2\">\r\n                  <div class=\"col-5 col-md-2\">\r\n                            <div class=\"live-tkt  live-d\">\r\n                                <p><b>{{groupcode}}</b></p>\r\n                                <P>{{chitvalue|mycurrencypipe}}/-</P>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-3\">\r\n                            <div class=\"live-tkt live-d\">\r\n                                <p class=\"d-none d-md-block\">Maximum Discount Allowed</p>\r\n                                <p class=\"d-block d-md-none\">Max. Disc. Allowed</p>\r\n                                <P><b>{{maxdiscountallowed|mycurrencypipe}}</b></P>\r\n                            </div>\r\n                </div>\r\n\r\n                <div class=\"col-5 col-md-3\">\r\n                            <div class=\"live-tkt live-d\">\r\n                                <p>Maximum Bid Offer - (Ticket-No:{{maxdiscountticketno}})</p>\r\n                                <P><span class=\"note-down\"></span><b>{{bidamount|mycurrencypipe}}</b></P>\r\n                            </div>\r\n            </div>\r\n            <!-- <div class=\"col-7 col-md-2\">\r\n                            <div class=\"live-tkt live-d\">\r\n                                <p>Ticket No</p>\r\n                                <P><b></b></P>\r\n                            </div>\r\n                        </div> -->\r\n                         \r\n                      \r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"bid-live\" >\r\n\r\n        \r\n              <div class=\"container \">\r\n                <div class=\"row\">\r\n                    <div class=\"col-7 col-md-3\">\r\n                        <div class=\"live-bid-info\">\r\n                            <p><span class=\"note-green\"></span>LIVE Bidding</p>\r\n                            <h2><span class=\"note-up\"></span> {{maxamount|mycurrencypipe}}</h2>\r\n                        </div>\r\n                    </div>\r\n\r\n                \r\n\r\n                    <div class=\"col-5 col-md-3 order-sm-12\">\r\n                        <div id=\"app\">\r\n                            <div class=\"base-timer\">\r\n                                <svg class=\"base-timer__svg\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <g class=\"base-timer__circle\">\r\n                                        <circle class=\"base-timer__path-elapsed\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\r\n                                        <path id=\"base-timer-path-remaining\" [attr.stroke-dasharray]=\"circlemover\"\r\n                                            [ngClass]=\"LeftTime>30?'base-timer__path-remaining green':LeftTime<30 && LeftTime>=10?'base-timer__path-remaining orange':'base-timer__path-remaining red'\"\r\n                                            d=\"\r\n                                        M 50, 50\r\n                                        m -45, 0\r\n                                        a 45,45 0 1,0 90,0\r\n                                        a 45,45 0 1,0 -90,0\r\n                                      \"></path>\r\n                                    </g>\r\n                                </svg>\r\n                                <span id=\"base-timer-label\" class=\"base-timer__label\">\r\n                                    <countdown [config]=\"prettyConfig\"></countdown>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-7 col-md-6\">\r\n                            <div class=\"live-timer-info\">\r\n                                <p>Auction</p>\r\n                                <span><img src=\"assets/images/alarm-clock(1).svg\" width=\"20\"> {{auctionstarttime}} To\r\n                                    {{auctionendtime}}</span>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                </div>\r\n                </div>\r\n         \r\n      \r\n        </div>\r\n\r\n\r\n        <div class=\"container\">\r\n         \r\n                <div class=\"bid-history\">\r\n                    \r\n                       \r\n                            <div class=\"col-12\">\r\n                            <h6><span class=\"note-green\"></span>LIVE bidding History</h6>\r\n                        </div>\r\n                            <ul class=\"bid-list mt-4\" id=\"bidscroll\">\r\n                                <li #chatcontent *ngFor=\"let chat of chats\">\r\n                                    <a>\r\n                                        <div class=\"bid-disc row\">\r\n                                            <div class=\"col-2 col-md-1\">\r\n                                                <div class=\"bid-no \"><span> {{chat.ticketNo}}</span></div>\r\n                                            </div>\r\n                                            <p class=\"col-4 col-md-5 pl-0 pr-0 \">{{chat.subscriberName}}</p>\r\n                                            <p class=\" col-3 col-md-3  text-left font-18 pr-0 font-weight-bolder\"> <img\r\n                                                    src=\"assets/images/red-rupee.svg\" class=\"rupee-active\">\r\n                                                <img src=\"assets/images/rupee.svg\" class=\"rupee-inactive\">\r\n                                                {{chat.biddamount|mycurrencypipe}} </p>\r\n                                            <p class=\"col-3 col-md-3 pl-0 pr-0 text-rigt\"> <img src=\"assets/images/alarm-clock.svg\"\r\n                                                    width=\"20\"> {{chat.livetime }}</p>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                            <hr>\r\n                  \r\n                    \r\n                    <div class=\"row\">\r\n                        \r\n\r\n                        <div class=\"col-12 col-md-6 order-md-12\">\r\n                            <div class=\"row mt-2\">\r\n                                <div class=\"col-6 col-md-8 pr-0\">\r\n                                    <span class=\"calc-num position-absolute text-right font-10 text-black-50 right-10 justify-content-end\" style=\"max-width:300px; overflow:hidden\">\r\n                                        {{addingnumber}} </span> \r\n\r\n                                    <input type=\"text\" id=\"disableamount\" (keyup)=\"clearnumbers()\"\r\n                                        appMycurrencyFormatter appNumbersonly\r\n                                        class=\"rounded-right font-weight-bold  bid-value  form-control\"\r\n                                        formControlName=\"amount\" value=\"\">\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-3 col-md-2  m-0  p-0\">\r\n                                    <button id=\"disableclearbutton\" (click)=\"clearbutton()\"\r\n                                        class=\"btn bid-btn-cancel rounded-0 btn-block\">\r\n                                        <span>Clear</span>\r\n                                        <img src=\"assets/images/Polygon 21.svg\">\r\n                                        <span>Cancel</span>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"col-3 col-md-2  m-0 pl-0\">\r\n                                    <button appButtonDoubleClick id=\"disableenterbutton\"\r\n                                        class=\"btn bid-btn-success rounded-right btn-block\"\r\n                                        (debounceClick)=\"Addamount()\">\r\n                                        <span>Enter</span>\r\n                                        <img src=\"assets/images/Polygon 20.svg\">\r\n                                        <span>Discount</span>\r\n                                    </button>\r\n\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                            <p class=\"text-danger note\">***please re-check before entering</p>\r\n                        </div>\r\n                        <div class=\"col-12 col-md-6 order-md-1\">\r\n                                <fieldset id=\"myFieldset\">\r\n                                    <div class=\"row m-1\">\r\n                                        <div class=\"col-2 col-md-4 p-0 \"><a (click)=\"AddingNumbers($event)\"\r\n                                                class=\"btn num-btn rounded btn-block\"> +\r\n                                                100</a></div>\r\n                                        <div class=\"col-2 col-md-4  p-0\"> <a (click)=\"AddingNumbers($event)\"\r\n                                                class=\"btn num-btn rounded  btn-block\">\r\n                                                + 200</a></div>\r\n                                        <div class=\"col-2 col-md-4  p-0\"> <a (click)=\"AddingNumbers($event)\"\r\n                                                class=\"btn num-btn rounded btn-block\"> +\r\n                                                500</a></div>\r\n    \r\n                                        <div class=\"col-2 col-md-4  p-0\"> <a (click)=\"AddingNumbers($event)\"\r\n                                                class=\"btn num-btn rounded btn-block\"> +\r\n                                                1,000</a></div>\r\n                                        <div class=\"col-2 col-md-4  p-0\"><a (click)=\"AddingNumbers($event)\"\r\n                                                class=\"btn num-btn rounded btn-block\"> + 5,000</a>\r\n                                        </div>\r\n                                        <div class=\"col-2 col-md-4  p-0\"><a (click)=\"AddingNumbers($event)\"\r\n                                                class=\"btn num-btn rounded btn-block\"> +\r\n                                                10,000</a></div>\r\n                                    </div>\r\n                                </fieldset>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n         \r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"modal fade\" id=\"drawwheelmodal\" tabindex=\"\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n                <div class=\"modal-content text-center\">\r\n                    <!-- <a type=\"button\" class=\"close text-white text-right \" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </a> -->\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"container\">\r\n                            <app-drawspinner [usertype]=\"usertype\" *ngIf=\"tabIndex === 0\"\r\n                                (emitevent)=\"AfterDraw($event)\"></app-drawspinner>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"modal fade\" id=\"confirmationmodal\" tabindex=\"\" role=\"dialog\"\r\n            aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n                <div class=\"modal-content text-center\" style=\"background:#06A569;padding: 20px;border-radius: 35px;\">\r\n                    <!-- <a type=\"button\" class=\"close text-white text-right\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t  </a> -->\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"auction-tree\">\r\n                                        <h2 class=\"text-white\">AUCTION IS TIE / DRAW</h2>\r\n                                        <h4 class=\"text-white pt-2\">Between {{ticketlength}} Members Ticket no's are\r\n                                        </h4>\r\n\r\n                                        <div class=\"row\">\r\n                                            <ul class=\"tie-tickets\">\r\n                                                <li class=\"tkt-green\" *ngFor=\"let drawticketno of  drawticketnos \">\r\n                                                    <span>{{drawticketno}}</span>\r\n                                                </li>\r\n                                                <!-- <li class=\"tkt-blue\"><span>26</span></li>\r\n                                                    <li class=\"tkt-red\"><span>11</span></li> -->\r\n                                            </ul>\r\n                                        </div>\r\n                                        <button class=\"btn btn-success\" (click)=\"callspinner()\">Let's conduct a\r\n                                            Draw</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"modal fade\" id=\"successpopmodal\" tabindex=\"\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n                <div class=\"modal-content text-center\">\r\n                    <a type=\"button\" class=\"close text-white text-right\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </a>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"auction-tree\">\r\n                                        <img src=\"assets/images/Group 88.svg\" width=\"80\" style=\"margin:auto\">\r\n                                        <h2 class=\"text-white\">Congratulations to</h2>\r\n\r\n\r\n                                        <div class=\"aut-tkt-no pt-2\">\r\n                                            <ul class=\"tie-tickets\">\r\n                                                <li class=\"tkt-green\"><span>{{drawticketno}}</span></li>\r\n                                               \r\n                                            </ul>\r\n                                            <h3 class=\"text-white\">Group Code : {{groupcode}}</h3>\r\n                                            <div class=\"w-100\">\r\n                                                <h1 class=\"text-white\">{{successclient}}</h1>\r\n                                                <span class=\"text-white\">For Your Successful Bid</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <h2 class=\"text-white pt-2\">Chit Value - {{chitvalue|mycurrencypipe}}/</h2> \r\n                                        <h2 class=\"text-white pt-2\">Discount - {{maxamount|mycurrencypipe}}/</h2>\r\n                                        <h2 class=\"text-white pt-2\">Bid Payable - {{bidpayble|mycurrencypipe}}/</h2>\r\n                                        \r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row justify-content-center\" *ngIf=\"showcomments\">\r\n\r\n                                <div class=\"col-6 text-center\">\r\n                                    <div class=\"form-group\">\r\n                                        <textarea (change)=\"AuctioneerComments($event)\" class=\"form-control\"\r\n                                            maxlength=\"1000\"\r\n                                            placeholder=\"Please enter auction comments and Submit\"> </textarea>\r\n                                    </div>\r\n                                    <button class=\"btn btn-success shadow-sm btn-block btn-lg\" (click)=\"UpdateChathistory()\">Submit and\r\n                                        close the Auction </button>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</section>\r\n<br><br><br><br>\r\n<!-- <footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <p class=\"footer-disc\">Financial District, Nanakarmguda, Hyderabad - From Your Internet Address</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</footer>  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\r\n"

/***/ }),

/***/ "./src/app/Directives/AlphaNumericWithSpecialCharacters.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Directives/AlphaNumericWithSpecialCharacters.directive.ts ***!
  \***************************************************************************/
/*! exports provided: appAlphanumericwithSpecialCharactersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appAlphanumericwithSpecialCharactersDirective", function() { return appAlphanumericwithSpecialCharactersDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var appAlphanumericwithSpecialCharactersDirective = /** @class */ (function () {
    function appAlphanumericwithSpecialCharactersDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    appAlphanumericwithSpecialCharactersDirective.prototype.keyEvent = function (event) {
        var i = event.currentTarget.value.length;
        var lastchar = event.currentTarget.value.substr(-1);
        if (event.code == 'Space' && lastchar == " ") {
            event.preventDefault();
            return false;
        }
        else {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (i == 0) {
                var regex = new RegExp("^[a-zA-Z0-9]+$");
                var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (regex.test(str)) {
                    return true;
                }
            }
            if (i != 0) {
                if (lastchar == " ") {
                    var regex = new RegExp("^[a-zA-Z0-9& -]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    str = str.toUpperCase();
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    var regex = new RegExp("^[a-zA-Z0-9& -]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (regex.test(str)) {
                        return true;
                    }
                }
            }
        }
        event.preventDefault();
        return false;
    };
    appAlphanumericwithSpecialCharactersDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], appAlphanumericwithSpecialCharactersDirective.prototype, "keyEvent", null);
    appAlphanumericwithSpecialCharactersDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAlphanumericwithSpecialCharacters]'
        })
    ], appAlphanumericwithSpecialCharactersDirective);
    return appAlphanumericwithSpecialCharactersDirective;
}());



/***/ }),

/***/ "./src/app/Directives/InitCap.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/Directives/InitCap.directive.ts ***!
  \*************************************************/
/*! exports provided: InitCapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCapDirective", function() { return InitCapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InitCapDirective = /** @class */ (function () {
    function InitCapDirective(render, elRef, control) {
        this.render = render;
        this.elRef = elRef;
        this.control = control;
        this.regex = new RegExp("^[a-zA-Z ]+$");
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    InitCapDirective.prototype.Input = function (event) {
        var e = event;
        var str = this.elRef.nativeElement.value;
        var i = event.currentTarget.value.length - 1;
        var lastchar = event.currentTarget.value.substr(-1);
        this.charCode = lastchar.charCodeAt(0);
        var a = String.fromCharCode(this.charCode);
        if (this.regex.test(a)) {
            var data = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            this.render.setProperty(this.elRef.nativeElement, 'value', data);
        }
    };
    InitCapDirective.prototype.onEvent = function ($event) {
        var str = this.control.value;
        var data = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        this.control.control.setValue(data);
    };
    InitCapDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
    ], InitCapDirective.prototype, "Input", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
    ], InitCapDirective.prototype, "onEvent", null);
    InitCapDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appInitCap]'
        })
    ], InitCapDirective);
    return InitCapDirective;
}());



/***/ }),

/***/ "./src/app/Directives/addressformat.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/Directives/addressformat.directive.ts ***!
  \*******************************************************/
/*! exports provided: AddressformatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressformatDirective", function() { return AddressformatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressformatDirective = /** @class */ (function () {
    function AddressformatDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    AddressformatDirective.prototype.keyEvent = function (event) {
        var i = event.currentTarget.value.length;
        var lastchar = event.currentTarget.value.substr(-1);
        if (event.code == 'Space' && lastchar == " ") {
            event.preventDefault();
            return false;
        }
        else {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (i == 0) {
                var regex = new RegExp("^[a-zA-Z0-9]+$");
                var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (regex.test(str)) {
                    return true;
                }
            }
            if (i != 0) {
                if (lastchar == " ") {
                    var regex = new RegExp("^[a-zA-Za-zA-Z0-9-/.:;, ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    str = str.toUpperCase();
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    var regex = new RegExp("^[a-zA-ZA-Z0-9-/.:;, ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (regex.test(str)) {
                        return true;
                    }
                }
            }
        }
        event.preventDefault();
        return false;
    };
    AddressformatDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], AddressformatDirective.prototype, "keyEvent", null);
    AddressformatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAddressformat]'
        })
    ], AddressformatDirective);
    return AddressformatDirective;
}());



/***/ }),

/***/ "./src/app/Directives/alpha-numeric.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/Directives/alpha-numeric.directive.ts ***!
  \*******************************************************/
/*! exports provided: AlphaNumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaNumericDirective", function() { return AlphaNumericDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlphaNumericDirective = /** @class */ (function () {
    function AlphaNumericDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    AlphaNumericDirective.prototype.keyEvent = function (event) {
        var i = event.currentTarget.value.length;
        var lastchar = event.currentTarget.value.substr(-1);
        if (event.code == 'Space' && lastchar == " ") {
            event.preventDefault();
            return false;
        }
        else {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (i == 0) {
                var regex = new RegExp("^[a-zA-Z0-9]+$");
                var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (str != " ") {
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    event.preventDefault();
                }
            }
            if (i != 0) {
                if (lastchar == " ") {
                    var regex = new RegExp("^[a-zA-Za-zA-Z0-9- ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    str = str.toUpperCase();
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    var regex = new RegExp("^[a-zA-ZA-Z0-9- ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (regex.test(str)) {
                        return true;
                    }
                }
            }
        }
        event.preventDefault();
        return false;
    };
    AlphaNumericDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], AlphaNumericDirective.prototype, "keyEvent", null);
    AlphaNumericDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAlphanumeric]'
        })
    ], AlphaNumericDirective);
    return AlphaNumericDirective;
}());



/***/ }),

/***/ "./src/app/Directives/alphanumericcharsonly.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/Directives/alphanumericcharsonly.directive.ts ***!
  \***************************************************************/
/*! exports provided: AlphanumericcharsonlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphanumericcharsonlyDirective", function() { return AlphanumericcharsonlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlphanumericcharsonlyDirective = /** @class */ (function () {
    function AlphanumericcharsonlyDirective() {
    }
    AlphanumericcharsonlyDirective.prototype.keyEvent = function (event) {
        var i = event.currentTarget.value.length;
        var lastchar = event.currentTarget.value.substr(-1);
        if (event.code == 'Space' && lastchar == " ") {
            event.preventDefault();
            return false;
        }
        else {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (i == 0) {
                var regex = new RegExp("^[a-zA-Z0-9]+$");
                var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (str != " ") {
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    event.preventDefault();
                }
            }
            if (i != 0) {
                if (lastchar == " ") {
                    var regex = new RegExp("^[a-zA-Z0-9]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    str = str.toUpperCase();
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    var regex = new RegExp("^[a-zA-Z0-9]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (regex.test(str)) {
                        return true;
                    }
                }
            }
        }
        event.preventDefault();
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], AlphanumericcharsonlyDirective.prototype, "keyEvent", null);
    AlphanumericcharsonlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAlphanumericcharsonly]'
        })
    ], AlphanumericcharsonlyDirective);
    return AlphanumericcharsonlyDirective;
}());



/***/ }),

/***/ "./src/app/Directives/auto-focus.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/Directives/auto-focus.directive.ts ***!
  \****************************************************/
/*! exports provided: AutoFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function() { return AutoFocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(element) {
        this.element = element;
    }
    AutoFocusDirective.prototype.ngAfterContentChecked = function () {
        this.element.nativeElement.focus();
    };
    AutoFocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoFocusDirective.prototype, "appAutoFocus", void 0);
    AutoFocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAutoFocus]'
        })
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());



/***/ }),

/***/ "./src/app/Directives/button-double-click.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/Directives/button-double-click.directive.ts ***!
  \*************************************************************/
/*! exports provided: ButtonDoubleClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDoubleClickDirective", function() { return ButtonDoubleClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ButtonDoubleClickDirective = /** @class */ (function () {
    function ButtonDoubleClickDirective() {
        this.debounceTime = 300;
        this.debounceClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clicks = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ButtonDoubleClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.clicks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime)).subscribe(function (e) { return _this.debounceClick.emit(e); });
    };
    ButtonDoubleClickDirective.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    ButtonDoubleClickDirective.prototype.clickEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ButtonDoubleClickDirective.prototype, "debounceTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ButtonDoubleClickDirective.prototype, "debounceClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
    ], ButtonDoubleClickDirective.prototype, "clickEvent", null);
    ButtonDoubleClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appButtonDoubleClick]'
        })
    ], ButtonDoubleClickDirective);
    return ButtonDoubleClickDirective;
}());



/***/ }),

/***/ "./src/app/Directives/charactersonly.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/Directives/charactersonly.directive.ts ***!
  \********************************************************/
/*! exports provided: CharactersonlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersonlyDirective", function() { return CharactersonlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharactersonlyDirective = /** @class */ (function () {
    function CharactersonlyDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    CharactersonlyDirective.prototype.keyEvent = function (event) {
        var text = event.currentTarget.value.replace(/ +/g, ' ').trimStart();
        event.currentTarget.value = text;
        var i = event.currentTarget.value.length;
        var lastchar = event.currentTarget.value.substr(-1);
        var startPos = this.elRef.nativeElement.selectionStart;
        var prePos = startPos - 1;
        var nxtPos = startPos;
        var data = this.elRef.nativeElement.value.substr(0);
        var prePosdata = data[prePos];
        var nxtPosdata = data[nxtPos];
        this.elRef.nativeElement.focus();
        if (event.code == 'Space' && prePosdata != " " && prePosdata != undefined && nxtPosdata != " " && nxtPosdata != undefined) {
            var regex = new RegExp("^[a-zA-Z ]+$");
            var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            str = str.toUpperCase();
            if (regex.test(str)) {
                return true;
            }
        }
        if (event.code == 'Space' && lastchar == " ") {
            event.preventDefault();
            return false;
        }
        else {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (i == 0) {
                var regex = new RegExp("^[a-zA-Z]+$");
                var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (regex.test(str)) {
                    return true;
                }
            }
            if (i != 0) {
                if (lastchar == " ") {
                    var regex = new RegExp("^[a-zA-Z ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    str = str.toUpperCase();
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    var regex = new RegExp("^[a-zA-Z ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (regex.test(str)) {
                        return true;
                    }
                }
            }
        }
        event.preventDefault();
        return false;
    };
    CharactersonlyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], CharactersonlyDirective.prototype, "keyEvent", null);
    CharactersonlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCharactersonly]'
        })
    ], CharactersonlyDirective);
    return CharactersonlyDirective;
}());



/***/ }),

/***/ "./src/app/Directives/decimalwithcurrencyformat.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Directives/decimalwithcurrencyformat.directive.ts ***!
  \*******************************************************************/
/*! exports provided: DecimalwithcurrencyformatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalwithcurrencyformatDirective", function() { return DecimalwithcurrencyformatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var DecimalwithcurrencyformatDirective = /** @class */ (function () {
    function DecimalwithcurrencyformatDirective(_el, commonService, cookieservice, render, elRef) {
        this._el = _el;
        this.commonService = commonService;
        this.cookieservice = cookieservice;
        this.render = render;
        this.elRef = elRef;
    }
    DecimalwithcurrencyformatDirective.prototype.Input = function () {
        var initalValue = this._el.nativeElement.value;
        // this._el.nativeElement.value = initalValue.toString().replace(/,/g, "").replace(/^0+/, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
        var d = this.elRef.nativeElement.value;
        var s = d.split(',');
        var n = s.join('');
        d = n;
        if (d == 0) {
            d = "";
        }
        if (d != '') {
            //  this.data = this.cookieservice.get("savedformat")
            this.data = "India";
            if (this.data == "India") {
                var result = d.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                d = output;
                this.render.setProperty(this.elRef.nativeElement, 'value', d);
            }
            else {
                var result = d.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                d = output;
                this.render.setProperty(this.elRef.nativeElement, 'value', d);
            }
        }
    };
    DecimalwithcurrencyformatDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], DecimalwithcurrencyformatDirective.prototype, "Input", null);
    DecimalwithcurrencyformatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDecimalwithcurrencyformat]'
        })
    ], DecimalwithcurrencyformatDirective);
    return DecimalwithcurrencyformatDirective;
}());



/***/ }),

/***/ "./src/app/Directives/emailformat.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/Directives/emailformat.directive.ts ***!
  \*****************************************************/
/*! exports provided: EmailFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormatDirective", function() { return EmailFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailFormatDirective = /** @class */ (function () {
    function EmailFormatDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
        this.regex = new RegExp("^[a-zA-Z ]+$");
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    EmailFormatDirective.prototype.Input = function (event) {
        var e = event;
        var str = this.elRef.nativeElement.value;
        var i = event.currentTarget.value.length - 1;
        var lastchar = event.currentTarget.value.substr(-1);
        this.charCode = lastchar.charCodeAt(0);
        var a = String.fromCharCode(this.charCode);
        if (this.regex.test(a)) {
            var data = str.replace(/\w\S*/g, function (txt) {
                return txt.toLowerCase();
            });
            this.render.setProperty(this.elRef.nativeElement, 'value', data);
        }
        else {
            event.stopPropagation();
            event.preventDefault();
            // return false
        }
    };
    EmailFormatDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
    ], EmailFormatDirective.prototype, "Input", null);
    EmailFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appEmailFormat]'
        })
    ], EmailFormatDirective);
    return EmailFormatDirective;
}());



/***/ }),

/***/ "./src/app/Directives/emailpattern.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/Directives/emailpattern.directive.ts ***!
  \******************************************************/
/*! exports provided: EmailpatternDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailpatternDirective", function() { return EmailpatternDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailpatternDirective = /** @class */ (function () {
    function EmailpatternDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    EmailpatternDirective.prototype.keyEvent = function (event) {
        var i = event.currentTarget.value.length;
        var lastchar = event.currentTarget.value.substr(-1);
        if (event.code == 'Space' && lastchar == " ") {
            event.preventDefault();
            return false;
        }
        else {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (i == 0) {
                var regex = new RegExp("^[a-zA-Z0-90-9._%+-@]+$");
                var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (regex.test(str)) {
                    return true;
                }
            }
            if (i != 0) {
                if (lastchar == " ") {
                    var regex = new RegExp("^[a-zA-Z0-9._%+-@]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    str = str.toUpperCase();
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    var regex = new RegExp("^[a-zA-Z0-9._%+-@]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (regex.test(str)) {
                        return true;
                    }
                }
            }
        }
        event.preventDefault();
        return false;
    };
    EmailpatternDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], EmailpatternDirective.prototype, "keyEvent", null);
    EmailpatternDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appEmailpattern]'
        })
    ], EmailpatternDirective);
    return EmailpatternDirective;
}());



/***/ }),

/***/ "./src/app/Directives/enterprisenameformat.ts":
/*!****************************************************!*\
  !*** ./src/app/Directives/enterprisenameformat.ts ***!
  \****************************************************/
/*! exports provided: EnterpriseNameFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseNameFormatDirective", function() { return EnterpriseNameFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnterpriseNameFormatDirective = /** @class */ (function () {
    function EnterpriseNameFormatDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    EnterpriseNameFormatDirective.prototype.keyEvent = function (event) {
        var i = event.currentTarget.value.length;
        var lastchar = event.currentTarget.value.substr(-1);
        if (event.code == 'Space' && lastchar == " ") {
            event.preventDefault();
            return false;
        }
        else {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (i == 0) {
                var regex = new RegExp("^[a-zA-Z0-9]+$");
                var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (regex.test(str)) {
                    return true;
                }
            }
            if (i != 0) {
                if (lastchar == " ") {
                    var regex = new RegExp("^[a-zA-Za-zA-Z0-9-/.@(){}:;, ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    str = str.toUpperCase();
                    if (regex.test(str)) {
                        return true;
                    }
                }
                else {
                    var regex = new RegExp("^[a-zA-ZA-Z0-9-/.@(){}:;, ]+$");
                    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (regex.test(str)) {
                        return true;
                    }
                }
            }
        }
        event.preventDefault();
        return false;
    };
    EnterpriseNameFormatDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], EnterpriseNameFormatDirective.prototype, "keyEvent", null);
    EnterpriseNameFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appEnterpriseNameFormat]'
        })
    ], EnterpriseNameFormatDirective);
    return EnterpriseNameFormatDirective;
}());



/***/ }),

/***/ "./src/app/Directives/ifsccodevalidator.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/Directives/ifsccodevalidator.directive.ts ***!
  \***********************************************************/
/*! exports provided: IfsccodevalidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfsccodevalidatorDirective", function() { return IfsccodevalidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IfsccodevalidatorDirective = /** @class */ (function () {
    function IfsccodevalidatorDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    IfsccodevalidatorDirective.prototype.Input = function () {
        var name = this.elRef.nativeElement.value;
        var regex = new RegExp('^[A-Za-z]{4}[0]{1}[0-9]{6}$');
        if (!regex.test(name)) {
            var d = this.elRef.nativeElement.value.toUpperCase();
            this.render.setProperty(this.elRef.nativeElement, 'value', d);
        }
    };
    IfsccodevalidatorDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], IfsccodevalidatorDirective.prototype, "Input", null);
    IfsccodevalidatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appIfsccodevalidator]'
        })
    ], IfsccodevalidatorDirective);
    return IfsccodevalidatorDirective;
}());



/***/ }),

/***/ "./src/app/Directives/mutiple-digit-decimal-number.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Directives/mutiple-digit-decimal-number.directive.ts ***!
  \**********************************************************************/
/*! exports provided: MutipleDigitDecimalNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutipleDigitDecimalNumberDirective", function() { return MutipleDigitDecimalNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MutipleDigitDecimalNumberDirective = /** @class */ (function () {
    function MutipleDigitDecimalNumberDirective(el) {
        this.el = el;
        this.regex = new RegExp(/^\d*\.?\d{0,3}$/g);
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    }
    MutipleDigitDecimalNumberDirective.prototype.onKeyDown = function (event) {
        //console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var position = this.el.nativeElement.selectionStart;
        var next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    MutipleDigitDecimalNumberDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
    ], MutipleDigitDecimalNumberDirective.prototype, "onKeyDown", null);
    MutipleDigitDecimalNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMutipleDigitDecimalNumber]'
        })
    ], MutipleDigitDecimalNumberDirective);
    return MutipleDigitDecimalNumberDirective;
}());



/***/ }),

/***/ "./src/app/Directives/mycurrency-formatter.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/Directives/mycurrency-formatter.directive.ts ***!
  \**************************************************************/
/*! exports provided: MycurrencyFormatterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycurrencyFormatterDirective", function() { return MycurrencyFormatterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var MycurrencyFormatterDirective = /** @class */ (function () {
    function MycurrencyFormatterDirective(_el, commonService, cookieservice, render, elRef) {
        this._el = _el;
        this.commonService = commonService;
        this.cookieservice = cookieservice;
        this.render = render;
        this.elRef = elRef;
    }
    MycurrencyFormatterDirective.prototype.Input = function () {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.toString().replace(/,/g, "").replace(/^0+/, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
        var d = this.elRef.nativeElement.value;
        var s = d.split(',');
        var n = s.join('');
        d = n;
        if (d == 0) {
            d = "";
        }
        if (d != '') {
            //  this.data = this.cookieservice.get("savedformat")
            this.data = "India";
            if (this.data == "India") {
                var result = d.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                d = output;
                this.render.setProperty(this.elRef.nativeElement, 'value', d);
            }
            else {
                var result = d.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                d = output;
                this.render.setProperty(this.elRef.nativeElement, 'value', d);
            }
        }
    };
    MycurrencyFormatterDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], MycurrencyFormatterDirective.prototype, "Input", null);
    MycurrencyFormatterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMycurrencyFormatter]'
        })
    ], MycurrencyFormatterDirective);
    return MycurrencyFormatterDirective;
}());



/***/ }),

/***/ "./src/app/Directives/newline.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/Directives/newline.directive.ts ***!
  \*************************************************/
/*! exports provided: NewlineDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewlineDirective", function() { return NewlineDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewlineDirective = /** @class */ (function () {
    function NewlineDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    NewlineDirective.prototype.keyEvent = function (event) {
        // var i = event.currentTarget.value.length;
        // var lastchar = event.currentTarget.value.substr(-1);
        if (event.keyCode == 13) {
            event.preventDefault();
            event.stopImmediatePropagation();
            var _val = event.target.value;
            event.target.value = _val + '\n';
        }
        // event.preventDefault();
        // return false;
    };
    NewlineDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], NewlineDirective.prototype, "keyEvent", null);
    NewlineDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNewline]'
        })
    ], NewlineDirective);
    return NewlineDirective;
}());



/***/ }),

/***/ "./src/app/Directives/numbersonly.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/Directives/numbersonly.directive.ts ***!
  \*****************************************************/
/*! exports provided: NumbersonlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersonlyDirective", function() { return NumbersonlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumbersonlyDirective = /** @class */ (function () {
    function NumbersonlyDirective(render, elRef) {
        this.render = render;
        this.elRef = elRef;
    }
    NumbersonlyDirective.prototype.keyEvent = function (event) {
        // console.log(event)
        // const initalValue = this.elRef.nativeElement.value;
        // this.elRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        // if ( initalValue !== this.elRef.nativeElement.value) {
        //   event.stopPropagation();
        // }
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    NumbersonlyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], NumbersonlyDirective.prototype, "keyEvent", null);
    NumbersonlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNumbersonly]'
        })
    ], NumbersonlyDirective);
    return NumbersonlyDirective;
}());



/***/ }),

/***/ "./src/app/Directives/remove-zero.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/Directives/remove-zero.directive.ts ***!
  \*****************************************************/
/*! exports provided: RemoveZeroDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveZeroDirective", function() { return RemoveZeroDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var RemoveZeroDirective = /** @class */ (function () {
    function RemoveZeroDirective(_el, commonService, cookieservice, render) {
        this._el = _el;
        this.commonService = commonService;
        this.cookieservice = cookieservice;
        this.render = render;
    }
    RemoveZeroDirective.prototype.Input = function () {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.toString().replace(/,/g, "").replace(/^0+/, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
        var d = this._el.nativeElement.value;
        var s = d.split(',');
        var n = s.join('');
        d = n;
        if (d == 0) {
            d = "";
        }
        if (d != '') {
            //  this.data = this.cookieservice.get("savedformat")
            this.data = "India";
            if (this.data == "India") {
                var result = d.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                d = output;
                this.render.setProperty(this._el.nativeElement, 'value', d);
            }
            else {
                var result = d.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                d = output;
                this.render.setProperty(this._el.nativeElement, 'value', d);
            }
        }
    };
    RemoveZeroDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], RemoveZeroDirective.prototype, "Input", null);
    RemoveZeroDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[removeZero]'
        })
    ], RemoveZeroDirective);
    return RemoveZeroDirective;
}());



/***/ }),

/***/ "./src/app/Directives/roundecimal.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/Directives/roundecimal.directive.ts ***!
  \*****************************************************/
/*! exports provided: RoundecimalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundecimalDirective", function() { return RoundecimalDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoundecimalDirective = /** @class */ (function () {
    //private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    function RoundecimalDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp("^[0-9.]+$");
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    }
    RoundecimalDirective.prototype.onKeyDown = function (event) {
        var info = this.amountInfo.split('@');
        var roundLength = info[0];
        var decimallength = info[1];
        var newroundvalue = '0';
        //console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var controlValue = this.el.nativeElement.value.toString().replace(/,/g, "");
        var position = this.el.nativeElement.selectionStart;
        var newcontrolValue = [controlValue.slice(0, position), event.key == 'Decimal' ? '.' : event.key, controlValue.slice(position)].join('');
        if (!(controlValue.indexOf('.') > -1)) {
            if (controlValue.length > roundLength) {
                event.preventDefault();
            }
            else if (controlValue.length == roundLength) {
                if (event.key != '.')
                    event.preventDefault();
            }
        }
        else {
            var decimaIinfo = controlValue.split('.')[1];
            var roundIinfo = controlValue.split('.')[0];
            //if (newcontrolValue.indexOf('.') > -1) {
            newroundvalue = newcontrolValue.split('.')[0];
            //}
            if (parseFloat(roundIinfo) != parseFloat(newroundvalue)) {
                if (newroundvalue.length > roundLength) {
                    event.preventDefault();
                }
                else if (newroundvalue.length == roundLength) {
                    if (event.key == '.')
                        event.preventDefault();
                }
            }
            else {
                if (decimaIinfo.length >= decimallength) {
                    event.preventDefault();
                }
            }
        }
        //const position = this.el.nativeElement.selectionStart;
        //controlValue = [controlValue.slice(0, position), event.key == 'Decimal' ? '.' : event.key, controlValue.slice(position)].join('');
        if (newcontrolValue != "." && newcontrolValue != "00" && !(newcontrolValue.indexOf('..') > -1)) {
            if (newcontrolValue && !String(newcontrolValue).match(this.regex)) {
                event.preventDefault();
            }
        }
        else {
            event.preventDefault();
        }
        if (event.key == '.' && decimallength == 0)
            event.preventDefault();
    };
    RoundecimalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appRoundecimal')
    ], RoundecimalDirective.prototype, "amountInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event'])
    ], RoundecimalDirective.prototype, "onKeyDown", null);
    RoundecimalDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appRoundecimal]'
        })
    ], RoundecimalDirective);
    return RoundecimalDirective;
}());



/***/ }),

/***/ "./src/app/Directives/three-digit-decima-number.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Directives/three-digit-decima-number.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ThreeDigitDecimaNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeDigitDecimaNumberDirective", function() { return ThreeDigitDecimaNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThreeDigitDecimaNumberDirective = /** @class */ (function () {
    function ThreeDigitDecimaNumberDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d{0,3}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    }
    ThreeDigitDecimaNumberDirective.prototype.onKeyDown = function (event) {
        //console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            if (event.key != "Backspace") {
                event.preventDefault();
            }
            return;
        }
        var current = this.el.nativeElement.value;
        var position = this.el.nativeElement.selectionStart;
        var next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
        if (next != ".") {
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
        else {
            event.preventDefault();
        }
        if (next != "00") {
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
        else {
            event.preventDefault();
        }
        var dotExist = next.includes(".");
        if (next.length == 3 && dotExist != true) {
            if (next.length == 3 && event.key != ".") {
                event.preventDefault();
            }
        }
    };
    ThreeDigitDecimaNumberDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
    ], ThreeDigitDecimaNumberDirective.prototype, "onKeyDown", null);
    ThreeDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ThreeDigitDecimalNumber]'
        })
    ], ThreeDigitDecimaNumberDirective);
    return ThreeDigitDecimaNumberDirective;
}());



/***/ }),

/***/ "./src/app/Directives/time-mask.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/Directives/time-mask.directive.ts ***!
  \***************************************************/
/*! exports provided: TimeMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMaskDirective", function() { return TimeMaskDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TimeMaskDirective = /** @class */ (function () {
    function TimeMaskDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * Esta variável indica que o campo (horas ou minutos) deve se comportar como
         * se tivesse acabado de receber o foco
         */
        this._fieldJustGotFocus = false;
    }
    TimeMaskDirective_1 = TimeMaskDirective;
    TimeMaskDirective.prototype.ngOnInit = function () {
        this._el.nativeElement.style.fontFamily = 'monospace';
        this._el.nativeElement.style.cursor = 'default';
    };
    /** Trata as teclas */
    TimeMaskDirective.prototype.onKeyDown = function (evt) {
        var keyCode = evt.keyCode;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"]:
                this._decideWhetherToJumpAndSelect(keyCode, evt);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"]:
                this._clearHoursOrMinutes();
                break;
            default:
                if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["NINE"]) ||
                    (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["NUMPAD_ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["NUMPAD_NINE"])) {
                    // trata números
                    this._setInputText(evt.key);
                }
        }
        // evita que o componente tente se atualizar:
        // 1 - Quando o usuário digita um número, isso causaria uma piscada na tela: uma vez porque
        //     estamos trocando o valor do componente e outra vez como resposta padrão à digitação
        //     do usuário
        // 2 - Quando o usuário digitar uma tecla diferente das tratadas acima, ela deve ser ignorada
        if (keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"]) {
            evt.preventDefault();
        }
    };
    /** Quando o componente recebe um click, é preciso selecionar horas ou minutos */
    TimeMaskDirective.prototype.onClick = function (evt) {
        this._fieldJustGotFocus = true;
        var caretPosition = this._doGetCaretPosition();
        if (caretPosition < 3) {
            this._el.nativeElement.setSelectionRange(0, 2);
        }
        else {
            this._el.nativeElement.setSelectionRange(3, 6);
        }
    };
    /** Quando o componente recebe o foco, é preciso selecionar horas ou minutos */
    TimeMaskDirective.prototype.onFocus = function (evt) {
        this._fieldJustGotFocus = true;
        var caretPosition = this._doGetCaretPosition();
        if (caretPosition < 3) {
            this._el.nativeElement.setSelectionRange(0, 2);
        }
        else {
            this._el.nativeElement.setSelectionRange(3, 6);
        }
    };
    /** Quando o componente perde o foco, dispara o touched do ControlValueAccessor */
    TimeMaskDirective.prototype.onBlur = function (evt) {
        this._touched();
    };
    /**
     * Método chamado quando o usuário clica na seta direita ou esquerda
     * Quando o usuário navega com as setas, algumas ações precisam ser tomadas
     * para selecionar o campo certo: horas ou minutos
     */
    TimeMaskDirective.prototype._decideWhetherToJumpAndSelect = function (keyCode, evt) {
        var caretPosition = this._doGetCaretPosition();
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"]:
                this._el.nativeElement.setSelectionRange(3, 6);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"]:
                this._el.nativeElement.setSelectionRange(0, 2);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"]:
                if (caretPosition < 2 && !evt.shiftKey) {
                    this._el.nativeElement.setSelectionRange(3, 6);
                    evt.preventDefault();
                }
                else if (caretPosition > 2 && evt.shiftKey) {
                    this._el.nativeElement.setSelectionRange(0, 2);
                    evt.preventDefault();
                }
        }
        this._fieldJustGotFocus = true;
    };
    /**
     * Método chamado quando o usuário digita uma tecla numérica
     */
    TimeMaskDirective.prototype._setInputText = function (key) {
        var input = this._el.nativeElement.value.split(':');
        var hours = input[0];
        var minutes = input[1];
        var caretPosition = this._doGetCaretPosition();
        if (caretPosition < 3) {
            this._setHours(hours, minutes, key);
        }
        else {
            this._setMinutes(hours, minutes, key);
        }
        this._fieldJustGotFocus = false;
    };
    /** Ajusta o campo das horas */
    TimeMaskDirective.prototype._setHours = function (hours, minutes, key) {
        var hoursArray = hours.split('');
        var firstDigit = hoursArray[0];
        var secondDigit = hoursArray[1];
        var newHour = '';
        var completeTime = '';
        var sendCaretToMinutes = false;
        if (firstDigit === '-' || this._fieldJustGotFocus) {
            newHour = "0" + key;
            sendCaretToMinutes = Number(key) > 2;
        }
        else {
            newHour = "" + secondDigit + key;
            if (Number(newHour) > 23) {
                newHour = '23';
            }
            sendCaretToMinutes = true;
        }
        completeTime = newHour + ":" + minutes;
        this._renderer.setProperty(this._el.nativeElement, 'value', completeTime);
        this._controlValueChanged();
        if (!sendCaretToMinutes) {
            this._el.nativeElement.setSelectionRange(0, 2);
        }
        else {
            this._el.nativeElement.setSelectionRange(3, 6);
            this._fieldJustGotFocus = true;
        }
    };
    /** Ajusta o campo dos minutos */
    TimeMaskDirective.prototype._setMinutes = function (hours, minutes, key) {
        var minutesArray = minutes.split('');
        var firstDigit = minutesArray[0];
        var secondDigit = minutesArray[1];
        var newMinutes = '';
        var completeTime = '';
        if (firstDigit === '-' || this._fieldJustGotFocus) {
            newMinutes = "0" + key;
        }
        else {
            if (Number(minutes) === 59) {
                newMinutes = "0" + key;
            }
            else {
                newMinutes = "" + secondDigit + key;
                if (Number(newMinutes) > 59) {
                    newMinutes = '59';
                }
            }
        }
        completeTime = hours + ":" + newMinutes;
        this._renderer.setProperty(this._el.nativeElement, 'value', completeTime);
        this._controlValueChanged();
        this._el.nativeElement.setSelectionRange(3, 6);
    };
    /** Trata o evento de backspace ou tecla delete */
    TimeMaskDirective.prototype._clearHoursOrMinutes = function () {
        var caretPosition = this._doGetCaretPosition();
        var input = this._el.nativeElement.value.split(':');
        var hours = input[0];
        var minutes = input[1];
        var newTime = '';
        var sendCaretToMinutes = false;
        if (caretPosition > 2) {
            newTime = hours + ":--";
            sendCaretToMinutes = true;
        }
        else {
            newTime = "--:" + minutes;
            sendCaretToMinutes = false;
        }
        this._fieldJustGotFocus = true;
        this._renderer.setProperty(this._el.nativeElement, 'value', newTime);
        this._controlValueChanged();
        if (!sendCaretToMinutes) {
            this._el.nativeElement.setSelectionRange(0, 2);
        }
        else {
            this._el.nativeElement.setSelectionRange(3, 6);
        }
    };
    /** Implementation for ControlValueAccessor interface */
    TimeMaskDirective.prototype.writeValue = function (value) {
        if (value && !(value instanceof Date)) {
            throw new Error('A diretiva appTimeMask exige que o valor do componente seja do tipo Date');
        }
        this._dateValue = new Date(value);
        var v = value ? this._dateToStringTime(value) : '--:--';
        this._renderer.setProperty(this._el.nativeElement, 'value', v);
    };
    /** Implementation for ControlValueAccessor interface */
    TimeMaskDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    /** Implementation for ControlValueAccessor interface */
    TimeMaskDirective.prototype.registerOnTouched = function (fn) {
        this._touched = fn;
    };
    /** Implementation for ControlValueAccessor interface */
    TimeMaskDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    };
    TimeMaskDirective.prototype.validate = function (c) {
        return this._el.nativeElement.value.indexOf('-') === -1 ? null : { validTime: false };
    };
    /*
    ** Returns the caret (cursor) position of the specified text field.
    ** Return value range is 0-nativeElement.value.length.
    */
    TimeMaskDirective.prototype._doGetCaretPosition = function () {
        // Initialize
        var iCaretPos = 0;
        var nativeElement = this._el.nativeElement;
        // IE Support
        if (document.hasOwnProperty('selection')) {
            // Set focus on the element
            nativeElement.focus();
            // To get cursor position, get empty selection range
            var oSel = document['selection'].createRange();
            // Move selection start to 0 position
            oSel.moveStart('character', -nativeElement.value.length);
            // The caret position is selection length
            iCaretPos = oSel.text.length;
        }
        else if (nativeElement.selectionStart || nativeElement.selectionStart === '0') {
            // Firefox support
            iCaretPos = nativeElement.selectionStart;
        }
        // Return results
        return iCaretPos;
    };
    /** build 2-character string */
    TimeMaskDirective.prototype._zeroFill = function (value) {
        return (value > 9 ? '' : '0') + value;
    };
    /** build a time in 00:00 format */
    TimeMaskDirective.prototype._dateToStringTime = function (value) {
        return this._zeroFill(value.getHours()) + ':' + this._zeroFill(value.getMinutes());
    };
    /** Turns a string in format --, -X, X-, XY into a number, considering '-' => 0 */
    TimeMaskDirective.prototype._stringToNumber = function (str) {
        if (str.indexOf('-') === -1) {
            return Number(str);
        }
        var finalStr = str.replace('-', '0').replace('-', '0');
        return Number(finalStr);
    };
    /** Set the NgControl and local value  */
    TimeMaskDirective.prototype._controlValueChanged = function () {
        var timeArray = this._el.nativeElement.value.split(':');
        this._dateValue = new Date(this._dateValue.setHours(this._stringToNumber(timeArray[0])));
        this._dateValue = new Date(this._dateValue.setMinutes(this._stringToNumber(timeArray[1])));
        this._onChange(this._dateValue);
    };
    var TimeMaskDirective_1;
    TimeMaskDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('keydown', ['$event'])
    ], TimeMaskDirective.prototype, "onKeyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event'])
    ], TimeMaskDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('focus', ['$event'])
    ], TimeMaskDirective.prototype, "onFocus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('blur', ['$event'])
    ], TimeMaskDirective.prototype, "onBlur", null);
    TimeMaskDirective = TimeMaskDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[appTimeMask]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return TimeMaskDirective_1; }),
                    multi: true,
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return TimeMaskDirective_1; }),
                    multi: true,
                },
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"])())
    ], TimeMaskDirective);
    return TimeMaskDirective;
}());



/***/ }),

/***/ "./src/app/Directives/titlecaseword.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/Directives/titlecaseword.directive.ts ***!
  \*******************************************************/
/*! exports provided: TitlecasewordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlecasewordDirective", function() { return TitlecasewordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TitlecasewordDirective = /** @class */ (function () {
    function TitlecasewordDirective(render, elRef, control) {
        this.render = render;
        this.elRef = elRef;
        this.control = control;
        this.regex = new RegExp("^[a-zA-Z ]+$");
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    TitlecasewordDirective.prototype.Input = function (event) {
        var e = event;
        var str = this.elRef.nativeElement.value;
        var i = event.currentTarget.value.length - 1;
        var lastchar = event.currentTarget.value.substr(-1);
        this.charCode = lastchar.charCodeAt(0);
        var a = String.fromCharCode(this.charCode);
        if (this.regex.test(a)) {
            var data = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            this.render.setProperty(this.elRef.nativeElement, 'value', data);
        }
    };
    TitlecasewordDirective.prototype.onEvent = function ($event) {
        var str = this.control.value;
        var data = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        this.control.control.setValue(data);
    };
    TitlecasewordDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
    ], TitlecasewordDirective.prototype, "Input", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
    ], TitlecasewordDirective.prototype, "onEvent", null);
    TitlecasewordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTitlecaseword]'
        })
    ], TitlecasewordDirective);
    return TitlecasewordDirective;
}());



/***/ }),

/***/ "./src/app/Directives/two-digit-decima-number.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Directives/two-digit-decima-number.directive.ts ***!
  \*****************************************************************/
/*! exports provided: TwoDigitDecimaNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDigitDecimaNumberDirective", function() { return TwoDigitDecimaNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TwoDigitDecimaNumberDirective = /** @class */ (function () {
    function TwoDigitDecimaNumberDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d{0,2}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    }
    TwoDigitDecimaNumberDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            if (event.key != "Backspace") {
                event.preventDefault();
            }
            return;
        }
        var current = this.el.nativeElement.value;
        var position = this.el.nativeElement.selectionStart;
        var next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
        if (next != ".") {
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
        else {
            event.preventDefault();
        }
        if (next != "00") {
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
        else {
            event.preventDefault();
        }
        var dotExist = next.includes(".");
        if (next.length == 3 && dotExist != true) {
            if (next.length == 3 && event.key != ".") {
                event.preventDefault();
            }
        }
    };
    TwoDigitDecimaNumberDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
    ], TwoDigitDecimaNumberDirective.prototype, "onKeyDown", null);
    TwoDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[TwoDigitDecimalNumber]'
        })
    ], TwoDigitDecimaNumberDirective);
    return TwoDigitDecimaNumberDirective;
}());



/***/ }),

/***/ "./src/app/Directives/uppercase.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/Directives/uppercase.directive.ts ***!
  \***************************************************/
/*! exports provided: UppercaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseDirective", function() { return UppercaseDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective(render, elRef, control) {
        this.render = render;
        this.elRef = elRef;
        this.control = control;
    }
    UppercaseDirective.prototype.onEvent = function ($event) {
        var str = this.control.value;
        this.control.control.setValue(str.toUpperCase());
    };
    UppercaseDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
    ], UppercaseDirective.prototype, "onEvent", null);
    UppercaseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appUppercase]'
        })
    ], UppercaseDirective);
    return UppercaseDirective;
}());



/***/ }),

/***/ "./src/app/Directives/zero.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/Directives/zero.directive.ts ***!
  \**********************************************/
/*! exports provided: ZeroDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZeroDirective", function() { return ZeroDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZeroDirective = /** @class */ (function () {
    function ZeroDirective(_el) {
        this._el = _el;
    }
    ZeroDirective.prototype.Input = function () {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.toString().replace(/,/g, "").replace(/^0+/, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    ZeroDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], ZeroDirective.prototype, "Input", null);
    ZeroDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appZero]'
        })
    ], ZeroDirective);
    return ZeroDirective;
}());



/***/ }),

/***/ "./src/app/Pipes/currencypipewithdecimal.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pipes/currencypipewithdecimal.pipe.ts ***!
  \*******************************************************/
/*! exports provided: CurrencypipewithdecimalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencypipewithdecimalPipe", function() { return CurrencypipewithdecimalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrencypipewithdecimalPipe = /** @class */ (function () {
    function CurrencypipewithdecimalPipe() {
    }
    CurrencypipewithdecimalPipe.prototype.transform = function (value, args) {
        if (value == 0) {
            value = "0";
        }
        // this.data = this.cookieservice.get("savedformat")
        this.data = "India";
        if (this.data == "India") {
            // this.symbol = this.cookieservice.get("symbolofcurrency")
            // console.log("value : ",value);
            if (value != "" && value != undefined) {
                var result;
                var enteredValue = value.toString();
                if (enteredValue.includes('.')) {
                    result = value.toString().split('.');
                }
                else {
                    value = Math.round((value * 100) / 100).toFixed(2);
                    result = value.toString().split('.');
                }
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + (result[1].length == 1 ? result[1] + '0' : result[1].toString().substring(0, 2));
                }
                // this.returnvalue = this.symbol + ' ' + output
                this.returnvalue = output;
                // this.soldform.controls.dealvalue.setValue(output); 
            }
        }
        else {
            // this.symbol = this.cookieservice.get("symbolofcurrency")
            if (value != "" && value != undefined) {
                var result;
                var enteredValue = value.toString();
                if (enteredValue.includes('.')) {
                    result = value.toString().split('.');
                }
                else {
                    value = Math.round((value * 100) / 100).toFixed(2);
                    result = value.toString().split('.');
                }
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '' && otherNumbers != "-")
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + (result[1].length == 1 ? result[1] + '0' : result[1].toString().substring(0, 2));
                }
                // this.returnvalue = this.symbol + ' ' + output
                this.returnvalue = output;
                // this.soldform.controls.dealvalue.setValue(output);
            }
        }
        return this.returnvalue;
    };
    CurrencypipewithdecimalPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'currencypipewithdecimal'
        })
    ], CurrencypipewithdecimalPipe);
    return CurrencypipewithdecimalPipe;
}());



/***/ }),

/***/ "./src/app/Pipes/mycurrencypipe.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Pipes/mycurrencypipe.pipe.ts ***!
  \**********************************************/
/*! exports provided: MycurrencypipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycurrencypipePipe", function() { return MycurrencypipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MycurrencypipePipe = /** @class */ (function () {
    function MycurrencypipePipe() {
    }
    MycurrencypipePipe.prototype.transform = function (value, args) {
        if (value == 0) {
            value = "0";
        }
        // this.data = this.cookieservice.get("savedformat")
        this.data = "India";
        if (this.data == "India") {
            // this.symbol = this.cookieservice.get("symbolofcurrency")
            // console.log("value : ",value);
            if (value != "" && value != undefined) {
                var result = value.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '' && otherNumbers != "-" && otherNumbers != "(")
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                // this.returnvalue = this.symbol + ' ' + output
                this.returnvalue = output;
                // this.soldform.controls.dealvalue.setValue(output); 
            }
        }
        else {
            // this.symbol = this.cookieservice.get("symbolofcurrency")
            if (value != "" && value != undefined) {
                var result = value.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                // this.returnvalue = this.symbol + ' ' + output
                this.returnvalue = output;
                // this.soldform.controls.dealvalue.setValue(output);
            }
        }
        return this.returnvalue;
    };
    MycurrencypipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mycurrencypipe'
        })
    ], MycurrencypipePipe);
    return MycurrencypipePipe;
}());



/***/ }),

/***/ "./src/app/Pipes/negativevalue.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/Pipes/negativevalue.pipe.ts ***!
  \*********************************************/
/*! exports provided: NegativevaluePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegativevaluePipe", function() { return NegativevaluePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/common.service */ "./src/app/Services/common.service.ts");



var NegativevaluePipe = /** @class */ (function () {
    function NegativevaluePipe(_CommonService) {
        this._CommonService = _CommonService;
    }
    NegativevaluePipe.prototype.transform = function (value, args) {
        if (isNaN(value)) {
            return;
        }
        else {
            var ngvalue = value <= 0 ? '(' + this._CommonService.currencyformat(Math.abs(value)) + ')' : this._CommonService.currencyformat(value);
            this.returnvalue = ngvalue;
            return this.returnvalue;
        }
    };
    NegativevaluePipe.ctorParameters = function () { return [
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    NegativevaluePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'negativevalue'
        })
    ], NegativevaluePipe);
    return NegativevaluePipe;
}());



/***/ }),

/***/ "./src/app/Pipes/number-to-words.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/Pipes/number-to-words.pipe.ts ***!
  \***********************************************/
/*! exports provided: NumberToWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToWordsPipe", function() { return NumberToWordsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberToWordsPipe = /** @class */ (function () {
    function NumberToWordsPipe() {
        this.a = [
            '',
            'one ',
            'two ',
            'three ',
            'four ',
            'five ',
            'six ',
            'seven ',
            'eight ',
            'nine ',
            'ten ',
            'eleven ',
            'twelve ',
            'thirteen ',
            'fourteen ',
            'fifteen ',
            'sixteen ',
            'seventeen ',
            'eighteen ',
            'nineteen '
        ];
        this.b = [
            '',
            '',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety'
        ];
    }
    NumberToWordsPipe.prototype.transform = function (value, args) {
        if (value) {
            var num = Number(value);
            var decinum = 0;
            var decistr = '';
            //   if(Number.isInteger(value)==false){
            //     var str = value.toString();
            // var res = str.split(".");
            //  num = res[0];
            //  decinum = res[1];
            //  if (decinum) {
            //   // if ((num = num.toString()).length > 10) { return 'We are not the Iron Bank, you can lower down the stakes :)'; }
            //   const n = ('000000000' + decinum).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            //   if (!n) { return ''; }
            //   decistr += (Number(n[1]) !== 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'crore ' : '';
            //   decistr += (Number(n[2]) !== 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'lakh ' : '';
            //   decistr += (Number(n[3]) !== 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'thousand ' : '';
            //   decistr += (Number(n[4]) !== 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'hundred ' : '';
            //   decistr += (Number(n[5]) !== 0) ? ((decistr !== '') ? 'and ' : '') +
            //     (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' +
            //       this.a[n[5][1]]) + '' : '';
            //       decistr +='paisa ';
            // } 
            //   }
            if (num) {
                // if ((num = num.toString()).length > 10) { return 'We are not the Iron Bank, you can lower down the stakes :)'; }
                var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
                if (!n) {
                    return '';
                }
                var str = '';
                str += (Number(n[1]) !== 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'crore ' : '';
                str += (Number(n[2]) !== 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'lakh ' : '';
                str += (Number(n[3]) !== 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'thousand ' : '';
                str += (Number(n[4]) !== 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'hundred ' : '';
                if (decistr == '') {
                    str += (Number(n[5]) !== 0) ? ((str !== '') ? 'and ' : '') +
                        (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' +
                            this.a[n[5][1]]) + '' : '';
                    return str;
                }
                else {
                    str += (Number(n[5]) !== 0) ? ((str !== '') ? ' ' : '') +
                        (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' +
                            this.a[n[5][1]]) + '' : '';
                    return str + ' and ' + decistr;
                }
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    };
    NumberToWordsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'numberToWords'
        })
    ], NumberToWordsPipe);
    return NumberToWordsPipe;
}());



/***/ }),

/***/ "./src/app/Pipes/sorting-pipe.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/Pipes/sorting-pipe.pipe.ts ***!
  \********************************************/
/*! exports provided: SortingPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingPipePipe", function() { return SortingPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var SortingPipePipe = /** @class */ (function () {
    function SortingPipePipe() {
    }
    SortingPipePipe.prototype.transform = function (value, order, column) {
        if (order === void 0) { order = ''; }
        if (column === void 0) { column = ''; }
        if (!value || order === '' || !order) {
            return value;
        } // no array
        if (value.length <= 1) {
            return value;
        } // array with only one item
        if (!column || column === '') {
            if (order === 'asc') {
                return value.sort();
            }
            else {
                return value.sort().reverse();
            }
        } // sort 1d array
        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"])(value, [column], [order]);
    };
    SortingPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortingPipe'
        })
    ], SortingPipePipe);
    return SortingPipePipe;
}());



/***/ }),

/***/ "./src/app/Services/Common/company-details.service.ts":
/*!************************************************************!*\
  !*** ./src/app/Services/Common/company-details.service.ts ***!
  \************************************************************/
/*! exports provided: CompanyDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsService", function() { return CompanyDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/Services/common.service.ts");




var CompanyDetailsService = /** @class */ (function () {
    function CompanyDetailsService(http, _CommonService) {
        this.http = http;
        this._CommonService = _CommonService;
    }
    CompanyDetailsService.prototype.GetCompanyData = function () {
        try {
            return this._CommonService.callGetAPI('/Settings/GetcompanyNameandaddressDetails', '', 'NO');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    CompanyDetailsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    CompanyDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CompanyDetailsService);
    return CompanyDetailsService;
}());



/***/ }),

/***/ "./src/app/Services/Common/default-profile-image-service.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Services/Common/default-profile-image-service.service.ts ***!
  \**************************************************************************/
/*! exports provided: DefaultProfileImageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultProfileImageServiceService", function() { return DefaultProfileImageServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultProfileImageServiceService = /** @class */ (function () {
    function DefaultProfileImageServiceService() {
    }
    DefaultProfileImageServiceService.prototype.GetdefaultImage = function () {
        return this.imagepath = "data:image/png;base64,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";
    };
    DefaultProfileImageServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DefaultProfileImageServiceService);
    return DefaultProfileImageServiceService;
}());



/***/ }),

/***/ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Services/Hall-Allotment/hall-allotment.service.ts ***!
  \*******************************************************************/
/*! exports provided: HallAllotmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallAllotmentService", function() { return HallAllotmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HallAllotmentService = /** @class */ (function () {
    function HallAllotmentService(commonService) {
        this.commonService = commonService;
        this.branchdata = {};
        this.data = [];
    }
    HallAllotmentService.prototype.getEmployeeList = function (Branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Branchname', Branchname);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/GetEmployees', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    HallAllotmentService.prototype.getHallLists = function (Branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Branchname', Branchname);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/HallsList', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    HallAllotmentService.prototype.checkHallAllotmentExist = function (employeename, hallname, branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("employeename", employeename).set('hallname', hallname).set('branchname', branchname);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/checkHallAllotmentExist', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    HallAllotmentService.prototype.SaveAllotmentData = function (data) {
        return this.commonService.callPostAPI('/Auctions/HallAllotment/SaveHallAllotment', data);
    };
    // SetBranchDetails(branchdata)
    // {
    //    this.branchdata=branchdata
    //    console.log("branchdata",this.branchdata)
    // }
    HallAllotmentService.prototype.GetBranchDetails = function () {
        this.branchdata = JSON.parse(sessionStorage.getItem("currentUser"));
        console.log("branchdata", this.branchdata);
        return this.branchdata;
    };
    // GetBranchDetails()
    // {
    //   return this.branchdata
    // }
    HallAllotmentService.prototype.AuthenticateOTP = function (Authenticationid, OTPCode) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("Authenticationid", Authenticationid).set('OTPCode', OTPCode);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/AuthenticateOTP', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    HallAllotmentService.prototype.GetHallAllotmentList = function (Branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Branchname', Branchname);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/GetHallAllotmentList', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    HallAllotmentService.prototype.SetGroupData = function (data) {
        this.data = data;
    };
    HallAllotmentService.prototype.GetGroupData = function () {
        return this.data;
    };
    HallAllotmentService.prototype.TicketDetails = function (GroupCode, Branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('GroupCode', GroupCode).set('Branchname', Branchname);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/TicketDetails', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    HallAllotmentService.prototype.getGroupDetails = function (Hallname, branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Hallname', Hallname).set('branchname', branchname);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/GroupDetails', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    HallAllotmentService.ctorParameters = function () { return [
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    HallAllotmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HallAllotmentService);
    return HallAllotmentService;
}());



/***/ }),

/***/ "./src/app/Services/Reports/auction-history.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Services/Reports/auction-history.service.ts ***!
  \*************************************************************/
/*! exports provided: AuctionHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionHistoryService", function() { return AuctionHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuctionHistoryService = /** @class */ (function () {
    function AuctionHistoryService(_CommonService) {
        this._CommonService = _CommonService;
    }
    AuctionHistoryService.prototype.GetBranchDetails = function (fromDate) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('fromDate', fromDate);
        return this._CommonService.callGetAPI('/Auctions/Reports/GetBranchnames', params, 'YES');
    };
    AuctionHistoryService.prototype.GetGroupCodes = function (Branch, fromDate) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Branch', Branch).set('fromDate', fromDate);
        return this._CommonService.callGetAPI('/Auctions/Reports/GetGroupcodes', params, 'YES');
    };
    AuctionHistoryService.prototype.GetAuctionDetails = function (Branch, Groupcode, fromDate) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Branch', Branch).set('Groupcode', Groupcode).set('fromDate', fromDate);
        return this._CommonService.callGetAPI('/Auctions/Reports/GetAuctionDetails', params, 'YES');
    };
    AuctionHistoryService.prototype.GetPrizedSubscribersData = function (Branch, Groupcode, fromDate) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Branch', Branch).set('Groupcode', Groupcode).set('fromDate', fromDate);
        return this._CommonService.callGetAPI('/Auctions/Reports/GetAuctionData', params, 'YES');
    };
    AuctionHistoryService.ctorParameters = function () { return [
        { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    AuctionHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuctionHistoryService);
    return AuctionHistoryService;
}());



/***/ }),

/***/ "./src/app/Services/Settings/Users/Users.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/Settings/Users/Users.service.ts ***!
  \**********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UsersService = /** @class */ (function () {
    function UsersService(router, http, _CommonService) {
        this.router = router;
        this.http = http;
        this._CommonService = _CommonService;
    }
    UsersService.prototype.GetUsers = function () {
        try {
            return this._CommonService.callGetAPI('/Settings/Users/UserAccess/GetAllEmployees', '', 'NO');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.GetUserForms = function (User) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('UserName', User);
            return this._CommonService.callGetAPI('/Settings/Users/UserRights/GetUserRightsBasedonUserName', params, 'YES');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype._getRoles = function () {
        return sessionStorage.getItem('Urc');
    };
    UsersService.prototype._getUser = function () {
        return JSON.parse(sessionStorage.getItem('currentUser'));
    };
    UsersService.prototype.GetRoles = function () {
        try {
            return this._CommonService.callGetAPI('/Settings/Users/UserRights/GetRoles', '', 'NO');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype._getUserForms = function (user, designation) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params.append('Type', user);
            params.append('UserOrDesignation', designation);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Type', user).set('UserOrDesignation', designation);
            return this._CommonService.callGetAPI('/Settings/Users/UserRights/GetUserRights', httpParams, 'YES');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.CheckUserName = function (User) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('UserName', User);
            return this._CommonService.callGetAPI('/Settings/Users/UserAccess/CheckUserName', params, 'YES');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.CheckContactId = function (User) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Contactrefid', User);
            return this._CommonService.callGetAPI('/Settings/Users/UserAccess/CheckUsercontactRefID', params, 'YES');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.SaveRegistaration = function (Data) {
        try {
            return this._CommonService.callPostAPI('/Settings/Users/UserAccess/SaveUserAccess', Data);
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.UpdatePass = function (User, pass) {
        try {
            return this._CommonService.callPostAPI('/Settings/Users/UserAccess/ChangePassword?Username=' + User + '&password=' + pass + '', "");
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype._loginUser = function (Data) {
        try {
            return this._CommonService.callPostAPI('/login', Data);
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype._logout = function () {
        sessionStorage.removeItem('currentUser');
        // sessionStorage.removeItem('Urc');
        // sessionStorage.removeItem('companydetails');
        this.router.navigate(['/']);
    };
    UsersService.prototype.SelectUser = function () {
        try {
            return this._CommonService.callGetAPI('/Settings/Users/UserRights/GetUsers', '', 'NO');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.GetNavigation = function (Type, UserOrDesignation) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Type', Type).set('UserOrDesignation', UserOrDesignation);
            return this._CommonService.callGetAPI('/Settings/Users/UserRights/GetUserRights', params, 'YES');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.SaveNavigation = function (Type, UserOrDesignation, data) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Type', Type).set('UserOrDesignation', UserOrDesignation).set('UserRightsFunctionsDTO', data);
            var Url = '/Settings/Users/UserRights/SaveUserRight?Type=' + Type + '&UserOrDesignation=' + UserOrDesignation + '';
            return this._CommonService.callPostAPI(Url, data);
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.Selectuserview = function () {
        try {
            return this._CommonService.callGetAPI('/Settings/Users/UserAccess/GetUserView', '', 'NO');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.Resetpassword = function (UserName) {
        try {
            var Url = '/Settings/Users/UserAccess/ResetPassword?Username=' + UserName;
            return this._CommonService.callPostAPI(Url, '');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.prototype.Status = function (userid, status) {
        try {
            var Url = '/Settings/Users/UserAccess/UserActiveInactive?Userid=' + userid + '&Status=' + status;
            return this._CommonService.callPostAPI(Url, '');
        }
        catch (e) {
            this._CommonService.showErrorMessage(e);
        }
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/Services/Settings/Users/_helpers/auth.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/Services/Settings/Users/_helpers/auth.guard.ts ***!
  \****************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        debugger;
        var routeRequested = this.authenticationService._getRoles();
        routeRequested = JSON.parse(routeRequested);
        var currentUser = this.authenticationService._getUser();
        if (currentUser !== undefined && currentUser != null) {
            if (routeRequested !== undefined && routeRequested != null) {
                var routeExist = routeRequested["functionsDTOList"].filter(function (key) {
                    return key.pFunctionUrl === '/' + route.routeConfig.path && key.pIsviewpermission == true;
                });
                if (route.routeConfig.path != "Dashboard") {
                    if (routeExist.length == 0) {
                        this.router.navigate(['/Dashboard']);
                        return false;
                    }
                }
            }
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Services/Settings/Users/_helpers/error.interceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Services/Settings/Users/_helpers/error.interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, toastr) {
        this.authenticationService = authenticationService;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.toastr.error("Invalid Credentials", "Error");
                _this.authenticationService._logout();
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]; }),] }] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]; })))
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/Services/Settings/Users/_helpers/jwt.interceptor.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Services/Settings/Users/_helpers/jwt.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_appsettings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/appsettings.json */ "./src/assets/appsettings.json");
var src_assets_appsettings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/appsettings.json */ "./src/assets/appsettings.json", 1);
/* harmony import */ var src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        var currentUser = this.authenticationService._getUser();
        var isLoggedIn = currentUser && currentUser.pToken;
        var isApiUrl = request.url.startsWith(src_assets_appsettings_json__WEBPACK_IMPORTED_MODULE_2__[0].ApiHostUrl);
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.pToken
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]; }),] }] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]; })))
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/Services/Settings/menu-modules.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Services/Settings/menu-modules.service.ts ***!
  \***********************************************************/
/*! exports provided: MenuModulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModulesService", function() { return MenuModulesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MenuModulesService = /** @class */ (function () {
    function MenuModulesService(commonService) {
        this.commonService = commonService;
    }
    MenuModulesService.prototype.GetModules = function () {
        try {
            return this.commonService.callGetAPI('/Settings/Users/RolesCreation/GetallRolesModules', '', 'NO');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.prototype.GetNavigation = function () {
        try {
            return this.commonService.callGetAPI('/Settings/Users/RolesCreation/GetMenuandSubmenuDetails', '', 'NO');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.prototype.saveModuleTitle = function (data) {
        try {
            return this.commonService.callPostAPI('/Settings/Users/RolesCreation/SaveRoleModule', data);
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.prototype.CheckDuplicatesModule = function (Modulename) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Modulename', Modulename);
        return this.commonService.callGetAPI('/Settings/Users/RolesCreation/GetModulecount', params, 'YES');
    };
    MenuModulesService.prototype.SubModuleTitle = function (data) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Moduleid', data);
            return this.commonService.callGetAPI('/Settings/Users/RolesCreation/GetRolesSubModulesbyModule', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.prototype.saveSubModuleTitle = function (data) {
        try {
            return this.commonService.callPostAPI('/Settings/Users/RolesCreation/SaveRoleSubModule', data);
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.prototype.CheckDuplicatesSubModule = function (Modulename, Submodulename) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Modulename', Modulename).set('Submodulename', Submodulename);
            return this.commonService.callGetAPI('/Settings/Users/RolesCreation/GetSubmenucountbyMenu', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.prototype.saveMenu = function (data) {
        try {
            return this.commonService.callPostAPI('/Settings/Users/RolesCreation/SaveRoleFunction', data);
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.prototype.DeleteMenu = function (data) {
        try {
            return this.commonService.callPostAPI('/Settings/Users/RolesCreation/SaveRoleFunction', data);
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    MenuModulesService.ctorParameters = function () { return [
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    MenuModulesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MenuModulesService);
    return MenuModulesService;
}());



/***/ }),

/***/ "./src/app/Services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid/dist/es2015/utils */ "./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");










var CommonService = /** @class */ (function () {
    function CommonService(datepipe, http, toastr) {
        this.datepipe = datepipe;
        this.http = http;
        this.toastr = toastr;
        //BankData: any;
        this.ActiveTabName = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.FiTab1Data = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.BankData = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.BankUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.KYCData = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.KYCUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.TDSData = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.TDSUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.ContactData = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.ContactUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.UpdateContactData = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.GeneralReceiptView = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.PaymentView = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.UserRightsView = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        // private dataSource = new BehaviorSubject({});
        // data = this.dataSource.asObservable();
        // FiTab1Details: any
        // private FiTab1Data = new Subject<any>()
        this.ValidationErrorMessages = {};
        this.pStatusname = 'ACTIVE';
        this.ptypeofoperation = 'CREATE';
        this.pageSize = 10;
        this.ValidationStatus = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.ConvertfirebaseDataToArray = function (Data) {
            var returnArr = [];
            Data.forEach(function (childData) {
                var item = childData.val();
                item.key = childData.key;
                returnArr.push(item);
            });
            return returnArr;
        };
        this.convertMinToSec = function (str) {
            var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]((str || '0:0').split(':'), 2), _b = _a[0], mm = _b === void 0 ? '0' : _b, _c = _a[1], ss = _c === void 0 ? '0' : _c;
            var minute = parseInt(mm, 10) || 0;
            var second = parseInt(ss, 10) || 0;
            return (minute * 60) + (second);
        };
        this._validationStatus = false;
        var Urc = sessionStorage.getItem("Urc");
        if (Urc == null) {
            this.pCreatedby = 0;
        }
        else {
            this.pCreatedby = JSON.parse(sessionStorage.getItem("Urc"))["pUserID"];
        }
        this.comapnydetails = JSON.parse(sessionStorage.getItem("companydetails"));
        //if (this.comapnydata == null) {
        //    this.pCompanyName = '';
        //    this.pAddress1 = '';
        //    this.pAddress2 = '';
        //    this.pcity = '';
        //    this.pCountry = '';
        //    this.pState = '';
        //    this.pDistrict ='';
        //    this.pPincode ='';
        //    this.pCinNo = '';
        //    this.pGstinNo = '';
        //    this.pBranchname = '';
        //}
        //else {
        //    this.pCompanyName = this.comapnydata['pCompanyName'];
        //    this.pAddress1 = this.comapnydata['pAddress1'];
        //    this.pAddress2 = this.comapnydata['pAddress2'];
        //    this.pcity = this.comapnydata['pcity'];
        //    this.pCountry = this.comapnydata['pCountry'];
        //    this.pState = this.comapnydata['pState'];
        //    this.pDistrict = this.comapnydata['pDistrict'];
        //    this.pPincode = this.comapnydata['pPincode'];
        //    this.pCinNo = this.comapnydata['pCinNo'];
        //    this.pGstinNo = this.comapnydata['pGstinNo'];
        //    this.pBranchname = this.comapnydata['pBranchname'];
        //}
        // 
        //this.apiURL = appsettings.ApiHostUrl;
        var ipaddress = sessionStorage.getItem("IPAddress");
        if (ipaddress != null) {
            this.IpAddress = JSON.parse(sessionStorage.getItem("IPAddress"))["ip"];
            console.log("ip address", this.IpAddress);
        }
        else {
            this.IpAddress = '';
        }
    }
    CommonService.prototype.extractData = function (res) {
        var body = res;
        return body;
    };
    CommonService.prototype.GetImage = function (strPath) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('strPath', strPath);
        return this.callGetAPI('/loans/masters/contactmasterNew/ConvertImagepathtobase64', params, 'YES');
    };
    CommonService.prototype.GetBankNames = function () {
        try {
            return this.callGetAPI('/Accounting/Masters/GetBankNames', ' ', 'NO');
        }
        catch (e) {
            this.showErrorMessage(e);
        }
    };
    CommonService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    CommonService.prototype.showErrorMessage = function (errormsg) {
        this.toastr.error(errormsg, "Error!");
    };
    CommonService.prototype.showErrorMessageForLessTime = function (errormsg) {
        this.toastr.error(errormsg, "Error!", { timeOut: 2500 });
    };
    CommonService.prototype.showInfoMessage = function (errormsg) {
        this.toastr.success(errormsg, "Success!");
    };
    CommonService.prototype._setCompanyDetails = function () {
        this.comapnydetails = JSON.parse(sessionStorage.getItem("companydetails"));
    };
    CommonService.prototype._setPcreatedby = function () {
        this.pCreatedby = JSON.parse(sessionStorage.getItem("Urc"))["pUserID"];
    };
    CommonService.prototype.getIPAddress = function () {
        return this.http.get("http://cors-anywhere.herokuapp.com/http://api.ipify.org?format=json");
    };
    CommonService.prototype._setIPAddress = function () {
        this.IpAddress = JSON.parse(sessionStorage.getItem("IPAddress"))["ip"];
    };
    CommonService.prototype.getValidationMessage = function (formcontrol, errorkey, lablename, key, skipKey) {
        var errormessage;
        //else if
        if (errorkey == 'required')
            errormessage = lablename + ' Required';
        if (errorkey == 'email' || errorkey == 'pattern')
            errormessage = 'Invalid ' + lablename;
        if (errorkey == 'minlength') {
            var length_1 = formcontrol.errors[errorkey].requiredLength;
            errormessage = lablename + ' Must Have ' + length_1 + ' Digits';
        }
        if (errorkey == 'maxlength' && key != skipKey) {
            var length_2 = formcontrol.errors[errorkey].requiredLength;
            errormessage = lablename + ' Must Have ' + length_2 + ' Digits';
        }
        if (errorkey == 'maxlength' && key == skipKey) {
            //let length = formcontrol.errors[errorkey].requiredLength;
            errormessage = 'Invalid ' + lablename;
        }
        if (errorkey == 'max') {
            var maxValue = formcontrol.errors.max.max;
            errormessage = lablename + ' Maximum value can be ' + maxValue;
        }
        return errormessage;
    };
    CommonService.prototype.formatDateFromDDMMYYYY = function (value) {
        value = value.substr(0, 10);
        if (value != '' && value != null) {
            if (value.indexOf('/') > -1) {
                this.datevalue = value.split('/');
            }
            if (value.indexOf('-') > -1) {
                this.datevalue = value.split('-');
            }
            if (value.indexOf(' ') > -1) {
                this.datevalue = value.split(' ');
            }
            //console.log("this.datevalue : ", this.datevalue);
            this.day = Number(this.datevalue[0]);
            this.month = Number(this.datevalue[1]) - 1;
            this.year = Number(this.datevalue[2]);
            this.newDate = new Date(this.year, this.month, this.day);
            //console.log("this.newDate : ", this.newDate);
            return this.newDate;
        }
        else {
            return null;
        }
    };
    CommonService.prototype.formatDateFromYYYYMMDD = function (value) {
        value = value.substr(0, 10);
        if (value != '' && value != null) {
            if (value.indexOf('/') > -1) {
                this.datevalue = value.split('/');
            }
            if (value.indexOf('-') > -1) {
                this.datevalue = value.split('-');
            }
            if (value.indexOf(' ') > -1) {
                this.datevalue = value.split(' ');
            }
            this.day = Number(this.datevalue[2]);
            this.month = Number(this.datevalue[1]) - 1;
            this.year = Number(this.datevalue[0]);
            this.newDate = new Date(this.year, this.month, this.day);
            return this.newDate;
        }
        else {
            return null;
        }
    };
    CommonService.prototype.formatDateFromMMDDYYYY = function (value) {
        //undefined should be provide
        value = value.substr(0, 10);
        if (value != '' && value != null) {
            if (value.indexOf('/') > -1) {
                this.datevalue = value.split('/');
            }
            if (value.indexOf('-') > -1) {
                this.datevalue = value.split('-');
            }
            if (value.indexOf(' ') > -1) {
                this.datevalue = value.split(' ');
            }
            this.day = Number(this.datevalue[1]);
            this.month = Number(this.datevalue[0]) - 1;
            this.year = Number(this.datevalue[2]);
            this.newDate = new Date(this.year, this.month, this.day);
            return this.newDate;
        }
        else {
            return null;
        }
    };
    CommonService.prototype.getFormatDate = function (dateData) {
        var data = this.datepipe.transform(dateData, 'dd/MM/yyyy');
        return data;
    };
    CommonService.prototype.callGetAPI = function (apiPath, params, parameterStatus) {
        var _this = this;
        //let data = environment.apiURL;
        //if (parameterStatus.toUpperCase() == 'YES')
        //  return this.http.get(environment.apiURL + apiPath, { params }).map(this.extractData).catch(this.handleError);
        //else
        //  return this.http.get(environment.apiURL + apiPath).map(this.extractData).catch(this.handleError);
        var urldata = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        if (parameterStatus.toUpperCase() == 'YES')
            return this.http.get(urldata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (json) { return _this.http.get(json[0]['ApiHostUrl'] + apiPath, { params: params }).map(_this.extractData).catch(_this.handleError); }));
        else
            return this.http.get(urldata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (json) { return _this.http.get(json[0]['ApiHostUrl'] + apiPath).map(_this.extractData).catch(_this.handleError); }));
    };
    CommonService.prototype.callPostAPI = function (apiPath, data) {
        var _this = this;
        var urldata = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        httpHeaders.append('Access-Control-Allow-Origin', '/*');
        var options = {
            headers: httpHeaders
        };
        //console.log("data : ", data);
        //return this.http.post(environment.apiURL + apiPath, data, options).map(this.extractData).catch(this.handleError);
        return this.http.get(urldata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (json) { return _this.http.post(json[0]['ApiHostUrl'] + apiPath, data, options).map(_this.extractData).catch(_this.handleError); }));
    };
    //Not used(Repeated)
    CommonService.prototype.callPostAPIMultipleParameters = function (apiPath) {
        var _this = this;
        var urldata = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        httpHeaders.append('Access-Control-Allow-Origin', '/*');
        var options = {
            headers: httpHeaders
        };
        return this.http.get(urldata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (json) { return _this.http.post(json[0]['ApiHostUrl'] + apiPath, options).map(_this.extractData).catch(_this.handleError); }));
    };
    CommonService.prototype.currencyformat = function (value) {
        //
        if (value == null) {
            value = 0;
        }
        else {
            value = parseFloat(value.toString().replace(/,/g, ""));
        }
        var withNegativeData;
        var result;
        //let currencyformat= this.cookieservice.get("savedformat")
        var currencyformat = "India";
        if (currencyformat == "India") {
            if (value < 0) {
                var stringData = value.toString();
                withNegativeData = stringData.substring(1, stringData.length);
                result = withNegativeData.toString().split('.');
            }
            else if (value >= 0) {
                result = value.toString().split('.');
            }
            var lastThree = result[0].substring(result[0].length - 3);
            var otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            if (result.length > 1) {
                output += "." + result[1];
            }
            if (value >= 0) {
                return output;
            }
            else if (value < 0) {
                output = '-' + '' + output;
                return output;
            }
            // } 
        }
        else {
            // this.symbol = this.cookieservice.get("symbolofcurrency")
            var result = value.toString().split('.');
            var lastThree = result[0].substring(result[0].length - 3);
            var otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
            if (result.length > 1) {
                output += "." + result[1];
            }
            //return this.symbol+"  "+output
        }
    };
    CommonService.prototype.functiontoRemoveCommas = function (value) {
        var a = value.split(',');
        var b = a.join('');
        var c = b;
        return c;
    };
    CommonService.prototype.removeCommasInAmount = function (value) {
        if (Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmptyString"])(value))
            value = 0;
        return parseFloat(value.toString().replace(/,/g, ""));
        // let a = value.split(',')
        // let b = a.join('')
        // let c = b
        // return c;
    };
    CommonService.prototype.GetContactDetails = function (contacttype) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('contactType', contacttype);
        return this.callGetAPI('/Settings/ReferralAdvocate/getContactDetails', params, 'YES');
        //   let httpHeaders = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'Cache-Control': 'no-cache'
        //   })
        //   let HttpParams = { 'contactType': contacttype }
        //   let options = {
        //     headers: httpHeaders,
        //     params: HttpParams
        //   };  
        // return this.http.get('http://192.168.2.164:9999/api/Settings/ReferralAdvocate/getContactDetails',options)
    };
    CommonService.prototype.GetContactDetailsbyId = function (ContactId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ContactId', ContactId);
        return this.callGetAPI('/Settings/ReferralAdvocate/GetContactDetailsbyId', params, 'YES');
    };
    CommonService.prototype.ConvertImagepathtobase64 = function (path) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('strPath', path);
        return this.callGetAPI('/loans/masters/contactmaster/ConvertImagepathtobase64', params, 'YES');
    };
    CommonService.prototype.SetFiTab1Data = function (data) {
        this.FiTab1Details = data;
    };
    CommonService.prototype.GetFiTab1Data = function () {
        return this.FiTab1Details;
    };
    CommonService.prototype._SetFiTab1Data = function (data) {
        this.FiTab1Data.next(data);
    };
    CommonService.prototype._GetFiTab1Data = function () {
        return this.FiTab1Data.asObservable();
    };
    CommonService.prototype._SetBankUpdate = function (data) {
        this.BankUpdate.next(data);
    };
    CommonService.prototype._GetBankUpdate = function () {
        return this.BankUpdate.asObservable();
    };
    CommonService.prototype._SetBankData = function (data) {
        this.BankData.next(data);
    };
    CommonService.prototype._GetBankData = function () {
        return this.BankData.asObservable();
    };
    /////mahesh m
    CommonService.prototype.CheckValidationStatus = function (status) {
        this.ValidationStatus.next(status);
    };
    CommonService.prototype.GetValidationStatus = function () {
        return this.ValidationStatus;
    };
    CommonService.prototype._setValidationStatus = function (data) {
        this._validationStatus = data;
    };
    CommonService.prototype._getValidationStatus = function () {
        return this._validationStatus;
    };
    CommonService.prototype._checkValidationsBetweenComponents = function () {
        this.ValidationStatus.next();
    };
    CommonService.prototype._CheckValidationStatus = function () {
        return this.ValidationStatus.asObservable();
    };
    /////
    CommonService.prototype._SetKYCData = function (data) {
        this.KYCData.next(data);
    };
    CommonService.prototype._GetKYCData = function () {
        return this.KYCData.asObservable();
    };
    CommonService.prototype._SetKYCUpdate = function (data) {
        this.KYCUpdate.next(data);
    };
    CommonService.prototype._GetKYCUpdate = function () {
        return this.KYCUpdate.asObservable();
    };
    CommonService.prototype._SetTDSData = function (data) {
        this.TDSData.next(data);
    };
    CommonService.prototype._GetTDSData = function () {
        return this.TDSData.asObservable();
    };
    CommonService.prototype._SetTDSUpdate = function (data) {
        this.TDSUpdate.next(data);
    };
    CommonService.prototype._GetTDSUpdate = function () {
        return this.TDSUpdate.asObservable();
    };
    CommonService.prototype._SetContactData = function (data) {
        this.ContactData.next(data);
    };
    CommonService.prototype._GetContactData = function () {
        return this.ContactData.asObservable();
    };
    CommonService.prototype._SetContactUpdate = function (data) {
        this.ContactUpdate.next(data);
    };
    CommonService.prototype._GetContactUpdate = function () {
        return this.ContactUpdate.asObservable();
    };
    CommonService.prototype._SetReferralViewData = function (data) {
        this.ReferralViewData = data;
    };
    CommonService.prototype._GetReferralViewData = function () {
        return this.ReferralViewData;
    };
    CommonService.prototype._SetGeneralReceiptView = function (data) {
        this.GeneralReceiptView = data;
        // this.GeneralReceiptView.next(data);
    };
    CommonService.prototype._GetGeneralReceiptView = function () {
        return this.GeneralReceiptView;
    };
    CommonService.prototype._SetPaymentView = function (data) {
        this.PaymentView = data;
    };
    CommonService.prototype._GetPaymentView = function () {
        return this.PaymentView;
    };
    CommonService.prototype._SetReferralid = function (data) {
        this.ReferralId = data;
    };
    CommonService.prototype._GetReferralid = function () {
        return this.ReferralId;
    };
    CommonService.prototype.fileUpload = function (data) {
        var _this = this;
        var urldata = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        return this.http.get(urldata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (json) { return _this.http.post(json[0]['ApiHostUrl'] + '/loans/masters/contact/MultiFileUpload', data).map(_this.extractData).catch(_this.handleError); }));
    };
    CommonService.prototype.GetContactDetailsforKYC = function (ContactId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('pContactId', ContactId);
        return this.callGetAPI('/Settings/getDocumentstoreDetails', params, 'YES');
    };
    CommonService.prototype.removeCommasForEntredNumber = function (enteredNumber) {
        return parseFloat(enteredNumber.toString().replace(/,/g, ""));
    };
    CommonService.prototype.showWarningMessage = function (message) {
        this.toastr.warning(message, 'Warning!');
    };
    CommonService.prototype.GetCollectionReport = function (fromDate, toDate, recordid, fieldname, fieldtype) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('fromDate', fromDate).set('toDate', toDate).set('recordid', recordid).set('fieldname', fieldname).set('fieldtype', fieldtype);
            return this.callGetAPI('/CollectionReport/api/Loans/Reports/GetColletionsummary', params, 'YES');
        }
        catch (e) {
            this.showErrorMessage(e);
        }
    };
    CommonService.prototype._SetUserrightsView = function (data) {
        this.UserRightsView = data;
        // this.GeneralReceiptView.next(data);
    };
    CommonService.prototype._GetUserrightsView = function () {
        return this.UserRightsView;
    };
    CommonService.prototype.GetCollectiondetails = function (fromDate, toDate, applicationid) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('fromDate', fromDate).set('toDate', toDate).set('Applicationid', applicationid);
            return this.callGetAPI('/CollectionReport/api/Loans/Reports/GetColletiondetails', params, 'YES');
        }
        catch (e) {
            this.showErrorMessage(e);
        }
    };
    CommonService.prototype._setReportLableName = function (data) {
        this.reportLableName = data;
    };
    CommonService.prototype._getReportLableName = function () {
        return this.reportLableName;
    };
    CommonService.prototype.Getmemberdetails = function () {
        try {
            return this.callGetAPI('/Banking/Masters/MemberType/GetMemberDetails', '', 'NO');
        }
        catch (e) {
            this.showErrorMessage(e);
        }
    };
    CommonService.prototype.ageCalculatorYYYYMMDD = function (fromDate, Todate) {
        var Currentage = "";
        if (!Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmptyString"])(fromDate) && !Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmptyString"])(Todate)) {
            var start = new Date(fromDate);
            var end = new Date(Todate);
            var b_day = start.getDate();
            var b_month = start.getMonth() + 1;
            var b_year = start.getFullYear();
            var c_day = end.getDate();
            var c_month = end.getMonth() + 1;
            var c_year = end.getFullYear();
            if (b_day > c_day) {
                c_day = c_day + this.daysInMonth(c_month - 1, c_year);
                c_month = c_month - 1;
            }
            if (b_month > c_month) {
                c_year = c_year - 1;
                c_month = c_month + 12;
            }
            var calculated_date = c_day - b_day;
            var calculated_month = c_month - b_month;
            var calculated_year = c_year - b_year;
            Currentage = calculated_year + " Year  " + calculated_month + "  Months " + calculated_date + "  Days";
        }
        return Currentage;
    };
    CommonService.prototype.daysInMonth = function (month, year) {
        if (month < 0)
            return 31;
        return new Date(year, month, 0).getDate();
    };
    CommonService.prototype.ageCalculation = function (DOB) {
        var age;
        var dob = DOB;
        if (dob != '' && dob != null) {
            var currentdate = Date.now();
            //let agedate = new Date(dob);
            var agedate = new Date(dob).getTime();
            var timeDiff = Math.abs(currentdate - agedate);
            if (timeDiff.toString() != 'NaN')
                age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
            else
                age = 0;
        }
        else {
            age = 0;
        }
        return age;
    };
    CommonService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/Services/ipaddress.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/ipaddress.service.ts ***!
  \***********************************************/
/*! exports provided: IpaddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpaddressService", function() { return IpaddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IpaddressService = /** @class */ (function () {
    function IpaddressService(http) {
        this.http = http;
    }
    IpaddressService.prototype.getIPAddress = function () {
        return this.http.get("http://api.ipify.org/?format=json");
    };
    IpaddressService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IpaddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], IpaddressService);
    return IpaddressService;
}());



/***/ }),

/***/ "./src/app/Services/livebidding.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/livebidding.service.ts ***!
  \*************************************************/
/*! exports provided: LivebiddingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivebiddingService", function() { return LivebiddingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LivebiddingService = /** @class */ (function () {
    function LivebiddingService(commonService) {
        this.commonService = commonService;
        this.ticketdata = {};
        this.spinner = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    LivebiddingService.prototype.GetSubscriberDetails = function (chitno) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ChitNo', chitno);
            return this.commonService.callGetAPI('/Auctions/Livebidding/GetSubscriberDetails', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    LivebiddingService.prototype.StartAuction = function (groupcode, actionhall) {
        var path = '/Auctions/Livebidding/StartAuction?groupcode=' + groupcode + '&actionhall=' + actionhall;
        return this.commonService.callPostAPIMultipleParameters(path);
    };
    LivebiddingService.prototype.SetTicketDetails = function (groupcode, data) {
        this.groupcode = groupcode;
        this.data = data;
        this.ticketdata = { groupcode: this.groupcode, checkeditems: this.data };
        localStorage.setItem("groupdetails", JSON.stringify(this.ticketdata));
    };
    //this.ticketdata=data
    LivebiddingService.prototype.GetTicketDetails = function () {
        this.ticketdata = JSON.parse(localStorage.getItem("groupdetails"));
        return this.ticketdata;
    };
    LivebiddingService.prototype.GetGroupAuctionDetails = function (groupcode, Branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('groupcode', groupcode).set('Branchname', Branchname);
            return this.commonService.callGetAPI('/Auctions/Livebidding/GroupAuctionDetails', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    LivebiddingService.prototype.SaveLiveAuctionHistory = function (data) {
        return this.commonService.callPostAPI('/Auctions/Livebidding/SaveLiveAuctionHistory', data);
    };
    LivebiddingService.prototype.UpdateLiveAuctionHistory = function (groupcode, meetingid, comments) {
        var path = '/Auctions/Livebidding/UpdateLiveAuctionHistory?groupcode=' + groupcode + '&meetingid=' + meetingid + '&comments=' + comments;
        return this.commonService.callPostAPIMultipleParameters(path);
    };
    LivebiddingService.prototype.InitiateAuction = function (groupcode, hallname, branchid) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('groupcode', groupcode).set('hallname', hallname).set('branchid', branchid);
            return this.commonService.callGetAPI('/Auctions/HallAllotment/InitiateAuction', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    LivebiddingService.prototype.GetBranchNames = function () {
        try {
            return this.commonService.callGetAPI('/Auctions/Livebidding/GetBranchnames', '', 'NO');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    LivebiddingService.prototype.GetRunningAuctiondata = function (Branchname) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Branchname', Branchname);
            return this.commonService.callGetAPI('/Auctions/Livebidding/GetReviewerData', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    LivebiddingService.prototype.setDrawticketnumbers = function (data) {
        this.drawticketnumbers = data;
    };
    LivebiddingService.prototype.getDrawticketnumbers = function () {
        return this.drawticketnumbers;
    };
    LivebiddingService.prototype.setAuctioneer = function (autioneername) {
        this.auctionername = autioneername;
    };
    LivebiddingService.prototype.getAuctioneer = function () {
        return this.auctionername;
    };
    LivebiddingService.prototype.setMeetingid = function (data) {
        this.meetingid = data;
    };
    LivebiddingService.prototype.getMeetingid = function () {
        return this.meetingid;
    };
    LivebiddingService.prototype.SetReviwerGroup = function (groupcode) {
        localStorage.setItem("ReviwerGroup", groupcode);
    };
    LivebiddingService.prototype.SetReviwerbranch = function (branch) {
        localStorage.setItem("ReviwerBranch", branch);
    };
    LivebiddingService.prototype.GetReviwerbranch = function () {
        this.Reviwerbranch = localStorage.getItem("ReviwerBranch");
        return this.Reviwerbranch;
    };
    LivebiddingService.prototype.GetReviwerGroup = function () {
        this.ReviwerGroup = localStorage.getItem("ReviwerGroup");
        return this.ReviwerGroup;
    };
    LivebiddingService.prototype.ClearParticipantDue = function (ChitNo, mobileno) {
        try {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ChitNo', ChitNo).set('mobileno', mobileno);
            return this.commonService.callGetAPI('/Auctions/Livebidding/ClearParticipantDue', params, 'YES');
        }
        catch (e) {
            this.commonService.showErrorMessage(e);
        }
    };
    LivebiddingService.ctorParameters = function () { return [
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    LivebiddingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LivebiddingService);
    return LivebiddingService;
}());



/***/ }),

/***/ "./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VJL0FkbWluL1Jldmlld2VyL3Jldmlld2VyL3Jldmlld2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.ts ***!
  \******************************************************************/
/*! exports provided: ReviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerComponent", function() { return ReviewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/livebidding.service */ "./src/app/Services/livebidding.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







var ReviewerComponent = /** @class */ (function () {
    function ReviewerComponent(formBuilder, livebiddingservice, commonservice, router) {
        this.formBuilder = formBuilder;
        this.livebiddingservice = livebiddingservice;
        this.commonservice = commonservice;
        this.router = router;
        this.BranchList = [];
        this.AuctionsList = [];
    }
    ReviewerComponent.prototype.ngOnInit = function () {
        this.Reviewerform = this.formBuilder.group({
            branchname: ["Select"],
        });
        this.GetBranchNames();
    };
    ReviewerComponent.prototype.GetBranchNames = function () {
        var _this = this;
        this.livebiddingservice.GetBranchNames().subscribe(function (json) {
            debugger;
            _this.BranchList = json;
        });
    };
    ReviewerComponent.prototype.BranchNamechange = function (event) {
        var _this = this;
        debugger;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(event)) {
            this.livebiddingservice.GetRunningAuctiondata(event.branch).subscribe(function (json) {
                debugger;
                _this.AuctionsList = json;
            });
        }
        else {
            this.AuctionsList = [];
        }
    };
    ReviewerComponent.prototype.Review = function (dataitem) {
        debugger;
        this.livebiddingservice.SetReviwerGroup(dataitem.groupcode);
        this.livebiddingservice.SetReviwerbranch(dataitem.branch);
        window.open("/#/Livebidding", "_blank", "resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no,width=1800,height=1200");
        //this.router.navigate(['/Livebidding'])
    };
    ReviewerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_5__["LivebiddingService"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ReviewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviewer',
            template: __webpack_require__(/*! raw-loader!./reviewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.html"),
            styles: [__webpack_require__(/*! ./reviewer.component.css */ "./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.css")]
        })
    ], ReviewerComponent);
    return ReviewerComponent;
}());



/***/ }),

/***/ "./src/app/UI/Admin/authentication/authentication.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/UI/Admin/authentication/authentication.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Hall-Allotment/hall-allotment.service */ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");







var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(formBuilder, commonservice, hallallotmentservice, router) {
        this.formBuilder = formBuilder;
        this.commonservice = commonservice;
        this.hallallotmentservice = hallallotmentservice;
        this.router = router;
        this.otpdata = [];
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        debugger;
        this.Authenticationvalidations = {};
        this.Authenticationform = this.formBuilder.group({
            pAuthenticationid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pOTPCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.BlurEventAllControll(this.Authenticationform);
    };
    AuthenticationComponent.prototype.checkValidations = function (group, isValid) {
        var _this = this;
        try {
            Object.keys(group.controls).forEach(function (key) {
                isValid = _this.GetValidationByControl(group, key, isValid);
            });
        }
        catch (e) {
            this.showErrorMessage(e);
            return false;
        }
        return isValid;
    };
    AuthenticationComponent.prototype.GetValidationByControl = function (formGroup, key, isValid) {
        try {
            var formcontrol = void 0;
            formcontrol = formGroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    //if (key != 'InsuranceMemberNomineeDetailsList')
                    //  this.checkValidations(formcontrol, isValid)
                }
                else if (formcontrol.validator) {
                    this.Authenticationvalidations[key] = '';
                    if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {
                        var errormessage = void 0;
                        for (var errorkey in formcontrol.errors) {
                            if (errorkey) {
                                var lablename = void 0;
                                lablename = document.getElementById(key).title;
                                errormessage = this.commonservice.getValidationMessage(formcontrol, errorkey, lablename, key, '');
                                this.Authenticationvalidations[key] += errormessage + ' ';
                                isValid = false;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            this.commonservice.showErrorMessage(key);
            return false;
        }
        return isValid;
    };
    AuthenticationComponent.prototype.showErrorMessage = function (errormsg) {
        this.commonservice.showErrorMessage(errormsg);
    };
    AuthenticationComponent.prototype.BlurEventAllControll = function (fromgroup) {
        var _this = this;
        try {
            Object.keys(fromgroup.controls).forEach(function (key) {
                _this.setBlurEvent(fromgroup, key);
            });
        }
        catch (e) {
            this.commonservice.showErrorMessage(e);
            return false;
        }
    };
    AuthenticationComponent.prototype.setBlurEvent = function (fromgroup, key) {
        var _this = this;
        try {
            var formcontrol = void 0;
            formcontrol = fromgroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    this.BlurEventAllControll(formcontrol);
                }
                else {
                    if (formcontrol.validator)
                        fromgroup.get(key).valueChanges.subscribe(function (data) { _this.GetValidationByControl(fromgroup, key, true); });
                }
            }
        }
        catch (e) {
            this.commonservice.showErrorMessage(e);
            return false;
        }
    };
    AuthenticationComponent.prototype.Login = function () {
        var _this = this;
        var isValid = true;
        this.Authenticationid = this.Authenticationform.controls.pAuthenticationid.value;
        this.OTPCode = this.Authenticationform.controls.pOTPCode.value;
        if (this.checkValidations(this.Authenticationform, isValid)) {
            this.hallallotmentservice.AuthenticateOTP(this.Authenticationid, this.OTPCode).subscribe(function (json) {
                console.log("otp", json);
                _this.otpdata = json;
                debugger;
                if (!Object(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.otpdata.hallname)) {
                    //this.router.navigate(['/GroupSelection'])
                    sessionStorage.setItem('currentUser', JSON.stringify(_this.otpdata));
                    var hallname = btoa(_this.otpdata.hallname + ',' + _this.otpdata.branchid + ',' + _this.otpdata.branchname);
                    _this.router.navigate(['/GroupSelection'], { queryParams: { id: hallname } });
                    // this.hallallotmentservice.SetGroupData(this.otpdata)
                }
                else {
                    _this.commonservice.showWarningMessage("Authentication failed!");
                }
            });
        }
    };
    AuthenticationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_4__["HallAllotmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! raw-loader!./authentication.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/authentication/authentication.component.html")
        })
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/UI/Admin/group-selection/group-selection.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/UI/Admin/group-selection/group-selection.component.ts ***!
  \***********************************************************************/
/*! exports provided: GroupSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSelectionComponent", function() { return GroupSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Hall-Allotment/hall-allotment.service */ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/livebidding.service */ "./src/app/Services/livebidding.service.ts");





var GroupSelectionComponent = /** @class */ (function () {
    function GroupSelectionComponent(hallallotmentservice, router, activatedroute, livebiddingService) {
        this.hallallotmentservice = hallallotmentservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.livebiddingService = livebiddingService;
        this.groupdata = [];
    }
    GroupSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.branchdata = this.hallallotmentservice.GetBranchDetails();
        var routeParams = this.activatedroute.queryParams.subscribe(function (params) {
            debugger;
            var routeparmeter = atob(params['id']);
            var splitData = routeparmeter.split(",");
            _this.hallname = splitData[0];
            _this.branchid = splitData[1];
            _this.branchname = splitData[2];
            _this.GetGroupDetails(_this.hallname, _this.branchname);
        });
    };
    GroupSelectionComponent.prototype.GetGroupDetails = function (hallname, branchname) {
        var _this = this;
        this.hallallotmentservice.getGroupDetails(hallname, branchname).subscribe(function (json) {
            _this.groupdata = json;
        });
    };
    GroupSelectionComponent.prototype.Initiate = function (dataItem) {
        var _this = this;
        debugger;
        this.Groupcode = btoa(dataItem.pGroupCode);
        this.livebiddingService.InitiateAuction(dataItem.pGroupCode, dataItem.pAuctionHall, this.branchid).subscribe(function (json) {
            _this.meetingid = json["meetingid"];
            _this.router.navigate(['/TicketSelection'], { queryParams: { id: _this.Groupcode } });
        });
        debugger;
        //this.router.navigate(['/TicketSelection/' + this.Groupcode])
    };
    GroupSelectionComponent.ctorParameters = function () { return [
        { type: src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_2__["HallAllotmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_4__["LivebiddingService"] }
    ]; };
    GroupSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-selection',
            template: __webpack_require__(/*! raw-loader!./group-selection.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/group-selection/group-selection.component.html")
        })
    ], GroupSelectionComponent);
    return GroupSelectionComponent;
}());



/***/ }),

/***/ "./src/app/UI/Admin/hall-allotment/hall-allotment.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/UI/Admin/hall-allotment/hall-allotment.component.ts ***!
  \*********************************************************************/
/*! exports provided: HallAllotmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallAllotmentComponent", function() { return HallAllotmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Hall-Allotment/hall-allotment.service */ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







var HallAllotmentComponent = /** @class */ (function () {
    function HallAllotmentComponent(router, formBuilder, hallallotmentservice, commonservice) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.hallallotmentservice = hallallotmentservice;
        this.commonservice = commonservice;
        this.branchdata = {};
        this.any = [];
        this.EmployeeList = [];
        this.Halllist = [];
    }
    HallAllotmentComponent.prototype.ngOnInit = function () {
        this.buttondisabled = false;
        this.HallAllotmentvalidations = {};
        this.hallallotmentform = this.formBuilder.group({
            pConductedby: [''],
            pHallName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pEmployeeName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pBranchid: [''],
            pBranchName: [''],
            pMobileNo: ['']
        });
        debugger;
        this.BlurEventAllControll(this.hallallotmentform);
        this.GetBranchDetails();
        this.GetEmployees();
        this.GetHallList();
        this.GetHallAllotmentList();
    };
    HallAllotmentComponent.prototype.GetBranchDetails = function () {
        this.branchdata = this.hallallotmentservice.GetBranchDetails();
        console.log("data", this.branchdata);
    };
    HallAllotmentComponent.prototype.GetEmployees = function () {
        var _this = this;
        this.hallallotmentservice.getEmployeeList(this.branchdata.pBranchName).subscribe(function (json) {
            console.log("employeelist", json);
            _this.EmployeeList = json;
        });
    };
    HallAllotmentComponent.prototype.GetHallList = function () {
        var _this = this;
        this.hallallotmentservice.getHallLists(this.branchdata.pBranchName).subscribe(function (json) {
            console.log("Halllist", json);
            _this.Halllist = json;
        });
    };
    HallAllotmentComponent.prototype.GetHallAllotmentList = function () {
        var _this = this;
        this.hallallotmentservice.GetHallAllotmentList(this.branchdata.pBranchName).subscribe(function (json) {
            _this.halldata = json;
            console.log("hall data", _this.halldata);
        });
    };
    HallAllotmentComponent.prototype.Employeechange = function (event) {
        debugger;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(event)) {
            this.buttondisabled = false;
            this.employeename = event.pEmployeeName;
            this.hallallotmentform.controls.pConductedby.setValue(event.pEmployeeName);
            this.hallallotmentform.controls.pBranchName.setValue(event.pBranchName);
            this.hallallotmentform.controls.pMobileNo.setValue(event.pMobileNo);
        }
    };
    HallAllotmentComponent.prototype.HallChange = function (event) {
        debugger;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(event)) {
            this.buttondisabled = false;
            this.hallname = event.pHallName;
        }
    };
    HallAllotmentComponent.prototype.checkValidations = function (group, isValid) {
        var _this = this;
        try {
            Object.keys(group.controls).forEach(function (key) {
                isValid = _this.GetValidationByControl(group, key, isValid);
            });
        }
        catch (e) {
            this.showErrorMessage(e);
            return false;
        }
        return isValid;
    };
    HallAllotmentComponent.prototype.GetValidationByControl = function (formGroup, key, isValid) {
        try {
            var formcontrol = void 0;
            formcontrol = formGroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                    //if (key != 'InsuranceMemberNomineeDetailsList')
                    //  this.checkValidations(formcontrol, isValid)
                }
                else if (formcontrol.validator) {
                    this.HallAllotmentvalidations[key] = '';
                    if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {
                        var errormessage = void 0;
                        for (var errorkey in formcontrol.errors) {
                            if (errorkey) {
                                var lablename = void 0;
                                lablename = document.getElementById(key).title;
                                errormessage = this.commonservice.getValidationMessage(formcontrol, errorkey, lablename, key, '');
                                this.HallAllotmentvalidations[key] += errormessage + ' ';
                                isValid = false;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            this.commonservice.showErrorMessage(key);
            return false;
        }
        return isValid;
    };
    HallAllotmentComponent.prototype.showErrorMessage = function (errormsg) {
        this.commonservice.showErrorMessage(errormsg);
    };
    HallAllotmentComponent.prototype.BlurEventAllControll = function (fromgroup) {
        var _this = this;
        try {
            Object.keys(fromgroup.controls).forEach(function (key) {
                _this.setBlurEvent(fromgroup, key);
            });
        }
        catch (e) {
            this.commonservice.showErrorMessage(e);
            return false;
        }
    };
    HallAllotmentComponent.prototype.setBlurEvent = function (fromgroup, key) {
        var _this = this;
        try {
            var formcontrol = void 0;
            formcontrol = fromgroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                    this.BlurEventAllControll(formcontrol);
                }
                else {
                    if (formcontrol.validator)
                        fromgroup.get(key).valueChanges.subscribe(function (data) { _this.GetValidationByControl(fromgroup, key, true); });
                }
            }
        }
        catch (e) {
            this.commonservice.showErrorMessage(e);
            return false;
        }
    };
    HallAllotmentComponent.prototype.openAuctionHistory = function () {
        this.router.navigateByUrl('/auctionhistory');
    };
    HallAllotmentComponent.prototype.openprizedsubsribers = function () {
        this.router.navigateByUrl('/auctiondata');
    };
    HallAllotmentComponent.prototype.submit = function () {
        var _this = this;
        this.buttondisabled = true;
        var isValid = true;
        // this.router.navigate(['/Authentication'])
        if (this.checkValidations(this.hallallotmentform, isValid)) {
            debugger;
            this.hallallotmentservice.checkHallAllotmentExist(this.employeename, this.hallname, this.branchdata.pBranchName).subscribe(function (json) {
                console.log("json", json);
                var response = json;
                if (!response) {
                    _this.hallallotmentform.controls.pBranchid.setValue(_this.branchdata.pBranchId);
                    console.log(_this.hallallotmentform.value);
                    var data = JSON.stringify(_this.hallallotmentform.value);
                    _this.hallallotmentservice.SaveAllotmentData(data).subscribe(function (json) {
                        if (json) {
                            _this.buttondisabled = false;
                            _this.hallallotmentform.controls.pHallName.setValue(null);
                            _this.hallallotmentform.controls.pEmployeeName.setValue(null);
                            _this.HallAllotmentvalidations = {};
                            _this.commonservice.showInfoMessage("Saved Succesfully");
                            _this.GetHallAllotmentList();
                            //this.router.navigate(['/Authentication'])
                        }
                    });
                }
                else {
                    _this.buttondisabled = false;
                    _this.commonservice.showWarningMessage("Already Existed");
                    _this.hallallotmentform.controls.pHallName.setValue(null);
                    _this.hallallotmentform.controls.pEmployeeName.setValue(null);
                    _this.HallAllotmentvalidations = {};
                }
            });
        }
        this.buttondisabled = false;
    };
    HallAllotmentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_4__["HallAllotmentService"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    HallAllotmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hall-allotment',
            template: __webpack_require__(/*! raw-loader!./hall-allotment.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/hall-allotment/hall-allotment.component.html")
        })
    ], HallAllotmentComponent);
    return HallAllotmentComponent;
}());



/***/ }),

/***/ "./src/app/UI/Admin/ticket-selection/ticket-selection.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/UI/Admin/ticket-selection/ticket-selection.component.ts ***!
  \*************************************************************************/
/*! exports provided: TicketSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketSelectionComponent", function() { return TicketSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Hall-Allotment/hall-allotment.service */ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/livebidding.service */ "./src/app/Services/livebidding.service.ts");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid/dist/es2015/utils */ "./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_10__);











var TicketSelectionComponent = /** @class */ (function () {
    function TicketSelectionComponent(activatedroute, hallallotmentservice, datepipe, livebiddingservice, router, commonservice, formBuilder) {
        this.activatedroute = activatedroute;
        this.hallallotmentservice = hallallotmentservice;
        this.datepipe = datepipe;
        this.livebiddingservice = livebiddingservice;
        this.router = router;
        this.commonservice = commonservice;
        this.formBuilder = formBuilder;
        this.ticketdetails = [];
        this.checkeditems = [];
        this.referencevalidation = false;
        this.duecheckeditems = [];
    }
    TicketSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.ticketselectionform = this.formBuilder.group({
            Reference: [''],
            comments: [''],
        });
        //let routeParams = this.activatedroute.snapshot.queryParamMap.get('id'); 
        var routeParams = this.activatedroute.queryParams.subscribe(function (params) {
            debugger;
            // Defaults to 0 if no query param provided.
            _this.groupcode = atob(params['id']);
            console.log(params['meetingid']);
        });
        console.log("routeParams", this.groupcode);
        this.branchdata = this.hallallotmentservice.GetBranchDetails();
        this.Getticketnumbers(this.groupcode);
        console.log(this.branchdata);
    };
    TicketSelectionComponent.prototype.Getticketnumbers = function (groupcode) {
        var _this = this;
        this.hallallotmentservice.TicketDetails(groupcode, this.branchdata.branchname).subscribe(function (json) {
            debugger;
            _this.ticketdetails = json;
            _this.hallname = _this.ticketdetails[0].auctionHall;
            _this.groupcode = _this.ticketdetails[0].groupcode;
            _this.auctiontime = _this.ticketdetails[0].auctionstartTime;
            _this.meetingid = _this.ticketdetails[0].meetingId;
            _this.branchid = _this.ticketdetails[0].branchId;
            _this.branchname = _this.ticketdetails[0].branchname;
        });
    };
    TicketSelectionComponent.prototype.checkbox = function (data, event) {
        debugger;
        if (event.currentTarget.checked) {
            console.log("data", data);
            this.username = data.subscriberName;
            this.ticketno = data.ticketNo;
            // data.logindate=this.datepipe.transform(new Date(),'yyyy-MM-dd');
            // data.logintime=this.datepipe.transform(new Date(),'HH:mm');
            data.subscribertype = 'walkin client';
            data.meetingId = this.meetingid;
            data.referenceno = "";
            data.comments = "";
            if (data.due > 0) {
                this.duecheckeditems = data;
                this.referencevalidation = false;
                this.ticketselectionform.controls.Reference.setValue('');
                this.ticketselectionform.controls.comments.setValue('');
                $("#Dueparticipants").modal('show');
            }
            else {
                this.duecheckeditems = [];
                this.referencevalidation = false;
                this.ticketselectionform.controls.Reference.setValue('');
                this.ticketselectionform.controls.comments.setValue('');
                this.checkeditems.push(data);
            }
        }
        else {
            this.duecheckeditems = [];
            this.referencevalidation = false;
            this.ticketselectionform.controls.Reference.setValue('');
            this.ticketselectionform.controls.comments.setValue('');
            $("#Dueparticipants").modal('hide');
            this.checkeditems = this.checkeditems.filter(function (item) { return item.ticketNo != data.ticketNo; });
        }
    };
    TicketSelectionComponent.prototype.startauction = function () {
        var _this = this;
        debugger;
        this.livebiddingservice.StartAuction(this.groupcode, this.hallname).subscribe(function (json) {
            console.log("result", json);
            debugger;
            var saved = json["isSaved"];
            if (saved) {
                var MaxbidReacedsubscribers = [];
                localStorage.removeItem('groupdetails');
                localStorage.clear();
                MaxbidReacedsubscribers = json["maxbidofferSubcriberList"];
                for (var i = 0; i < MaxbidReacedsubscribers.length; i++) {
                    var maxbidparticipants = MaxbidReacedsubscribers[i];
                    ///        push Maxbid Reaced subscribers to chats///////////////
                    MaxbidReacedsubscribers[i].livedate = _this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
                    MaxbidReacedsubscribers[i].livetime = _this.datepipe.transform(new Date(), 'hh:mm:ss a');
                    MaxbidReacedsubscribers[i].meetingId = _this.meetingid;
                    MaxbidReacedsubscribers[i].biddamount = MaxbidReacedsubscribers[i].mindiscountamt;
                    var newMessage = firebase__WEBPACK_IMPORTED_MODULE_5___default.a.database().ref('chats/').push();
                    newMessage.set(MaxbidReacedsubscribers[i]);
                    //   push Maxbid Reaced subscribers to userinfo/////////////
                    maxbidparticipants.logindate = _this.datepipe.transform(new Date(), 'yyyy-MM-dd');
                    maxbidparticipants.logintime = _this.datepipe.transform(new Date(), 'HH:mm');
                    maxbidparticipants.subscribertype = 'online client';
                    var newMessage2 = firebase__WEBPACK_IMPORTED_MODULE_5___default.a.database().ref('userinfo/').push();
                    newMessage2.set(maxbidparticipants);
                }
                _this.livebiddingservice.SetTicketDetails(_this.groupcode, _this.checkeditems);
                //  window.open("http://localhost:4200/#/Livebidding",'popup','menubar=0,width=1800,height=1200');
                window.open("/#/Livebidding", "_blank", "resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no,width=1800,height=1200");
                var hallname = btoa(_this.hallname + ',' + _this.branchid + ',' + _this.branchname);
                _this.router.navigate(['/GroupSelection'], { queryParams: { id: hallname } });
            }
        });
    };
    TicketSelectionComponent.prototype.Referencechange = function () {
        var reference = this.ticketselectionform.controls.Reference.value;
        if (Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmptyString"])(reference) || Object(util__WEBPACK_IMPORTED_MODULE_10__["isNullOrUndefined"])(reference)) {
            this.referencevalidation = true;
        }
        else {
            this.referencevalidation = false;
        }
    };
    TicketSelectionComponent.prototype.AddreferenceNo = function () {
        var _this = this;
        debugger;
        var reference = this.ticketselectionform.controls.Reference.value;
        if (Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmptyString"])(reference) || Object(util__WEBPACK_IMPORTED_MODULE_10__["isNullOrUndefined"])(reference)) {
            this.referencevalidation = true;
        }
        else {
            this.livebiddingservice.ClearParticipantDue(this.duecheckeditems.chitNo, this.duecheckeditems.mobileNO).subscribe(function (json) {
                debugger;
                _this.duecheckeditems.referenceno = reference;
                _this.duecheckeditems.comments = _this.ticketselectionform.controls.comments.value;
                _this.checkeditems.push(_this.duecheckeditems);
                $("#Dueparticipants").modal('hide');
            });
        }
    };
    TicketSelectionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_3__["HallAllotmentService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_6__["LivebiddingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    TicketSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-selection',
            template: __webpack_require__(/*! raw-loader!./ticket-selection.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Admin/ticket-selection/ticket-selection.component.html")
        })
    ], TicketSelectionComponent);
    return TicketSelectionComponent;
}());



/***/ }),

/***/ "./src/app/UI/Common/companydetails/companydetails.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/UI/Common/companydetails/companydetails.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompanydetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanydetailsComponent", function() { return CompanydetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var src_app_Services_Common_company_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Common/company-details.service */ "./src/app/Services/Common/company-details.service.ts");




var CompanydetailsComponent = /** @class */ (function () {
    function CompanydetailsComponent(_CommonService, _companydetails) {
        this._CommonService = _CommonService;
        this._companydetails = _companydetails;
    }
    CompanydetailsComponent.prototype.ngOnInit = function () {
        debugger;
        this.getComapnyName();
        this.todaydate = new Date();
    };
    CompanydetailsComponent.prototype.getComapnyName = function () {
        debugger;
        this.comapnydata = this._CommonService.comapnydetails;
        ;
        this.pCompanyName = this.comapnydata['pCompanyName'];
        this.pAddress1 = this.comapnydata['pAddress1'];
        this.pAddress2 = this.comapnydata['pAddress2'];
        this.pcity = this.comapnydata['pcity'];
        this.pCountry = this.comapnydata['pCountry'];
        this.pState = this.comapnydata['pState'];
        this.pDistrict = this.comapnydata['pDistrict'];
        this.pPincode = this.comapnydata['pPincode'];
        this.pCinNo = this.comapnydata['pCinNo'];
        this.pGstinNo = this.comapnydata['pGstinNo'];
        this.pBranchname = this.comapnydata['pBranchname'];
        //this._companydetails.GetCompanyData().subscribe(res => {
        //  
        //  this.comapnydata = res;
        //  this.pCompanyName = this.comapnydata['pCompanyName'];
        //  this.pAddress1 = this.comapnydata['pAddress1'];
        //  this.pAddress2 = this.comapnydata['pAddress2'];
        //  this.pcity = this.comapnydata['pcity'];
        //  this.pCountry = this.comapnydata['pCountry'];
        //  this.pState = this.comapnydata['pState'];
        //  this.pDistrict = this.comapnydata['pDistrict'];
        //  this.pPincode = this.comapnydata['pPincode'];
        //  this.pCinNo = this.comapnydata['pCinNo'];
        //  this.pGstinNo = this.comapnydata['pGstinNo'];
        //  this.pBranchname = this.comapnydata['pBranchname'];
        //});
    };
    CompanydetailsComponent.prototype.showErrorMessage = function (errormsg) {
        this._CommonService.showErrorMessage(errormsg);
    };
    CompanydetailsComponent.prototype.showInfoMessage = function (errormsg) {
        this._CommonService.showInfoMessage(errormsg);
    };
    CompanydetailsComponent.ctorParameters = function () { return [
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: src_app_Services_Common_company_details_service__WEBPACK_IMPORTED_MODULE_3__["CompanyDetailsService"] }
    ]; };
    CompanydetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-companydetails',
            template: __webpack_require__(/*! raw-loader!./companydetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Common/companydetails/companydetails.component.html")
        })
    ], CompanydetailsComponent);
    return CompanydetailsComponent;
}());



/***/ }),

/***/ "./src/app/UI/Common/validation-message/validation-message.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/UI/Common/validation-message/validation-message.component.ts ***!
  \******************************************************************************/
/*! exports provided: ValidationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessageComponent", function() { return ValidationMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationMessageComponent = /** @class */ (function () {
    function ValidationMessageComponent() {
    }
    ValidationMessageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ValidationMessageComponent.prototype, "messgae", void 0);
    ValidationMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-validation-message',
            template: __webpack_require__(/*! raw-loader!./validation-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Common/validation-message/validation-message.component.html")
        })
    ], ValidationMessageComponent);
    return ValidationMessageComponent;
}());



/***/ }),

/***/ "./src/app/UI/Home/dashboard.component.ts":
/*!************************************************!*\
  !*** ./src/app/UI/Home/dashboard.component.ts ***!
  \************************************************/
/*! exports provided: snapshotToArray, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Home/dashboard.html"),
        })
    ], DashboardComponent);
    return DashboardComponent;
}());

// Test dashboard -- Test


/***/ }),

/***/ "./src/app/UI/Home/navigation.component.ts":
/*!*************************************************!*\
  !*** ./src/app/UI/Home/navigation.component.ts ***!
  \*************************************************/
/*! exports provided: browserRefresh, NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_Common_default_profile_image_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Common/default-profile-image-service.service */ "./src/app/Services/Common/default-profile-image-service.service.ts");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-wheel */ "./node_modules/ngx-wheel/fesm5/ngx-wheel.js");
/* harmony import */ var src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/livebidding.service */ "./src/app/Services/livebidding.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);












var browserRefresh = false;
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_DefaultProfileImageService, _CommonService, formBuilder, router, _CookieService, _userService, toastr, livebiddingservice) {
        this._DefaultProfileImageService = _DefaultProfileImageService;
        this._CommonService = _CommonService;
        this.formBuilder = formBuilder;
        this.router = router;
        this._CookieService = _CookieService;
        this._userService = _userService;
        this.toastr = toastr;
        this.livebiddingservice = livebiddingservice;
        this.seed = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](Array(12).keys());
        this.textOrientation = ngx_wheel__WEBPACK_IMPORTED_MODULE_9__["TextOrientation"].HORIZONTAL;
        this.textAlignment = ngx_wheel__WEBPACK_IMPORTED_MODULE_9__["TextAlignment"].OUTER;
        this.TitleData = "";
        this.loading = false;
        this.submitted = false;
        this.userFilter = { pFunctionName: '' };
        browserRefresh = !this.router.navigated;
        debugger;
        if (browserRefresh == true) {
            // this.router.navigate(['/Dashboard']);
            this.SubMenuName = 'Home';
            // this.UrlName = "Dashboard"
        }
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.nickname = localStorage.getItem('nickname');
        this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
        var colors = ['#FF0000', '#000000'];
        this.items = this.seed.map(function (value) { return ({
            fillStyle: colors[value % 2],
            text: "Prize " + value,
            id: value,
            textFillStyle: 'white',
            textFontSize: '16'
        }); });
        var userdetails = this._userService._getUser();
        if (Object(util__WEBPACK_IMPORTED_MODULE_11__["isNullOrUndefined"])(userdetails.auctioneer)) {
            this.auctioneer = "Admin";
        }
        else {
            this.auctioneer = userdetails.auctioneer;
        }
        console.log("dataitems", this.items);
    };
    NavigationComponent.prototype.reset = function () {
        this.wheel.reset();
    };
    NavigationComponent.prototype.before = function () {
    };
    NavigationComponent.prototype.spin = function (prize) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.idToLandOn = prize;
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 0); })];
                    case 1:
                        _a.sent();
                        this.wheel.spin();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavigationComponent.prototype.after = function () {
    };
    NavigationComponent.prototype.Urlclick = function (formname, submenu, menuname) {
        this.MenuName = menuname;
        this.SubMenuName = submenu;
        this.UrlName = formname;
    };
    NavigationComponent.prototype.Signout = function () {
        this._userService._logout();
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: src_app_Services_Common_default_profile_image_service_service__WEBPACK_IMPORTED_MODULE_2__["DefaultProfileImageServiceService"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_10__["LivebiddingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_wheel__WEBPACK_IMPORTED_MODULE_9__["NgxWheelComponent"], { static: false })
    ], NavigationComponent.prototype, "wheel", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Home/navigation.html")
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/UI/Home/test.component.ts":
/*!*******************************************!*\
  !*** ./src/app/UI/Home/test.component.ts ***!
  \*******************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.status = 'ready';
        this.notifyConfig = { leftTime: 10, notify: [2, 5] };
    }
    TestComponent.prototype.ngOnInit = function () {
        debugger;
        console.log("hi");
    };
    TestComponent.prototype.start = function () {
        this.status = 'started';
        this.counter.begin();
    };
    TestComponent.prototype.finishTest = function () {
        var _this = this;
        console.log("count down", this.counter);
        setTimeout(function () { return _this.counter.restart(); });
        this.status = 'restarted';
    };
    TestComponent.prototype.resetTimer = function () {
        this.counter.restart();
    };
    TestComponent.prototype.handleEvent2 = function (e) {
        this.notify = e.action.toUpperCase();
        if (e.action === 'notify') {
            this.notify += " - " + e.left + " ms";
        }
        console.log('Notify', e);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('countdown', { static: false })
    ], TestComponent.prototype, "counter", void 0);
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Home/test.component.html")
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/UI/Reports/AuctionHistoryReport/auction-history-report.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/UI/Reports/AuctionHistoryReport/auction-history-report.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AuctionHistoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionHistoryReportComponent", function() { return AuctionHistoryReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_Services_Reports_auction_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Reports/auction-history.service */ "./src/app/Services/Reports/auction-history.service.ts");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");







var AuctionHistoryReportComponent = /** @class */ (function () {
    function AuctionHistoryReportComponent(formbuilder, datePipe, auctionservice, _CommonService) {
        this.formbuilder = formbuilder;
        this.datePipe = datePipe;
        this.auctionservice = auctionservice;
        this._CommonService = _CommonService;
        this.dpConfig = new ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerConfig"]();
        this.branchdetails = [];
        this.today = new Date();
        this.groupcodedetails = [];
        this.AuctionDetails = [];
        this.dpConfig.dateInputFormat = 'DD-MMM-YYYY';
        this.dpConfig.maxDate = new Date();
        this.dpConfig.showWeekNumbers = false;
    }
    AuctionHistoryReportComponent.prototype.ngOnInit = function () {
        this.month = this.today;
        this.date = this.datePipe.transform(this.month, "dd-MMM-yyyy");
        this.GetformData();
        this.GetBranchDetails();
        this.GetGroupCodes();
        this.BlurEventAllControll(this.AuctionHistoryReport);
    };
    AuctionHistoryReportComponent.prototype.GetformData = function () {
        this.AuctionHistoryReporterrors = {};
        this.AuctionHistoryReport = this.formbuilder.group({
            branch: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            groupcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fromDate: [new Date()],
        });
    };
    AuctionHistoryReportComponent.prototype.DateChange = function (event) {
        debugger;
        this.month = event;
        this.date = this.datePipe.transform(this.month, "dd-MMM-yyyy");
        this.GetBranchDetails();
    };
    AuctionHistoryReportComponent.prototype.GetBranchDetails = function () {
        var _this = this;
        debugger;
        this.auctionservice.GetBranchDetails(this.date).subscribe(function (json) {
            _this.branchdetails = json;
            console.log(_this.branchdetails);
        });
    };
    AuctionHistoryReportComponent.prototype.Branchchange = function (event) {
        debugger;
        if (event != undefined) {
            this.branch = event.branch;
            this.GetGroupCodes();
        }
        else {
            this.AuctionHistoryReport.controls.groupcode.setValue("");
        }
    };
    AuctionHistoryReportComponent.prototype.GetGroupCodes = function () {
        var _this = this;
        debugger;
        if (this.branch != undefined) {
            this.auctionservice.GetGroupCodes(this.branch, this.date).subscribe(function (json) {
                _this.groupcodedetails = json;
            });
        }
    };
    AuctionHistoryReportComponent.prototype.GroupChange = function (event) {
        if (event != undefined) {
            this.groupcode = event.groupcode;
        }
    };
    AuctionHistoryReportComponent.prototype.generatereport = function () {
        var _this = this;
        var isValid = true;
        if (this.checkValidations(this.AuctionHistoryReport, isValid)) {
            this.auctionservice.GetAuctionDetails(this.branch, this.groupcode, this.date).subscribe(function (json) {
                var temp = [];
                debugger;
                //temp =angular.fromJson(json); 
                var test = JSON.parse(json['chathistory']);
                _this.AuctionDetails = test.chatdata;
                console.log(test);
            });
        }
    };
    AuctionHistoryReportComponent.prototype.checkValidations = function (group, isValid) {
        var _this = this;
        try {
            Object.keys(group.controls).forEach(function (key) {
                isValid = _this.GetValidationByControl(group, key, isValid);
            });
        }
        catch (e) {
            return false;
        }
        return isValid;
    };
    AuctionHistoryReportComponent.prototype.GetValidationByControl = function (formGroup, key, isValid) {
        try {
            var formcontrol = void 0;
            formcontrol = formGroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    this.checkValidations(formcontrol, isValid);
                }
                else if (formcontrol.validator) {
                    this.AuctionHistoryReporterrors[key] = '';
                    if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {
                        var errormessage = void 0;
                        for (var errorkey in formcontrol.errors) {
                            if (errorkey) {
                                var lablename = void 0;
                                lablename = document.getElementById(key).title;
                                errormessage = this._CommonService.getValidationMessage(formcontrol, errorkey, lablename, key, '');
                                this.AuctionHistoryReporterrors[key] += errormessage + ' ';
                                isValid = false;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            return false;
        }
        return isValid;
    };
    AuctionHistoryReportComponent.prototype.BlurEventAllControll = function (fromgroup) {
        var _this = this;
        try {
            Object.keys(fromgroup.controls).forEach(function (key) {
                _this.setBlurEvent(fromgroup, key);
            });
        }
        catch (e) {
            return false;
        }
    };
    AuctionHistoryReportComponent.prototype.setBlurEvent = function (fromgroup, key) {
        var _this = this;
        try {
            var formcontrol = void 0;
            formcontrol = fromgroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    this.BlurEventAllControll(formcontrol);
                }
                else {
                    if (formcontrol.validator)
                        fromgroup.get(key).valueChanges.subscribe(function (data) { _this.GetValidationByControl(fromgroup, key, true); });
                }
            }
        }
        catch (e) {
            return false;
        }
    };
    AuctionHistoryReportComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: src_app_Services_Reports_auction_history_service__WEBPACK_IMPORTED_MODULE_5__["AuctionHistoryService"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    AuctionHistoryReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auction-history-report',
            template: __webpack_require__(/*! raw-loader!./auction-history-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Reports/AuctionHistoryReport/auction-history-report.component.html")
        })
    ], AuctionHistoryReportComponent);
    return AuctionHistoryReportComponent;
}());



/***/ }),

/***/ "./src/app/UI/Reports/prizedsubscribers.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/UI/Reports/prizedsubscribers.component.ts ***!
  \***********************************************************/
/*! exports provided: PrizedsubscribersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizedsubscribersComponent", function() { return PrizedsubscribersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_Services_Reports_auction_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Reports/auction-history.service */ "./src/app/Services/Reports/auction-history.service.ts");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var PrizedsubscribersComponent = /** @class */ (function () {
    function PrizedsubscribersComponent(formbuilder, datePipe, auctionservice, _CommonService) {
        this.formbuilder = formbuilder;
        this.datePipe = datePipe;
        this.auctionservice = auctionservice;
        this._CommonService = _CommonService;
        this.dpConfig = new ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerConfig"]();
        this.branchdetails = [];
        this.today = new Date();
        this.groupcodedetails = [];
        this.prizedsubscribersdata = [];
        this.dpConfig.dateInputFormat = 'DD-MMM-YYYY';
        this.dpConfig.maxDate = new Date();
        this.dpConfig.showWeekNumbers = false;
    }
    PrizedsubscribersComponent.prototype.ngOnInit = function () {
        this.month = this.today;
        this.date = this.datePipe.transform(this.month, "dd-MMM-yyyy");
        this.GetformData();
        this.GetBranchDetails();
        this.GetGroupCodes();
        this.BlurEventAllControll(this.AuctionDataReport);
    };
    PrizedsubscribersComponent.prototype.GetformData = function () {
        this.AuctionDataReporterrors = {};
        this.AuctionDataReport = this.formbuilder.group({
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            groupcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fromDate: [new Date()],
        });
    };
    PrizedsubscribersComponent.prototype.DateChange = function (event) {
        debugger;
        this.month = event;
        this.date = this.datePipe.transform(this.month, "dd-MMM-yyyy");
        this.GetBranchDetails();
    };
    PrizedsubscribersComponent.prototype.GetBranchDetails = function () {
        var _this = this;
        debugger;
        this.auctionservice.GetBranchDetails(this.date).subscribe(function (json) {
            _this.branchdetails = json;
            console.log(_this.branchdetails);
        });
    };
    PrizedsubscribersComponent.prototype.Branchchange = function (event) {
        debugger;
        if (event != undefined) {
            this.branch = event.branch;
            this.GetGroupCodes();
        }
        else {
            this.AuctionDataReport.controls.groupcode.setValue("");
        }
    };
    PrizedsubscribersComponent.prototype.GetGroupCodes = function () {
        var _this = this;
        debugger;
        if (this.branch != undefined) {
            this.auctionservice.GetGroupCodes(this.branch, this.date).subscribe(function (json) {
                _this.groupcodedetails = json;
            });
        }
    };
    PrizedsubscribersComponent.prototype.GroupChange = function (event) {
        if (event != undefined) {
            this.groupcode = event.groupcode;
        }
    };
    PrizedsubscribersComponent.prototype.generatereport = function () {
        var _this = this;
        var isValid = true;
        if (this.checkValidations(this.AuctionDataReport, isValid)) {
            this.auctionservice.GetPrizedSubscribersData(this.branch, this.groupcode, this.date).subscribe(function (json) {
                _this.prizedsubscribersdata = json;
                console.log(json);
            });
        }
    };
    PrizedsubscribersComponent.prototype.checkValidations = function (group, isValid) {
        var _this = this;
        try {
            Object.keys(group.controls).forEach(function (key) {
                isValid = _this.GetValidationByControl(group, key, isValid);
            });
        }
        catch (e) {
            return false;
        }
        return isValid;
    };
    PrizedsubscribersComponent.prototype.GetValidationByControl = function (formGroup, key, isValid) {
        try {
            var formcontrol = void 0;
            formcontrol = formGroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
                    this.checkValidations(formcontrol, isValid);
                }
                else if (formcontrol.validator) {
                    this.AuctionDataReporterrors[key] = '';
                    if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {
                        var errormessage = void 0;
                        for (var errorkey in formcontrol.errors) {
                            if (errorkey) {
                                var lablename = void 0;
                                lablename = document.getElementById(key).title;
                                errormessage = this._CommonService.getValidationMessage(formcontrol, errorkey, lablename, key, '');
                                this.AuctionDataReporterrors[key] += errormessage + ' ';
                                isValid = false;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            return false;
        }
        return isValid;
    };
    PrizedsubscribersComponent.prototype.BlurEventAllControll = function (fromgroup) {
        var _this = this;
        try {
            Object.keys(fromgroup.controls).forEach(function (key) {
                _this.setBlurEvent(fromgroup, key);
            });
        }
        catch (e) {
            return false;
        }
    };
    PrizedsubscribersComponent.prototype.setBlurEvent = function (fromgroup, key) {
        var _this = this;
        try {
            var formcontrol = void 0;
            formcontrol = fromgroup.get(key);
            if (formcontrol) {
                if (formcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
                    this.BlurEventAllControll(formcontrol);
                }
                else {
                    if (formcontrol.validator)
                        fromgroup.get(key).valueChanges.subscribe(function (data) { _this.GetValidationByControl(fromgroup, key, true); });
                }
            }
        }
        catch (e) {
            return false;
        }
    };
    PrizedsubscribersComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: src_app_Services_Reports_auction_history_service__WEBPACK_IMPORTED_MODULE_3__["AuctionHistoryService"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    PrizedsubscribersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prizedsubscribers',
            template: __webpack_require__(/*! raw-loader!./prizedsubscribers.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Reports/prizedsubscribers.component.html")
        })
    ], PrizedsubscribersComponent);
    return PrizedsubscribersComponent;
}());



/***/ }),

/***/ "./src/app/UI/Settings/Users/user-login/user-login.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/UI/Settings/Users/user-login/user-login.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Common_company_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Services/Common/company-details.service */ "./src/app/Services/Common/company-details.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/Hall-Allotment/hall-allotment.service */ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts");
/* harmony import */ var src_app_Services_ipaddress_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/ipaddress.service */ "./src/app/Services/ipaddress.service.ts");











var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(_commonService, router, _UsersService, _route, toastr, _CompanyDetailsService, hallallotmentservice, ip) {
        this._commonService = _commonService;
        this.router = router;
        this._UsersService = _UsersService;
        this._route = _route;
        this.toastr = toastr;
        this._CompanyDetailsService = _CompanyDetailsService;
        this.hallallotmentservice = hallallotmentservice;
        this.ip = ip;
        this.submitted = false;
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database().ref('users/');
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        // this._commonService.getIPAddress().subscribe((res: any) => {
        //     debugger
        //     let data3 = res;
        //     sessionStorage.setItem('IPAddress', JSON.stringify(data3));
        //     this._commonService._setIPAddress();
        //   }, (error) => {
        //     this._commonService.showErrorMessage(error);
        //   });
    };
    UserLoginComponent.prototype.loginclick = function () {
        var _this = this;
        debugger;
        this.submitted = true;
        if (this.LoginForm.valid) {
            var Logindata = this.LoginForm.value;
            var jsondata = JSON.stringify(this.LoginForm.value);
            // this.ref.orderByChild('nickname').equalTo(this.LoginForm.controls.pUserName.value).once('value', snapshot => {
            //     debugger;
            //     if (snapshot.exists()) {
            //       localStorage.setItem('nickname', this.LoginForm.controls.pUserName.value);
            //       // this.router.navigate(['/roomlist']);
            //       localStorage.setItem('nickname', this.LoginForm.controls.pUserName.value);
            //       this.router.navigate(['/Livebidding']);
            //     } 
            //     else{
            //         this.toastr.error("Invalid Credentials", "Error")
            //     }
            //   });
            //venu/////////////
            //venu end/////////////////////
            this._UsersService._loginUser(jsondata).subscribe(function (data) {
                debugger;
                sessionStorage.setItem('currentUser', JSON.stringify(data));
                var type = data["pType"];
                //this.hallallotmentservice.SetBranchDetails(data)
                //this.router.navigate(['/Hallallotment'])
                if (type != "reviewer") {
                    _this.router.navigate(['/Hallallotment']);
                }
                else {
                    _this.router.navigate(['/Reviewer']);
                }
            }, function (error) {
                "";
            });
        }
    };
    UserLoginComponent.prototype.getIP = function () {
        //   this.ip.getIPAddress().subscribe((res:any)=>{
        //     this.ipAddress=res.ip;
        //   });
        // this.ip.getIPAddress().subscribe((res:any)=>{
        //     this.ipAddress=res.ip
        // })
    };
    UserLoginComponent.ctorParameters = function () { return [
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _Services_Common_company_details_service__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailsService"] },
        { type: src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_9__["HallAllotmentService"] },
        { type: src_app_Services_ipaddress_service__WEBPACK_IMPORTED_MODULE_10__["IpaddressService"] }
    ]; };
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/Users/user-login/user-login.component.html")
        })
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/UI/Settings/Users/usersregistration/usersregistration.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/UI/Settings/Users/usersregistration/usersregistration.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VJL1NldHRpbmdzL1VzZXJzL3VzZXJzcmVnaXN0cmF0aW9uL3VzZXJzcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/UI/Settings/Users/usersregistration/usersregistration.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/UI/Settings/Users/usersregistration/usersregistration.component.ts ***!
  \************************************************************************************/
/*! exports provided: UsersregistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersregistrationComponent", function() { return UsersregistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UsersregistrationComponent = /** @class */ (function () {
    function UsersregistrationComponent(_commonService, router, _UsersService, _route, toastr) {
        this._commonService = _commonService;
        this.router = router;
        this._UsersService = _UsersService;
        this._route = _route;
        this.toastr = toastr;
        this.submitted = false;
    }
    UsersregistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._UsersService.GetUsers().subscribe(function (data) {
            _this.Users = data;
        });
        this._UsersService.GetRoles().subscribe(function (data) {
            _this.Roles = data;
        });
        this.RegistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            pEmployeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            pUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            pRoleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            pUserType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('Web', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            pstatusid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0),
            pCreatedby: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this._commonService.pCreatedby),
            pRoleid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0),
            pContactRefID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    };
    UsersregistrationComponent.prototype.getrole = function (event) {
        var value = event.currentTarget.value;
        var selectedOption = this.Users[event.currentTarget.selectedIndex - 1];
        var roleId = 0;
        this.Roles.filter(function (x) { if (x.prolename == selectedOption.pRoleName) {
            roleId = x.proleid;
        } });
        this.RegistrationForm.patchValue({ pRoleid: roleId, pRoleName: selectedOption.pRoleName, pContactRefID: selectedOption.pContactRefID });
        if (selectedOption.pRoleName.length > 0) {
            this.RegistrationForm.controls['pRoleName'].disable();
            var RegistrationData = this.RegistrationForm.getRawValue();
        }
        else {
            this.RegistrationForm.controls['pRoleName'].enable();
        }
    };
    UsersregistrationComponent.prototype.getroleId = function (event) {
        var value = event.currentTarget.value;
        var selectedOption = this.Roles[event.currentTarget.selectedIndex - 1];
        this.RegistrationForm.patchValue({ pRoleid: selectedOption.proleid, pRoleName: selectedOption.prolename });
    };
    UsersregistrationComponent.prototype.SaveRegistration = function () {
        var _this = this;
        this.submitted = true;
        if (this.RegistrationForm.valid) {
            var RegistrationData_1 = this.RegistrationForm.getRawValue();
            var jsondata = JSON.stringify(this.RegistrationForm.value);
            this._UsersService.CheckContactId(this.RegistrationForm.value["pContactRefID"]).subscribe(function (data) {
                if (data == 0) {
                    _this._UsersService.CheckUserName(_this.RegistrationForm.value["pUserName"]).subscribe(function (data) {
                        if (data == 0) {
                            _this._UsersService.SaveRegistaration(RegistrationData_1).subscribe(function (data) {
                                _this.submitted = false;
                                _this.RegistrationForm.reset();
                                _this.RegistrationForm.clearValidators();
                                _this.toastr.success('Success', 'User Registered Successfully !');
                                _this.RegistrationForm.patchValue({ pUserType: 'Web' });
                                _this._UsersService.GetUsers().subscribe(function (data) {
                                    _this.Users = data;
                                });
                            });
                        }
                        else {
                            _this.toastr.warning('warning', 'User Name alredy Exist!');
                        }
                    });
                }
                else {
                    _this.toastr.warning('warning', 'Contact alredy Exist!');
                }
            });
        }
    };
    UsersregistrationComponent.prototype.back = function (url) {
        this.router.navigate(['/' + url]);
    };
    UsersregistrationComponent.ctorParameters = function () { return [
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    UsersregistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usersregistration',
            template: __webpack_require__(/*! raw-loader!./usersregistration.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/Users/usersregistration/usersregistration.component.html"),
            styles: [__webpack_require__(/*! ./usersregistration.component.css */ "./src/app/UI/Settings/Users/usersregistration/usersregistration.component.css")]
        })
    ], UsersregistrationComponent);
    return UsersregistrationComponent;
}());



/***/ }),

/***/ "./src/app/UI/Settings/Users/usersview/usersview.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/UI/Settings/Users/usersview/usersview.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VJL1NldHRpbmdzL1VzZXJzL3VzZXJzdmlldy91c2Vyc3ZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/UI/Settings/Users/usersview/usersview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/UI/Settings/Users/usersview/usersview.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersviewComponent", function() { return UsersviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UsersviewComponent = /** @class */ (function () {
    function UsersviewComponent(_CommonService, _UsersService, toastr, _router) {
        this._CommonService = _CommonService;
        this._UsersService = _UsersService;
        this.toastr = toastr;
        this._router = _router;
        this.loading = false;
        this.pageSize = 10;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.headerCells = {
            textAlign: 'center'
        };
        this.allData = this.allData.bind(this);
    }
    UsersviewComponent.prototype.ngOnInit = function () {
        this.GetUsers();
    };
    UsersviewComponent.prototype.GetUsers = function () {
        var _this = this;
        this.loading = true;
        this._UsersService.Selectuserview().subscribe(function (data) {
            _this.Usersdata = data;
            _this.Userstempdata = _this.Usersdata;
            _this.loading = false;
        });
    };
    UsersviewComponent.prototype.Resetpassword = function (data) {
        var _this = this;
        var UserName = data.pUserName;
        this._UsersService.Resetpassword(UserName).subscribe(function (data) {
            _this.toastr.success("Successfully Password Reset", "Success");
        });
    };
    UsersviewComponent.prototype.Userrights = function (data) {
        var UserName = '';
        var UserorDesignation = data.pUserorDesignation;
        if (UserorDesignation == 'Designation') {
            UserName = data.pRoleName;
        }
        else {
            UserName = data.pUserName;
        }
        var Userdata = { 'Type': UserorDesignation, 'UserName': UserName };
        this._router.navigate(['/UserRights']);
        this._CommonService._SetUserrightsView(Userdata);
    };
    UsersviewComponent.prototype.status = function (data) {
        var _this = this;
        var status = data.pActiveorInactive;
        var userid = data.pUserID;
        if (status == true) {
            status = false;
        }
        else {
            status = true;
        }
        this._UsersService.Status(userid, status).subscribe(function (data) {
            _this.GetUsers();
            _this.toastr.success("Successfully Status Updated", "Success");
        });
    };
    UsersviewComponent.prototype.onFilter = function (inputValue) {
        this.Usersdata = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_4__["process"])(this.Userstempdata, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'pEmployeeName',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'pUserName',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'pUserID',
                        operator: 'contains',
                        value: inputValue
                    }
                ],
            }
        }).data;
    };
    UsersviewComponent.prototype.allData = function () {
        var result = {
            data: Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_4__["process"])(this.Usersdata, { sort: [{ field: 'pUserName', dir: 'desc' }] }).data
        };
        return result;
    };
    UsersviewComponent.ctorParameters = function () { return [
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    UsersviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usersview',
            template: __webpack_require__(/*! raw-loader!./usersview.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/Users/usersview/usersview.component.html"),
            styles: [__webpack_require__(/*! ./usersview.component.css */ "./src/app/UI/Settings/Users/usersview/usersview.component.css")]
        })
    ], UsersviewComponent);
    return UsersviewComponent;
}());



/***/ }),

/***/ "./src/app/UI/Settings/add-menu/add-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/UI/Settings/add-menu/add-menu.component.ts ***!
  \************************************************************/
/*! exports provided: AddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuComponent", function() { return AddMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _Services_Settings_menu_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/Settings/menu-modules.service */ "./src/app/Services/Settings/menu-modules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");









var AddMenuComponent = /** @class */ (function () {
    function AddMenuComponent(fb, _CommonService, _MenuModulesService, router, toastr) {
        this.fb = fb;
        this._CommonService = _CommonService;
        this._MenuModulesService = _MenuModulesService;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.routertep = [];
        this.allroters = [];
        this.submitted = false;
        this.issubmitted = false;
        this.pageSize = 10;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.headerCells = {
            textAlign: 'center'
        };
        this.allData = this.allData.bind(this);
    }
    AddMenuComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.AddModuleForm = this.fb.group({
            pModulename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pModuleId: [''],
            pSubmoduleId: [''],
            pSubmodulename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pFunctionname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pFunctionurl: [''],
            pIsfunctionshowinNavigation: [''],
            pIsFunctionshowinRoles: [''],
            ptypeofoperation: [''],
            pCreatedby: ['']
        });
        this.ModuleForm = this.fb.group({
            pModulename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pCreatedby: ['']
        });
        this.SubModuleForm = this.fb.group({
            pCreatedby: [''],
            pSubmodulename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pModuleId: [''],
            pModulename: ['']
        });
        this.GetallModules();
        this.GetNavigation();
        this.routertep = this.router.config[1].children;
        var officersIds = [];
        this.routertep.forEach(function (officer) {
            officersIds.push({ 'path': officer.path, 'componentName': officer.component.name });
        });
        $("#contactsaa").kendoMultiColumnComboBox({
            dataTextField: "path",
            dataValueField: "path",
            height: 400,
            columns: [
                { field: "path", title: "Path Name", width: 200 },
                { field: "componentName", title: "Component Name", width: 500 },
            ],
            footerTemplate: 'Total #: instance.dataSource.total() # items found',
            filter: "contains",
            filterFields: ["path"],
            dataSource: officersIds,
            select: this.SelectPath,
        });
    };
    AddMenuComponent.prototype.GetallModules = function () {
        var _this = this;
        this._MenuModulesService.GetModules().subscribe(function (data) {
            _this.Modulesdata = data;
        });
    };
    AddMenuComponent.prototype.GetNavigation = function () {
        var _this = this;
        this.loading = true;
        this._MenuModulesService.GetNavigation().subscribe(function (data) {
            _this.Navigationdata = data;
            _this.Navigationtempdata = _this.Navigationdata;
            _this.loading = false;
        });
    };
    AddMenuComponent.prototype.OpenModel = function () {
        this.submitted = false;
        this.issubmitted = false;
        this.ModuleForm.reset();
        $('#add-detail').modal('show');
    };
    AddMenuComponent.prototype.ModelSave = function () {
        var _this = this;
        this.issubmitted = true;
        if (this.ModuleForm.valid) {
            this.ModuleForm.controls.pCreatedby.setValue(this._CommonService.pCreatedby);
            var data = JSON.stringify(this.ModuleForm.value);
            var ModuleTitle = this.ModuleForm.value.pModulename;
            this._MenuModulesService.CheckDuplicatesModule(ModuleTitle).subscribe(function (count) {
                if (count) {
                    _this.toastr.info("Module name already exist", "Info");
                    _this.ModuleForm.reset();
                    // $('#add-detail').modal('hide');
                    // this.toastr.error("Module Name Already Exist", "Exist");
                }
                else {
                    _this._MenuModulesService.saveModuleTitle(data).subscribe(function (res) {
                        _this.GetallModules();
                        _this.toastr.success("Saved Successfully", "Success");
                        $('#add-detail').modal('hide');
                    });
                }
            });
        }
    };
    AddMenuComponent.prototype.SelectModule = function (modaldata) {
        this.modalid = modaldata.target.value;
        this.modalname = modaldata.target.options[modaldata.target.selectedIndex].text;
        this.loadSubModule(this.modalid);
    };
    AddMenuComponent.prototype.OpenSubModel = function () {
        this.issubmitted = false;
        this.submitted = false;
        this.SubModuleForm.reset();
        if (this.modalname == '' || typeof this.modalname === 'undefined') {
            this.toastr.info("Please select module name", "Info");
        }
        else {
            this.SubModuleForm.controls.pModuleId.setValue(this.modalid);
            this.SubModuleForm.controls.pModulename.setValue(this.modalname);
            this.SubModuleForm.controls.pCreatedby.setValue(this._CommonService.pCreatedby);
            $('#add-submodule').modal('show');
        }
    };
    AddMenuComponent.prototype.loadSubModule = function (modalnameid) {
        var _this = this;
        this._MenuModulesService.SubModuleTitle(modalnameid).subscribe(function (res) {
            _this.SubModulesdata = res;
        });
    };
    AddMenuComponent.prototype.SubModelSave = function () {
        var _this = this;
        this.issubmitted = true;
        if (this.SubModuleForm.valid) {
            var data = JSON.stringify(this.SubModuleForm.value);
            var Modulename = this.SubModuleForm.value.pModulename;
            var Submodulename = this.SubModuleForm.value.pSubmodulename;
            this._MenuModulesService.CheckDuplicatesSubModule(Modulename, Submodulename).subscribe(function (count) {
                if (count) {
                    _this.toastr.info("Sub module name already exist", "Info");
                    _this.SubModuleForm.controls.pSubmodulename.reset();
                }
                else {
                    _this._MenuModulesService.saveSubModuleTitle(data).subscribe(function (res) {
                        _this.loadSubModule(_this.modalid);
                        _this.toastr.success("Saved Successfully", "Success");
                        $('#add-submodule').modal('hide');
                    });
                }
            });
        }
    };
    AddMenuComponent.prototype.SelectsubModule = function (submodaldata) {
        this.submodalid = submodaldata.target.value;
        this.submodalname = submodaldata.target.options[submodaldata.target.selectedIndex].text;
    };
    AddMenuComponent.prototype.SelectPath = function (path) {
        if (path.dataItem != undefined) {
            this.selectedValue = path.dataItem.path.toString();
            localStorage.setItem('Value', this.selectedValue);
        }
        else {
            localStorage.setItem('Value', '');
        }
    };
    AddMenuComponent.prototype.AddMenu = function () {
        var _this = this;
        this.submitted = true;
        if (this.AddModuleForm.valid) {
            this.AddModuleForm.controls.pCreatedby.setValue(this._CommonService.pCreatedby);
            this.AddModuleForm.controls.pModuleId.setValue(this.modalid);
            this.AddModuleForm.controls.pModulename.setValue(this.modalname);
            this.AddModuleForm.controls.pSubmoduleId.setValue(this.submodalid);
            this.AddModuleForm.controls.pSubmodulename.setValue(this.submodalname);
            var pathname = localStorage.getItem('Value');
            if (pathname != '') {
                pathname = '/' + pathname;
                this.AddModuleForm.controls.pFunctionurl.setValue(pathname);
                localStorage.setItem('Value', '');
                var ShowinNavigation = this.AddModuleForm.value['pIsfunctionshowinNavigation'];
                if (ShowinNavigation == '') {
                    this.AddModuleForm.controls.pIsfunctionshowinNavigation.setValue(false);
                }
                var AllowRoles = this.AddModuleForm.value['pIsFunctionshowinRoles'];
                if (AllowRoles == '') {
                    this.AddModuleForm.controls.pIsFunctionshowinRoles.setValue(false);
                }
                this.AddModuleForm.controls.ptypeofoperation.setValue('create');
                var data = JSON.stringify(this.AddModuleForm.value);
                this._MenuModulesService.saveMenu(data).subscribe(function (res) {
                    _this.AddModuleForm.reset();
                    _this.submitted = false;
                    _this.toastr.success("Saved Successfully", "Success");
                    _this.GetNavigation();
                });
            }
            else {
                this.toastr.info("Select Form Url", "Info");
            }
        }
    };
    AddMenuComponent.prototype.NavigationDelete = function (dataItem) {
        var _this = this;
        var createdby = this._CommonService.pCreatedby;
        var pFunctionId = dataItem.pFunctionId;
        var ptypeofoperation = 'delete';
        var data = JSON.stringify({ "pCreatedby": createdby, "pFunctionId": pFunctionId, "ptypeofoperation": ptypeofoperation });
        this._MenuModulesService.DeleteMenu(data).subscribe(function (res) {
            _this.toastr.success("Menu deleted successfully", "Success");
            _this.GetNavigation();
        });
    };
    AddMenuComponent.prototype.ClearAddMenu = function () {
        this.submitted = false;
        this.issubmitted = false;
        this.modalname = '';
        this.ModuleForm.reset();
        this.SubModuleForm.reset();
        this.AddModuleForm.reset();
    };
    AddMenuComponent.prototype.ModuleTitle = function (event) {
        if (event.getModifierState("CapsLock")) {
            this.IsCapsWarning = true;
        }
        else {
            this.IsCapsWarning = false;
        }
    };
    Object.defineProperty(AddMenuComponent.prototype, "errorsModuleForm", {
        get: function () { return this.ModuleForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMenuComponent.prototype, "errorsSubModuleForm", {
        get: function () { return this.SubModuleForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMenuComponent.prototype, "errorsAddModuleForm", {
        get: function () { return this.AddModuleForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddMenuComponent.prototype.CloseModel = function () {
        this.ModuleForm.reset();
        this.SubModuleForm.reset();
        $('#add-detail').modal('hide');
        $('#add-submodule').modal('hide');
    };
    AddMenuComponent.prototype.Clear = function () {
        this.submitted = false;
        this.issubmitted = false;
        this.ModuleForm.reset();
        this.SubModuleForm.reset();
    };
    AddMenuComponent.prototype.onFilter = function (inputValue) {
        this.Navigationdata = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_7__["process"])(this.Navigationtempdata, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'pModulename',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'pSubmodulename',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'pFunctionname',
                        operator: 'contains',
                        value: inputValue
                    }
                ],
            }
        }).data;
        this.dataBinding.skip = 0;
    };
    AddMenuComponent.prototype.allData = function () {
        var result = {
            data: Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_7__["process"])(this.Navigationdata, { sort: [{ field: 'pVchapplicationid', dir: 'desc' }] }).data
        };
        return result;
    };
    AddMenuComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _Services_Settings_menu_modules_service__WEBPACK_IMPORTED_MODULE_4__["MenuModulesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__["DataBindingDirective"], { static: true })
    ], AddMenuComponent.prototype, "dataBinding", void 0);
    AddMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-menu',
            template: __webpack_require__(/*! raw-loader!./add-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/add-menu/add-menu.component.html")
        })
    ], AddMenuComponent);
    return AddMenuComponent;
}());



/***/ }),

/***/ "./src/app/UI/Settings/user-rights/user-rights.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/UI/Settings/user-rights/user-rights.component.ts ***!
  \******************************************************************/
/*! exports provided: UserRightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRightsComponent", function() { return UserRightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var _Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/Settings/Users/Users.service */ "./src/app/Services/Settings/Users/Users.service.ts");
/* harmony import */ var _Services_Settings_menu_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/Settings/menu-modules.service */ "./src/app/Services/Settings/menu-modules.service.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var UserRightsComponent = /** @class */ (function () {
    function UserRightsComponent(_CommonService, _UsersService, _MenuModulesService, toastr) {
        this._CommonService = _CommonService;
        this._UsersService = _UsersService;
        this._MenuModulesService = _MenuModulesService;
        this.toastr = toastr;
        this.groups = [{ field: 'pmodulename' }, { field: 'psubmodulename' }];
        this.loading = false;
        this.Designationsview = false;
        this.Usersview = false;
        this.checkboxview = false;
    }
    UserRightsComponent.prototype.ngOnInit = function () {
        var selectuser = this._CommonService._GetUserrightsView();
        var UserName = selectuser['UserName'];
        this.Selectdata = '';
        this.Designationsview = true;
        this.UserOrDesignation = '';
        this.errormessage = "Select Designation";
        this.GetRoles();
        this.GetAllEmployees();
        if (UserName == undefined) {
            this.GetNavigation('', '');
            this.Type = 'Designation';
        }
        else {
            this.Type = selectuser['Type'];
            if (this.Type == 'Designation') {
                this.UserOrDesignation = UserName;
                this.Selectdata = UserName;
                this.Designationsview = true;
                this.Usersview = false;
            }
            if (this.Type == 'User') {
                this.UserOrDesignation = UserName;
                this.Selectdata = UserName;
                this.Usersview = true;
                this.Designationsview = false;
            }
            this.GetNavigation(this.Type, UserName);
        }
    };
    UserRightsComponent.prototype.GetRoles = function () {
        var _this = this;
        this._UsersService.GetRoles().subscribe(function (data) {
            _this.Rolesdata = data;
        });
    };
    UserRightsComponent.prototype.GetAllEmployees = function () {
        var _this = this;
        this._UsersService.SelectUser().subscribe(function (data) {
            _this.Userdata = data;
        });
    };
    UserRightsComponent.prototype.GetNavigation = function (Type, UserOrDesignation) {
        var _this = this;
        this.loading = true;
        this._UsersService.GetNavigation(Type, UserOrDesignation).subscribe(function (data) {
            _this.Navigationdata = data['functionsDTOList'];
            _this.Navigationtempdata = _this.Navigationdata;
            _this.loading = false;
        });
    };
    UserRightsComponent.prototype.DesignationClick = function () {
        this.UserOrDesignation = '';
        this.Type = 'Designation';
        this.errormessage = "Select Designation";
        this.Designationsview = true;
        this.Usersview = false;
        this.GetNavigation('', '');
    };
    UserRightsComponent.prototype.UsersClick = function () {
        this.UserOrDesignation = '';
        this.Type = 'User';
        this.errormessage = "Select Users";
        this.Usersview = true;
        this.Designationsview = false;
        this.GetNavigation('', '');
    };
    UserRightsComponent.prototype.SelectDesignation = function (designationdata) {
        this.UserOrDesignation = designationdata.target.value;
        this.Type = 'Designation';
        this.GetNavigation(this.Type, this.UserOrDesignation);
    };
    UserRightsComponent.prototype.SelectUser = function (Userdata) {
        this.UserOrDesignation = Userdata.target.value;
        this.Type = 'User';
        this.GetNavigation(this.Type, this.UserOrDesignation);
    };
    UserRightsComponent.prototype.clickaview = function (data) {
        var view = data.pIsviewpermission;
        if (view == false) {
            data.pIsviewpermission = true;
        }
        else {
            data.pIsviewpermission = false;
            data.pIscreatepermission = false;
            data.pIsupdatepermission = false;
            data.pIsdeletepermission = false;
        }
    };
    UserRightsComponent.prototype.clickacreate = function (data) {
        var view = data.pIscreatepermission;
        if (view == false) {
            data.pIsviewpermission = true;
            data.pIscreatepermission = true;
        }
        else {
            data.pIscreatepermission = false;
        }
    };
    UserRightsComponent.prototype.clickaupdate = function (data) {
        var view = data.pIsupdatepermission;
        if (view == false) {
            data.pIsviewpermission = true;
            data.pIsupdatepermission = true;
        }
        else {
            data.pIsupdatepermission = false;
        }
    };
    UserRightsComponent.prototype.Clickadelete = function (data) {
        var view = data.pIsdeletepermission;
        if (view == false) {
            data.pIsviewpermission = true;
            data.pIsdeletepermission = true;
        }
        else {
            data.pIsdeletepermission = false;
        }
    };
    UserRightsComponent.prototype.Addpermissions = function () {
        var _this = this;
        if (this.UserOrDesignation != '') {
            this.onFilter('');
            var count = this.Navigationdata.filter(function (proj) { return proj.pIsviewpermission === true; }).length;
            if (count != 0) {
                var pCreateby = this._CommonService.pCreatedby;
                var functionsDTOList = this.Navigationdata;
                var data = { "pCreateby": pCreateby, functionsDTOList: functionsDTOList };
                this._UsersService.SaveNavigation(this.Type, this.UserOrDesignation, data).subscribe(function (data) {
                    _this.Designationsview = true;
                    _this.Usersview = false;
                    _this.Selectdata = '';
                    _this.errormessage = "Select Designation";
                    _this.GetRoles();
                    _this.GetAllEmployees();
                    _this.GetNavigation('', '');
                    var user = JSON.parse(sessionStorage.getItem('currentUser'));
                    _this.toastr.success("Saved Successfully", "Success");
                    if (user.pUserName == _this.UserOrDesignation) {
                        _this.UserFormssessionupdate();
                        location.reload();
                    }
                    _this.UserOrDesignation = '';
                    _this.Type = 'Designation';
                });
            }
            else {
                this.toastr.info("Please select permission", "Info");
            }
        }
        else {
            this.toastr.info(this.errormessage, "Info");
        }
    };
    UserRightsComponent.prototype.UserFormssessionupdate = function () {
        var _this = this;
        this._UsersService._getUserForms(this.Type, this.UserOrDesignation).subscribe(function (data) {
            sessionStorage.setItem('Urc', JSON.stringify(data));
            _this._CommonService._setPcreatedby();
        });
    };
    UserRightsComponent.prototype.onFilter = function (inputValue) {
        this.Navigationdata = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__["process"])(this.Navigationtempdata, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'pmodulename',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'psubmodulename',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'pFunctionName',
                        operator: 'contains',
                        value: inputValue
                    }
                ],
            }
        }).data;
    };
    UserRightsComponent.ctorParameters = function () { return [
        { type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _Services_Settings_Users_Users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
        { type: _Services_Settings_menu_modules_service__WEBPACK_IMPORTED_MODULE_4__["MenuModulesService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    UserRightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-rights',
            template: __webpack_require__(/*! raw-loader!./user-rights.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/Settings/user-rights/user-rights.component.html")
        })
    ], UserRightsComponent);
    return UserRightsComponent;
}());



/***/ }),

/***/ "./src/app/UI/User/live-bidding/drawspinner.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/UI/User/live-bidding/drawspinner.component.ts ***!
  \***************************************************************/
/*! exports provided: DrawspinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawspinnerComponent", function() { return DrawspinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-wheel */ "./node_modules/ngx-wheel/fesm5/ngx-wheel.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Hall-Allotment/hall-allotment.service */ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts");
/* harmony import */ var src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/livebidding.service */ "./src/app/Services/livebidding.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);









var $;
var DrawspinnerComponent = /** @class */ (function () {
    function DrawspinnerComponent(commonservice, datepipe, livebiddingservice, hallallotmentservice) {
        this.commonservice = commonservice;
        this.datepipe = datepipe;
        this.livebiddingservice = livebiddingservice;
        this.hallallotmentservice = hallallotmentservice;
        this.chatreference = firebase__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('chats/');
        this.emitevent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.chats = [];
        this.spinstatus = false;
        this.disabledforButtons = true;
        this.drawtickets = [];
        this.getspindata();
    }
    DrawspinnerComponent.prototype.ngOnInit = function () {
        debugger;
        this.branchdata = this.hallallotmentservice.GetBranchDetails();
        console.log("usertype", this.usertype);
        this.usertype == 'walkin-client' ? this.disablespin = false : this.disablespin = true;
        this.disabledforButtons = this.usertype == 'walkin-client' ? true : false;
        if (this.usertype == 'walkin-client') {
            this.disabledforButtons = this.branchdata.pType == 'reviewer' ? false : true;
        }
        this.drawtickets = this.livebiddingservice.getDrawticketnumbers();
        this.idToLandOn = this.drawtickets[Math.floor(Math.random() * this.drawtickets.length)];
        var meetingdata = this.livebiddingservice.getMeetingid();
        this.meetingid = meetingdata.meetingid;
        this.auctioneer = meetingdata.Auctioneername;
        this.drawticketslength = this.drawtickets.length;
        this.SetWheel();
        this.GetIdtolandon();
        this.getspindata();
    };
    DrawspinnerComponent.prototype.GetIdtolandon = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('ShowSpinner/').orderByChild('meetingId').equalTo(this.meetingid).once('value', function (snapshot) {
            var data = [];
            debugger;
            data = snapshot.exists() ? _this.commonservice.ConvertfirebaseDataToArray(snapshot) : [];
            data = data.filter(function (item) { return item.meetingId == _this.meetingid; });
            _this.idToLandOn = data[0].idToLandOn;
        });
    };
    DrawspinnerComponent.prototype.SetWheel = function () {
        // const colors = ['#FF0000', '#000000']
        var colors = ['#3f51b5', '#673ab7', '#9c27b0"', '#e91e63', '#f44336', '#ff5722', '#ff9800', '#ffc107', '#ffeb3b', '#8bc34a', '#4caf50', '#009688', '#00bcd4', '#03a9f4', '#2196f3'];
        debugger;
        var j = 0;
        this.items = [];
        for (var i = 0; i < this.drawtickets.length; i++) {
            debugger;
            if (Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(colors[j])) {
                j = 0;
            }
            var data = { fillStyle: colors[j], text: "" + this.drawtickets[i], id: this.drawtickets[i], textFillStyle: 'white',
                textFontSize: '16' };
            this.items.push(data);
            j = j + 1;
        }
        //   this.items = this.drawtickets.map((value,index) => ({
        //     fillStyle:colors[value % 2],
        //     text: `${value}`,
        //     id: value,
        //     textFillStyle: 'white',
        //     textFontSize: '16'
        //   }))
        console.log("colorscode", this.items);
    };
    DrawspinnerComponent.prototype.before = function () {
    };
    DrawspinnerComponent.prototype.after = function (text) {
        console.log("spin", text);
        // firebase.database().ref('spinstart/').child(this.key).remove();
        firebase__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('spinstart/').child(this.key).remove();
        this.emitevent.emit(text);
        debugger;
    };
    DrawspinnerComponent.prototype.Spinwheel = function () {
        debugger;
        this.spinstatus = true;
        var data = { spinstartdate: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss'), spinstatus: true, meetingid: this.meetingid };
        var newMessage = firebase__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('spinstart/').push();
        newMessage.set(data);
    };
    DrawspinnerComponent.prototype.spin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 0); })];
                    case 1:
                        _a.sent();
                        this.wheel.spin();
                        return [2 /*return*/];
                }
            });
        });
    };
    DrawspinnerComponent.prototype.getspindata = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this.meetingid)) {
            firebase__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('spinstart/').on('value', function (resp) {
                debugger;
                var data = resp.exists() ? _this.commonservice.ConvertfirebaseDataToArray(resp) : [];
                data = data.filter(function (item) { return item.meetingid == _this.meetingid; });
                _this.spinstatus = data.length > 0 ? data[0].spinstatus : false;
                if (_this.spinstatus) {
                    _this.key = data[0].key;
                    _this.spin();
                }
            });
        }
    };
    DrawspinnerComponent.ctorParameters = function () { return [
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_7__["LivebiddingService"] },
        { type: src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_6__["HallAllotmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], DrawspinnerComponent.prototype, "usertype", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], DrawspinnerComponent.prototype, "emitevent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ngx_wheel__WEBPACK_IMPORTED_MODULE_4__["NgxWheelComponent"], { static: false })
    ], DrawspinnerComponent.prototype, "wheel", void 0);
    DrawspinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-drawspinner',
            template: __webpack_require__(/*! raw-loader!./drawspinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/User/live-bidding/drawspinner.component.html")
        })
    ], DrawspinnerComponent);
    return DrawspinnerComponent;
}());



/***/ }),

/***/ "./src/app/UI/User/live-bidding/live-bidding.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/UI/User/live-bidding/live-bidding.component.ts ***!
  \****************************************************************/
/*! exports provided: LiveBiddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveBiddingComponent", function() { return LiveBiddingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/common.service */ "./src/app/Services/common.service.ts");
/* harmony import */ var src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/livebidding.service */ "./src/app/Services/livebidding.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/Hall-Allotment/hall-allotment.service */ "./src/app/Services/Hall-Allotment/hall-allotment.service.ts");
/* harmony import */ var _progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid/dist/es2015/utils */ "./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");
/* harmony import */ var src_app_Services_ipaddress_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/ipaddress.service */ "./src/app/Services/ipaddress.service.ts");













var LiveBiddingComponent = /** @class */ (function () {
    function LiveBiddingComponent(router, commonservice, formBuilder, datepipe, toastr, activatedroute, livebiddingservice, ip, hallallotmentservice) {
        this.router = router;
        this.commonservice = commonservice;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.toastr = toastr;
        this.activatedroute = activatedroute;
        this.livebiddingservice = livebiddingservice;
        this.ip = ip;
        this.hallallotmentservice = hallallotmentservice;
        this.chatreference = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('chats/');
        this.countdowntime = 0;
        this.maxdiscountallowed = 0;
        this.LeftTime = 0;
        this.addingnumber = "";
        this.details = [];
        this.array = [];
        this.ticketdetails = [];
        this.drawticketnos = [];
        this.unique = [];
        this.chats = [];
        this.index1 = 0;
        this.index2 = 0;
        this.scrolltop = null;
        this.spinnercalled = false;
        this.disabledforButtons = false;
        this.spinnerLoadingstatus = false;
        this.showcomments = false;
        this.showbadge = false;
        this.prettyConfig = { leftTime: 0, format: 'm:ss', prettyText: function (text) { return text; }, };
        /////////////  Get Chat details  /////////////////////////////////////
        this.GetChatDatabyMeetingid();
        //////////////  Get Participants details /////////////////////////////
        this.Getparticipants();
        ///////////show spinner/////////////////////////
        this.ShowSpinnerpopup();
        ///////////show success/////////////////////////
        this.ShowSuccesspopup();
    }
    LiveBiddingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chathistoryform = this.formBuilder.group({
            'amount': [null]
        });
        this.branchdata = this.hallallotmentservice.GetBranchDetails();
        this.activatedroute.queryParams.subscribe(function (params) { _this.ChitNo = params['id']; });
        this.DisableFields(false);
        this.GetIpaddress();
        this.spinnercalled = false;
        if (this.ChitNo != null) {
            this.usertype = 'online-client';
            this.showcomments = false;
            this.getsubscriberdetails(this.ChitNo);
            document.getElementById("disablewalkinclients").disabled = true;
        }
        else {
            this.showcomments = this.branchdata.pType == 'reviewer' ? false : true;
            this.ticketdetails = this.livebiddingservice.GetTicketDetails();
            this.groupcode = this.branchdata.pType == 'reviewer' ? this.livebiddingservice.GetReviwerGroup() : this.ticketdetails.groupcode;
            this.GetGroupAuctionDetails();
        }
        var maxamountarray = this.chats.filter(function (item) { return item.biddamount == _this.maxamount && item.meetingId == _this.meetingid; });
        this.unique = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](new Set(maxamountarray.map(function (item) { return item.ticketNo; })));
    };
    LiveBiddingComponent.prototype.GetChatDatabyMeetingid = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.meetingid)) {
            this.chatreference.orderByChild('meetingId').equalTo(this.meetingid).on('value', function (resp) {
                debugger;
                _this.chats = [];
                _this.chats = _this.commonservice.ConvertfirebaseDataToArray(resp);
                _this.chats = _this.chats.filter(function (item) { return item.meetingId == _this.meetingid; });
                _this.maxamount = _this.chats.length > 0 ? Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.chats.map(function (_a) {
                    var biddamount = _a.biddamount;
                    return biddamount;
                }))) : 0;
                if (_this.chats.length > 0) {
                    // | sortingPipe:'biddamount'
                    _this.chats = _this.chats.sort(function (a, b) {
                        return (b.biddamount - a.biddamount);
                    });
                    //           var objDiv = <HTMLInputElement>document.getElementById("bidscroll");
                    // objDiv.scrollTop = objDiv.scrollHeight;
                    //    this.chats.sort((a, b) =>(<any>new Date(a.livedate) ><any>new Date(b.livedate) ? -1 : 1));
                    //this.chats.sort((a, b) => 0 - (a > b ? -1 : 1));
                    var maxamountarray = _this.chats.filter(function (item) { return item.biddamount == _this.maxamount && item.meetingId == _this.meetingid; });
                    _this.unique = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](new Set(maxamountarray.map(function (item) { return item.ticketNo; })));
                    console.log("unique", _this.unique);
                    _this.drawticketnos = _this.unique;
                    _this.ticketlength = _this.unique.length;
                    if (_this.unique.length == 1) {
                        _this.drawticketno = _this.unique[0];
                    }
                    _this.maxticketno = _this.chats.filter(function (s) { return s.biddamount == _this.maxamount; })[0].ticketNo;
                    // if (!isNullOrUndefined(this.chathistoryform))
                    _this.chathistoryform.controls.amount.setValue(_this.commonservice.currencyformat(_this.maxamount));
                }
            });
        }
    };
    LiveBiddingComponent.prototype.Getparticipants = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.meetingid)) {
            firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('userinfo/').orderByChild('meetingId').equalTo(this.meetingid).on('value', function (snapshot) {
                debugger;
                var unserinfodata = [];
                unserinfodata = snapshot.exists() ? _this.commonservice.ConvertfirebaseDataToArray(snapshot) : [];
                unserinfodata = unserinfodata.filter(function (item) { return item.meetingId == _this.meetingid; });
                _this.participantscount = unserinfodata.length;
                _this.onlineparticipants = !Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(_this.meetingid) ? unserinfodata.filter(function (item) { return item.meetingId == _this.meetingid && item.subscribertype == "online client"; }) : [];
                _this.walkinparticipants = !Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(_this.meetingid) ? unserinfodata.filter(function (item) { return item.meetingId == _this.meetingid && item.subscribertype == "walkin client"; }) : [];
                console.log("online", _this.onlineparticipants);
                console.log("walkin", _this.walkinparticipants);
                _this.onlineparticipantslength = _this.onlineparticipants.length;
                _this.walkinparticipantslength = _this.walkinparticipants.length;
            });
        }
    };
    LiveBiddingComponent.prototype.getMaxamount = function () {
        var _this = this;
        this.chatreference.orderByChild('meetingId').equalTo(this.meetingid).once('value', function (resp) {
            debugger;
            var data = [];
            data = _this.commonservice.ConvertfirebaseDataToArray(resp);
            data = _this.chats.filter(function (item) { return item.meetingId == _this.meetingid; });
            _this.maxamount = _this.chats.length > 0 ? Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.chats.map(function (_a) {
                var biddamount = _a.biddamount;
                return biddamount;
            }))) : 0;
            _this.chathistoryform.controls.amount.setValue(_this.maxamount == 0 ?
                _this.commonservice.currencyformat(_this.bidamount) : _this.commonservice.currencyformat(_this.maxamount));
        });
    };
    LiveBiddingComponent.prototype.GetGroupAuctionDetails = function () {
        var _this = this;
        debugger;
        var branchname = this.branchdata.pType == 'reviewer' ? this.livebiddingservice.GetReviwerbranch() : this.branchdata.branchname;
        this.livebiddingservice.GetGroupAuctionDetails(this.groupcode, branchname).subscribe(function (json) {
            debugger;
            if (json) {
                document.getElementById("disablewalkinclients").disabled = false;
                _this.DisableFields(true);
                _this.details = json;
                _this.usertype = 'walk-in client';
                if (_this.details != undefined) {
                    _this.groupcode = _this.details.groupcode;
                    _this.chitvalue = _this.details.chitvalue;
                    _this.auctionstarttime = _this.details.auctionstartTime;
                    _this.auctionendtime = _this.details.auctionendTime;
                    _this.auctionstartdate = _this.details.auctionstartDate;
                    _this.auctionenddate = _this.details.auctionendDate;
                    _this.currentDatetime = _this.details.currentdatettime;
                    _this.meetingid = _this.details.meetingId;
                    _this.auctioneer = _this.details.auctioneer;
                    _this.username = _this.details.auctioneer;
                    _this.autionhall = _this.details.auctionHall;
                    _this.maxdiscountallowed = _this.details.maxdiscountamt;
                    _this.bidamount = _this.details.mindiscountamt;
                    _this.branchname = _this.details.branchname;
                    _this.branchid = _this.details.branchId;
                    _this.maxdiscountticketno = _this.details.maxticketno;
                    var date_1 = _this.datepipe.transform(new Date(), 'yyyy-MM-dd');
                    var time_1 = _this.datepipe.transform(new Date(), 'HH:mm');
                    var ipaddress1 = _this.ipAddress;
                    if (_this.branchdata.pType != 'reviewer') {
                        _this.ticketdetails.checkeditems.filter(function (df) {
                            df.logindate = date_1, df.lgintime = time_1,
                                df.auctionstartDate = json["auctionstartDate"], df.auctionendDate = json["auctionendDate"],
                                df.auctionstartTime = json["auctionstartTime"], df.auctionendTime = json["auctionendTime"];
                        });
                        console.log("checkedtimes after save", _this.ticketdetails.checkeditems);
                        firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('dueParticipants/').orderByChild('meetingId').equalTo(_this.meetingid).once('value', function (snapshot) {
                            debugger;
                            var unserinfodata = [];
                            unserinfodata = snapshot.exists() ? _this.commonservice.ConvertfirebaseDataToArray(snapshot) : [];
                            unserinfodata = unserinfodata.filter(function (item) { return item.meetingId == _this.meetingid; });
                            var _loop_1 = function (i) {
                                var checkuserExist = unserinfodata.length > 0 ? unserinfodata.filter(function (s) { return s.ticketNo == _this.ticketdetails.checkeditems[i].ticketNo; }) : [];
                                if (checkuserExist.length == 0) {
                                    var newMessage = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('dueParticipants/').push();
                                    newMessage.set(_this.ticketdetails.checkeditems[i]);
                                }
                            };
                            for (var i = 0; i < _this.ticketdetails.checkeditems.length; i++) {
                                _loop_1(i);
                            }
                        });
                    }
                    else {
                        document.getElementById("disablewalkinclients").disabled = true;
                        _this.DisableFields(true);
                    }
                    _this.getMaxamount();
                    _this.GetCountdowntime();
                    _this.GetChatDatabyMeetingid();
                    _this.Getparticipants();
                    _this.ShowSpinnerpopup();
                    _this.ShowSuccesspopup();
                }
            }
        });
    };
    LiveBiddingComponent.prototype.getsubscriberdetails = function (Chitno) {
        var _this = this;
        this.livebiddingservice.GetSubscriberDetails(Chitno).subscribe(function (json) {
            debugger;
            _this.subscriberdetails = json;
            _this.auctionstartdate = _this.subscriberdetails.auctionstartDate;
            _this.auctionenddate = _this.subscriberdetails.auctionendDate;
            _this.auctionstarttime = _this.subscriberdetails.auctionstartTime;
            _this.auctionendtime = _this.subscriberdetails.auctionendTime;
            _this.currentDatetime = _this.subscriberdetails.currentdatettime;
            _this.meetingid = _this.subscriberdetails.meetingId;
            _this.username = _this.subscriberdetails.subscriberName;
            _this.auctioneer = _this.subscriberdetails.auctioneer;
            _this.autionhall = _this.subscriberdetails.auctionHall;
            _this.maxdiscountallowed = _this.subscriberdetails.maxdiscountamt;
            _this.bidamount = _this.subscriberdetails.mindiscountamt;
            _this.maxdiscountticketno = _this.subscriberdetails.maxticketNo;
            _this.chathistoryform.controls.amount.setValue(_this.commonservice.currencyformat(_this.bidamount));
            console.log("auctionstarttime", _this.subscriberdetails);
            _this.showbadge = true;
            _this.ticketno = _this.subscriberdetails.ticketNo;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(_this.subscriberdetails.ticketNo)) {
                debugger;
                _this.groupcode = _this.subscriberdetails.groupcode;
                _this.chitvalue = _this.subscriberdetails.chitvalue;
                ///////////// check subscriber  exist or not///////////////////////
                firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('userinfo/').orderByChild('logindate').equalTo(_this.datepipe.transform(new Date(), 'yyyy-MM-dd')).once('value', function (snapshot) {
                    debugger;
                    var unserinfodata = [];
                    unserinfodata = snapshot.exists() ? _this.commonservice.ConvertfirebaseDataToArray(snapshot) : [];
                    unserinfodata = unserinfodata.filter(function (item) { return item.meetingId == _this.meetingid; });
                    var checkuserExist = unserinfodata.length > 0 ? unserinfodata.filter(function (s) { return s.ticketNo == _this.subscriberdetails.ticketNo; }) : [];
                    _this.participantscount = unserinfodata.length;
                    if (checkuserExist.length == 0) {
                        _this.subscriberdetails.logindate = _this.datepipe.transform(new Date(), 'yyyy-MM-dd');
                        _this.subscriberdetails.logintime = _this.datepipe.transform(new Date(), 'HH:mm');
                        _this.subscriberdetails.subscribertype = 'online client';
                        var newMessage = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('userinfo/').push();
                        newMessage.set(_this.subscriberdetails);
                    }
                });
            }
            _this.getMaxamount();
            _this.GetCountdowntime();
            _this.GetChatDatabyMeetingid();
            _this.Getparticipants();
            _this.ShowSpinnerpopup();
            _this.ShowSuccesspopup();
        });
    };
    LiveBiddingComponent.prototype.participantchange = function (dataitem, event) {
        if (event.currentTarget.checked) {
            this.subscriberdetails = dataitem;
            this.subscriberdetails.subscribertype = 'walkin client';
            this.DisableFields(false);
        }
    };
    LiveBiddingComponent.prototype.DisableFields = function (disabled) {
        document.getElementById("myFieldset").disabled = disabled;
        document.getElementById("disableamount").disabled = disabled;
        document.getElementById("disableclearbutton").disabled = disabled;
        document.getElementById("disableenterbutton").disabled = disabled;
    };
    LiveBiddingComponent.prototype.Addamount = function () {
        var _this = this;
        debugger;
        var amount = this.commonservice.removeCommasForEntredNumber(this.chathistoryform.controls.amount.value);
        if (this.chats.length > 0) {
            var existlength = this.chats.filter(function (item) { return (item.biddamount == amount) && amount != _this.maxdiscountallowed; }).length;
            if (existlength == 0) {
                this.BeforeAddingToGrid();
            }
            else {
                this.toastr.warning("amount is already exist..", "Warning");
            }
        }
        else if (amount == this.bidamount) {
            this.toastr.warning("amount should be greater than maximum bid offer", "Warning");
        }
        else {
            this.BeforeAddingToGrid();
        }
    };
    LiveBiddingComponent.prototype.BeforeAddingToGrid = function () {
        var _this = this;
        var amount = this.commonservice.removeCommasForEntredNumber(this.chathistoryform.controls.amount.value);
        if (amount < this.bidamount) {
            if (amount < this.maxamount) {
                this.chathistoryform.controls.amount.setValue(this.commonservice.currencyformat(this.maxamount));
            }
            else {
                this.chathistoryform.controls.amount.setValue(this.commonservice.currencyformat(this.bidamount));
            }
            this.toastr.warning("amount should not be less than bidamount..", "Warning");
            this.clearnumbers();
        }
        else if (amount < this.maxamount) {
            this.toastr.warning("amount should not be less than max amount..", "Warning");
            this.chathistoryform.controls.amount.setValue(this.commonservice.currencyformat(this.maxamount));
            this.clearnumbers();
        }
        else if (amount > this.maxdiscountallowed) {
            this.toastr.warning("amount should not be greater than max discount allowed..", "Warning");
            this.chathistoryform.controls.amount.setValue(this.commonservice.currencyformat(this.maxamount));
            this.clearnumbers();
        }
        else {
            var tickentnolength = this.chats.length > 0 ? this.chats.filter(function (item) { return item.ticketNo == _this.subscriberdetails.ticketNo && item.biddamount == amount; }).length : 0;
            if (tickentnolength == 0) {
                this.CheckMaxAmountBeforeAdding();
            }
            else {
                this.toastr.warning("ticket no already exist on max bid Amount..", "Warning");
                this.clearnumbers();
            }
        }
    };
    LiveBiddingComponent.prototype.CheckMaxAmountBeforeAdding = function () {
        var data = this.subscriberdetails;
        // data.livedate = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        data.livedate = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
        data.livetime = this.datepipe.transform(new Date(), 'hh:mm:ss a');
        data.meetingId = this.meetingid;
        data.biddamount = this.commonservice.removeCommasForEntredNumber(this.chathistoryform.controls.amount.value);
        var newMessage = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('chats/').push();
        newMessage.set(data);
        this.clearnumbers();
        var maxamount = Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.chats.map(function (_a) {
            var biddamount = _a.biddamount;
            return biddamount;
        })));
        this.amount = "";
        //this.chathistoryform.controls.amount.setValue(this.commonservice.currencyformat(maxamount))
    };
    LiveBiddingComponent.prototype.clearnumbers = function () {
        debugger;
        this.addingnumber = "";
    };
    LiveBiddingComponent.prototype.clearbutton = function () {
        this.addingnumber = "";
        this.chathistoryform.controls.amount.setValue(this.commonservice.currencyformat(this.maxamount));
    };
    LiveBiddingComponent.prototype.SaveData = function (successbiddetails) {
        debugger;
        //let branchdata=this.hallallotmentservice.GetBranchDetails()
        //console.log("branchdata",branchdata)
        var chathistoryData = { chatdata: this.chats, participantdata: this.onlineparticipants };
        this.chatdata = { branch: this.branchname, groupcode: this.groupcode, auctionendDate: this.auctionstartdate,
            auctionTime: this.auctionstarttime, auctionHall: this.autionhall,
            auctioneer: this.auctioneer, auctionnumber: 1, meetingId: this.meetingid,
            prizedTicket: this.drawticketno, bidoffer: this.maxamount, subscribername: this.successclient,
            mobile: this.mobile, chitvalue: this.chitvalue, bidpayable: this.bidpayble,
            auctionercomment: Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.auctioneercomments) ? "" : this.auctioneercomments,
            chathistory: JSON.stringify(chathistoryData) };
        var data = JSON.stringify(this.chatdata);
        this.livebiddingservice.SaveLiveAuctionHistory(data).subscribe(function (json) {
            debugger;
            if (json) {
                console.log("after saving", json);
                $("#successpopmodal").modal('show');
                var newMessage = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('successfullbid/').push();
                newMessage.set(successbiddetails);
                setTimeout(function () { window.close(); }, 60000);
                // let hallname=btoa(this.autionhall+','+this.branchid+','+this.branchname)
                //  this.router.navigate(['/GroupSelection'], { queryParams: { id: hallname} });
            }
        });
    };
    LiveBiddingComponent.prototype.AuctioneerComments = function (event) {
        debugger;
        this.auctioneercomments = event.target.value;
    };
    LiveBiddingComponent.prototype.AfterDraw = function (event) {
        var _this = this;
        debugger;
        //this.tabIndex=1;
        if (this.usertype == 'walkin-client') {
            var successbiddetails = [];
            this.drawticketno = event;
            var data1 = this.walkinparticipants.filter(function (item) { return item.meetingId == _this.meetingid && item.ticketNo == _this.drawticketno; });
            var data2 = this.onlineparticipants.filter(function (item) { return item.meetingId == _this.meetingid && item.ticketNo == _this.drawticketno; });
            if (data1.length > 0) {
                successbiddetails = data1;
            }
            else if (data2.length > 0) {
                successbiddetails = data2;
            }
            successbiddetails[0].drawticketno = this.drawticketno;
            successbiddetails[0].prizedAmount = this.maxamount;
            this.successclient = successbiddetails[0].subscriberName;
            this.mobile = successbiddetails[0].mobileNO;
            this.bidpayble = successbiddetails[0].chitvalue - this.maxamount;
            //  let data={drawticketno:this.drawticketno}
            if (this.branchdata.pType != 'reviewer') {
                this.SaveData(successbiddetails[0]);
                // const newMessage = firebase.database().ref('successfullbid/').push();
                // newMessage.set(successbiddetails[0]);
                firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('ShowSpinner/').child(this.key).remove();
            }
        }
    };
    LiveBiddingComponent.prototype.UpdateChathistory = function () {
        var comments = Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.auctioneercomments) ? "" : this.auctioneercomments;
        var groucode = this.groupcode;
        var meetingid = this.meetingid;
        this.livebiddingservice.UpdateLiveAuctionHistory(groucode, meetingid, comments).subscribe(function (json) {
            if (json) {
                debugger;
                $("#successpopmodal").modal('hide');
                window.close();
                // setTimeout(()=>{window.close()},30000)
                // let hallname=btoa(this.autionhall+','+this.branchid+','+this.branchname)
                //  this.router.navigate(['/GroupSelection'], { queryParams: { id: hallname} });
            }
        });
    };
    LiveBiddingComponent.prototype.callspinner = function () {
        debugger;
        this.spinnercalled = true;
        this.livebiddingservice.setDrawticketnumbers(this.unique);
        this.usertype = this.ChitNo != null ? 'online-client' : 'walkin-client';
        $("#confirmationmodal").modal('hide');
        this.usertype = this.ChitNo != null ? 'online-client' : 'walkin-client';
        if (this.usertype == 'walkin-client') {
            this.idToLandOn = this.unique[Math.floor(Math.random() * this.unique.length)];
        }
        var data = { meetingId: this.meetingid, spinnercalled: this.spinnercalled, startspin: false, isActive: true, idToLandOn: this.idToLandOn };
        var newMessage = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('ShowSpinner/').push();
        newMessage.set(data);
        // $("#drawwheelmodal").modal('show');
    };
    LiveBiddingComponent.prototype.GetIpaddress = function () {
        var _this = this;
        this.commonservice.getIPAddress().subscribe(function (res) {
            debugger;
            var data3 = res;
            console.log("venu testggg", data3.ip);
            _this.ipAddress = data3.ip;
        }, function (error) {
            _this.commonservice.showErrorMessage(error);
        });
    };
    LiveBiddingComponent.prototype.AddingNumbers = function (event) {
        debugger;
        this.numbertoadd = event.target.text.replace('+ ', '').trim();
        this.addingnumber += this.numbertoadd + "+";
        this.maxamount = this.maxamount == 0 ? this.bidamount : this.maxamount;
        this.textboxvalue = Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.chathistoryform.controls.amount.value) ? this.maxamount : this.chathistoryform.controls.amount.value;
        var b = Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_11__["isNullOrEmptyString"])(this.amount) ? this.maxamount : this.textboxvalue;
        this.amount = this.maxamount;
        if (this.numbertoadd != "" && this.numbertoadd != null) {
            if (this.numbertoadd.toString().includes(',')) {
                this.eventvalue = this.functiontoRemoveCommas(this.numbertoadd);
                this.eventvalue = +this.eventvalue;
            }
            else {
                this.eventvalue = +this.numbertoadd;
            }
        }
        else {
            this.eventvalue = +this.numbertoadd;
        }
        if (b != "" && b != null) {
            if (b.toString().includes(',')) {
                this.formvalue = this.functiontoRemoveCommas(b);
                this.formvalue = +this.formvalue;
            }
            else {
                this.formvalue = +b;
            }
        }
        else {
            this.formvalue = +b;
        }
        var c = this.eventvalue + this.formvalue;
        this.chathistoryform.controls.amount.setValue(this.commonservice.currencyformat(c));
    };
    LiveBiddingComponent.prototype.functiontoRemoveCommas = function (value) {
        var a = value.split(',');
        var b = a.join('');
        var c = b;
        return c;
    };
    LiveBiddingComponent.prototype.GetCountdowntime = function () {
        //////////////Get Auctiondate End time////////////////////////////////
        var _this = this;
        var auctionendtime = new Date(this.auctionenddate).getTime() / 1000;
        console.log("venu timer test", new Date(this.auctionenddate));
        console.log("venu timer venu", new Date(this.currentDatetime));
        //////////////Get current time////////////////////////////////
        var currenttime = new Date(this.currentDatetime).getTime() / 1000;
        this.countdowntime = auctionendtime - currenttime;
        this.countdowntime = this.countdowntime < 0 ? 0 : this.countdowntime;
        var popuptime = new Date(this.auctionenddate);
        popuptime.setSeconds(popuptime.getSeconds() + 5);
        var showpopuptime = new Date(popuptime).getTime() / 1000;
        this.prettyConfig = {
            leftTime: this.countdowntime, format: 'm:ss', prettyText: function (text) {
                _this.LeftTime = convertMinToSec(text);
                _this.circlemover = _this.LeftTime > 0 ? _this.LeftTime + " 283" : "283";
                if (_this.LeftTime <= 0) {
                    debugger;
                    document.getElementById("disablewalkinclients").disabled = true;
                    _this.DisableFields(true);
                    ///display success or confirmation popups after 5 secod=ns
                    setTimeout(function () { _this.DisplaySuccessPopup(); }, 5000);
                }
                else {
                    $("#confirmationmodal").modal('hide');
                }
                return text;
            }
        };
        var convertMinToSec = function (str) {
            var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]((str || '0:0').split(':'), 2), _b = _a[0], mm = _b === void 0 ? '0' : _b, _c = _a[1], ss = _c === void 0 ? '0' : _c;
            var minute = parseInt(mm, 10) || 0;
            var second = parseInt(ss, 10) || 0;
            return (minute * 60) + (second);
        };
    };
    LiveBiddingComponent.prototype.DisplaySuccessPopup = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.meetingid)) {
            this.chatreference.orderByChild('meetingId').equalTo(this.meetingid).on('value', function (resp) {
                debugger;
                var chatsdata = [];
                chatsdata = _this.commonservice.ConvertfirebaseDataToArray(resp);
                chatsdata = _this.chats.filter(function (item) { return item.meetingId == _this.meetingid; });
                _this.maxamount = chatsdata.length > 0 ? Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](chatsdata.map(function (_a) {
                    var biddamount = _a.biddamount;
                    return biddamount;
                }))) : 0;
                _this.maxticketno = chatsdata.filter(function (s) { return s.biddamount == _this.maxamount; })[0].ticketNo;
                if (_this.unique.length > 1) {
                    if (Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(_this.ChitNo)) {
                        var modelshow = _this.branchdata.pType == 'reviewer' ? 'hide' : 'show';
                        $("#confirmationmodal").modal(modelshow);
                    }
                }
                else {
                    debugger;
                    console.log("single draw", _this.unique);
                    var successbiddetails = [];
                    if (_this.chats.length > 0) {
                        _this.drawticketno = _this.maxticketno;
                        var data1 = _this.walkinparticipants.filter(function (item) { return item.meetingId == _this.meetingid && item.ticketNo == _this.drawticketno; });
                        var data2 = _this.onlineparticipants.filter(function (item) { return item.meetingId == _this.meetingid && item.ticketNo == _this.drawticketno; });
                        _this.bidpayble;
                        if (data1.length > 0) {
                            _this.successclient = data1[0].subscriberName;
                            _this.bidpayble = data1[0].chitvalue - _this.maxamount;
                            successbiddetails = data1;
                        }
                        else if (data2.length > 0) {
                            _this.successclient = data2[0].subscriberName;
                            _this.bidpayble = data2[0].chitvalue - _this.maxamount;
                            successbiddetails = data2;
                        }
                        if (_this.usertype == 'walkin-client') {
                            if (_this.branchdata.pType != 'reviewer') {
                                successbiddetails[0].drawticketno = _this.drawticketno;
                                successbiddetails[0].prizedAmount = _this.maxamount;
                                _this.mobile = successbiddetails[0].mobileNO;
                                _this.SaveData(successbiddetails[0]);
                            }
                        }
                    }
                }
            });
        }
    };
    LiveBiddingComponent.prototype.ShowSpinnerpopup = function () {
        var _this = this;
        debugger;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.meetingid)) {
            //firebase.database().ref('ShowSpinner/').orderByChild('meetingId').equalTo(this.meetingid).on('value', resp => {
            firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('ShowSpinner/').orderByChild('meetingId').equalTo(this.meetingid).on('value', function (resp) {
                debugger;
                _this.livebiddingservice.setDrawticketnumbers(_this.unique);
                _this.usertype = _this.ChitNo != null ? 'online-client' : 'walkin-client';
                var meetingiddata = { meetingid: _this.meetingid, Auctioneername: _this.auctioneer };
                _this.livebiddingservice.setMeetingid(meetingiddata);
                var data = resp.exists() ? _this.commonservice.ConvertfirebaseDataToArray(resp) : [];
                data = data.filter(function (item) { return item.meetingId == _this.meetingid; });
                _this.spinnerLoadingstatus = data.length > 0 ? data[0].spinnercalled : false;
                if (_this.spinnerLoadingstatus) {
                    _this.key = data[0].key;
                    _this.tabIndex = 0;
                    $("#drawwheelmodal").modal('show');
                }
            });
        }
    };
    LiveBiddingComponent.prototype.ShowSuccesspopup = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.meetingid)) {
            firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database().ref('successfullbid/').orderByChild('meetingId').equalTo(this.meetingid).on('value', function (resp) {
                debugger;
                var data = resp.exists() ? _this.commonservice.ConvertfirebaseDataToArray(resp) : [];
                data = data.filter(function (item) { return item.meetingId == _this.meetingid; });
                _this.drawticketno = data.length > 0 ? data[0].drawticketno : 0;
                if (_this.drawticketno != 0) {
                    _this.successclient = data[0].subscriberName;
                    _this.bidpayble = data[0].chitvalue - _this.maxamount;
                    setTimeout(function () {
                        $("#drawwheelmodal").modal('hide');
                        $("#successpopmodal").modal('show');
                    }, 5000);
                }
            });
        }
    };
    LiveBiddingComponent.prototype.testconfirmpopup = function () {
        this.ticketlength = 5;
        this.drawticketnos = [2, 5, 6, 4, 8];
        $("#confirmationmodal").modal('show');
    };
    LiveBiddingComponent.prototype.testwheelpopup = function () {
        this.drawticketnos = [2, 5, 6, 4, 8];
        this.livebiddingservice.setDrawticketnumbers(this.drawticketnos);
        this.usertype = 'walkin-client';
        var meetingiddata = { meetingid: "KKA021121120_FJJT26F_28", Auctioneername: "Mrs. PADMAJARANI THURLAPATI" };
        this.livebiddingservice.setMeetingid(meetingiddata);
        this.tabIndex = 0;
        $("#drawwheelmodal").modal('show');
    };
    LiveBiddingComponent.prototype.testsuccesspopup = function () {
        this.drawticketno = 5;
        this.successclient = "Mrs. PADMAJARANI THURLAPATI";
        this.maxamount = 20000;
        this.bidpayble = 1250000;
        $("#successpopmodal").modal('show');
    };
    LiveBiddingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_Services_livebidding_service__WEBPACK_IMPORTED_MODULE_8__["LivebiddingService"] },
        { type: src_app_Services_ipaddress_service__WEBPACK_IMPORTED_MODULE_12__["IpaddressService"] },
        { type: src_app_Services_Hall_Allotment_hall_allotment_service__WEBPACK_IMPORTED_MODULE_10__["HallAllotmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatcontent', { static: false })
    ], LiveBiddingComponent.prototype, "chatcontent", void 0);
    LiveBiddingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-bidding',
            template: __webpack_require__(/*! raw-loader!./live-bidding.component.html */ "./node_modules/raw-loader/index.js!./src/app/UI/User/live-bidding/live-bidding.component.html")
        })
    ], LiveBiddingComponent);
    return LiveBiddingComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var config = {
    ///     Dev   ///
    //  apiKey: "AIzaSyASsf6hvKUeFBaw9IDZFBdQdQoscF3QEgI",
    //  databaseURL: "https://kcf-auction-devs.firebaseio.com",
    ///     live   ///
    apiKey: "AIzaSyC9h3eYWF7nKVCcTIrp5XvoedktAGYmxK0",
    databaseURL: "https://kcf-auction-live.firebaseio.com",
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'finsta-v1';
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getDatepickerConfig, countdownConfigFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDatepickerConfig", function() { return getDatepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countdownConfigFactory", function() { return countdownConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
/* harmony import */ var _Directives_numbersonly_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Directives/numbersonly.directive */ "./src/app/Directives/numbersonly.directive.ts");
/* harmony import */ var _Directives_addressformat_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Directives/addressformat.directive */ "./src/app/Directives/addressformat.directive.ts");
/* harmony import */ var _Directives_charactersonly_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Directives/charactersonly.directive */ "./src/app/Directives/charactersonly.directive.ts");
/* harmony import */ var _Directives_emailpattern_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Directives/emailpattern.directive */ "./src/app/Directives/emailpattern.directive.ts");
/* harmony import */ var _Directives_mycurrency_formatter_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Directives/mycurrency-formatter.directive */ "./src/app/Directives/mycurrency-formatter.directive.ts");
/* harmony import */ var _Directives_newline_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Directives/newline.directive */ "./src/app/Directives/newline.directive.ts");
/* harmony import */ var _Directives_titlecaseword_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Directives/titlecaseword.directive */ "./src/app/Directives/titlecaseword.directive.ts");
/* harmony import */ var _Directives_emailformat_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Directives/emailformat.directive */ "./src/app/Directives/emailformat.directive.ts");
/* harmony import */ var _Directives_enterprisenameformat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Directives/enterprisenameformat */ "./src/app/Directives/enterprisenameformat.ts");
/* harmony import */ var _Directives_two_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Directives/two-digit-decima-number.directive */ "./src/app/Directives/two-digit-decima-number.directive.ts");
/* harmony import */ var _Directives_three_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Directives/three-digit-decima-number.directive */ "./src/app/Directives/three-digit-decima-number.directive.ts");
/* harmony import */ var _Directives_InitCap_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Directives/InitCap.directive */ "./src/app/Directives/InitCap.directive.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _UI_Home_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./UI/Home/dashboard.component */ "./src/app/UI/Home/dashboard.component.ts");
/* harmony import */ var _UI_Home_navigation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./UI/Home/navigation.component */ "./src/app/UI/Home/navigation.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _Pipes_mycurrencypipe_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Pipes/mycurrencypipe.pipe */ "./src/app/Pipes/mycurrencypipe.pipe.ts");
/* harmony import */ var _Directives_roundecimal_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Directives/roundecimal.directive */ "./src/app/Directives/roundecimal.directive.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _UI_Common_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UI/Common/validation-message/validation-message.component */ "./src/app/UI/Common/validation-message/validation-message.component.ts");
/* harmony import */ var _Directives_button_double_click_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Directives/button-double-click.directive */ "./src/app/Directives/button-double-click.directive.ts");
/* harmony import */ var _Directives_alpha_numeric_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Directives/alpha-numeric.directive */ "./src/app/Directives/alpha-numeric.directive.ts");
/* harmony import */ var _Directives_alphanumericcharsonly_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Directives/alphanumericcharsonly.directive */ "./src/app/Directives/alphanumericcharsonly.directive.ts");
/* harmony import */ var _Directives_AlphaNumericWithSpecialCharacters_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Directives/AlphaNumericWithSpecialCharacters.directive */ "./src/app/Directives/AlphaNumericWithSpecialCharacters.directive.ts");
/* harmony import */ var _Directives_time_mask_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Directives/time-mask.directive */ "./src/app/Directives/time-mask.directive.ts");
/* harmony import */ var _Directives_ifsccodevalidator_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Directives/ifsccodevalidator.directive */ "./src/app/Directives/ifsccodevalidator.directive.ts");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/dist/fesm5/index.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @progress/kendo-angular-pdf-export */ "./node_modules/@progress/kendo-angular-pdf-export/dist/fesm5/index.js");
/* harmony import */ var _UI_Settings_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./UI/Settings/add-menu/add-menu.component */ "./src/app/UI/Settings/add-menu/add-menu.component.ts");
/* harmony import */ var _UI_Settings_user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./UI/Settings/user-rights/user-rights.component */ "./src/app/UI/Settings/user-rights/user-rights.component.ts");
/* harmony import */ var _Pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Pipes/number-to-words.pipe */ "./src/app/Pipes/number-to-words.pipe.ts");
/* harmony import */ var _UI_Settings_Users_usersview_usersview_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./UI/Settings/Users/usersview/usersview.component */ "./src/app/UI/Settings/Users/usersview/usersview.component.ts");
/* harmony import */ var _UI_Settings_Users_usersregistration_usersregistration_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./UI/Settings/Users/usersregistration/usersregistration.component */ "./src/app/UI/Settings/Users/usersregistration/usersregistration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _UI_Settings_Users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./UI/Settings/Users/user-login/user-login.component */ "./src/app/UI/Settings/Users/user-login/user-login.component.ts");
/* harmony import */ var _Services_Settings_Users_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./Services/Settings/Users/_helpers/jwt.interceptor */ "./src/app/Services/Settings/Users/_helpers/jwt.interceptor.ts");
/* harmony import */ var _Services_Settings_Users_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./Services/Settings/Users/_helpers/error.interceptor */ "./src/app/Services/Settings/Users/_helpers/error.interceptor.ts");
/* harmony import */ var _Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Services/Settings/Users/_helpers/auth.guard */ "./src/app/Services/Settings/Users/_helpers/auth.guard.ts");
/* harmony import */ var _Directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./Directives/auto-focus.directive */ "./src/app/Directives/auto-focus.directive.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _Directives_remove_zero_directive__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./Directives/remove-zero.directive */ "./src/app/Directives/remove-zero.directive.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _Directives_zero_directive__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Directives/zero.directive */ "./src/app/Directives/zero.directive.ts");
/* harmony import */ var _Directives_decimalwithcurrencyformat_directive__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Directives/decimalwithcurrencyformat.directive */ "./src/app/Directives/decimalwithcurrencyformat.directive.ts");
/* harmony import */ var _Pipes_currencypipewithdecimal_pipe__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./Pipes/currencypipewithdecimal.pipe */ "./src/app/Pipes/currencypipewithdecimal.pipe.ts");
/* harmony import */ var _Pipes_negativevalue_pipe__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./Pipes/negativevalue.pipe */ "./src/app/Pipes/negativevalue.pipe.ts");
/* harmony import */ var _Directives_mutiple_digit_decimal_number_directive__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./Directives/mutiple-digit-decimal-number.directive */ "./src/app/Directives/mutiple-digit-decimal-number.directive.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _Directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./Directives/uppercase.directive */ "./src/app/Directives/uppercase.directive.ts");
/* harmony import */ var _UI_Home_test_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./UI/Home/test.component */ "./src/app/UI/Home/test.component.ts");
/* harmony import */ var _UI_User_live_bidding_live_bidding_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./UI/User/live-bidding/live-bidding.component */ "./src/app/UI/User/live-bidding/live-bidding.component.ts");
/* harmony import */ var _UI_Admin_hall_allotment_hall_allotment_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./UI/Admin/hall-allotment/hall-allotment.component */ "./src/app/UI/Admin/hall-allotment/hall-allotment.component.ts");
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ngx-wheel */ "./node_modules/ngx-wheel/fesm5/ngx-wheel.js");
/* harmony import */ var _UI_Admin_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./UI/Admin/authentication/authentication.component */ "./src/app/UI/Admin/authentication/authentication.component.ts");
/* harmony import */ var _UI_Admin_group_selection_group_selection_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./UI/Admin/group-selection/group-selection.component */ "./src/app/UI/Admin/group-selection/group-selection.component.ts");
/* harmony import */ var _UI_Admin_ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./UI/Admin/ticket-selection/ticket-selection.component */ "./src/app/UI/Admin/ticket-selection/ticket-selection.component.ts");
/* harmony import */ var _UI_User_live_bidding_drawspinner_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./UI/User/live-bidding/drawspinner.component */ "./src/app/UI/User/live-bidding/drawspinner.component.ts");
/* harmony import */ var _Pipes_sorting_pipe_pipe__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./Pipes/sorting-pipe.pipe */ "./src/app/Pipes/sorting-pipe.pipe.ts");
/* harmony import */ var _UI_Admin_Reviewer_reviewer_reviewer_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./UI/Admin/Reviewer/reviewer/reviewer.component */ "./src/app/UI/Admin/Reviewer/reviewer/reviewer.component.ts");
/* harmony import */ var _UI_Reports_AuctionHistoryReport_auction_history_report_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./UI/Reports/AuctionHistoryReport/auction-history-report.component */ "./src/app/UI/Reports/AuctionHistoryReport/auction-history-report.component.ts");
/* harmony import */ var _UI_Common_companydetails_companydetails_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./UI/Common/companydetails/companydetails.component */ "./src/app/UI/Common/companydetails/companydetails.component.ts");
/* harmony import */ var _UI_Reports_prizedsubscribers_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./UI/Reports/prizedsubscribers.component */ "./src/app/UI/Reports/prizedsubscribers.component.ts");








































///

//import { ContextMenuModule } from '@progress/kendo-angular-menu';






































function getDatepickerConfig() {
    return Object.assign(new ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerConfig"](), {
        dateInputFormat: 'DD/MM/YYYY'
    });
}
function countdownConfigFactory() {
    return {};
}
var appRoutes = [
    { path: '', component: _UI_Settings_Users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_51__["UserLoginComponent"] },
    { path: 'auctionhistory', component: _UI_Reports_AuctionHistoryReport_auction_history_report_component__WEBPACK_IMPORTED_MODULE_76__["AuctionHistoryReportComponent"] },
    { path: 'auctiondata', component: _UI_Reports_prizedsubscribers_component__WEBPACK_IMPORTED_MODULE_78__["PrizedsubscribersComponent"] },
    { path: 'Authentication', component: _UI_Admin_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_70__["AuthenticationComponent"] },
    { path: 'Test', component: _UI_Home_test_component__WEBPACK_IMPORTED_MODULE_66__["TestComponent"] },
    { path: 'Livebidding', component: _UI_User_live_bidding_live_bidding_component__WEBPACK_IMPORTED_MODULE_67__["LiveBiddingComponent"] },
    { path: 'Livebidding/:id', component: _UI_User_live_bidding_live_bidding_component__WEBPACK_IMPORTED_MODULE_67__["LiveBiddingComponent"] },
    {
        path: '', component: _UI_Home_navigation_component__WEBPACK_IMPORTED_MODULE_29__["NavigationComponent"],
        children: [
            { path: 'Hallallotment', component: _UI_Admin_hall_allotment_hall_allotment_component__WEBPACK_IMPORTED_MODULE_68__["HallAllotmentComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'Reviewer', component: _UI_Admin_Reviewer_reviewer_reviewer_component__WEBPACK_IMPORTED_MODULE_75__["ReviewerComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'Dashboard', component: _UI_Home_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'GroupSelection', component: _UI_Admin_group_selection_group_selection_component__WEBPACK_IMPORTED_MODULE_71__["GroupSelectionComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'GroupSelection/:id', component: _UI_Admin_group_selection_group_selection_component__WEBPACK_IMPORTED_MODULE_71__["GroupSelectionComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'TicketSelection', component: _UI_Admin_ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_72__["TicketSelectionComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'TicketSelection/:id', component: _UI_Admin_ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_72__["TicketSelectionComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'AddMenu', component: _UI_Settings_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_45__["AddMenuComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'AddMenu/:id', component: _UI_Settings_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_45__["AddMenuComponent"] },
            { path: 'UserRights', component: _UI_Settings_user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_46__["UserRightsComponent"], canActivate: [_Services_Settings_Users_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"]] },
            { path: 'UserRights/:id', component: _UI_Settings_user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_46__["UserRightsComponent"] },
            { path: 'UsersView', component: _UI_Settings_Users_usersview_usersview_component__WEBPACK_IMPORTED_MODULE_48__["UsersviewComponent"] },
            { path: 'UsersRegistration', component: _UI_Settings_Users_usersregistration_usersregistration_component__WEBPACK_IMPORTED_MODULE_49__["UsersregistrationComponent"] },
        ]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"],
                _UI_Home_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                _UI_Home_navigation_component__WEBPACK_IMPORTED_MODULE_29__["NavigationComponent"],
                _Directives_numbersonly_directive__WEBPACK_IMPORTED_MODULE_14__["NumbersonlyDirective"],
                _UI_Settings_Users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_51__["UserLoginComponent"],
                _Directives_addressformat_directive__WEBPACK_IMPORTED_MODULE_15__["AddressformatDirective"],
                _Directives_charactersonly_directive__WEBPACK_IMPORTED_MODULE_16__["CharactersonlyDirective"],
                _Directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_65__["UppercaseDirective"],
                _Directives_emailpattern_directive__WEBPACK_IMPORTED_MODULE_17__["EmailpatternDirective"],
                _Directives_emailformat_directive__WEBPACK_IMPORTED_MODULE_21__["EmailFormatDirective"],
                _Directives_enterprisenameformat__WEBPACK_IMPORTED_MODULE_22__["EnterpriseNameFormatDirective"],
                _Directives_three_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_24__["ThreeDigitDecimaNumberDirective"],
                _Directives_two_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_23__["TwoDigitDecimaNumberDirective"],
                _Directives_mycurrency_formatter_directive__WEBPACK_IMPORTED_MODULE_18__["MycurrencyFormatterDirective"],
                _Directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_65__["UppercaseDirective"],
                _Directives_newline_directive__WEBPACK_IMPORTED_MODULE_19__["NewlineDirective"],
                _Directives_titlecaseword_directive__WEBPACK_IMPORTED_MODULE_20__["TitlecasewordDirective"],
                _UI_Settings_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_45__["AddMenuComponent"],
                _UI_Settings_user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_46__["UserRightsComponent"],
                _Directives_InitCap_directive__WEBPACK_IMPORTED_MODULE_25__["InitCapDirective"],
                _Pipes_mycurrencypipe_pipe__WEBPACK_IMPORTED_MODULE_31__["MycurrencypipePipe"],
                _Directives_ifsccodevalidator_directive__WEBPACK_IMPORTED_MODULE_40__["IfsccodevalidatorDirective"],
                _Directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_55__["AutoFocusDirective"],
                _Directives_roundecimal_directive__WEBPACK_IMPORTED_MODULE_32__["RoundecimalDirective"],
                _UI_Common_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_34__["ValidationMessageComponent"],
                _Directives_button_double_click_directive__WEBPACK_IMPORTED_MODULE_35__["ButtonDoubleClickDirective"],
                _Directives_alpha_numeric_directive__WEBPACK_IMPORTED_MODULE_36__["AlphaNumericDirective"],
                _Directives_alphanumericcharsonly_directive__WEBPACK_IMPORTED_MODULE_37__["AlphanumericcharsonlyDirective"],
                _Directives_AlphaNumericWithSpecialCharacters_directive__WEBPACK_IMPORTED_MODULE_38__["appAlphanumericwithSpecialCharactersDirective"],
                _Directives_time_mask_directive__WEBPACK_IMPORTED_MODULE_39__["TimeMaskDirective"],
                _Pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_47__["NumberToWordsPipe"], _UI_Settings_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_45__["AddMenuComponent"], _UI_Settings_user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_46__["UserRightsComponent"], _UI_Settings_Users_usersview_usersview_component__WEBPACK_IMPORTED_MODULE_48__["UsersviewComponent"], _UI_Settings_Users_usersregistration_usersregistration_component__WEBPACK_IMPORTED_MODULE_49__["UsersregistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_50__["LoginComponent"],
                _UI_Settings_Users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_51__["UserLoginComponent"],
                _Directives_remove_zero_directive__WEBPACK_IMPORTED_MODULE_57__["RemoveZeroDirective"], _Directives_zero_directive__WEBPACK_IMPORTED_MODULE_59__["ZeroDirective"],
                _Directives_decimalwithcurrencyformat_directive__WEBPACK_IMPORTED_MODULE_60__["DecimalwithcurrencyformatDirective"], _Pipes_currencypipewithdecimal_pipe__WEBPACK_IMPORTED_MODULE_61__["CurrencypipewithdecimalPipe"],
                _Pipes_negativevalue_pipe__WEBPACK_IMPORTED_MODULE_62__["NegativevaluePipe"],
                _Directives_mutiple_digit_decimal_number_directive__WEBPACK_IMPORTED_MODULE_63__["MutipleDigitDecimalNumberDirective"],
                _UI_Home_test_component__WEBPACK_IMPORTED_MODULE_66__["TestComponent"],
                _UI_User_live_bidding_live_bidding_component__WEBPACK_IMPORTED_MODULE_67__["LiveBiddingComponent"],
                _UI_Admin_hall_allotment_hall_allotment_component__WEBPACK_IMPORTED_MODULE_68__["HallAllotmentComponent"],
                _UI_Admin_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_70__["AuthenticationComponent"],
                _UI_Admin_group_selection_group_selection_component__WEBPACK_IMPORTED_MODULE_71__["GroupSelectionComponent"],
                _UI_Admin_ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_72__["TicketSelectionComponent"],
                _UI_User_live_bidding_drawspinner_component__WEBPACK_IMPORTED_MODULE_73__["DrawspinnerComponent"],
                _Pipes_sorting_pipe_pipe__WEBPACK_IMPORTED_MODULE_74__["SortingPipePipe"],
                _UI_Admin_Reviewer_reviewer_reviewer_component__WEBPACK_IMPORTED_MODULE_75__["ReviewerComponent"],
                _UI_Reports_AuctionHistoryReport_auction_history_report_component__WEBPACK_IMPORTED_MODULE_76__["AuctionHistoryReportComponent"],
                _UI_Common_companydetails_companydetails_component__WEBPACK_IMPORTED_MODULE_77__["CompanydetailsComponent"],
                _UI_Reports_prizedsubscribers_component__WEBPACK_IMPORTED_MODULE_78__["PrizedsubscribersComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_56__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_43__["AmazingTimePickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_33__["GridModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_58__["NgSelectModule"],
                ngx_wheel__WEBPACK_IMPORTED_MODULE_69__["NgxWheelModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_64__["NgMultiSelectDropDownModule"].forRoot(),
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_33__["ExcelModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_33__["PDFModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_13__["CountdownModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_27__["FilterPipeModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_42__["ContextMenuModule"].forRoot({
                    useBootstrap4: true,
                }), _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_41__["TreeViewModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingModule"].forRoot({}),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                    // timeOut: 1000,
                    positionClass: 'toast-top-right',
                    closeButton: true,
                    preventDuplicates: true
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' }),
                _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_44__["PDFExportModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            providers: [
                { provide: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerConfig"], useFactory: getDatepickerConfig },
                { provide: ngx_countdown__WEBPACK_IMPORTED_MODULE_13__["CountdownGlobalConfig"], useFactory: countdownConfigFactory },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: "en-IN" },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _Services_Settings_Users_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_52__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _Services_Settings_Users_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_53__["ErrorInterceptor"], multi: true },
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_30__["CookieService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _Pipes_negativevalue_pipe__WEBPACK_IMPORTED_MODULE_62__["NegativevaluePipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/assets/appsettings.json":
/*!*************************************!*\
  !*** ./src/assets/appsettings.json ***!
  \*************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"ApiHostUrl\":\"http://localhost:50486/api\"}]");

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    apiURL: 'assets/appsettings.json'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// Test 


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KCF_Auctions\KCF_Auctions_Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map