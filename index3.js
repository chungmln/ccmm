// 로또 추첨기 만들어보자
//

// 로또 추점 기계

// 로또 번호들이 들어갈 로또 박스
let lottoNum = [];

let res = [];

// 1. 로또는 겹치는 숫자가 없어야하고
// 2. 숫자가 6개
// 3. 나온 숫자들의 결과를 보여주자

// 채크하면서 만들어야 버그가 어디서났는지 바로바로 해결하기 쉽다.

// 추첨 전에 세팅작업
function lottoInit(){
    // 로또의 번호를 모두 뽑아놓고 가져다 사용하자.
    // 1 ~ 45번까지 반복시키자
    // 배열에 값을 추가하는 작업은 초기화를 해야하는지
    // 확인을 꼭하고 작업을 진행해야한다.

    
    // 배열 초기화
    lottoNum = [];
    for (let i = 1; i <= 45; i++) {
        // 1 ~ 45까지의 숫자를 배열에 담아주고
        lottoNum.push(i);
    }
    
    console.log("로또번호"+ lottoNum);
}

// 로또 추첨 실행 함수
function lottoPlay(){
    // 배열 초기화
    res = [];

    // 추첨 하는곳
    for (let i = 0; i < 6; i++) {
        // 값이 만약에 5.7
        // floo r함수는 5로 만들어준다
        // 버림 정수로 변환
        // 0 ~ 44 랜덤 숫자를 뽑고 인덱스로 사용해야겠다.
        let rndIndex = Math.floor(Math.random() * lottoNum.length);

        // 랜덤으로 뽑은 인덱스를 가지고 lottoNum배열에 인덱스로 전달해서
        // number라는 변수에 담아놓자.(사용하기 위해서 담은것.)
        let number = lottoNum[rndIndex];

        // 랜덤한 값이 또 나오지 않게 하기 위해서.
        // 배열에서 값을 제거하려면 어떻게해야할까.
        // 배열의 메소드 splice 함수를 사용하면 됩니다.
        // 시작점(인덱스) , 그 시작점으로 부터 몇개를 제거할것인지.
        // 매개변수로 전달.
        lottoNum.splice(rndIndex, 1);
        // 인덱스에 해당하는 값 하나만 제거
        // 해당 배열에서 값이 제거되면 길이가 줄어들기 때문에
        // 랜덤값을 구하는 과정에서도 lottoNum.length 길이 값이 줄어들기때문에
        // 정상적으로 작동 될수있다.

        // 결과값 담아두자
        res.push(number);
    }
}

function main(){
    // 로또 세팅 하고
    lottoInit();
    
    // 로또 추첨 하자
    lottoPlay();

    console.log("로또의 결과는? " + res );
}

// 함수 초기화나 play같은 위의 코드처럼 단위별로 기능을 정리해두었을때
// 단위 테스트가 가능하다.
// 단위별로 버그가 없는지 테스트 해볼수 있다.

// 단위별 기능 오류가 없게 되면 통합 테스트를 진행 전체적 기능이 오류가 없는지
// 테스트 진행 할수 있다.

// 전체기능이 들어있는 함수를 만들고 함수가 실행될때마다
// 해당 기능이 동작할수 있게 재사용성을 높힐수 있다.

main();
main();
main();

// 이렇게 단위 통합으로 작업을 정리해두는 습관을 길러야한다.