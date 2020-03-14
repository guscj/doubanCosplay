// 生成幻灯片
const source = [{pic:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2581888792.jpg",name:"南山的部长们",score:"8.2"},{pic:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2584308261.jpg",name:"燃烧女子的肖像",score:"8.6"}];
const source1 = [{pic:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg",name:"千与千寻",score:"9.3"},{pic:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg",name:"泰坦尼克号",score:"9.4"}];
function boardCreator(idanchor,obj) {
    // 作用：为自定义组件ppt1生成嵌套img,span标签的a子标签
    let head = document.querySelector(`#${idanchor}`);
    for (let i=0;i<10;i++){
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.setAttribute('style', 'display:inline-block;margin:10px 20px 10px 0;');
        img.setAttribute('src', `${obj['pic']}`);
        img.setAttribute('style','width:115px;height:170px;')
        head.appendChild(div);
        div.appendChild(img);
    }
}
boardCreator('page1',source[0]);
boardCreator('page2',source[1]);
boardCreator('page3',source1[0]);
boardCreator('page4',source1[1]);
//切换影区
let lis = document.querySelectorAll('#head4 li');
let ppts = document.querySelectorAll('.wrapper>div');
let now = 0;
    //初始化影区
let pagenow = document.querySelectorAll('.active');
let pnum = 0;
let atags = document.querySelectorAll('#pageturning>a');
let lis1 = document.querySelectorAll('#pageturning>li');
lis.forEach(function(item,index){
        item.onclick=function(){
            if(index===now){

            }
            else{
                lis[now].classList.remove('choose');
                ppts[now].classList.remove('active');
                lis[index].classList.add('choose');
                ppts[index].classList.add('active');
                now = index;
                //初始化影区，使得进入影区时在第一页，影区之间页数不互相影响
                pagenow = document.querySelectorAll('.active');
                pnum = 0;
                pagenow[0].setAttribute('style',`left:-0px;`);
                lis1[1].classList.remove('choose1');
                lis1[0].classList.add('choose1');
            }
        }
    }
);
// 影区内换页
lis1.forEach(function(item,index){
    // 选中点击的圆点
    item.onclick=function(){
        if(index===pnum){

        }
        else{
            lis1[pnum].classList.remove('choose1');
            lis1[index].classList.add('choose1');
            pnum = index;
            pagenow[0].setAttribute('style',`left:-${700*pnum}px;`);
        }
    }
}
);
atags[0].onclick=function(){
    lis1[pnum].classList.remove('choose1');
    pnum = Math.abs((pnum-1)%lis1.length);
    lis1[pnum].classList.add('choose1');
    pagenow[0].setAttribute('style',`left:-${700*pnum}px;`);
}
atags[1].onclick=function(){
    lis1[pnum].classList.remove('choose1');
    pnum = Math.abs((pnum+1)%lis1.length);
    lis1[pnum].classList.add('choose1');
    pagenow[0].setAttribute('style',`left:-${700*pnum}px;`);
}
    

