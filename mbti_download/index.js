/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2023-11-03 10:35:42
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-04-08 11:02:15
 * @FilePath: /mbit-download/index.js
 * @Description: 
 */
window.onload = function () {
  var ua = navigator.userAgent;
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;

  if (isMobile) {
    document.body.setAttribute("class", "phone");
  }

  const btnEl = document.querySelector(".main-btn");
  const wxEl = document.querySelector(".wx-box");

  if (isMobile) {
    btnEl.addEventListener("click", function () {
      if (!isAndroid) {
        location.href = "https://apps.apple.com/cn/app/id6473384983";

        // 跳转失败兜底处理
        setTimeout(() => {
          alert("请在浏览器中打开");
        }, 2000);
        return alert("仅安卓beta版本内测");
      } else {
        if (ua.match(/MicroMessenger/i)) return wxEl.classList.remove("hide");
        window.open(
          "https://yinian.obs.cn-east-2.myhuaweicloud.com/mbti/apk/MBTIv0.2.0.apk"
        );
      }
    });

    wxEl.addEventListener("click", function () {
      wxEl.classList.add("hide");
    });
  } else {
    const qrcodeEl = btnEl.querySelector(".qrcode");
    btnEl.addEventListener("mouseenter", function () {
      qrcodeEl.classList.remove("hide");
    });

    btnEl.addEventListener("mouseleave", function () {
      qrcodeEl.classList.add("hide");
    });
  }
};
