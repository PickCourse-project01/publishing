// 이미지가 <a> 태그 안에 포함되어 있을 경우, 클릭 시 해당 링크의 기본 동작이 페이지를 맨 위로 스크롤할 수 있습니다.
// 이를 방지하기 위해 다음과 같은 방법을 사용
document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
    });
});

// 화면이 눌릴 때 위에 빨간줄 이동하고, 아래쪽 관광지 상세 사진 보이기
const cosList = document.querySelector(".pc.js_slider .cosList");
const swiperslides = cosList.querySelectorAll(".swiper-slide");
const swiperslidesLength = swiperslides.length;

swiperslides.forEach((swiperslide) => {
    swiperslide.addEventListener("click", (e) => {
        // console.log(e.target.closest("li").outerHTML);
        // console.log(e.target.closest("li").querySelector("em").outerHTML);
        const emValue = parseInt(e.target.closest("li").querySelector("em").textContent);

        swiperslides.forEach((e) => {
            e.classList.remove("on", "on1");
            e.querySelector("a").removeAttribute("title");

            if (parseInt(e.textContent) < emValue) {
                e.classList.add("on");
            }
        });

        e.target.closest("li").classList.add("on1");
        e.target.closest("li").querySelector("a").setAttribute("title", "선택됨");

        // 아래쪽 관광지 상세 사진 보여주기

        const idValue = emValue < 10 ? "cosTab0" + emValue : "cosTab" + emValue;
        document.querySelectorAll(".cos_cont").forEach((e) => {
            console.log(e.className);
            e.classList.remove("active");
            if (e.id == idValue) {
                e.classList.add("active");
            }
        });
    });
});

// 연관 관광지 버튼 클릭시 이미지 3개씩 이동 600px, 디스플레이 720px
let leftEnd = 0; // 화면 왼쪽 끝
let rightEnd = 800;
let maxRightEnd = swiperslidesLength * 200;

document.querySelector(".swiper-button-next").addEventListener("click", (e) => {
    rightEnd += 600;
    leftEnd += 600;
    if (rightEnd > maxRightEnd) {
        // maxRightEnd 보다 오른쪽으로 못 가도록 막음
        leftEnd -= rightEnd - maxRightEnd;
        rightEnd = maxRightEnd;

        document.querySelector(".swiper-button-next").classList.add("swiper-button-disabled");
        document.querySelector(".swiper-button-next").setAttribute("aria-disabled", "true");
    }
    cosList.style.transform = `translate3d(${720 - rightEnd}px, 0, 0)`;
    document.querySelector(".swiper-button-prev").classList.remove("swiper-button-disabled");
    document.querySelector(".swiper-button-prev").setAttribute("aria-disabled", "false");
});

document.querySelector(".swiper-button-prev").addEventListener("click", (e) => {
    leftEnd -= 600;
    rightEnd -= 600;
    if (leftEnd < 0) {
        // 0 보다 오른쪽으로 못 가도록 막음
        rightEnd -= leftEnd;
        leftEnd = 0;

        document.querySelector(".swiper-button-prev").classList.add("swiper-button-disabled");
        document.querySelector(".swiper-button-prev").setAttribute("aria-disabled", "true");
    }
    cosList.style.transform = `translate3d(${leftEnd}px, 0, 0)`;
    document.querySelector(".swiper-button-next").classList.remove("swiper-button-disabled");
    document.querySelector(".swiper-button-next").setAttribute("aria-disabled", "flase");
});
// 연관 관광지  버튼 클릭시 작동 3개씩 이동 600px, 디스플레이 720px

// 후기의 버튼 클릭시 이미지 3개식 이동 732px, 디스플레이 768px

let leftReviewEnd = 0; // 화면 왼쪽 끝
let rightReviewEnd = 976;
let maxReviewRightEnd = document.querySelectorAll(".slick-slide").length * 244;

document.querySelector(".slick-next").addEventListener("click", (e) => {
    rightReviewEnd += 732;
    leftReviewEnd += 732;
    if (rightReviewEnd > maxRightEnd) {
        // maxRightEnd 보다 오른쪽으로 못 가도록 막음
        leftReviewEnd -= rightReviewEnd - maxRightEnd;
        rightReviewEnd = maxRightEnd;

        document.querySelector(".slick-next").classList.add("slick-disabled");
    }
    document.querySelector(".slick-track").style.transform = `translate3d(${768 - rightReviewEnd}px, 0, 0)`;
    document.querySelector(".slick-prev").classList.remove("slick-disabled");
});

document.querySelector(".slick-prev").addEventListener("click", (e) => {
    leftReviewEnd -= 732;
    rightReviewEnd -= 732;
    if (leftReviewEnd < 0) {
        // 0 보다 오른쪽으로 못 가도록 막음
        rightReviewEnd -= leftReviewEnd;
        leftReviewEnd = 0;

        document.querySelector(".slick-prev").classList.add("slick-disabled");
    }
    document.querySelector(".slick-track").style.transform = `translate3d(${leftReviewEnd}px, 0, 0)`;
    document.querySelector(".slick-next").classList.remove("slick-disabled");
});
// 후기의 버튼 클릭시 이미지 3개식 이동 732px, 디스플레이 768px

// 위로 버튼 누르면 화면 위쪽으로 천천히 이동
document.querySelector(".gQlhwK").addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// 위로 버튼 누르면 화면 위쪽으로 천천히 이동

// 찜하기 버튼 클릭
var buttonSelected = "true";
const JJimMessage = document.createElement("div");
JJimMessage.className = "Bottom__Wrapper-sc-1nltrn7-0 bpzBFC";
document.querySelectorAll(".enp_mobon_cart").forEach((JJim) => {
    JJim.addEventListener("click", () => {
        if (buttonSelected == "true") {
            document.querySelectorAll(".enp_mobon_cart img").forEach((img) => {
                img.src = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E`;
            });
            JJimMessage.textContent = "추천 여행을 찜했습니다.";
            buttonSelected = "false";
        } else {
            document.querySelectorAll(".enp_mobon_cart img").forEach((img) => {
                img.src = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2519_490)'%3E %3Cmask id='mask0_2519_490' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32'%3E %3Cpath d='M32 0H0V32H32V0Z' fill='white'/%3E %3C/mask%3E %3Cg mask='url(%23mask0_2519_490)'%3E %3Cmask id='mask1_2519_490' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32'%3E %3Cpath d='M32 0H0V32H32V0Z' fill='white'/%3E %3C/mask%3E %3Cg mask='url(%23mask1_2519_490)'%3E %3Cpath d='M28 12C28 16.1889 24.9781 19.7916 22.063 22.3047C20.2579 23.8469 18.2982 25.1986 16.2154 26.3381C16.2027 26.3441 16.1898 26.3505 16.1774 26.357C16.1226 26.3861 16.0613 26.4013 15.999 26.4015C15.9401 26.4015 15.882 26.3881 15.8293 26.362L15.8094 26.3511L15.784 26.3378C15.1694 26.0033 14.5659 25.649 13.9743 25.2754C12.5586 24.3847 11.2086 23.3914 9.93704 22.3049C7.02334 19.7914 4.00003 16.1887 4 12C4.00014 10.6766 4.41054 9.38568 5.17469 8.30517C5.93885 7.22466 7.01918 6.4076 8.26696 5.96651C9.51472 5.52542 10.8685 5.482 12.142 5.84222C13.4155 6.20245 14.546 6.94859 15.3778 7.97794C15.5297 8.16589 15.7584 8.2751 16 8.2751C16.2416 8.2751 16.4704 8.16589 16.6222 7.97794C17.4541 6.94859 18.5845 6.20245 19.8579 5.84222C21.1315 5.482 22.4853 5.52542 23.7331 5.96651C24.9808 6.4076 26.0611 7.22466 26.8253 8.30517C27.5894 9.38568 27.9998 10.6766 28 12Z' stroke='%23333333' stroke-width='1.5' stroke-linejoin='round'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2519_490'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E`;
            });
            JJimMessage.textContent = "찜을 해제했습니다.";
            buttonSelected = "true";
        }
        document.querySelector(".ifNxJR").appendChild(JJimMessage);

        const bpzBFC = document.querySelector(".bpzBFC");
        if (!bpzBFC) {
            // 찜 메세지를 잠시 보여주고 없앰.
            return;
        }

        // 메시지 표시 (opacity 1로 변경)
        bpzBFC.style.opacity = "0.9";
        bpzBFC.style.zIndex = 9999;

        // 일정 시간이 지나면 사라지도록 설정 (2초 후 opacity 0)
        setTimeout(() => {
            bpzBFC.style.opacity = "0";
            bpzBFC.style.zIndex = -9999;
        }, 1000);
    });
});

// 찜하기 버튼 클릭

// 지도 보여주기
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(35.409476, 127.396059), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
    };
let initialCenter = new kakao.maps.LatLng(35.409476, 127.396059);
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

let tourSpots = [
    { name: "허브마을 채마루", address: "남원시 원천로 37" },
    { name: "광한루원", address: "남원시 요천로 1447" },
    { name: "김병종미술관", address: "남원시 함파우길 65-14" },
    { name: "지리산 허브밸리", address: "남원시 바래봉길 24" },
    { name: "구서도역", address: "남원시 서도길 32" },
    { name: "혼불문학관", address: "남원시 노봉안길52" },
];

let positions = [];
let geocoder = new kakao.maps.services.Geocoder();
let remains = tourSpots.length;
tourSpots.forEach((spot) => {
    geocoder.addressSearch(spot.address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
            positions.push({
                content: "<div>" + spot.name + "</div>",
                latlng: new kakao.maps.LatLng(
                    Math.floor(result[0].y * 1000000) / 1000000,
                    Math.floor(result[0].x * 1000000) / 1000000
                ),
            });
        }
        remains--;
        if (remains < 1) {
            createMarkers();
        }
    });
});

function createMarkers() {
    positions.forEach((position) => {
        console.log(position.content + " " + position.latlng);
    });

    for (var i = 0; i < positions.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커의 위치
        });
        console.log(marker.getPosition().toString());

        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content, // 인포윈도우에 표시할 내용
        });
        console.log(infowindow.getContent());

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, "mouseover", makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
    }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}
// 지도 보여주기

// 화면 확장 축소
document.querySelector("#fullMap").addEventListener("click", (e) => {
    if (mapContainer.style.position === "fixed") {
        mapContainer.style.position = "relative";
        mapContainer.style.width = "100%";
        mapContainer.style.height = "40vh";
        mapContainer.style.zIndex = ""; // 맵이 다른 요소 위에 오도록 설정한거 해제
        document.querySelector("#fullMap").style.position = "absolute";
        // 지도의 중심을 새로운 좌표로 설정
        map.relayout();
        map.setCenter(initialCenter);
    } else {
        mapContainer.style.position = "fixed";
        mapContainer.style.top = "0";
        mapContainer.style.left = "0";
        mapContainer.style.width = "100%";
        mapContainer.style.height = "100vh";
        mapContainer.style.zIndex = "1000"; // 맵이 다른 요소 위에 오도록 설정
        document.querySelector("#fullMap").style.position = "fixed";
        // 지도의 중심을 새로운 좌표로 설정
        map.relayout();
        map.setCenter(initialCenter);
    }
});
// 화면 확장 축소
