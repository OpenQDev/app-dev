(window.webpackJsonp=window.webpackJsonp||[]).push([[14,19],{824:function(t,e,n){var content=n(827);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("59e995c8",content,!0,{sourceMap:!1})},826:function(t,e,n){"use strict";n(824)},827:function(t,e,n){var r=n(27)(!1);r.push([t.i,"small[data-v-7e22a679]{font-size:70%}",""]),t.exports=r},828:function(t,e,n){"use strict";n.r(e);n(826);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-100 justify-content-around align-items-center text-center px-2"},[n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Manage"),n("br"),t._v("Permissions\n  ")]),t._v(" "),n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Transfer this"),n("br"),t._v("Permission\n  ")]),t._v(" "),n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Manage"),n("br"),t._v("Bounties\n  ")]),t._v(" "),n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Create"),n("br"),t._v("Proposals\n  ")])])}],!1,null,"7e22a679",null);e.default=component.exports},868:function(t,e,n){var r=n(12),c=n(389).values;r({target:"Object",stat:!0},{values:function(t){return c(t)}})},882:function(t,e,n){"use strict";n.r(e);n(220),n(106),n(21),n(868),n(107);var r=n(1),c=n(14);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{loading:!1,creatingNFT:!1,showSuccess:!1,ethAddress:null,permissions:{MINT:!1,TRANSFER:!1,SET_ISSUE_GOVTOKEN:!1,CREATE_PROPOSAL:!1}}},computed:l(l({},Object(c.b)(["account","modalData"])),{},{btnDisabled:function(){return this.creatingNFT||!this.$web3utils.isAddress(this.ethAddress)||!Object.values(this.permissions).find((function(t){return!0===t}))}}),mounted:function(){this.ethAddress=this.account},methods:{createNFT:function(){var t=this,e=this.modalData;if(e){var n=e.nfts.find((function(e){return e.ownerAddress===t.account&&e.permissions.includes("MINT")}));if(n){var r=[];this.permissions.MINT&&r.push(0),this.permissions.TRANSFER&&r.push(1),this.permissions.SET_ISSUE_GOVTOKEN&&r.push(2),this.permissions.CREATE_PROPOSAL&&r.push(3),this.creatingNFT=!0,this.octobayGovNFT.methods.mintTokenWithPermissions(this.ethAddress,n.id,r,e.tokenAddress).send({from:this.account}).then((function(){t.showSuccess=!0})).finally((function(){t.creatingNFT=!1}))}}}}},d=n(11),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card shadow-sm d-flex flex-column",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"card-body modal-body flex-fill"},[n("h5",{staticClass:"text-center text-muted-light py-3 px-4 m-0"},[t._v("New Permission")]),t._v(" "),n("NFTPermissionLabels"),t._v(" "),n("div",{staticClass:"d-flex justify-content-around align-items-center px-3"},[n("div",{staticClass:"text-center py-2 w-25"},[n("div",{staticClass:"custom-control custom-switch ml-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.permissions.MINT,expression:"permissions['MINT']"}],staticClass:"custom-control-input",attrs:{id:"customSwitch1",type:"checkbox"},domProps:{checked:Array.isArray(t.permissions.MINT)?t._i(t.permissions.MINT,null)>-1:t.permissions.MINT},on:{change:function(e){var n=t.permissions.MINT,r=e.target,c=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&t.$set(t.permissions,"MINT",n.concat([null])):o>-1&&t.$set(t.permissions,"MINT",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.permissions,"MINT",c)}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch1"}})])]),t._v(" "),n("div",{staticClass:"text-center py-2 w-25"},[n("div",{staticClass:"custom-control custom-switch ml-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.permissions.TRANSFER,expression:"permissions['TRANSFER']"}],staticClass:"custom-control-input",attrs:{id:"customSwitch2",type:"checkbox"},domProps:{checked:Array.isArray(t.permissions.TRANSFER)?t._i(t.permissions.TRANSFER,null)>-1:t.permissions.TRANSFER},on:{change:function(e){var n=t.permissions.TRANSFER,r=e.target,c=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&t.$set(t.permissions,"TRANSFER",n.concat([null])):o>-1&&t.$set(t.permissions,"TRANSFER",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.permissions,"TRANSFER",c)}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch2"}})])]),t._v(" "),n("div",{staticClass:"text-center py-2 w-25"},[n("div",{staticClass:"custom-control custom-switch ml-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.permissions.SET_ISSUE_GOVTOKEN,expression:"permissions['SET_ISSUE_GOVTOKEN']"}],staticClass:"custom-control-input",attrs:{id:"customSwitch3",type:"checkbox"},domProps:{checked:Array.isArray(t.permissions.SET_ISSUE_GOVTOKEN)?t._i(t.permissions.SET_ISSUE_GOVTOKEN,null)>-1:t.permissions.SET_ISSUE_GOVTOKEN},on:{change:function(e){var n=t.permissions.SET_ISSUE_GOVTOKEN,r=e.target,c=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&t.$set(t.permissions,"SET_ISSUE_GOVTOKEN",n.concat([null])):o>-1&&t.$set(t.permissions,"SET_ISSUE_GOVTOKEN",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.permissions,"SET_ISSUE_GOVTOKEN",c)}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch3"}})])]),t._v(" "),n("div",{staticClass:"text-center py-2 w-25"},[n("div",{staticClass:"custom-control custom-switch ml-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.permissions.CREATE_PROPOSAL,expression:"permissions['CREATE_PROPOSAL']"}],staticClass:"custom-control-input",attrs:{id:"customSwitch4",type:"checkbox"},domProps:{checked:Array.isArray(t.permissions.CREATE_PROPOSAL)?t._i(t.permissions.CREATE_PROPOSAL,null)>-1:t.permissions.CREATE_PROPOSAL},on:{change:function(e){var n=t.permissions.CREATE_PROPOSAL,r=e.target,c=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&t.$set(t.permissions,"CREATE_PROPOSAL",n.concat([null])):o>-1&&t.$set(t.permissions,"CREATE_PROPOSAL",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.permissions,"CREATE_PROPOSAL",c)}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch4"}})])])]),t._v(" "),n("div",{staticClass:"d-flex flex-column mt-3"},[t._v("\n      Recipient Address\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ethAddress,expression:"ethAddress"}],staticClass:"form-control form-control-lg",attrs:{type:"input"},domProps:{value:t.ethAddress},on:{input:function(e){e.target.composing||(t.ethAddress=e.target.value)}}})])],1),t._v(" "),n("div",{staticClass:"card-body pt-0"},[t.showSuccess?n("div",{staticClass:"alert alert-success border-0"},[n("button",{staticClass:"close text-success",attrs:{type:"button"},on:{click:function(e){t.showSuccess=!1}}},[n("span",[t._v("×")])]),t._v(" "),n("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v("\n      Permission created! :)\n    ")],1):t._e(),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary w-100 shadow-sm",attrs:{disabled:t.btnDisabled},on:{click:function(e){return t.createNFT()}}},[t.creatingNFT?n("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):t._e(),t._v("\n      "+t._s(t.creatingNFT?"Waiting for confirmation...":"Create Permission")+"\n    ")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NFTPermissionLabels:n(828).default})}}]);