"use strict";(self["webpackChunk_0129"]=self["webpackChunk_0129"]||[]).push([[313],{8313:function(s,e,t){t.r(e),t.d(e,{default:function(){return f}});var n=t(3396),r=t(9242);const a={class:"container mt-5"},o={class:"col-md-6"},i=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},u=(0,n._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},c=(0,n._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,n._)("div",{class:"text-end mt-4"},[(0,n._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function m(s,e,t,m,h,b){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,r.iM)(((...s)=>b.signIn&&b.signIn(...s)),["prevent"]))},[(0,n._)("div",o,[i,(0,n._)("div",l,[u,(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[r.nr,h.user.username]])]),(0,n._)("div",d,[c,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[r.nr,h.user.password]])]),p])],32)])}t(560);var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:t}=s.data;document.cookie=`hextoken=${e}; expires=${new Date(t)}`,this.$router.push("/dashboard/product")}}))}}},b=t(89);const w=(0,b.Z)(h,[["render",m]]);var f=w}}]);
//# sourceMappingURL=313.e9c16d05.js.map