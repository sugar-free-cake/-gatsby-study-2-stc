# GatsbyJs study #2

* 일시 : 2019-10-26
* 원본 사이트 : [SWEDISH TRADING COMPANY LIMITED](https://www.swedishtrading.com/)

## 그리드 시스템

* [https://www.styled-components.com/ecosystem](https://www.styled-components.com/ecosystem) 의 Grid Systems 에서 하나를 고름.
* 12컬럼 제한이 아님, 모바일 대응 가능의 이유로
[https://github.com/arovillard/styled-grid-responsive](https://github.com/arovillard/styled-grid-responsive) 을 선택함.

## 배너

* 현재 조회중인 페이지 경로 확인 필요
* [https://github.com/gatsbyjs/gatsby/issues/8787#issuecomment-427216043](https://github.com/gatsbyjs/gatsby/issues/8787#issuecomment-427216043)
* import { Location } from "@reach/router" 사용

## 푸터 애니메이션

* css keyframes 애니메이션 적용만으로는 부족.
* 화면 하단부에 위치하였으므로 처음 랜더링시 스크롤 밖에서 애니메이션이 실행됨.
* 스크롤을 내려 해당 요소가 보일 경우, 애니메이션 설정이 지정된 class를 추가할 필요가 있음.
* [https://github.com/civiccc/react-waypoint](https://github.com/civiccc/react-waypoint) 을 사용.
* 해당 요소에서 벗어날 경우, 추가했었던 class를 제거하여 다시 해당 요소에 접근할 경우 애니메이션 효과가 나타나도록 함.

## 지도 색상

* [https://mapstyle.withgoogle.com/](https://mapstyle.withgoogle.com/)
에서 지정하면 됨. 
* 키 설정 귀찮아서 적용 안함;

## 슬라이더

* laundry-solutions
* z-index 값 변경으로 슬라이더 이동
 * z-index:3 // 현재 슬라이더
 * z-index:2 // 이전 슬라이더, 애니메이션 적용시 뒤에 깔려야 함
 * z-index:1 // 나머지 슬라이더

## 메뉴

* 드롭다운 메뉴에 onMouseOver , onMouseLeave 지정

## 모바일 메뉴

* 현재 적용된 방식은 코드 중복이 있음
