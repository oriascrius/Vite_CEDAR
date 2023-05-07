import{_ as S,R as C,a as m,L as x,m as B,c as a,b as t,t as r,d as p,w as _,h as T,K as E,F as l,A as g,g as A,r as u,o as d,f as I,B as L,n as N,J as q,y as D,z as M}from"./index-4f005452.js";import{A as R,N as U,S as $,a as z}from"./navigation.min-59e89c6d.js";import{c as v}from"./cart-a0e5f515.js";const{VITE_API:w,VITE_PATH:b}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Cedar_Brunch_Cafe/",MODE:"production",DEV:!1,PROD:!0},F={name:"ProductView",data(){return{product:{},products:[],similarProducts:[],qty:1,modules:[R,U],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},id:""}},components:{RouterView:C,Swiper:$,SwiperSlide:z},methods:{...m(v,["addToCart","getCarts"]),...m(x,["showLoading","hideLoading"]),getProducts(){this.showLoading(),this.$http.get(`${w}api/${b}/product/${this.id}`).then(s=>{this.product=s.data.product,this.getCategoryProducts(),this.hideLoading()}).catch(s=>{var i,n;const c=((n=(i=s.response)==null?void 0:i.data)==null?void 0:n.message)||"資料錯誤";this.hideLoading(),this.$swal.fire({toast:!0,position:"top",icon:"error",title:`${c}`,showConfirmButton:!1,timer:1500})})},getCategoryProducts(){const{category:s,id:c}=this.product;this.$http.get(`${w}api/${b}/products/all`).then(i=>{const{products:n}=i.data;this.products=n}).catch(i=>{alert(i.response.data.message)}),this.similarProducts=this.products.filter(i=>i.category===s&&i.id!==c)},toggleId(s){this.$router.push(`/product/${s}`),this.id=s,this.getProducts()}},computed:{...B(v,["cart"])},created(){const{id:s}=this.$route.params;this.id=s,this.getProducts()},mounted(){this.getProducts()}},h=s=>(D("data-v-d29ec4b2"),s=s(),M(),s),H={class:"container text-custom_medium-green"},O={class:"row mt-3"},J={class:"col-lg-5"},K=["src","alt"],j={class:"col-lg-7"},G={class:"row list-unstyled"},Q={class:"col-md-6 mt-4"},W={class:"mt-3 fw-bold"},X={class:"col-md-6"},Y={"aria-label":"breadcrumb"},Z={class:"breadcrumb list-unstyled py-3"},tt={class:"breadcrumb-item"},st={class:"breadcrumb-item active","aria-current":"page"},et={class:"badge bg-custom_dark-green rounded-pill"},ot={class:"mt-5"},it={class:"input-group mt-5 w-75"},rt=["value"],ct=h(()=>t("hr",null,null,-1)),nt=h(()=>t("h3",{class:"mt-7"},"您可能會喜歡",-1)),dt={class:"mt-3"},at={class:"card"},lt=["onClick"],ut=h(()=>t("div",{class:"overlay"},[t("div",{class:"btn text-custom_background fs-4 fw-bold"},"查看更多")],-1)),pt=[ut],_t={class:"card-body"},ht={class:"card-title"},mt={class:"text-right pr-2"};function gt(s,c,i,n,e,y){const f=u("router-link"),P=u("swiper-slide"),k=u("swiper"),V=u("router-view");return d(),a(l,null,[t("div",H,[t("div",O,[t("div",J,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"w-100",height:"400"},null,8,K)]),t("div",j,[t("ul",G,[t("li",Q,[t("h4",W,r(e.product.title),1)]),t("li",X,[t("nav",Y,[t("ul",Z,[t("li",tt,[p(f,{to:"/products"},{default:_(()=>[I("全部商品")]),_:1})]),t("li",st,r(e.product.title),1)])])]),t("li",null,[t("span",et,r(e.product.category),1)]),t("li",null,[t("p",ot,"描述："+r(e.product.description),1)]),t("li",null,[t("p",null,"內容："+r(e.product.content),1)]),t("li",null,[t("h5",null,"NT$ "+r(e.product.price),1)]),t("div",it,[T(t("select",{class:"form-select","onUpdate:modelValue":c[0]||(c[0]=o=>e.qty=o)},[(d(),a(l,null,g(20,o=>t("option",{value:o,key:o+"1233"},r(o),9,rt)),64))],512),[[E,e.qty]]),t("button",{type:"button",class:"btn btn-custom_btn-color text-white",onClick:c[1]||(c[1]=o=>s.addToCart(e.product.id,e.qty))}," 加入商品 ")])])])]),ct,e.similarProducts.length?(d(),a(l,{key:0},[nt,t("div",dt,[p(k,{"data-aos":"fade-up",slidesPerView:1,spaceBetween:10,navigation:e.navigation,breakpoints:{425:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10}},modules:e.modules,class:"mySwiper"},{default:_(()=>[(d(!0),a(l,null,g(e.similarProducts,o=>(d(),L(P,{key:o.id},{default:_(()=>[t("div",at,[t("div",{style:N([{height:"300px","background-size":"cover","background-position":"center",cursor:"pointer",position:"relative"},{backgroundImage:`url(${o.imageUrl})`}]),onClick:q(vt=>y.toggleId(o.id),["prevent"])},pt,12,lt),t("div",_t,[t("h6",ht,r(o.title),1),t("div",mt,"NT$ "+r(o.price),1)])])]),_:2},1024))),128))]),_:1},8,["navigation","modules"])])],64)):A("",!0)]),p(V)],64)}const ft=S(F,[["render",gt],["__scopeId","data-v-d29ec4b2"]]);export{ft as default};