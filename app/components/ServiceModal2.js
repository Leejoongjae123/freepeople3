"use client";
import AppModal from "./ReactModal";
import { useState } from "react";

import React from "react";

export default function PrivacyModal({ modalText, closeModal }) {
  return (
    <>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        className="inset-0 fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-md"
      >
        <div className="relative max-w-screen-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-start justify-between p-4 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                서비스 범위
              </h3>
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 p-6 space-y-6 ">
              <div>
                <p className="whitespace-pre-wrap text-base leading-relaxed text-black dark:text-gray-400">
                  <span className="text-lg font-bold">■ 정보.분석</span>
                  <br />
                  -빅데이터 분석 : 언론진흥재단 빅카인즈를 활용한 주간단위
                  텍스트 분석
                  <br />
                  -논평 및 컬럼 : 일일 주요 정책 및 이슈 논평 및 주간 단위 핵심
                  아젠다 컬럼
                  <br />
                  -대통령 지지도 분석 : 국내 3대 조사기관 주간 대통령지지도{" "}
                  <br />
                  -주요 정당 논평 : 국민의힘, 더불어민주당, 정의당 등 정당 논평
                  <br />
                  -뉴스 서비스 : 국내 5대 일간지 및 각 광역단체별 지역 일간지
                  뉴스
                  <br />
                  -통계정보 : 통계청 및 한국은행 주요 통계 게시
                  <br />
                  -정책정보 : KDI, 국회(비정기), 정부 각부처 정책보도자료(주간
                  또는 일간) 등 제시
                  <br />
                  -선거자료 : 대통령, 국회의원, 지방선거 주요 공약 및 데이터{" "}
                  <br />
                  <br />
                  <span className="text-lg font-bold">■ 연구.조사.컨설팅 </span>
                  <br />
                  -연구 : 정치(선거, 행정), 경제(금융, 산업, 재정), 사회(복지,
                  교육, 노동) 등 주제별 심층 연구 <br />
                  -조사 : 여론, 정책, 인지도 등 정량조사 및 FGI, FGD 등 정성조사
                  <br />
                  -컨설팅 : 선거, PI(개인이미지) 컨셉, 홍보(메시지, 자문) 등
                  제반 캠페인 전략 <br />
                </p>
              </div>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={closeModal}
                data-modal-hide="staticModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function PrivacyModal() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };
//   return (
//     <div>
//       <button onClick={openModal}>개인정보 처리 방침</button>
//       <AppModal isOpen={modalIsOpen} closeModal={closeModal}>
//         <div className="">
//           <div className="relative w-full max-w-2xl max-h-full">
//             <div className="relative bg-white  dark:bg-gray-700">
//               <div className="flex items-start justify-between p-4  dark:border-gray-600">
//                 <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                   서비스 범위
//                 </h1>
//               </div>

//               <div>
//                 <p>1. 개인정보의 처리 목적</p>
//                 <p>
//                   &lt;미래민중&gt;(‘
//                   <a href="http://www.peoplehub.co.kr/" target="_self">
//                     www.peoplehub.co.kr
//                   </a>
//                   이하 ‘미래민중’) 은 다음의 목적을 위하여 개인정보를 처리하고
//                   있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
//                 </p>
//                 <p>
//                   – 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인
//                   식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른
//                   금액 결제, 물품 또는 서비스의 공급.배송 등
//                 </p>
//                 <p>2. 개인정보의 처리 및 보유 기간</p>
//                 <p>
//                   ① ‘미래민중’은 정보주체로부터 개인정보를 수집할 때 동의 받은
//                   개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간
//                   내에서 개인정보를 처리․보유합니다.
//                 </p>
//                 <p>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
//                 <p>
//                   – 고객 가입 및 관리 : 카카오싱크를 통한 회원가입 및
//                   카카오채널을 통한 관리
//                 </p>
//                 <p>– 보유 기간 : 카카오채널 탈퇴 시, 즉시 삭제</p>
//                 <p>
//                   3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
//                   개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
//                 </p>
//                 <p>
//                   ① 정보주체는 ‘미래민중’ 에 대해 언제든지 다음 각 호의 개인정보
//                   보호 관련 권리를 행사할 수 있습니다.
//                 </p>
//                 <p>1. 개인정보 열람요구</p>
//                 <p>2. 오류 등이 있을 경우 정정 요구</p>
//                 <p>3. 삭제요구</p>
//                 <p>4. 처리정지 요구</p>
//                 <p>4. 처리하는 개인정보의 항목 작성</p>
//                 <p>① ‘미래민중’은 다음의 개인정보 항목을 처리하고 있습니다.</p>
//                 <p>&lt;‘미래민중’에서 수집하는 개인정보 항목&gt;</p>
//                 <p>
//                   ‘미래민중’ 회원 가입 및 고객 문의 시, 제공 동의를 해주시는
//                   개인정보 수집 항목입니다.
//                 </p>
//                 <p>■ 회원 가입 시(회원)</p>
//                 <p>– 필수항목 : 이름, 이메일, 전화번호, 성별, 연령대</p>
//                 <p>– 선택항목 : 생년월일</p>
//                 <p>– 수집목적 : 미래민중 회원관리 및 마케팅 이용</p>
//                 <p>– 보유기간 : 회원 탈퇴 또는 동의철회 시 지체없이 파기</p>
//                 <p>■ 고객 문의 시(비회원)</p>
//                 <p>– 필수항목 : 문의종류, 이름, 휴대폰번호, 이메일, 문의사항</p>
//                 <p>
//                   – 수집목적 : 고객문의 및 상담요청에 대한 회신, 상담을 위한
//                   서비스 이용기록 조회
//                 </p>
//                 <p>
//                   – 보유기간 : 문의 접수 후 2년 간 보관 (단, 관계 법령이 정한
//                   시점까지 보존)
//                 </p>
//                 <p>
//                   ② ‘미래민중’은 만 14세 미만 아동의 개인정보를 보호하기 위하여
//                   회원가입은 만14세 이상만 가능하도록 함으로써 아동의 개인정보를
//                   수집하지 않습니다.
//                 </p>
//                 <p>5. 개인정보의 파기</p>
//                 <p>
//                   ‘미래민중’은 원칙적으로 개인정보 처리목적이 달성된 경우에는
//                   지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및
//                   방법은 다음과 같습니다.’
//                 </p>
//                 <p>-파기절차</p>
//                 <p>
//                   이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의
//                   경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간
//                   저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는
//                   법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
//                 </p>
//                 <p>-파기기한</p>
//                 <p>
//                   이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
//                   보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성,
//                   해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게
//                   되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는
//                   날로부터 5일 이내에 그 개인정보를 파기합니다.
//                 </p>
//                 <p>
//                   6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
//                 </p>
//                 <p>
//                   ① ‘미래민중’은 개별적인 맞춤서비스를 제공하기 위해 이용정보를
//                   저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
//                 </p>
//                 <p>
//                   ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(https)가 이용자의
//                   컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC
//                   컴퓨터내의 하드디스크에 저장되기도 합니다.
//                 </p>
//                 <p>
//                   가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹
//                   사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부,
//                   등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
//                 </p>
//                 <p>
//                   나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의
//                   도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키
//                   저장을 거부 할 수 있습니다.
//                 </p>
//                 <p>
//                   다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이
//                   발생할 수 있습니다.
//                 </p>
//                 <p>7. 개인정보 보호책임자 작성</p>
//                 <p>
//                   ① ‘미래민중’은 개인정보 처리에 관한 업무를 총괄해서 책임지고,
//                   개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을
//                   위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
//                 </p>
//                 <p>▶ 개인정보 보호책임자</p>
//                 <p>성명 : 정우식</p>
//                 <p>직책 : 대표</p>
//                 <p>직급 : CEO</p>
//                 <p>연락처 : jeongfran@gmail.com</p>
//                 <p>※ 개인정보 보호 담당부서로 연결됩니다.</p>
//                 <p>▶ 개인정보 보호 담당부서</p>
//                 <p>담당자 : 정우식</p>
//                 <p>연락처 : jeongfran@gmail.com</p>
//                 <p>
//                   ② ‘미래민중’의 서비스(또는 사업)을 이용하시면서 발생한 모든
//                   개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
//                   개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
//                 </p>
//                 <p>
//                   ‘미래민중’은 정보주체의 문의에 대해 지체 없이 답변 및
//                   처리해드릴 것입니다.
//                 </p>
//                 <p>8. 개인정보 처리방침 변경</p>
//                 <p>
//                   ① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에
//                   따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의
//                   시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
//                 </p>
//                 <p>9. 개인정보의 안전성 확보 조치</p>
//                 <p>
//                   ‘미래민중’은 개인정보보호법 제29조에 따라 다음과 같이 안전성
//                   확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
//                 </p>
//                 <p>① 개인정보 취급 직원의 최소화 및 교육</p>
//                 <p>
//                   개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화
//                   하여 개인정보를 관리하는 대책을 시행하고 있습니다.
//                 </p>
//                 <p>② 해킹 등에 대비한 기술적 대책</p>
//                 <p>
//                   ‘미래민중’은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출
//                   및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
//                   갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을
//                   설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
//                 </p>
//                 <p>③ 개인정보의 암호화</p>
//                 <p>
//                   이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고
//                   있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송
//                   데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도
//                   보안기능을 사용하고 있습니다.
//                 </p>
//                 <p>④ 접속기록의 보관 및 위변조 방지</p>
//                 <p>
//                   개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관,
//                   관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록
//                   보안기능 사용하고 있습니다.
//                 </p>
//                 <p>⑤ 개인정보에 대한 접근 제한</p>
//                 <p>
//                   개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,
//                   변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
//                   조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
//                   접근을 통제하고 있습니다.
//                 </p>
//                 <p>10. 정보주체의 권익침해에 대한 구제방법</p>
//                 <p>
//                   아래의 기관은 미래민중과는 별개의 기관으로서, ‘미래민중’의
//                   자체적인 개인정보 불만처리, 피해구제 결과에 만족하지
//                   못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기
//                   바랍니다.
//                 </p>
//                 <p>▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)</p>
//                 <p>– 소관업무 : 개인정보 침해사실 신고, 상담 신청</p>
//                 <p>– 홈페이지 : privacy.kisa.or.kr</p>
//                 <p>– 전화 : (국번없이) 118</p>
//                 <p>
//                   – 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층
//                   개인정보침해신고센터
//                 </p>
//                 <p>▶ 개인정보 분쟁조정위원회</p>
//                 <p>
//                   – 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
//                 </p>
//                 <p>– 홈페이지 : www.kopico.go.kr</p>
//                 <p>– 전화 : (국번없이) 1833-6972</p>
//                 <p>
//                   – 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사
//                   4층
//                 </p>
//                 <p>
//                   ▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)
//                 </p>
//                 <p>
//                   ▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </AppModal>
//     </div>
//   );
// }
