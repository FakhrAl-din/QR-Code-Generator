


document.addEventListener("DOMContentLoaded", function () {
    const hamMenu = document.querySelector('.hamMenu');
    const hamburger = document.querySelector('.hamburger');
    const span = document.querySelector('.span');
    const theme = document.querySelector('.theme');
    const themes = document.querySelector('#theme');
    const lang = document.querySelector('.lang');
    const about = document.querySelector('.about');
    const aboutBtn = document.querySelector('.aboutBtn');
    const contact = document.querySelector('.contact');
    const feedback = document.querySelector('.feedback');
    const feedbacks = document.querySelector('#feedback');
    const chatMessageElement = document.getElementById('chatMessage');
    const themeCheckbox = document.querySelector('.onoffbtn input[type="checkbox"]');
    const container = document.querySelector(".container");
    const inputs = document.querySelector('.input')
    const display = document.querySelector('.display')
    const gen = document.querySelector('#gen')
    const reload = document.querySelector('#reload')
    const mainQR = document.querySelector('#mainQR')
    const languageSelect = document.getElementById('languageSelect');
    const loading = document.getElementById('loading');
    const changeLang = document.querySelector('#changeLang');
    const feedbackSubmit = document.querySelector('#feedbackSubmit')
    const save = document.querySelector('#save')
    const share = document.querySelector('#share')
    const form = document.querySelector('.contact_form');
    const name = document.querySelector('.name');
    const emails = document.querySelector('.email');
    const msg = document.querySelector('.msg');


    // Email sending part
    form.addEventListener('submit', sendMsg);
    function sendMsg(e) {
        e.preventDefault();
        Email.send({
            SecureToken: "",
            To: 'hitpitgym04@gmail.com',
            From: emails.value,
            Subject: "Contact Form",
            Body: msg.value,
        }).then(
            message => alert(message)
        ).catch(
            error => alert('Error:', error)
        )


    }

    // Hamburger button behaviors
    hamburger.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        span.classList.toggle('activeLast');
        setTimeout(() => theme.classList.toggle('active'), 100);
        setTimeout(() => lang.classList.toggle('active'), 200);
        setTimeout(() => feedback.classList.toggle('active'), 300);
        setTimeout(() => contact.classList.toggle('active'), 400);
    });

    // "about" button functionalities
    aboutBtn.addEventListener('click', () => {
        about.classList.toggle('active');
        if (about.classList.contains('active') && translations) {
            hamMenu.style.minHeight = '1075px';
        }
        else {
            hamMenu.style.minHeight = '645px';
        }
    });

    // Theme changing behaviors
    themeCheckbox.addEventListener('click', function () {
        if (themeCheckbox.checked) {
            themeCheckbox.parentElement.classList.add('active');
            document.body.style.backgroundColor = 'wheat';
            container.style.backgroundColor = 'white';
            display.style.backgroundColor = 'white'
            inputs.style.border = 'none';
            inputs.style.backgroundColor = '#d3d0d0'
            allOptions.style.backgroundColor = 'silver'

            downloadMenu.style.backgroundColor = 'rgb(51, 50, 50)';
        } else {
            themeCheckbox.parentElement.classList.remove('active');
            document.body.style.backgroundColor = 'rgb(7, 15, 61)';
            container.style.backgroundColor = '';
            downloadMenu.style.backgroundColor = '';
            allOptions.style.backgroundColor = ''

        }
    });



    // Language settings
    const translations = {
        en: {
            placeholder: "Enter URL or text",
            button: "QR Code",
            loading: "Loading...",
            alert: "Write URL or text please!",
            error: "Failed to load the QR code. Please try again.",
            themess: "Theme",
            changeLang: "Languages",
            about: "About",
            feedback: "Feedback",
            chatMessages: "What this app is capable of: QR code generators are apps or websites that allow you to create QR codes (Quick Response codes). These codes are like barcodes on steroids, capable of storing a significant amount of information.  What information can they encode? QR codes can hold various data types, including:Website URLs (most common) Text messagesContact information (vCards)Email addresses Location coordinates WiFi network credentials.",
            send: "Send",
            reload: "Reload",
            email: " Your email",
            msg: "Leave your feedback",
            name: "Your name",


        },
        uz: {
            placeholder: "URL yoki matn kiriting",
            button: "QR kodini yaratish",
            loading: "Yuklanmoqda...",
            alert: "Iltimos, URL yoki matn kiriting!",
            error: "QR kodini yuklash muvaffaqiyatsiz tugadi. Qayta urinib ko'ring.",
            themess: "Mavzu",
            changeLang: "Tillar",
            about: "Dastur haqida",
            feedback: "Fikr-mulohaza",
            chatMessages: "Ushbu ilova nimalarga qodir: QR kod generatorlari orqali QR kodlarini yaratishingiz mumkin (Tezkor javob kodlari). Bu kodlar steroidlardagi shtrix kodlariga o'xshaydi,  katta hajmdagi ma'lumotlarni saqlash imkonini beradi. Ular qanday ma'lumotlarni kodlashi mumkin? QR kodlar turli xil ma'lumotlar turlarini, jumladan: Veb-sayt URL manzillarini saqlashi (eng keng tarqalgan), matnli xabarlar Kontakt ma'lumotlari (vCards), Elektron pochta manzillari, Joylashuv koordinatalari va Wi-Fi tarmog'i hisob ma'lumotlarini saqlay oladi. ",
            send: "Yubormoq",
            reload: "Qayta yuklash",
            email: "Emailingiz",
            msg: "Fikrlaringiz..",
            name: "Ismingiz",
        },

        ru: {
            placeholder: "Введите URL или текст",
            button: "Создать QR-код",
            loading: "Загрузка...",
            alert: "Пожалуйста, введите URL или текст!",
            error: "Не удалось загрузить QR-код. Пожалуйста, попробуйте снова.",
            themess: "Tема",
            changeLang: "Язык",
            about: "О программе",
            feedback: "Обратная связь",
            chatMessages: "На что способно это приложение: Генераторы QR-кодов — это приложения или веб-сайты,которые позволяют вам создавать QR-коды (коды быстрого ответа). Эти коды подобны штрих-кодам на стероидах,способным хранения значительного объема информации. Какую информацию они могут закодировать? QR-коды огут хранить различные типы данных, в томчисле: URL-адреса веб-сайтов. (наиболее распространенные) Текстовые сообщенияКонтактная информация (vCards)Адреса электронной почты Координаты местоположения Учетные данные сети Wi-Fi.",
            send: "Oтправлять",
            reload: "Перезагрузить",
            email: "Ваш адрес электронной почты",
            msg: "Оставьте свой отзыв",
            name: "Ваше имя",

        }
    };

    //  Adjusting the the text and placeholders on a webpage to match the chosen language.
    function setLanguage(language) {
        const translation = translations[language];
        inputs.placeholder = translation.placeholder;
        gen.textContent = translation.button;
        loading.textContent = translation.loading;
        themes.textContent = translation.themess;
        changeLang.textContent = translation.changeLang;
        aboutBtn.textContent = translation.about;
        feedbacks.textContent = translation.feedback;
        chatMessageElement.textContent = translation.chatMessages;
        feedbackSubmit.textContent = translation.send;
        reload.textContent = translation.reload;
        name.placeholder = translation.name;
        emails.placeholder = translation.email;
        msg.placeholder = translation.msg;



        // Creating QR code using an API:
        gen.onclick = () => {
            let qrValue = inputs.value.trim();
            if (!qrValue) {
                alert(translation.alert);
            } else {
                loading.style.display = 'block';
                mainQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
                mainQR.onload = () => {
                    loading.style.display = 'none';
                };
            }
        };
    }

    languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);

    });
    setLanguage(languageSelect.value);


    reload.addEventListener('click', () => {
        inputs.value = '';
        mainQR.src = './img/gif.gif';
    })

    // Functionalities related to downloading QR image
    const downloadMenu = document.querySelector('.downloadMenu');
    const allOptions = document.querySelector('.allOptions')
    downloadMenu.addEventListener('click', () => {
        allOptions.classList.toggle('active')
    })

    save.addEventListener('click', () => {
        let imgPath = mainQR.getAttribute('src');
        let fileName = getFileName(imgPath);
        saveAs(imgPath, fileName)
    })

    function getFileName(str) {
        return str.substring(str.lastIndexOf('/'))
    }

    // Sharing the output image created by QR generator
    share.addEventListener('click', async () => {
        async function sharePicture() {
            let imgPath = mainQR.getAttribute('src');
            let imgFile = await fetch(imgPath)
                .then(response => response.blob())
                .then(blob => new File([blob], 'picture.png', { type: 'image/png' }));

            try {
                await navigator.share({
                    title: document.title,
                    text: 'Check out my picture!',
                    url: window.location.href,
                    files: [imgFile]
                });
                console.log('Picture shared successfully');
            } catch (error) {
                console.log('Error sharing picture:', error);
            }
        }
        await sharePicture();
    });
});

