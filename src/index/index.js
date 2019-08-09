window.addEventListener('load', function () {
    // 实例化
    var leftScroll = new BScroll('.left', {
        scrollY: true,
        click:true,
        scrollbar:true, // 默认
    });
    var rightbScroll = new BScroll('.nav-right', {
        scrollX: true,
        click:true, // 默认
    });
    var lessbScroll = new BScroll('.less', {
        scrollY: true ,// 默认
        click:true,
    });
    // 获取元素
    // 左边
    var subNav = document.getElementsByClassName('subnav-warp');
    // 上
    var ulis = document.getElementById('uli');
    // 下
    var meanLess = document.getElementsByName('mean-less');

    function initMenu(data,site,callback) {
        var lis = '';
        for(var i = 0 ; i < data.length ; i ++) {
            lis += lis += `<li class= "${i === 0 ? 'current' : ''}" data-index = "${i}">${data[i].name}</li>`;
        }
        site.innerHTML = lis;
        callback && callback();
    }
    initMenu(lMenuData, subNav, function () {
        // 刷新页面better-scroll;
        leftScroll.refresh();
        // 渲染完毕，开始使用callback回调函数绑定事件，因为上边调用函数，所以在这谢事件；
        // 给iMenu绑定事件//事件代理绑定事件
        subNav.onclick = function (e) {
            var target = e.target;
            // 判断target 是否为li
            if (target.nodeName === 'LI') {
                for (var j = 0; j < subNav.children.length; j++) {
                    // 通过循环将左边菜单下的每一个li清除掉叫做current的类；// 清除兄弟选种样式
                    subNav.children[j].className = '';
                }
                // 然后自己加上
                subNav.children[j].className = 'active';
                // 拿到了每一个下标
                console.log(target.dataset.index);
                
                currentIdx = target.dataset.index;
                changeTopMenu(rConData[currentIdx].menuInfo, ulis, function () {
                    rightbScroll.refresh();
            
                    ulis.onclick = function (e) {
                        var target = e.target;
                        if (target.nodeName === 'LI') {
                            for (var j = 0; j < ulis.children.length; j++) {
                                // 通过循环将左边菜单下的每一个li清除掉叫做current的类；// 清除兄弟选种样式
                                ulis.children[j].classList.remove('current');
                            }
                            // 然后自己加上
                            target.classList.add('current')
                            // 获取的下标
                            console.log(target.dataset.index);
                            // 变成每一个title；通过下标找到title里边的每一个元素
                            itemTitles[target.dataset.index];
                            // 滚动到指定的元素
                            conList.scrollToElement(itemTitles[target.dataset.index],700);
                        }
                    }
                });

                // changeContent(rConData[currentIdx].cellList, productContent, function () {
                //     conList.refresh();
            
                //     // 渲染执行后获取所有的item;
                //     itemTitles = productContent.getElementsByClassName('item-title');
                //     // 购物车按钮
                //     var mainCar = document.getElementsByClassName('main-car');
                //     // 加减盒子
                //     var numCount = document.getElementsByClassName('num-con');
                //     // 加按钮
                //     var addBtns = document.getElementsByClassName('add');
                //     // 建按钮
                //     var countDowns = document.getElementsByClassName('count-down');
                //     // 数量
                //     var proNum = document.getElementsByClassName('product-num');
            
                // })
            }
        }
    });
})