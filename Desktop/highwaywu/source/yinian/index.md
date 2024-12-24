
---
title: Yinian
layout: yinian
---

<script src="../js/yinian.js"></script>


 <script>
        function loadYinian() {
            try {
                const container = document.getElementById('yinian-container');
                const data = window.yinianData;

                // 按创建时间倒序排序
                data.sort((a, b) => new Date(b.创建时间) - new Date(a.创建时间));

                data.forEach(item => {
                    // 创建thought元素
                    const thoughtDiv = document.createElement('div');
                    thoughtDiv.className = 'thought';

                    // 创建timestamp元素
                    const timestampDiv = document.createElement('div');
                    timestampDiv.className = 'thought-timestamp';
                    timestampDiv.textContent = item.创建时间;

                    // 创建content元素
                    const contentDiv = document.createElement('div');
                    contentDiv.className = 'thought-content';

                    // 处理包含换行符的文本
                    const paragraphs = item.内容.split('\n');
                    paragraphs.forEach(p => {
                        if (p.trim()) {
                            const pElement = document.createElement('p');
                            pElement.innerHTML = p;
                            contentDiv.appendChild(pElement);
                        }
                    });

                    // 组装元素
                    thoughtDiv.appendChild(timestampDiv);
                    thoughtDiv.appendChild(contentDiv);
                    container.appendChild(thoughtDiv);
                });

            } catch (error) {
                console.error('Error loading yinian:', error);
            }
        }

        // 页面加载完成后执行
        document.addEventListener('DOMContentLoaded', loadYinian);
</script>

 <script>

        // 随机获取一条一念
        function getRandomThought(thoughts) {
            const randomIndex = Math.floor(Math.random() * thoughts.length);
            return thoughts[randomIndex]["内容"];
        }

        // 打字机效果函数
        function typeWriter(element, text, speed = 50) {
            let paragraphs = text.split('\n').filter(p => p.trim());
            let currentParagraph = 0;
            let currentChar = 0;

            // 清空内容并创建段落
            element.innerHTML = '';
            paragraphs.forEach(() => {
                const p = document.createElement('p');
                p.className = 'typing-p'; // 添加类名以区分正在打字的段落
                element.appendChild(p);
            });

            let pElements = element.getElementsByTagName('p');

            // 移除之前的活动段落标记
            function removeActiveClass() {
                Array.from(pElements).forEach(p => p.classList.remove('active-typing'));
            }

            function type() {
                if (currentParagraph < paragraphs.length) {
                    removeActiveClass();
                    pElements[currentParagraph].classList.add('active-typing');

                    if (currentChar < paragraphs[currentParagraph].length) {
                        pElements[currentParagraph].textContent += paragraphs[currentParagraph][currentChar];
                        currentChar++;
                        setTimeout(type, speed);
                    } else {
                        currentParagraph++;
                        currentChar = 0;
                        if (currentParagraph < paragraphs.length) {
                            setTimeout(type, speed * 2);
                        } else {
                            // 打字结束，移除所有活动标记
                            removeActiveClass();
                            pElements[paragraphs.length - 1].classList.add('active-typing');
                        }
                    }
                }
            }

            type();
        }

        // 显示弹窗
        function showModal(content) {
            const modal = document.querySelector('.modal-overlay');
            const thoughtElement = modal.querySelector('.random-thought');

            // 先显示弹窗
            modal.classList.add('active');
            thoughtElement.innerHTML = ''; // 清空内容

            // 等弹窗动画完成后开始打字效果
            setTimeout(() => {
                typeWriter(thoughtElement, content);
            }, 300); // 300ms是弹窗动画的时间
        }

        // 隐藏弹窗
        function hideModal() {
            const modal = document.querySelector('.modal-overlay');
            modal.classList.remove('active');
        }

        // 添加事件监听
        document.addEventListener('DOMContentLoaded', function () {
            const randomButton = document.querySelector('.thought-random');
            const closeButton = document.querySelector('.modal-close');
            const modal = document.querySelector('.modal-overlay');

            // 点击随机按钮
            randomButton.addEventListener('click', function () {
                const allThoughts = window.yinianData;
                const randomThought = getRandomThought(allThoughts);
                showModal(randomThought);
            });

            // 点击关闭按钮
            closeButton.addEventListener('click', hideModal);

            // 点击遮罩层关闭
            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    hideModal();
                }
            });

            // ESC键关闭
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    hideModal();
                }
            });
        });
</script>

<h5 style="margin-bottom: 32px;margin-top: 6px;font-size: 1.1rem;color: #333;">
    📌 这里记录我用一念摘抄的灵感。
</h5>

<div class="thought-random" style="margin-bottom: 36px;">🎲 随机一条
    <svg>
        <rect x="1" y="1" width="99%" height="99%" />
    </svg>
</div>

 <div class="article-entry">
    <div id="yinian-container">
    </div>
</div>

 <div class="modal-overlay">
        <div class="modal-content">
            <div class="modal-close">×</div>
            <div class="random-thought"></div>
        </div>
</div>