const source = [{pic:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2581888792.jpg",name:"南山的部长们",score:"8.2"},{pic:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2581888792.jpg",name:"南山的部长们",score:"8.2"}];
function boardCreator(idanchor,obj) {
    // 作用：为自定义组件ppt1生成嵌套img,span标签的a子标签
    let head = document.querySelector(`#${idanchor}`);
    console.log(head);
    for (let i=0;i<8;i++){
        let a = document.createElement('a');
        let img = document.createElement('img');
        img.setAttribute('src', `${obj['pic']}`);
        let span1 = document.createTextNode('span');
        let span2 = document.createTextNode('span');
        let text1 = document.createTextNode(`${obj['name']}`);
        let text2 = document.createTextNode(`${obj['sore']}`);
        head.appendChild(a);
        a.appendChild(img);
        a.appendChild(span1);
        a.appendChild(span2);
        span1.appendChild(text1);
        span2.appendChild(text2);
    }
}
let test = document.querySelector('draw-board');
let test1 = test.constructor;
console.log(test1);
boardCreator('page1',source[0]);
boardCreator('page2',source[1]);
