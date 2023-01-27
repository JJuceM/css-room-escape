# css-room-escape (개인 프로젝트)

![mainPage](https://user-images.githubusercontent.com/93819704/215015124-87b81f27-c7bb-4acb-9d89-57b1bf41ee8b.gif)

목차

## 프로젝트 소개

<p align="justify">
  올바른 CSS 선택자를 입력하여 목표를 달성하고, 방을 탈출하는 게임입니다. <br>
  기존 CSS Diner 게임을보고 영감을 얻었으며, React 프레임워크를 이용하여 제작했습니다. <br>
  Class, Id, name 등등 다양한 선택자를 이용하여 방을 탈출해보세요.
</p>


<br>

## 기술 스택

| JavaScript |  React   |  Node   |
| :--------: | :------: | :-----: |
|   ![js]    | ![react] | ![node] |

<br>

## 구현 기능

### - 스테이지 클리어 상태를 체크로 확인 가능. (JS로 확인하여, CSS style 변경)

### - HTML Viewer에 존재하지않는 오브젝트를 입력시 Viewer가 진동하며 오답 알림

### - 목표 달성시 스테이지 자동 이동

### - 두개이상 오브젝트가 존재할 때 정답만 액션효과 생성 (오답: 입력한 값이 존재할 때 해당되는 오브젝트 진동)

### - 메뉴 버튼을 이용해 직접 클릭으로 스테이지 이동 (추가: 입력창에 숫자 입력시 해당 스테이지로 이동)

### - 스테이지 새로고침 기능 (추가: 모든 스테이지 초기화 기능)

### - ClassName을 이용하여 정적으로 Level을 작성하지않고, levels.js 파일을 수정하여 동적으로 추가/삭제 가능

<br>

## 배운 점 & 아쉬운 점

<p align="justify">
  <배운점> <br>
 기존 프로젝트들은 프레임워크를 활용하지않고, 순수 HTML5/ JS/ CSS를 이용해 개발했었다. 그땐 불편함이 많았다. <br>
  우선 코드의 반복성이 짙었다. 최적화가 힘들며 모두 스스로 만들어내야했다.<br>React 프레임워크 특징인 jsx를 활용해 각 기능마다 여러 funtion으로 나누니 그 문제들이 해결됐다. 기존에 프레임워크 없이 개발했을 때 보다 훨씬 편한게 많았다.<br>
    이번 프로젝트를 진행하며 CSS와 JS를 기존에 활용하던 기본적인 기능보다, 훨씬 많은 기능을 찾아보며 적용해 보아서 좋았다.<br>
    기존 프로젝트들은 정적인 개발에 집중했다면, 이번 css-room-escape는 동적인 개발에 집중하다보니 동적 웹페이지에 대한 이해가 높아졌다. <hr>
  <아쉬운점> <br>
    기능은 모두 구현했지만, 많은 스테이지를 구현하지 못하고 프로젝트를 마무리한것이 아쉬웠다.<br>
    혼자서 모든 디자인을 구상하고 제작하여, 적용하는것이 힘들었다. 디자인을 하는사람과 같이 프로젝트를 진행하였으면 조금 더 수월했을것같다.
  
</p>

<br>

<!-- Stack Icon Refernces -->

[js]: /public/img/javascript.svg
[react]: /public/img/react.svg
[node]: /public/img/node.svg
