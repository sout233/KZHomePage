var windowWidth = $(window).width();
layer.config({
  extend: 'kzhomepage/style.css', //加载扩展样式
  skin: 'layer-ext-kzhomepage'
});

// Nav buttons
$('.kz-nav-btn').on('click', function() {
  let btn = $(this);
  let type = btn.data('window') // pop current newtab
  let content = btn.data('href')
  switch (type) {
    case 'pop':
      let title = btn.data('title')
      let shadeClose = btn.data('shade') === 'true' ? false : true
      let anim = btn.data('anim') ? btn.data('anim')*1 : 4
      let area_w = btn.data('area-w') ? btn.data('area-w') : '80%'
      let area_h = btn.data('area-h') ? btn.data('area-h') : '90%'
      layer.open({
          type: 2,
          title: title,
          shadeClose: shadeClose,
          anim:anim,
          closeBtn: 2,
          isOutAnim: false,
          area: [area_w, area_h],
          content: content
      });
      break;
    case 'current':
      window.location = content
      break;
    case 'newtab':
      window.open('_blank').location = content
      break;
  }
});

// 兼容旧版
if(meting_music_api===""){
    meting_api = "https://api.mizore.cn/meting/api.php";
}
var meting_api =
  "https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id";

fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = '一言：'+data.hitokoto
    })
    .catch(console.error)