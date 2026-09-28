
// ═══════════════════════════════════════════════
// COURSE DATA
// ═══════════════════════════════════════════════
const TYPE_LABELS={grammar:'Ngu Phap',listening:'Luyen Nghe',phonetics:'Ngu Am',skills:'Ky Nang',conv:'Giao Tiep'};
const TYPE_BADGE={grammar:'badge-grammar',listening:'badge-listening',phonetics:'badge-phonetics',skills:'badge-skills',conv:'badge-conv'};

const DAYS=[
  {d:1,title:'THE KHANG DINH VA PHU DINH CUA DONG TU TO BE',type:'grammar'},
  {d:2,title:'THE NGHI VAN CUA DONG TU TO BE',type:'grammar'},
  {d:3,title:'CAU HOI WHO VA WHAT VOI DONG TU TO BE',type:'grammar'},
  {d:4,title:'CAU HOI WHERE VA WHEN VOI DONG TU TO BE',type:'grammar'},
  {d:5,title:'DONG TU THUONG O HIEN TAI',type:'grammar'},
  {d:6,title:'THE PHU DINH CUA DONG TU THUONG O HIEN TAI',type:'grammar'},
  {d:7,title:'THE NGHI VAN CUA DONG TU THUONG O HIEN TAI',type:'grammar'},
  {d:8,title:'THI HIEN TAI DON',type:'grammar'},
  {d:9,title:'TU LOAI',type:'grammar'},
  {d:10,title:'THI HIEN TAI TIEP DIEN',type:'grammar'},
  {d:11,title:'PHAN BIET THI HIEN TAI DON VA HIEN TAI TIEP DIEN',type:'grammar'},
  {d:12,title:'THI QUA KHU DON THE KHANG DINH',type:'grammar'},
  {d:13,title:'THI QUA KHU DON THE PHU DINH VA NGHI VAN',type:'grammar'},
  {d:14,title:'THI QUA KHU TIEP DIEN',type:'grammar'},
  {d:15,title:'THI HIEN TAI HOAN THANH',type:'grammar'},
  {d:16,title:'THI TUONG LAI DON',type:'grammar'},
  {d:17,title:'THI TUONG LAI HOAN THANH',type:'grammar'},
  {d:18,title:'HOC NGU AM VOI GIAO VIEN NUOC NGOAI',type:'phonetics'},
  {d:19,title:'TIM HIEU VE TRONG AM TRONG TIENG ANH',type:'phonetics'},
  {d:20,title:'CAC CAU HOI VOI TU DE HOI KHAC TRONG TIENG ANH',type:'grammar'},
  {d:21,title:'LUYEN NGHE SO VA TEN',type:'listening',audio:['Bài thi Online- Luyện nghe số và tên_Câu 1-5.mp3','Bài thi Online- Luyện nghe số và tên_Câu 6-11.mp3','Bài thi Online- Luyện nghe số và tên_Câu 12-16.mp3','Bài thi Online- Luyện nghe số và tên_Câu 17-21.mp3','Bài thi Online- Luyện nghe số và tên_Câu 22-26.mp3','Bài thi Online- Luyện nghe số và tên_Câu 27-31.mp3']},
  {d:22,title:'DONG TU KHUYET THIEU',type:'grammar'},
  {d:23,title:'LIEN TU AND BUT OR SO VA BECAUSE',type:'grammar'},
  {d:24,title:'LIEN TU CHI THOI GIAN',type:'grammar'},
  {d:25,title:'LIEN TU CHI SU DOI LAP',type:'grammar'},
  {d:26,title:'CAU DIEU KIEN LOAI 1',type:'grammar'},
  {d:27,title:'CAU DIEU KIEN LOAI 2',type:'grammar'},
  {d:28,title:'CAU DIEU KIEN LOAI 3',type:'grammar'},
  {d:29,title:'LUYEN NGHE DIEN TU',type:'listening',audio:['Bài thi online- Luyện nghe điền từ_Câu 1-5.mp3','Bài thi online- Luyện nghe điền từ_Câu 6-10.mp3','Bài thi online- Luyện nghe điền từ_Câu 11-14.mp3','Bài thi online- Luyện nghe điền từ_Câu 15-18.mp3','Bài thi online- Luyện nghe điền từ_Câu 19-21.mp3','Bài thi online- Luyện nghe điền từ_Câu 22-24.mp3']},
  {d:30,title:'LUYEN NGHE CHEP CHINH TA',type:'listening',audio:['Bài thi online- Luyện nghe chép chính tả_Câu 1-2.mp3','Bài thi online- Luyện nghe chép chính tả_Câu 3-5.mp3','Bài thi online- Luyện nghe chép chính tả_Câu 6-8.mp3','Bài thi online- Luyện nghe chép chính tả_Câu 9-12.mp3','Bài thi online- Luyện nghe chép chính tả_Câu 13-15.mp3','Bài thi online- Luyện nghe chép chính tả_Câu 16-19.mp3']},
  {d:31,title:'LUYEN NGHE VE GIO',type:'listening',audio:['Bài thi online- Luyện nghe về giờ_Câu 1-5.mp3','Bài thi online- Luyện nghe về giờ_Câu 6-10.mp3','Bài thi online- Luyện nghe về giờ_Câu 11-15.mp3','Bài thi online- Luyện nghe về giờ_Câu 16-18.mp3','Bài thi online- Luyện nghe về giờ_Câu 19-23.mp3']},
  {d:32,title:'LUYEN NGHE NGAY THANG',type:'listening',audio:[]},
  {d:33,title:'LUYEN NGHE DIA DIEM',type:'listening',audio:[]},
  {d:34,title:'LUYEN NGHE VE TIEN BAC',type:'listening',audio:[]},
  {d:35,title:'DAI TU PHAN THAN',type:'grammar'},
  {d:36,title:'SU HOA HOP VE THI',type:'grammar'},
  {d:37,title:'TIENG ANH GIAO TIEP (1)',type:'conv',audio:['Bài thi Online- Tiếng Anh giao tiếp (1)_Câu 1-2.mp3','Bài thi Online- Tiếng Anh giao tiếp (1)_Câu 3-5.mp3','Bài thi Online- Tiếng Anh giao tiếp (1)_Câu 6-11.mp3','Bài thi Online- Tiếng Anh giao tiếp (1)_Câu 12-13.mp3']},
  {d:38,title:'LIEN TU TUONG HO',type:'grammar'},
  {d:39,title:'LUYEN NGHE VE CAC QUOC GIA VA CHAU LUC',type:'listening',audio:[]},
  {d:40,title:'LUYEN NGHE VE SO THICH',type:'listening',audio:[]},
  {d:41,title:'LUYEN NGHE VE CAC PHUONG TIEN GIAO THONG',type:'listening',audio:[]},
  {d:42,title:'LUYEN NGHE VE THE THAO',type:'listening',audio:[]},
  {d:43,title:'LUYEN NGHE VE NGHE NGHIEP',type:'listening',audio:[]},
  {d:44,title:'LUYEN NGHE VE CONG NGHE',type:'listening',audio:[]},
  {d:45,title:'TIENG ANH GIAO TIEP (2)',type:'conv'},
  {d:46,title:'KY NANG NOTE-TAKING',type:'skills',audio:['Bài thi Online- Kỹ năng Note-taking_Câu 1-4.mp3','Bài thi Online- Kỹ năng Note-taking_Câu 5-8.mp3','Bài thi Online- Kỹ năng Note-taking_Câu 9-13.mp3']},
  {d:47,title:'KY NANG PARAPHRASING',type:'skills',audio:['Bài thi Online- Kỹ năng paraphrasing_Câu 4-6.mp3','Bài thi Online- Kỹ năng paraphrasing_Câu 10-12.mp3','Bài thi Online- Kỹ năng paraphrasing_Câu 13-17.mp3']},
  {d:48,title:'TU TIN GIOI THIEU BAN THAN VA THUYET TRINH BANG TIENG ANH',type:'skills',audio:['Bài thi Online-Tự tin giới thiệu bản thân và thuyết trình bằng tiếng anh_Câu 1-7.mp3','Bài thi Online-Tự tin giới thiệu bản thân và thuyết trình bằng tiếng anh_Câu 8-15.mp3']}
];

// Folder names mapping (day number → actual folder name)
const FOLDERS={
  1:'01. NGÀY 1. THỂ KHẲNG ĐỊNH VÀ PHỦ ĐỊNH CỦA ĐỘNG TỪ TO BE',
  2:'02. NGÀY 2. THỂ NGHI VẤN CỦA ĐỘNG TỪ TO BE',
  3:'03. NGÀY 3. CÂU HỎI WHO VÀ WHAT VỚI ĐỘNG TỪ TO BE',
  4:'04. NGÀY 4. CÂU HỎI WHERE VÀ WHEN VỚI ĐỘNG TỪ TO BE',
  5:'05. NGÀY 5. ĐỘNG TỪ THƯỜNG Ở HIỆN TẠI',
  6:'06. NGÀY 6. THỂ PHỦ ĐỊNH CỦA ĐỘNG TỪ THƯỜNG Ở HIỆN TẠI',
  7:'07. NGÀY 7. THỂ NGHI VẤN CỦA ĐỘNG TỪ THƯỜNG Ở HIỆN TẠI',
  8:'08. NGÀY 8. THÌ HIỆN TẠI ĐƠN',
  9:'09. NGÀY 9. TỪ LOẠI',
  10:'10. NGÀY 10. THÌ HIỆN TẠI TIẾP DIỄN',
  11:'11. NGÀY 11. PHÂN BIỆT THÌ HIỆN TẠI ĐƠN VÀ HIỆN TẠI TIẾP DIỄN',
  12:'12. NGÀY 12. THÌ QUÁ KHỨ ĐƠN THỂ KHẲNG ĐỊNH',
  13:'13. NGÀY 13. THÌ QUÁ KHỨ ĐƠN THỂ PHỦ ĐỊNH VÀ NGHI VẤN',
  14:'14. NGÀY 14. THÌ QUÁ KHỨ TIẾP DIỄN',
  15:'15. NGÀY 15. THÌ HIỆN TẠI HOÀN THÀNH',
  16:'16. NGÀY 16. THÌ TƯƠNG LAI ĐƠN',
  17:'17. NGÀY 17. THÌ TƯƠNG LAI HOÀN THÀNH',
  18:'18. NGÀY 18. HỌC NGỮ ÂM VỚI GIÁO VIÊN NƯỚC NGOÀI',
  19:'19. NGÀY 19. TÌM HIỂU VỀ TRỌNG ÂM TRONG TIẾNG ANH',
  20:'20. NGÀY 20. CÁC CÂU HỎI VỚI TỪ ĐỂ HỎI KHÁC TRONG TIẾNG ANH',
  21:'21. NGÀY 21. LUYỆN NGHE SỐ VÀ TÊN',
  22:'22. NGÀY 22. ĐỘNG TỪ KHUYẾT THIẾU',
  23:'23. NGÀY 23. LIÊN TỪ AND BUT OR SO VÀ BECAUSE',
  24:'24. NGÀY 24. LIÊN TỪ CHỈ THỜI GIAN',
  25:'25. NGÀY 25. LIÊN TỪ CHỈ SỰ ĐỐI LẬP',
  26:'26. NGÀY 26. CÂU ĐIỀU KIỆN LOẠI 1',
  27:'27. NGÀY 27. CÂU ĐIỀU KIỆN LOẠI 2',
  28:'28. NGÀY 28. CÂU ĐIỀU KIỆN LOẠI 3',
  29:'29. NGÀY 29. LUYỆN NGHE ĐIỀN TỪ',
  30:'30. NGÀY 30. LUYỆN NGHE CHÉP CHÍNH TẢ',
  31:'31. NGÀY 31. LUYỆN NGHE VỀ GIỜ',
  32:'32. NGÀY 32. LUYỆN NGHE NGÀY THÁNG',
  33:'33. NGÀY 33. LUYỆN NGHE ĐỊA ĐIỂM',
  34:'34. NGÀY 34. LUYỆN NGHE VỀ TIỀN BẠC',
  35:'35. NGÀY 35. ĐẠI TỪ PHẢN THÂN',
  36:'36. NGÀY 36. SỰ HOÀ HỢP VỀ THÌ',
  37:'37. NGÀY 37. TIẾNG ANH GIAO TIẾP (1)',
  38:'38. NGÀY 38. LIÊN TỪ TƯƠNG HỖ',
  39:'39. NGÀY 39. LUYỆN NGHE VỀ CÁC QUỐC GIA VÀ CHÂU LỤC',
  40:'40. NGÀY 40. LUYỆN NGHE VỀ SỞ THÍCH',
  41:'41. NGÀY 41. LUYỆN NGHE VỀ CÁC PHƯƠNG TIỆN GIAO THÔNG',
  42:'42. NGÀY 42. LUYỆN NGHE VỀ THỂ THAO',
  43:'43. NGÀY 43. LUYỆN NGHE VỀ NGHỀ NGHIỆP',
  44:'44. NGÀY 44. LUYỆN NGHE VỀ CÔNG NGHỆ',
  45:'45. NGÀY 45. TIẾNG ANH GIAO TIẾP (2)',
  46:'46. NGÀY 46. KỸ NĂNG NOTE-TAKING',
  47:'47. NGÀY 47. KỸ NĂNG PARAPHRASING',
  48:'48. NGÀY 48. TỰ TIN GIỚI THIỆU BẢN THÂN VÀ THUYẾT TRÌNH BẰNG TIẾNG ANH'
};

// Image page counts from conversion metadata
const PAGE_COUNTS={
  1:{lesson:6,quiz:1,answer:8},2:{lesson:3,quiz:1,answer:8},3:{lesson:4,quiz:1,answer:9},
  4:{lesson:3,quiz:1,answer:8},5:{lesson:4,quiz:1,answer:9},6:{lesson:3,quiz:1,answer:8},
  7:{lesson:3,quiz:1,answer:7},8:{lesson:5,quiz:1,answer:10},9:{lesson:4,quiz:1,answer:7},
  10:{lesson:3,quiz:1,answer:7},11:{lesson:4,quiz:2,answer:9},12:{lesson:4,quiz:1,answer:8},
  13:{lesson:3,quiz:1,answer:8},14:{lesson:3,quiz:1,answer:8},15:{lesson:4,quiz:2,answer:9},
  16:{lesson:3,quiz:1,answer:8},17:{lesson:3,quiz:1,answer:7},18:{lesson:10,quiz:1,answer:7},
  19:{lesson:2,quiz:2,answer:6},20:{lesson:8,quiz:2,answer:11},21:{lesson:3,quiz:1,answer:10},
  22:{lesson:4,quiz:2,answer:8},23:{lesson:4,quiz:2,answer:8},24:{lesson:4,quiz:2,answer:9},
  25:{lesson:3,quiz:2,answer:8},26:{lesson:3,quiz:1,answer:9},27:{lesson:3,quiz:1,answer:9},
  28:{lesson:3,quiz:1,answer:8},29:{lesson:5,quiz:1,answer:13},30:{lesson:2,quiz:1,answer:9},
  31:{lesson:7,quiz:1,answer:9},32:{lesson:5,quiz:1,answer:5},33:{lesson:4,quiz:1,answer:7},
  34:{lesson:4,quiz:1,answer:8},35:{lesson:3,quiz:1,answer:8},36:{lesson:3,quiz:2,answer:7},
  37:{lesson:6,quiz:1,answer:8},38:{lesson:4,quiz:2,answer:7},39:{lesson:8,quiz:1,answer:9},
  40:{lesson:6,quiz:1,answer:6},41:{lesson:5,quiz:1,answer:6},42:{lesson:6,quiz:1,answer:6},
  43:{lesson:3,quiz:1,answer:7},44:{lesson:3,quiz:1,answer:8},45:{lesson:3,quiz:2,answer:9},
  46:{lesson:4,quiz:1,answer:6},47:{lesson:3,quiz:2,answer:8},48:{lesson:5,quiz:1,answer:7}
};

// ── QUIZ DATA (10–12 câu/ngày) ──
const QUIZ={
1:[
  {q:'Điền mạo từ a/an phù hợp: baby',type:'rewrite',ans:'a',ex:'baby bắt đầu bằng phụ âm.'},
  {q:'Điền mạo từ a/an phù hợp: orange',type:'rewrite',ans:'an',ex:'orange bắt đầu bằng nguyên âm.'},
  {q:'Điền mạo từ a/an phù hợp: woman',type:'rewrite',ans:'a',ex:'woman bắt đầu bằng phụ âm.'},
  {q:'Điền mạo từ a/an phù hợp: car',type:'rewrite',ans:'a',ex:'car bắt đầu bằng phụ âm.'},
  {q:'Điền mạo từ a/an phù hợp: apple',type:'rewrite',ans:'an',ex:'apple bắt đầu bằng nguyên âm.'},
  {q:'Điền to be (am/is/are): We _______ happy.',type:'rewrite',ans:'are',ex:'Chủ ngữ We số nhiều -> are.'},
  {q:'Điền to be (am/is/are): It _______ my book.',type:'rewrite',ans:'is',ex:'Chủ ngữ It số ít -> is.'},
  {q:'Điền to be (am/is/are): They _______ her dogs.',type:'rewrite',ans:'are',ex:'Chủ ngữ They số nhiều -> are.'},
  {q:'Điền to be (am/is/are): I _______ a student.',type:'rewrite',ans:'am',ex:'Chủ ngữ I -> am.'},
  {q:'Điền to be (am/is/are): He _______ her brother.',type:'rewrite',ans:'is',ex:'Chủ ngữ He số ít -> is.'},
  {q:'Viết lại dùng dạng viết tắt của to be: It is a big book.',type:'rewrite',ans:'It\'s a big book.',ex:'It is -> It\'s'},
  {q:'Viết lại dùng dạng viết tắt của to be: We are not teachers.',type:'rewrite',ans:['We aren\'t teachers.','We\'re not teachers.'],ex:'are not -> aren\'t hoặc \'re not'},
  {q:'Viết lại dùng dạng viết tắt của to be: They are small apples.',type:'rewrite',ans:'They\'re small apples.',ex:'They are -> They\'re'},
  {q:'Viết lại dùng dạng viết tắt của to be: He is short.',type:'rewrite',ans:'He\'s short.',ex:'He is -> He\'s'},
  {q:'Viết lại dùng dạng viết tắt của to be: She is in the car.',type:'rewrite',ans:'She\'s in the car.',ex:'She is -> She\'s'},
  {q:'Chọn đáp án phù hợp: She _______ short; she is tall.',opts:['A. are','B. am','C. isn\'t'],ans:2,ex:'She -> is. Phủ định -> isn\'t.'},
  {q:'Chọn đáp án phù hợp: I _______ a teacher. I am a student.',opts:['A. is not','B. am not','C. aren\'t'],ans:1,ex:'I -> am. Phủ định -> am not.'},
  {q:'Chọn đáp án phù hợp: My brother is happy. He _______ sad.',opts:['A. isn\'t','B. are','C. am not'],ans:0,ex:'He -> is. Phủ định -> isn\'t.'},
  {q:'Chọn đáp án phù hợp: They are not her books; they _______ my books.',opts:['A. is','B. are','C. am'],ans:1,ex:'They -> are.'},
  {q:'Chọn đáp án phù hợp: It _______ a big car. It\'s a small car.',opts:['A. aren\'t','B. am not','C. is not'],ans:2,ex:'It -> is. Phủ định -> is not.'}
],
2:[
  {q:'Điền danh từ số nhiều: man -> ______',type:'rewrite',ans:'men',ex:'Số nhiều bất quy tắc của man là men.',img:'assets/day02/quiz_p01.jpg',imgScroll:0.25},
  {q:'Điền danh từ số nhiều: apple -> ______',type:'rewrite',ans:'apples',ex:'apple thêm s -> apples.',img:'assets/day02/quiz_p01.jpg',imgScroll:0.5},
  {q:'Điền danh từ số nhiều: box -> ______',type:'rewrite',ans:'boxes',ex:'box tận cùng x thêm es -> boxes.',img:'assets/day02/quiz_p01.jpg',imgScroll:0.75},
  {q:'Điền danh từ số nhiều: picture -> ______',type:'rewrite',ans:'pictures',ex:'picture thêm s -> pictures.',img:'assets/day02/quiz_p01.jpg',imgScroll:1.0},
  {q:'Điền This/That/These/Those và to be (Dựa vào ngữ cảnh gần/xa số ít/số nhiều): _______ my father. (gần, 1 người)',type:'rewrite',ans:['This is', 'This is '],ex:'1 người, gần -> This is',img:'assets/day02/quiz_p02.jpg',imgScroll:0.25},
  {q:'Điền This/That/These/Those và to be: _______ my books. (xa, nhiều cuốn)',type:'rewrite',ans:['Those are', 'Those are '],ex:'Nhiều vật, xa -> Those are',img:'assets/day02/quiz_p02.jpg',imgScroll:0.5},
  {q:'Điền This/That/These/Those và to be: _______ my friend. (xa, 1 người)',type:'rewrite',ans:['That is', 'That is '],ex:'1 người, xa -> That is',img:'assets/day02/quiz_p02.jpg',imgScroll:0.75},
  {q:'Điền This/That/These/Those và to be: _______ my students. (gần, nhiều người)',type:'rewrite',ans:['These are', 'These are '],ex:'Nhiều người, gần -> These are',img:'assets/day02/quiz_p02.jpg',imgScroll:1.0},
  {q:'Trả lời ngắn: Are they oranges? -> Yes, _________',type:'rewrite',ans:['they are', 'they are.'],ex:'Yes, they are.',img:'assets/day02/quiz_p03.jpg',imgScroll:0.25},
  {q:'Trả lời ngắn (phủ định): Are they babies? (Hình ảnh: học sinh lớn) -> _________',type:'rewrite',ans:['No, they aren\'t.', 'No, they aren\'t', 'No, they are not.', 'No, they are not'],ex:'No, they aren\'t.',img:'assets/day02/quiz_p03.jpg',imgScroll:0.5},
  {q:'Trả lời ngắn (phủ định): Is this a cat? (Hình ảnh: con chó) -> _________',type:'rewrite',ans:['No, it isn\'t.', 'No, it isn\'t', 'No, it is not.', 'No, it is not'],ex:'No, it isn\'t.',img:'assets/day02/quiz_p03.jpg',imgScroll:0.75},
  {q:'Trả lời ngắn: Is he a doctor? (Hình ảnh: bác sĩ) -> _________',type:'rewrite',ans:['Yes, he is.', 'Yes, he is'],ex:'Yes, he is.',img:'assets/day02/quiz_p03.jpg',imgScroll:1.0},
  {q:'Chọn đáp án đúng: These firefighters _______ kind.',opts:['A. are','B. is','C. am'],ans:0,ex:'These firefighters số nhiều -> are.'},
  {q:'Chọn đáp án đúng: Is this your room? - No, _______ .',opts:['A. he is','B. there is','C. it isn\'t'],ans:2,ex:'Hỏi this -> trả lời it. Phủ định -> isn\'t.'},
  {q:'Chọn đáp án đúng: Here _______ my lovely daughters.',opts:['A. is','B. am','C. are'],ans:2,ex:'daughters số nhiều -> are.'},
  {q:'Chọn đáp án đúng: _______ she a busy lawyer?',opts:['A. Am','B. Is','C. Are'],ans:1,ex:'Chủ ngữ she -> Is.'},
  {q:'Chọn đáp án đúng: Those are my old _______ .',opts:['A. a friend','B. friend','C. friends'],ans:2,ex:'Those are + danh từ số nhiều -> friends.'},
  {q:'Chọn đáp án đúng: _______ there children in the kitchen?',opts:['A. Is','B. Are','C. Am'],ans:1,ex:'children số nhiều -> Are there.'},
  {q:'Chọn đáp án đúng: Is this man your uncle? - Yes, _______ .',opts:['A. he is','B. she is','C. I am'],ans:0,ex:'man -> he. Trả lời Yes, he is.'},
  {q:'Chọn đáp án đúng: There are new _______ in the box.',opts:['A. books','B. book','C. a book'],ans:0,ex:'There are + danh từ số nhiều -> books.'}
],
3:[
  {q:'Nối câu hỏi với câu trả lời: Who is she?',type:'rewrite',ans:['She is my cousin.','She is my cousin'],ex:'Who hỏi người -> She is my cousin.'},
  {q:'Nối câu hỏi với câu trả lời: Who is this?',type:'rewrite',ans:['It\'s my grandfather.','It is my grandfather.'],ex:'Who hỏi người -> It\'s my grandfather.'},
  {q:'Nối câu hỏi với câu trả lời: What is that?',type:'rewrite',ans:['It\'s a banana.','It is a banana.'],ex:'What hỏi vật số ít -> It\'s a banana.'},
  {q:'Nối câu hỏi với câu trả lời: Who are these?',type:'rewrite',ans:['They are my children.','They are my children'],ex:'Who hỏi người số nhiều -> They are my children.'},
  {q:'Nối câu hỏi với câu trả lời: What are they?',type:'rewrite',ans:['They are my socks.','They are my socks'],ex:'What hỏi vật số nhiều -> They are my socks.'},
  {q:'Trả lời câu hỏi (Hình ảnh: những chiếc mũ): What are they?',type:'rewrite',ans:['They are hats.','They are hats'],ex:'Hình ảnh là những chiếc mũ (hats).',img:'assets/day03/quiz_p01.jpg',imgScroll:0.55},
  {q:'Trả lời câu hỏi (Hình ảnh: cái bánh kem): What is this?',type:'rewrite',ans:['It is a cake.','It\'s a cake.'],ex:'Hình ảnh là cái bánh kem (a cake).',img:'assets/day03/quiz_p01.jpg',imgScroll:0.75},
  {q:'Trả lời câu hỏi (Hình ảnh: những cái gối): What are these?',type:'rewrite',ans:['They are pillows.','They are pillows'],ex:'Hình ảnh là những cái gối (pillows).',img:'assets/day03/quiz_p01.jpg',imgScroll:1.0},
  {q:'Trả lời câu hỏi (Hình ảnh: các bác sĩ): Who are those?',type:'rewrite',ans:['They are doctors.','They are doctors'],ex:'Hình ảnh là các bác sĩ (doctors).',img:'assets/day03/quiz_p02.jpg',imgScroll:0.15},
  {q:'Trả lời câu hỏi (Hình ảnh: cái túi xách): What is that?',type:'rewrite',ans:['It is a bag.','It\'s a bag.','It is a handbag.','It\'s a handbag.'],ex:'Hình ảnh là cái túi (a bag/handbag).',img:'assets/day03/quiz_p02.jpg',imgScroll:0.35},
  {q:'Chọn đáp án đúng: ______ is this? - It\'s a desk.',opts:['A. What','B. Who'],ans:0,ex:'desk (cái bàn) là vật -> What.'},
  {q:'Chọn đáp án đúng: ______ are these? - They are shirts.',opts:['A. What','B. Who'],ans:0,ex:'shirts (áo sơ mi) là vật -> What.'},
  {q:'Chọn đáp án đúng: ______ are these? - They are my children.',opts:['A. What','B. Who'],ans:1,ex:'children (trẻ em) là người -> Who.'},
  {q:'Chọn đáp án đúng: ______ is this? - It is my friend.',opts:['A. What','B. Who'],ans:1,ex:'friend (bạn) là người -> Who.'},
  {q:'Chọn đáp án đúng: ______ are those? - They are her jeans.',opts:['A. What','B. Who'],ans:0,ex:'jeans (quần jean) là vật -> What.'},
  {q:'Chọn đáp án đúng: What are ______? - They are her dogs.',opts:['A. those','B. it','C. you'],ans:0,ex:'they tương ứng với số nhiều those.'},
  {q:'Chọn đáp án đúng: Who are they? - They ______ our classmates.',opts:['A. is','B. am','C. are'],ans:2,ex:'They đi với are.'},
  {q:'Chọn đáp án đúng: What is this? - ______ a chair.',opts:['A. They\'re','B. It\'s','C. I\'m'],ans:1,ex:'this tương ứng với it -> It\'s.'},
  {q:'Chọn đáp án đúng: Who is this? - ______ is my friend.',opts:['A. It','B. You','C. They'],ans:0,ex:'Who is this -> trả lời It is...'},
  {q:'Chọn đáp án đúng: Who ______ that? - It\'s his grandmother.',opts:['A. is','B. are','C. am'],ans:0,ex:'that là số ít -> is.'}
],
4:[
  {q:'Nối câu hỏi với câu trả lời: When is the English class?',type:'rewrite',ans:['It\'s at 3:00 in the afternoon.','It is at 3:00 in the afternoon.'],ex:'When hỏi giờ -> at 3:00 in the afternoon.'},
  {q:'Nối câu hỏi với câu trả lời: Where is she?',type:'rewrite',ans:['She\'s in the garden.','She is in the garden.'],ex:'Where hỏi nơi chốn -> in the garden.'},
  {q:'Nối câu hỏi với câu trả lời: Where are the dogs?',type:'rewrite',ans:['They are in the house.','They are in the house'],ex:'dogs -> They are in the house.'},
  {q:'Nối câu hỏi với câu trả lời: When is the party?',type:'rewrite',ans:['It\'s at night.','It is at night.'],ex:'When hỏi thời gian -> at night.'},
  {q:'Nối câu hỏi với câu trả lời: Where is the book?',type:'rewrite',ans:['It\'s on the desk.','It is on the desk.'],ex:'Where hỏi nơi chốn -> on the desk.'},
  {q:'Chọn đáp án đúng: ______ is your exam? - It\'s on Monday.',opts:['A. When','B. Where'],ans:0,ex:'Monday (thời gian) -> When.'},
  {q:'Chọn đáp án đúng: ______ is my clock? - It\'s on the wall.',opts:['A. When','B. Where'],ans:1,ex:'on the wall (nơi chốn) -> Where.'},
  {q:'Chọn đáp án đúng: ______ is the class? - It\'s on Wednesday.',opts:['A. When','B. Where'],ans:0,ex:'Wednesday (thời gian) -> When.'},
  {q:'Chọn đáp án đúng: ______ are the kids? - They are in the park.',opts:['A. When','B. Where'],ans:1,ex:'in the park (nơi chốn) -> Where.'},
  {q:'Chọn đáp án đúng: ______ is your bag? - It\'s on the table.',opts:['A. When','B. Where'],ans:1,ex:'on the table (nơi chốn) -> Where.'},
  {q:'Chọn đáp án đúng: We are ______ the supermarket.',opts:['A. in','B. on','C. at'],ans:2,ex:'địa điểm cụ thể -> at the supermarket.'},
  {q:'Chọn đáp án đúng: The jeans are ______ the wardrobe.',opts:['A. in','B. on','C. at'],ans:0,ex:'bên trong -> in the wardrobe.'},
  {q:'Chọn đáp án đúng: His birthday is ______ Monday.',opts:['A. in','B. on','C. at'],ans:1,ex:'thứ trong tuần -> on Monday.'},
  {q:'Chọn đáp án đúng: The Math class is ______ the morning.',opts:['A. in','B. on','C. at'],ans:0,ex:'buổi trong ngày -> in the morning.'},
  {q:'Chọn đáp án đúng: The oranges are ______ the floor.',opts:['A. in','B. on','C. at'],ans:1,ex:'trên bề mặt -> on the floor.'},
  {q:'Trả lời câu hỏi (Hình ảnh: phòng làm việc): Where is your brother?',type:'rewrite',ans:['He is in the room.','He is at work.','He is in his room.','He is working.'],ex:'Gợi ý: He is in the room / at work.',img:'assets/day04/quiz_p02.jpg',imgScroll:0.1},
  {q:'Trả lời câu hỏi (Hình ảnh: đồng hồ chỉ 7 giờ): When is the English class?',type:'rewrite',ans:['It is at 7 o\'clock.','It is at 7:00.','It\'s at 7 o\'clock.','It\'s at 7:00.'],ex:'Đồng hồ chỉ 7 giờ -> It is at 7 o\'clock.',img:'assets/day04/quiz_p02.jpg',imgScroll:0.3},
  {q:'Trả lời câu hỏi (Hình ảnh: nhà ga): Where are your parents?',type:'rewrite',ans:['They are at the station.','They are at the train station.'],ex:'Nhà ga -> They are at the station.',img:'assets/day04/quiz_p02.jpg',imgScroll:0.55},
  {q:'Trả lời câu hỏi (Hình ảnh: con mèo trên sofa): Where is her cat?',type:'rewrite',ans:['It is on the sofa.','It\'s on the sofa.'],ex:'Trên ghế sofa -> It is on the sofa.',img:'assets/day04/quiz_p02.jpg',imgScroll:0.75},
  {q:'Trả lời câu hỏi (Hình ảnh: tờ lịch thứ Ba): When is his birthday?',type:'rewrite',ans:['It is on Tuesday.','It\'s on Tuesday.'],ex:'Lịch ghi Tuesday -> It is on Tuesday.',img:'assets/day04/quiz_p02.jpg',imgScroll:1.0}
],
5:[
  {q:'Thêm đuôi s/es: watch -> ______',type:'rewrite',ans:'watches',ex:'watch tận cùng ch -> thêm es.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.1},
  {q:'Thêm đuôi s/es: study -> ______',type:'rewrite',ans:'studies',ex:'study kết thúc bằng phụ âm + y -> đổi y thành i + es.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.15},
  {q:'Thêm đuôi s/es: play -> ______',type:'rewrite',ans:'plays',ex:'play kết thúc bằng nguyên âm + y -> thêm s.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.2},
  {q:'Thêm đuôi s/es: dance -> ______',type:'rewrite',ans:'dances',ex:'dance tận cùng e -> thêm s.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.25},
  {q:'Thêm đuôi s/es: go -> ______',type:'rewrite',ans:'goes',ex:'go tận cùng o -> thêm es.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.3},
  {q:'Thêm đuôi s/es: do -> ______',type:'rewrite',ans:'does',ex:'do tận cùng o -> thêm es.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.35},
  {q:'Thêm đuôi s/es: visit -> ______',type:'rewrite',ans:'visits',ex:'visit thêm s bình thường.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.4},
  {q:'Thêm đuôi s/es: wash -> ______',type:'rewrite',ans:'washes',ex:'wash tận cùng sh -> thêm es.',img:'assets/day05/quiz_p01.jpg',imgScroll:0.45},
  {q:'Chọn đáp án đúng: She _______ letters to her friends.',opts:['A. write','B. writes'],ans:1,ex:'She (số ít) -> writes.'},
  {q:'Chọn đáp án đúng: They _______ books before bedtime.',opts:['A. read','B. reads'],ans:0,ex:'They (số nhiều) -> read.'},
  {q:'Chọn đáp án đúng: His sisters _______ maths at home.',opts:['A. study','B. studies'],ans:0,ex:'sisters (số nhiều) -> study.'},
  {q:'Chọn đáp án đúng: My children _______ candies.',opts:['A. enjoy','B. enjoys'],ans:0,ex:'children (số nhiều) -> enjoy.'},
  {q:'Chọn đáp án đúng: We _______ to music in the morning.',opts:['A. listen','B. listens'],ans:0,ex:'We (số nhiều) -> listen.'},
  {q:'Chọn đáp án đúng: My parents _______ TV at night.',opts:['A. watch','B. watches'],ans:0,ex:'parents (số nhiều) -> watch.'},
  {q:'Chọn đáp án đúng: Her brother _______ his bike to university.',opts:['A. ride','B. rides'],ans:1,ex:'brother (số ít) -> rides.'},
  {q:'Chọn đáp án đúng: She _______ the dishes after dinner.',opts:['A. wash','B. washes'],ans:1,ex:'She (số ít) -> washes.'},
  {q:'Chọn đáp án đúng: Huy _______ at parties.',opts:['A. sing','B. sings'],ans:1,ex:'Huy (số ít) -> sings.'},
  {q:'Chọn đáp án đúng: They _______ their parents with housework.',opts:['A. help','B. helps'],ans:0,ex:'They (số nhiều) -> help.'},
  {q:'Chọn đáp án đúng: Susan _______ badminton.',opts:['A. like','B. likes'],ans:1,ex:'Susan (số ít) -> likes.'},
  {q:'Chọn đáp án đúng: Their students _______ chess every day.',opts:['A. play','B. plays'],ans:0,ex:'students (số nhiều) -> play.'}
],
6:[
  {q:'She _____ like coffee.',opts:['A. don\'t','B. doesn\'t','C. isn\'t'],ans:1,ex:'She (ngôi 3 số ít) → doesn\'t.'},
  {q:'We _____ go to school on Sundays.',opts:['A. doesn\'t','B. isn\'t','C. don\'t'],ans:2,ex:'We → don\'t.'},
  {q:'He _____ speak French.',opts:['A. don\'t','B. doesn\'t','C. isn\'t'],ans:1,ex:'He → doesn\'t.'},
  {q:'I _____ eat meat.',opts:['A. doesn\'t','B. don\'t','C. isn\'t'],ans:1,ex:'I → don\'t.'},
  {q:'My sister _____ watch TV.',opts:['A. don\'t','B. doesn\'t','C. aren\'t'],ans:1,ex:'My sister → doesn\'t.'},
  {q:'They _____ live here anymore.',opts:['A. doesn\'t','B. don\'t','C. isn\'t'],ans:1,ex:'They → don\'t.'},
  {q:'She doesn\'t _____ English.',opts:['A. speaks','B. speak','C. speaking'],ans:1,ex:'Sau doesn\'t luôn dùng V nguyên thể.'},
  {q:'He doesn\'t _____ football.',opts:['A. plays','B. play','C. played'],ans:1,ex:'Sau doesn\'t → V nguyên thể.'},
  {q:'They don\'t _____ coffee.',opts:['A. drinks','B. drink','C. drinking'],ans:1,ex:'Sau don\'t → V nguyên thể.'},
  {q:'Câu phủ định đúng của "She eats rice":',opts:['A. She don\'t eat rice','B. She doesn\'t eat rice','C. She doesn\'t eats rice'],ans:1,ex:'She → doesn\'t + V nguyên thể.'},
  {q:'Câu phủ định đúng của "They play tennis":',opts:['A. They doesn\'t play tennis','B. They don\'t plays tennis','C. They don\'t play tennis'],ans:2,ex:'They → don\'t + V nguyên thể.'},
  {q:'I _____ understand this lesson.',opts:['A. doesn\'t','B. don\'t','C. aren\'t'],ans:1,ex:'I → don\'t.'}
],
7:[
  {q:'_____ she like chocolate?',opts:['A. Do','B. Does','C. Is'],ans:1,ex:'She (ngôi 3 số ít) → Does.'},
  {q:'_____ you speak English?',opts:['A. Do','B. Does','C. Are'],ans:0,ex:'You → Do.'},
  {q:'_____ he work here?',opts:['A. Do','B. Does','C. Is'],ans:1,ex:'He → Does.'},
  {q:'Do you like pizza? — Yes, _____ .',opts:['A. I does','B. I do','C. I am'],ans:1,ex:'Yes, I do.'},
  {q:'Does she speak French? — No, _____ .',opts:['A. she don\'t','B. she doesn\'t','C. she isn\'t'],ans:1,ex:'No, she doesn\'t.'},
  {q:'Does he _____ tennis?',opts:['A. plays','B. play','C. playing'],ans:1,ex:'Sau Does → V nguyên thể.'},
  {q:'Do they _____ in Hanoi?',opts:['A. lives','B. live','C. living'],ans:1,ex:'Sau Do → V nguyên thể.'},
  {q:'_____ your parents like music?',opts:['A. Does','B. Do','C. Are'],ans:1,ex:'your parents = they → Do.'},
  {q:'Does the dog _____ a lot?',opts:['A. barks','B. bark','C. barking'],ans:1,ex:'Sau Does → V nguyên thể.'},
  {q:'_____ your teacher speak slowly?',opts:['A. Do','B. Does','C. Is'],ans:1,ex:'your teacher = he/she → Does.'},
  {q:'Do you live near here? — Yes, _____ .',opts:['A. I does','B. I live','C. I do'],ans:2,ex:'Yes, I do.'},
  {q:'Does she study hard? — No, _____ .',opts:['A. she don\'t','B. she doesn\'t','C. she not does'],ans:1,ex:'No, she doesn\'t.'}
],
8:[
  {q:'Thì Hiện Tại Đơn dùng để diễn tả:',opts:['A. Hành động đang xảy ra','B. Thói quen, sự thật','C. Hành động đã xảy ra'],ans:1,ex:'Simple Present: thói quen, sự thật hiển nhiên, lịch biểu.'},
  {q:'Từ nào là dấu hiệu của Thì Hiện Tại Đơn?',opts:['A. now','B. yesterday','C. always'],ans:2,ex:'always, usually, often, sometimes, never → Simple Present.'},
  {q:'The sun _____ in the east.',opts:['A. rise','B. rises','C. rising'],ans:1,ex:'Sự thật hiển nhiên, the sun (ngôi 3 số ít) → rises.'},
  {q:'She _____ to work every day.',opts:['A. drive','B. drives','C. is driving'],ans:1,ex:'every day → thói quen → drives.'},
  {q:'Water _____ at 100°C.',opts:['A. boil','B. boils','C. is boiling'],ans:1,ex:'Sự thật khoa học → boils.'},
  {q:'Câu nào đúng ngữ pháp?',opts:['A. He go to school.','B. He goes to school.','C. He going to school.'],ans:1,ex:'He (ngôi 3) → goes.'},
  {q:'Từ nào KHÔNG phải dấu hiệu của Hiện Tại Đơn?',opts:['A. usually','B. at the moment','C. every week'],ans:1,ex:'at the moment → Hiện Tại Tiếp Diễn.'},
  {q:'I _____ breakfast at 7 every morning.',opts:['A. have','B. has','C. having'],ans:0,ex:'I → have.'},
  {q:'Câu phủ định đúng của "He plays chess":',opts:['A. He doesn\'t plays chess','B. He don\'t play chess','C. He doesn\'t play chess'],ans:2,ex:'He → doesn\'t + V nguyên thể.'},
  {q:'Câu hỏi đúng của "She works late":',opts:['A. Do she work late?','B. Does she work late?','C. Does she works late?'],ans:1,ex:'She → Does + V nguyên thể.'},
  {q:'My brother _____ football on Saturdays.',opts:['A. play','B. plays','C. is play'],ans:1,ex:'My brother → plays.'},
  {q:'They _____ usually _____ dinner together.',opts:['A. do / have','B. / have','C. / has'],ans:1,ex:'They usually have — trạng từ tần suất đứng trước động từ chính.'}
],
9:[
  {q:'"beautiful" là từ loại gì?',opts:['A. Noun','B. Adjective','C. Adverb'],ans:1,ex:'beautiful = đẹp → tính từ (adjective).'},
  {q:'"quickly" là từ loại gì?',opts:['A. Adjective','B. Noun','C. Adverb'],ans:2,ex:'quickly = nhanh chóng → trạng từ (adverb), thường tận -ly.'},
  {q:'"happiness" là từ loại gì?',opts:['A. Verb','B. Noun','C. Adjective'],ans:1,ex:'happiness = hạnh phúc → danh từ (noun).'},
  {q:'"run" là từ loại gì trong "I run every day"?',opts:['A. Noun','B. Adjective','C. Verb'],ans:2,ex:'run = chạy → động từ (verb).'},
  {q:'Adjective đứng ở vị trí nào?',opts:['A. Sau động từ','B. Trước danh từ','C. Cuối câu'],ans:1,ex:'Tính từ đứng trước danh từ: a beautiful girl.'},
  {q:'Adverb thường tận cùng bằng:',opts:['A. -tion',  'B. -ness','C. -ly'],ans:2,ex:'quickly, slowly, beautifully → adverb thường tận -ly.'},
  {q:'Danh từ nào sau "the"?',opts:['A. beautiful','B. quickly','C. book'],ans:2,ex:'the + noun: the book.'},
  {q:'"teacher" thuộc từ loại:',opts:['A. Verb','B. Noun','C. Adjective'],ans:1,ex:'teacher = giáo viên → danh từ.'},
  {q:'Câu nào dùng adjective đúng?',opts:['A. She runs quick.','B. She is quick.','C. She quicks.'],ans:1,ex:'to be + adjective: She is quick.'},
  {q:'"slowly" là adverb của:',opts:['A. slow','B. slowly','C. slowness'],ans:0,ex:'slow (adj) → slowly (adv).'},
  {q:'Từ nào là noun?',opts:['A. swim','B. freedom','C. happy'],ans:1,ex:'freedom = tự do → danh từ.'},
  {q:'Adverb bổ nghĩa cho:',opts:['A. Danh từ','B. Động từ/Tính từ/Trạng từ khác','C. Mạo từ'],ans:1,ex:'Trạng từ bổ nghĩa cho động từ, tính từ, hoặc trạng từ khác.'}
],
10:[
  {q:'Công thức Hiện Tại Tiếp Diễn là:',opts:['A. S + V-s/es','B. S + am/is/are + V-ing','C. S + will + V'],ans:1,ex:'Present Continuous: S + am/is/are + V-ing.'},
  {q:'She _____ TV right now.',opts:['A. watches','B. is watching','C. watch'],ans:1,ex:'right now → Hiện Tại Tiếp Diễn → is watching.'},
  {q:'They _____ football at the moment.',opts:['A. plays','B. are playing','C. play'],ans:1,ex:'at the moment → are playing.'},
  {q:'I _____ to music now.',opts:['A. listen','B. am listening','C. listens'],ans:1,ex:'now + I → am listening.'},
  {q:'Từ nào là dấu hiệu của Hiện Tại Tiếp Diễn?',opts:['A. every day','B. yesterday','C. right now'],ans:2,ex:'right now, at the moment, currently → Present Continuous.'},
  {q:'He _____ a book at the moment.',opts:['A. reads','B. is reading','C. read'],ans:1,ex:'at the moment + He → is reading.'},
  {q:'V-ing của "run" là:',opts:['A. runing','B. running','C. runned'],ans:1,ex:'run → double consonant → running.'},
  {q:'V-ing của "make" là:',opts:['A. makeing','B. makking','C. making'],ans:2,ex:'make → bỏ e → making.'},
  {q:'Câu phủ định đúng: "She is not _____ now."',opts:['A. sleeps','B. sleeping','C. sleep'],ans:1,ex:'is not + V-ing → is not sleeping.'},
  {q:'Are you working now? — Yes, _____ .',opts:['A. I do','B. I working','C. I am'],ans:2,ex:'Yes, I am.'},
  {q:'_____ he studying for the exam?',opts:['A. Do','B. Does','C. Is'],ans:2,ex:'Câu hỏi Present Continuous với he → Is.'},
  {q:'V-ing của "sit" là:',opts:['A. siting','B. sitting','C. sitted'],ans:1,ex:'sit → consonant + vowel + consonant → sitting.'}
],
11:[
  {q:'I _____ English every day. (thói quen)',opts:['A. am studying','B. study','C. studied'],ans:1,ex:'Thói quen (every day) → Simple Present → study.'},
  {q:'She _____ right now. (đang xảy ra)',opts:['A. reads','B. read','C. is reading'],ans:2,ex:'right now → Present Continuous → is reading.'},
  {q:'Câu nào đúng với Simple Present?',opts:['A. I am usually eating breakfast at 7.','B. I usually eat breakfast at 7.','C. I am eat breakfast at 7.'],ans:1,ex:'usually + thói quen → Simple Present.'},
  {q:'Câu nào đúng với Present Continuous?',opts:['A. She is always sleeping late. (thói quen lâu dài)','B. She sleeping now.','C. She is sleeping now.'],ans:2,ex:'now → Present Continuous → is sleeping.'},
  {q:'"Look! The baby _____." Điền đúng:',opts:['A. smiles','B. is smiling','C. smiled'],ans:1,ex:'Look! → đang xảy ra → is smiling.'},
  {q:'He _____ to work by bus every morning.',opts:['A. is going','B. goes','C. going'],ans:1,ex:'every morning → thói quen → goes.'},
  {q:'Từ nào gợi ý dùng Present Continuous?',opts:['A. never','B. now','C. always'],ans:1,ex:'now, at the moment, currently → Present Continuous.'},
  {q:'Từ nào gợi ý dùng Simple Present?',opts:['A. at the moment','B. currently','C. usually'],ans:2,ex:'usually, often, every day → Simple Present.'},
  {q:'They _____ dinner at this moment.',opts:['A. have','B. has','C. are having'],ans:2,ex:'at this moment → are having.'},
  {q:'Water _____ at 100°C. (sự thật)',opts:['A. is boiling','B. boils','C. boil'],ans:1,ex:'Sự thật khoa học → Simple Present → boils.'},
  {q:'I _____ not understand this. (trạng thái)',opts:['A. am','B. do','C. does'],ans:1,ex:'understand là stative verb → không dùng -ing → do not.'},
  {q:'Câu nào SAI?',opts:['A. She is loving him.','B. She loves him.','C. She always loves him.'],ans:0,ex:'love là stative verb → không dùng -ing. She loves him.'}
],
12:[
  {q:'Thì Quá Khứ Đơn dùng để diễn tả:',opts:['A. Việc đang xảy ra','B. Việc đã xảy ra và kết thúc','C. Việc sẽ xảy ra'],ans:1,ex:'Simple Past: hành động xảy ra và kết thúc trong quá khứ.'},
  {q:'Quá khứ của "go" là:',opts:['A. goed','B. went','C. goes'],ans:1,ex:'go → went (bất quy tắc).'},
  {q:'She _____ to the cinema yesterday.',opts:['A. go','B. goes','C. went'],ans:2,ex:'yesterday → Simple Past → went.'},
  {q:'Quá khứ của "play" là:',opts:['A. plaied','B. played','C. plays'],ans:1,ex:'play → played (quy tắc: thêm -ed).'},
  {q:'They _____ football last Saturday.',opts:['A. play','B. plays','C. played'],ans:2,ex:'last Saturday → played.'},
  {q:'Từ nào là dấu hiệu của Simple Past?',opts:['A. now','B. yesterday','C. every day'],ans:1,ex:'yesterday, last week, ago, in 2020 → Simple Past.'},
  {q:'Quá khứ của "have" là:',opts:['A. haved','B. has','C. had'],ans:2,ex:'have → had (bất quy tắc).'},
  {q:'He _____ a letter to his friend last night.',opts:['A. writes','B. wrote','C. write'],ans:1,ex:'last night → wrote (write → wrote, bất quy tắc).'},
  {q:'Quá khứ của "study" là:',opts:['A. studyed','B. studied','C. studyed'],ans:1,ex:'study → studied (y → ied).'},
  {q:'I _____ a great movie last week.',opts:['A. see','B. saw','C. seen'],ans:1,ex:'last week → saw (see → saw, bất quy tắc).'},
  {q:'Quá khứ của "stop" là:',opts:['A. stoped','B. stopp','C. stopped'],ans:2,ex:'stop → doubled consonant → stopped.'},
  {q:'We _____ in Paris two years ago.',opts:['A. live','B. lived','C. lives'],ans:1,ex:'two years ago → lived.'}
],
13:[
  {q:'Câu phủ định Quá Khứ Đơn dùng:',opts:['A. doesn\'t + V','B. didn\'t + V','C. wasn\'t + V'],ans:1,ex:'Phủ định Simple Past: didn\'t + V nguyên thể.'},
  {q:'She _____ come to the party.',opts:['A. didn\'t','B. doesn\'t','C. wasn\'t'],ans:0,ex:'Simple Past phủ định → didn\'t.'},
  {q:'Câu hỏi Quá Khứ Đơn dùng:',opts:['A. Does + S + V?','B. Is + S + V-ing?','C. Did + S + V?'],ans:2,ex:'Câu hỏi Simple Past: Did + S + V nguyên thể?'},
  {q:'Did you _____ to the gym yesterday?',opts:['A. went','B. go','C. goes'],ans:1,ex:'Sau Did → V nguyên thể.'},
  {q:'She didn\'t _____ her homework.',opts:['A. does','B. did','C. do'],ans:2,ex:'Sau didn\'t → V nguyên thể.'},
  {q:'Did he call you? — Yes, _____ .',opts:['A. he did','B. he does','C. he called'],ans:0,ex:'Trả lời ngắn: Yes, he did.'},
  {q:'Did they go to school? — No, _____ .',opts:['A. they didn\'t','B. they don\'t','C. they weren\'t'],ans:0,ex:'No, they didn\'t.'},
  {q:'I _____ not see him at the party.',opts:['A. does','B. did','C. do'],ans:1,ex:'did not + V nguyên thể.'},
  {q:'Câu hỏi đúng của "She bought a car":',opts:['A. Did she buy a car?','B. Did she bought a car?','C. Does she buy a car?'],ans:0,ex:'Did + S + V nguyên thể? → Did she buy?'},
  {q:'He didn\'t _____ at school yesterday.',opts:['A. is','B. was','C. be'],ans:2,ex:'didn\'t + be (V nguyên thể) → didn\'t be. Nhưng thường dùng wasn\'t.'},
  {q:'_____ you understand the lesson?',opts:['A. Do','B. Did','C. Were'],ans:1,ex:'Quá khứ → Did.'},
  {q:'We _____ not finish the project on time.',opts:['A. do','B. does','C. did'],ans:2,ex:'Phủ định Simple Past → did not.'}
],
14:[
  {q:'Công thức Quá Khứ Tiếp Diễn là:',opts:['A. S + was/were + V-ing','B. S + did + V','C. S + V-ed'],ans:0,ex:'Past Continuous: S + was/were + V-ing.'},
  {q:'I _____ TV at 8 pm last night.',opts:['A. watched','B. was watching','C. watch'],ans:1,ex:'Đang xảy ra tại 8pm → was watching.'},
  {q:'They _____ football when it rained.',opts:['A. played','B. were playing','C. play'],ans:1,ex:'Hành động đang diễn ra bị gián đoạn → were playing.'},
  {q:'She _____ on the phone at 9 am.',opts:['A. talked','B. was talking','C. talk'],ans:1,ex:'Thời điểm cụ thể → was talking.'},
  {q:'"When I arrived, she _____ ." Điền đúng:',opts:['A. slept','B. was sleeping','C. sleep'],ans:1,ex:'Hành động đang xảy ra khi hành động khác xảy đến → was sleeping.'},
  {q:'We _____ dinner when the phone rang.',opts:['A. had','B. were having','C. have'],ans:1,ex:'when + rang → hành động bị gián đoạn → were having.'},
  {q:'Cấu trúc thường gặp với Past Continuous:',opts:['A. While + Past Cont, Simple Past','B. Although + Past Cont','C. Until + Past Cont'],ans:0,ex:'While I was sleeping, he called. = Past Cont + Simple Past.'},
  {q:'He _____ at 10 o\'clock last night. (ngủ)',opts:['A. slept','B. was sleeping','C. sleeps'],ans:1,ex:'Tại thời điểm 10 o\'clock → was sleeping.'},
  {q:'Was he studying when you called? — Yes, _____ .',opts:['A. he was','B. he did','C. he is'],ans:0,ex:'Yes, he was.'},
  {q:'They _____ not _____ attention in class.',opts:['A. were / paying','B. did / pay','C. was / pay'],ans:0,ex:'Phủ định Past Cont: were not paying.'},
  {q:'I _____ a shower when the doorbell rang.',opts:['A. had','B. was having','C. have'],ans:1,ex:'when + gián đoạn → was having.'},
  {q:'While she _____ the dishes, he cooked.',opts:['A. washed','B. was washing','C. wash'],ans:1,ex:'while + Past Continuous: was washing.'}
],
15:[
  {q:'Công thức Hiện Tại Hoàn Thành là:',opts:['A. S + had + V3','B. S + have/has + V3','C. S + will have + V3'],ans:1,ex:'Present Perfect: have/has + V3 (past participle).'},
  {q:'She _____ lived here for 5 years.',opts:['A. has','B. have','C. had'],ans:0,ex:'She (ngôi 3) → has.'},
  {q:'"for" trong Present Perfect chỉ:',opts:['A. Điểm bắt đầu','B. Khoảng thời gian','C. Thời điểm cụ thể'],ans:1,ex:'for + khoảng thời gian: for 5 years.'},
  {q:'"since" trong Present Perfect chỉ:',opts:['A. Khoảng thời gian','B. Điểm bắt đầu','C. Mục đích'],ans:1,ex:'since + điểm bắt đầu: since 2020.'},
  {q:'I _____ never been to Japan.',opts:['A. has','B. have','C. had'],ans:1,ex:'I → have. never đứng giữa have và V3.'},
  {q:'Have you _____ this movie?',opts:['A. see','B. saw','C. seen'],ans:2,ex:'Sau have → V3. see → seen.'},
  {q:'She has _____ her homework.',opts:['A. finish','B. finished','C. finishing'],ans:1,ex:'has + V3 → finished.'},
  {q:'They _____ just arrived.',opts:['A. has','B. have','C. had'],ans:1,ex:'They → have. just = vừa mới.'},
  {q:'"yet" dùng trong câu:',opts:['A. Khẳng định','B. Phủ định và nghi vấn','C. Chỉ nghi vấn'],ans:1,ex:'yet dùng trong câu phủ định và nghi vấn: I haven\'t done it yet.'},
  {q:'"already" dùng trong câu:',opts:['A. Phủ định','B. Khẳng định','C. Chỉ nghi vấn'],ans:1,ex:'already dùng trong câu khẳng định: She has already eaten.'},
  {q:'He _____ worked here since 2015.',opts:['A. have','B. has','C. had'],ans:1,ex:'He → has.'},
  {q:'Have they _____ the report? — Yes, they _____ .',opts:['A. finish / have','B. finished / have','C. finished / has'],ans:1,ex:'finished (V3) + Yes, they have.'}
],
16:[
  {q:'Công thức Tương Lai Đơn với "will" là:',opts:['A. S + will + V','B. S + will + V-s','C. S + will + V-ing'],ans:0,ex:'Simple Future: S + will + V nguyên thể.'},
  {q:'She _____ visit us tomorrow.',opts:['A. wills','B. will','C. is will'],ans:1,ex:'will không thêm s với bất kỳ chủ ngữ nào.'},
  {q:'Câu phủ định: "He _____ not come."',opts:['A. will','B. does','C. is'],ans:0,ex:'will not = won\'t.'},
  {q:'_____ you help me?',opts:['A. Will','B. Do','C. Are'],ans:0,ex:'Câu hỏi với will: Will + S + V?'},
  {q:'"be going to" dùng khi:',opts:['A. Quyết định tức thì','B. Kế hoạch đã có sẵn','C. Sự thật hiển nhiên'],ans:1,ex:'be going to = kế hoạch đã lên sẵn, dự đoán có bằng chứng.'},
  {q:'I _____ going to study tonight.',opts:['A. will','B. am','C. is'],ans:1,ex:'I + be going to → I am going to.'},
  {q:'Will she come? — Yes, _____ .',opts:['A. she will','B. she does','C. she is'],ans:0,ex:'Yes, she will.'},
  {q:'He _____ travel to London next month.',opts:['A. is going to','B. goes to','C. going to'],ans:0,ex:'Kế hoạch → is going to.'},
  {q:'Từ nào gợi ý dùng Future?',opts:['A. yesterday','B. tomorrow','C. now'],ans:1,ex:'tomorrow, next week, in the future → Future tense.'},
  {q:'"I\'ll call you later." = "will" ở đây diễn tả:',opts:['A. Kế hoạch sẵn có','B. Quyết định tức thì','C. Thói quen'],ans:1,ex:'will = quyết định ngay tại lúc nói.'},
  {q:'They _____ not finish on time.',opts:['A. will','B. do','C. are'],ans:0,ex:'Phủ định Future: will not = won\'t.'},
  {q:'_____ he be at the meeting tomorrow?',opts:['A. Does','B. Is','C. Will'],ans:2,ex:'Câu hỏi Future → Will.'}
],
17:[
  {q:'Công thức Tương Lai Hoàn Thành là:',opts:['A. S + will + V3','B. S + will have + V3','C. S + have + V3'],ans:1,ex:'Future Perfect: will have + V3.'},
  {q:'By 2030, scientists _____ a cure.',opts:['A. will find','B. will have found','C. have found'],ans:1,ex:'By + thời điểm tương lai → Future Perfect.'},
  {q:'"by the time" gợi ý:',opts:['A. Simple Future','B. Present Perfect','C. Future Perfect'],ans:2,ex:'By the time + ... → Future Perfect.'},
  {q:'She _____ graduated by June.',opts:['A. will','B. will have','C. has'],ans:1,ex:'by June (tương lai) → will have graduated.'},
  {q:'They will have finished _____ 5 pm.',opts:['A. since','B. for','C. by'],ans:2,ex:'by + thời điểm → Future Perfect.'},
  {q:'Will you have completed the project by Friday?',opts:['A. Yes, I will have','B. Yes, I will','C. Yes, I have'],ans:0,ex:'Yes, I will have (completed it).'},
  {q:'He _____ worked here for 20 years by 2025.',opts:['A. has','B. will have','C. will'],ans:1,ex:'by 2025 (tương lai) → will have.'},
  {q:'Câu nào đúng?',opts:['A. By next year, she will finished.','B. By next year, she will have finished.','C. By next year, she has finished.'],ans:1,ex:'Future Perfect: will have + V3.'},
  {q:'By the time you arrive, I _____ dinner.',opts:['A. cook','B. will cook','C. will have cooked'],ans:2,ex:'by the time → Future Perfect → will have cooked.'},
  {q:'Future Perfect thường đi với giới từ:',opts:['A. since','B. by','C. for'],ans:1,ex:'by = trước thời điểm → Future Perfect.'},
  {q:'They _____ not _____ by tomorrow.',opts:['A. will / finish','B. will have / finished','C. will / have finish'],ans:1,ex:'Phủ định: will not have + V3.'},
  {q:'I _____ this book by the end of the week.',opts:['A. read','B. will have read','C. have read'],ans:1,ex:'by the end of the week → will have read.'}
],
18:[
  {q:'Âm /θ/ (như trong "think") phát âm bằng cách:',opts:['A. Đặt lưỡi giữa hai răng','B. Môi khép lại','C. Lưỡi chạm vòm miệng'],ans:0,ex:'/θ/ = th vô thanh: think, three, thank.'},
  {q:'Âm /ð/ (như trong "this") là:',opts:['A. th vô thanh','B. th hữu thanh','C. Âm d'],ans:1,ex:'/ð/ = th hữu thanh: this, that, they.'},
  {q:'Từ nào có âm /iː/ (ee)?',opts:['A. bit','B. beat','C. bat'],ans:1,ex:'beat /biːt/ → âm /iː/ dài.'},
  {q:'Sự khác biệt giữa /i/ và /iː/ là:',opts:['A. Âm /iː/ ngắn hơn','B. Âm /iː/ dài hơn','C. Không có sự khác biệt'],ans:1,ex:'/i/ ngắn (bit), /iː/ dài (beat).'},
  {q:'Từ nào có âm /æ/?',opts:['A. cat','B. cut','C. coat'],ans:0,ex:'cat /kæt/ → âm /æ/.'},
  {q:'Phụ âm /p/ và /b/ khác nhau ở:',opts:['A. Vị trí lưỡi','B. Hữu thanh/Vô thanh','C. Độ mở miệng'],ans:1,ex:'/p/ vô thanh, /b/ hữu thanh.'},
  {q:'Từ "sing" kết thúc bằng âm:',opts:['A. /n/','B. /ŋ/','C. /g/'],ans:1,ex:'sing /sɪŋ/ → /ŋ/ (ng sound).'},
  {q:'Âm /r/ trong tiếng Anh Mỹ thường:',opts:['A. Không phát âm','B. Phát âm rõ','C. Phát âm như /l/'],ans:1,ex:'Trong tiếng Anh Mỹ, /r/ luôn được phát âm.'},
  {q:'Từ "phone" bắt đầu bằng âm:',opts:['A. /p/','B. /f/','C. /ph/'],ans:1,ex:'phone → /f/ (ph = /f/).'},
  {q:'Âm /ʌ/ như trong "cup" là:',opts:['A. Âm a ngắn','B. Âm u ngắn, giữa','C. Âm o dài'],ans:1,ex:'/ʌ/ = âm u ngắn, mở giữa: cup, sun, run.'},
  {q:'Từ "know" bắt đầu bằng:',opts:['A. /kn/','B. /n/','C. /k/'],ans:1,ex:'know → k câm → phát âm /nəʊ/.'},
  {q:'Âm /ɒ/ như trong "hot" là:',opts:['A. Âm o ngắn','B. Âm ou','C. Âm oo'],ans:0,ex:'/ɒ/ = o ngắn mở: hot, dog, lot.'}
],
19:[
  {q:'Trọng âm trong tiếng Anh là:',opts:['A. Đọc to tất cả các âm','B. Nhấn mạnh một âm tiết hơn các âm tiết khác','C. Đọc đều tất cả'],ans:1,ex:'Stress = nhấn mạnh vào một âm tiết.'},
  {q:'Từ 2 âm tiết, danh từ thường có trọng âm ở:',opts:['A. Âm tiết 2','B. Âm tiết 1','C. Ngẫu nhiên'],ans:1,ex:'Danh từ 2 âm tiết: thường nhấn âm 1. PREsent, TEAcher.'},
  {q:'Trọng âm của "teacher" là:',opts:['A. teach-ER','B. TEACH-er','C. Đều nhau'],ans:1,ex:'TEACH-er → âm tiết 1.'},
  {q:'Trọng âm của "understand" là:',opts:['A. UN-der-stand','B. un-DER-stand','C. un-der-STAND'],ans:2,ex:'un-der-STAND → âm tiết cuối nhấn (động từ 3 âm tiết).'},
  {q:'Từ có đuôi -tion, -sion thường nhấn:',opts:['A. Âm tiết trước đuôi','B. Chính đuôi đó','C. Âm tiết đầu'],ans:0,ex:'inforMAtion, teleVIsion → nhấn âm tiết TRƯỚC -tion/-sion.'},
  {q:'Trọng âm của "photograph" là:',opts:['A. pho-TO-graph','B. PHO-to-graph','C. pho-to-GRAPH'],ans:1,ex:'PHO-to-graph (danh từ) → âm tiết 1.'},
  {q:'Trọng âm của "photography" là:',opts:['A. PHO-tog-ra-phy','B. pho-TOG-ra-phy','C. pho-tog-RA-phy'],ans:1,ex:'pho-TOG-ra-phy → đuôi -phy → nhấn âm thứ 2.'},
  {q:'Từ hai âm tiết là cả danh từ và động từ, khi là động từ nhấn:',opts:['A. Âm tiết 1','B. Âm tiết 2','C. Như nhau'],ans:1,ex:'PREsent (n) → preSENT (v); REcord (n) → reCORD (v).'},
  {q:'Trọng âm của "comfortable" là:',opts:['A. com-FOR-ta-ble','B. COM-for-ta-ble','C. com-for-TA-ble'],ans:1,ex:'COM-for-ta-ble → nhấn âm tiết 1.'},
  {q:'Đuôi -ic thường nhấn:',opts:['A. Âm tiết trước -ic','B. Âm tiết -ic','C. Âm tiết đầu'],ans:0,ex:'ecONOmic, phySIcal → nhấn âm trước -ic.'},
  {q:'"Economy" nhấn âm tiết:',opts:['A. 1','B. 2','C. 3'],ans:1,ex:'e-CON-o-my → âm tiết 2.'},
  {q:'Trọng âm của "education" là:',opts:['A. ED-u-ca-tion','B. e-DU-ca-tion','C. e-du-CA-tion'],ans:2,ex:'e-du-CA-tion → nhấn âm trước -tion.'}
],
20:[
  {q:'_____ do you go to school? — By bus.',opts:['A. Where','B. How','C. When'],ans:1,ex:'How → cách thức, phương tiện.'},
  {q:'_____ old are you?',opts:['A. What','B. How','C. Who'],ans:1,ex:'How old = hỏi tuổi.'},
  {q:'_____ does she go to work? — Every day.',opts:['A. How often','B. How many','C. How much'],ans:0,ex:'How often = hỏi tần suất.'},
  {q:'_____ does it cost?',opts:['A. How many','B. How much','C. How often'],ans:1,ex:'How much = hỏi giá (không đếm được).'},
  {q:'_____ students are there?',opts:['A. How much','B. How often','C. How many'],ans:2,ex:'How many = hỏi số lượng (đếm được).'},
  {q:'_____ did you come late?',opts:['A. What','B. Who','C. Why'],ans:2,ex:'Why = hỏi lý do.'},
  {q:'_____ is your favorite color?',opts:['A. Who','B. Where','C. What'],ans:2,ex:'What = hỏi về vật, màu sắc.'},
  {q:'_____ far is it from here?',opts:['A. How','B. What','C. Where'],ans:0,ex:'How far = hỏi khoảng cách.'},
  {q:'_____ long does it take?',opts:['A. What','B. How','C. Where'],ans:1,ex:'How long = hỏi khoảng thời gian cần.'},
  {q:'_____ do you like most?',opts:['A. Whom','B. Whose','C. What'],ans:2,ex:'What do you like = bạn thích gì.'},
  {q:'_____ book is this?',opts:['A. Who','B. Whose','C. What'],ans:1,ex:'Whose = của ai (sở hữu).'},
  {q:'_____ did you meet at the party?',opts:['A. What','B. Where','C. Who'],ans:2,ex:'Who = hỏi người.'}
],
21:[
  {q:'Số thứ tự "first" viết tắt là:',opts:['A. 1th','B. 1st','C. 1nd'],ans:1,ex:'1st = first.'},
  {q:'"second" viết tắt là:',opts:['A. 2nd','B. 2st','C. 2rd'],ans:0,ex:'2nd = second.'},
  {q:'"third" viết tắt là:',opts:['A. 3th','B. 3st','C. 3rd'],ans:2,ex:'3rd = third.'},
  {q:'Từ 4 trở đi, số thứ tự tận cùng bằng:',opts:['A. -st','-nd','C. -th'],ans:2,ex:'4th, 5th, 6th... tận -th.'},
  {q:'Phone number: 0912 345 678 đọc từng số là:',opts:['A. zero nine one two...','B. oh nine one two...','C. Cả A và B đúng'],ans:2,ex:'Số điện thoại: đọc từng chữ số, 0 đọc là "zero" hoặc "oh".'},
  {q:'"A thousand and fifty" = ?',opts:['A. 1500','B. 1050','C. 150'],ans:1,ex:'one thousand and fifty = 1,050.'},
  {q:'"Double four" nghĩa là:',opts:['A. 44','B. 8','C. 4+4'],ans:0,ex:'double four = 44 (đọc trong số điện thoại).'},
  {q:'Tên "Nguyen" đánh vần: N-G-U-Y-E-N. Âm cuối là:',opts:['A. M','B. N','C. EN'],ans:1,ex:'Nguyên tắc: đánh vần từng chữ cái.'},
  {q:'"3rd floor" đọc là:',opts:['A. Three floor','B. Third floor','C. Threeth floor'],ans:1,ex:'3rd = third.'},
  {q:'Số "21" là:',opts:['A. Twenty-one','B. Twenty one-th','C. Twenth-first'],ans:0,ex:'21 = twenty-one (cardinal number).'},
  {q:'"21st" đọc là:',opts:['A. Twenty-one','B. Twenty-first','C. Twenty-oneth'],ans:1,ex:'21st = twenty-first.'},
  {q:'Khi nghe tên người lạ, nên hỏi:',opts:['A. "Repeat!"','B. "Could you spell that?"','C. "What?"'],ans:1,ex:'"Could you spell that?" = Bạn có thể đánh vần không?'}
],
22:[
  {q:'"Can" diễn tả:',opts:['A. Bổn phận','B. Khả năng','C. Sự cho phép chính thức'],ans:1,ex:'can = có thể, khả năng.'},
  {q:'She _____ speak 3 languages.',opts:['A. can','B. must','C. should'],ans:0,ex:'can = có khả năng nói 3 ngôn ngữ.'},
  {q:'"Must" diễn tả:',opts:['A. Lời khuyên','B. Bắt buộc, cần thiết','C. Khả năng'],ans:1,ex:'must = bắt buộc, cấm thiết.'},
  {q:'You _____ wear a seatbelt. It\'s the law.',opts:['A. should','B. can','C. must'],ans:2,ex:'Luật pháp = bắt buộc → must.'},
  {q:'"Should" diễn tả:',opts:['A. Bắt buộc','B. Lời khuyên','C. Khả năng'],ans:1,ex:'should = lời khuyên, nên làm.'},
  {q:'You look tired. You _____ get some rest.',opts:['A. must','B. should','C. can'],ans:1,ex:'Lời khuyên → should.'},
  {q:'Modal verbs theo sau là:',opts:['A. V-ing','B. V nguyên thể','C. V-ed'],ans:1,ex:'Modal + V nguyên thể: can go, must eat, should study.'},
  {q:'"May I come in?" diễn tả:',opts:['A. Khả năng','B. Xin phép','C. Lời khuyên'],ans:1,ex:'May = xin phép (lịch sự).'},
  {q:'"It might rain today." "might" diễn tả:',opts:['A. Chắc chắn','B. Khả năng nhỏ','C. Cấm'],ans:1,ex:'might = có thể (khả năng nhỏ, không chắc).'},
  {q:'You _____ smoke here. It\'s forbidden.',opts:['A. should','B. must','C. must not'],ans:2,ex:'must not = cấm, không được phép.'},
  {q:'"Could" là dạng quá khứ của:',opts:['A. must','B. can','C. should'],ans:1,ex:'can → could (quá khứ hoặc lịch sự hơn).'},
  {q:'"Would you like some coffee?" dùng để:',opts:['A. Mời','B. Ra lệnh','C. Hỏi khả năng'],ans:0,ex:'Would you like...? = Mời, đề nghị lịch sự.'}
],
23:[
  {q:'"And" dùng để:',opts:['A. Đối lập','B. Kết hợp, bổ sung','C. Chỉ nguyên nhân'],ans:1,ex:'and = và, nối hai ý tương đồng.'},
  {q:'"But" dùng để:',opts:['A. Bổ sung','B. Đối lập, trái chiều','C. Kết quả'],ans:1,ex:'but = nhưng, đối lập.'},
  {q:'"Or" dùng để:',opts:['A. Kết hợp','B. Lựa chọn','C. Nguyên nhân'],ans:1,ex:'or = hoặc, lựa chọn.'},
  {q:'"So" dùng để:',opts:['A. Đối lập','B. Kết quả','C. Nguyên nhân'],ans:1,ex:'so = vì vậy, kết quả.'},
  {q:'"Because" dùng để:',opts:['A. Nguyên nhân','B. Kết quả','C. Đối lập'],ans:0,ex:'because = vì, bởi vì.'},
  {q:'She was tired, _____ she went to bed early.',opts:['A. but','B. or','C. so'],ans:2,ex:'Kết quả → so.'},
  {q:'Do you want tea _____ coffee?',opts:['A. and','B. but','C. or'],ans:2,ex:'Lựa chọn → or.'},
  {q:'I like swimming, _____ I don\'t like running.',opts:['A. and','B. but','C. so'],ans:1,ex:'Đối lập → but.'},
  {q:'He studied hard _____ he passed the exam.',opts:['A. or','B. but','C. and'],ans:2,ex:'Bổ sung → and.'},
  {q:'I missed the bus _____ I was late.',opts:['A. so','B. but','C. because'],ans:0,ex:'Kết quả → so.'},
  {q:'She didn\'t come _____ she was sick.',opts:['A. so','B. because','C. and'],ans:1,ex:'Nguyên nhân → because.'},
  {q:'"Because" theo sau là:',opts:['A. Kết quả','B. Nguyên nhân (mệnh đề)','C. Lựa chọn'],ans:1,ex:'because + mệnh đề (S + V).'}
],
24:[
  {q:'"When" trong câu phức chỉ:',opts:['A. Nguyên nhân','B. Thời gian','C. Điều kiện'],ans:1,ex:'when = khi, liên từ chỉ thời gian.'},
  {q:'"While" diễn tả:',opts:['A. Hai hành động nối tiếp','B. Hai hành động song song','C. Điều kiện'],ans:1,ex:'while = trong khi, hai việc song song.'},
  {q:'"Before" nghĩa là:',opts:['A. Sau khi','B. Trước khi','C. Trong khi'],ans:1,ex:'before = trước khi.'},
  {q:'"After" nghĩa là:',opts:['A. Trước khi','B. Sau khi','C. Trong khi'],ans:1,ex:'after = sau khi.'},
  {q:'"Until" nghĩa là:',opts:['A. Ngay khi','B. Cho đến khi','C. Trước khi'],ans:1,ex:'until = cho đến khi.'},
  {q:'"As soon as" nghĩa là:',opts:['A. Cho đến khi','B. Ngay khi','C. Trong khi'],ans:1,ex:'as soon as = ngay khi, vừa khi.'},
  {q:'When I _____ home, I will call you. (tương lai)',opts:['A. will arrive','B. arrive','C. arrived'],ans:1,ex:'Mệnh đề thời gian (when/before/after) không dùng will → Simple Present.'},
  {q:'I waited _____ he arrived.',opts:['A. while','B. until','C. as soon as'],ans:1,ex:'until = chờ cho đến khi.'},
  {q:'She listened to music _____ cooking.',opts:['A. until','B. before','C. while'],ans:2,ex:'while = trong khi (song song).'},
  {q:'Call me _____ you arrive.',opts:['A. until','B. while','C. as soon as'],ans:2,ex:'as soon as = ngay khi (đến nơi gọi ngay).'},
  {q:'Before she _____ to bed, she reads.',opts:['A. goes','B. will go','C. went'],ans:0,ex:'Mệnh đề before → Simple Present.'},
  {q:'After he _____ the exam, he felt relieved.',opts:['A. passes','B. pass','C. passed'],ans:2,ex:'Câu kể chuyện quá khứ → passed.'}
],
25:[
  {q:'"Although" nghĩa là:',opts:['A. Vì','B. Mặc dù','C. Vì vậy'],ans:1,ex:'although/though/even though = mặc dù.'},
  {q:'"However" đứng ở:',opts:['A. Đầu mệnh đề phụ','B. Đầu câu hoặc giữa hai mệnh đề','C. Cuối câu'],ans:1,ex:'However = tuy nhiên, đứng đầu câu hoặc sau dấu chấm phẩy.'},
  {q:'"Despite" theo sau là:',opts:['A. Mệnh đề (S+V)','B. Danh từ/Cụm danh từ','C. Tính từ'],ans:1,ex:'despite + noun/V-ing: despite the rain, despite being tired.'},
  {q:'"Although" theo sau là:',opts:['A. Danh từ','B. Mệnh đề (S+V)','C. V-ing'],ans:1,ex:'Although + S + V.'},
  {q:'_____ it was raining, they played outside.',opts:['A. Despite','B. However','C. Although'],ans:2,ex:'Although + S + V (mệnh đề).'},
  {q:'_____ the rain, they played outside.',opts:['A. Although','B. Despite','C. However'],ans:1,ex:'Despite + noun phrase.'},
  {q:'She worked hard. _____, she failed.',opts:['A. Although','B. Despite','C. However'],ans:2,ex:'However đứng đầu câu mới, có dấu chấm phẩy hoặc dấu chấm.'},
  {q:'"In spite of" = ',opts:['A. although','B. despite','C. however'],ans:1,ex:'in spite of = despite (giống nhau).'},
  {q:'In spite of _____ tired, she kept working.',opts:['A. be','B. being','C. was'],ans:1,ex:'in spite of + V-ing.'},
  {q:'_____ he is rich, he is unhappy.',opts:['A. Despite','B. Even though','C. However'],ans:1,ex:'Even though + S + V (mệnh đề).'},
  {q:'He failed. _____, he didn\'t give up.',opts:['A. Although','B. Despite','C. However'],ans:2,ex:'However = tuy nhiên (đứng đầu câu mới).'},
  {q:'Câu nào đúng?',opts:['A. Despite it was cold.','B. Despite the cold.','C. Despite of the cold.'],ans:1,ex:'despite + noun (không có "of"). Despite the cold.'}
],
26:[
  {q:'Công thức Câu Điều Kiện Loại 1 là:',opts:['A. If + V2, would + V','B. If + V (present), will + V','C. If + had V3, would have + V3'],ans:1,ex:'Type 1: If + Simple Present, will + V. Điều kiện có thể xảy ra.'},
  {q:'If it _____, I will stay home.',opts:['A. rains','B. will rain','C. rained'],ans:0,ex:'Mệnh đề if (Type 1) → Simple Present.'},
  {q:'If she studies hard, she _____ pass.',opts:['A. would','B. will','C. can'],ans:1,ex:'Type 1 → will + V.'},
  {q:'If you heat water to 100°C, it _____.',opts:['A. would boil','B. boils','C. will boil'],ans:2,ex:'Câu điều kiện thực tế → will hoặc boils.'},
  {q:'She will call you if she _____ time.',opts:['A. will have','B. has','C. had'],ans:1,ex:'Mệnh đề if → Simple Present (has).'},
  {q:'If they _____ late, we will start without them.',opts:['A. are','B. will be','C. were'],ans:0,ex:'If + Simple Present (are).'},
  {q:'Câu nào là Type 1 đúng?',opts:['A. If I had money, I would buy it.','B. If I have money, I will buy it.','C. If I have money, I would buy it.'],ans:1,ex:'Type 1: If + present, will + V.'},
  {q:'If you don\'t hurry, you _____ miss the train.',opts:['A. would','B. will','C. could'],ans:1,ex:'Type 1 → will.'},
  {q:'"Unless" = ',opts:['A. Even if','B. If not','C. Although'],ans:1,ex:'unless = if not. Unless = nếu không.'},
  {q:'Unless you study, you _____ fail.',opts:['A. would','B. will','C. won\'t'],ans:1,ex:'Unless = nếu không học → will fail.'},
  {q:'If I _____ hungry, I will eat.',opts:['A. am','B. was','C. were'],ans:0,ex:'Type 1: if + Simple Present.'},
  {q:'Câu điều kiện Loại 1 diễn tả:',opts:['A. Không thể xảy ra','B. Có thể xảy ra ở hiện tại/tương lai','C. Đã không xảy ra trong quá khứ'],ans:1,ex:'Type 1 = điều kiện có thể xảy ra.'}
],
27:[
  {q:'Công thức Câu Điều Kiện Loại 2 là:',opts:['A. If + V-past, would + V','B. If + V-present, will + V','C. If + had + V3, would have + V3'],ans:0,ex:'Type 2: If + Simple Past, would + V.'},
  {q:'If I _____ rich, I would travel the world.',opts:['A. am','B. were/was','C. be'],ans:1,ex:'Type 2: If + were/was.'},
  {q:'If she knew the answer, she _____ tell us.',opts:['A. will','B. would','C. can'],ans:1,ex:'Type 2: would + V.'},
  {q:'Câu điều kiện Loại 2 diễn tả:',opts:['A. Có thể xảy ra','B. Không có thật ở hiện tại','C. Đã xảy ra'],ans:1,ex:'Type 2 = không có thật, giả định.'},
  {q:'If I were you, I _____ apologize.',opts:['A. will','B. would','C. should'],ans:1,ex:'If I were you = nếu tôi là bạn → would.'},
  {q:'Sau "If" trong Type 2, "to be" dùng:',opts:['A. is/am/are','B. was/were','C. be'],ans:1,ex:'Type 2: to be → were (mọi ngôi). "If I were..." is formal.'},
  {q:'She _____ happier if she had more free time.',opts:['A. will be','B. would be','C. is'],ans:1,ex:'Type 2: would be.'},
  {q:'If they _____ the rules, they wouldn\'t get in trouble.',opts:['A. follow','B. followed','C. had followed'],ans:1,ex:'Type 2: If + Simple Past (followed).'},
  {q:'Câu nào là Type 2 đúng?',opts:['A. If I have time, I will help.','B. If I had time, I would help.','C. If I had time, I will help.'],ans:1,ex:'Type 2: If + past, would + V.'},
  {q:'If he _____ harder, he would succeed.',opts:['A. works','B. worked','C. will work'],ans:1,ex:'Type 2: worked.'},
  {q:'I would buy that car if I _____ enough money.',opts:['A. have','B. had','C. will have'],ans:1,ex:'Type 2: had.'},
  {q:'"Would" trong Type 2 theo sau là:',opts:['A. V nguyên thể','B. V-ing','C. V-ed'],ans:0,ex:'would + V nguyên thể.'}
],
28:[
  {q:'Công thức Câu Điều Kiện Loại 3 là:',opts:['A. If + past, would + V','B. If + past perfect, would have + V3','C. If + present, will + V'],ans:1,ex:'Type 3: If + had + V3, would have + V3.'},
  {q:'Câu điều kiện Loại 3 diễn tả:',opts:['A. Có thể xảy ra','B. Không có thật ở hiện tại','C. Không có thật trong quá khứ'],ans:2,ex:'Type 3 = tiếc nuối, điều đã không xảy ra.'},
  {q:'If I _____ harder, I would have passed.',opts:['A. studied','B. had studied','C. study'],ans:1,ex:'Type 3: If + had + V3.'},
  {q:'She _____ the job if she had applied.',opts:['A. will get','B. would get','C. would have gotten'],ans:2,ex:'Type 3: would have + V3.'},
  {q:'"If he had come, he _____ seen her." Điền đúng:',opts:['A. would','B. would have','C. will have'],ans:1,ex:'would have + V3.'},
  {q:'If they _____ earlier, they wouldn\'t have missed the flight.',opts:['A. leave','B. left','C. had left'],ans:2,ex:'Type 3: had left.'},
  {q:'Câu nào là Type 3 đúng?',opts:['A. If I had money, I bought it.','B. If I had had money, I would have bought it.','C. If I have money, I will buy it.'],ans:1,ex:'Type 3: had had (past perfect) + would have + V3.'},
  {q:'She wouldn\'t have been late if she _____ earlier.',opts:['A. woke up','B. had woken up','C. wakes up'],ans:1,ex:'Type 3: had woken up.'},
  {q:'Type 3 dùng để diễn tả cảm xúc:',opts:['A. Hy vọng','B. Tiếc nuối, hối hận','C. Vui mừng'],ans:1,ex:'Type 3 = tiếc nuối về điều đã không xảy ra.'},
  {q:'If it _____ rained, we could have had a picnic.',opts:['A. hadn\'t','B. didn\'t','C. wouldn\'t'],ans:0,ex:'hadn\'t rained = hadn\'t + V3.'},
  {q:'"would have + V3" theo sau có thể viết tắt:',opts:['A. wouldn\'t V','B. would\'ve + V3','C. wouldve V'],ans:1,ex:'would have = would\'ve (spoken).'},
  {q:'Mệnh đề "if" trong Type 3 dùng thì:',opts:['A. Simple Past','B. Past Continuous','C. Past Perfect'],ans:2,ex:'Type 3: If + Past Perfect (had + V3).'}
],
29:[
  {q:'Kỹ năng luyện nghe điền từ, nên:',opts:['A. Đọc câu hỏi trước khi nghe','B. Nghe rồi mới đọc câu hỏi','C. Không cần đọc câu hỏi'],ans:0,ex:'Đọc trước câu hỏi để biết cần nghe thông tin gì.'},
  {q:'Khi nghe điền từ, cần chú ý đến:',opts:['A. Tốc độ của người nói','B. Từ loại cần điền','C. Cả A và B'],ans:2,ex:'Cả tốc độ và từ loại đều quan trọng.'},
  {q:'"Listen for keywords" nghĩa là:',opts:['A. Nghe từng chữ','B. Chú ý các từ khóa quan trọng','C. Đoán mò'],ans:1,ex:'Keywords = từ khóa mang thông tin chính.'},
  {q:'Khi không nghe kịp, nên:',opts:['A. Bỏ qua và tiếp tục','B. Dừng lại và lo lắng','C. Đoán dựa vào ngữ cảnh'],ans:2,ex:'Đoán thông minh dựa vào ngữ cảnh.'},
  {q:'Đuôi -s trong câu nghe thường cho biết:',opts:['A. Số nhiều hoặc ngôi 3','B. Thì quá khứ','C. Phủ định'],ans:0,ex:'-s = plural hoặc he/she/it.'},
  {q:'Khi điền từ, kiểm tra lại:',opts:['A. Ngữ pháp và chính tả','B. Chỉ chính tả','C. Chỉ ngữ pháp'],ans:0,ex:'Kiểm tra cả ngữ pháp và chính tả.'},
  {q:'"Contractions" như "don\'t, she\'s" khi nghe thường:',opts:['A. Rất rõ ràng','B. Khó nghe hơn dạng đầy đủ','C. Không xuất hiện'],ans:1,ex:'Contractions phát âm nhanh, cần chú ý.'},
  {q:'Trước khi nghe, nên:',opts:['A. Nhắm mắt','B. Đọc lướt câu hỏi','C. Uống nước'],ans:1,ex:'Đọc lướt giúp dự đoán nội dung.'},
  {q:'Từ nối "however, therefore, although" giúp:',opts:['A. Hiểu quan hệ giữa các ý','B. Biết từ vựng','C. Đoán giọng điệu'],ans:0,ex:'Discourse markers giúp hiểu cấu trúc bài nghe.'},
  {q:'Nghe lần 2 nên:',opts:['A. Điền những chỗ còn trống','B. Nghe lại từ đầu không làm gì','C. Đổi đáp án cũ'],ans:0,ex:'Lần 2: kiểm tra và điền chỗ còn thiếu.'},
  {q:'Khi gặp từ chuyên ngành lạ, nên:',opts:['A. Dừng lại và tra từ điển','B. Nghe ngữ cảnh để đoán nghĩa','C. Bỏ qua hoàn toàn'],ans:1,ex:'Ngữ cảnh giúp đoán nghĩa từ lạ.'},
  {q:'Tốc độ nói tự nhiên của người bản ngữ (wpm) khoảng:',opts:['A. 80-100','B. 130-150','C. 200-250'],ans:1,ex:'130-150 wpm là tốc độ nói bình thường.'}
],
30:[
  {q:'Chép chính tả (dictation) yêu cầu:',opts:['A. Chỉ nghe nghĩa','B. Viết chính xác từng từ','C. Tóm tắt ý'],ans:1,ex:'Dictation = nghe và viết chính xác.'},
  {q:'Khi chép chính tả, nên chia câu thành:',opts:['A. Từng từ riêng lẻ','B. Cụm ý nghĩa','C. Âm tiết'],ans:1,ex:'Chia theo cụm (chunks) giúp nhớ và viết nhanh hơn.'},
  {q:'"Homophones" là:',opts:['A. Từ cùng nghĩa','B. Từ phát âm giống nhau nhưng khác nghĩa','C. Từ cùng cách viết'],ans:1,ex:'homophones: their/there/they\'re, here/hear.'},
  {q:'Khi nghe "it\'s" và "its" cần phân biệt:',opts:['A. Không cần phân biệt','B. Bằng ngữ cảnh','C. Không thể phân biệt khi nghe'],ans:1,ex:'it\'s = it is; its = sở hữu. Phân biệt qua ngữ cảnh.'},
  {q:'Dấu câu quan trọng nhất khi chép chính tả:',opts:['A. Dấu chấm và phẩy','B. Dấu ngoặc','C. Dấu gạch ngang'],ans:0,ex:'Dấu chấm, dấu phẩy xác định câu và nhịp.'},
  {q:'Viết hoa trong tiếng Anh cần với:',opts:['A. Tên riêng và đầu câu','B. Tất cả danh từ','C. Tính từ'],ans:0,ex:'Proper nouns và đầu câu → viết hoa.'},
  {q:'Số trong chính tả thường viết:',opts:['A. Bằng chữ','B. Bằng số','C. Tùy ngữ cảnh'],ans:2,ex:'Tùy: one/two... hoặc 1/2... theo quy tắc từng ngữ cảnh.'},
  {q:'Khi chép nhanh, dùng ký hiệu nào?',opts:['A. & thay và','B. @ thay "at"','C. Cả hai'],ans:2,ex:'& và @ là ký hiệu viết tắt phổ biến.'},
  {q:'Sau khi chép xong, cần:',opts:['A. Nộp ngay','B. Đọc lại và sửa lỗi','C. Không cần xem lại'],ans:1,ex:'Luôn đọc lại để kiểm tra ngữ pháp và chính tả.'},
  {q:'"their" và "there" phân biệt bằng:',opts:['A. Phát âm','B. Nghĩa và ngữ cảnh','C. Số âm tiết'],ans:1,ex:'their = của họ; there = ở đó.'},
  {q:'Câu bị động khi nghe khó vì:',opts:['A. Cấu trúc phức tạp hơn','B. Phát âm nhanh hơn','C. Dùng từ lạ'],ans:0,ex:'Passive = be + V3, cấu trúc khác active.'},
  {q:'"write" và "right" là:',opts:['A. Synonyms','B. Antonyms','C. Homophones'],ans:2,ex:'write /raɪt/ và right /raɪt/ = homophones.'}
],
31:[
  {q:'"It\'s 3 o\'clock." 3:00 đọc là:',opts:['A. Three hours','B. Three o\'clock','C. Three times'],ans:1,ex:'3:00 = three o\'clock.'},
  {q:'"It\'s half past two." là mấy giờ?',opts:['A. 1:30','B. 2:30','C. 2:15'],ans:1,ex:'half past two = 2:30.'},
  {q:'"Quarter past four" là:',opts:['A. 4:15','B. 4:30','C. 4:45'],ans:0,ex:'quarter past = 15 phút sau → 4:15.'},
  {q:'"Quarter to five" là:',opts:['A. 5:15','B. 4:45','C. 5:45'],ans:1,ex:'quarter to five = 15 phút trước 5 giờ = 4:45.'},
  {q:'"It\'s ten past six." = ?',opts:['A. 6:50','B. 6:10','C. 10:06'],ans:1,ex:'ten past six = 6:10.'},
  {q:'"It\'s twenty to eight." = ?',opts:['A. 8:20','B. 7:40','C. 7:20'],ans:1,ex:'twenty to eight = 20 phút trước 8 giờ = 7:40.'},
  {q:'"a.m." có nghĩa là:',opts:['A. Buổi chiều','B. Buổi sáng','C. Buổi tối'],ans:1,ex:'a.m. = ante meridiem = trước trưa.'},
  {q:'"p.m." có nghĩa là:',opts:['A. Buổi sáng','B. Buổi tối','C. Sau trưa'],ans:2,ex:'p.m. = post meridiem = sau trưa.'},
  {q:'"noon" nghĩa là:',opts:['A. Nửa đêm','B. 12:00 trưa','C. 6 giờ sáng'],ans:1,ex:'noon = 12:00 pm, trưa.'},
  {q:'"midnight" nghĩa là:',opts:['A. 12:00 trưa','B. 12:00 đêm','C. 6 giờ tối'],ans:1,ex:'midnight = 12:00 am, nửa đêm.'},
  {q:'Cách hỏi giờ tự nhiên nhất:',opts:['A. "What time it is?"','B. "What\'s the time?"','C. "Tell me the time."'],ans:1,ex:'"What\'s the time?" hoặc "What time is it?"'},
  {q:'"It\'s five to three." = ?',opts:['A. 3:05','B. 2:55','C. 5:03'],ans:1,ex:'five to three = 5 phút trước 3 giờ = 2:55.'}
],
32:[
  {q:'Tháng 1 tiếng Anh là:',opts:['A. June','B. January','C. July'],ans:1,ex:'January = tháng 1.'},
  {q:'Tháng viết tắt: Feb là:',opts:['A. Tháng 2','B. Tháng 3','C. Tháng 4'],ans:0,ex:'Feb = February = tháng 2.'},
  {q:'Ngày "March 15th" đọc là:',opts:['A. March fifteen','B. March the fifteenth','C. Cả hai đúng'],ans:2,ex:'Cả hai cách đọc đều được chấp nhận.'},
  {q:'"The 4th of July" = ?',opts:['A. July 14th','B. July 4th','C. June 4th'],ans:1,ex:'The 4th of July = July 4th.'},
  {q:'Năm "1999" đọc là:',opts:['A. One thousand nine hundred ninety-nine','B. Nineteen ninety-nine','C. Nineteen hundred ninety-nine'],ans:1,ex:'1999 = nineteen ninety-nine (chia đôi).'},
  {q:'Năm "2005" đọc là:',opts:['A. Two thousand and five','B. Twenty oh five','C. Cả hai đúng'],ans:2,ex:'2005 = "two thousand and five" hoặc "twenty oh five".'},
  {q:'"What date is it today?" — "It\'s _____ ."',opts:['A. the twenty-first of August','B. August the twenty-one','C. August twenty-one'],ans:0,ex:'"the twenty-first of August" hoặc "August the twenty-first".'},
  {q:'Tháng nào có 28 hoặc 29 ngày?',opts:['A. January','B. February','C. April'],ans:1,ex:'February = 28 ngày (thường) hoặc 29 ngày (năm nhuận).'},
  {q:'"When is your birthday?" — "It\'s in _____."',opts:['A. the March','B. March','C. in March'],ans:1,ex:'In March. Không dùng "the" trước tháng.'},
  {q:'"On + ngày cụ thể" hay "in + tháng/năm"?',opts:['A. on August / in the 15th','B. in August / on the 15th','C. at August / on August'],ans:1,ex:'on + ngày, in + tháng/năm.'},
  {q:'Năm "2024" đọc là:',opts:['A. Two thousand twenty-four','B. Twenty twenty-four','C. Cả hai'],ans:2,ex:'Cả hai cách đều phổ biến.'},
  {q:'"Leap year" là:',opts:['A. Năm thường','B. Năm nhuận','C. Năm âm lịch'],ans:1,ex:'Leap year = năm nhuận, có 366 ngày.'}
],
33:[
  {q:'Khi hỏi đường: "Turn left at the corner" nghĩa là:',opts:['A. Rẽ phải ở góc đường','B. Đi thẳng','C. Rẽ trái ở góc đường'],ans:2,ex:'turn left = rẽ trái.'},
  {q:'"Go straight ahead" nghĩa là:',opts:['A. Rẽ phải','B. Đi thẳng','C. Quay lại'],ans:1,ex:'go straight ahead = đi thẳng.'},
  {q:'"It\'s on your right" nghĩa là:',opts:['A. Nó ở phía trái','B. Nó ở phía phải','C. Nó ở phía trước'],ans:1,ex:'on your right = bên phải của bạn.'},
  {q:'"Next to the bank" nghĩa là:',opts:['A. Phía sau ngân hàng','B. Bên cạnh ngân hàng','C. Trước ngân hàng'],ans:1,ex:'next to = kế bên, bên cạnh.'},
  {q:'"Across from" nghĩa là:',opts:['A. Phía sau','B. Bên cạnh','C. Đối diện'],ans:2,ex:'across from = đối diện với.'},
  {q:'"How do I get to the station?" Trả lời đúng:',opts:['A. It\'s near.','B. Turn right and go straight.','C. It\'s a station.'],ans:1,ex:'Hướng dẫn đường đi cụ thể.'},
  {q:'"Between the post office and the school" nghĩa là:',opts:['A. Gần bưu điện','B. Giữa bưu điện và trường','C. Sau trường'],ans:1,ex:'between A and B = giữa A và B.'},
  {q:'"It\'s about 5 minutes walk." nghĩa là:',opts:['A. Đi xe 5 phút','B. Đi bộ khoảng 5 phút','C. Cách 5 km'],ans:1,ex:'5 minutes walk = đi bộ 5 phút.'},
  {q:'"Take the second turning on the left." nghĩa là:',opts:['A. Rẽ trái lần đầu','B. Rẽ trái lần thứ hai','C. Rẽ phải lần thứ hai'],ans:1,ex:'second turning on the left = rẽ trái lần 2.'},
  {q:'"Where is...?" và "How do I get to...?" đều dùng để:',opts:['A. Hỏi đường','B. Mô tả địa điểm','C. Nói về khoảng cách'],ans:0,ex:'Cả hai đều dùng hỏi đường.'},
  {q:'"It\'s on the corner of Main St and Park Ave." nghĩa là:',opts:['A. Ở giữa hai đường','B. Ở góc hai đường','C. Gần hai đường'],ans:1,ex:'on the corner of = ở góc (hai đường giao nhau).'},
  {q:'"You can\'t miss it." nghĩa là:',opts:['A. Bạn sẽ lạc đường','B. Bạn sẽ dễ nhận ra','C. Nơi đó khó tìm'],ans:1,ex:'You can\'t miss it = bạn sẽ dễ thấy, không thể bỏ qua.'}
],
34:[
  {q:'"How much is this?" nghĩa là:',opts:['A. Cái này là gì','B. Cái này bao nhiêu tiền','C. Cái này ở đâu'],ans:1,ex:'How much = hỏi giá tiền.'},
  {q:'"It\'s five dollars fifty cents." = ?',opts:['A. $5.05','B. $5.50','C. $50.05'],ans:1,ex:'five dollars fifty cents = $5.50.'},
  {q:'"A hundred and twenty dollars" = ?',opts:['A. $20','B. $120','C. $1020'],ans:1,ex:'a hundred and twenty = 120.'},
  {q:'"Fifty percent off" nghĩa là:',opts:['A. Giảm 50%','B. Tăng 50%','C. Giá gốc'],ans:0,ex:'50% off = giảm giá 50%.'},
  {q:'"Can I have the bill, please?" dùng khi:',opts:['A. Hỏi giá','B. Yêu cầu thanh toán','C. Đổi tiền'],ans:1,ex:'the bill = hóa đơn, dùng ở nhà hàng.'},
  {q:'"Keep the change." nghĩa là:',opts:['A. Đổi tiền lẻ','B. Giữ tiền thừa','C. Không có tiền lẻ'],ans:1,ex:'Keep the change = giữ lại tiền thối.'},
  {q:'"That\'s too expensive." nghĩa là:',opts:['A. Rẻ quá','B. Đắt quá','C. Vừa phải'],ans:1,ex:'expensive = đắt.'},
  {q:'"Do you take credit cards?" nghĩa là:',opts:['A. Bạn có thẻ không?','B. Bạn có chấp nhận thẻ không?','C. Thẻ tín dụng là gì?'],ans:1,ex:'Do you take = bạn có chấp nhận không.'},
  {q:'"Change" khi mua hàng nghĩa là:',opts:['A. Thay đổi','B. Tiền thối','C. Tiền mặt'],ans:1,ex:'change = tiền thối lại.'},
  {q:'"On sale" nghĩa là:',opts:['A. Đang bán với giá đầy đủ','B. Đang bán giảm giá','C. Không bán'],ans:1,ex:'on sale = đang giảm giá.'},
  {q:'"Two thousand five hundred" = ?',opts:['A. 2,500','B. 25,000','C. 200,500'],ans:0,ex:'two thousand five hundred = 2,500.'},
  {q:'"Bargain" nghĩa là:',opts:['A. Giá đắt','B. Hàng hóa đắt','C. Giá hời, mặc cả'],ans:2,ex:'bargain = giá hời, hoặc động từ = mặc cả.'}
],
35:[
  {q:'Đại từ phản thân của "I" là:',opts:['A. himself','B. myself','C. yourself'],ans:1,ex:'I → myself.'},
  {q:'Đại từ phản thân của "you" (số ít) là:',opts:['A. yourself','B. yourselves','C. himself'],ans:0,ex:'you (sg) → yourself.'},
  {q:'Đại từ phản thân của "he" là:',opts:['A. hisself','B. himself','C. heself'],ans:1,ex:'he → himself.'},
  {q:'Đại từ phản thân của "she" là:',opts:['A. herself','B. hisself','C. sheself'],ans:0,ex:'she → herself.'},
  {q:'Đại từ phản thân của "we" là:',opts:['A. ourself','B. ourselves','C. ownselves'],ans:1,ex:'we → ourselves.'},
  {q:'Đại từ phản thân của "they" là:',opts:['A. theirself','B. themselves','C. themselfs'],ans:1,ex:'they → themselves.'},
  {q:'She cut _____ while cooking.',opts:['A. herself','B. himself','C. myself'],ans:0,ex:'she → herself.'},
  {q:'I made this cake _____.',opts:['A. herself','B. myself','C. itself'],ans:1,ex:'I → myself.'},
  {q:'They enjoyed _____ at the party.',opts:['A. himself','B. ourselves','C. themselves'],ans:2,ex:'they → themselves.'},
  {q:'"by myself" nghĩa là:',opts:['A. Với người khác','B. Một mình','C. Không biết'],ans:1,ex:'by myself = một mình, tự làm.'},
  {q:'The machine turned _____ off.',opts:['A. itself','B. himself','C. herself'],ans:0,ex:'the machine (it) → itself.'},
  {q:'"Help yourself!" dùng để:',opts:['A. Xin phép','B. Mời ai đó tự lấy','C. Cảm ơn'],ans:1,ex:'Help yourself = mời (tự nhiên, cứ tự lấy).'}
],
36:[
  {q:'Sự hòa hợp về thì trong câu gián tiếp: Hiện Tại Đơn → ?',opts:['A. Simple Past','B. Past Perfect','C. Future'],ans:0,ex:'Câu trực tiếp: "I like" → Gián tiếp: he said he liked.'},
  {q:'"She said, \'I am tired.\'" → gián tiếp là:',opts:['A. She said she is tired.','B. She said she was tired.','C. She said she were tired.'],ans:1,ex:'am → was (lùi thì).'},
  {q:'"He said, \'I will come.\'" → gián tiếp:',opts:['A. He said he will come.','B. He said he would come.','C. He said he comes.'],ans:1,ex:'will → would (lùi thì).'},
  {q:'"They said, \'We have finished.\'" → gián tiếp:',opts:['A. They said they had finished.','B. They said they have finished.','C. They said they finished.'],ans:0,ex:'have finished → had finished.'},
  {q:'"She said, \'I can swim.\'" → gián tiếp:',opts:['A. She said she can swim.','B. She said she could swim.','C. She said she may swim.'],ans:1,ex:'can → could.'},
  {q:'Khi lùi thì trong câu gián tiếp, Simple Past lùi thành:',opts:['A. Past Continuous','B. Past Perfect','C. Không thay đổi'],ans:1,ex:'Simple Past → Past Perfect.'},
  {q:'"now" trong câu trực tiếp → gián tiếp thành:',opts:['A. then','B. here','C. soon'],ans:0,ex:'now → then.'},
  {q:'"here" → gián tiếp thành:',opts:['A. there','B. here','C. that place'],ans:0,ex:'here → there.'},
  {q:'"today" → gián tiếp thành:',opts:['A. this day','B. that day','C. now'],ans:1,ex:'today → that day.'},
  {q:'"tomorrow" → gián tiếp thành:',opts:['A. next day','B. the following day','C. Cả A và B'],ans:2,ex:'tomorrow → the next day / the following day.'},
  {q:'Câu hỏi gián tiếp có cấu trúc:',opts:['A. if/whether + V + S','B. if/whether + S + V','C. Như câu hỏi bình thường'],ans:1,ex:'Câu hỏi gián tiếp: S + V (không đảo ngữ).'},
  {q:'"He asked, \'Are you ready?\'" → gián tiếp:',opts:['A. He asked if I was ready.','B. He asked if I am ready.','C. He asked was I ready.'],ans:0,ex:'Câu hỏi Yes/No → if/whether + S + V.'}
],
37:[
  {q:'Chào hỏi lịch sự buổi sáng:',opts:['A. What\'s up!','B. Good morning!','C. Hey!'],ans:1,ex:'"Good morning!" là cách chào lịch sự, chuyên nghiệp.'},
  {q:'Khi giới thiệu bản thân: "My name is..." hay "I\'m..."?',opts:['A. My name is (formal hơn)','B. I\'m (informal)','C. Cả hai đều dùng được'],ans:2,ex:'Cả hai đúng. My name is = trang trọng hơn.'},
  {q:'"Nice to meet you!" trả lời bằng:',opts:['A. Me too!','B. Nice to meet you too!','C. OK!'],ans:1,ex:'"Nice to meet you too!" là cách trả lời chuẩn.'},
  {q:'Khi không nghe rõ, lịch sự nên nói:',opts:['A. "What?"','B. "Repeat!"','C. "Could you say that again, please?"'],ans:2,ex:'"Could you say that again?" là cách lịch sự.'},
  {q:'"How are you?" trả lời chuẩn:',opts:['A. "Fine, thank you."','B. "I am good, thanks."','C. Cả hai'],ans:2,ex:'Cả hai đều được chấp nhận trong giao tiếp hàng ngày.'},
  {q:'Khi muốn ngắt lời lịch sự:',opts:['A. "Stop!"','B. "Excuse me, may I say something?"','C. "Wait!"'],ans:1,ex:'"Excuse me" = xin lỗi khi muốn nói chen vào.'},
  {q:'"Pleased to meet you" = ?',opts:['A. Nice to meet you','B. See you later','C. Goodbye'],ans:0,ex:'"Pleased to meet you" = Nice to meet you = rất vui được gặp.'},
  {q:'Kết thúc cuộc trò chuyện lịch sự:',opts:['A. "Stop talking."','B. "Nice talking to you!"','C. "I\'m busy."'],ans:1,ex:'"Nice talking to you!" = rất vui được nói chuyện.'},
  {q:'"Small talk" là:',opts:['A. Nói chuyện khẽ','B. Nói chuyện xã giao về chủ đề nhỏ','C. Nói ít lại'],ans:1,ex:'Small talk = nói chuyện phiếm về thời tiết, cuối tuần...'},
  {q:'Sau khi được giới thiệu, nói:',opts:['A. "OK."','B. "Nice to meet you."','C. "What do you do?"'],ans:1,ex:'"Nice to meet you." = lịch sự khi được giới thiệu.'},
  {q:'"What do you do?" hỏi về:',opts:['A. Sở thích','B. Nghề nghiệp','C. Kế hoạch'],ans:1,ex:'"What do you do?" = Bạn làm nghề gì?'},
  {q:'Để duy trì cuộc trò chuyện, nên:',opts:['A. Đặt câu hỏi mở','B. Chỉ trả lời "yes/no"','C. Im lặng'],ans:0,ex:'Câu hỏi mở (What/How/Why) giúp duy trì cuộc trò chuyện.'}
],
38:[
  {q:'"Both...and..." dùng để:',opts:['A. Lựa chọn','B. Kết hợp cả hai','C. Phủ định cả hai'],ans:1,ex:'Both A and B = cả A và B.'},
  {q:'"Either...or..." dùng để:',opts:['A. Kết hợp cả hai','B. Lựa chọn một trong hai','C. Phủ định cả hai'],ans:1,ex:'Either A or B = A hoặc B (một trong hai).'},
  {q:'"Neither...nor..." dùng để:',opts:['A. Kết hợp','B. Lựa chọn','C. Phủ định cả hai'],ans:2,ex:'Neither A nor B = không A cũng không B.'},
  {q:'"Not only...but also..." dùng để:',opts:['A. Phủ định','B. Bổ sung, nhấn mạnh','C. Lựa chọn'],ans:1,ex:'Not only A but also B = không chỉ A mà còn B.'},
  {q:'Both she and he _____ here.',opts:['A. is','B. are','C. was'],ans:1,ex:'Both...and → chủ ngữ số nhiều → are.'},
  {q:'Either the cat or the dog _____ missing.',opts:['A. are','B. is','C. were'],ans:1,ex:'Either...or → động từ hòa hợp với chủ ngữ gần nhất (dog → is).'},
  {q:'Neither John nor his friends _____ invited.',opts:['A. was','B. were','C. is'],ans:1,ex:'Neither...nor → động từ hòa hợp với chủ ngữ gần nhất (friends → were).'},
  {q:'Not only _____ she sing, but she also dances.',opts:['A. do','B. does','C. can'],ans:1,ex:'Not only does she... = đảo ngữ khi "not only" đầu câu.'},
  {q:'She _____ both kind and smart.',opts:['A. is','B. are','C. be'],ans:0,ex:'She is both kind and smart.'},
  {q:'"I like neither tea nor coffee." nghĩa là:',opts:['A. Tôi thích cả hai','B. Tôi không thích cái nào','C. Tôi thích một trong hai'],ans:1,ex:'neither...nor = không cái nào.'},
  {q:'"He can both read and write French." nghĩa là:',opts:['A. Anh ấy chỉ đọc được','B. Anh ấy cả đọc lẫn viết được','C. Anh ấy không đọc được'],ans:1,ex:'both...and = cả hai khả năng.'},
  {q:'Either you _____ I need to go.',opts:['A. or','B. and','C. nor'],ans:0,ex:'Either...or. Either you or I.'}
],
39:[
  {q:'Thủ đô của Anh là:',opts:['A. Manchester','B. London','C. Birmingham'],ans:1,ex:'London = thủ đô Anh.'},
  {q:'"The United States" nằm ở châu lục nào?',opts:['A. Châu Âu','B. Châu Á','C. Châu Mỹ'],ans:2,ex:'USA nằm ở Bắc Mỹ (North America).'},
  {q:'Australia thuộc châu lục nào?',opts:['A. Châu Á','B. Châu Đại Dương','C. Châu Phi'],ans:1,ex:'Australia = châu Đại Dương (Oceania).'},
  {q:'"What nationality are you?" hỏi về:',opts:['A. Ngôn ngữ','B. Quốc tịch','C. Nghề nghiệp'],ans:1,ex:'nationality = quốc tịch.'},
  {q:'Người từ France = ?',opts:['A. Frenchman/French','B. Frances','C. Francish'],ans:0,ex:'France → French (người/ngôn ngữ), Frenchman.'},
  {q:'Người từ Japan = ?',opts:['A. Japanish','B. Japaner','C. Japanese'],ans:2,ex:'Japan → Japanese.'},
  {q:'Châu lục nào lớn nhất thế giới?',opts:['A. Châu Mỹ','B. Châu Á','C. Châu Phi'],ans:1,ex:'Châu Á = lớn nhất.'},
  {q:'"Where are you from?" có thể trả lời:',opts:['A. I\'m from Vietnam.','B. I am Vietnamese.','C. Cả hai'],ans:2,ex:'Cả hai cách trả lời đều đúng.'},
  {q:'Tiếng Anh là ngôn ngữ chính thức của:',opts:['A. Brazil','B. Australia','C. Mexico'],ans:1,ex:'Australia dùng tiếng Anh.'},
  {q:'Brazil thuộc:',opts:['A. Nam Mỹ','B. Bắc Mỹ','C. Châu Phi'],ans:0,ex:'Brazil = Nam Mỹ (South America).'},
  {q:'"Continent" nghĩa là:',opts:['A. Quốc gia','B. Châu lục','C. Thủ đô'],ans:1,ex:'continent = châu lục.'},
  {q:'Vietnam thuộc khu vực nào của châu Á?',opts:['A. Đông Á','B. Nam Á','C. Đông Nam Á'],ans:2,ex:'Vietnam = Southeast Asia (Đông Nam Á).'}
],
40:[
  {q:'"What are your hobbies?" = ?',opts:['A. Bạn làm gì?','B. Sở thích của bạn là gì?','C. Bạn thích ăn gì?'],ans:1,ex:'hobbies = sở thích.'},
  {q:'"I enjoy reading." "enjoy" theo sau là:',opts:['A. V nguyên thể','B. V-ing','C. V-ed'],ans:1,ex:'enjoy + V-ing.'},
  {q:'"I\'m into photography." nghĩa là:',opts:['A. Tôi ghét chụp ảnh','B. Tôi thích chụp ảnh','C. Tôi không biết chụp ảnh'],ans:1,ex:'be into sth = thích, mê cái gì.'},
  {q:'"I\'m keen on music." = ?',opts:['A. Tôi không thích nhạc','B. Tôi yêu thích nhạc','C. Tôi học nhạc'],ans:1,ex:'be keen on = yêu thích, đam mê.'},
  {q:'"I\'m not really into sports." nghĩa là:',opts:['A. Tôi thích thể thao','B. Tôi không thực sự thích thể thao','C. Tôi chơi thể thao'],ans:1,ex:'not really into = không hẳn thích.'},
  {q:'"What do you do in your free time?" = ?',opts:['A. Bạn làm gì khi rảnh?','B. Bạn đang làm gì?','C. Bạn đi đâu?'],ans:0,ex:'free time = thời gian rảnh.'},
  {q:'Cách diễn đạt sở thích: "I love/like/enjoy _____ ."',opts:['A. cook','B. cooking','C. to cook hoặc cooking'],ans:2,ex:'like/love/enjoy + V-ing; like/love cũng có thể + to-V.'},
  {q:'"I\'ve taken up yoga." nghĩa là:',opts:['A. Tôi bỏ yoga','B. Tôi bắt đầu tập yoga','C. Tôi ghét yoga'],ans:1,ex:'take up = bắt đầu (một sở thích mới).'},
  {q:'"I gave up smoking." nghĩa là:',opts:['A. Tôi bắt đầu hút thuốc','B. Tôi bỏ hút thuốc','C. Tôi thích hút thuốc'],ans:1,ex:'give up = bỏ, từ bỏ.'},
  {q:'"I\'m a bookworm." nghĩa là:',opts:['A. Tôi sợ sách','B. Tôi mê đọc sách','C. Tôi bán sách'],ans:1,ex:'bookworm = người mê đọc sách.'},
  {q:'Hỏi về sở thích của người khác, lịch sự hơn:',opts:['A. "Do you like..."','B. "Are you into...?"','C. Cả hai'],ans:2,ex:'Cả hai cách đều tự nhiên.'},
  {q:'"Pastime" = ?',opts:['A. Thời gian qua','B. Hoạt động giải trí, sở thích','C. Thời gian làm việc'],ans:1,ex:'pastime = sở thích, hoạt động giải trí.'}
],
41:[
  {q:'"by bus" nghĩa là đi bằng:',opts:['A. Xe taxi','B. Xe buýt','C. Tàu hỏa'],ans:1,ex:'by bus = đi xe buýt.'},
  {q:'"by train" = ?',opts:['A. Đi bộ','B. Đi tàu','C. Đi máy bay'],ans:1,ex:'by train = đi tàu hỏa.'},
  {q:'"take the subway" nghĩa là:',opts:['A. Đi tàu điện ngầm','B. Đi xe buýt','C. Đi taxi'],ans:0,ex:'subway = tàu điện ngầm.'},
  {q:'Phương tiện nhanh nhất đường dài:',opts:['A. By bus','B. By bicycle','C. By plane'],ans:2,ex:'Máy bay (plane) là nhanh nhất.'},
  {q:'"Traffic jam" nghĩa là:',opts:['A. Đường vắng','B. Kẹt xe','C. Đèn giao thông'],ans:1,ex:'traffic jam = tắc đường, kẹt xe.'},
  {q:'"commute" nghĩa là:',opts:['A. Du lịch','B. Đi làm hàng ngày','C. Tàu điện ngầm'],ans:1,ex:'commute = đi làm/học hàng ngày (thường là xa).'},
  {q:'"on foot" nghĩa là:',opts:['A. Đi xe','B. Đi bộ','C. Đi thuyền'],ans:1,ex:'on foot = đi bộ.'},
  {q:'"How do you get to work?" trả lời:',opts:['A. "I go work."','B. "I take the bus."','C. "I am going."'],ans:1,ex:'"I take the bus/train/subway" là cách nói tự nhiên.'},
  {q:'"fare" nghĩa là:',opts:['A. Giờ khởi hành','B. Tiền vé','C. Điểm đến'],ans:1,ex:'fare = tiền vé xe/tàu.'},
  {q:'"transfer" khi đi tàu nghĩa là:',opts:['A. Xuống tàu','B. Chuyển tàu','C. Mua vé'],ans:1,ex:'transfer = đổi chuyến, chuyển tàu.'},
  {q:'Loại phương tiện nào thân thiện môi trường nhất?',opts:['A. Car','B. Bicycle','C. Motorbike'],ans:1,ex:'Bicycle = xe đạp, không thải CO2.'},
  {q:'"delayed" khi nói về phương tiện nghĩa là:',opts:['A. Đúng giờ','B. Bị trễ/hoãn','C. Hủy chuyến'],ans:1,ex:'delayed = bị trễ, bị hoãn.'}
],
42:[
  {q:'Môn thể thao được chơi với "racket":',opts:['A. Football','B. Basketball','C. Tennis'],ans:2,ex:'Tennis và badminton dùng racket.'},
  {q:'"score a goal" dùng trong môn:',opts:['A. Swimming','B. Football','C. Running'],ans:1,ex:'score a goal = ghi bàn (football/soccer).'},
  {q:'"athlete" nghĩa là:',opts:['A. Cổ động viên','B. Vận động viên','C. Huấn luyện viên'],ans:1,ex:'athlete = vận động viên.'},
  {q:'"play" hay "do" hay "go" với "football"?',opts:['A. do','B. go','C. play'],ans:2,ex:'play + team sports: play football, basketball.'},
  {q:'"go" dùng với:',opts:['A. Football','B. Swimming','C. Basketball'],ans:1,ex:'go + V-ing (individual/activity): go swimming, go cycling.'},
  {q:'"do" dùng với:',opts:['A. Tennis','B. Karate','C. Baseball'],ans:1,ex:'do + martial arts/gym: do karate, do yoga.'},
  {q:'"champion" nghĩa là:',opts:['A. Người tham gia','B. Nhà vô địch','C. Trọng tài'],ans:1,ex:'champion = nhà vô địch.'},
  {q:'"referee" nghĩa là:',opts:['A. Cổ động viên','B. Vận động viên','C. Trọng tài'],ans:2,ex:'referee = trọng tài (football, basketball).'},
  {q:'"track and field" là môn:',opts:['A. Bơi lội','B. Điền kinh','C. Võ thuật'],ans:1,ex:'track and field = điền kinh (chạy, nhảy, ném).'},
  {q:'"What\'s the score?" hỏi về:',opts:['A. Điểm thi','B. Tỷ số trận đấu','C. Thứ hạng'],ans:1,ex:'the score = tỷ số trận đấu.'},
  {q:'"I\'m a big fan of..." nghĩa là:',opts:['A. Tôi ghét...','B. Tôi là fan hâm mộ...','C. Tôi chơi...'],ans:1,ex:'be a big fan of = hâm mộ, yêu thích.'},
  {q:'"match" trong thể thao nghĩa là:',opts:['A. Trận đấu','B. Vận động viên','C. Sân vận động'],ans:0,ex:'match = trận đấu.'}
],
43:[
  {q:'"doctor" = ?',opts:['A. Giáo viên','B. Bác sĩ','C. Kỹ sư'],ans:1,ex:'doctor = bác sĩ.'},
  {q:'"engineer" = ?',opts:['A. Kế toán','B. Kỹ sư','C. Luật sư'],ans:1,ex:'engineer = kỹ sư.'},
  {q:'"What do you do for a living?" hỏi về:',opts:['A. Nơi sống','B. Nghề nghiệp','C. Sở thích'],ans:1,ex:'for a living = để kiếm sống → hỏi nghề nghiệp.'},
  {q:'Trả lời "What do you do?" đúng cách:',opts:['A. "I do well."','B. "I\'m a teacher."','C. "I do teaching."'],ans:1,ex:'"I\'m a + nghề" là cách nói chuẩn.'},
  {q:'"freelancer" nghĩa là:',opts:['A. Nhân viên toàn thời gian','B. Người làm tự do','C. Người thất nghiệp'],ans:1,ex:'freelancer = người làm tự do, không có công ty cố định.'},
  {q:'"salary" và "wage" khác nhau:',opts:['A. Salary theo tháng, wage theo giờ/tuần','B. Giống nhau','C. Salary theo giờ, wage theo tháng'],ans:0,ex:'salary = lương tháng; wage = lương theo giờ.'},
  {q:'"nurse" = ?',opts:['A. Y tá','B. Bác sĩ','C. Dược sĩ'],ans:0,ex:'nurse = y tá.'},
  {q:'"accountant" = ?',opts:['A. Giám đốc','B. Kế toán','C. Lập trình viên'],ans:1,ex:'accountant = kế toán.'},
  {q:'"unemployed" nghĩa là:',opts:['A. Đang làm việc','B. Thất nghiệp','C. Đã nghỉ hưu'],ans:1,ex:'unemployed = thất nghiệp.'},
  {q:'"part-time job" là:',opts:['A. Việc làm toàn thời gian','B. Việc làm bán thời gian','C. Công việc tạm thời'],ans:1,ex:'part-time = bán thời gian (< 40 giờ/tuần).'},
  {q:'"promoted" nghĩa là:',opts:['A. Bị sa thải','B. Được thăng chức','C. Nghỉ hưu'],ans:1,ex:'promoted = thăng chức.'},
  {q:'"colleague" = ?',opts:['A. Khách hàng','B. Đồng nghiệp','C. Sếp'],ans:1,ex:'colleague = đồng nghiệp.'}
],
44:[
  {q:'"laptop" = ?',opts:['A. Máy tính bàn','B. Máy tính xách tay','C. Điện thoại'],ans:1,ex:'laptop = máy tính xách tay.'},
  {q:'"artificial intelligence (AI)" = ?',opts:['A. Trí tuệ nhân tạo','B. Máy móc','C. Internet'],ans:0,ex:'AI = trí tuệ nhân tạo.'},
  {q:'"software" = ?',opts:['A. Phần cứng','B. Phần mềm','C. Màn hình'],ans:1,ex:'software = phần mềm; hardware = phần cứng.'},
  {q:'"upload" nghĩa là:',opts:['A. Tải xuống','B. Tải lên','C. Xóa'],ans:1,ex:'upload = tải lên; download = tải xuống.'},
  {q:'"Wi-Fi" dùng để:',opts:['A. Kết nối internet không dây','B. Sạc pin','C. In tài liệu'],ans:0,ex:'Wi-Fi = wireless internet connection.'},
  {q:'"app" là viết tắt của:',opts:['A. Application','B. Apple','C. Approach'],ans:0,ex:'app = application (ứng dụng).'},
  {q:'"social media" bao gồm:',opts:['A. Báo in','B. Facebook, Instagram, TikTok','C. Tivi'],ans:1,ex:'social media = mạng xã hội.'},
  {q:'"password" = ?',opts:['A. Tên đăng nhập','B. Mật khẩu','C. Địa chỉ email'],ans:1,ex:'password = mật khẩu.'},
  {q:'"charge" điện thoại nghĩa là:',opts:['A. Tắt máy','B. Sạc pin','C. Gọi điện'],ans:1,ex:'charge = sạc (pin).'},
  {q:'"virus" trong máy tính là:',opts:['A. Chương trình hữu ích','B. Phần mềm độc hại','C. Hệ điều hành'],ans:1,ex:'computer virus = phần mềm độc hại.'},
  {q:'"data" trong thế giới công nghệ là:',opts:['A. Máy móc','B. Thông tin, dữ liệu','C. Mạng lưới'],ans:1,ex:'data = dữ liệu, thông tin.'},
  {q:'"cloud storage" là:',opts:['A. Lưu trữ trên đám mây (internet)','B. Ổ cứng vật lý','C. USB'],ans:0,ex:'cloud storage = lưu trữ trực tuyến.'}
],
45:[
  {q:'Đồng ý với ai: "That\'s a great point." nghĩa là:',opts:['A. Không đồng ý','B. Đồng ý (đó là điểm hay)','C. Đặt câu hỏi'],ans:1,ex:'"That\'s a great point." = đồng ý, khen ý kiến.'},
  {q:'Không đồng ý lịch sự: "_____",',opts:['A. "You\'re wrong!"','B. "I see your point, but..."','C. "No way!"'],ans:1,ex:'"I see your point, but..." = lịch sự không đồng ý.'},
  {q:'"In my opinion..." dùng để:',opts:['A. Nêu sự thật','B. Đưa ra quan điểm cá nhân','C. Hỏi ý kiến'],ans:1,ex:'"In my opinion" = theo ý kiến của tôi.'},
  {q:'"What do you think about...?" dùng để:',opts:['A. Nêu ý kiến','B. Hỏi ý kiến người khác','C. Phủ định'],ans:1,ex:'Hỏi ý kiến → What do you think?'},
  {q:'"I couldn\'t agree more." nghĩa là:',opts:['A. Hoàn toàn không đồng ý','B. Hoàn toàn đồng ý','C. Phần nào đồng ý'],ans:1,ex:'"I couldn\'t agree more." = hoàn toàn đồng ý.'},
  {q:'"That\'s debatable." nghĩa là:',opts:['A. Rõ ràng','B. Có thể tranh luận','C. Sai hoàn toàn'],ans:1,ex:'debatable = có thể tranh luận, chưa rõ ràng.'},
  {q:'"Frankly speaking..." = ?',opts:['A. Nói thẳng thắn','B. Nói chậm','C. Nói to'],ans:0,ex:'"Frankly speaking" = nói thật lòng.'},
  {q:'"I\'m not sure about that." diễn tả:',opts:['A. Đồng ý','B. Không chắc chắn','C. Phủ định hoàn toàn'],ans:1,ex:'Not sure = không chắc.'},
  {q:'"To be honest..." = ?',opts:['A. Thành thật mà nói','B. Thú vị','C. Nói chuyện'],ans:0,ex:'"To be honest" = thành thật mà nói.'},
  {q:'Hỏi ý kiến người khác: "How do you feel about...?"',opts:['A. Hỏi cảm xúc về chủ đề','B. Hỏi sức khỏe','C. Hỏi thời tiết'],ans:0,ex:'"How do you feel about X?" = Bạn nghĩ/cảm thấy thế nào về X?'},
  {q:'"Let\'s agree to disagree." nghĩa là:',opts:['A. Tiếp tục tranh cãi','B. Chấp nhận bất đồng ý kiến','C. Đồng ý hoàn toàn'],ans:1,ex:'Khi hai bên không thể thuyết phục nhau → chấp nhận sự khác biệt.'},
  {q:'"On the other hand..." dùng để:',opts:['A. Kết luận','B. Đưa ra góc nhìn đối lập','C. Bắt đầu câu'],ans:1,ex:'"On the other hand" = mặt khác (góc nhìn trái chiều).'}
],
46:[
  {q:'Note-taking (ghi chú) quan trọng vì:',opts:['A. Ghi hết mọi thứ','B. Giúp nhớ thông tin chính','C. Thay thế việc nghe'],ans:1,ex:'Note-taking = ghi những ý chính để ghi nhớ.'},
  {q:'Ký hiệu "→" trong ghi chú có nghĩa:',opts:['A. Nguyên nhân','B. Dẫn đến, kết quả','C. Sự đối lập'],ans:1,ex:'→ = leads to, results in.'},
  {q:'Ký hiệu "≈" có nghĩa:',opts:['A. Bằng nhau hoàn toàn','B. Khoảng, gần bằng','C. Lớn hơn'],ans:1,ex:'≈ = approximately, khoảng, gần bằng.'},
  {q:'Kỹ thuật Cornell Note-taking chia trang thành:',opts:['A. 2 cột','B. 3 phần (cột ghi chú, cột câu hỏi, tóm tắt)','C. Nhiều ô nhỏ'],ans:1,ex:'Cornell method: cột chính + cột câu hỏi + tóm tắt đáy trang.'},
  {q:'Viết tắt "e.g." nghĩa là:',opts:['A. Therefore','B. For example','C. That is'],ans:1,ex:'e.g. = exempli gratia = for example.'},
  {q:'"i.e." nghĩa là:',opts:['A. For example','B. That is','C. Et cetera'],ans:1,ex:'i.e. = id est = that is (tức là).'},
  {q:'"etc." nghĩa là:',opts:['A. And so on','B. For example','C. That is'],ans:0,ex:'etc. = et cetera = and so on.'},
  {q:'Khi nghe bài giảng, nên ghi:',opts:['A. Từng chữ một','B. Ý chính và keywords','C. Tất cả ví dụ'],ans:1,ex:'Ghi ý chính + keywords, không chép toàn bộ.'},
  {q:'Mind map (bản đồ tư duy) giúp:',opts:['A. Liệt kê thông tin tuyến tính','B. Kết nối ý tưởng trực quan','C. Chép bài học'],ans:1,ex:'Mind map = kết nối và tổ chức ý tưởng dạng nhánh.'},
  {q:'"w/" viết tắt của:',opts:['A. Without','B. With','C. While'],ans:1,ex:'w/ = with; w/o = without.'},
  {q:'Sau bài học, nên:',opts:['A. Đóng vở lại','B. Ôn lại ghi chú ngay','C. Bắt đầu bài mới'],ans:1,ex:'Ôn ghi chú trong 24h đầu giúp nhớ lâu.'},
  {q:'Ký hiệu "#" trong ghi chú thường chỉ:',opts:['A. Số thứ tự/số lượng','B. Địa chỉ','C. Câu hỏi'],ans:0,ex:'# = number.'}
],
47:[
  {q:'Paraphrasing (diễn đạt lại) nghĩa là:',opts:['A. Dịch từng chữ','B. Diễn đạt lại ý bằng từ ngữ khác','C. Tóm tắt ngắn gọn'],ans:1,ex:'Paraphrase = giữ nguyên nghĩa, thay đổi từ và cấu trúc.'},
  {q:'Kỹ thuật paraphrase cơ bản:',opts:['A. Chép lại nguyên văn','B. Thay thế từ đồng nghĩa + đổi cấu trúc','C. Chỉ đổi thứ tự từ'],ans:1,ex:'Dùng synonyms + thay đổi cấu trúc câu.'},
  {q:'"The car is fast." Paraphrase đúng:',opts:['A. The vehicle is rapid.','B. Fast is the car.','C. Car the is fast.'],ans:0,ex:'Thay car→vehicle, fast→rapid.'},
  {q:'Synonym của "big" là:',opts:['A. small','B. large','C. fast'],ans:1,ex:'big = large (đồng nghĩa).'},
  {q:'Synonym của "happy" là:',opts:['A. sad','B. angry','C. joyful'],ans:2,ex:'happy = joyful, cheerful, pleased.'},
  {q:'Đổi active → passive là kỹ thuật:',opts:['A. Summarizing','B. Paraphrasing','C. Note-taking'],ans:1,ex:'Đổi cấu trúc câu từ active sang passive = paraphrase.'},
  {q:'"She completed the project." → passive:',opts:['A. The project was completed by her.','B. The project completed by her.','C. She was completed the project.'],ans:0,ex:'Passive: The project was completed by her.'},
  {q:'Khi paraphrase, nghĩa câu gốc phải:',opts:['A. Thay đổi hoàn toàn','B. Giữ nguyên','C. Ngược lại'],ans:1,ex:'Paraphrase giữ nguyên ý nghĩa.'},
  {q:'Synonym của "use" là:',opts:['A. utilize','B. create','C. build'],ans:0,ex:'use = utilize, employ.'},
  {q:'"Many people think..." → paraphrase:',opts:['A. Few people believe...','B. A large number of people believe...','C. Nobody thinks...'],ans:1,ex:'many = a large number of.'},
  {q:'Paraphrasing trong học thuật giúp:',opts:['A. Tránh đạo văn','B. Làm bài ngắn hơn','C. Dịch sang tiếng Việt'],ans:0,ex:'Paraphrase tránh plagiarism (đạo văn).'},
  {q:'"important" synonym là:',opts:['A. trivial','B. crucial','C. minor'],ans:1,ex:'important = crucial, significant, vital.'},
  {q:'Viết lại câu sau dùng từ đồng nghĩa: The car is very fast.',type:'rewrite',ans:'The vehicle is very rapid.',ex:'car -> vehicle, fast -> rapid'},
  {q:'Viết lại câu sau sang thể bị động: She completed the project.',type:'rewrite',ans:'The project was completed by her.',ex:'Đảo tân ngữ lên làm chủ ngữ.'}
],
48:[
  {q:'Khi giới thiệu bản thân, nên bắt đầu bằng:',opts:['A. Tên và nguồn gốc','B. Điểm yếu','C. Kết luận'],ans:0,ex:'Bắt đầu: Tên, quê quán, công việc/học vấn.'},
  {q:'"My name is... I\'m from... I work as..." là:',opts:['A. Kết luận bài','B. Cấu trúc giới thiệu cơ bản','C. Hỏi về người khác'],ans:1,ex:'Đây là cấu trúc self-introduction chuẩn.'},
  {q:'Khi thuyết trình, mở đầu lịch sự:',opts:['A. "Thank you for having me."','B. "Bắt đầu rồi đó!"','C. "Nhanh thôi!"'],ans:0,ex:'"Thank you for having me" = cảm ơn cơ hội.'},
  {q:'"To sum up..." dùng khi:',opts:['A. Bắt đầu bài','B. Kết luận, tóm tắt','C. Đặt câu hỏi'],ans:1,ex:'"To sum up" = tóm lại, dùng để kết thúc.'},
  {q:'"Firstly... Secondly... Finally..." là cấu trúc:',opts:['A. Liệt kê điểm chính có thứ tự','B. Kết luận','C. Hỏi đáp'],ans:0,ex:'Discourse markers để cấu trúc bài thuyết trình.'},
  {q:'Eye contact (giao tiếp bằng mắt) khi thuyết trình:',opts:['A. Không cần thiết','B. Rất quan trọng','C. Nên tránh'],ans:1,ex:'Eye contact = tự tin, kết nối với khán giả.'},
  {q:'"Are there any questions?" dùng khi:',opts:['A. Bắt đầu bài','B. Muốn ngắt lời','C. Kết thúc thuyết trình'],ans:2,ex:'Hỏi câu hỏi ở cuối bài là chuyên nghiệp.'},
  {q:'Khi không biết trả lời câu hỏi, nên:',opts:['A. Im lặng','B. "That\'s a great question. Let me get back to you."','C. "I don\'t know."'],ans:1,ex:'Lịch sự thừa nhận và hứa trả lời sau.'},
  {q:'"I\'d like to talk about..." dùng để:',opts:['A. Kết thúc','B. Giới thiệu chủ đề bài','C. Hỏi câu hỏi'],ans:1,ex:'"I\'d like to talk about..." = giới thiệu chủ đề.'},
  {q:'Khi thuyết trình, giọng nói nên:',opts:['A. Rất nhanh','B. Rõ ràng, không quá nhanh','C. Thì thầm'],ans:1,ex:'Nói rõ, chậm, có ngữ điệu → thuyết trình hiệu quả.'},
  {q:'"hobbies and interests" trong self-introduction nên:',opts:['A. Liệt kê hết tất cả','B. Chọn 2-3 sở thích nổi bật, liên quan','C. Không đề cập'],ans:1,ex:'Chọn sở thích phù hợp, ngắn gọn.'},
  {q:'Kết thúc bài thuyết trình lịch sự:',opts:['A. "Done!"','B. "Thank you for your attention."','C. "That\'s all."'],ans:1,ex:'"Thank you for your attention." = chuyên nghiệp, lịch sự.'}
]
};

// ═══════════════════════════════════════════════
// STATE & STORAGE
// ═══════════════════════════════════════════════
let state={currentDay:null,currentTab:0,quizState:null,lessonPage:0,quizPage:0,ansPage:0};
function save(){localStorage.setItem('eng48_v2',JSON.stringify(progress))}
function load(){try{return JSON.parse(localStorage.getItem('eng48_v2'))||{}}catch{return{}}}

let progress=load();
// progress[dayNum] = {status:'pending'|'studying'|'done', score:0-100, attempts:0, lastDate:'YYYY-MM-DD'}

// ═══════════════════════════════════════════════
// UTILITY
// ═══════════════════════════════════════════════
function pad(n){return n<10?'0'+n:n}
function today(){let d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}
function imgPath(d,type,page){return `assets/day${pad(d)}/${type}_p${pad(page)}.jpg`}
function audioPath(folder,file){return encodeURIComponent(folder)+'/'+encodeURIComponent(file)}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}

function toast(msg,type='info'){
  const c=document.getElementById('toast-container');
  const el=document.createElement('div');
  el.className=`toast ${type}`;el.textContent=msg;
  c.appendChild(el);setTimeout(()=>{el.style.animation='toastIn .25s reverse';setTimeout(()=>el.remove(),250)},3000)
}

function getStats(){
  let done=0,scoreSum=0,scoreCnt=0;
  DAYS.forEach(d=>{
    const p=progress[d.d];
    if(p&&p.status==='done'){done++;if(p.score!=null){scoreSum+=p.score;scoreCnt++;}}
  });
  return{done,avg:scoreCnt?Math.round(scoreSum/scoreCnt):null};
}

function calcStreak(){
  let streak=0,d=new Date();
  while(true){
    let key=`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    let studied=DAYS.some(day=>{const p=progress[day.d];return p&&p.lastDate===key});
    if(!studied)break;
    streak++;d.setDate(d.getDate()-1);
  }
  return streak;
}

// ═══════════════════════════════════════════════
// VIEWS
// ═══════════════════════════════════════════════
function showView(v){
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(el=>el.classList.remove('active'));
  const nb=document.querySelector(`.nav-btn[onclick*="${v}"]`);if(nb)nb.classList.add('active');
  if(v==='dashboard')renderDashboard();
  else if(v==='progress')renderProgress();
  updateHeader();
}

function updateHeader(){
  const {done,avg}=getStats();
  document.getElementById('h-done').textContent=done;
  document.getElementById('h-avg').textContent=avg!=null?avg+'%':'—';
}

// ═══════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════
let currentFilter='all';
function filterDays(f,btn){
  currentFilter=f;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  renderDashboard();
}

function renderDashboard(){
  const {done,avg}=getStats();
  const streak=calcStreak();
  document.getElementById('sc-done').textContent=done;
  document.getElementById('sc-avg').textContent=avg!=null?avg+'%':'—';
  document.getElementById('sc-streak').textContent=streak;

  const grid=document.getElementById('days-grid');
  const filtered=DAYS.filter(d=>currentFilter==='all'||d.type===currentFilter);

  if(filtered.length===0){
    grid.innerHTML='<div class="empty"><h3>Không có bài học nào</h3><p>Thử chọn bộ lọc khác.</p></div>';
    return;
  }

  grid.innerHTML=filtered.map((d,i)=>{
    const p=progress[d.d]||{status:'pending'};
    const status=p.status||'pending';
    const score=p.score!=null?p.score:null;
    const pct=score!=null?score:0;
    const pbClass=pct>=75?'pb-green':pct>=40?'pb-amber':'pb-blue';
    const statusBadge=status==='done'?'badge-done':status==='studying'?'badge-progress':'badge-pending';
    const statusLabel=status==='done'?'Hoan Thanh':status==='studying'?'Dang Hoc':'Chua Hoc';
    const scoreClass=score!=null?(score>=75?'high':score>=50?'mid':'low'):'';
    const hasAudio=d.audio&&d.audio.length>0;
    const pc=PAGE_COUNTS[d.d]||{lesson:0,quiz:0,answer:0};
    const startLabel=status==='pending'?'Bat Dau':status==='studying'?'Tiep Tuc':'Xem Lai';

    return`<div class="day-card" onclick="openDay(${d.d})" style="animation-delay:${Math.min(i,20)*0.04}s">
      <div class="dc-head">
        <div class="dc-num">${d.d}</div>
        <div class="dc-info">
          <div class="dc-title">${esc(d.title)}</div>
          <div class="dc-meta">
            <span class="badge ${TYPE_BADGE[d.type]}">${TYPE_LABELS[d.type]}</span>
            ${hasAudio?'<span style="font-size:11px;color:var(--txt-muted)">Audio</span>':''}
          </div>
        </div>
        ${score!=null?`<div class="dc-score ${scoreClass}">${score}%</div>`:''}
      </div>
      ${status!=='pending'?`<div class="progress-bar"><div class="progress-fill ${pbClass}" style="width:${pct}%"></div></div>`:''}
      <div class="dc-footer">
        <div class="dc-icons">
          ${pc.lesson?`${pc.lesson}tr tai lieu`:''}
          ${pc.quiz?` | ${pc.quiz}tr de thi`:''}
        </div>
        <span class="badge ${statusBadge}">${statusLabel}</span>
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openDay(${d.d})">${startLabel}</button>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════
// DAY DETAIL
// ═══════════════════════════════════════════════
function openDay(dayNum){
  const day=DAYS.find(d=>d.d===dayNum);
  if(!day)return;
  state.currentDay=dayNum;
  state.lessonPage=1;state.quizPage=1;state.ansPage=1;

  if(!progress[dayNum])progress[dayNum]={status:'studying',attempts:0};
  else if(progress[dayNum].status==='pending')progress[dayNum].status='studying';
  if(!progress[dayNum].lastDate)progress[dayNum].lastDate=today();
  save();

  document.getElementById('day-title').textContent=`Ngay ${dayNum}: ${day.title}`;
  document.getElementById('day-sub').textContent=TYPE_LABELS[day.type];

  const hasAudio=day.audio&&day.audio.length>0;
  const pc=PAGE_COUNTS[dayNum]||{lesson:0,quiz:0,answer:0};

  const tabs=[
    {id:'lesson',label:'Tai Lieu Hoc'},
    {id:'exam',label:'Bai Thi Online'},
    ...(hasAudio?[{id:'audio',label:'Luyen Nghe'}]:[])
  ];

  document.getElementById('day-tabs').innerHTML=tabs.map((t,i)=>
    `<div class="tab ${i===0?'active':''}" onclick="switchTab('${t.id}',this)">${t.label}</div>`
  ).join('');

  const lessonHTML=renderLessonViewer(dayNum,pc.lesson,'lesson');
  const examHTML=renderExamTab(dayNum,pc.quiz,pc.answer);
  const audioHTML=hasAudio?renderAudioTab(day):'';

  document.getElementById('day-tab-contents').innerHTML=
    `<div class="tab-content active" id="tc-lesson">${lessonHTML}</div>
     <div class="tab-content" id="tc-exam">${examHTML}</div>
     ${hasAudio?`<div class="tab-content" id="tc-audio">${audioHTML}</div>`:''}`;

  initLessonNav(dayNum,'lesson',pc.lesson,'lesson');
  showView('day');
  if(hasAudio)setTimeout(()=>initAudioPlayer(day),100);
}

function switchTab(id,el){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(tc=>tc.classList.remove('active'));
  document.getElementById('tc-'+id).classList.add('active');
}

// ═══════════════════════════════════════════════
// LESSON VIEWER
// ═══════════════════════════════════════════════
function renderLessonViewer(dayNum,pages,type){
  if(!pages||pages===0)return'<div class="empty"><h3>Chua co tai lieu</h3></div>';
  return`<div class="viewer-wrap">
    <div class="viewer-toolbar">
      <span class="viewer-info" id="vinfo-${type}">Trang 1/${pages}</span>
      <button class="btn btn-secondary btn-sm" onclick="zoomPage('${type}','fit')">Vua man hinh</button>
      <button class="btn btn-secondary btn-sm" onclick="zoomPage('${type}','100')">100%</button>
    </div>
    <div class="viewer-body" id="vbody-${type}">
      <img id="vimg-${type}" class="page-img zoom-fit" src="${imgPath(dayNum,type,1)}" alt="Trang 1" onerror="this.src='';this.alt='Khong tim thay hinh anh. Hay chay script chuyen doi PDF.'">
    </div>
    <div class="viewer-nav">
      <button class="btn btn-secondary btn-sm" id="vprev-${type}" onclick="changePage('${type}',-1,${pages},${dayNum})">Trang truoc</button>
      <span class="page-counter" id="vcnt-${type}">1 / ${pages}</span>
      <button class="btn btn-primary btn-sm" id="vnext-${type}" onclick="changePage('${type}',1,${pages},${dayNum})">Trang sau</button>
    </div>
  </div>`;
}

let pageState={};
function initLessonNav(dayNum,type,total){
  pageState[type]={cur:1,total,dayNum};
}
function changePage(type,delta,total,dayNum){
  if(!pageState[type])pageState[type]={cur:1,total,dayNum};
  const ps=pageState[type];
  ps.cur=Math.max(1,Math.min(total,ps.cur+delta));
  const img=document.getElementById(`vimg-${type}`);
  const cnt=document.getElementById(`vcnt-${type}`);
  const info=document.getElementById(`vinfo-${type}`);
  if(img)img.src=imgPath(ps.dayNum,type,ps.cur);
  if(cnt)cnt.textContent=`${ps.cur} / ${ps.total}`;
  if(info)info.textContent=`Trang ${ps.cur}/${ps.total}`;
}
function zoomPage(type,mode){
  const img=document.getElementById(`vimg-${type}`);
  if(!img)return;
  if(mode==='fit'){img.className='page-img zoom-fit';}
  else{img.className='page-img zoom-100';}
}

// ═══════════════════════════════════════════════
// EXAM TAB
// ═══════════════════════════════════════════════
function renderExamTab(dayNum,quizPages,ansPages){
  const qs=QUIZ[dayNum]||[];
  const pc=PAGE_COUNTS[dayNum]||{};

  let examRefHTML='';
  if(quizPages>0){
    examRefHTML=`<div class="exam-ref-wrap">
      <div class="exam-ref-title">De Thi Goc</div>
      <div class="viewer-wrap" style="margin-bottom:16px">
        <div class="viewer-toolbar">
          <span class="viewer-info" id="vinfo-quiz">Trang 1/${quizPages}</span>
          <button class="btn btn-secondary btn-sm" onclick="zoomPage('quiz','fit')">Vua man hinh</button>
        </div>
        <div class="viewer-body" id="vbody-quiz">
          <img id="vimg-quiz" class="page-img zoom-fit" src="${imgPath(dayNum,'quiz',1)}" alt="De thi" onerror="this.alt='Chua co anh de thi'">
        </div>
        ${quizPages>1?`<div class="viewer-nav">
          <button class="btn btn-secondary btn-sm" onclick="changePage('quiz',-1,${quizPages},${dayNum})">Truoc</button>
          <span class="page-counter" id="vcnt-quiz">1 / ${quizPages}</span>
          <button class="btn btn-primary btn-sm" onclick="changePage('quiz',1,${quizPages},${dayNum})">Sau</button>
        </div>`:''}
      </div>
    </div>`;
    pageState['quiz']={cur:1,total:quizPages,dayNum};
  }

  let quizHTML='';
  if(qs.length>0){
    const p=progress[dayNum]||{};
    const best=p.score!=null?`<span style="color:var(--ok);font-weight:700">Diem cao nhat: ${p.score}%</span>`:'';
    quizHTML=`<div class="quiz-divider"><span>Bai Tap Tuong Tac</span></div>
    <div class="start-quiz-card">
      <div class="sqc-title">Bai Thi Online — Ngay ${dayNum}</div>
      <div class="sqc-sub">${qs.length} cau hoi • Bam vao dap an de chon • Co giai thich sau khi nop ${best}</div>
      <button class="btn btn-primary" onclick="startQuiz(${dayNum})">Lam Bai Thi</button>
    </div>`;
  }

  let ansHTML='';
  if(ansPages>0){
    ansHTML=`<div class="quiz-divider" style="margin-top:24px"><span>Dap An Chinh Thuc</span></div>
    <div class="viewer-wrap">
      <div class="viewer-toolbar">
        <span class="viewer-info" id="vinfo-answer">Trang 1/${ansPages}</span>
        <button class="btn btn-secondary btn-sm" onclick="zoomPage('answer','fit')">Vua man hinh</button>
      </div>
      <div class="viewer-body" id="vbody-answer">
        <img id="vimg-answer" class="page-img zoom-fit" src="${imgPath(dayNum,'answer',1)}" alt="Dap an" onerror="this.alt='Chua co anh dap an'">
      </div>
      <div class="viewer-nav">
        <button class="btn btn-secondary btn-sm" onclick="changePage('answer',-1,${ansPages},${dayNum})">Truoc</button>
        <span class="page-counter" id="vcnt-answer">1 / ${ansPages}</span>
        <button class="btn btn-primary btn-sm" onclick="changePage('answer',1,${ansPages},${dayNum})">Sau</button>
      </div>
    </div>`;
    pageState['answer']={cur:1,total:ansPages,dayNum};
  }

  return examRefHTML+quizHTML+ansHTML;
}

// ═══════════════════════════════════════════════
// QUIZ ENGINE
// ═══════════════════════════════════════════════
let quizTimer=null;
function startQuiz(dayNum){
  const qs=QUIZ[dayNum];if(!qs||qs.length===0)return;
  const examEl=document.getElementById('tc-exam');
  state.quizState={dayNum,qs,cur:0,answers:Array(qs.length).fill(null),revealed:Array(qs.length).fill(false),timeLeft:qs.length*60,done:false};
  if(quizTimer)clearInterval(quizTimer);
  quizTimer=setInterval(tickTimer,1000);
  renderQuestion();
}

function tickTimer(){
  if(!state.quizState||state.quizState.done)return;
  state.quizState.timeLeft--;
  updateTimerUI();
  if(state.quizState.timeLeft<=0)submitQuiz();
}

function updateTimerUI(){
  const el=document.getElementById('quiz-timer-el');
  if(!el)return;
  const t=state.quizState.timeLeft;
  const m=Math.floor(t/60),s=t%60;
  el.textContent=`${pad(m)}:${pad(s)}`;
  el.className='quiz-timer'+(t<30?' danger':t<60?' warn':'');
}

function renderQuestion(){
  const {qs,cur,answers,revealed,timeLeft,dayNum}=state.quizState;
  const q=qs[cur];
  const pct=Math.round((cur/qs.length)*100);
  const m=Math.floor(timeLeft/60),s=timeLeft%60;
  const timerClass=timeLeft<30?'danger':timeLeft<60?'warn':'';

  const examEl=document.getElementById('tc-exam');
  examEl.innerHTML=`<div class="quiz-wrap">
    <div class="quiz-header">
      <div class="quiz-title">Bài Thi — Ngày ${dayNum}</div>
      <div class="quiz-meta">
        <div class="quiz-timer ${timerClass}" id="quiz-timer-el">${pad(m)}:${pad(s)}</div>
        <span style="font-size:13px;opacity:.8">${cur+1}/${qs.length} câu</span>
      </div>
    </div>
    <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${pct}%"></div></div>
    <div class="quiz-body">
      ${q.img ? `<div class="q-img-container" style="max-height: 250px; overflow-y: auto; margin: 15px 0; border: 1px solid var(--border); border-radius: 8px; box-shadow: var(--sh-sm); scroll-behavior: smooth;">
        <img src="${q.img}" style="width: 100%; display: block;" onload="this.parentElement.scrollTop = (this.scrollHeight - this.parentElement.clientHeight) * (parseFloat(${q.imgScroll}) || 0)">
      </div>` : ''}
      <div class="q-text">${esc(q.q)}</div>
      <div class="opts" id="opts-container">
        ${q.type === 'rewrite' ? `
          <textarea class="rewrite-input ${revealed[cur] ? (checkRewrite(answers[cur], q.ans) ? 'correct' : 'wrong') : ''}" 
            placeholder="Nhập câu trả lời của bạn ở đây..." 
            oninput="handleTextAnswer(this.value)" 
            ${revealed[cur] ? 'readonly' : ''}>${answers[cur] || ''}</textarea>
        ` :
        q.opts.map((o,i)=>{
          let cls='opt';
          if(revealed[cur]){
            if(i===q.ans)cls+=' correct';
            else if(answers[cur]===i&&i!==q.ans)cls+=' wrong';
          } else if(answers[cur]===i)cls+=' selected';
          return`<div class="${cls}" onclick="selectOpt(${i})" id="opt-${i}">
            <div class="opt-letter">${String.fromCharCode(65+i)}</div>
            <span>${esc(o)}</span>
          </div>`;
        }).join('')}
      </div>
      <div class="explanation ${revealed[cur]?'show':''}" id="explanation-el">
        <div class="ex-label">Giải Thích</div>
        ${esc(q.ex||'')}
      </div>
    </div>
    <div class="quiz-footer">
      ${cur>0?`<button class="btn btn-secondary btn-sm" onclick="navQ(-1)">Câu Trước</button>`:''}
      ${!revealed[cur]?`<button class="btn btn-primary btn-sm" onclick="revealAnswer()">Kiểm Tra</button>`:''}
      ${cur<qs.length-1?`<button class="btn btn-primary btn-sm" onclick="navQ(1)">Câu Tiếp</button>`:''}
      ${cur===qs.length-1?`<button class="btn btn-navy btn-sm" onclick="submitQuiz()">Nộp Bài</button>`:''}
    </div>
  </div>`;
  updateScore();
}

function selectOpt(i){
  if(!state.quizState||state.quizState.revealed[state.quizState.cur])return;
  state.quizState.answers[state.quizState.cur]=i;
  document.querySelectorAll('.opt').forEach((el,idx)=>{
    el.classList.toggle('selected',idx===i);
  });
}

function handleTextAnswer(val){
  if(!state.quizState||state.quizState.revealed[state.quizState.cur])return;
  state.quizState.answers[state.quizState.cur]=val;
}

function checkRewrite(userAns, correctAns) {
  if (!userAns) return false;
  const normalize = s => String(s).trim().toLowerCase().replace(/\s+/g, ' ');
  if (Array.isArray(correctAns)) {
    return correctAns.some(a => normalize(userAns) === normalize(a));
  }
  return normalize(userAns) === normalize(correctAns);
}

function revealAnswer(){
  const {qs,cur,answers,revealed}=state.quizState;
  if(answers[cur]===null){toast('Hay chon mot dap an!','error');return;}
  revealed[cur]=true;
  renderQuestion();
}

function navQ(delta){
  state.quizState.cur=Math.max(0,Math.min(state.quizState.qs.length-1,state.quizState.cur+delta));
  renderQuestion();
}

function updateScore(){
  const {qs,answers,revealed}=state.quizState;
  let correct=0,answered=0;
  qs.forEach((q,i)=>{
    if(revealed[i]){
      answered++;
      if(q.type === 'rewrite') {
        if(checkRewrite(answers[i], q.ans)) correct++;
      } else {
        if(answers[i]===q.ans) correct++;
      }
    }
  });
  const el=document.getElementById('score-running');
  if(el)el.textContent=answered>0?`${correct}/${answered}`:'--';
}

function submitQuiz(){
  if(quizTimer){clearInterval(quizTimer);quizTimer=null;}
  const {qs,answers,dayNum}=state.quizState;
  state.quizState.done=true;
  let correct=0;
  qs.forEach((q,i)=>{
    if (q.type === 'rewrite') {
      if(checkRewrite(answers[i], q.ans)) correct++;
    } else {
      if(answers[i]===q.ans) correct++;
    }
  });
  const score=Math.round((correct/qs.length)*100);
  const passed=score>=60;

  if(!progress[dayNum])progress[dayNum]={};
  progress[dayNum].status='done';
  progress[dayNum].score=Math.max(progress[dayNum].score||0,score);
  progress[dayNum].attempts=(progress[dayNum].attempts||0)+1;
  progress[dayNum].lastDate=today();
  save();

  const examEl=document.getElementById('tc-exam');
  const reviewHTML=qs.map((q,i)=>{
    let ok = false;
    let yourAns = '', corrAns = '';
    if (q.type === 'rewrite') {
      ok = checkRewrite(answers[i], q.ans);
      yourAns = answers[i] || 'Chua tra loi';
      corrAns = Array.isArray(q.ans) ? q.ans[0] : q.ans;
    } else {
      ok = answers[i]===q.ans;
      yourAns = answers[i]!=null?q.opts[answers[i]]:'Chua tra loi';
      corrAns = q.opts[q.ans];
    }
    return`<div class="rv-item ${ok?'ok':'ng'}">
      <div class="rv-q">${i+1}. ${esc(q.q)}</div>
      <div class="rv-ans">
        ${ok?`<span class="c">Dung: ${esc(corrAns)}</span>`:`<span class="w">Ban chon: ${esc(yourAns)}</span> &rarr; <span class="c">Dung: ${esc(corrAns)}</span>`}
      </div>
      <div class="rv-ex">${esc(q.ex)}</div>
    </div>`;
  }).join('');

  examEl.innerHTML=`<div class="quiz-wrap">
    <div class="result-wrap">
      <div class="result-circle ${passed?'pass':'fail'}">
        ${score}%
        <div class="result-pct">${correct}/${qs.length}</div>
      </div>
      <div class="result-title">${passed?'Xuat Sac! Hoan Thanh!':'Can On Them!'}</div>
      <div class="result-sub">${passed?'Ban da vuot qua bai thi. Chuc mung!':'Ban can on tap them. Hay thu lai!'}</div>
      <div class="result-stats">
        <div class="rs"><div class="rs-num g">${correct}</div><div class="rs-lbl">Dung</div></div>
        <div class="rs"><div class="rs-num r">${qs.length-correct}</div><div class="rs-lbl">Sai</div></div>
        <div class="rs"><div class="rs-num b">${score}%</div><div class="rs-lbl">Diem</div></div>
      </div>
      <div style="display:flex;gap:10px;justify-content:center">
        <button class="btn btn-primary" onclick="startQuiz(${dayNum})">Lam Lai</button>
        <button class="btn btn-secondary" onclick="openDay(${dayNum})">Xem Tai Lieu</button>
      </div>
      <div class="result-review">
        <div class="rv-title">Xem Lai Dap An</div>
        ${reviewHTML}
      </div>
    </div>
  </div>`;
  toast(`Hoan thanh! Diem: ${score}%`,passed?'success':'info');
}

// ═══════════════════════════════════════════════
// AUDIO PLAYER
// ═══════════════════════════════════════════════
function renderAudioTab(day){
  if(!day.audio||day.audio.length===0)return'<div class="empty"><h3>Khong co file audio</h3></div>';
  const folder=FOLDERS[day.d];
  const tracks=day.audio.map((f,i)=>
    `<div class="track ${i===0?'active':''}" id="track-${i}" onclick="selectTrack(${i})">
      <div class="track-num">${i+1}</div>
      <div class="track-name">${esc(f.replace(/\.mp3$/i,'').replace(/Bài thi [Oo]nline[-—\s]*/,'').replace(/Bài thi Online[-—\s]*/,'').trim())}</div>
    </div>`
  ).join('');

  return`<div class="audio-wrap">
    <div class="audio-head">
      <div class="audio-title">Luyen Nghe — Ngay ${day.d}</div>
      <div class="audio-sub">${day.audio.length} bai nghe</div>
    </div>
    <div class="tracklist">${tracks}</div>
    <div class="player">
      <div class="player-info">
        <div class="player-track" id="player-track-name">${day.audio[0]||''}</div>
        <div class="player-sub">Chon bai de bat dau</div>
      </div>
      <input type="range" class="seek-bar" id="seek-bar" value="0" min="0" step="0.1">
      <div class="time-row"><span id="time-cur">0:00</span><span id="time-dur">0:00</span></div>
      <div class="player-controls">
        <button class="ctrl-btn" onclick="prevTrack()" title="Bai truoc">&#9664;&#9664;</button>
        <button class="play-btn" id="play-btn" onclick="togglePlay()">&#9654;</button>
        <button class="ctrl-btn" onclick="nextTrack()" title="Bai sau">&#9654;&#9654;</button>
      </div>
      <div class="player-extras">
        <span style="font-size:12px;color:var(--txt-sub)">Toc do:</span>
        ${[0.75,1,1.25,1.5].map(s=>`<button class="speed-btn ${s===1?'active':''}" onclick="setSpeed(${s},this)">${s}x</button>`).join('')}
        <div class="vol-wrap">&#128266;<input type="range" class="vol-bar" id="vol-bar" min="0" max="1" step="0.05" value="1" oninput="setVol(this.value)"></div>
      </div>
    </div>
  </div>`;
}

let audioEl=null,audioTracks=[],audioCurTrack=0,audioFolder='';
function initAudioPlayer(day){
  audioFolder=FOLDERS[day.d]||'';
  audioTracks=day.audio||[];
  audioCurTrack=0;
  audioEl=new Audio();
  audioEl.ontimeupdate=()=>{
    const sb=document.getElementById('seek-bar');
    const tc=document.getElementById('time-cur');
    if(sb&&audioEl.duration)sb.value=(audioEl.currentTime/audioEl.duration)*100;
    if(tc)tc.textContent=fmtTime(audioEl.currentTime);
  };
  audioEl.ondurationchange=()=>{
    const sb=document.getElementById('seek-bar');
    const td=document.getElementById('time-dur');
    if(sb)sb.max=100;
    if(td)td.textContent=fmtTime(audioEl.duration);
  };
  audioEl.onended=()=>{
    const pb=document.getElementById('play-btn');
    if(pb)pb.innerHTML='&#9654;';
    if(audioCurTrack<audioTracks.length-1)nextTrack();
  };
  const sb=document.getElementById('seek-bar');
  if(sb)sb.oninput=function(){if(audioEl.duration)audioEl.currentTime=(this.value/100)*audioEl.duration;};
  loadTrack(0);
}

function loadTrack(i){
  if(!audioEl||i<0||i>=audioTracks.length)return;
  audioCurTrack=i;
  const f=audioTracks[i];
  audioEl.src=audioFolder+'/'+f;
  document.querySelectorAll('.track').forEach((el,idx)=>el.classList.toggle('active',idx===i));
  const tn=document.getElementById('player-track-name');
  if(tn)tn.textContent=f.replace(/\.mp3$/i,'').replace(/Bài thi [Oo]nline[-—\s]*/,'').trim();
}
function selectTrack(i){loadTrack(i);}
function togglePlay(){
  if(!audioEl)return;
  const pb=document.getElementById('play-btn');
  if(audioEl.paused){audioEl.play().catch(e=>toast('Khong the phat: '+e.message,'error'));if(pb)pb.innerHTML='&#9646;&#9646;';}
  else{audioEl.pause();if(pb)pb.innerHTML='&#9654;';}
}
function prevTrack(){if(audioCurTrack>0)loadTrack(audioCurTrack-1);}
function nextTrack(){if(audioCurTrack<audioTracks.length-1)loadTrack(audioCurTrack+1);}
function setSpeed(s,btn){
  if(audioEl)audioEl.playbackRate=s;
  document.querySelectorAll('.speed-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}
function setVol(v){if(audioEl)audioEl.volume=parseFloat(v);}
function fmtTime(t){if(!t||isNaN(t))return'0:00';const m=Math.floor(t/60),s=Math.floor(t%60);return`${m}:${pad(s)}`;}

// ═══════════════════════════════════════════════
// PROGRESS VIEW
// ═══════════════════════════════════════════════
function renderProgress(){
  const {done,avg}=getStats();
  const streak=calcStreak();
  const pct=Math.round((done/48)*100);
  document.getElementById('p-done').textContent=done;
  document.getElementById('p-avg').textContent=avg!=null?avg+'%':'—';
  document.getElementById('p-streak').textContent=streak;
  document.getElementById('p-pct').textContent=pct+'%';
  document.getElementById('p-bar').style.width=pct+'%';

  const table=document.getElementById('progress-table');
  table.innerHTML=DAYS.map(d=>{
    const p=progress[d.d]||{};
    const status=p.status||'pending';
    const statusBadge=status==='done'?'badge-done':status==='studying'?'badge-progress':'badge-pending';
    const statusLabel=status==='done'?'Hoan Thanh':status==='studying'?'Dang Hoc':'Chua Hoc';
    const score=p.score!=null?p.score+'%':'—';
    return`<div class="dt-row" onclick="openDay(${d.d})">
      <span class="dt-day-num">${d.d}</span>
      <span style="font-size:13px;font-weight:500">${esc(d.title.length>45?d.title.slice(0,45)+'...':d.title)}</span>
      <span class="badge ${TYPE_BADGE[d.type]}">${TYPE_LABELS[d.type]}</span>
      <span style="font-weight:700;color:${p.score!=null?(p.score>=75?'var(--ok)':p.score>=50?'var(--warn)':'var(--err)'):'var(--txt-muted)'}">${score}</span>
      <span class="badge ${statusBadge}">${statusLabel}</span>
    </div>`;
  }).join('');
}

function resetAll(){
  localStorage.removeItem('eng48_v2');
  progress={};
  renderDashboard();
  updateHeader();
  toast('Da xoa toan bo du lieu hoc tap.','info');
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
window.addEventListener('DOMContentLoaded',()=>{
  renderDashboard();
  updateHeader();
});
