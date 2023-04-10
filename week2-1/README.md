# 2주차 IoT 스터디 - 모각코
## 개요
주차: 2주차 모각코 <br>
날짜: 2023년 4월 6일 목요일 18:30 ~ 21:00 <br>
장소: 국민대학교 미래관 445호 <br>
주제: `1. Server - Node.js 입문` <br>
참여: IoT 스터디 및 CV 스터디 참여자 22명 <br>
멘토: 윤민우, 이준혁, 윤신지 <br>

## 진행 방식
1. 모각코 조끼리 모입니다.
2. 모각코 조끼리 함께 강의 자료를 보면서 공부를 진행하고, 제공된 과제를 같이 수행합니다.
3. 만약 질문이 있다면, 멘토를 불러주세요! 만약, 멘토가 없다면 <a href="https://github.com/kmu-koss/2023-1_IoT_Study#%EC%98%A8%EB%9D%BC%EC%9D%B8-%EC%A7%88%EB%AC%B8-%EB%B0%A9%EB%B2%95">온라인 질문 방법</a>을 참고하여 GitHub Issue를 통해 질문해주세요!
4. <a href="https://github.com/kmu-koss/2023-1_IoT_Study#%EA%B3%BC%EC%A0%9C-%EC%A0%9C%EC%B6%9C---github">과제 제출 포맷</a>을 참고하여 과제를 각자 제출합니다.

## 강의 자료
<a href="https://www.youtube.com/watch?v=Tt_tKhhhJqY">한시간만에 Node.js 백엔드 기초 끝내기 (ft. API 구축)</a>


## 과제(~4/11)
제공된 FrontEnd(React)파일을 실행시키고, 아래에 있는 API 명세서에 따라 BackEnd(Express Server)를 제작하여 과제를 제출합니다. 과제 제출 방법은 <a href="https://github.com/kmu-koss/2023-1_IoT_Study#%EA%B3%BC%EC%A0%9C-%EC%A0%9C%EC%B6%9C---github">과제 제출 포맷</a>을 참고하세요! <br>
제공된 FrontEnd를 실행시키기 위해서는 Node.js(LTS 버전을 추천) 설치하고, React를 설치한 이후, `npm install`을 통하여 모듈들을 설치하고, `npm start`를 통해서 실행시킬 수 있습니다. 서버는 `http://127.0.0.1:3000`에 열리게 됩니다. <br>
그리고, 데이터베이스를 사용하고 있지 않기 때문에 데이터는 아래의 데이터 포맷과 같이 하드코딩을 통해서 저장하고 FrontEnd에서 GET 요청을 하면 데이터를 보내주면 됩니다.

### API 명세서
| Index | Method | URI | Data Format | Description |
|---|---|---|---| --- |
| 1 | GET | /dust | [{ team: "String Type Team Name", value: "Number Type Dust Value" }, { team: "모각코 2조", value: "38" }] | team 이름과, value에 미세먼지 측정값을 보낸다. |
| 2 | PATCH | /toggle | "ON" or "OFF" | 버튼을 통해 ON과 OFF를 제어한다. |

## 미리 해보는 과제(~4/13)
해당 과제도 모각코 조와 함께하는 과제로, 11일부터 13일까지 기간이 너무 짧기 때문에 미리 공지드립니다! 과제를 미리 제출해주셔도 좋고, 13일까지 제출해주셔도 좋습니다. <br>
위에서는 `[{ team: "String Type Team Name", value: "Number Type Dust Value" }, { team: "모각코 2조", value: "38" }]`을 하드 코딩을 통해서 저장했었는데, 이번엔 MongoDB(혹은 MongoDB Atlas)와 Mongoose를 Express 서버에 추가하여 데이터베이스에 있는 정보들을 find하여 미세먼지 정보를 가져오고, 그 정보를 GET Method가 동작할때 보낼 수 있도록 만들어보세요! <br>
그리고 Mongoose를 사용할때 민감한 정보(아이디, 비밀번호)가 포함되기 때문에, GitHub에 절대 올리지 마시고 dotenv 모듈을 공부하여 dotenv를 통해서 민감한 데이터가 공개되지 않게 만드세요! <br>
과제 제출 방법은 위와 동일합니다.
