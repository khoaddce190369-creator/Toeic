# UI Design Template — Navy Enterprise

> Dùng template này làm prompt cho AI khi muốn tạo giao diện web có style tương tự.
> Copy phần nào cần, hoặc gửi nguyên file kèm yêu cầu.

---

## 1. Phong cách tổng thể

| Thuộc tính | Giá trị |
|---|---|
| **Style** | Enterprise / Corporate — sạch sẽ, chuyên nghiệp, tối giản |
| **Theme** | Light mode, header tối (navy) |
| **Cảm giác** | Đáng tin cậy, rõ ràng, không rối mắt |
| **Không dùng** | Emoji, icon trang trí, gradient lòe loẹt, dark mode toàn trang |

---

## 2. Bảng màu

```
Nền trang:           #f1f5f9   (xám xanh rất nhạt)
Nền card/modal:      #ffffff   (trắng tinh)
Nền input:           #f8fafc   (trắng xám nhạt)

Header:              #1e3a5f → #0f2744   (navy gradient)
Accent chính:        #2563eb   (Royal Blue — nút chính, link, highlight)
Accent hover:        #1d4ed8   (đậm hơn khi hover)

Chữ chính:           #1e293b   (gần đen, mềm hơn pure black)
Chữ phụ:             #64748b   (slate — mô tả, label)
Chữ mờ:              #94a3b8   (muted — placeholder, ghi chú nhỏ)
Chữ trên nền tối:    #f1f5f9   (trắng dịu)

Viền:                #e2e8f0   (xám nhạt)
Viền hover:          #cbd5e1   (đậm hơn chút)
Viền focus:          #2563eb   (= accent)

Trạng thái thành công: #16a34a   (xanh lá — Done, Success)
Trạng thái cảnh báo:   #f59e0b   (vàng amber — In Progress, Warning)
Trạng thái trung tính: #6b7280   (xám — Pending, Disabled)
Trạng thái nguy hiểm:  #dc2626   (đỏ — chỉ dùng cho Xóa, Lỗi, Quá hạn)
```

> **Nguyên tắc**: Đỏ chỉ dùng cho hành động nguy hiểm (xóa, lỗi). Không dùng đỏ cho thành phần thường.

---

## 3. Typography

```
Font:         Inter (Google Fonts)
Fallback:     -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

Heading h1:   24px, weight 700, letter-spacing 1.5px, uppercase
Heading h2:   20px, weight 700
Card title:   16px, weight 700
Body:         14px, weight 400, line-height 1.6
Label:        12px, weight 600, uppercase, letter-spacing 0.5px
Small/Muted:  13px, weight 500

Anti-aliasing: -webkit-font-smoothing: antialiased
```

---

## 4. Layout

```
Max-width content:    1200px, center (margin: 0 auto)
Padding trang:        0 24px
Padding card:         24px
Gap giữa cards:       16px
Gap trong form:       16px
Grid system:          CSS Grid, auto-fill, minmax(360px, 1fr)

Dashboard:            Grid 4 cột đều → 2 cột tablet → 2 cột mobile
Task list:            Card grid responsive → 1 cột mobile
Toolbar:              Flex, gap 10px, wrap
```

---

## 5. Components

### Header
- Background: navy gradient (trái→phải hoặc 135deg)
- Text: trắng, uppercase, bold
- Padding: 32px
- Có đường kẻ sáng mờ ở đáy (decorative)

### Dashboard Cards
- Nền trắng, viền xám nhạt, bo góc 10px
- Shadow nhẹ: `0 1px 3px rgba(30,58,95,0.06)`
- **Đường kẻ màu 3px ở top** — mỗi card màu khác nhau (blue, green, amber, gray)
- Hover: nâng lên 2px + shadow đậm hơn
- Số lớn (36px, bold), label nhỏ phía dưới (13px, uppercase)

### Buttons — 4 cấp độ

| Loại | Background | Chữ | Viền | Dùng cho |
|---|---|---|---|---|
| **Primary** | `#2563eb` filled | Trắng | Không | Lưu, Thêm, Cập nhật |
| **Secondary** | Trắng | Đen | Xám nhạt | Làm mới, Import, Đóng |
| **Accent** | Navy `#1e3a5f` | Trắng | Không | Hành động đặc biệt (Sync) |
| **Danger** | Trắng | Đỏ | Đỏ | Xóa |

Tất cả buttons: padding 10px 20px, bo góc 6px, font 13px weight 600, transition 0.15s.
Hover: đổi shade đậm hơn + shadow nhẹ.

### Task Cards
- Nền trắng, viền xám, bo góc 10px, padding 24px
- Hover: nâng 2px + shadow đậm + viền đậm hơn
- Entrance animation: fade-in + slide-up (0.35s, stagger 0.05s mỗi card)
- Bố cục trong card: flex column, gap 16px
  - Header: tên task (bold 16px) + status badge
  - Mô tả: text slate 14px
  - Progress bar: thanh mỏng 6px, bo tròn, đổi màu theo mức
  - Meta: deadline + trạng thái deadline
  - Ghi chú: nền xám nhạt, border-left 3px
  - Actions: viền trên mỏng, nút Sửa (blue outline) + Xóa (red outline)

### Status Badges
- Dạng pill: padding 4px 12px, bo tròn 100px, font 12px bold
- **Done**: nền xanh lá nhạt, chữ xanh lá
- **In Progress**: nền vàng nhạt, chữ vàng
- **Pending**: nền xám nhạt, chữ xám

### Progress Bar
- Track: nền `#f1f5f9`, cao 6px, bo tròn
- Fill: bo tròn, transition width 0.6s ease-out
- Màu theo mức: 0-39% = xanh dương, 40-74% = vàng, 75-100% = xanh lá

### Modal
- Overlay: navy 55% opacity + backdrop-blur 6px
- Content: trắng, bo góc 14px, shadow lớn, max-width 520px
- Animation: fade overlay + slide-up content (0.35s)
- Đóng khi click vào backdrop
- Form: mỗi field có label (uppercase, nhỏ, slate) + input
- Input focus: viền xanh + glow `0 0 0 3px rgba(37,99,235,0.25)`
- Actions ở dưới cùng: flex, justify-content flex-end

### Toast Notifications
- Góc trên phải, stack xuống dưới
- Nền trắng, viền xám, bo góc 10px, shadow lớn
- **Border-left 4px** màu theo loại: xanh (success), đỏ (error)
- Animation: slide-in từ phải (0.35s), slide-out khi đóng (0.25s)
- Tự đóng sau 3 giây

### Empty State
- Center, padding 60px
- Title: 18px, slate, semi-bold
- Text: 14px, muted

---

## 6. Spacing System (8px grid)

```
4px    — gap nhỏ nhất (giữa label và input)
6px    — gap trong progress bar info, border-radius nhỏ
8px    — padding-top actions
10px   — gap buttons, padding input
12px   — gap giữa elements trong card header
14px   — padding input horizontal, border-radius lớn
16px   — gap trong card, gap grid
20px   — padding button horizontal, toast padding
24px   — padding card, padding trang, padding modal trên mobile
28px   — margin dashboard
32px   — padding header, padding modal desktop
```

---

## 7. Shadows

```
Nhẹ (card):     0 1px 3px rgba(30,58,95, 0.06)
Trung (hover):  0 4px 16px rgba(30,58,95, 0.08)
Nặng (modal):   0 12px 40px rgba(30,58,95, 0.12)
Card hover:     0 8px 30px rgba(30,58,95, 0.12)
Button glow:    0 4px 12px rgba(37,99,235, 0.25)
Input focus:    0 0 0 3px rgba(37,99,235, 0.25)
```

---

## 8. Animations

```
Transition nhanh:    0.15s ease          (hover button, focus input)
Transition chuẩn:    0.25s ease          (card hover, color change)
Transition mượt:     0.4s cubic-bezier(0.16, 1, 0.3, 1)   (modal, card enter)
Progress fill:       0.6s cubic-bezier(0.16, 1, 0.3, 1)

Card entrance:       fade-in + translateY(12px→0), stagger 0.05s
Modal overlay:       fade-in 0.25s
Modal content:       translateY(20px→0) + scale(0.97→1), 0.35s
Toast in:            translateX(40px→0), 0.35s
Toast out:           translateX(0→40px), 0.25s
Dashboard counter:   count-up 400ms, ease-out cubic
Card hover:          translateY(-2px)
```

---

## 9. Responsive Breakpoints

```
Desktop:   > 1024px    — grid 4 cột dashboard, multi-column cards
Tablet:    ≤ 1024px    — grid 2 cột dashboard
Mobile:    ≤ 768px     — header nhỏ hơn, 2 cột dashboard, 1 cột cards
Small:     ≤ 480px     — 2 cột dashboard, toolbar dọc
```

---

## 10. Prompt mẫu cho AI

Khi muốn tạo web mới với style này, copy đoạn dưới:

```
Tạo giao diện web theo phong cách Enterprise Navy:
- Font: Inter (Google Fonts)
- Header: gradient navy (#1e3a5f → #0f2744), chữ trắng uppercase
- Nền trang: #f1f5f9, card trắng #ffffff với shadow nhẹ và bo góc 10px
- Accent chính: #2563eb (Royal Blue), hover #1d4ed8
- Chữ chính: #1e293b, chữ phụ: #64748b
- Buttons 4 cấp: Primary (blue filled), Secondary (white outline), Accent (navy), Danger (red outline)
- Card-based layout responsive (CSS Grid auto-fill minmax 360px)
- Status badges dạng pill với màu semantic (green=success, amber=warning, gray=neutral)
- Modal: backdrop blur, slide-up animation, bo góc 14px
- Input focus: viền xanh + glow
- Toast notifications góc trên phải thay vì alert()
- Micro-animations: card entrance stagger, hover lift, counter animation
- Không dùng icon/emoji, thuần text chuyên nghiệp
- Responsive: 4→2→1 cột
```
