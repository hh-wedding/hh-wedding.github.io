/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

// 링크 복사
function copyLink(){
	var url = 'https://hh-wedding.github.io/';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("링크가 복사되었습니다.")
}

// 신부 계좌번호 복사
function brideAccountNumber(){
	var bride_account = '100088193319 \n00000000 토스뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = bride_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신부의 계좌번호가 복사되었습니다.")
}

// 신랑 계좌번호 복사
function groomAccountNumber(){
	var groom_account = '100087849391 토스뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = groom_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신랑의 계좌번호가 복사되었습니다.")
}

// 아버님 계좌번호 복사 
function groomsFatherAccountNumber(){
    var grooms_father_account = '65780101015112 국민은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = grooms_father_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("계좌번호가 복사되었습니다.")
}

// 어머님 계좌번호 복사 
function groomsFatherAccountNumber(){
    var grooms_father_account = '65780296112434 국민은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = grooms_father_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("계좌번호가 복사되었습니다.")
}


// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('YOUR APP KEY');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: '훈덕🤍혜우 결혼합니다.',
        description: '2025.09.20',
        imageUrl: 'https://github.com/assets/album-01.JPG',
        link: {
            mobileWebUrl: 'https://hh-wedding.github.io/#!',
            webUrl: 'https://hh-wedding.github.io/#!',
        },
        },
        buttons: [
        {
            title: '모바일 청첩장 보기',
            link: {
            mobileWebUrl: 'https://hh-wedding.github.io/#!',
            webUrl: 'https://hh-wedding.github.io/#!',
            },
        },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}

function toggleFoldable() {
    var content = document.querySelector('.foldable-content');
    var toggleIcon = document.getElementById('toggleIcon');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable2() {
    var content = document.querySelector('.foldable-content2');
    var toggleIcon = document.getElementById('toggleIcon2');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable3() {
    var content = document.querySelector('.foldable-content3');
    var toggleIcon = document.getElementById('toggleIcon3');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}
