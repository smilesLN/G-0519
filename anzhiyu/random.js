var posts=["2024/04/01/Day04笔记/","2021/04/01/GQ/","2024/04/01/FRW知识库/","2021/04/01/KMS激活服务器搭建/","2024/04/01/day03笔记/","2021/04/01/windows更新服务器搭建/","2024/04/01/网站搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };