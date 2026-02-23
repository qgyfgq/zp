// auth.js
(function() {
    const STORAGE_KEY = "is_verified";

    // 直接跳过验证
    localStorage.setItem(STORAGE_KEY, "true");
    
    // 确保内容显示
    function showContent() {
        const mainContent = document.getElementById('screen-container');
        if (mainContent) {
            mainContent.style.filter = 'none';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showContent);
    } else {
        showContent();
    }

    // 原有代码已全部移除，直接跳过验证
})();
