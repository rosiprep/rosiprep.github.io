var domain = document.referrer.replace('http://','').replace('https://','').split(/[/?#]/)[0];
alert(domain);
if (!(domain == "rosiprep.github.io" || domain == "blog.naver.com")) {
  window.location.replace("https://blog.naver.com/PostView.nhn?blogId=rosi2505&logNo=222263267738&parentCategoryNo=&categoryNo=37&viewDate=&isShowPopularPosts=false&from=postList");
}
