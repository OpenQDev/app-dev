(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{838:function(e,t,o){var content=o(849);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(28).default)("869ddd7a",content,!0,{sourceMap:!1})},848:function(e,t,o){"use strict";o(838)},849:function(e,t,o){var r=o(27)(!1);r.push([e.i,".input-with-button[data-v-8d3e2686]{position:relative}.input-with-button input[data-v-8d3e2686]{padding-right:50px}.input-with-button button[data-v-8d3e2686]{position:absolute;right:5px;bottom:5px}",""]),e.exports=r},859:function(e,t,o){"use strict";o.r(t);o(105),o(387);var r=o(1),n=o(14);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var l={data:function(){return{newOracle:{ethAddress:"",name:"",registerJobId:""},oracleUpdating:!1,jobUpdating:!1,addingNewOracle:!1,removingOralce:!1,newOracleJob:{oracle:null,jobName:null,jobId:null,jobFee:null},addingOracleJob:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)(["config","account","oracles"])),methods:{isNewOracleValid:function(){return 42===this.newOracle.ethAddress.length&&this.newOracle.ethAddress.startsWith("0x")&&this.newOracle.name&&32===this.newOracle.registerJobId.length},addNewOracle:function(){var e=this;this.addingNewOracle=!0;this.octobay.methods.addOracle(this.newOracle.ethAddress,this.newOracle.name,["register"],[[this.$web3utils.toHex(this.newOracle.registerJobId),"10000000000000000"]]).send({from:this.account}).then((function(){e.newOracle.ethAddress="",e.newOracle.name="",e.newOracle.registerJobId="",e.$store.dispatch("updateOracles").then((function(){e.addingNewOracle=!1}))}))},updateJobId:function(e,t,o,r){var n=this;r||(r="10000000000000000"),this.oracleUpdating=e,this.jobUpdating=t,this.octobay.methods.setOracleJob(e,t,this.$web3utils.toHex(o),r).send({from:this.account}).then((function(){n.oracleUpdating=!1,n.jobUpdating=!1}))},removeOracle:function(address){var e=this;this.removingOralce=address,this.octobay.methods.removeOracle(address).send({from:this.account}).then((function(){e.$store.dispatch("updateOracles").then((function(){e.removingOralce=!1}))}))},addOracleJob:function(){var e=this;this.addingOracleJob=!0,this.octobay.methods.addOracleJob(this.newOracleJob.oracle,this.newOracleJob.jobName,[this.$web3utils.toHex(this.newOracleJob.jobId),this.newOracleJob.jobFee]).send({from:this.account}).then((function(){e.addingOracleJob=!1,e.newOracleJob.oracle=null,e.newOracleJob.jobName=null,e.newOracleJob.jobId=null,e.newOracleJob.jobFee=null}))}}},d=(o(848),o(11)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card-body",staticStyle:{"max-width":"360px"}},[o("div",[o("b",{staticClass:"d-flex justify-content-between"},[e._v("\n      Octobay\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+e.octobay.options.address}},[o("small",[e._v("etherscan")])])]),e._v(" "),o("div",[o("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.octobay.options.address}})])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[e._v("\n      Governor\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+e.config.octobayGovernor}},[o("small",[e._v("etherscan")])])]),e._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:e.config.octobayGovernor}})])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[e._v("\n      GovNFT\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+e.config.octobayGovNFT}},[o("small",[e._v("etherscan")])])]),e._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:e.config.octobayGovNFT}})])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[e._v("\n      OracleStorage\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+e.config.oracleStorage}},[o("small",[e._v("etherscan")])])]),e._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:e.config.oracleStorage}})])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[e._v("\n      DepositStorage\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+e.config.depositStorage}},[o("small",[e._v("etherscan")])])]),e._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:e.config.depositStorage}})])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[e._v("\n      UserAddressStorage\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+e.config.userAddressStorage}},[o("small",[e._v("etherscan")])])]),e._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:e.config.userAddressStorage}})])]),e._v(" "),o("div",{staticClass:"mt-3"},[o("b",[e._v("New Oracle")]),e._v(" "),o("div",[o("small",{staticClass:"text-muted"},[e._v("Address:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newOracle.ethAddress,expression:"newOracle.ethAddress"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.newOracle.ethAddress},on:{input:function(t){t.target.composing||e.$set(e.newOracle,"ethAddress",t.target.value)}}})]),e._v(" "),o("div",[o("small",{staticClass:"text-muted"},[e._v("Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newOracle.name,expression:"newOracle.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.newOracle.name},on:{input:function(t){t.target.composing||e.$set(e.newOracle,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"input-with-button"},[o("small",{staticClass:"text-muted"},[e._v("Register Job ID")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newOracle.registerJobId,expression:"newOracle.registerJobId"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.newOracle.registerJobId},on:{input:function(t){t.target.composing||e.$set(e.newOracle,"registerJobId",t.target.value)}}})]),e._v(" "),o("button",{staticClass:"btn btn-primary mt-3 w-100 shadow-sm",attrs:{disabled:!e.isNewOracleValid()},on:{click:function(t){return e.addNewOracle()}}},[e.addingNewOracle?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):o("span",[e._v("Add new Oracle")])],1)]),e._v(" "),e._l(e.oracles,(function(t){return o("div",{key:t.id,staticClass:"border rounded-xl p-3 mt-3"},[o("div",[o("small",{staticClass:"text-muted"},[e._v("Address")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ethAddress,expression:"oracle.ethAddress"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.ethAddress},on:{input:function(o){o.target.composing||e.$set(t,"ethAddress",o.target.value)}}})]),e._v(" "),o("div",[o("small",{staticClass:"text-muted"},[e._v("Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"oracle.name"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.name},on:{input:function(o){o.target.composing||e.$set(t,"name",o.target.value)}}})]),e._v(" "),e._l(t.jobs,(function(t){return o("div",{key:t.id},[o("small",{staticClass:"text-muted"},[e._v(e._s(t.name))]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.id}})])})),e._v(" "),o("button",{staticClass:"btn btn-danger mt-3 w-100 shadow-sm",attrs:{disabled:e.removingOralce==t.ethAddress},on:{click:function(o){return e.removeOracle(t.ethAddress)}}},[e.removingOralce==t.ethAddress?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):o("span",[e._v("Remove Oracle")])],1)],2)})),e._v(" "),o("div",{staticClass:"mt-2"},[o("b",[e._v("New Oracle Job")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newOracleJob.oracle,expression:"newOracleJob.oracle"}],staticClass:"form-control mb-1",attrs:{type:"text",placeholder:"Oracle Address"},domProps:{value:e.newOracleJob.oracle},on:{input:function(t){t.target.composing||e.$set(e.newOracleJob,"oracle",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newOracleJob.jobName,expression:"newOracleJob.jobName"}],staticClass:"form-control mb-1",attrs:{type:"text",placeholder:"Oracle Job Name"},domProps:{value:e.newOracleJob.jobName},on:{input:function(t){t.target.composing||e.$set(e.newOracleJob,"jobName",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newOracleJob.jobId,expression:"newOracleJob.jobId"}],staticClass:"form-control mb-1",attrs:{type:"text",placeholder:"Oracle Job ID"},domProps:{value:e.newOracleJob.jobId},on:{input:function(t){t.target.composing||e.$set(e.newOracleJob,"jobId",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newOracleJob.jobFee,expression:"newOracleJob.jobFee"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Oracle Job Fee"},domProps:{value:e.newOracleJob.jobFee},on:{input:function(t){t.target.composing||e.$set(e.newOracleJob,"jobFee",t.target.value)}}}),e._v(" "),o("button",{staticClass:"btn btn-primary mt-3 w-100 shadow-sm",on:{click:function(t){return e.addOracleJob()}}},[e.addingOracleJob?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):o("span",[e._v("Add Oracle Job")])],1)])],2)}),[],!1,null,"8d3e2686",null);t.default=component.exports}}]);