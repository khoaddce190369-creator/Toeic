// ═══════════════════════════════════════════════════════════════
// LESSON CONTENT — Native web-based lessons (replaces PDF viewer)
// 100% Verified against original materials by Cô Vũ Mai Phương
// Includes: Theory, Tables, IPA, Formulas, Inline Quizzes & Practices
// ═══════════════════════════════════════════════════════════════

const LESSON_CONTENT = {

// ─────────────────────────────────────────────────
// DAY 1: The Verb "To Be" — Affirmative & Negative
// ─────────────────────────────────────────────────
1: `
<div class="lc">

  <!-- SECTION A: VOCABULARY -->
  <div class="lc-section">
    <div class="lc-section-num">A</div>
    <h2 class="lc-h2">Vocabulary & Pronunciation</h2>

    <h3 class="lc-h3">1. Personal Pronouns (Đại từ nhân xưng)</h3>
    <div class="lc-table-wrap">
      <table class="lc-table">
        <thead><tr><th>Pronoun</th><th>Meaning</th><th>IPA</th></tr></thead>
        <tbody>
          <tr><td><strong>I</strong></td><td>tôi</td><td>/aɪ/</td></tr>
          <tr><td><strong>you</strong></td><td>bạn, các bạn</td><td>/juː/</td></tr>
          <tr><td><strong>we</strong></td><td>chúng tôi</td><td>/wiː/</td></tr>
          <tr><td><strong>they</strong></td><td>họ, chúng</td><td>/ðeɪ/</td></tr>
          <tr><td><strong>she</strong></td><td>cô ấy</td><td>/ʃiː/</td></tr>
          <tr><td><strong>he</strong></td><td>anh ấy</td><td>/hiː/</td></tr>
          <tr><td><strong>it</strong></td><td>nó</td><td>/ɪt/</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="lc-h3">2. Possessive Adjectives (Tính từ sở hữu)</h3>
    <div class="lc-table-wrap">
      <table class="lc-table">
        <thead><tr><th>Pronoun</th><th>Possessive Adj.</th><th>IPA</th></tr></thead>
        <tbody>
          <tr><td>I (tôi)</td><td><strong>my</strong> (của tôi)</td><td>/maɪ/</td></tr>
          <tr><td>you (bạn)</td><td><strong>your</strong> (của bạn)</td><td>/jɔː(r)/</td></tr>
          <tr><td>we (chúng tôi)</td><td><strong>our</strong> (của chúng tôi)</td><td>/ˈaʊə(r)/</td></tr>
          <tr><td>they (họ)</td><td><strong>their</strong> (của họ)</td><td>/ðeə(r)/</td></tr>
          <tr><td>she (cô ấy)</td><td><strong>her</strong> (của cô ấy)</td><td>/hɜː(r)/</td></tr>
          <tr><td>he (anh ấy)</td><td><strong>his</strong> (của anh ấy)</td><td>/hɪz/</td></tr>
          <tr><td>it (nó)</td><td><strong>its</strong> (của nó)</td><td>/ɪts/</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="lc-h3">3. Common Nouns (Danh từ thông dụng)</h3>
    <div class="lc-vocab-grid">
      <div class="lc-vocab-item"><span class="lc-en">man</span><span class="lc-vi">người đàn ông</span><span class="lc-ipa">/mæn/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">woman</span><span class="lc-vi">người phụ nữ</span><span class="lc-ipa">/ˈwʊmən/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">father</span><span class="lc-vi">bố</span><span class="lc-ipa">/ˈfɑːðə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">mother</span><span class="lc-vi">mẹ</span><span class="lc-ipa">/ˈmʌðə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">teacher</span><span class="lc-vi">giáo viên</span><span class="lc-ipa">/ˈtiːtʃə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">student</span><span class="lc-vi">học sinh</span><span class="lc-ipa">/ˈstjuːdnt/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">brother</span><span class="lc-vi">anh / em trai</span><span class="lc-ipa">/ˈbrʌðə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">sister</span><span class="lc-vi">chị / em gái</span><span class="lc-ipa">/ˈsɪstə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">baby</span><span class="lc-vi">đứa bé</span><span class="lc-ipa">/ˈbeɪbi/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">child</span><span class="lc-vi">đứa trẻ</span><span class="lc-ipa">/tʃaɪld/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">dog</span><span class="lc-vi">chó</span><span class="lc-ipa">/dɒɡ/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">cat</span><span class="lc-vi">mèo</span><span class="lc-ipa">/kæt/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">book</span><span class="lc-vi">sách</span><span class="lc-ipa">/bʊk/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">car</span><span class="lc-vi">ô tô</span><span class="lc-ipa">/kɑː(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">orange</span><span class="lc-vi">quả cam</span><span class="lc-ipa">/ˈɒrɪndʒ/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">apple</span><span class="lc-vi">quả táo</span><span class="lc-ipa">/ˈæpl/</span></div>
    </div>

    <h3 class="lc-h3">4. Common Adjectives (Tính từ thông dụng)</h3>
    <div class="lc-vocab-grid">
      <div class="lc-vocab-item"><span class="lc-en">tall</span><span class="lc-vi">cao</span><span class="lc-ipa">/tɔːl/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">short</span><span class="lc-vi">thấp, ngắn</span><span class="lc-ipa">/ʃɔːt/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">big</span><span class="lc-vi">lớn</span><span class="lc-ipa">/bɪɡ/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">small</span><span class="lc-vi">nhỏ</span><span class="lc-ipa">/smɔːl/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">happy</span><span class="lc-vi">vui vẻ</span><span class="lc-ipa">/ˈhæpi/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">sad</span><span class="lc-vi">buồn</span><span class="lc-ipa">/sæd/</span></div>
    </div>
  </div>

  <!-- SECTION B: GRAMMAR -->
  <div class="lc-section">
    <div class="lc-section-num">B</div>
    <h2 class="lc-h2">Grammar Rules & Practice</h2>

    <!-- Rule 1: Possessive Adjectives -->
    <h3 class="lc-h3">1. Vị trí của tính từ sở hữu (Position of Possessive Adjectives)</h3>
    <div class="lc-rule">
      <div class="lc-rule-icon">📐</div>
      <div class="lc-rule-text">Tính từ sở hữu luôn đứng <strong>trước danh từ</strong>.</div>
    </div>
    <div class="lc-examples">
      <div class="lc-example"><span class="lc-ex-en">my cat</span><span class="lc-ex-vi">con mèo của tôi</span></div>
      <div class="lc-example"><span class="lc-ex-en">his father</span><span class="lc-ex-vi">bố của anh ấy</span></div>
      <div class="lc-example"><span class="lc-ex-en">our teacher</span><span class="lc-ex-vi">giáo viên của chúng tôi</span></div>
    </div>
    <div class="lc-tip">
      <div class="lc-tip-icon">💡</div>
      <div class="lc-tip-text"><strong>Lưu ý:</strong> Khi dịch, ta dịch từ danh từ dịch lên tính từ sở hữu. (Ví dụ: <em>my sister</em> → chị gái của tôi).</div>
    </div>

    <!-- Quiz 1 -->
    <div class="lc-quiz-group">
      <div class="lc-quiz-header">✏️ Quiz 1 — Chuyển các cụm từ sau sang tiếng Anh</div>
      <details class="lc-quiz-item">
        <summary>1. giáo viên của anh ấy</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: his teacher</span><br>Tính từ sở hữu "his" đứng trước danh từ "teacher".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. mẹ của họ</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: their mother</span><br>Tính từ sở hữu "their" đứng trước danh từ "mother".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. xe ô tô của cô ấy</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: her car</span><br>Tính từ sở hữu "her" đứng trước danh từ "car".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. cuốn sách của chúng tôi</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: our book</span><br>Tính từ sở hữu "our" đứng trước danh từ "book".</div>
      </details>
    </div>

    <!-- Rule 2: Articles -->
    <h3 class="lc-h3">2. Mạo từ a / an / the (Articles)</h3>
    <div class="lc-rule">
      <div class="lc-rule-icon">📐</div>
      <div class="lc-rule-text">
        • Mạo từ <strong>a / an / the</strong> luôn đứng trước danh từ.<br>
        • Mạo từ <strong>a / an</strong> đứng trước danh từ số ít đếm được.<br>
        • Mạo từ <strong>the</strong> đứng trước danh từ số ít, số nhiều và không đếm được.
      </div>
    </div>
    <div class="lc-tip">
      <div class="lc-tip-icon">💡</div>
      <div class="lc-tip-text">
        • Dùng <strong>"an"</strong> trước các danh từ có chữ cái đầu phát âm là <strong>nguyên âm</strong> (căn cứ vào phiên âm IPA).<br>
        • Dùng <strong>"a"</strong> trước các danh từ có chữ cái đầu phát âm là <strong>phụ âm</strong> (căn cứ vào phiên âm IPA).
      </div>
    </div>
    <div class="lc-examples">
      <div class="lc-example"><span class="lc-ex-en"><strong>an</strong> apple — /ˈ<em class="lc-vowel">æ</em>pl/</span><span class="lc-ex-vi">một quả táo (bắt đầu bằng nguyên âm /æ/)</span></div>
      <div class="lc-example"><span class="lc-ex-en"><strong>a</strong> book — /<em class="lc-cons">b</em>ʊk/</span><span class="lc-ex-vi">một cuốn sách (bắt đầu bằng phụ âm /b/)</span></div>
      <div class="lc-example"><span class="lc-ex-en"><strong>an</strong> orange — /ˈ<em class="lc-vowel">ɒ</em>rɪndʒ/</span><span class="lc-ex-vi">một quả cam (bắt đầu bằng nguyên âm /ɒ/)</span></div>
      <div class="lc-example"><span class="lc-ex-en"><strong>a</strong> student — /ˈ<em class="lc-cons">s</em>tjuːdnt/</span><span class="lc-ex-vi">một học sinh (bắt đầu bằng phụ âm /s/)</span></div>
    </div>

    <!-- Quiz 2 -->
    <div class="lc-quiz-group">
      <div class="lc-quiz-header">✏️ Quiz 2 — Khoanh tròn đáp án đúng</div>
      <details class="lc-quiz-item">
        <summary>1. a / an child</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: a child</span><br>"child" bắt đầu bằng phụ âm /tʃ/ nên dùng mạo từ "a".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. an / a orange</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: an orange</span><br>"orange" bắt đầu bằng nguyên âm /ɒ/ nên dùng mạo từ "an".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. a / an student</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: a student</span><br>"student" bắt đầu bằng phụ âm /s/ nên dùng mạo từ "a".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. an / a dog</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: a dog</span><br>"dog" bắt đầu bằng phụ âm /d/ nên dùng mạo từ "a".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>5. a / an apple</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: an apple</span><br>"apple" bắt đầu bằng nguyên âm /æ/ nên dùng mạo từ "an".</div>
      </details>
    </div>

    <!-- Rule 3: To Be -->
    <h3 class="lc-h3">3. Động từ "To Be" ở thì hiện tại</h3>

    <h4 class="lc-h4">3.1. Thể khẳng định (Affirmative)</h4>
    <div class="lc-formula">
      <strong>S + am / is / are + ...</strong>
    </div>
    <div class="lc-table-wrap">
      <table class="lc-table lc-table-grammar">
        <thead><tr><th>Chủ ngữ</th><th>To Be</th><th>Ví dụ</th></tr></thead>
        <tbody>
          <tr><td><strong>I</strong></td><td class="lc-verb">am</td><td>I <strong>am</strong> a student. (Tôi là học sinh.)</td></tr>
          <tr><td><strong>You / We / They</strong></td><td class="lc-verb">are</td><td>They <strong>are</strong> happy. (Họ rất vui.)</td></tr>
          <tr><td><strong>She / He / It</strong></td><td class="lc-verb">is</td><td>He <strong>is</strong> a teacher. (Anh ấy là giáo viên.)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lc-tip">
      <div class="lc-tip-icon">📝</div>
      <div class="lc-tip-text">
        <strong>3 cách dùng "To Be" ở hiện tại:</strong><br>
        ① <strong>To be + Danh từ</strong>: mang nghĩa là "là" — <em>He is a teacher.</em><br>
        ② <strong>To be + Tính từ</strong>: mô tả tính chất, đặc điểm — <em>He is tall.</em><br>
        ③ <strong>To be + Cụm trạng ngữ</strong>: chỉ nơi chốn, thời gian — <em>He is in the car.</em>
      </div>
    </div>

    <h4 class="lc-h4">3.2. Thể phủ định (Negative)</h4>
    <div class="lc-formula">
      <strong>S + am not / is not / are not + ...</strong>
    </div>
    <div class="lc-table-wrap">
      <table class="lc-table lc-table-grammar">
        <thead><tr><th>Chủ ngữ</th><th>Dạng phủ định</th><th>Ví dụ</th></tr></thead>
        <tbody>
          <tr><td><strong>I</strong></td><td class="lc-neg">am not</td><td>I <strong>am not</strong> a student.</td></tr>
          <tr><td><strong>You / We / They</strong></td><td class="lc-neg">are not</td><td>They <strong>are not</strong> happy.</td></tr>
          <tr><td><strong>She / He / It</strong></td><td class="lc-neg">is not</td><td>He <strong>is not</strong> a teacher.</td></tr>
        </tbody>
      </table>
    </div>

    <h4 class="lc-h4">3.3. Dạng viết tắt (Contractions)</h4>
    <div class="lc-table-wrap">
      <table class="lc-table">
        <thead><tr><th>Dạng đầy đủ</th><th>Viết tắt khẳng định</th><th>Viết tắt phủ định</th></tr></thead>
        <tbody>
          <tr><td>I am</td><td>I'm</td><td>I'm not</td></tr>
          <tr><td>She is</td><td>She's</td><td>She's not / She isn't</td></tr>
          <tr><td>He is</td><td>He's</td><td>He's not / He isn't</td></tr>
          <tr><td>It is</td><td>It's</td><td>It's not / It isn't</td></tr>
          <tr><td>You are</td><td>You're</td><td>You're not / You aren't</td></tr>
          <tr><td>We are</td><td>We're</td><td>We're not / We aren't</td></tr>
          <tr><td>They are</td><td>They're</td><td>They're not / They aren't</td></tr>
        </tbody>
      </table>
    </div>
    <div class="lc-tip">
      <div class="lc-tip-icon">⚠️</div>
      <div class="lc-tip-text">
        <strong>Chú ý đặc biệt:</strong> "am not" <strong>KHÔNG</strong> có dạng viết tắt ghép lại (không viết là "amn't").
      </div>
    </div>

    <!-- Quiz 3 -->
    <div class="lc-quiz-group">
      <div class="lc-quiz-header">✏️ Quiz 3 — Lựa chọn động từ to be phù hợp</div>
      <details class="lc-quiz-item">
        <summary>1. He _______ my father. (A. are | B. is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. is</span><br>Chủ ngữ là "He" (ngôi thứ 3 số ít) nên dùng "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. They _______ sad. (A. isn't | B. aren't)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. aren't</span><br>Chủ ngữ là "They" (số nhiều) nên dạng phủ định là "aren't".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. It _______ his car. (A. are | B. is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. is</span><br>Chủ ngữ là "It" (số ít) nên dùng "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. We _______ tall. (A. aren't | B. isn't)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. aren't</span><br>Chủ ngữ là "We" (số nhiều) nên dùng "aren't".</div>
      </details>
    </div>

    <!-- Practice Section -->
    <div class="lc-quiz-group" style="background:#fff;border-color:var(--accent);">
      <div class="lc-quiz-header" style="color:var(--accent-navy)">🎯 PRACTICE — Chọn dạng đúng của động từ "to be" (10 câu)</div>
      <details class="lc-quiz-item">
        <summary>1. He _______ a student. (A. is | B. are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. is</span><br>Chủ ngữ "He" đi với "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. She _______ my mother. (A. am not | B. isn't)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. isn't</span><br>Chủ ngữ "She" đi với "isn't".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. They _______ tall. (A. are | B. am)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. are</span><br>Chủ ngữ "They" đi với "are".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. I _______ a woman. (A. am | B. is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. am</span><br>Chủ ngữ "I" đi với "am".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>5. She _______ sad. (A. is | B. are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. is</span><br>Chủ ngữ "She" đi với "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>6. Her cat _______ small. (A. are | B. is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. is</span><br>Chủ ngữ "Her cat" (danh từ số ít) đi với "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>7. It _______ my book. (A. am not | B. is not)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. is not</span><br>Chủ ngữ "It" đi với "is not".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>8. We _______ happy. (A. am not | B. are not)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. are not</span><br>Chủ ngữ "We" đi với "are not".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>9. I _______ his mother. (A. am not | B. are not)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. am not</span><br>Chủ ngữ "I" đi với "am not".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>10. His car _______ big. (A. is | B. am)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. is</span><br>Chủ ngữ "His car" (danh từ số ít) đi với "is".</div>
      </details>
    </div>
  </div>

  <!-- SECTION C: SUMMARY -->
  <div class="lc-section">
    <div class="lc-section-num">C</div>
    <h2 class="lc-h2">Quick Summary</h2>
    <div class="lc-summary-grid">
      <div class="lc-summary-card green">
        <h4>✅ Khẳng định</h4>
        <p>I <strong>am</strong> ...</p>
        <p>You / We / They <strong>are</strong> ...</p>
        <p>He / She / It <strong>is</strong> ...</p>
      </div>
      <div class="lc-summary-card red">
        <h4>❌ Phủ định</h4>
        <p>I <strong>am not</strong> ...</p>
        <p>You / We / They <strong>are not</strong> ...</p>
        <p>He / She / It <strong>is not</strong> ...</p>
      </div>
      <div class="lc-summary-card blue">
        <h4>✂️ Viết tắt</h4>
        <p>I<strong>'m</strong> / You<strong>'re</strong> / He<strong>'s</strong></p>
        <p><strong>isn't</strong> / <strong>aren't</strong></p>
        <p>⚠️ "am not" không viết tắt ghép</p>
      </div>
    </div>
  </div>
</div>
`,

// ─────────────────────────────────────────────────
// DAY 2: The Verb "To Be" — Interrogative
// ─────────────────────────────────────────────────
2: `
<div class="lc">

  <!-- SECTION A: VOCABULARY -->
  <div class="lc-section">
    <div class="lc-section-num">A</div>
    <h2 class="lc-h2">Vocabulary & Pronunciation</h2>

    <h3 class="lc-h3">1. Common Nouns (Danh từ thông dụng)</h3>
    <div class="lc-vocab-grid">
      <div class="lc-vocab-item"><span class="lc-en">uncle</span><span class="lc-vi">chú, bác</span><span class="lc-ipa">/ˈʌŋkl/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">aunt</span><span class="lc-vi">dì, cô</span><span class="lc-ipa">/ɑːnt/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">parent</span><span class="lc-vi">bố / mẹ</span><span class="lc-ipa">/ˈpeərənt/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">children</span><span class="lc-vi">con cái, trẻ em</span><span class="lc-ipa">/ˈtʃɪldrən/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">room</span><span class="lc-vi">phòng</span><span class="lc-ipa">/ruːm/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">kitchen</span><span class="lc-vi">bếp</span><span class="lc-ipa">/ˈkɪtʃɪn/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">daughter</span><span class="lc-vi">con gái</span><span class="lc-ipa">/ˈdɔːtə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">son</span><span class="lc-vi">con trai</span><span class="lc-ipa">/sʌn/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">picture</span><span class="lc-vi">bức tranh</span><span class="lc-ipa">/ˈpɪktʃə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">box</span><span class="lc-vi">cái hộp</span><span class="lc-ipa">/bɒks/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">doctor</span><span class="lc-vi">bác sĩ</span><span class="lc-ipa">/ˈdɒktə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">lawyer</span><span class="lc-vi">luật sư</span><span class="lc-ipa">/ˈlɔɪə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">firefighter</span><span class="lc-vi">lính cứu hoả</span><span class="lc-ipa">/ˈfaɪəfaɪtə(r)/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">friend</span><span class="lc-vi">bạn bè</span><span class="lc-ipa">/frend/</span></div>
    </div>

    <h3 class="lc-h3">2. Common Adjectives (Tính từ thông dụng)</h3>
    <div class="lc-vocab-grid">
      <div class="lc-vocab-item"><span class="lc-en">lovely</span><span class="lc-vi">đáng yêu, đẹp</span><span class="lc-ipa">/ˈlʌvli/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">late</span><span class="lc-vi">muộn</span><span class="lc-ipa">/leɪt/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">busy</span><span class="lc-vi">bận rộn</span><span class="lc-ipa">/ˈbɪzi/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">kind</span><span class="lc-vi">tốt bụng</span><span class="lc-ipa">/kaɪnd/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">new</span><span class="lc-vi">mới</span><span class="lc-ipa">/njuː/</span></div>
      <div class="lc-vocab-item"><span class="lc-en">old</span><span class="lc-vi">cũ</span><span class="lc-ipa">/əʊld/</span></div>
    </div>
  </div>

  <!-- SECTION B: GRAMMAR -->
  <div class="lc-section">
    <div class="lc-section-num">B</div>
    <h2 class="lc-h2">Grammar Rules & Practice</h2>

    <!-- Rule 1: Plural Countable Nouns -->
    <h3 class="lc-h3">1. Danh từ đếm được số nhiều (Plural Countable Nouns)</h3>
    <div class="lc-rule">
      <div class="lc-rule-icon">📐</div>
      <div class="lc-rule-text">
        • Là các danh từ có thể đếm được bằng con số 1, 2... và ở dạng số nhiều.<br>
        • Đa số danh từ số nhiều thêm <strong>-s</strong> ở cuối.<br>
        • Thêm <strong>-es</strong> khi danh từ tận cùng bằng <strong>x, s, sh, ch, o</strong>.<br>
        • Khi danh từ tận cùng bằng <strong>y</strong>, phía trước là 1 phụ âm → chuyển <strong>y thành i rồi thêm -es</strong>.
      </div>
    </div>
    <div class="lc-examples">
      <div class="lc-example"><span class="lc-ex-en">dog → dog<strong>s</strong></span><span class="lc-ex-vi">thường: thêm -s</span></div>
      <div class="lc-example"><span class="lc-ex-en">box → box<strong>es</strong></span><span class="lc-ex-vi">tận cùng x: thêm -es</span></div>
      <div class="lc-example"><span class="lc-ex-en">baby → bab<strong>ies</strong></span><span class="lc-ex-vi">phụ âm + y: đổi thành -ies</span></div>
    </div>

    <h4 class="lc-h4">Bảng đối chiếu danh từ số ít → số nhiều (Chuẩn tài liệu)</h4>
    <div class="lc-table-wrap">
      <table class="lc-table">
        <thead><tr><th>Số ít</th><th>Số nhiều</th><th>Số ít</th><th>Số nhiều</th></tr></thead>
        <tbody>
          <tr><td>man</td><td><strong>men</strong> (bất quy tắc)</td><td>woman</td><td><strong>women</strong> (bất quy tắc)</td></tr>
          <tr><td>child</td><td><strong>children</strong> (bất quy tắc)</td><td>baby</td><td><strong>babies</strong></td></tr>
          <tr><td>father</td><td>fathers</td><td>mother</td><td>mothers</td></tr>
          <tr><td>teacher</td><td>teachers</td><td>student</td><td>students</td></tr>
          <tr><td>brother</td><td>brothers</td><td>sister</td><td>sisters</td></tr>
          <tr><td>dog</td><td>dogs</td><td>cat</td><td>cats</td></tr>
          <tr><td>book</td><td>books</td><td>car</td><td>cars</td></tr>
          <tr><td>orange</td><td>oranges</td><td>apple</td><td>apples</td></tr>
          <tr><td>uncle</td><td>uncles</td><td>aunt</td><td>aunts</td></tr>
          <tr><td>parent</td><td>parents</td><td>room</td><td>rooms</td></tr>
          <tr><td>kitchen</td><td>kitchens</td><td>daughter</td><td>daughters</td></tr>
          <tr><td>son</td><td>sons</td><td>picture</td><td>pictures</td></tr>
          <tr><td>box</td><td><strong>boxes</strong></td><td>doctor</td><td>doctors</td></tr>
          <tr><td>lawyer</td><td>lawyers</td><td>firefighter</td><td>firefighters</td></tr>
          <tr><td>friend</td><td>friends</td><td></td><td></td></tr>
        </tbody>
      </table>
    </div>

    <!-- Quiz 1 -->
    <div class="lc-quiz-group">
      <div class="lc-quiz-header">✏️ Quiz 1 — Chuyển danh từ số ít thành số nhiều</div>
      <details class="lc-quiz-item">
        <summary>1. woman → _______</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: women</span><br>Danh từ bất quy tắc: woman → women (/ˈwɪmɪn/).</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. child → _______</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: children</span><br>Danh từ bất quy tắc: child → children (/ˈtʃɪldrən/).</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. lawyer → _______</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: lawyers</span><br>Danh từ theo quy tắc: thêm -s.</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. box → _______</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: boxes</span><br>Tận cùng là "x" nên thêm -es: boxes.</div>
      </details>
      <details class="lc-quiz-item">
        <summary>5. parent → _______</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: parents</span><br>Danh từ theo quy tắc: thêm -s.</div>
      </details>
    </div>

    <!-- Rule 2: This/That/These/Those -->
    <h3 class="lc-h3">2. This, that, these và those (Từ chỉ định)</h3>

    <h4 class="lc-h4">2.1. Cách dùng</h4>
    <div class="lc-rule">
      <div class="lc-rule-icon">📐</div>
      <div class="lc-rule-text">Đây là các <strong>từ hạn định</strong>, đứng trước danh từ để chỉ vị trí gần hoặc xa người nói.</div>
    </div>
    <div class="lc-table-wrap">
      <table class="lc-table lc-table-grammar">
        <thead><tr><th></th><th>Gần (Near)</th><th>Xa (Far)</th></tr></thead>
        <tbody>
          <tr><td><strong>Số ít (Singular)</strong></td><td class="lc-verb">this (này)</td><td class="lc-verb">that (đó, kia)</td></tr>
          <tr><td><strong>Số nhiều (Plural)</strong></td><td class="lc-verb">these (những... này)</td><td class="lc-verb">those (những... đó)</td></tr>
        </tbody>
      </table>
    </div>
    <div class="lc-examples">
      <div class="lc-example"><span class="lc-ex-en"><strong>this</strong> man</span><span class="lc-ex-vi">người đàn ông này (gần, số ít)</span></div>
      <div class="lc-example"><span class="lc-ex-en"><strong>that</strong> man</span><span class="lc-ex-vi">người đàn ông đó (xa, số ít)</span></div>
      <div class="lc-example"><span class="lc-ex-en"><strong>these</strong> men</span><span class="lc-ex-vi">những người đàn ông này (gần, số nhiều)</span></div>
      <div class="lc-example"><span class="lc-ex-en"><strong>those</strong> men</span><span class="lc-ex-vi">những người đàn ông đó (xa, số nhiều)</span></div>
    </div>
    <div class="lc-tip">
      <div class="lc-tip-icon">💡</div>
      <div class="lc-tip-text">
        <strong>Lưu ý:</strong> This, that, these và those còn có thể là <strong>đại từ</strong> đứng một mình:<br>
        • <em>This is my dog.</em> (Đây là chú chó của tôi.)<br>
        • <em>These are my brothers.</em> (Đây là các anh em của tôi.)
      </div>
    </div>

    <h4 class="lc-h4">2.2. Cách chia động từ to be</h4>
    <div class="lc-formula">
      <strong>This / That + is</strong> &nbsp;&nbsp;|&nbsp;&nbsp; <strong>These / Those + are</strong>
    </div>
    <div class="lc-examples">
      <div class="lc-example"><span class="lc-ex-en">This picture <strong>is</strong> lovely.</span><span class="lc-ex-vi">Bức tranh này thật đẹp.</span></div>
      <div class="lc-example"><span class="lc-ex-en">Those men <strong>are</strong> tall.</span><span class="lc-ex-vi">Những người đàn ông đó rất cao.</span></div>
    </div>

    <!-- Quiz 2 -->
    <div class="lc-quiz-group">
      <div class="lc-quiz-header">✏️ Quiz 2 — Lựa chọn đáp án đúng</div>
      <details class="lc-quiz-item">
        <summary>1. _______ woman is my friend. (A. These | B. This)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. This</span><br>"woman" là danh từ số ít nên dùng "This".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. _______ cats are lovely. (A. That | B. Those)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. Those</span><br>"cats" là danh từ số nhiều nên dùng "Those".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. These boxes _______ big. (A. are | B. is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. are</span><br>"These boxes" là số nhiều nên to be là "are".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. That room _______ new. (A. is | B. are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. is</span><br>"That room" là số ít nên to be là "is".</div>
      </details>
    </div>

    <!-- Rule 3: Here and There -->
    <h3 class="lc-h3">3. Cấu trúc Here và There với động từ "To Be"</h3>
    <div class="lc-rule">
      <div class="lc-rule-icon">📐</div>
      <div class="lc-rule-text">
        • <strong>Here / There</strong> đứng đầu câu đi với động từ to be để chỉ sự hiện diện, vị trí.<br>
        • Động từ to be được chia căn cứ vào <strong>danh từ đứng ngay phía sau</strong> nó.
      </div>
    </div>
    <div class="lc-formula">
      <strong>Here / There + is + danh từ số ít</strong><br>
      <strong>Here / There + are + danh từ số nhiều</strong>
    </div>
    <div class="lc-examples">
      <div class="lc-example"><span class="lc-ex-en">Here <strong>is</strong> my friend.</span><span class="lc-ex-vi">Đây là bạn của tôi. (danh từ số ít: my friend)</span></div>
      <div class="lc-example"><span class="lc-ex-en">Here <strong>are</strong> my lovely daughters.</span><span class="lc-ex-vi">Đây là những cô con gái đáng yêu của tôi. (số nhiều: daughters)</span></div>
      <div class="lc-example"><span class="lc-ex-en">There <strong>is</strong> a book on the table.</span><span class="lc-ex-vi">Có một cuốn sách trên bàn. (danh từ số ít: a book)</span></div>
      <div class="lc-example"><span class="lc-ex-en">There <strong>are</strong> new books in the box.</span><span class="lc-ex-vi">Có những cuốn sách mới trong chiếc hộp. (số nhiều: new books)</span></div>
    </div>

    <!-- Quiz 3 -->
    <div class="lc-quiz-group">
      <div class="lc-quiz-header">✏️ Quiz 3 — Lựa chọn đáp án đúng với Here / There</div>
      <details class="lc-quiz-item">
        <summary>1. Here _______ my friend. (A. are | B. is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. is</span><br>"my friend" là danh từ số ít nên dùng "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. There _______ books. (A. is | B. are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. are</span><br>"books" là danh từ số nhiều nên dùng "are".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. There is a _______. (A. box | B. boxes)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. box</span><br>"There is a..." dùng với danh từ số ít đếm được, chọn "box".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. Here are his _______. (A. pictures | B. picture)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. pictures</span><br>"Here are..." dùng với danh từ số nhiều, chọn "pictures".</div>
      </details>
    </div>

    <!-- Rule 4: Interrogative Form -->
    <h3 class="lc-h3">4. Thể nghi vấn của động từ "To Be" ở hiện tại</h3>

    <h4 class="lc-h4">4.1. Câu hỏi Yes/No</h4>
    <div class="lc-formula">
      <strong>Am / Is / Are + S + ...?</strong>
    </div>
    <div class="lc-table-wrap">
      <table class="lc-table lc-table-grammar">
        <thead><tr><th>To Be</th><th>Chủ ngữ</th><th>Ví dụ câu hỏi</th></tr></thead>
        <tbody>
          <tr><td class="lc-verb">Am</td><td><strong>I</strong></td><td><strong>Am</strong> I late? (Tôi bị muộn à?)</td></tr>
          <tr><td class="lc-verb">Is</td><td><strong>she / he / it</strong></td><td><strong>Is</strong> she a doctor? (Cô ấy là bác sĩ phải không?)</td></tr>
          <tr><td class="lc-verb">Are</td><td><strong>you / we / they</strong></td><td><strong>Are</strong> they your parents? (Họ là bố mẹ của bạn à?)</td></tr>
        </tbody>
      </table>
    </div>

    <h4 class="lc-h4">4.2. Câu trả lời ngắn (Short Answers)</h4>
    <div class="lc-table-wrap">
      <table class="lc-table">
        <thead><tr><th>Câu hỏi</th><th>Trả lời Đồng ý (Yes)</th><th>Trả lời Phủ định (No)</th></tr></thead>
        <tbody>
          <tr><td>Am I ...?</td><td>Yes, you are.</td><td>No, you aren't.</td></tr>
          <tr><td>Is she / he / it ...?</td><td>Yes, she/he/it is.</td><td>No, she/he/it isn't.</td></tr>
          <tr><td>Are you ...?</td><td>Yes, I am. / Yes, we are.</td><td>No, I'm not. / No, we aren't.</td></tr>
          <tr><td>Are they ...?</td><td>Yes, they are.</td><td>No, they aren't.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="lc-tip">
      <div class="lc-tip-icon">⚠️</div>
      <div class="lc-tip-text">
        <strong>Quy tắc quan trọng:</strong><br>
        • Trong câu trả lời ngắn <strong>Yes</strong>, <strong>KHÔNG</strong> được viết tắt: ✅ <em>Yes, he is.</em> (❌ <em>Yes, he's.</em>)<br>
        • Trong câu trả lời ngắn <strong>No</strong>, <strong>ĐƯỢC</strong> viết tắt: ✅ <em>No, he isn't.</em>
      </div>
    </div>

    <!-- Quiz 4 -->
    <div class="lc-quiz-group">
      <div class="lc-quiz-header">✏️ Quiz 4 — Lựa chọn động từ to be cho câu nghi vấn</div>
      <details class="lc-quiz-item">
        <summary>1. _______ he a doctor? (A. Are | B. Is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. Is</span><br>Chủ ngữ "he" đi với "Is" ở câu hỏi.</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. _______ they late? (A. Are | B. Is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. Are</span><br>Chủ ngữ "they" đi với "Are" ở câu hỏi.</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. Is Johnny your son? – No, he _______. (A. aren't | B. isn't)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. isn't</span><br>Chủ ngữ "he" phủ định là "isn't".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. Are they your parents? – Yes, they _______. (A. aren't | B. are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. are</span><br>Trả lời khẳng định "Yes, they are."</div>
      </details>
    </div>

    <!-- Practice Section -->
    <div class="lc-quiz-group" style="background:#fff;border-color:var(--accent);">
      <div class="lc-quiz-header" style="color:var(--accent-navy)">🎯 PRACTICE — Luyện tập tổng hợp câu nghi vấn (8 câu)</div>
      <details class="lc-quiz-item">
        <summary>1. _______ he your uncle? (A. Is | B. Are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. Is</span><br>"he" đi với "Is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>2. _______ they your parents? (A. Am | B. Are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. Are</span><br>"they" đi với "Are".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>3. _______ this your room? (A. Are | B. Is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. Is</span><br>"this" (số ít) đi với "Is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>4. Is their daughter tall? – Yes, she _______. (A. is | B. are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. is</span><br>Khẳng định với "she" dùng "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>5. Is this picture lovely? – Yes, it _______. (A. isn't | B. is)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. is</span><br>Khẳng định với "it" dùng "is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>6. _______ that a firefighter? (A. Is | B. Am)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: A. Is</span><br>"that" (số ít) đi với "Is".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>7. Is she a lawyer? – No, she _______. (A. am not | B. isn't)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. isn't</span><br>Phủ định với "she" dùng "isn't".</div>
      </details>
      <details class="lc-quiz-item">
        <summary>8. _______ these your children? – Yes, they are. (A. Is | B. Are)</summary>
        <div class="lc-quiz-ans"><span class="lc-badge-correct">Đáp án: B. Are</span><br>"these" (số nhiều) đi với "Are".</div>
      </details>
    </div>
  </div>

  <!-- SECTION C: SUMMARY -->
  <div class="lc-section">
    <div class="lc-section-num">C</div>
    <h2 class="lc-h2">Quick Summary</h2>
    <div class="lc-summary-grid">
      <div class="lc-summary-card green">
        <h4>📦 Danh từ số nhiều</h4>
        <p>• Thường: thêm <strong>-s</strong></p>
        <p>• Tận cùng x, s, sh, ch, o: thêm <strong>-es</strong></p>
        <p>• Phụ âm + y: đổi thành <strong>-ies</strong></p>
        <p>• Bất quy tắc: man→men, child→children</p>
      </div>
      <div class="lc-summary-card blue">
        <h4>👆 This / That / These / Those</h4>
        <p>• Gần: <strong>this</strong> (ít) / <strong>these</strong> (nhiều)</p>
        <p>• Xa: <strong>that</strong> (ít) / <strong>those</strong> (nhiều)</p>
        <p>• This/That + <strong>is</strong> | These/Those + <strong>are</strong></p>
        <p>• Here/There + <strong>is/are</strong> tuỳ danh từ sau</p>
      </div>
      <div class="lc-summary-card red">
        <h4>❓ Thể nghi vấn To Be</h4>
        <p>• <strong>Am / Is / Are + S + ...?</strong></p>
        <p>• Yes, S + <strong>is/are/am</strong>. (không viết tắt)</p>
        <p>• No, S + <strong>isn't/aren't</strong>. (được viết tắt)</p>
      </div>
    </div>
  </div>
</div>
`

};
