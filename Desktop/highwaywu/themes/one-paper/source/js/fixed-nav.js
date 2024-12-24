document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const fixedNav = document.querySelector('.fixed-nav');
    
    function checkNavVisibility() {
        const headerRect = header.getBoundingClientRect();
        
        // 只有当header完全滚出视口时才显示fixed-nav
        if (headerRect.bottom <= 0) {
            fixedNav.classList.add('visible');
        } else {
            fixedNav.classList.remove('visible');
        }
    }

    // 监听滚动事件
    window.addEventListener('scroll', checkNavVisibility);
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkNavVisibility);
    
    // 初始检查
    checkNavVisibility();

    // 修改点击事件处理
    const writingLinks = document.querySelectorAll('a[href*="writing"]');
    writingLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const nav = this.closest('.nav');
            if (nav) {
                setTimeout(() => {
                    nav.scrollLeft = nav.scrollWidth;
                }, 0);
            }
        });
    });
}); 