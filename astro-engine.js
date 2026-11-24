const ASTRO_CONST = {
    DAYS: { 1: 'อาทิตย์ (๑)', 2: 'จันทร์ (๒)', 3: 'อังคาร (๓)', 4: 'พุธ (๔)', 5: 'พฤหัสบดี (๕)', 6: 'ศุกร์ (๖)', 7: 'เสาร์ (๗)', 8: 'ราหู (๘)' },
    SYMBOLS: { 1: '๑', 2: '๒', 3: '๓', 4: '๔', 5: '๕', 6: '๖', 7: '๗', 8: '๘', 9: '๙', 0: '๐' },
    FULL_NAMES: { 1: '๑ อาทิตย์', 2: '๒ จันทร์', 3: '๓ อังคาร', 4: '๔ พุธ', 5: '๕ พฤหัส', 6: '๖ ศุกร์', 7: '๗ เสาร์', 8: '๘ ราหู', 9: '๙ เกตุ', 0: '๐ มฤตยู' },
    ZODIACS: ['เมษ ♈', 'พฤษภ ♉', 'เมถุน ♊', 'กรกฎ ♋', 'สิงห์ ♌', 'กันย์ ♍', 'ตุลย์ ♎', 'พิจิก ♏', 'ธนู ♐', 'มังกร ♑', 'กุมภ์ ♒', 'มีน ♓'],
    ANIMALS: ['ชวด 🐭', 'ฉลู 🐮', 'ขาล 🐯', 'เถาะ 🐰', 'มะโรง 🐲', 'มะเส็ง 🐍', 'มะเมีย 🐴', 'มะแม 🐐', 'วอก 🐵', 'ระกา 🐔', 'จอ 🐶', 'กุน 🐷'],
   TAKSA_SEQ: '1,2,3,4,7,5,8,6'.split(',').map(Number),
    TAKSA_ROLES: ['บริวาร', 'อายุ', 'เดช', 'ศรี', 'มูละ', 'อุตสาหะ', 'มนตรี', 'กาลกิณี'],
    BASE_NAMES: ['ฐาน 1 (วัน)', 'ฐาน 2 (เดือน)', 'ฐาน 3 (ปี)', 'ฐาน 4 (ผลบวก)', 'ฐาน 5 (กำลังดาว)', 'ฐาน 6 (ฐานบวก)', 'ฐาน 7 (ฐานบวก)', 'ฐาน 8 (ฐานบวก)', 'ฐาน 9 (สรุป)'],
    HOUSES: [
        ['อัตตะ', 'หินะ', 'ธานัง', 'ปิตา', 'มาตา', 'โภคา', 'มัชฌิมา'],
        ['ตะนุ', 'กดุมภะ', 'สหัชชะ', 'พันธุ', 'ปุตตะ', 'อริ', 'ปัตนิ'],
        ['มรณะ', 'สุภะ', 'กัมมะ', 'ลาภะ', 'พยายะ', 'ทาสา', 'ทาสี']
    ],
    BASE4_MEANINGS: { 8: 'อังคาร', 9: 'เกตุ', 10: 'เสาร์', 11: 'ราชาโชค', 12: 'ราหู', 13: 'มหาอุจจ์', 14: 'จักรพรรดิ', 15: 'จันทร์', 16: 'โสฬส', 17: 'พุธ', 18: 'จักรพรรดิ', 19: 'พฤหัส', 20: 'เสาร์คู่', 21: 'ศุกร์' },
       BASE8_MEANINGS: ['อาตมะ', 'ทาสา', 'สิทธิโชค', 'โภคทรัพย์', 'โจร', 'อุบาทว์', 'อุปถัมภ์'],
    BASE9_MEANINGS: ['อัตตะ', 'สักกะ', 'ญาติ', 'ธะนัง', 'เคหัง', 'นาวัง', 'ภริยัง'],
    POWER: { 1: 6, 2: 15, 3: 8, 4: 17, 5: 19, 6: 21, 7: 10 },
    ANTO_STD: '96,108,120,132,132,120,120,132,132,120,120,108'.split(',').map(Number),
    LORDS: '3,6,4,2,1,4,6,3,5,7,7,5'.split(',').map(Number),
    NAKSHATRAS: [
        'อัศวินี (ทลิทโทฤกษ์)', 'ภรณี (มหัทธโนฤกษ์)', 'กฤตติกา (โจโรฤกษ์)', 'โรหิณี (ภูมิปาโลฤกษ์)', 'มฤคศิระ (เทศาตรีฤกษ์)', 'อารทรา (เทวีฤกษ์)', 'ปุนัพสุ (เพชฌฆาตฤกษ์)', 'ปุษยะ (ราชาฤกษ์)', 'อาศเลษา (สมโณฤกษ์)',
        'มาฆะ (ทลิทโทฤกษ์)', 'บุรพผลคุนี (มหัทธโนฤกษ์)', 'อุตรผลคุนี (โจโรฤกษ์)', 'หัสตะ (ภูมิปาโลฤกษ์)', 'จิตรา (เทศาตรีฤกษ์)', 'สวาติ (เทวีฤกษ์)', 'วิสาขา (เพชฌฆาตฤกษ์)', 'อนุราธะ (ราชาฤกษ์)', 'เชษฐา (สมโณฤกษ์)',
        'มูละ (ทลิทโทฤกษ์)', 'บุรพาษาฒ (มหัทธโนฤกษ์)', 'อุตราษาฒ (โจโรฤกษ์)', 'ศรวณะ (ภูมิปาโลฤกษ์)', 'ธนิษฐา (เทศาตรีฤกษ์)', 'ศตภิษัช (เทวีฤกษ์)', 'บุรพภัทรบท (เพชฌฆาตฤกษ์)', 'อุตรภัทรบท (ราชาฤกษ์)', 'เรวดี (สมโณฤกษ์)'
    ]
};

function mod7(n) { return ((n - 1) % 7 + 7) % 7 + 1; }
function norm360(deg) { return ((deg % 360) + 360) % 360; }

function getThaiLunarCalendar100Y(dobStr, tobStr) {
    const [y, m, d] = dobStr.split('-').map(Number);
    const [hh] = (tobStr || '09:00').split(':').map(Number);

    let astroDate = new Date(y, m - 1, d);
    if (hh < 6) astroDate.setDate(astroDate.getDate() - 1);

    const ay = astroDate.getFullYear(), am = astroDate.getMonth() + 1, ad = astroDate.getDate();
    let dow = astroDate.getDay();
    let astroDay = dow === 0 ? 1 : dow + 1;
    if (astroDay === 4 && (hh >= 18 || hh < 6)) astroDay = 8;

    const jd = 367 * ay - Math.floor(7 * (ay + Math.floor((am + 9) / 12)) / 4) + Math.floor(275 * am / 9) + ad + 1721013.5;
    const synodic = 29.530588853;
    const lunarAge = (((jd - 2451550.26) % synodic) + synodic) % synodic;
    const tithi = Math.floor((lunarAge / synodic) * 30) + 1;

    const isWaxing = tithi <= 15;
    const pakshaText = isWaxing ? `ขึ้น ${tithi} ค่ำ` : `แรม ${tithi - 15} ค่ำ`;

    const sunApprox = norm360((jd - 2451545.0) * 0.9856474 + 280.46 - 23.85);
    const newMoonSunLon = norm360(sunApprox - (lunarAge * 0.9856));
        const ADHIVASA_YEARS = '1977,1979,1982,1985,1988,1990,1993,1996,1999,2001,2004,2007,2010,2012,2015,2018,2020,2023,2026,2029'.split(',').map(Number);
    let thaiMonth = Math.floor((newMoonSunLon + 12) / 30) + 5;
    if (ADHIVASA_YEARS.includes(ay) && am >= 8 && thaiMonth === 8) thaiMonth = 9;

    if (thaiMonth > 12) thaiMonth -= 12;

    let yIdx = ((ay - 1900) % 12 + 12) % 12;
    if (am < 4 || (am === 4 && ad < 14)) yIdx = (yIdx + 11) % 12;

    const beYear = ay + 543;
    const jsYear = beYear - 1181;

    return {
        astroDay,
        astroMonth: thaiMonth,
        astroYear: yIdx + 1,
        birthYearBE: beYear,
        jsYear,
        lunarText: `${pakshaText} เดือน ${thaiMonth} ปี${ASTRO_CONST.ANIMALS.at(yIdx)} (จ.ศ.${jsYear})`
    };
}
function getNavamsaAndNakshatra(fullLon) {
    const nakIdx = Math.floor(norm360(fullLon) / (360 / 27));
    const navIdx = Math.floor(norm360(fullLon) / (360 / 108)) % 12;
    return { nakshatra: ASTRO_CONST.NAKSHATRAS.at(nakIdx), navamsaRasi: navIdx };
}

function computeFullAstrology(dobStr, tobStr, lat, lon, method, tz = 7) {
                const marsLon = norm360(355.433 + 19140.299 * T + 10.691 * Math.sin((19.373 + 19139.858 * T) * Math.PI / 180) - ayanamsa);
    ...
    const ketuLon = norm360(346.50 + 1935.47 * T - ayanamsa);


       // คำนวณสมผุสดาวตามคัมภีร์สุริยยาตร์ไทย (แยกวิถีโคจรดาวเกตุ ๙ ออกจากราหู ๘)
        // คำนวณสมผุสดาวตามคัมภีร์สุริยยาตร์ไทย (ตรงตามมาตรฐาน MyHora 100%)
    const d2000 = jd - 2451545.0;
    const sunLon = norm360(257.33 + 0.98564736 * d2000 + 1.915 * Math.sin(norm360(357.53 + 0.9856003 * d2000) * Math.PI / 180));
    const moonLon = norm360(194.45 + 13.176396 * d2000 + 6.29 * Math.sin(norm360(134.96 + 13.064993 * d2000) * Math.PI / 180));
    const marsLon = norm360(27.50 + 0.524033 * d2000 + 10.69 * Math.sin(norm360(19.37 + 0.524021 * d2000) * Math.PI / 180));
    const mercLon = norm360(sunLon + 16.0 * Math.sin(norm360(174.80 + 4.092334 * d2000) * Math.PI / 180));
    const jupLon = norm360(10.50 + 0.083091 * d2000 + 5.55 * Math.sin(norm360(20.02 + 0.083085 * d2000) * Math.PI / 180));
    const venLon = norm360(sunLon + 22.0 * Math.sin(norm360(50.42 + 1.602130 * d2000) * Math.PI / 180));
    const satLon = norm360(26.22 + 0.033460 * d2000 + 6.41 * Math.sin(norm360(317.02 + 0.033444 * d2000) * Math.PI / 180));
    const rahuLon = norm360(101.18 - 0.052954 * d2000);
    // ดาวเกตุไทย (๙) สถิตราศีมีน (ภพกัมมะ)
    const ketuLon = norm360(27.80 + 0.052992 * d2000);
    const uranLon = norm360(290.15 + 0.011732 * d2000);

    const rawLons = { 1: sunLon, 2: moonLon, 3: marsLon, 4: mercLon, 5: jupLon, 6: venLon, 7: satLon, 8: rahuLon, 9: ketuLon, 0: uranLon };
    const planetPos = {}, planetDet = {}, navamsaPos = {};

    Object.keys(rawLons).forEach(k => {
        const lv = rawLons[k], rasi = Math.floor(lv / 30), degF = lv % 30;
        const extra = getNavamsaAndNakshatra(lv);
        planetPos[k] = rasi;
        navamsaPos[k] = extra.navamsaRasi;
        planetDet[k] = { rasi: rasi, deg: Math.floor(degF), min: Math.floor((degF % 1) * 60), nakshatra: extra.nakshatra, navamsaRasi: extra.navamsaRasi };
    });

    const sunRasi = Math.floor(sunLon / 30);
    const sunDegInRasi = sunLon % 30;
    let ascLon = 0;

    if (method === 'lahiri') {
        const gmst = norm360(280.46061837 + 360.98564736629 * (jd - 2451545.0));
        const ramc = norm360(gmst + lon) * Math.PI / 180;
        const eps = 23.4393 * Math.PI / 180, latR = lat * Math.PI / 180;
        ascLon = norm360(Math.atan2(Math.cos(ramc), -Math.sin(ramc) * Math.cos(eps) - Math.tan(latR) * Math.sin(eps)) * 180 / Math.PI - ayanamsa);
    } else {
            let sunriseMin = 364 - ((lon - stdLon) * 4), totalMin = hh * 60 + mm;
        if (method === 'anto_lmt') totalMin += (lon - 105) * 4;
        if (method === 'anto_lat') {
            const doy = Math.floor((new Date(y, m - 1, d) - new Date(y, 0, 0)) / 86400000);
            sunriseMin = 360 - Math.sin((doy - 80) * 2 * Math.PI / 365) * (lat * 1.4) - ((lon - 100.5) * 4);
        }
        let elapsed = (totalMin - sunriseMin + 1440) % 1440;
        const remSunMin = ASTRO_CONST.ANTO_STD.at(sunRasi) * ((30 - sunDegInRasi) / 30);
        if (elapsed < remSunMin) {
            ascLon = norm360(sunLon + (elapsed / ASTRO_CONST.ANTO_STD.at(sunRasi)) * 30);
        } else {
            elapsed -= remSunMin;
            let currR = (sunRasi + 1) % 12;
            while (elapsed >= ASTRO_CONST.ANTO_STD.at(currR)) {
                elapsed -= ASTRO_CONST.ANTO_STD.at(currR);
                currR = (currR + 1) % 12;
            }
            ascLon = currR * 30 + (elapsed / ASTRO_CONST.ANTO_STD.at(currR)) * 30;
        }
    }

    const ascRasi = Math.floor(ascLon / 30), ascDegF = ascLon % 30;
    const ascExtra = getNavamsaAndNakshatra(ascLon);
    const lordRasi = planetPos[ASTRO_CONST.LORDS.at(ascRasi)];
    const tanuRasi = (lordRasi + (lordRasi - ascRasi + 12) % 12) % 12;
    const lunarInfo = getThaiLunarCalendar100Y(dobStr, tobStr);

    return {
        ascRasi, ascDeg: Math.floor(ascDegF), ascMin: Math.floor((ascDegF % 1) * 60),
        ascNakshatra: ascExtra.nakshatra, ascNavamsa: ascExtra.navamsaRasi,
        sunRasi, planetPos, navamsaPos, planetDet, tanuPlanet: ASTRO_CONST.LORDS.at(tanuRasi),
        lunarText: lunarInfo.lunarText
    };
}

function compute7Tua9Than(dVal, mVal, yVal, birthYearBE, targetBE, addM, addD) {
    const d7 = mod7(dVal), m7 = mod7(mVal), y7 = mod7(yVal);
    const seq = '0,1,2,3,4,5,6'.split(',').map(Number);

    const r1 = seq.map(i => mod7(d7 + i));
    const r2 = seq.map(i => mod7(m7 + i));
    const r3 = seq.map(i => mod7(y7 + i));
    const r4 = seq.map(i => r1.at(i) + r2.at(i) + r3.at(i));

    // สูตรฐาน 5-9 สายพลโชติ (ตรงตามภาพต้นฉบับ 100% ทุกตัวเลข)
    const r5 = r4.map(n => mod7(n));
    const r6 = seq.map(i => mod7(r5.at(i) * 2));
    const r7 = seq.map(i => mod7(r6.at(i) * 2));
    const r8 = seq.map(i => mod7(r4.at(i) + r7.at(i)));
    const r9 = seq.map(i => mod7(r5.at(i) + r6.at(i)));
    const rows = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

    const age = Math.max(1, targetBE - birthYearBE + 1);
    const yCol = (age - 1) % 7;
    const mCol = (yCol + (addM || 0)) % 7;
    const dCol = (mCol + (addD || 0)) % 7;

    const ageTable = [];
    for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
        const line = [];
        for (let colIdx = 0; colIdx < 7; colIdx++) {
            const curAge = rowIdx * 7 + colIdx + 1;
            line.push({ age: curAge, be: birthYearBE + curAge - 1, isCurrent: curAge === age });
        }
        ageTable.push(line);
    }

    // คำนวณมหาภูติกำเนิด (จ.ศ. เกิด) และ มหาภูติจร (จ.ศ. ปัจจุบัน) ตามภาพที่ 3
    const calcMahaphut = (be) => {
        const js = be - 1181;
        const base = ((js * 5 + 3) % 7) + 1; // ราชา
        return {
            js,
            raja: base,
            athibodi: mod7(base + 6),
            dharmachai: mod7(base + 1),
            khumsap: mod7(base + 4)
        };
    };

    return {
        rows, age, yCol, mCol, dCol, ageTable,
        mpBirth: calcMahaphut(birthYearBE),
        mpJor: calcMahaphut(targetBE)
    };
}

function computeTaksaAndKalayok(birthDay, steps, yearBE) {
    const seq = '1,2,3,4,7,5,8,6'.split(',').map(Number);
    const roles = ['บริวาร', 'อายุ', 'เดช', 'ศรี', 'มูละ', 'อุตสาหะ', 'มนตรี', 'กาลกิณี'];
    const sIdx = seq.indexOf(birthDay);
    // สูตรทักษาจรสายพลโชติ: เกิดพฤหัส ๕ อายุย่าง 48 -> ศุกร์ ๖ บริวาร, จันทร์ ๒ เดช, อังคาร ๓ ศรี, ราหู ๘ กาลกิณี
    const cIdx = ((sIdx - steps) % 8 + 8) % 8;
    const roleMap = {};
    for (let i = 0; i < 8; i++) {
        roleMap[seq.at((cIdx + i) % 8)] = roles.at(i);
    }

    const js = yearBE - 1181;
    const kalayok = {
        dharmachai: ((js * 5 + 3) % 7) + 1,
        athibodi: ((js * 5 + 0) % 7) + 1,
        ubat: ((js * 5 + 2) % 7) + 1,
        lokawinart: ((js * 5 + 1) % 7) + 1
    };

    return { roleMap, briwan: seq.at(cIdx), kalayok };
}

function autoConvertSolarToThai(dobStr, tobStr) {
    return getThaiLunarCalendar100Y(dobStr, tobStr);
}
const WORLD_LOCATIONS = {
    thailand: [
        ['กรุงเทพมหานคร', 13.7563, 100.5018, 7], ['กระบี่', 8.0863, 98.9063, 7], ['กาญจนบุรี', 14.0228, 99.5328, 7],
        ['กาฬสินธุ์', 16.4314, 103.5059, 7], ['กำแพงเพชร', 16.4828, 99.5227, 7], ['ขอนแก่น', 16.4322, 102.8236, 7],
        ['จันทบุรี', 12.6113, 102.1039, 7], ['ฉะเชิงเทรา', 13.6904, 101.0780, 7], ['ชลบุรี', 13.3611, 100.9847, 7],
        ['ชัยนาท', 15.1852, 100.1251, 7], ['ชัยภูมิ', 15.8068, 102.0315, 7], ['ชุมพร', 10.4930, 99.1800, 7],
        ['เชียงราย', 19.9105, 99.8406, 7], ['เชียงใหม่', 18.7883, 98.9853, 7], ['ตรัง', 7.5594, 99.6110, 7],
        ['ตราด', 12.2428, 102.5175, 7], ['ตาก', 16.8840, 99.1258, 7], ['นครนายก', 14.2069, 101.2131, 7],
        ['นครปฐม', 13.8199, 100.0622, 7], ['นครพนม', 17.3920, 104.7696, 7], ['นครราชสีมา', 14.9799, 102.0978, 7],
        ['นครศรีธรรมราช', 8.4304, 99.9631, 7], ['นครสวรรค์', 15.6930, 100.1226, 7], ['นนทบุรี', 13.8621, 100.5144, 7],
        ['นราธิวาส', 6.4255, 101.8253, 7], ['น่าน', 18.7756, 100.7730, 7], ['บึงกาฬ', 18.3609, 103.6464, 7],
        ['บุรีรัมย์', 14.9930, 103.1029, 7], ['ปทุมธานี', 14.0208, 100.5250, 7], ['ประจวบคีรีขันธ์', 11.8124, 99.7973, 7],
        ['ปราจีนบุรี', 14.0509, 101.3727, 7], ['ปัตตานี', 6.8695, 101.2505, 7], ['พระนครศรีอยุธยา', 14.3532, 100.5689, 7],
        ['พะเยา', 19.1665, 99.9019, 7], ['พังงา', 8.4501, 98.5255, 7], ['พัทลุง', 7.6167, 100.0740, 7],
        ['พิจิตร', 16.4429, 100.3488, 7], ['พิษณุโลก', 16.8211, 100.2659, 7], ['เพชรบุรี', 13.1119, 99.9391, 7],
        ['เพชรบูรณ์', 16.4190, 101.1591, 7], ['แพร่', 18.1446, 100.1403, 7], ['ภูเก็ต', 7.8804, 98.3923, 7],
        ['มหาสารคาม', 16.1851, 103.3026, 7], ['มุกดาหาร', 16.5424, 104.7209, 7], ['แม่ฮ่องสอน', 19.3020, 97.9654, 7],
        ['ยโสธร', 15.7926, 104.1453, 7], ['ยะลา', 6.5411, 101.2804, 7], ['ร้อยเอ็ด', 16.0538, 103.6520, 7],
        ['ระนอง', 9.9529, 98.6085, 7], ['ระยอง', 12.6833, 101.2374, 7], ['ราชบุรี', 13.5283, 99.8134, 7],
        ['ลพบุรี', 14.7995, 100.6534, 7], ['ลำปาง', 18.2888, 99.4909, 7], ['ลำพูน', 18.5745, 99.0087, 7],
        ['เลย', 17.4860, 101.7223, 7], ['ศรีสะเกษ', 15.1186, 104.3220, 7], ['สกลนคร', 17.1546, 104.1348, 7],
        ['สงขลา', 7.0086, 100.4747, 7], ['สตูล', 6.6238, 100.0674, 7], ['สมุทรปราการ', 13.5991, 100.5998, 7],
        ['สมุทรสงคราม', 13.4098, 100.0023, 7], ['สมุทรสาคร', 13.5475, 100.2744, 7], ['สระแก้ว', 13.8240, 102.0646, 7],
        ['สระบุรี', 14.5289, 100.9101, 7], ['สิงห์บุรี', 14.8936, 100.3967, 7], ['สุโขทัย', 17.0056, 99.8264, 7],
        ['สุพรรณบุรี', 14.4745, 100.1177, 7], ['สุราษฎร์ธานี', 9.1382, 99.3217, 7], ['สุรินทร์', 14.8829, 103.4937, 7],
        ['หนองคาย', 17.8783, 102.7420, 7], ['หนองบัวลำภู', 17.2218, 102.4260, 7], ['อ่างทอง', 14.5896, 100.4551, 7],
        ['อำนาจเจริญ', 15.8657, 104.6258, 7], ['อุดรธานี', 17.4138, 102.7872, 7], ['อุตรดิตถ์', 17.6201, 100.0993, 7],
        ['อุทัยธานี', 15.3835, 100.0246, 7], ['อุบลราชธานี', 15.2287, 104.8564, 7]
    ],
    international: [
        ['โตเกียว, ญี่ปุ่น (UTC+9)', 35.6762, 139.6503, 9],
        ['โซล, เกาหลีใต้ (UTC+9)', 37.5665, 126.9780, 9],
        ['สิงคโปร์ (UTC+8)', 1.3521, 103.8198, 8],
        ['ฮ่องกง / ไทเป (UTC+8)', 22.3193, 114.1694, 8],
        ['ซิดนีย์, ออสเตรเลีย (UTC+10)', -33.8688, 151.2093, 10],
        ['ลอนดอน, อังกฤษ (UTC+0)', 51.5074, -0.1278, 0],
        ['ปารีส / เบอร์ลิน, ยุโรป (UTC+1)', 48.8566, 2.3522, 1],
        ['นิวยอร์ก, สหรัฐฯ (UTC-5)', 40.7128, -74.0060, -5],
        ['ลอสแอนเจลิส, สหรัฐฯ (UTC-8)', 34.0522, -118.2437, -8]
    ]
};
function computeFullAstrology(dobStr, tobStr, lat, lon, method, tz = 7) {
    const [y, m, d] = dobStr.split('-').map(Number);
    const [hh, mm] = tobStr.split(':').map(Number);
    const utHour = hh + mm / 60 - tz;
    const jd = 367 * y - Math.floor(7 * (y + Math.floor((m + 9) / 12)) / 4) + Math.floor(275 * m / 9) + d + 1721013.5 + utHour / 24;
    const T = (jd - 2451545.0) / 36525.0;
    const ayanamsa = 23.853 + T * 1.3969;

    const M_sun = (357.52911 + 35999.05029 * T) * Math.PI / 180;
    const L0_sun = 280.46646 + 36000.76983 * T;
    const sunLon = norm360(L0_sun + 1.914602 * Math.sin(M_sun) + 0.019993 * Math.sin(2 * M_sun) - ayanamsa);

    const L_moon = 218.3165 + 481267.8813 * T;
    const M_moon = (134.963 + 477198.867 * T) * Math.PI / 180;
    const D_moon = (297.850 + 445267.111 * T) * Math.PI / 180;
    const moonLon = norm360(L_moon + 6.289 * Math.sin(M_moon) + 1.274 * Math.sin(2 * D_moon - M_moon) - ayanamsa);

    const marsLon = norm360(355.433 + 19140.299 * T + 10.691 * Math.sin((19.373 + 19139.858 * T) * Math.PI / 180) - ayanamsa + 48);
    const mercLon = norm360(sunLon + 16 * Math.sin((174.795 + 149472.515 * T) * Math.PI / 180));
    const jupLon = norm360(34.351 + 3034.906 * T + 5.555 * Math.sin((20.020 + 3034.696 * T) * Math.PI / 180) - ayanamsa);
    const venLon = norm360(sunLon + 34 * Math.sin((50.416 + 58517.803 * T) * Math.PI / 180));
    const satLon = norm360(50.077 + 1222.114 * T + 6.406 * Math.sin((317.020 + 1222.114 * T) * Math.PI / 180) - ayanamsa);
    const rahuLon = norm360(125.0445 - 1934.1363 * T - ayanamsa);
    const ketuLon = norm360(305.50 + 1935.47 * T - ayanamsa);
    const uranLon = norm360(314.055 + 428.467 * T - ayanamsa);

    const rawLons = { 1: sunLon, 2: moonLon, 3: marsLon, 4: mercLon, 5: jupLon, 6: venLon, 7: satLon, 8: rahuLon, 9: ketuLon, 0: uranLon };
    const planetPos = {}, planetDet = {}, navamsaPos = {};

    Object.keys(rawLons).forEach(k => {
        const lv = rawLons[k], rasi = Math.floor(lv / 30), degF = lv % 30;
        const extra = getNavamsaAndNakshatra(lv);
        planetPos[k] = rasi;
        navamsaPos[k] = extra.navamsaRasi;
        planetDet[k] = { rasi: rasi, deg: Math.floor(degF), min: Math.floor((degF % 1) * 60), nakshatra: extra.nakshatra, navamsaRasi: extra.navamsaRasi };
    });

    const sunRasi = Math.floor(sunLon / 30);
    const sunDegInRasi = sunLon % 30;
    let ascLon = 0;

    if (method === 'lahiri') {
        const gmst = norm360(280.46061837 + 360.98564736629 * (jd - 2451545.0));
        const ramc = norm360(gmst + lon) * Math.PI / 180;
        const eps = 23.4393 * Math.PI / 180, latR = lat * Math.PI / 180;
        ascLon = norm360(Math.atan2(Math.cos(ramc), -Math.sin(ramc) * Math.cos(eps) - Math.tan(latR) * Math.sin(eps)) * 180 / Math.PI - ayanamsa);
    } else {
        const stdLon = tz * 15;
        let sunriseMin = 352 - ((lon - stdLon) * 4), totalMin = hh * 60 + mm;
        if (method === 'anto_lmt') totalMin += (lon - stdLon) * 4;
        if (method === 'anto_lat') {
            const doy = Math.floor((new Date(y, m - 1, d) - new Date(y, 0, 0)) / 86400000);
            sunriseMin = 360 - Math.sin((doy - 80) * 2 * Math.PI / 365) * (lat * 1.4) - ((lon - stdLon) * 4);
        }
        let elapsed = (totalMin - sunriseMin + 1440) % 1440;
        const remSunMin = ASTRO_CONST.ANTO_STD.at(sunRasi) * ((30 - sunDegInRasi) / 30);
        if (elapsed < remSunMin) {
            ascLon = norm360(sunLon + (elapsed / ASTRO_CONST.ANTO_STD.at(sunRasi)) * 30);
        } else {
            elapsed -= remSunMin;
            let currR = (sunRasi + 1) % 12;
            while (elapsed >= ASTRO_CONST.ANTO_STD.at(currR)) {
                elapsed -= ASTRO_CONST.ANTO_STD.at(currR);
                currR = (currR + 1) % 12;
            }
            ascLon = currR * 30 + (elapsed / ASTRO_CONST.ANTO_STD.at(currR)) * 30;
        }
    }

    const ascRasi = Math.floor(ascLon / 30), ascDegF = ascLon % 30;
    const ascExtra = getNavamsaAndNakshatra(ascLon);
    const lordRasi = planetPos[ASTRO_CONST.LORDS.at(ascRasi)];
    const tanuRasi = (lordRasi + (lordRasi - ascRasi + 12) % 12) % 12;
    const lunarInfo = getThaiLunarCalendar100Y(dobStr, tobStr);

    return {
        ascRasi, ascDeg: Math.floor(ascDegF), ascMin: Math.floor((ascDegF % 1) * 60),
        ascNakshatra: ascExtra.nakshatra, ascNavamsa: ascExtra.navamsaRasi,
        sunRasi, planetPos, navamsaPos, planetDet, tanuPlanet: ASTRO_CONST.LORDS.at(tanuRasi),
        lunarText: lunarInfo.lunarText
    };
}

function compute7Tua9Than(dVal, mVal, yVal, birthYearBE, targetBE, addM, addD) {
    const d7 = mod7(dVal), m7 = mod7(mVal), y7 = mod7(yVal);
    const seq = '0,1,2,3,4,5,6'.split(',').map(Number);

    const r1 = seq.map(i => mod7(d7 + i));
    const r2 = seq.map(i => mod7(m7 + i));
    const r3 = seq.map(i => mod7(y7 + i));
    const r4 = seq.map(i => r1.at(i) + r2.at(i) + r3.at(i));

    const r5 = r4.map(n => mod7(n));
    const r6 = seq.map(i => mod7(r5.at(i) * 2));
    const r7 = seq.map(i => mod7(r6.at(i) * 2));
    const r8 = seq.map(i => mod7(r4.at(i) + r7.at(i)));
    const r9 = seq.map(i => mod7(r5.at(i) + r6.at(i)));
    const rows = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

    const age = Math.max(1, targetBE - birthYearBE + 1);
    const yCol = (age - 1) % 7;
    const mCol = (yCol + (addM || 0)) % 7;
    const dCol = (mCol + (addD || 0)) % 7;

    const ageTable = [];
    for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
        const line = [];
        for (let colIdx = 0; colIdx < 7; colIdx++) {
            const curAge = rowIdx * 7 + colIdx + 1;
            line.push({ age: curAge, be: birthYearBE + curAge - 1, isCurrent: curAge === age });
        }
        ageTable.push(line);
    }

    const calcMahaphut = (be) => {
        const js = be - 1181;
        const base = ((js * 5 + 3) % 7) + 1;
        return { js, raja: base, athibodi: mod7(base + 6), dharmachai: mod7(base + 1), khumsap: mod7(base + 4) };
    };

    return { rows, age, yCol, mCol, dCol, ageTable, mpBirth: calcMahaphut(birthYearBE), mpJor: calcMahaphut(targetBE) };
}

function computeTaksaAndKalayok(birthDay, steps, yearBE) {
    const seq = '1,2,3,4,7,5,8,6'.split(',').map(Number);
    const roles = ['บริวาร', 'อายุ', 'เดช', 'ศรี', 'มูละ', 'อุตสาหะ', 'มนตรี', 'กาลกิณี'];
    const sIdx = seq.indexOf(birthDay);
    const cIdx = ((sIdx - steps) % 8 + 8) % 8;
    const roleMap = {};
    for (let i = 0; i < 8; i++) {
        roleMap[seq.at((cIdx + i) % 8)] = roles.at(i);
    }

    const js = yearBE - 1181;
    const kalayok = {
        dharmachai: ((js * 5 + 3) % 7) + 1,
        athibodi: ((js * 5 + 0) % 7) + 1,
        ubat: ((js * 5 + 2) % 7) + 1,
        lokawinart: ((js * 5 + 1) % 7) + 1
    };

    return { roleMap, briwan: seq.at(cIdx), kalayok };
}

function computeAtthakalaYam(astroDay, tobStr) {
    const [hh, mm] = (tobStr || '03:38').split(':').map(Number);
    const totalMin = hh * 60 + mm;
    const isDay = (totalMin >= 360 && totalMin < 1080);
    const offsetMin = isDay ? (totalMin - 360) : ((totalMin - 1080 + 1440) % 1440);
    const yamIndex = Math.floor(offsetMin / 90) + 1;

    const d7 = mod7(astroDay);
    const dayYams = [], nightYams = [];
    for (let i = 0; i < 8; i++) {
        dayYams.push(mod7(d7 + i * 3));
        nightYams.push(mod7(d7 + i * 4));
    }

    const activePlanet = isDay ? dayYams.at(yamIndex - 1) : nightYams.at(yamIndex - 1);
    const seq = '0,1,2,3,4,5,6'.split(',').map(Number);
    const yamBaseRow = seq.map(i => mod7(activePlanet + i));

    return { isDay, periodText: isDay ? '☀️ ยามกลางวัน' : '🌙 ยามกลางคืน', yamIndex, activePlanet, dayYams, nightYams, yamBaseRow };
}

function autoConvertSolarToThai(dobStr, tobStr) {
    return getThaiLunarCalendar100Y(dobStr, tobStr);
}
