const BHAVA_NAMES = ['ตนุ', 'กฎุมพะ', 'สหัชชะ', 'พันธุ', 'ปุตตะ', 'อริ', 'ปัตนิ', 'มรณะ', 'ศุภะ', 'กัมมะ', 'ลาภะ', 'วินาศ'];

function buildCosmicWheelSVG(title, ascRasi, sunRasi, planetPos, showBhava) {
    const cx = 195, cy = 195, rOut = 182, rMid = 142, rIn = 58;
    let svg = `<div style="text-align:center;">
        <div style="font-size:14px;font-weight:700;color:#FDE047;margin-bottom:8px;">${title}</div>
        <svg width="375" height="375" viewBox="0 0 390 390" style="max-width:100%;">
            <defs>
                <radialGradient id="wheelBg">
                    <stop offset="0%" stop-color="#1E3A8A"/>
                    <stop offset="70%" stop-color="#0F294A"/>
                    <stop offset="100%" stop-color="#09152B"/>
                </radialGradient>
            </defs>
            <circle cx="195" cy="195" r="182" fill="url(#wheelBg)" stroke="#F59E0B" stroke-width="3"/>
            <circle cx="195" cy="195" r="142" fill="rgba(255,255,255,0.04)" stroke="#38BDF8" stroke-width="1.5"/>
            ${showBhava ? '<circle cx="195" cy="195" r="104" fill="rgba(16,185,129,0.08)" stroke="#6EE7B7" stroke-width="1.2" stroke-dasharray="3 2"/>' : ''}
            <circle cx="195" cy="195" r="58" fill="rgba(220,38,38,0.25)" stroke="#FB7185" stroke-width="2"/>`;

    for (let i = 0; i < 12; i++) {
        const startA = (-90 - i * 30) * Math.PI / 180;
        const midA = (-90 - (i + 0.5) * 30) * Math.PI / 180;
        svg += `<line x1="${cx + rIn * Math.cos(startA)}" y1="${cy + rIn * Math.sin(startA)}" x2="${cx + rOut * Math.cos(startA)}" y2="${cy + rOut * Math.sin(startA)}" stroke="rgba(253,224,71,0.35)" stroke-width="1"/>`;

        const isAsc = (i === ascRasi), isSun = (i === sunRasi), isLit = isAsc || isSun;
        const zx = cx + 162 * Math.cos(midA), zy = cy + 162 * Math.sin(midA);
        const zColor = isAsc ? '#FB7185' : (isSun ? '#FDE047' : '#7DD3FC');
        svg += `<text x="${zx}" y="${zy}" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="700" fill="${zColor}" ${isLit ? 'class="star-pulse"' : ''}>${ASTRO_CONST.ZODIACS.at(i).split(' ').at(0)}</text>`;

        const pHere = Object.keys(planetPos).filter(p => planetPos[p] === i).map(p => ASTRO_CONST.SYMBOLS[p]);
        if (isAsc) pHere.unshift('ลั');
        const pRadius = showBhava ? 123 : 102;
        const px = cx + pRadius * Math.cos(midA), py = cy + pRadius * Math.sin(midA);
        svg += `<text x="${px}" y="${py}" text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="700" fill="${pHere.length ? '#FEF08A' : '#38BDF8'}" ${pHere.length ? 'class="star-pulse"' : ''}>${pHere.join(' ') || '·'}</text>`;

        if (showBhava) {
            const bhavaIdx = (i - ascRasi + 12) % 12;
            const bx = cx + 81 * Math.cos(midA), by = cy + 81 * Math.sin(midA);
            const isKendra = (bhavaIdx === 0 || bhavaIdx === 3 || bhavaIdx === 6 || bhavaIdx === 9);
            const bColor = bhavaIdx === 0 ? '#FDA4AF' : (isKendra ? '#FDE047' : '#6EE7B7');
            svg += `<text x="${bx}" y="${by}" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="700" fill="${bColor}">${BHAVA_NAMES.at(bhavaIdx)}</text>`;
        }

        if (isAsc) {
            const beamX = cx + 104 * Math.cos(midA), beamY = cy + 104 * Math.sin(midA);
            svg += `<line x1="195" y1="195" x2="${beamX}" y2="${beamY}" stroke="#F43F5E" stroke-width="2" stroke-dasharray="4 3" class="star-beam"/>`;
        }
    }

    svg += `<text x="195" y="187" text-anchor="middle" font-size="10" fill="#FECDD3">${showBhava ? 'ลัคนา (ตนุ)' : 'ลัคนานวางค์'}</text>
            <text x="195" y="206" text-anchor="middle" font-size="13" font-weight="700" fill="#FDE047" class="star-pulse">${ASTRO_CONST.ZODIACS.at(ascRasi)}</text>
        </svg></div>`;
    return svg;
}

function renderZodiacModeUI() {
    const dob = document.getElementById('z_dob').value;
    const tob = document.getElementById('z_tob').value;
    const [lat, lon, prov] = document.getElementById('z_prov').value.split(',');
    const method = document.getElementById('z_method').value;
    const res = computeFullAstrology(dob, tob, parseFloat(lat), parseFloat(lon), method);

    const order = '1,2,3,4,5,6,7,8,9,0'.split(',').map(Number);
    let tableRows = `<tr style="background:#FFFBEB;color:#991B1B;font-weight:700;">
        <td style="padding:8px;">ลั. ลัคนา</td>
        <td style="padding:8px;">${ASTRO_CONST.ZODIACS.at(res.ascRasi)}</td>
        <td style="padding:8px;">${res.ascDeg}° ${res.ascMin}'</td>
        <td style="padding:8px;">${ASTRO_CONST.ZODIACS.at(res.ascNavamsa)}</td>
        <td style="padding:8px;">${res.ascNakshatra}</td>
    </tr>`;

    order.forEach(id => {
        const d = res.planetDet[id];
        tableRows += `<tr style="border-bottom:1px solid #FDE68A;">
            <td style="padding:7px;font-weight:700;color:#1E3A8A;">${ASTRO_CONST.FULL_NAMES[id]}</td>
            <td style="padding:7px;color:#B91C1C;font-weight:600;">${ASTRO_CONST.ZODIACS.at(d.rasi)}</td>
            <td style="padding:7px;color:#047857;">${d.deg}° ${d.min}'</td>
            <td style="padding:7px;color:#1D4ED8;">${ASTRO_CONST.ZODIACS.at(d.navamsaRasi)}</td>
            <td style="padding:7px;color:#B45309;font-size:12px;">${d.nakshatra}</td>
        </tr>`;
    });

    const box = document.getElementById('z_result');
    box.style.display = 'block';
    box.innerHTML = `
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;border-bottom:2px dashed #FCD34D;padding-bottom:12px;margin-bottom:16px;">
            <div>
                <h3 style="color:#B91C1C;font-size:18px;">🌟 ผลผูกดวงจักรราศี & นวางค์จักร (${prov})</h3>
                <div style="font-size:12px;color:#047857;font-weight:600;margin-top:2px;">📅 ปฏิทินโหร: ${res.lunarText}</div>
            </div>
            <span style="background:#ECFDF5;border:1.5px solid #10B981;color:#065F46;padding:4px 14px;border-radius:99px;font-size:13px;font-weight:700;">🔮 ตนุเศษ: ${ASTRO_CONST.FULL_NAMES[res.tanuPlanet]}</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:16px;background:linear-gradient(135deg,#0A192F,#1E3A8A);padding:18px;border-radius:20px;border:2px solid #F59E0B;margin-bottom:18px;">
            ${buildCosmicWheelSVG('🎡 ดวงจักรราศี (ราศีจักร)', res.ascRasi, res.sunRasi, res.planetPos, true)}
            ${buildCosmicWheelSVG('💠 ดวงนวางค์จักร', res.ascNavamsa, res.navamsaPos, res.navamsaPos, false)}
        </div>
        <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;text-align:center;font-size:13px;background:#FFFFFF;border-radius:14px;overflow:hidden;border:1.5px solid #FCD34D;">
                <thead>
                    <tr style="background:linear-gradient(90deg,#1E3A8A,#1D4ED8);color:#FDE047;">
                        <th style="padding:10px;">ดาว</th><th style="padding:10px;">สถิตราศี</th><th style="padding:10px;">องศา ลิปดา</th><th style="padding:10px;">นวางค์</th><th style="padding:10px;">นักษัตร / ฤกษ์</th>
                    </tr>
                </thead>
            <tbody>${tableRows}</tbody>
            </table>
        </div>
        ${generateAIZodiacReading(res)}`;
    triggerCatMagic();
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function render7TuaModeUI() {
    const dVal = +document.getElementById('t7_day').value;
    const mVal = +document.getElementById('t7_month').value;
    const yVal = +document.getElementById('t7_year').value;
    const birthBE = +document.getElementById('t7_birthBE').value || 2522;
    const targetBE = +document.getElementById('t7_targetBE').value || 2569;
    const addM = +document.getElementById('t7_addM').value || 0;
    const addD = +document.getElementById('t7_addD').value || 0;

    const data = compute7Tua9Than(dVal, mVal, yVal, birthBE, targetBE, addM, addD);
    const tkY = computeTaksaAndKalayok(dVal, data.age - 1, targetBE);
    const seq = '0,1,2,3,4,5,6'.split(',').map(Number);

    let tbl = '<thead><tr><th></th>' + seq.map(c => {
        let tag = [];
        if (c === data.yCol) tag.push('<span style="background:#D97706;color:#FFF;padding:2px 6px;border-radius:6px;">ปีจร</span>');
        if (c === data.mCol) tag.push('<span style="background:#0284C7;color:#FFF;padding:2px 6px;border-radius:6px;">เดือนจร</span>');
        if (c === data.dCol) tag.push('<span style="background:#E11D48;color:#FFF;padding:2px 6px;border-radius:6px;">วันจร</span>');
        return `<th style="font-size:11px;padding-bottom:6px;color:#1E3A8A;">${tag.join(' ') || 'ฐาน ' + (c + 1)}</th>`;
    }).join('') + '</tr></thead><tbody>';

        data.rows.forEach((row, rIdx) => {
        const isBase4 = (rIdx === 3);
        const labelColor = isBase4 ? '#0369A1' : '#1E3A8A';
        tbl += `<tr><td style="font-size:12px;color:${labelColor};font-weight:700;text-align:left;padding-left:6px;">${ASTRO_CONST.BASE_NAMES.at(rIdx)}</td>` +
            row.map((val, cIdx) => {
                const p = mod7(val), role = tkY.roleMap[p];
                let bg = '#FFFFFF', border = '#93C5FD', color = '#1E3A8A';

                if (isBase4) {
                    // สีพิเศษเฉพาะฐานที่ 4 (โทนฟ้าคราม-น้ำเงินเข้ม แยกเป็นแถบเด่นกลางตาราง)
                    bg = '#E0F2FE'; border = '#0284C7'; color = '#0C4A6E';
                } else {
                    if (role === 'ศรี') { bg = '#ECFDF5'; border = '#10B981'; color = '#065F46'; }
                    else if (role === 'กาลกิณี') { bg = '#FFF1F2'; border = '#F43F5E'; color = '#9F1239'; }
                    else if (role === 'เดช') { bg = '#FFFBEB'; border = '#F59E0B'; color = '#92400E'; }
                }

                let sub = '';
                if (rIdx < 3) sub = ASTRO_CONST.HOUSES.at(rIdx).at(cIdx);
                else if (rIdx === 3) sub = ASTRO_CONST.BASE4_MEANINGS[val] || '';
                else if (rIdx === 7) sub = ASTRO_CONST.BASE8_MEANINGS.at(val - 1);
                else if (rIdx === 8) sub = ASTRO_CONST.BASE9_MEANINGS.at(val - 1);

                const roleDot = isBase4 ? (role === 'ศรี' ? ' 🍀' : (role === 'กาลกิณี' ? ' ⚠️' : '')) : '';

                return `<td><button onclick="show7TuaPopup('${sub || ASTRO_CONST.BASE_NAMES.at(rIdx)}', ${p}, '${role}', ${val})" style="width:100%;padding:7px 4px;border-radius:12px;background:${bg};border:${isBase4 ? '2px' : '1.5px'} solid ${border};color:${color};cursor:pointer;">
                    <div style="font-size:16px;font-weight:700;">${val}${roleDot}</div>
                    <div style="font-size:10px;font-weight:600;">${sub}</div>
                </button></td>`;
            }).join('') + '</tr>';
    });
    tbl += '</tbody>';


    let ageHtml = data.ageTable.map(line =>
        '<tr>' + line.map(cell => {
            const activeStyle = cell.isCurrent ? 'background:#DC2626;color:#FFFFFF;font-weight:700;border:2px solid #FDE047;' : 'background:#FFFBEB;color:#1E3A8A;border:1px solid #FDE68A;';
            return `<td style="${activeStyle}padding:6px 4px;border-radius:8px;font-size:11px;">${cell.be} (${cell.age})</td>`;
        }).join('') + '</tr>'
    ).join('');

        const mpHtml = `
        <div style="background:#FFFBEB;border:1.5px solid #F59E0B;border-radius:12px;padding:10px;text-align:center;">
            <div style="font-size:11px;color:#B45309;font-weight:700;">ราชา</div>
            <div style="font-size:20px;font-weight:700;color:#B91C1C;">${data.mpBirth.raja}</div>
            <div style="font-size:11px;color:#047857;font-weight:600;">${data.mpJor.raja} จร</div>
        </div>
        <div style="background:#FFFBEB;border:1.5px solid #F59E0B;border-radius:12px;padding:10px;text-align:center;">
            <div style="font-size:11px;color:#B45309;font-weight:700;">อธิบดี</div>
            <div style="font-size:20px;font-weight:700;color:#B91C1C;">${data.mpBirth.athibodi}</div>
            <div style="font-size:11px;color:#047857;font-weight:600;">${data.mpJor.athibodi} จร</div>
        </div>
        <div style="background:#FFFBEB;border:1.5px solid #F59E0B;border-radius:12px;padding:10px;text-align:center;">
            <div style="font-size:11px;color:#B45309;font-weight:700;">ธงชัย</div>
            <div style="font-size:20px;font-weight:700;color:#B91C1C;">${data.mpBirth.dharmachai}</div>
            <div style="font-size:11px;color:#047857;font-weight:600;">${data.mpJor.dharmachai} จร</div>
        </div>
        <div></div>
        <div style="background:#EFF6FF;border:1.5px solid #3B82F6;border-radius:12px;padding:10px;text-align:center;">
            <div style="font-size:11px;color:#1E3A8A;font-weight:700;">ขุมทรัพย์</div>
            <div style="font-size:20px;font-weight:700;color:#1D4ED8;">${data.mpBirth.khumsap}</div>
            <div style="font-size:11px;color:#047857;font-weight:600;">${data.mpJor.khumsap} จร</div>
        </div>
        <div></div>`;
}

function show7TuaPopup(posName, pNum, role, rawVal) {
    const desc = role === 'ศรี' ? 'ให้คุณโดดเด่น มีโชคลาภและความสำเร็จสมหวัง' : (role === 'กาลกิณี' ? 'ควรระมัดระวังอุปสรรค ความขัดแย้ง หรือเรื่องติดขัด' : 'ส่งผลตามกำลังดาวและภพที่สถิต');
    document.getElementById('t7_meaning').innerHTML = `✨ <b>ตำแหน่ง: ${posName}</b> | เลขกำลัง <b>${rawVal}</b> (ดาว${ASTRO_CONST.DAYS[pNum]}) • ปีนี้ตกภูมิทักษา <b>"${role}"</b> (${desc})`;
    triggerCatMagic();
}

function renderTaksaModeUI() {
    const dVal = +document.getElementById('tk_day').value;
    const age = +document.getElementById('tk_age').value || 1;
    const be = +document.getElementById('tk_be').value || 2569;
    const tkB = computeTaksaAndKalayok(dVal, 0, be);
    const tkY = computeTaksaAndKalayok(dVal, age - 1, be);

    const cards = ASTRO_CONST.TAKSA_ROLES.map(role => {
        const pB = Object.keys(tkB.roleMap).find(k => tkB.roleMap[k] === role);
        const pY = Object.keys(tkY.roleMap).find(k => tkY.roleMap[k] === role);
        const bg = role === 'ศรี' ? '#ECFDF5' : (role === 'กาลกิณี' ? '#FFF1F2' : '#FFFFFF');
        const bd = role === 'ศรี' ? '#10B981' : (role === 'กาลกิณี' ? '#F43F5E' : '#93C5FD');
        return `<div style="background:${bg};border:1.5px solid ${bd};border-radius:14px;padding:12px;text-align:center;">
            <div style="font-size:14px;font-weight:700;color:#1E3A8A;">${role}</div>
            <div style="font-size:12px;color:#047857;margin-top:4px;">เดิม: ดาว${ASTRO_CONST.DAYS[pB].split(' ').at(0)}</div>
            <div style="font-size:13px;font-weight:700;color:#B91C1C;">จรปีนี้: ดาว${ASTRO_CONST.DAYS[pY].split(' ').at(0)}</div>
        </div>`;
    }).join('');

    const box = document.getElementById('tk_result');
    box.style.display = 'block';
    box.innerHTML = `
        <h3 style="color:#065F46;margin-bottom:12px;">🧭 ภูมิทักษา 8 ทิศ (อายุย่าง ${age} ปี)</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:18px;">${cards}</div>
        <h3 style="color:#1E3A8A;margin-bottom:10px;">🏮 กาลโยคประจำปี พ.ศ. ${be}</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;font-size:14px;">
            <div style="background:#ECFDF5;border:1.5px solid #10B981;padding:12px;border-radius:12px;color:#065F46;">🏆 <b>ธงชัย:</b> ${ASTRO_CONST.DAYS[tkY.kalayok.dharmachai]}</div>
            <div style="background:#EFF6FF;border:1.5px solid #3B82F6;padding:12px;border-radius:12px;color:#1E3A8A;">👑 <b>อธิบดี:</b> ${ASTRO_CONST.DAYS[tkY.kalayok.athibodi]}</div>
            <div style="background:#FFFBEB;border:1.5px solid #F59E0B;padding:12px;border-radius:12px;color:#92400E;">⚡ <b>อุบาทว์:</b> ${ASTRO_CONST.DAYS[tkY.kalayok.ubat]}</div>
            <div style="background:#FFF1F2;border:1.5px solid #F43F5E;padding:12px;border-radius:12px;color:#9F1239;">🚨 <b>โลกาวินาศ:</b> ${ASTRO_CONST.DAYS[tkY.kalayok.lokawinart]}</div>
        </div>`;
    triggerCatMagic();
}

function renderQuickModeUI() {
    const dob = document.getElementById('qk_dob').value;
    const res = computeFullAstrology(dob, '12:00', 13.75, 100.5, 'anto_sun');
    const thai = getThaiLunarCalendar100Y(dob, '12:00');
    const box = document.getElementById('qk_result');
    box.style.display = 'block';
    box.innerHTML = `
        <div style="text-align:center;">
            <h3 style="color:#B91C1C;font-size:21px;margin-bottom:6px;">✨ คุณเกิดปี${ASTRO_CONST.ANIMALS.at(thai.astroYear - 1)} • ราศี${ASTRO_CONST.ZODIACS.at(res.sunRasi)} ✨</h3>
            <p style="color:#047857;font-size:13px;font-weight:600;margin-bottom:6px;">📅 ${thai.lunarText}</p>
            <p style="color:#1E3A8A;font-size:14px;margin-bottom:16px;">ดาวประจำราศีเกิดของคุณคือ <b>${ASTRO_CONST.FULL_NAMES[ASTRO_CONST.LORDS.at(res.sunRasi)]}</b></p>
            <div style="background:linear-gradient(135deg,#0A192F,#1E3A8A);padding:18px;border-radius:20px;border:2px solid #F59E0B;display:inline-block;">
                ${buildCosmicWheelSVG('🌟 แผนที่ดาวประจำตัวของคุณ', res.sunRasi, res.sunRasi, res.planetPos, false)}
            </div>
        </div>`;
    triggerCatMagic();
}
const AI_ASTRO_DB = {
    RASI_TRAIT: [
        'กล้าหาญ เป็นผู้นำ คิดเร็วทำเร็ว มีไฟในการบุกเบิกสิ่งใหม่',
        'หนักแน่น มั่นคง รักความสงบ ชอบสร้างฐานะให้เป็นปึกแผ่น',
        'ช่างเจรจา ไหวพริบดี ปรับตัวเก่ง เรียนรู้ไว มีเสน่ห์ในการสื่อสาร',
        'อ่อนโยน รักครอบครัว ดูแลเอาใจใส่เก่ง มีสัญชาตญาณแม่นยำ',
        'สง่างาม มีบารมี รักเกียรติยศ ชอบช่วยเหลือผู้อื่นและเป็นจุดสนใจ',
        'ละเอียดรอบคอบ ช่างสังเกต มีระเบียบวินัย และวิเคราะห์เก่ง',
        'รักความยุติธรรม มีมนุษยสัมพันธ์ดี เข้ากับคนง่าย มีรสนิยม',
        'ลึกลับ น่าค้นหา มีความมุ่งมั่นสูง ใจเด็ดและอ่านใจคนเก่ง',
        'รักอิสระ มองโลกในแง่ดี ใฝ่หาความรู้และคุณธรรม ชอบเดินทาง',
        'อดทนสูง มีความรับผิดชอบ วางแผนระยะยาวเก่ง สร้างความสำเร็จจากความเพียร',
        'มีความคิดสร้างสรรค์ ทันสมัย รักเพื่อนพ้อง ชอบช่วยเหลือสังคม',
        'มีเมตตา จินตนาการสูง เข้าใจความรู้สึกผู้อื่น มีเซนส์ทางจิตวิญญาณ'
    ],
    PLANET_MEANING: {
        1: 'เกียรติยศ ชื่อเสียง ความเป็นผู้นำ และการได้รับความไว้วางใจจากผู้ใหญ่',
        2: 'เสน่ห์เมตตา การเงินหมุนเวียน การบริการ และความผูกพันในครอบครัว',
        3: 'ความขยันขันแข็ง การลงมือทำ การแข่งขัน และชัยชนะจากการฟันฝ่า',
        4: 'การเจรจาธุรกิจ เอกสารสัญญา การค้าขาย และการสื่อสารที่สร้างรายได้',
        5: 'สติปัญญา ผู้ใหญ่อุปถัมภ์ ความสำเร็จที่มั่นคง และโชคลาภด้านการศึกษา/การงาน',
        6: 'ความรัก ความสุขสมหวัง ศิลปะความงาม และโชคลาภทางการเงิน',
        7: 'ความรับผิดชอบงานใหญ่ อสังหาริมทรัพย์ ความอดทน และผลตอบแทนระยะยาว',
        8: 'ไหวพริบพลิกแพลง งานออนไลน์/ต่างประเทศ และโชคลาภแบบไม่คาดฝัน',
        9: 'สิ่งศักดิ์สิทธิ์คุ้มครอง ลางสังหรณ์แม่นยำ ความสำเร็จแบบปาฏิหาริย์ และงานเบื้องหลัง'
    }
};

function generateAIZodiacReading(res) {
    const ascText = AI_ASTRO_DB.RASI_TRAIT.at(res.ascRasi);
    const tanuText = AI_ASTRO_DB.PLANET_MEANING[res.tanuPlanet] || '';
    const dhanamRasi = (res.ascRasi + 1) % 12;
    const dhanamLord = ASTRO_CONST.LORDS.at(dhanamRasi);
    const dhanamLordPos = res.planetPos[dhanamLord];
    const dhanamBhava = (dhanamLordPos - res.ascRasi + 12) % 12;
    const ketuBhava = (res.planetPos['9'] - res.ascRasi + 12) % 12;

    let specialStars = [];
    if (res.planetPos['5'] === 3) specialStars.push('๕ พฤหัสได้ตำแหน่ง "มหาอุจจ์" (ปัญญาและผู้ใหญ่อุปถัมภ์สูงสุด)');
    if (res.planetPos['6'] === 3) specialStars.push('๖ ศุกร์ได้ตำแหน่ง "ราชาโชค" (มีเสน่ห์และโชคลาภทางการเงินไม่ขาด)');
    if (res.planetPos['1'] === 3) specialStars.push('๑ อาทิตย์ได้ตำแหน่ง "มหาจักร" (สร้างฐานะและเกียรติยศได้ยิ่งใหญ่ด้วยตนเอง)');

    return `
        <div style="margin-top:18px;background:linear-gradient(135deg,#FFFBEB,#ECFDF5);border:2px solid #10B981;border-radius:18px;padding:18px;text-align:left;line-height:1.65;">
            <div style="font-size:16px;font-weight:700;color:#065F46;margin-bottom:10px;">🤖 บทวิเคราะห์ดวงชะตาอัตโนมัติ (ProjectSeer AI Insight)</div>
            <p style="font-size:13.5px;color:#1E3A8A;margin-bottom:8px;">• <b>บุคลิกและวาสนา (ลัคนาราศี${ASTRO_CONST.ZODIACS.at(res.ascRasi).split(' ').at(0)}):</b> พื้นดวงเป็นคน${ascText} เสวยนักษัตร <b>${res.ascNakshatra}</b> ส่งผลให้มีจังหวะชีวิตที่โดดเด่นและมีเสน่ห์เฉพาะตัว</p>
            <p style="font-size:13.5px;color:#1E3A8A;margin-bottom:8px;">• <b>จิตใจและเป้าหมายหลัก (ตนุเศษ: ${ASTRO_CONST.FULL_NAMES[res.tanuPlanet]}):</b> จิตใจมุ่งเน้นเรื่อง${tanuText}</p>
            <p style="font-size:13.5px;color:#1E3A8A;margin-bottom:8px;">• <b>การเงินและทรัพย์สิน (เจ้าเรือนกฎุมพะ):</b> ดาวการเงินคือ <b>${ASTRO_CONST.FULL_NAMES[dhanamLord]}</b> โคจรสถิตในภพ <b>"${BHAVA_NAMES.at(dhanamBhava)}"</b> หมายถึงรายได้หลักมักมาจากเรื่อง${BHAVA_NAMES.at(dhanamBhava)}และการบริหารจัดการด้วยตนเอง</p>
            <p style="font-size:13.5px;color:#1E3A8A;margin-bottom:8px;">• <b>จุดส่งเสริมพิเศษ (ดาว ๙ เกตุ):</b> สถิตในภพ <b>"${BHAVA_NAMES.at(ketuBhava)}"</b> มีสิ่งศักดิ์สิทธิ์คุ้มครองและมีไหวพริบพิเศษในเรื่อง${BHAVA_NAMES.at(ketuBhava)}</p>
            ${specialStars.length ? `<div style="background:#FFFBEB;border:1.5px solid #F59E0B;border-radius:12px;padding:10px;margin-top:8px;font-size:13px;color:#92400E;">👑 <b>มาตรฐานดาวเด่นในดวง:</b> ${specialStars.join(' • ')}</div>` : ''}
        </div>`;
}
