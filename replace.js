const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacements = {
  '48 Ngay Lay Goc Tieng Anh': '48 Ngày Lấy Gốc Tiếng Anh Toàn Diện',
  'Da Hoàn Thành': 'Đã Hoàn Thành',
  '← Quay Lai': '← Quay Lại',
  'Diem TB:': 'Điểm TB:',
  'CAU DIEU KIEN LOAI 1': 'CÂU ĐIỀU KIỆN LOẠI 1',
  'CAU DIEU KIEN LOAI 2': 'CÂU ĐIỀU KIỆN LOẠI 2',
  'CAU DIEU KIEN LOAI 3': 'CÂU ĐIỀU KIỆN LOẠI 3',
  'LUYEN NGHE NGAY THANG': 'LUYỆN NGHE NGÀY THÁNG',
  'Hoan thanh! Diem:': 'Hoàn thành! Điểm:',
  'Da xoa toan bo du lieu hoc tap.': 'Đã xóa toàn bộ dữ liệu học tập.'
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.replaceAll(key, value);
}

fs.writeFileSync('index.html', content);
console.log("Final replacement complete.");
