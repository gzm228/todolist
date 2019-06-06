window.addEventListener('load',function () {
   let top=document.querySelectorAll('.top>li');
   let prev=0;
   let type='';
   let bottom =document.querySelector('.bottom');
   let todolist=[
       {
           id:1,content:'需求文档',ctime:'2019/5/31',status:true
       },
       {
           id:2,content:'水商城',ctime:'2019/6/21',status:false
       },
       {
           id:3,content:'博客',ctime:'2019/7/31',status:false
       },
       {
           id:4,content:'企业网站',ctime:'2019/11/31',status:false
       }
   ];


   // let str =localStorage.getItem('todolist');
   // if(!str){
   //     saveData();
   //     str =localStorage.getItem('todolist');
   // }
   // todolist = JSON.parse(str);
   //
   // function saveData(){
   //    return  localStorage.setItem('todolist') ;
   // }
   top.forEach(function (ele,index) {
       ele.onclick=function(){
       top[prev].classList.remove('hot');
       this.classList.add('hot');
       prev=index;
       type = this.getAttribute('type');
       render(filterdata(type));
       }

   });
    top[0].onclick();
    //////////////////////////////////////////////////////////////////////////////////////
    bottom.onclick=function (e) {
        let target =e.target;
        let id = target.parentNode.id;
        if(target.nodeName == 'INPUT'){
            // console.log(1);
            let ele = todolist.filter(ele => ele.id==id)[0];
            ele.status=target.checked;
        }else if(target.nodeName == 'DEL'){
            let index =todolist.findIndex(ele => ele.id == id);
            console.log(index);
            todolist.splice(index,1);
            // console.log(2);
        }
        render(filterdata(type));
    };
    //////////////////////////////////////////////////////////////////////////////////////
     let form =document.myform;
     let submitbtn =form.elements[1];
     let textbtn =form.elements.mytext;
     submitbtn.onclick=function () {
       let obj= createobj();
       todolist.push(obj);
       form.reset();
       render(filterdata(type));
     };

     function createobj() {
         let id =todolist[(todolist.length-1)].id + 1;
         let content = textbtn.value;
         let ctime= new Date().toLocaleDateString();
         let status= false;
         return {id,content,ctime,status};



     }

    //////////////////////////////////////////////////////////////////////////////////////
    function filterdata(type) {
        let arr = [];
        switch(type){
            case 'all':arr=todolist;
                break;
            case 'done':
                arr=todolist.filter(function (ele) {return ele.status;});
                break;
            case 'doing':
                arr=todolist.filter(function (ele) {return !ele.status;});
                break;
        }
       return arr;

    }



    //渲染列表
   function render(arr) {
       let html ='';
       arr.forEach(function (elem,index) {
           if(elem.status){
               html += `
        <li id="${elem.id}">
            <input type="checkbox" checked><p>${elem.content}</p> <del>X</del> <time>${elem.ctime}</time>
        </li>
               `;
           }else{
               html += `
         <li id="${elem.id}">
            <input type="checkbox" ><p>${elem.content}</p> <del>X</del><time>${elem.ctime}</time>
        </li>
               `;
           }

       });
       bottom.innerHTML=html;

   }

});

////////////////////////////////////////////////////////////////////////////////////////////////////////
//第一次做的时候的代码
//增删改查 先布局，写样式，在弄js
//事件监听器,加载html中的内容获取每个li 》获取bottom》声明一个数组存放bottom里面的内容，》遍历top中的每一个，点击每一个就给哪一个添加事件
//
// window.addEventListener('load',function () {
//    let top=document.querySelectorAll('.top>li');
//    let prev=0;
//    let bottom =document.querySelector('.bottom');
//    let todolist=[
//        {
//            id:1,content:'需求文档',ctime:'2019/5/31',status:true
//        },
//        {
//            id:2,content:'水商城',ctime:'2019/6/21',status:false
//        },
//        {
//            id:3,content:'博客',ctime:'2019/7/31',status:false
//        },
//        {
//            id:4,content:'企业网站',ctime:'2019/11/31',status:false
//        }
//    ];
//
//    top.forEach(function (ele,index) {
//        ele.onclick=function(){
//        top[prev].classList.remove('hot');
//        this.classList.add('hot');
//        prev=index;
//        let type = this.getAttribute('type');
//        let arr = [];
//        switch(type){
//            case 'all':
//                arr=todolist;
//                break;
//            case 'done':
//                arr=todolist.filter(function (ele) {
//                    return ele.status;
//
//                });
//                break;
//            case 'doing':
//                arr=todolist.filter(function (ele) {
//                    return !ele.status;
//
//                });
//                break;
//        }
//        render(arr);
//        }
//
//    });
//     top[0].onclick();
//     //渲染列表
//    function render(arr) {
//        let html ='';
//        arr.forEach(function (elem,index) {
//            if(elem,status){
//                html += `
//         <li>
//             <input type="checkbox" checked><p>${elem.content}</p><time>${elem.ctime}</time>
//         </li>
//                `;
//            }else{
//                html += `
//          <li>
//             <input type="checkbox"><p>${elem.content}</p><time>${elem.ctime}</time>
//         </li>
//                `;
//            }
//
//        });
//        bottom.innerHTML=html;
//
//    }
//
// });