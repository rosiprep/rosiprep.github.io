if (document.referrer) {
    url = document.referrer;
} else {
    url = "";
}
domain = (new URL(url)).hostname;
alert(domain);
if (!(domain == "rosiprep.github.io" || domain == "blog.naver.com")) {
  window.location.replace("https://blog.naver.com/PostView.nhn?blogId=rosi2505&logNo=222263267738&parentCategoryNo=&categoryNo=37&viewDate=&isShowPopularPosts=false&from=postList");
}
