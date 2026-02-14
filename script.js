window.addEventListener("load", ()=>{
     (function() {
 
            const fortunes = [
            
                "YOU ARE ALWAYS MINE :P XD",
                "You and Mr P are the best :P",
                "I love Luna and Lili, I swear :P",
                "You are the best man ever <3",
                "so proud of you and all of your papers ^^",
                "I adore your messy hair, handsome (;"
                
            ];

            const cookieBtn = document.getElementById('cookieClicker');
            const fortuneDisplay = document.getElementById('fortuneMessage');


            function getRandomFortune() {
                const randomIndex = Math.floor(Math.random() * fortunes.length);
                return fortunes[randomIndex];
            }

            fortuneDisplay.textContent = getRandomFortune();


            function showNewFortune() {
                const newMessage = getRandomFortune();
                fortuneDisplay.textContent = newMessage;


                const msgBox = document.querySelector('.message-box');
                msgBox.style.transition = 'background 0.15s, box-shadow 0.15s';
                msgBox.style.background = '#fff2ec';
                msgBox.style.boxShadow = 'inset 0 0 0 3px #fecbbc, 0 14px 20px -14px #b67e6a';

                setTimeout(() => {
                    msgBox.style.background = '#fff9f5';
                    msgBox.style.boxShadow = 'inset 0 0 0 2px #fadad0, 0 12px 18px -14px #b47e6e';
                }, 170);
            }


            cookieBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                showNewFortune();
            });


            cookieBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showNewFortune();
                }
            });


            cookieBtn.addEventListener('mousedown', function() {
                this.style.transition = 'transform 0.06s';
            });
            cookieBtn.addEventListener('mouseup', function() {
                this.style.transition = '';
            });
            cookieBtn.addEventListener('mouseleave', function() {
                this.style.transition = '';
            });


        })();



        (function secondHeart() {
            const secretTrigger = document.querySelector('.small-note');
            const msgDisplay = document.getElementById('fortuneMessage');
            if (secretTrigger) {
                secretTrigger.style.cursor = 'pointer';
                secretTrigger.addEventListener('click', function() {
                    // special hidden valentine message
                    msgDisplay.textContent = 'i made this whole website just for you ❤️';
                    const msgBox = document.querySelector('.message-box');
                    msgBox.style.background = '#ffefea';
                    msgBox.style.boxShadow = 'inset 0 0 0 4px #fec4b2';
                    setTimeout(() => {
                        msgBox.style.background = '#fff9f5';
                        msgBox.style.boxShadow = 'inset 0 0 0 2px #fadad0, 0 12px 18px -14px #b47e6e';
                    }, 500);
                });
            }
        })();






});