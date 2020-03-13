const headlines1 = ['豆瓣','读书','电影','音乐','同城','小组','阅读','FM','时间','豆品','更多'];
        const headlines2 = ['影讯&购票','选电影','电视剧','排行榜','分类','影评','2019年度榜单','2019书影音报告']
        const headlines3 = ['南山的部长们','剩女','狂躁节拍','勇者斗恶龙 你的故事','雷米奇遇记','内心之光','维塔利娜·瓦雷拉','系统破坏者','遗愿清单','安尼亚拉号'];
        function liCreator(idanchor,list,bool=false) {
            // 要求：第一个实参为字符串类型的id值，ol标签的bool值为true
            // 作用：为ol或ul标签生成嵌套a标签的li子标签
            let head = document.querySelector(`#${idanchor}`);
            let length = list.length;
            for (let i=0;i<length;i++){
                let li = document.createElement('li');
                let a = document.createElement('a');
                let content,content1,span,span1
                if(bool){
                    span = document.createElement('span');
                    span1 = document.createElement('span');
                    content = document.createTextNode(`${i+1}`);
                    content1 = document.createTextNode(' '+list[i]);
                    head.appendChild(li);
                    li.appendChild(a);
                    a.appendChild(span);
                    a.appendChild(span1);
                    span.appendChild(content);
                    span1.appendChild(content1);
                }else{
                    content = document.createTextNode(list[i]);
                    head.appendChild(li);
                    li.appendChild(a);
                    a.appendChild(content);
                }
            }
        }
        liCreator('head1',headlines1);
        liCreator('head2',headlines2);
        liCreator('head3',headlines3,true);
        let head3 = document.querySelectorAll("#head3>li>a");
        for (let i of head3){
            i.firstChild.setAttribute('style', 'color:black;font-size:12px;');
        }