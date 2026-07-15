/* ============================================================
   청해신푸드 · 상품/콘텐츠 데이터 (단일 소스)
   - 가격·상품·공지·후기·기본정보를 여기서 관리
   - 관리자모드(admin.html)에서 편집하면 이 내용이 자동으로 바뀝니다
   - 편집 후 admin에서 "products.js 내보내기" → 이 파일을 교체하면 영구 반영
   ============================================================ */
window.STORE_DEFAULT = {
  /* 기본 정보 */
  info: {
    brand: "청해신푸드",
    topbar: "🌊 청정 보물섬 남해에서 차린 · 청해신푸드 · 보물섬명품 쌈장 무료배송",
    cs: "055-000-0000",
    csHours: "평일 09:00–18:00 · 점심 12:00–13:00 (주말·공휴일 휴무)",
    coupon: "WELCOME3000",
    biz: "상호 청해신푸드 · 대표 000 · 사업자등록번호 000-00-00000 · 통신판매업신고 0000-경남남해-0000<br>주소 경상남도 남해군 · 개인정보관리책임자 000 · 이메일 help@chunghaesin.example<br>© 2026 CHUNGHAESIN FOOD. 본 페이지는 디자인 시안이며 실제 결제는 연동되어 있지 않습니다."
  },

  /* 카테고리 탭 (all 은 자동) */
  categories: [
    { key: "jang",   label: "쌈장·장" },
    { key: "juk",    label: "보물죽·빼때기죽" },
    { key: "milkit", label: "간편식" }
  ],

  /* 대표상품 3종 (slug + 뱃지 캡션) */
  signature: [
    { slug: "ssamjang",       cap: "BEST" },
    { slug: "bomul_bbae_set", cap: "SET" },
    { slug: "bbaettaegi_5",   cap: "건강식" }
  ],

  /* 상품 목록 */
  products: [
    { slug:"ssamjang", name:"[청해신푸드] 보물섬명품 쌈장", cat:"jang", catLabel:"쌈장·장",
      price:35000, priceSuffix:"", priceNote:"", badges:["best","free"], free:true,
      img:"ssamjang.jpg", img2:"ssamjang_2.jpg", uid:3523854, detailDir:"ssamjang", detailN:4, detailNote:"",
      desc:"된장에 정성을 더한 남해 대표 밥도둑" },

    { slug:"aekjeot", name:"[참존식품] 남해어부림 멸치액젓", cat:"jang", catLabel:"액젓",
      price:9000, priceSuffix:"~", priceNote:"600ml 9,000원 · 2.2kg 18,000원 (옵션) · 배송비 5,000원", badges:["new"], free:false,
      img:"aekjeot.jpg", img2:"aekjeot_2.jpg", uid:3522037, detailDir:"aekjeot", detailN:7, detailNote:"",
      desc:"남해 멸치로 담근 감칠맛 가득 액젓" },

    { slug:"milkit", name:"[청해신푸드] 된장찌개 밀키트 300g 2개", cat:"milkit", catLabel:"간편식",
      price:23000, priceSuffix:"", priceNote:"", badges:["new"], free:false,
      img:"milkit.jpg", img2:"milkit_2.jpg", uid:3523855, detailDir:"milkit", detailN:4, detailNote:"",
      desc:"집에서 간편하게 끓이는 남해 장맛 된장찌개" },

    { slug:"bomuljuk_15", name:"[청해신푸드] 남해당당보물죽 180g×15팩", cat:"juk", catLabel:"보물죽",
      price:64000, priceSuffix:"", priceNote:"", badges:["gold"], free:false,
      img:"bomuljuk_15.jpg", img2:"bomuljuk_15_2.jpg", uid:3522034, detailDir:"bomuljuk_15", detailN:9, detailNote:"",
      desc:"정성가득 당당한 한끼, 남해 보물죽" },

    { slug:"bomul_bbae_set", name:"[청해신푸드] 당당보물죽 10팩 + 빼때기죽 5팩", cat:"juk", catLabel:"세트",
      price:64000, priceSuffix:"", priceNote:"", badges:["best"], free:false,
      img:"bomul_bbae_set.jpg", img2:"bomul_bbae_set_2.jpg", uid:3522036, detailDir:"bomul_bbae_set", detailN:11, detailNote:"",
      desc:"보물죽 10팩 + 빼때기죽 5팩 구성" },

    { slug:"bbaettaegi_5", name:"[청해신푸드] 남해당당빼때기죽 200g×5팩", cat:"juk", catLabel:"빼때기죽",
      price:22000, priceSuffix:"", priceNote:"", badges:["new"], free:false,
      img:"bbaettaegi_5.jpg", img2:"bbaettaegi_5_2.jpg", uid:3523857, detailDir:"bbaettaegi_5", detailN:8, detailNote:"",
      desc:"자색고구마·유자로 만든 건강 한끼" },

    { slug:"bbaettaegi_15", name:"[청해신푸드] 남해당당빼때기죽 200g×15팩", cat:"juk", catLabel:"빼때기죽",
      price:64000, priceSuffix:"", priceNote:"", badges:["gold"], free:false,
      img:"bbaettaegi_15.jpg", img2:"bbaettaegi_15_2.jpg", uid:3522035, detailDir:"bbaettaegi_5", detailN:8,
      detailNote:"※ 빼때기죽 200g 공통 상세입니다 (5팩·15팩 동일 상품). 15팩 전용 상세컷 확보 시 반영합니다.",
      desc:"넉넉한 15팩, 자색고구마 빼때기죽" }
  ],

  /* 후기 */
  reviews: [
    { star:5, txt:"쌈장이 정말 밥도둑이에요. 짜지 않고 구수해서 쌈 없이 밥에 비벼 먹어도 맛있어요.", who:"김O연", prod:"보물섬명품 쌈장" },
    { star:5, txt:"빼때기죽 처음 먹어봤는데 자색고구마 단맛이 은은하고 속이 편해요. 부모님도 좋아하세요.", who:"이O호", prod:"남해당당 빼때기죽" },
    { star:5, txt:"보물죽 세트 선물했더니 반응 최고. 아침 대용으로 든든합니다.", who:"박O진", prod:"당당보물죽 세트" },
    { star:4, txt:"된장찌개 밀키트 간편하고 남해 장맛이 깊어요. 자취생에게 강추!", who:"최O아", prod:"된장찌개 밀키트" }
  ],

  /* 공지 */
  notices: [
    { cat:"공지",   ev:false, tt:"[배송안내] 신선 상품 냉장 배송 및 지역별 배송 일정 안내", dt:"2026.07.10" },
    { cat:"이벤트", ev:true,  tt:"[이벤트] 첫 구매 고객 3,000원 쿠폰 증정", dt:"2026.07.05" },
    { cat:"공지",   ev:false, tt:"[안내] 청해신푸드 남해몰 정식 입점 및 판매 안내", dt:"2026.06.28" },
    { cat:"이벤트", ev:true,  tt:"[리뷰이벤트] 포토리뷰 작성 시 적립 혜택", dt:"2026.06.20" }
  ]
};

/* 저장소: localStorage 편집본이 있으면 그걸, 없으면 기본값 */
window.STORE_KEY = "cheonghaesin_store_v1";
window.getStore = function () {
  try {
    var ov = JSON.parse(localStorage.getItem(window.STORE_KEY) || "null");
    if (ov && ov.products) return ov;
  } catch (e) {}
  return window.STORE_DEFAULT;
};
window.saveStore = function (store) {
  localStorage.setItem(window.STORE_KEY, JSON.stringify(store));
};
window.resetStore = function () {
  localStorage.removeItem(window.STORE_KEY);
};
