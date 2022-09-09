import request from '@/common/request'

 export async function getAllDistrict () {
         return request({
            url: `/cfm-admin-service/open-api/library/selectAllDistrictVOS`,
            method: 'get',
             // params: 
          })
 }
 
/*export async function getAllLibraries () {
  return request({
    url: `/cfm-admin-service/open-api/library/`,
    method: 'get',
    // params: 
  })
}*/

export async function queryLibraryByDistrictId (districtId) {
  return request({
    url: `/cfm-admin-service/open-api/library/queryLibraryByDistrictId/` + districtId,
    method: 'get',
    // params: 
  })
}

export async function queryWorkstationByLibraryCode (libraryId, libraryCardNumber) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/getBookingType?libraryId=` + libraryId + `&libraryCardNumber=` + libraryCardNumber,
    method: 'get', 
    // params: 
  })
}

export async function couAdvancedBooking() {
  return request({
    url: `/cfm-admin-service/open-api/couAdvancedBooking`,
    method: 'get', 
    // params: 
  })
}

export async function workstationFeature(typeId, libraryId) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/getBookingFeature?typeId=` + typeId + '&libraryId=' + libraryId,
    method: 'get', 
    // params: 
  })
}

export async function workstationLanguage(libraryId) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/getBookingLanguage?libraryId=` + libraryId,
    method: 'get', 
    // params: 
  })
}
  
export async function getDateOfUse(libraryId) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/getDateOfUse/` + libraryId,
    method: 'get', 
    // params: 
  })
}

export async function getLibraryTimeSlot(bookingDateStr, featureIds, hour, languageId, libraryId, typeId) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/getLibraryTimeSlot`,
    method: 'post',
    data: {
      "bookingDateStr": bookingDateStr,
      "featureIds": featureIds,
      "hour": hour,
      "languageId": languageId,
      "libraryId": libraryId,
      "typeId": typeId
    }
  });
}

export async function queryGroup(advancedBookingDate, featureIds, languageId, libraryId, session1Time, session2Time, typeId, walkInBookingChooseTimeVO) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/queryGroup`,
    method: 'post',
    data: {
      "advancedBookingDate": advancedBookingDate,
      "featureIds": featureIds,
      "languageId": languageId,
      "libraryId": libraryId,
      "session1Time": session1Time,
      "session2Time": session2Time,
      "typeId": typeId,
      "walkInBookingChooseTimeVO": walkInBookingChooseTimeVO
    }
  });
}

export async function queryDefaultWorkstation(advancedBookingDate, featureIds, languageId, libraryId, session1GroupId, session1Time, session2GroupId, session2Time, typeId) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/queryDefaultWorkstation`,
    method: 'post',
    data: {
      "advancedBookingDate": advancedBookingDate,
      "featureIds": featureIds,
      "languageId": languageId,
      "libraryId": libraryId,
      "session1GroupId": session1GroupId,
      "session1Time": session1Time,
      "session2GroupId": session2GroupId,
      "session2Time": session2Time,
      "typeId": typeId
    }
  });
}

export async function queryWorkstationList(groupId, typeId, advancedBookingDate, sessionTime) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/queryWorkstationList`,
    method: 'post',
    data: {
      "groupId": groupId,
      "typeId": typeId,
      "advancedBookingDate": advancedBookingDate,
      "sessionTime": sessionTime
    }
  });
}

export async function confirmBooking(advancedBookingDate, bookingSource, featureIds, hour, languageId, libraryCardNumber, libraryId, session1Time, session1WorkstationId, session2Time, session2WorkstationId, typeId) {
  return request({
    url: `/cfm-admin-service/open-api/advancedBooking/confirm`,
    method: 'post',
    data: {
      "advancedBookingDate": advancedBookingDate,
      "bookingSource": bookingSource,
      "featureIds": featureIds,
      "hour": hour,
      "languageId": languageId,
      "libraryCardNumber": libraryCardNumber,
      "libraryId": libraryId,
      "session1Time": session1Time,
      "session1WorkstationId": session1WorkstationId,
      "session2Time": session2Time,
      "session2WorkstationId": session2WorkstationId,
      "typeId": typeId
    }
  });
}

//let districtList=[
//        {"id":1,"Name":"CENTRAL AND WESTERN DISTRICT"},
//        {"id":2,"Name":"WAN CHAI DISTRICT"},
//        {"id":3,"Name":"EASTERN DISTRICT"},
//        {"id":4,"Name":"SOUTHERN DISTRICT"},
//        {"id":5,"Name":"SHAM SHUI PO DISTRICT"},
//        {"id":6,"Name":"YAU TSIM MONG DISTRICT"},
//        {"id":7,"Name":"KOWLOON CITY DISTRICT"},
//        {"id":8,"Name":"WONG TAI SIN DISTRICT"},
//        {"id":9,"Name":"KWUN TONG DISTRICT"},
//        {"id":10,"Name":"KWAI TSING DISTRICT"},
//        {"id":11,"Name":"TSUEN WAN DISTRICT"},
//        {"id":12,"Name":"TUEN MUN DISTRICT"},
//        {"id":13,"Name":"YUEN LONG DISTRICT"},
//        {"id":14,"Name":"NORTH DISTRICT"},
//        {"id":15,"Name":"TAI PO DISTRICT"},
//        {"id":16,"Name":"SHA TIN DISTRICT"},
//        {"id":17,"Name":"SAI KUNG DISTRICT"},
//        {"id":18,"Name":"ISLANDS DISTRICT"},
//      ]

//let allLibrariesList=
//       [
//        {"id":1,"Name":"City Hall Public Library","Address":"2-6/F. & 8-11/F., City Hall High Block, Central, Hong Kong","DistrictId":1},
//        {"id":2,"Name":"Shek Tong Tsui Public Library","Address":"3-4 /F., Shek Tong Tsui Municipal Services Building, 470 Queen's Road West, Hong Kong","DistrictId":1},
//        {"id":3,"Name":"Smithfield Public Library","Address":"3/F., Smithfield Municipal Services Building, 12K Smithfield, Kennedy Town, Hong Kong","DistrictId":1},
//        {"id":4,"Name":"Hong Kong Central Library","Address":"66 Causeway Road, Causeway Bay, Hong Kong","DistrictId":2},
//        {"id":5,"Name":"Lockhart Road Public Library","Address":"3-5/F., Lockhart Road Municipal Services Building, 225 Hennessy Road, Hong Kong","DistrictId":2},
//        {"id":6,"Name":"Wong Nai Chung Public Library","Address":"3/F., Wong Nai Chung Municipal Services Building, 2, Yuk Sau Street, Happy Valley, Hong Kong","DistrictId":2},
//        {"id":7,"Name":"Chai Wan Public Library","Address":"4-5/F., Chai Wan Municipal Services Building, 338 Chai Wan Road, Chai Wan","DistrictId":3},
//        {"id":8,"Name":"Quarry Bay Public Library","Address":"4-5/F., Quarry Bay Municipal Services Building, 38 Quarry Bay Street, Quarry Bay, Hong Kong","DistrictId":3},
//        {"id":9,"Name":"Electric Road Public Library","Address":"2/F., Electric Road Municipal Services Building, 229 Electric Road, Hong Kong","DistrictId":3},
//        {"id":10,"Name":"Siu Sai Wan Public Library","Address":"G/F, Siu Sai Wan Complex, 15 Siu Sai Wan Road, Chai Wan, Hong Kong","DistrictId":3},
//        {"id":11,"Name":"North Point Public Library","Address":"G/F., North Point Market Building, Pak Fuk Road, North Point, Hong Kong","DistrictId":3},
//        {"id":12,"Name":"Yiu Tung Public Library","Address":"G/F., Yiu Cheong House, Yiu Tung Estate, Shau Kei Wan, Hong Kong","DistrictId":3},
//        {"id":13,"Name":"Aberdeen Public Library","Address":"3/F., Aberdeen Municipal Services Building, 203 Aberdeen Main Road, Aberdeen, Hong Kong.","DistrictId":4},
//        {"id":14,"Name":"Stanley Public Library","Address":"Upper Ground Floor, Stanley Municipal Services Building, 6 Stanley Market Road, Stanley","DistrictId":4},
//        {"id":15,"Name":"Ap Lei Chau Public Library","Address":"5/F., Ap Lei Chau Municipal Services Building, 8 Hung Shing Street, Ap Lei Chau, Hong Kong","DistrictId":4},
//        {"id":16,"Name":"Pok Fu Lam Public Library","Address":"Units No. 611-619, Wah Chun House, Wah Fu Estate, Hong Kong","DistrictId":4},
//        {"id":17,"Name":"Lai Chi Kok Public Library","Address":"G/F - 1/F., 19 Lai Wan Road, Lai Chi Kok, Kowloon","DistrictId":5},
//        {"id":18,"Name":"Un Chau Street Public Library","Address":"1/F., Un Chau Street Municipal Services Building, 59-63, Un Chau Street, Kowloon","DistrictId":5},
//        {"id":19,"Name":"Po On Road Public Library","Address":"1/F., Po On Road Municipal Services Building, 325-329 Po On Road, Sham Shui Po, Kowloon","DistrictId":5},
//        {"id":20,"Name":"Shek Kip Mei Public Library","Address":"7/F, Shek Kip Mei Estate Ancillary Facilities Block, 100 Woh Chai Street, Shek Kip Mei, Sham Shui Po, Kowloon","DistrictId":5},
//        {"id":21,"Name":"Fa Yuen Street Public Library","Address":"4-5/F., Fa Yuen Street Municipal Services Building, 123A Fa Yuen Street, Mong Kok, Kowloon","DistrictId":6},
//        {"id":22,"Name":"Yau Ma Tei Public Library","Address":"Block A, G/F & 1-3/F, 251 Shanghai Street, Yau Ma Tei, Kowloon","DistrictId":6},
//        {"id":23,"Name":"Tai Kok Tsui Public Library","Address":"3/F., Tai Kok Tsui Municipal Services Building, 63 Fuk Tsun Street, Tai Kok Tsui, Kowloon","DistrictId":6},
//        {"id":24,"Name":"Tsim Sha Tsui Public Library","Address":"1/F., Concordia Plaza, 1 Science Museum Road, Tsim Sha Tsui East, Kowloon","DistrictId":6},
//        {"id":25,"Name":"Hung Hom Public Library","Address":"6/F., Hung Hom Municipal Services Building, 11 Ma Tau Wai Road, Kowloon","DistrictId":7},
//        {"id":26,"Name":"To Kwa Wan Public Library","Address":"5-6/F., To Kwa Wan Market & Government Offices, 165 Ma Tau Wai Road, Kowloon","DistrictId":7},
//        {"id":27,"Name":"Kowloon City Public Library","Address":"3/F., Kowloon City Municipal Services Building, 100 Nga Tsin Wai Road, Kowloon","DistrictId":7},
//        {"id":28,"Name":"Kowloon Public Library","Address":"5 Pui Ching Road, Kowloon","DistrictId":7},
//        {"id":29,"Name":"Fu Shan Public Library","Address":"Units 1-4, LG 1, Fu Yan House, Fu Shan Estate, Po Kong Village Road, Kowloon","DistrictId":8},
//        {"id":30,"Name":"Ngau Chi Wan Public Library","Address":"5-6/F., Ngau Chi Wan Municipal Services Building, 11 Clear Water Bay Road, Kowloon","DistrictId":8},
//        {"id":31,"Name":"Lok Fu Public Library","Address":"Shop No. 112, 3/F.,  Lok Fu Place,  Junction Road, Kowloon","DistrictId":8},
//        {"id":32,"Name":"San Po Kong Public Library","Address":"3/F., San Po Kong Plaza, 33 Shung Ling Street, San Po Kong, Kowloon","DistrictId":8},
//        {"id":33,"Name":"Lung Hing Public Library","Address":"North Wing, G/F.,Lung Hing House, Lower Wong Tai Sin (II) Estate, Kowloon","DistrictId":8},
//        {"id":34,"Name":"Tsz Wan Shan Public Library","Address":"Shop Nos. 701-702, 7/F., Tsz Wan Shan Shopping Centre, 23 Yuk Wah Street, Wong Tai Sin, Kowloon","DistrictId":8},
//        {"id":35,"Name":"Lam Tin Public Library","Address":"5-6/F., Lam Tin Complex, 1 Hing Tin Street, Lam Tin, Kowloon","DistrictId":9},
//        {"id":36,"Name":"Sau Mau Ping Public Library","Address":"The upper ground floor of Sau Yun House, Sau Mau Ping Estate, Sau Ming Road, Sau Mau Ping, Kowloon","DistrictId":9},
//        {"id":37,"Name":"Lei Yue Mun Public Library","Address":"1/F., Lei Yue Mun Municipal Services Building, 6 Lei Yue Mun Path, Kwun Tong, Kowloon","DistrictId":9},
//        {"id":38,"Name":"Shui Wo Street Public Library","Address":"5-6/F., Shui Wo Street Municipal Services Building, 9 Shui Wo Street, Kwun Tong, Kowloon","DistrictId":9},
//        {"id":39,"Name":"Ngau Tau Kok Public Library","Address":"2-3/F., Ngau Tau Kok Municipal Services Building, 183 Ngau Tau Kok Road, Kowloon.","DistrictId":9},
//        {"id":40,"Name":"Shun Lee Estate Public Library","Address":"3/F, Shun Lee Tsuen Sports Centre,  No. 33, Shun Lee Tsuen Road, Kwun Tong, Kowloon.","DistrictId":9},
//        {"id":41,"Name":"North Kwai Chung Public Library","Address":"2/F & 3/F North Kwai Chung Market & Library, Shek Yam Road, Kwai Chung.","DistrictId":10},
//        {"id":42,"Name":"South Kwai Chung Public Library","Address":"4/F, Kwai Hing Government Offices, 166-174 Hing Fong Road, Kwai Chung.","DistrictId":10},
//        {"id":43,"Name":"Tsing Yi Public Library","Address":"1/F, Tsing Yi Municipal Services Building,  38 Tsing Luk Street, Tsing Yi","DistrictId":10},
//        {"id":44,"Name":"Shek Wai Kok Public Library","Address":"Unit Nos. 215 -219, Shek Fong House, Shek Wai Kok Estate, Tsuen Wan","DistrictId":11},
//        {"id":45,"Name":"Tsuen Wan Public Library","Address":"38 Sai Lau Kok Road, Tsuen Wan","DistrictId":11},
//        {"id":46,"Name":"Butterfly Estate Public Library","Address":"","DistrictId":12},
//        {"id":47,"Name":"Tai Hing Public Library","Address":"Unit No. 80, 1/F, Commercial Complex,  Tai Hing Estate, Tuen Mun.","DistrictId":12},
//        {"id":48,"Name":"Tuen Mun Public Library","Address":"1 Tuen Hi Road, Tuen Mun.","DistrictId":12},
//        {"id":49,"Name":"Ping Shan Tin Shui Wai Public Library","Address":"High Block, Ping Shan Tin Shui Wai Leisure and Cultural Building, 1 Tsui Sing Road, Tin Shui Wai","DistrictId":13},
//        {"id":50,"Name":"Tin Shui Wai North Public Library","Address":"Shop 313, Tin Chak Shopping Centre, Tin Chak Estate, Tin Shui Wai, N.T.","DistrictId":13},
//        {"id":51,"Name":"Yuen Long Public Library","Address":"G-1/F, Yuen Long Leisure & Cultural Building, 52 Ma Tin Road, Yuen Long","DistrictId":13},
//        {"id":52,"Name":"Fanling Public Library","Address":"2/F, 9 Wo Mun Street, Fanling.","DistrictId":14},
//        {"id":53,"Name":"Sheung Shui Public Library","Address":"3/F, Shek Wu Hui Municipal Services Building, 13 Chi Cheong Road, Sheung Shui.","DistrictId":14},
//        {"id":54,"Name":"Fanling South Public Library","Address":"Shop Nos. 104A & 105A, 1/F, Dawning Views Shopping Plaza, 23 Yat Ming Road, Fanling, N.T.","DistrictId":14},
//        {"id":55,"Name":"Sha Tau Kok Public Library","Address":"Shop No. 3, the ground floor of Ying Hoi House, Sha Tau Kok Chuen, 23 Shun Hing Street, Sha Tau Kok, New Territories","DistrictId":14},
//        {"id":56,"Name":"Tai Po Public Library","Address":"5/F, Tai Po Complex 8 Heung Sze Wui Street Tai Po New Territories","DistrictId":15},
//        {"id":57,"Name":"Lek Yuen Public Library","Address":"Units 101 - 110, G/F, Kwai Wo House, Lek Yuen Estate, Sha Tin","DistrictId":16},
//        {"id":58,"Name":"Yuen Chau Kok Public Library","Address":"High Block of Yuen Chau Kok Complex, 35 Ngan Shing Street, Sha Tin","DistrictId":16},
//        {"id":59,"Name":"Ma On Shan Public Library","Address":"14 On Chun Street, Ma On Shan, Sha Tin","DistrictId":16},
//        {"id":60,"Name":"Sha Tin Public Library","Address":"1 Yuen Wo Road, Sha Tin","DistrictId":16},
//        {"id":61,"Name":"Sai Kung Public Library","Address":"5/F, Sai Kung Government Offices, 34 Chan Man Street, Sai Kung","DistrictId":17},
//        {"id":62,"Name":"Tiu Keng Leng Public Library","Address":"4 Chui Ling Road, Tseung Kwan O, N.T, Sha Tin","DistrictId":17},
//        {"id":63,"Name":"Tseung Kwan O Public Library","Address":"9, Wan Lung Road, Tseung Kwan O","DistrictId":17},
//        {"id":64,"Name":"Cheung Chau Public Library","Address":"2/F, Cheung Chau Municipal Services Building, 2 Tai Hing Tai Road, Cheung Chau.","DistrictId":18},
//        {"id":64,"Name":"Peng Chau Public Library","Address":"G/F, Peng Chau Municipal Services Building, 6 Po Peng Street, Peng Chau.","DistrictId":18},
//        {"id":65,"Name":"Tung Chung Public Library","Address":"G/F - 1/F Tung Chung Municipal Services Building, 39 Man Tung Road, Tung Chung, Lantau Island","DistrictId":18},
//        {"id":66,"Name":"Mui Wo Public Library","Address":"G/F, Mui Wo Municipal Services Building, 9 Ngan Shek Street, Mui Wo, Lantau Island.","DistrictId":18},
//        {"id":67,"Name":"South Lamma Public Library","Address":"Second Street, Sok Kwu Wan, Lamma Island.","DistrictId":18},
//        {"id":68,"Name":"North Lamma Public Library","Address":"The first and second floors, 1 Yung Shue Wan Main Street, Lamma Island.","DistrictId":18},
//        {"id":69,"Name":"Tai O Public Library","Address":"Shop No. 12, Commercial Centre, Lung Tin Estate, Tai O, Lantau Island.","DistrictId":18},
//      ]